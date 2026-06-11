import './style.css';
import { interventions } from './data/interventions.js';
import { disorders, searchDisorders } from './data/disorders.js';
import { expandQuery } from './data/synonyms.js';

// State
let state = {
  screen: 'search',
  query: '',
  selectedDisorder: null,
  matchedDisorders: [],
  selectedIntervention: null,
  currentStep: 0,
};

// Quick picks shown on start screen
const quickPicks = [
  'Phobie', 'Angst', 'Trauma', 'Innerer Konflikt',
  'Selbstwert', 'Burnout', 'Trauer', 'Zwang',
];

function render() {
  document.getElementById('app').innerHTML = buildHTML();
  attachEvents();
  const input = document.getElementById('search-input');
  if (input && state.screen === 'search') {
    input.value = state.query;
    setTimeout(() => input.focus(), 50);
  }
}

function buildHTML() {
  return `
    <header class="app-header">
      <img src="inventor-logo.webp" alt="Inventor" class="app-logo" />
    </header>

    ${buildSearchScreen()}
    ${buildResultsScreen()}
    ${buildSessionScreen()}
  `;
}

function buildSearchScreen() {
  const isActive = state.screen === 'search';
  return `
  <section class="screen ${isActive ? 'active' : ''}" id="screen-search">
    <p class="search-label">Womit kommt der Klient heute?</p>
    <p class="search-sublabel">Gib ein Stichwort ein – die App schlägt passende NLP-Interventionen vor.</p>

    <div class="search-input-wrap">
      <input
        type="text"
        id="search-input"
        class="search-input"
        placeholder="z.B. Angst, Phobie, Selbstwert …"
        autocomplete="off"
        value="${escapeHtml(state.query)}"
      />
      <button class="btn btn-primary" id="btn-search">Suchen</button>
    </div>

    <div class="quick-picks">
      <div class="quick-picks-label">Häufige Themen</div>
      <div class="quick-chips">
        ${quickPicks.map(p => `<button class="chip" data-pick="${escapeHtml(p)}">${escapeHtml(p)}</button>`).join('')}
      </div>
    </div>

    <div class="quick-picks" style="margin-top:28px;">
      <div class="quick-picks-label">Interventionen</div>
      <div class="quick-chips">
        ${interventions.map(i => `<button class="chip chip-intervention" data-intervention-direct="${i.id}">${escapeHtml(i.titel)}</button>`).join('')}
      </div>
    </div>
  </section>`;
}

function buildResultsScreen() {
  const isActive = state.screen === 'results';

  if (!isActive) return `<section class="screen" id="screen-results"></section>`;

  const disorder = state.selectedDisorder;
  const interventionIds = disorder ? disorder.interventionen : [];
  const matchedInterventions = interventionIds
    .map(id => interventions.find(i => i.id === id))
    .filter(Boolean);

  const otherDisorders = state.matchedDisorders
    .filter(d => d.id !== disorder?.id)
    .slice(0, 6);

  const interventionCards = matchedInterventions.length > 0
    ? matchedInterventions.map(buildInterventionCard).join('')
    : `<div class="no-results"><p>Für dieses Thema wurden keine direkten Interventionen gefunden.</p></div>`;

  const disorderName = disorder ? disorder.label : state.query;

  return `
  <section class="screen active" id="screen-results">
    <div class="results-back">
      <button class="btn btn-ghost" id="btn-back-to-search">← Neue Suche</button>
    </div>

    <div class="results-header">
      <div class="context-label">Passende Interventionen für</div>
      <div class="disorder-name">${escapeHtml(disorderName)}</div>
      ${state.query && disorder && !disorder.keywords.some(k => state.query.toLowerCase().includes(k) || k.includes(state.query.toLowerCase()))
        ? `<div class="thesaurus-hint">Thematisch zugeordnet aus: <em>${escapeHtml(state.query)}</em></div>`
        : ''}
    </div>

    <div class="intervention-list">
      ${interventionCards}
    </div>

    ${otherDisorders.length > 0 ? `
    <div class="other-options">
      <div class="other-options-label">Weitere Treffer</div>
      <div class="disorder-pills">
        ${otherDisorders.map(d => `
          <button class="chip" data-disorder-id="${d.id}">${escapeHtml(d.label)}</button>
        `).join('')}
      </div>
    </div>` : ''}
  </section>`;
}

