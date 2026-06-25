const TOURNAMENT = {
  facts: {
    title: "World Cup 2026",
    start: "2026-06-11",
    end: "2026-07-19",
    teams: 48,
    totalTournamentMatches: 104,
    trackedGroupMatches: 72,
    seededAt: "2026-06-12T14:30:00Z"
  },
  groups: {
    A: ["Mexico", "South Africa", "Korea Republic", "Czechia"],
    B: ["Canada", "Bosnia and Herzegovina", "Qatar", "Switzerland"],
    C: ["Brazil", "Morocco", "Haiti", "Scotland"],
    D: ["United States", "Paraguay", "Australia", "Turkiye"],
    E: ["Cote d'Ivoire", "Ecuador", "Germany", "Curacao"],
    F: ["Netherlands", "Japan", "Sweden", "Tunisia"],
    G: ["IR Iran", "New Zealand", "Belgium", "Egypt"],
    H: ["Saudi Arabia", "Uruguay", "Spain", "Cabo Verde"],
    I: ["France", "Senegal", "Iraq", "Norway"],
    J: ["Argentina", "Algeria", "Austria", "Jordan"],
    K: ["Portugal", "DR Congo", "Uzbekistan", "Colombia"],
    L: ["Ghana", "Panama", "England", "Croatia"]
  },
  matches: [
    match("m001", 1, "A", "2026-06-11T19:00:00Z", "Mexico City Stadium", "Mexico", "South Africa", "FT", 2, 0),
    match("m002", 2, "A", "2026-06-12T02:00:00Z", "Estadio Guadalajara", "Korea Republic", "Czechia", "FT", 2, 1),
    match("m003", 3, "B", "2026-06-12T19:00:00Z", "Toronto Stadium", "Canada", "Bosnia and Herzegovina"),
    match("m004", 4, "D", "2026-06-13T01:00:00Z", "Los Angeles Stadium", "United States", "Paraguay"),
    match("m005", 5, "B", "2026-06-13T19:00:00Z", "San Francisco Bay Area Stadium", "Qatar", "Switzerland"),
    match("m006", 6, "C", "2026-06-13T22:00:00Z", "New York New Jersey Stadium", "Brazil", "Morocco"),
    match("m007", 7, "C", "2026-06-14T01:00:00Z", "Boston Stadium", "Haiti", "Scotland"),
    match("m008", 8, "D", "2026-06-14T04:00:00Z", "BC Place Vancouver", "Australia", "Turkiye"),
    match("m009", 9, "E", "2026-06-14T17:00:00Z", "Houston Stadium", "Germany", "Curacao"),
    match("m010", 10, "F", "2026-06-14T20:00:00Z", "Dallas Stadium", "Netherlands", "Japan"),
    match("m011", 11, "E", "2026-06-14T23:00:00Z", "Philadelphia Stadium", "Cote d'Ivoire", "Ecuador"),
    match("m012", 12, "F", "2026-06-15T02:00:00Z", "Estadio Monterrey", "Sweden", "Tunisia"),
    match("m013", 13, "H", "2026-06-15T16:00:00Z", "Atlanta Stadium", "Spain", "Cabo Verde"),
    match("m014", 14, "G", "2026-06-15T19:00:00Z", "Seattle Stadium", "Belgium", "Egypt"),
    match("m015", 15, "H", "2026-06-15T22:00:00Z", "Miami Stadium", "Saudi Arabia", "Uruguay"),
    match("m016", 16, "G", "2026-06-16T01:00:00Z", "Los Angeles Stadium", "IR Iran", "New Zealand"),
    match("m017", 17, "I", "2026-06-16T19:00:00Z", "New York New Jersey Stadium", "France", "Senegal"),
    match("m018", 18, "I", "2026-06-16T22:00:00Z", "Boston Stadium", "Iraq", "Norway"),
    match("m019", 19, "J", "2026-06-17T01:00:00Z", "Kansas City Stadium", "Argentina", "Algeria"),
    match("m020", 20, "J", "2026-06-17T04:00:00Z", "San Francisco Bay Area Stadium", "Austria", "Jordan"),
    match("m021", 21, "K", "2026-06-17T17:00:00Z", "Houston Stadium", "Portugal", "DR Congo"),
    match("m022", 22, "L", "2026-06-17T20:00:00Z", "Dallas Stadium", "England", "Croatia"),
    match("m023", 23, "L", "2026-06-17T23:00:00Z", "Toronto Stadium", "Ghana", "Panama"),
    match("m024", 24, "K", "2026-06-18T02:00:00Z", "Mexico City Stadium", "Uzbekistan", "Colombia"),
    match("m025", 25, "A", "2026-06-18T16:00:00Z", "Atlanta Stadium", "Czechia", "South Africa"),
    match("m026", 26, "B", "2026-06-18T19:00:00Z", "Los Angeles Stadium", "Switzerland", "Bosnia and Herzegovina"),
    match("m027", 27, "B", "2026-06-18T22:00:00Z", "BC Place Vancouver", "Canada", "Qatar"),
    match("m028", 28, "A", "2026-06-19T01:00:00Z", "Estadio Guadalajara", "Mexico", "Korea Republic"),
    match("m029", 29, "D", "2026-06-19T19:00:00Z", "Seattle Stadium", "United States", "Australia"),
    match("m030", 30, "C", "2026-06-19T22:00:00Z", "Boston Stadium", "Scotland", "Morocco"),
    match("m031", 31, "C", "2026-06-20T00:30:00Z", "Philadelphia Stadium", "Brazil", "Haiti"),
    match("m032", 32, "D", "2026-06-20T03:00:00Z", "San Francisco Bay Area Stadium", "Turkiye", "Paraguay"),
    match("m033", 33, "F", "2026-06-20T17:00:00Z", "Houston Stadium", "Netherlands", "Sweden"),
    match("m034", 34, "E", "2026-06-20T20:00:00Z", "Toronto Stadium", "Germany", "Cote d'Ivoire"),
    match("m035", 35, "E", "2026-06-21T00:00:00Z", "Kansas City Stadium", "Ecuador", "Curacao"),
    match("m036", 36, "F", "2026-06-21T04:00:00Z", "Estadio Monterrey", "Tunisia", "Japan"),
    match("m037", 37, "H", "2026-06-21T16:00:00Z", "Atlanta Stadium", "Spain", "Saudi Arabia"),
    match("m038", 38, "G", "2026-06-21T19:00:00Z", "Los Angeles Stadium", "Belgium", "IR Iran"),
    match("m039", 39, "H", "2026-06-21T22:00:00Z", "Miami Stadium", "Uruguay", "Cabo Verde"),
    match("m040", 40, "G", "2026-06-22T01:00:00Z", "BC Place Vancouver", "New Zealand", "Egypt"),
    match("m041", 41, "I", "2026-06-22T18:00:00Z", "New York New Jersey Stadium", "Norway", "Senegal"),
    match("m042", 42, "I", "2026-06-22T21:00:00Z", "Philadelphia Stadium", "France", "Iraq"),
    match("m043", 43, "J", "2026-06-23T00:00:00Z", "Dallas Stadium", "Argentina", "Austria"),
    match("m044", 44, "J", "2026-06-23T03:00:00Z", "San Francisco Bay Area Stadium", "Jordan", "Algeria"),
    match("m045", 45, "L", "2026-06-23T17:00:00Z", "Boston Stadium", "England", "Ghana"),
    match("m046", 46, "L", "2026-06-23T20:00:00Z", "Toronto Stadium", "Panama", "Croatia"),
    match("m047", 47, "K", "2026-06-23T23:00:00Z", "Houston Stadium", "Portugal", "Uzbekistan"),
    match("m048", 48, "K", "2026-06-24T02:00:00Z", "Estadio Guadalajara", "Colombia", "DR Congo"),
    match("m049", 49, "C", "2026-06-24T18:00:00Z", "Miami Stadium", "Scotland", "Brazil"),
    match("m050", 50, "C", "2026-06-24T18:00:00Z", "Atlanta Stadium", "Morocco", "Haiti"),
    match("m051", 51, "B", "2026-06-24T22:00:00Z", "BC Place Vancouver", "Switzerland", "Canada"),
    match("m052", 52, "B", "2026-06-24T22:00:00Z", "Seattle Stadium", "Bosnia and Herzegovina", "Qatar"),
    match("m053", 53, "A", "2026-06-25T01:00:00Z", "Mexico City Stadium", "Czechia", "Mexico"),
    match("m054", 54, "A", "2026-06-25T01:00:00Z", "Estadio Monterrey", "South Africa", "Korea Republic"),
    match("m055", 55, "E", "2026-06-25T18:00:00Z", "Philadelphia Stadium", "Curacao", "Cote d'Ivoire"),
    match("m056", 56, "E", "2026-06-25T18:00:00Z", "New York New Jersey Stadium", "Ecuador", "Germany"),
    match("m057", 57, "F", "2026-06-25T22:00:00Z", "Dallas Stadium", "Japan", "Sweden"),
    match("m058", 58, "F", "2026-06-25T22:00:00Z", "Kansas City Stadium", "Tunisia", "Netherlands"),
    match("m059", 59, "D", "2026-06-26T02:00:00Z", "Los Angeles Stadium", "Turkiye", "United States"),
    match("m060", 60, "D", "2026-06-26T02:00:00Z", "San Francisco Bay Area Stadium", "Paraguay", "Australia"),
    match("m061", 61, "I", "2026-06-26T18:00:00Z", "Boston Stadium", "Norway", "France"),
    match("m062", 62, "I", "2026-06-26T18:00:00Z", "Toronto Stadium", "Senegal", "Iraq"),
    match("m063", 63, "G", "2026-06-26T22:00:00Z", "Seattle Stadium", "Egypt", "IR Iran"),
    match("m064", 64, "G", "2026-06-26T22:00:00Z", "BC Place Vancouver", "New Zealand", "Belgium"),
    match("m065", 65, "H", "2026-06-27T02:00:00Z", "Houston Stadium", "Cabo Verde", "Saudi Arabia"),
    match("m066", 66, "H", "2026-06-27T02:00:00Z", "Estadio Guadalajara", "Uruguay", "Spain"),
    match("m067", 67, "L", "2026-06-27T18:00:00Z", "New York New Jersey Stadium", "Panama", "England"),
    match("m068", 68, "L", "2026-06-27T18:00:00Z", "Philadelphia Stadium", "Croatia", "Ghana"),
    match("m069", 69, "J", "2026-06-27T22:00:00Z", "Kansas City Stadium", "Algeria", "Austria"),
    match("m070", 70, "J", "2026-06-27T22:00:00Z", "Dallas Stadium", "Jordan", "Argentina"),
    match("m071", 71, "K", "2026-06-28T02:00:00Z", "Miami Stadium", "Colombia", "Portugal"),
    match("m072", 72, "K", "2026-06-28T02:00:00Z", "Atlanta Stadium", "DR Congo", "Uzbekistan")
  ]
};

