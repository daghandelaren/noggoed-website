import { gsap, ScrollTrigger } from './gsapSetup';

export const QUERY_MOTION_OK = '(prefers-reduced-motion: no-preference)';
export const QUERY_DESKTOP = '(min-width: 1024px)';

export function prefersReducedMotion(): boolean {
  return !window.matchMedia(QUERY_MOTION_OK).matches;
}

/**
 * Central matchMedia context used by every section. Idle loops / scroll cue
 * only run under QUERY_MOTION_OK; an optional richer desktop-only moment
 * can be added under QUERY_DESKTOP so mobile never evaluates that branch.
 */
export const mm = gsap.matchMedia();

/**
 * Reveals a set of elements on scroll via a batched fade/translate. Runs
 * regardless of reduced-motion (it's a one-time appearance, not a loop),
 * but reduced-motion users see the CSS fallback (.reveal { opacity: 1 })
 * before JS even runs, so there's no flash of invisible content.
 */
export function revealOnScroll(elements: Element[] | NodeListOf<Element>): void {
  const list = Array.from(elements);
  if (list.length === 0) return;

  gsap.set(list, { y: 24 });

  ScrollTrigger.batch(list, {
    start: 'top 85%',
    onEnter: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.12,
        ease: 'power2.out',
        overwrite: true,
      }),
  });
}