function buildInterventionCard(intervention) {
  return `
  <div class="intervention-card" data-intervention-id="${intervention.id}">
    <div class="intervention-card-top">
      <h3>${escapeHtml(intervention.titel)}</h3>
      <span class="card-quelle">${escapeHtml(intervention.quelle)}</span>
    </div>
    <p class="card-beschreibung">${escapeHtml(intervention.kurzbeschreibung)}</p>
    <div class="card-meta">
      <span>${intervention.schritte.length} Schritte</span>
      <span>${escapeHtml(intervention.dauer)}</span>
    </div>
  </div>`;
}

function buildSessionScreen() {
  const isActive = state.screen === 'session';
  if (!isActive) return `<section class="screen" id="screen-session"></section>`;

  const intervention = state.selectedIntervention;
  if (!intervention) return `<section class="screen active" id="screen-session"></section>`;

  const steps = intervention.schritte;
  const currentIdx = state.currentStep;
  const isLast = currentIdx >= steps.length;

  if (isLast) return buildEndScreen(intervention);

  const step = steps[currentIdx];

  const progressDots = steps.map((_, i) => {
    let cls = 'progress-dot';
    if (i < currentIdx) cls += ' done';
    else if (i === currentIdx) cls += ' active';
    return `<div class="${cls}"></div>`;
  }).join('');

  const coachNote = step.coach && step.coach !== '(Kein Text an den Klienten – Coach-Schritt)'
    ? `<div class="coach-note">
        <div class="coach-note-tag">Hinweis für den Anwender</div>
        ${escapeHtml(step.coach)}
      </div>`
    : '';

  const clientText = step.instruktion && step.instruktion !== '(Kein Text an den Klienten – Coach-Schritt)'
    ? `<div class="client-text">${escapeHtml(step.instruktion)}</div>`
    : `<div class="client-text" style="color:var(--text-muted);font-style:italic">Dieser Schritt enthält nur eine Anweisung für den Coach (siehe oben).</div>`;

  return `
  <section class="screen active" id="screen-session">
    <div class="session-back">
      <button class="btn btn-ghost" id="btn-back-to-results">← Zurück zur Auswahl</button>
    </div>

    <div class="session-title">
      <h2>${escapeHtml(intervention.titel)}</h2>
      <div class="quelle-line">${escapeHtml(intervention.quelle)}</div>
    </div>

    <div class="progress-wrap">
      <div class="progress-bar">${progressDots}</div>
      <div class="progress-label">Schritt ${currentIdx + 1} von ${steps.length}</div>
    </div>

    <div class="step-card">
      <div class="step-header">
        <span class="step-num">Schritt ${step.nr}</span>
        <span class="step-title">${escapeHtml(step.titel)}</span>
      </div>
      ${coachNote}
      ${clientText}
    </div>

    <div class="step-nav">
      <div class="step-nav-counter">${currentIdx + 1} / ${steps.length}</div>
      <div class="step-nav-buttons">
        <button class="btn btn-secondary" id="btn-prev" ${currentIdx === 0 ? 'disabled' : ''}>
          ← Zurück
        </button>
        <button class="btn btn-primary" id="btn-next">
          ${currentIdx === steps.length - 1 ? 'Abschließen' : 'Weiter →'}
        </button>
      </div>
    </div>
  </section>`;
}

