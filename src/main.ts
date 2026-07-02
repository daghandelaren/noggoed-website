import './style.css';
import { mountPartials } from './lib/partials';
import { renderHero, animateHero } from './sections/hero';
import { renderProblem, animateProblem } from './sections/problem';
import { renderFeatures, animateFeatures } from './sections/features';
import { renderPersonality, animatePersonality } from './sections/personality';
import { renderCta, animateCta } from './sections/cta';

mountPartials();

const app = document.querySelector<HTMLElement>('#app')!;
app.innerHTML = [renderHero(), renderProblem(), renderFeatures(), renderPersonality(), renderCta()].join('');

animateHero();
animateProblem();
animateFeatures();
animatePersonality();
animateCta();