window.WC2026_TOURNAMENT = TOURNAMENT;

const state = {
  data: clone(TOURNAMENT),
  activeFilter: "results",
  lastRemoteCheck: null,
  syncMessage: "Local seed data is loaded."
};

function match(id, number, group, kickoff, venue, home, away, status = "Scheduled", homeScore = null, awayScore = null) {
  return { id, number, group, kickoff, venue, home, away, status, homeScore, awayScore };
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
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
  return new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(iso));
}

function formatUpdated(iso) {
  if (!iso) return "Updated locally";
  return `Last checked ${formatShortDate(iso)}`;
}

function statusBadge(item) {
  const stateName = getMatchState(item);
  if (stateName === "result") return '<span class="badge result">FT</span>';
  if (stateName === "live") return '<span class="badge live">LIVE</span>';
  return '<span class="badge">Group ' + item.group + '</span>';
}

function score(value) {
  return value === null || value === undefined ? "-" : value;
}

function renderMatchCard(item, featured = false) {
  const className = featured ? "feature-match" : "match-card";
  return `
    <article class="${className}">
      <div>
        <div class="match-meta">
          ${statusBadge(item)}
          <span>${formatKickoff(item.kickoff)}</span>
        </div>
        <div class="match-teams">
          <div class="team-line"><span>${item.home}</span><span class="score">${score(item.homeScore)}</span></div>
          <div class="team-line"><span>${item.away}</span><span class="score">${score(item.awayScore)}</span></div>
        </div>
        <div class="match-location">${item.venue}</div>
      </div>
      ${featured ? "" : `<div class="match-number">M${item.number}</div>`}
    </article>
  `;
}