function buildEndScreen(intervention) {
  return `
  <section class="screen active" id="screen-session">
    <div class="session-back">
      <button class="btn btn-ghost" id="btn-back-to-results">← Zurück zur Auswahl</button>
    </div>

    <div class="end-card">
      <h2>Intervention abgeschlossen</h2>
      <p>${escapeHtml(intervention.titel)} – alle ${intervention.schritte.length} Schritte durchgeführt.</p>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
        <button class="btn btn-secondary" id="btn-restart-intervention">Intervention wiederholen</button>
        <button class="btn btn-primary" id="btn-back-to-search-end">Neue Sitzung</button>
      </div>
    </div>
  </section>`;
}

// Event binding
function attachEvents() {
  const searchInput = document.getElementById('search-input');
  const btnSearch = document.getElementById('btn-search');

  if (searchInput) {
    searchInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') doSearch();
    });
    searchInput.addEventListener('input', e => {
      state.query = e.target.value;
    });
  }

  if (btnSearch) {
    btnSearch.addEventListener('click', doSearch);
  }

  document.querySelectorAll('.chip[data-pick]').forEach(chip => {
    chip.addEventListener('click', () => {
      state.query = chip.dataset.pick;
      doSearch();
    });
  });

  document.querySelectorAll('.chip[data-disorder-id]').forEach(chip => {
    chip.addEventListener('click', () => {
      const d = disorders.find(x => x.id === chip.dataset.disorderId);
      if (d) selectDisorder(d);
    });
  });

  document.querySelectorAll('.chip[data-intervention-direct]').forEach(chip => {
    chip.addEventListener('click', () => {
      const intervention = interventions.find(i => i.id === chip.dataset.interventionDirect);
      if (intervention) startSession(intervention);
    });
  });

  document.querySelectorAll('.intervention-card').forEach(card => {
    card.addEventListener('click', () => {
      const intervention = interventions.find(i => i.id === card.dataset.interventionId);
      if (intervention) startSession(intervention);
    });
  });

  const backToSearch = document.getElementById('btn-back-to-search');
  if (backToSearch) backToSearch.addEventListener('click', goToSearch);

  const backToResults = document.getElementById('btn-back-to-results');
  if (backToResults) backToResults.addEventListener('click', goToResults);

  const btnPrev = document.getElementById('btn-prev');
  if (btnPrev) btnPrev.addEventListener('click', prevStep);

  const btnNext = document.getElementById('btn-next');
  if (btnNext) btnNext.addEventListener('click', nextStep);

  const btnRestart = document.getElementById('btn-restart-intervention');
  if (btnRestart) btnRestart.addEventListener('click', () => {
    state.currentStep = 0;
    render();
  });

  const btnBackToSearchEnd = document.getElementById('btn-back-to-search-end');
  if (btnBackToSearchEnd) btnBackToSearchEnd.addEventListener('click', goToSearch);
}

// Actions
function doSearch() {
  const q = state.query.trim();
  if (!q) return;

  const results = searchDisorders(q, expandQuery);

  if (results.length === 0) {
    // Fall back: show all disorders
    state.matchedDisorders = disorders;
    state.selectedDisorder = null;
    state.screen = 'results';
    render();
    return;
  }

  state.matchedDisorders = results;
  state.selectedDisorder = results[0];
  state.screen = 'results';
  render();
  window.scrollTo(0, 0);
}

function selectDisorder(disorder) {
  state.selectedDisorder = disorder;
  state.screen = 'results';
  render();
  window.scrollTo(0, 0);
}

function startSession(intervention) {
  state.selectedIntervention = intervention;
  state.currentStep = 0;
  state.screen = 'session';
  render();
  window.scrollTo(0, 0);
}

function prevStep() {
  if (state.currentStep > 0) {
    state.currentStep--;
    render();
    window.scrollTo(0, 0);
  }
}

function nextStep() {
  if (state.currentStep < state.selectedIntervention.schritte.length) {
    state.currentStep++;
    render();
    window.scrollTo(0, 0);
  }
}

function goToSearch() {
  state.screen = 'search';
  render();
}

function goToResults() {
  state.screen = 'results';
  render();
  window.scrollTo(0, 0);
}

// Util
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Init
render();
