import { renderAvatarSVG } from '../avatar';

export function renderHeader(options: { showBackLink?: boolean } = {}): string {
  const { showBackLink = false } = options;

  return `
    <header class="site-header">
      <div class="wrap site-header__inner">
        <a class="brand" href="/">
          <span class="brand__mark">${renderAvatarSVG('fridge', 'happy', 32)}</span>
          NogGoed
        </a>
        ${showBackLink ? '<a class="back-link" href="/">&larr; Terug naar home</a>' : ''}
      </div>
    </header>
  `;
}

export function renderFooter(): string {
  const year = new Date().getFullYear();

  return `
    <footer class="site-footer">
      <div class="wrap site-footer__inner">
        <span>&copy; ${year} NogGoed</span>
        <nav class="footer-links">
          <a href="/privacybeleid/">Privacybeleid</a>
          <a href="mailto:info@noggoed.nl">info@noggoed.nl</a>
        </nav>
      </div>
    </footer>
  `;
}

export function mountPartials(): void {
  const headerEl = document.querySelector<HTMLDivElement>('#site-header');
  const footerEl = document.querySelector<HTMLDivElement>('#site-footer');

  if (headerEl) {
    headerEl.innerHTML = renderHeader({ showBackLink: headerEl.dataset.backLink === 'true' });
  }
  if (footerEl) {
    footerEl.innerHTML = renderFooter();
  }
}
