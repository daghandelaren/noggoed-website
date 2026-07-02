export function renderStoreBadges(): string {
  return `
    <div class="button-row" aria-hidden="false">
      <span class="store-badge" aria-disabled="true">
        <span class="store-badge__eyebrow">Binnenkort op de</span>
        <span class="store-badge__label">App Store</span>
      </span>
      <span class="store-badge" aria-disabled="true">
        <span class="store-badge__eyebrow">Binnenkort op</span>
        <span class="store-badge__label">Google Play</span>
      </span>
    </div>
    <p class="coming-soon">Binnenkort beschikbaar voor iOS en Android.</p>
  `;
}
