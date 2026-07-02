import { renderAvatarSVG } from '../avatar';
import { revealOnScroll } from '../lib/motion';
import { renderStoreBadges } from '../lib/storeBadges';

export function renderCta(): string {
  return `
    <section class="cta" id="cta">
      <div class="wrap cta__inner reveal">
        ${renderAvatarSVG('fridge', 'happy', 120)}
        <h2>Is het nog goed? Binnenkort weet je het altijd.</h2>
        ${renderStoreBadges()}
      </div>
    </section>
  `;
}

export function animateCta(): void {
  revealOnScroll(document.querySelectorAll('.cta__inner'));
}