function getVisibleMatches() {
  const now = new Date();
  const matches = [...state.data.matches].sort(byKickoff);
  if (state.activeFilter === "today") {
    return matches.filter((item) => sameLocalDay(item.kickoff, now));
  }
  if (state.activeFilter === "upcoming") {
    return matches.filter((item) => getMatchState(item) !== "result" && new Date(item.kickoff) >= now).slice(0, 18);
  }
  if (state.activeFilter === "results") {
    return matches.filter((item) => getMatchState(item) === "result");
  }
  return matches;
}

function renderHeroSignals() {
  const nextElement = document.querySelector("#signal-next");
  const todayElement = document.querySelector("#signal-today");
  const completeElement = document.querySelector("#signal-complete");
  if (!nextElement && !todayElement && !completeElement) return;

  const now = new Date();
  const matches = [...state.data.matches].sort(byKickoff);
  const today = matches.filter((item) => sameLocalDay(item.kickoff, now));
  const complete = matches.filter((item) => getMatchState(item) === "result");
  const next = matches.find((item) => getMatchState(item) !== "result" && new Date(item.kickoff) >= now)
    || matches.find((item) => getMatchState(item) !== "result");

  if (nextElement) nextElement.textContent = next ? `${next.home} vs ${next.away}` : "Knockouts";
  if (todayElement) todayElement.textContent = today.length;
  if (completeElement) completeElement.textContent = complete.length;
}

