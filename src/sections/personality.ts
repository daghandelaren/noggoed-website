import { renderAvatarSVG, type AvatarMood } from '../avatar';
import { revealOnScroll } from '../lib/motion';

// Verbatim from ../../src/utils/mood.ts moodCopy
const MOODS: { mood: AvatarMood; label: string; title: string; subtitle: string }[] = [
  {
    mood: 'happy',
    label: 'Blij',
    title: 'Alles ziet er vers uit!',
    subtitle: 'Geen producten die op moeten.',
  },
  {
    mood: 'concerned',
    label: 'Bezorgd',
    title: 'Een paar producten moeten bijna op.',
    subtitle: 'Kijk even wat er als eerste verdwijnt uit de koelkast.',
  },
  {
    mood: 'sad',
    label: 'Verdrietig',
    title: 'Oei, er zijn producten over datum.',
    subtitle: 'Tijd om de koelkast even op te ruimen.',
  },
];

export function renderPersonality(): string {
  const cards = MOODS.map(
    (item) => `
      <div class="personality-card reveal">
        ${renderAvatarSVG('fridge', item.mood, 140)}
        <span class="section-heading__eyebrow">${item.label}</span>
        <h3>${item.title}</h3>
        <p>${item.subtitle}</p>
      </div>
    `
  ).join('');

  return `
    <section class="personality" id="personality">
      <div class="wrap">
        <div class="section-heading">
          <span class="section-heading__eyebrow">Je koelkastmaatje</span>
          <h2>Een avatar die met je meeleeft</h2>
          <p>De avatar is een maatje, geen mascotte-clown — vriendelijk, niet kinderachtig.</p>
        </div>
        <div class="personality__grid">
          ${cards}
        </div>
      </div>
    </section>
  `;
}

export function animatePersonality(): void {
  revealOnScroll(document.querySelectorAll('.personality-card'));
}
