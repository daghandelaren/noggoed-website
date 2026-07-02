import { renderAvatarSVG } from '../avatar';
import { gsap } from '../lib/gsapSetup';
import { mm, QUERY_MOTION_OK } from '../lib/motion';
import { renderStoreBadges } from '../lib/storeBadges';

const HEADLINE = 'Is het nog goed?';

function splitWords(text: string): string {
  return text
    .split(' ')
    .map((word) => `<span class="word"><span>${word}</span></span>`)
    .join(' ');
}

export function renderHero(): string {
  return `
    <section class="hero" id="hero">
      <div class="hero__glow"></div>
      <div class="wrap hero__inner">
        <div class="hero__copy">
          <h1 class="hero__headline" id="hero-headline">${splitWords(HEADLINE)}</h1>
          <p class="hero__subheadline">
            NogGoed helpt je onthouden wat je in huis hebt en wat binnenkort op moet.
          </p>
          <p class="hero__tagline">
            Een vriendelijk koelkastmaatje dat je helpt om eten op tijd te gebruiken.
          </p>
          ${renderStoreBadges()}
        </div>
        <div class="hero__avatar-stage">
          <div class="hero__avatar" id="hero-avatar">
            ${renderAvatarSVG('fridge', 'happy', 220)}
          </div>
        </div>
      </div>
      <div class="scroll-cue" id="scroll-cue">
        <span>Scroll</span>
        <svg class="scroll-cue__chevron" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </section>
  `;
}

export function animateHero(): void {
  const words = document.querySelectorAll('#hero-headline .word > span');
  if (words.length > 0) {
    gsap.from(words, {
      yPercent: 110,
      opacity: 0,
      duration: 0.7,
      stagger: 0.06,
      ease: 'power3.out',
      delay: 0.1,
    });
  }

  mm.add(QUERY_MOTION_OK, () => {
    const avatar = document.querySelector('#hero-avatar');
    const cue = document.querySelector('#scroll-cue');

    if (avatar) {
      gsap.to(avatar, { y: -6, duration: 2.4, ease: 'sine.inOut', repeat: -1, yoyo: true });
    }
    if (cue) {
      gsap.to(cue, { y: 8, duration: 1.1, ease: 'sine.inOut', repeat: -1, yoyo: true });
    }

    return () => {
      gsap.killTweensOf([avatar, cue]);
    };
  });
}