function renderMatchRail() {
  const container = document.querySelector("#match-rail");
  if (!container) return;

  const now = new Date();
  const matches = [...state.data.matches].sort(byKickoff);
  const featured = matches
    .filter((item) => sameLocalDay(item.kickoff, now) || (getMatchState(item) !== "result" && new Date(item.kickoff) >= now))
    .slice(0, 3);
  container.innerHTML = featured.map((item) => renderMatchCard(item, true)).join("");
}

function renderMatches() {
  const container = document.querySelector("#match-list");
  if (!container) return;

  const visible = getVisibleMatches();
  container.innerHTML = visible.length
    ? visible.map((item) => renderMatchCard(item)).join("")
    : '<div class="empty-state">No matches in this view yet.</div>';
}

function emptyRecord(team) {
  return { team, played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, pts: 0 };
}

function computeGroup(groupKey) {
  const records = new Map(state.data.groups[groupKey].map((team) => [team, emptyRecord(team)]));
  state.data.matches
    .filter((item) => item.group === groupKey && getMatchState(item) === "result")
    .forEach((item) => {
      const home = records.get(item.home);
      const away = records.get(item.away);
      if (!home || !away) return;

      home.played += 1;
      away.played += 1;
      home.gf += item.homeScore;
      home.ga += item.awayScore;
      away.gf += item.awayScore;
      away.ga += item.homeScore;
      home.gd = home.gf - home.ga;
      away.gd = away.gf - away.ga;

      if (item.homeScore > item.awayScore) {
        home.won += 1;
        away.lost += 1;
        home.pts += 3;
      } else if (item.homeScore < item.awayScore) {
        away.won += 1;
        home.lost += 1;
        away.pts += 3;
      } else {
        home.drawn += 1;
        away.drawn += 1;
        home.pts += 1;
        away.pts += 1;
      }
    });

  return [...records.values()].sort((a, b) => {
    return b.pts - a.pts
      || b.gd - a.gd
      || b.gf - a.gf
      || a.team.localeCompare(b.team);
  });
}

function renderGroups() {
  const container = document.querySelector("#group-grid");
  if (!container) return;

  const html = Object.keys(state.data.groups).map((groupKey) => {
    const rows = computeGroup(groupKey).map((row) => `
      <tr>
        <td>${row.team}</td>
        <td>${row.played}</td>
        <td>${row.won}</td>
        <td>${row.drawn}</td>
        <td>${row.lost}</td>
        <td>${row.gd}</td>
        <td><strong>${row.pts}</strong></td>
      </tr>
    `).join("");

    return `
      <article class="group-card">
        <div class="group-header">
          <h3>Group ${groupKey}</h3>
          <span>${state.data.groups[groupKey].length} teams</span>
        </div>
        <div class="table-scroll">
          <table class="standings">
            <thead>
              <tr>
                <th>Team</th>
                <th>P</th>
                <th>W</th>
                <th>D</th>
                <th>L</th>
                <th>GD</th>
                <th>Pts</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </article>
    `;
  }).join("");

  container.innerHTML = html;
}

