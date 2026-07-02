import { revealOnScroll } from '../lib/motion';

const ICON_ADD =
  '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14M5 12h14" stroke="#2E7D5B" stroke-width="2" stroke-linecap="round" /></svg>';

const ICON_BARCODE =
  '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 5v14M8 5v14M11 5v14M15 5v14M17 5v14M20 5v14" stroke="#2E7D5B" stroke-width="1.6" stroke-linecap="round" /></svg>';

const ICON_SORT =
  '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 7h16M4 12h11M4 17h6" stroke="#2E7D5B" stroke-width="2" stroke-linecap="round" /></svg>';

const ICON_BELL =
  '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 4a5 5 0 00-5 5v3.2c0 .6-.2 1.2-.6 1.7L5 16h14l-1.4-2.1c-.4-.5-.6-1.1-.6-1.7V9a5 5 0 00-5-5z" stroke="#2E7D5B" stroke-width="1.8" stroke-linejoin="round" /><path d="M10 19a2 2 0 004 0" stroke="#2E7D5B" stroke-width="1.8" stroke-linecap="round" /></svg>';

const ICON_CHART =
  '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="12" width="4" height="8" rx="1" fill="#F4B860" /><rect x="10" y="7" width="4" height="13" rx="1" fill="#2E7D5B" /><rect x="16" y="3" width="4" height="17" rx="1" fill="#4FA37A" /></svg>';

type Feature = {
  title: string;
  body: string;
  mock: string;
};

const FEATURES: Feature[] = [
  {
    title: 'Snel toevoegen',
    body: 'Product toevoegen, geen administratie-gevoel.',
    mock: `<span>${ICON_ADD}</span>`,
  },
  {
    title: 'Scan een barcode',
    body: 'Herken het product via de barcode (Open Food Facts) — de houdbaarheidsdatum vul je altijd zelf in.',
    mock: `<span>${ICON_BARCODE}</span>`,
  },
  {
    title: 'Overzicht op urgentie',
    body: 'Je voorraad, gesorteerd op wat het eerst op moet.',
    mock: `<span>${ICON_SORT}</span>`,
  },
  {
    title: 'Duidelijke statuslabels',
    body: 'In één oogopslag zien wat nog vers is en wat niet.',
    mock: `
      <span class="status-pill status-pill--fresh">Nog vers</span>
      <span class="status-pill status-pill--soon">Bijna verlopen</span>
      <span class="status-pill status-pill--today">Vandaag gebruiken</span>
      <span class="status-pill status-pill--expired">Over datum</span>
    `,
  },
  {
    title: 'Koelkast, vriezer, voorraadkast',
    body: 'Filter je overzicht op locatie.',
    mock: `
      <span class="location-chip">❄ Koelkast</span>
      <span class="location-chip">☃ Vriezer</span>
      <span class="location-chip">🥫 Voorraadkast</span>
    `,
  },
  {
    title: 'Lokale herinneringen',
    body: 'Herinneringen voor houdbaarheid, per product of als dagelijks overzicht — altijd op je eigen toestel.',
    mock: `<span>${ICON_BELL}</span>`,
  },
  {
    title: 'Statistieken',
    body: 'Geredde producten en geschat bespaard geld, lokaal berekend.',
    mock: `<span>${ICON_CHART}</span>`,
  },
];

export function renderFeatures(): string {
  const cards = FEATURES.map(
    (feature) => `
      <div class="feature-card reveal">
        <div class="feature-card__mock">${feature.mock}</div>
        <h3>${feature.title}</h3>
        <p>${feature.body}</p>
      </div>
    `
  ).join('');

  return `
    <section class="features" id="features">
      <div class="wrap">
        <div class="section-heading">
          <span class="section-heading__eyebrow">Wat NogGoed doet</span>
          <h2>Alles wat je nodig hebt, niets wat voelt als administratie</h2>
          <p>Van razendsnel toevoegen tot een overzicht dat zelf vertelt wat op moet.</p>
        </div>
        <div class="features__grid">
          ${cards}
        </div>
      </div>
    </section>
  `;
}

export function animateFeatures(): void {
  revealOnScroll(document.querySelectorAll('.feature-card'));
}
