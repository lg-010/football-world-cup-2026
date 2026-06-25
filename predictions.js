(() => {
  const tournament = window.WC2026_TOURNAMENT;
  const predictionState = {
    data: cloneValue(tournament),
    predictions: [],
    activeFilter: "next",
    updatedAt: tournament?.facts?.seededAt || null,
    syncMessage: "Local prediction model is ready.",
    modelName: "Poisson rating and form model"
  };

  const TEAM_RATINGS = {
    Argentina: 96,
    France: 95,
    Spain: 94,
    England: 93,
    Brazil: 92,
    Portugal: 91,
    Netherlands: 90,
    Belgium: 89,
    Germany: 89,
    Uruguay: 88,
    Croatia: 87,
    Morocco: 87,
    Colombia: 86,
    Switzerland: 85,
    Japan: 84,
    Sweden: 84,
    Senegal: 83,
    Austria: 83,
    "United States": 82,
    Ecuador: 82,
    "IR Iran": 81,
    "Cote d'Ivoire": 81,
    Australia: 80,
    Canada: 79,
    Paraguay: 78,
    Turkiye: 78,
    Norway: 78,
    Scotland: 77,
    "Korea Republic": 77,
    Egypt: 77,
    Tunisia: 76,
    Mexico: 76,
    Algeria: 76,
    Czechia: 75,
    Qatar: 74,
    Ghana: 74,
    "Saudi Arabia": 73,
    "South Africa": 73,
    Panama: 72,
    Uzbekistan: 72,
    Haiti: 70,
    Iraq: 70,
    "New Zealand": 69,
    "Bosnia and Herzegovina": 69,
    "DR Congo": 69,
    "Cabo Verde": 68,
    Jordan: 67,
    Curacao: 66
  };

  const HOST_TEAMS = new Set(["Canada", "Mexico", "United States"]);
  const DEFAULT_SOURCES = [
    {
      label: "FIFA tournament hub",
      url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026"
    },
    {
      label: "Wikipedia tournament page",
      url: "https://en.wikipedia.org/wiki/2026_FIFA_World_Cup"
    },
    {
      label: "Guardian Canada 1-1 Bosnia report",
      url: "https://www.theguardian.com/football/live/2026/jun/12/canada-bosnia-and-herzegovina-world-cup-2026-live"
    },
    {
      label: "NY Post USA-Paraguay preview",
      url: "https://nypost.com/2026/06/12/betting/usa-vs-paraguay-prediction-world-cup-odds-pick-best-bets/"
    }
  ];

  function cloneValue(value) {
    return JSON.parse(JSON.stringify(value || {}));
  }

  function byKickoff(a, b) {
    return new Date(a.kickoff) - new Date(b.kickoff);
  }

  function sameLocalDay(iso, date = new Date()) {
    const itemDate = new Date(iso);
    return itemDate.getFullYear() === date.getFullYear()
      && itemDate.getMonth() === date.getMonth()
      && itemDate.getDate() === date.getDate();
  }

  function getMatchState(item) {
    if (item.status === "FT") return "result";
    if (item.status === "LIVE") return "live";
    return "scheduled";
  }

  function formatKickoff(iso) {
    return new Intl.DateTimeFormat(undefined, {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }).format(new Date(iso));
  }

  function formatShortDate(iso) {
    if (!iso) return "Updated locally";
    return new Intl.DateTimeFormat(undefined, {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }).format(new Date(iso));
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function normalizeTeam(value) {
    return String(value)
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, " ")
      .replace(/\b(?:united states|usa)\b/g, "usa")
      .replace(/\b(?:korea republic|south korea)\b/g, "south korea")
      .replace(/\bcote d ivoire\b/g, "ivory coast")
      .replace(/\bturkiye\b/g, "turkey")
      .trim();
  }

  function sameTeam(a, b) {
    if (!a || !b) return false;
    return normalizeTeam(a) === normalizeTeam(b);
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function probabilityClass(value) {
    const percent = clamp(Number(value), 0, 100);
    const step = Math.round(percent / 5) * 5;
    return `probability-fill probability-fill-${step}`;
  }

  function getRating(team) {
    return TEAM_RATINGS[team] || 72;
  }

  function emptyStats() {
    return { played: 0, points: 0, gf: 0, ga: 0, gd: 0 };
  }

  function computeStats(matches) {
    const stats = new Map();
    matches.forEach((item) => {
      if (!stats.has(item.home)) stats.set(item.home, emptyStats());
      if (!stats.has(item.away)) stats.set(item.away, emptyStats());
      if (getMatchState(item) !== "result" || item.homeScore == null || item.awayScore == null) return;

      const home = stats.get(item.home);
      const away = stats.get(item.away);
      home.played += 1;
      away.played += 1;
      home.gf += Number(item.homeScore);
      home.ga += Number(item.awayScore);
      away.gf += Number(item.awayScore);
      away.ga += Number(item.homeScore);
      home.gd = home.gf - home.ga;
      away.gd = away.gf - away.ga;

      if (item.homeScore > item.awayScore) {
        home.points += 3;
      } else if (item.homeScore < item.awayScore) {
        away.points += 3;
      } else {
        home.points += 1;
        away.points += 1;
      }
    });
    return stats;
  }

  function formBoost(team, stats) {
    const row = stats.get(team) || emptyStats();
    if (!row.played) return 0;
    const pointsPerMatch = row.points / row.played;
    const goalsPerMatch = row.gf / row.played;
    return (pointsPerMatch * 2.4) + (row.gd * 3.2) + (goalsPerMatch * 0.8);
  }

  function strength(team, stats) {
    const hostBoost = HOST_TEAMS.has(team) ? 4 : 0;
    return getRating(team) + hostBoost + formBoost(team, stats);
  }

  function hashUnit(value) {
    let hash = 2166136261;
    for (let index = 0; index < value.length; index += 1) {
      hash ^= value.charCodeAt(index);
      hash = Math.imul(hash, 16777619);
    }
    return ((hash >>> 0) % 10000) / 10000;
  }

  function poissonProbability(lambda, goals) {
    let probability = Math.exp(-lambda);
    for (let index = 1; index <= goals; index += 1) {
      probability *= lambda / index;
    }
    return probability;
  }

  function outcomeKeyFromScore(homeGoals, awayGoals) {
    if (homeGoals > awayGoals) return "home";
    if (homeGoals < awayGoals) return "away";
    return "draw";
  }

  function getPreferredOutcome(item, homeWinPct, drawPct, awayWinPct) {
    const options = [
      { key: "home", label: item.home, probability: homeWinPct },
      { key: "draw", label: "Draw", probability: drawPct },
      { key: "away", label: item.away, probability: awayWinPct }
    ];
    return options.reduce(
      (best, candidate) => (candidate.probability > best.probability ? candidate : best),
      options[0]
    );
  }

  function chooseScoreline(item, homeXg, awayXg, homeWinPct, drawPct, awayWinPct) {
    const candidates = [];
    const preferredOutcome = getPreferredOutcome(item, homeWinPct, drawPct, awayWinPct);

    for (let homeGoals = 0; homeGoals <= 5; homeGoals += 1) {
      for (let awayGoals = 0; awayGoals <= 5; awayGoals += 1) {
        const outcomeKey = outcomeKeyFromScore(homeGoals, awayGoals);
        const resultWeight = outcomeKey === "home"
          ? homeWinPct
          : outcomeKey === "away"
            ? awayWinPct
            : drawPct;
        const exactScoreProbability = poissonProbability(homeXg, homeGoals) * poissonProbability(awayXg, awayGoals);
        const tieBreaker = 1 + hashUnit(`${item.id}:${homeGoals}-${awayGoals}`) * 0.015;
        const score = exactScoreProbability * (Math.max(resultWeight, 1) / 100) * tieBreaker;

        candidates.push({ home: homeGoals, away: awayGoals, score, outcomeKey });
      }
    }

    const filteredCandidates = candidates.filter((candidate) => candidate.outcomeKey === preferredOutcome.key);
    if (!filteredCandidates.length) {
      if (preferredOutcome.key === "home") return { home: 1, away: 0 };
      if (preferredOutcome.key === "away") return { home: 0, away: 1 };
      return { home: 1, away: 1 };
    }

    filteredCandidates.sort((a, b) => b.score - a.score);
    const bestScore = filteredCandidates[0]?.score || 0;
    const plausible = filteredCandidates
      .filter((candidate) => candidate.score >= bestScore * 0.42)
      .slice(0, 8);
    const poolSize = Math.min(plausible.length, 6);
    const pickIndex = Math.min(
      poolSize - 1,
      Math.floor(hashUnit(`${item.id}:scoreline`) * poolSize)
    );
    return plausible[pickIndex] || candidates[0] || { home: 0, away: 0 };
  }

  function buildPrediction(item, stats) {
    const homeStrength = strength(item.home, stats);
    const awayStrength = strength(item.away, stats);
    const diff = homeStrength - awayStrength;
    const drawPct = Math.round(clamp(25 - Math.abs(diff) * 0.22, 15, 28));
    const homeShare = 1 / (1 + Math.exp(-diff / 18));
    const homeWinPct = Math.round((100 - drawPct) * homeShare);
    const awayWinPct = 100 - drawPct - homeWinPct;
    const homeStats = stats.get(item.home) || emptyStats();
    const awayStats = stats.get(item.away) || emptyStats();
    const homeGoalsFor = homeStats.played ? homeStats.gf / homeStats.played : 1.1;
    const awayGoalsFor = awayStats.played ? awayStats.gf / awayStats.played : 1.1;
    const formTotal = homeStats.played || awayStats.played ? ((homeGoalsFor + awayGoalsFor) - 2.2) * 0.12 : 0;
    const averageRating = (getRating(item.home) + getRating(item.away)) / 2;
    const matchupTempo = (hashUnit(`${item.id}:${item.home}:${item.away}`) - 0.5) * 0.55;
    const totalXg = clamp(
      2.12 + (averageRating - 76) * 0.018 + Math.abs(diff) * 0.018 + formTotal + matchupTempo,
      1.45,
      3.85
    );
    const goalShare = clamp(1 / (1 + Math.exp(-diff / 24)), 0.18, 0.82);
    const homeXg = clamp(totalXg * goalShare, 0.15, 3.8);
    const awayXg = clamp(totalXg - homeXg, 0.15, 3.4);
    const preferredOutcome = getPreferredOutcome(item, homeWinPct, drawPct, awayWinPct);
    const scoreline = chooseScoreline(item, homeXg, awayXg, homeWinPct, drawPct, awayWinPct);
    const predictedHomeScore = scoreline.home;
    const predictedAwayScore = scoreline.away;
    const outcome = preferredOutcome.label;
    const pickProbability = preferredOutcome.probability;

    const edgeTeam = diff >= 0 ? item.home : item.away;
    const edgeSize = Math.abs(diff) < 6 ? "slight" : Math.abs(diff) < 15 ? "clear" : "strong";
    const formTeams = [item.home, item.away].filter((team) => (stats.get(team)?.played || 0) > 0);
    const formText = formTeams.length
      ? `${formTeams.join(" and ")} group form is included`
      : "pre-tournament strength drives the first read";

    return {
      id: item.id,
      number: item.number,
      group: item.group,
      kickoff: item.kickoff,
      venue: item.venue,
      home: item.home,
      away: item.away,
      predictedHomeScore,
      predictedAwayScore,
      homeWinPct,
      drawPct,
      awayWinPct,
      confidencePct: pickProbability,
      confidenceLabel: pickProbability >= 62 ? "High" : pickProbability >= 54 ? "Medium" : "Low",
      outcome,
      rationale: `${edgeTeam} has a ${edgeSize} model edge; ${formText}.`,
      model: predictionState.modelName
    };
  }

  function buildPredictions() {
    const matches = [...(predictionState.data.matches || [])].sort(byKickoff);
    const stats = computeStats(matches);
    return matches
      .filter((item) => getMatchState(item) !== "result")
      .map((item) => buildPrediction(item, stats));
  }

  function mergeMatchOverrides(payload) {
    if (!payload || !Array.isArray(payload.matches)) return false;
    let changed = false;
    payload.matches.forEach((override) => {
      const item = predictionState.data.matches.find((matchItem) => matchItem.id === override.id)
        || predictionState.data.matches.find((matchItem) => sameTeam(matchItem.home, override.home) && sameTeam(matchItem.away, override.away));
      if (!item) return;
      Object.assign(item, {
        status: override.status ?? item.status,
        homeScore: override.homeScore ?? item.homeScore,
        awayScore: override.awayScore ?? item.awayScore
      });
      changed = true;
    });
    return changed;
  }

  function mergePredictionPayload(payload, generated) {
    if (!payload || typeof payload !== "object") return generated;
    if (payload.updatedAt) predictionState.updatedAt = payload.updatedAt;
    if (payload.source) predictionState.syncMessage = payload.source;
    if (payload.model) predictionState.modelName = payload.model;
    predictionState.sources = Array.isArray(payload.sources) && payload.sources.length ? payload.sources : DEFAULT_SOURCES;

    if (!Array.isArray(payload.predictions)) return generated;
    const overrideMap = new Map(payload.predictions.map((item) => [item.id, item]));
    return generated.map((item) => {
      const override = overrideMap.get(item.id);
      return override ? { ...item, ...override } : item;
    });
  }

  function getVisiblePredictions() {
    const now = new Date();
    const spotlight = getSpotlightPrediction();
    const upcoming = [...predictionState.predictions]
      .filter((item) => new Date(item.kickoff) >= now)
      .filter((item) => item.id !== spotlight?.id)
      .sort(byKickoff);

    if (predictionState.activeFilter === "today") {
      return upcoming.filter((item) => sameLocalDay(item.kickoff, now));
    }
    if (predictionState.activeFilter === "confident") {
      return upcoming.filter((item) => Number(item.confidencePct) >= 58).slice(0, 24);
    }
    if (predictionState.activeFilter === "all") {
      return upcoming;
    }
    return upcoming.slice(0, 12);
  }

  function probabilityRows(item) {
    const rows = [
      [item.home, item.homeWinPct],
      ["Draw", item.drawPct],
      [item.away, item.awayWinPct]
    ];
    return rows.map(([label, value]) => `
      <div class="probability-row">
        <div>
          <span>${escapeHtml(label)}</span>
          <strong>${Number(value)}%</strong>
        </div>
        <span class="probability-track"><span class="${probabilityClass(value)}"></span></span>
      </div>
    `).join("");
  }

  function renderPredictionCard(item, spotlight = false) {
    const className = spotlight ? "prediction-card prediction-card-spotlight" : "prediction-card";
    return `
      <article class="${className}">
        <div class="prediction-card-head">
          <div class="match-meta">
            <span class="badge">Group ${escapeHtml(item.group)}</span>
            <span>${escapeHtml(formatKickoff(item.kickoff))}</span>
          </div>
          <span class="confidence-pill">${escapeHtml(item.confidenceLabel)} ${Number(item.confidencePct)}%</span>
        </div>
        <div class="prediction-scoreline">
          <div>
            <span>${escapeHtml(item.home)}</span>
            <strong>${Number(item.predictedHomeScore)}</strong>
          </div>
          <div>
            <span>${escapeHtml(item.away)}</span>
            <strong>${Number(item.predictedAwayScore)}</strong>
          </div>
        </div>
        <div class="prediction-detail">
          <span>${escapeHtml(item.venue)}</span>
          <span>Pick: ${escapeHtml(item.outcome)}</span>
        </div>
        <div class="probability-list">${probabilityRows(item)}</div>
        <p class="prediction-rationale">${escapeHtml(item.rationale)}</p>
      </article>
    `;
  }

  function renderSummary() {
    const upcoming = [...predictionState.predictions]
      .filter((item) => new Date(item.kickoff) >= new Date())
      .sort(byKickoff);
    const next = upcoming[0];
    const averageConfidence = upcoming.length
      ? Math.round(upcoming.reduce((total, item) => total + Number(item.confidencePct || 0), 0) / upcoming.length)
      : 0;
    const today = upcoming.filter((item) => sameLocalDay(item.kickoff)).length;

    const summary = [
      ["Next pick", next ? `${next.home} ${next.predictedHomeScore}-${next.predictedAwayScore} ${next.away}` : "Knockouts"],
      ["Today", String(today)],
      ["Avg confidence", `${averageConfidence}%`],
      ["Model", predictionState.modelName.replace("Local ", "")]
    ];

    document.querySelector("#prediction-summary").innerHTML = summary.map(([label, value]) => `
      <div>
        <span class="signal-label">${escapeHtml(label)}</span>
        <span class="signal-value">${escapeHtml(value)}</span>
      </div>
    `).join("");
  }

  function renderSpotlight() {
    const next = getSpotlightPrediction();
    document.querySelector("#prediction-spotlight").innerHTML = next
      ? renderPredictionCard(next, true)
      : '<div class="empty-state">No upcoming predictions available.</div>';
  }

  function getSpotlightPrediction() {
    return [...predictionState.predictions]
      .filter((item) => new Date(item.kickoff) >= new Date())
      .sort(byKickoff)[0];
  }

  function renderPredictionList() {
    const visible = getVisiblePredictions();
    document.querySelector("#prediction-list").innerHTML = visible.length
      ? visible.map((item) => renderPredictionCard(item)).join("")
      : '<div class="empty-state">No predictions in this view yet.</div>';
  }

  function renderSources() {
    const sources = predictionState.sources || DEFAULT_SOURCES;
    document.querySelector("#prediction-sources").innerHTML = sources.map((source) => `
      <a href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer">${escapeHtml(source.label)}</a>
    `).join("");
  }

  function renderSync() {
    document.querySelector("#prediction-sync-state").textContent = "Prediction sync active";
    document.querySelector("#prediction-sync-detail").textContent = predictionState.syncMessage;
    document.querySelector("#prediction-last-updated").textContent = `Last model update ${formatShortDate(predictionState.updatedAt)}`;
  }

  function renderAll() {
    renderSummary();
    renderSpotlight();
    renderPredictionList();
    renderSources();
    renderSync();
  }

  async function fetchJson(url, timeout = 8000) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeout);
    try {
      const response = await fetch(url, { cache: "no-store", signal: controller.signal });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.json();
    } finally {
      clearTimeout(timer);
    }
  }

  async function refreshPredictions(manual = false) {
    document.querySelector("#prediction-sync-state").textContent = manual ? "Refreshing predictions" : "Prediction sync checking";
    predictionState.data = cloneValue(tournament);

    let localMatchUpdates = false;
    if (window.WC2026_LIVE_OVERRIDES) {
      localMatchUpdates = mergeMatchOverrides(window.WC2026_LIVE_OVERRIDES);
      if (window.WC2026_LIVE_OVERRIDES.updatedAt) {
        predictionState.updatedAt = window.WC2026_LIVE_OVERRIDES.updatedAt;
      }
    }

    try {
      const livePayload = await fetchJson(`data/live-overrides.json?v=${Date.now()}`, 4000);
      localMatchUpdates = mergeMatchOverrides(livePayload) || localMatchUpdates;
      if (livePayload.updatedAt) predictionState.updatedAt = livePayload.updatedAt;
    } catch (error) {
      predictionState.syncMessage = localMatchUpdates
        ? "Generated predictions from embedded local match updates."
        : "Using built-in match data for predictions.";
    }

    let predictions = buildPredictions();
    try {
      const predictionPayload = await fetchJson(`data/predictions.json?v=${Date.now()}`, 4000);
      predictions = mergePredictionPayload(predictionPayload, predictions);
    } catch (error) {
      predictionState.syncMessage = localMatchUpdates
        ? "Generated predictions from current local match updates."
        : "Generated predictions from built-in seed data.";
      predictionState.sources = DEFAULT_SOURCES;
    }

    predictionState.predictions = predictions.sort(byKickoff);
    renderAll();
  }

  function bindFilters() {
    document.querySelectorAll("[data-prediction-filter]").forEach((button) => {
      button.addEventListener("click", () => {
        predictionState.activeFilter = button.dataset.predictionFilter;
        document.querySelectorAll("[data-prediction-filter]").forEach((item) => {
          item.classList.toggle("is-active", item === button);
        });
        renderPredictionList();
      });
    });
  }

  function initPredictions() {
    if (!tournament?.matches?.length) {
      document.querySelector("#prediction-list").innerHTML = '<div class="empty-state">Prediction data could not load.</div>';
      return;
    }

    bindFilters();
    predictionState.predictions = buildPredictions();
    predictionState.sources = DEFAULT_SOURCES;
    renderAll();
    refreshPredictions();
    document.querySelector("#prediction-refresh").addEventListener("click", () => refreshPredictions(true));
    window.setInterval(() => refreshPredictions(), 10 * 60 * 1000);
  }

  initPredictions();
})();
