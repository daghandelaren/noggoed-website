import { revealOnScroll } from '../lib/motion';

const CARDS = [
  {
    title: 'Dubbel kopen',
    body: 'Je koopt iets dat al in de kast stond.',
  },
  {
    title: 'Producten over datum',
    body: 'Je vergat dat het er nog lag.',
  },
  {
    title: 'Eten weggooien',
    body: 'Voedsel dat nooit gebruikt werd.',
  },
];

export function renderProblem(): string {
  const cards = CARDS.map(
    (card) => `
      <div class="problem-card reveal">
        <h3>${card.title}</h3>
        <p>${card.body}</p>
      </div>
    `
  ).join('');

  return `
    <section class="problem" id="problem">
      <div class="wrap">
        <div class="section-heading">
          <span class="section-heading__eyebrow">Het probleem</span>
          <h2>Mensen vergeten wat ze in huis hebben</h2>
          <p>Daardoor kopen ze dubbel, laten ze producten over datum gaan en gooien ze eten weg.</p>
        </div>
        <div class="problem__grid">
          ${cards}
        </div>
      </div>
    </section>
  `;
}

export function animateProblem(): void {
  revealOnScroll(document.querySelectorAll('.problem-card'));
}