function renderSync() {
  const syncState = document.querySelector("#sync-state");
  const syncDetail = document.querySelector("#sync-detail");
  const lastUpdated = document.querySelector("#last-updated");
  if (syncState) syncState.textContent = state.lastRemoteCheck ? "Auto sync active" : "Auto sync local";
  if (syncDetail) syncDetail.textContent = state.syncMessage;
  if (lastUpdated) lastUpdated.textContent = formatUpdated(state.lastRemoteCheck || state.data.facts.seededAt);
}

function renderAll() {
  renderHeroSignals();
  renderMatchRail();
  renderMatches();
  renderGroups();
  renderSync();
}

function mergeOverrides(payload) {
  if (!payload || typeof payload !== "object") return false;
  let changed = false;
  if (Array.isArray(payload.matches)) {
    payload.matches.forEach((override) => {
      const item = state.data.matches.find((matchItem) => matchItem.id === override.id)
        || state.data.matches.find((matchItem) => sameTeam(matchItem.home, override.home) && sameTeam(matchItem.away, override.away));
      if (!item) return;
      Object.assign(item, {
        status: override.status ?? item.status,
        homeScore: override.homeScore ?? item.homeScore,
        awayScore: override.awayScore ?? item.awayScore
      });
      changed = true;
    });
  }
  if (payload.updatedAt) {
    state.lastRemoteCheck = payload.updatedAt;
  }
  if (payload.source) {
    state.syncMessage = payload.source;
  }
  return changed;
}

function sameTeam(a, b) {
  if (!a || !b) return false;
  return normalizeTeam(a) === normalizeTeam(b);
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

async function refreshData(manual = false) {
  state.data = clone(TOURNAMENT);
  const syncState = document.querySelector("#sync-state");
  if (syncState) syncState.textContent = manual ? "Refreshing" : "Auto sync checking";

  let localUpdated = false;
  try {
    const local = await fetchJson(`data/live-overrides.json?v=${Date.now()}`, 4000);
    localUpdated = mergeOverrides(local);
  } catch (error) {
    if (window.WC2026_LIVE_OVERRIDES) {
      localUpdated = mergeOverrides(window.WC2026_LIVE_OVERRIDES);
      state.syncMessage = "Loaded embedded local score updates.";
    } else {
      state.syncMessage = "Local override file is unavailable from this view.";
    }
  }

  try {
    const wikiUrl = "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=revisions&rvprop=timestamp%7Cids&titles=2026_FIFA_World_Cup";
    const wiki = await fetchJson(wikiUrl, 8000);
    const page = Object.values(wiki.query.pages)[0];
    if (page?.revisions?.[0]?.timestamp) {
      state.lastRemoteCheck = new Date().toISOString();
      const revisionTime = formatShortDate(page.revisions[0].timestamp);
      state.syncMessage = localUpdated
        ? `Loaded local updates and checked Wikipedia revision from ${revisionTime}.`
        : `Checked Wikipedia revision from ${revisionTime}.`;
    }
  } catch (error) {
    if (!localUpdated) state.syncMessage = "Using built-in seed data until the next successful check.";
  }

  renderAll();
}

function bindFilters() {
  document.querySelectorAll(".filter-tab").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeFilter = button.dataset.filter;
      document.querySelectorAll(".filter-tab").forEach((item) => item.classList.toggle("is-active", item === button));
      renderMatches();
    });
  });
}

function init() {
  bindFilters();
  if (window.WC2026_LIVE_OVERRIDES) {
    mergeOverrides(window.WC2026_LIVE_OVERRIDES);
  }
  renderAll();
  refreshData();
  const refreshButton = document.querySelector("#refresh-button");
  if (refreshButton) refreshButton.addEventListener("click", () => refreshData(true));
  window.setInterval(() => refreshData(), 10 * 60 * 1000);
}

if (document.querySelector("#signal-next, #match-list, #group-grid, #sync-state")) {
  init();
}
