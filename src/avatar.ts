/**
 * Ported from ../../src/components/Avatar.tsx (react-native-svg) to plain
 * SVG markup strings for the browser. Coordinates, colors and structure are
 * kept identical to the source so the web avatar matches the app exactly.
 */

export type AvatarKind = 'fridge' | 'freezer' | 'pantry';
export type AvatarMood = 'happy' | 'concerned' | 'sad';

type Skin = { body: string; bodyTop: string; cheek: string; mouth: string };

const skins: Record<AvatarKind, Record<AvatarMood, Skin>> = {
  fridge: {
    happy: { body: '#D7EBE0', bodyTop: '#BFDDCD', cheek: '#F4B860', mouth: '#2E7D5B' },
    concerned: { body: '#CFE3D6', bodyTop: '#B2D2C0', cheek: '#E8A546', mouth: '#2E7D5B' },
    sad: { body: '#C4D8CC', bodyTop: '#A6C6B4', cheek: '#C85450', mouth: '#235E45' },
  },
  freezer: {
    happy: { body: '#E4F3FB', bodyTop: '#C6E6F6', cheek: '#E7A9B5', mouth: '#2C6E8F' },
    concerned: { body: '#D8ECF7', bodyTop: '#BBDDF0', cheek: '#E08F9E', mouth: '#2C6E8F' },
    sad: { body: '#CBE2F1', bodyTop: '#AED1E8', cheek: '#B96B78', mouth: '#234E63' },
  },
  pantry: {
    happy: { body: '#C39B66', bodyTop: '#B07D49', cheek: '#E7C07A', mouth: '#4A3018' },
    concerned: { body: '#BB9560', bodyTop: '#A4713F', cheek: '#D9A85E', mouth: '#4A3018' },
    sad: { body: '#A9824F', bodyTop: '#8E5E32', cheek: '#B07A4A', mouth: '#3A2512' },
  },
};

const BORDER = '#E8E2D6';
const SURFACE = '#FFFFFF';

let gradientCounter = 0;

function jarMarkup(x: number, base: number, w: number, h: number, body: string, lid: string): string {
  const top = base - h;
  return `
    <rect x="${x}" y="${top}" width="${w}" height="${h}" rx="3" fill="${body}" />
    <rect x="${x - 1}" y="${top - 4}" width="${w + 2}" height="5" rx="2" fill="${lid}" />
    <rect x="${x + 2.5}" y="${top + 3}" width="2.5" height="${h - 8}" rx="1.5" fill="#FFFFFF" opacity="0.25" />
  `;
}

function canMarkup(x: number, base: number, w: number, h: number, body: string, band: string): string {
  const top = base - h;
  return `
    <rect x="${x}" y="${top}" width="${w}" height="${h}" rx="2.5" fill="${body}" />
    <rect x="${x}" y="${top + h / 2 - 2}" width="${w}" height="4" fill="${band}" opacity="0.9" />
    <rect x="${x + 2.5}" y="${top + 3}" width="2" height="${h - 8}" rx="1" fill="#FFFFFF" opacity="0.25" />
  `;
}

function snowflakeMarkup(cx: number, cy: number, r: number, color: string): string {
  const arms = [0, 60, 120];
  const lines = arms
    .map((deg) => {
      const rad = (deg * Math.PI) / 180;
      const dx = Math.cos(rad) * r;
      const dy = Math.sin(rad) * r;
      return `<line x1="${cx - dx}" y1="${cy - dy}" x2="${cx + dx}" y2="${cy + dy}" />`;
    })
    .join('');
  return `<g stroke="${color}" stroke-width="2" stroke-linecap="round" opacity="0.75">${lines}</g>`;
}

function openPantryMarkup(): string {
  const shelf = '#B98A56';
  const shelfHi = '#D9B888';
  return `
    <rect x="50" y="94" width="100" height="78" rx="10" fill="#795130" />
    <rect x="50" y="94" width="100" height="16" rx="10" fill="#5F3E22" opacity="0.5" />
    <rect x="50" y="94" width="100" height="78" rx="10" fill="none" stroke="#5A3C20" stroke-width="1.5" opacity="0.6" />

    ${jarMarkup(60, 120, 16, 22, '#84B49A', '#5E8A72')}
    ${canMarkup(84, 120, 13, 20, '#E7C07A', '#CF9645')}
    ${jarMarkup(106, 120, 16, 20, '#C85450', '#A23E3B')}

    ${jarMarkup(66, 146, 16, 17, '#EAD9B6', '#C39B66')}
    ${jarMarkup(94, 146, 15, 16, '#84B49A', '#5E8A72')}
    ${canMarkup(118, 146, 12, 15, '#D98E7A', '#B86650')}

    ${jarMarkup(86, 170, 16, 15, '#9DC3AC', '#5E8A72')}

    <rect x="50" y="120" width="100" height="5" rx="2" fill="${shelf}" />
    <rect x="50" y="120" width="100" height="1.6" fill="${shelfHi}" opacity="0.85" />
    <rect x="50" y="146" width="100" height="5" rx="2" fill="${shelf}" />
    <rect x="50" y="146" width="100" height="1.6" fill="${shelfHi}" opacity="0.85" />
  `;
}

function kindDetailsMarkup(kind: AvatarKind): string {
  if (kind === 'fridge') {
    return `
      <g>
        <rect x="36" y="92" width="128" height="2" fill="${BORDER}" opacity="0.6" />
        <rect x="148" y="50" width="6" height="28" rx="3" fill="${SURFACE}" opacity="0.7" />
        <rect x="148" y="110" width="6" height="36" rx="3" fill="${SURFACE}" opacity="0.7" />
      </g>
    `;
  }

  if (kind === 'freezer') {
    return `
      <g>
        <rect x="148" y="70" width="6" height="58" rx="3" fill="#FFFFFF" opacity="0.85" />
        ${snowflakeMarkup(100, 132, 12, '#7FB8D8')}
        <circle cx="56" cy="120" r="2.4" fill="#FFFFFF" opacity="0.9" />
        <circle cx="140" cy="150" r="2" fill="#FFFFFF" opacity="0.85" />
        <circle cx="120" cy="112" r="1.6" fill="#FFFFFF" opacity="0.8" />
        <circle cx="78" cy="150" r="1.8" fill="#FFFFFF" opacity="0.8" />
      </g>
    `;
  }

  return `<g>${openPantryMarkup()}</g>`;
}

function eyesMarkup(mood: AvatarMood): string {
  const eyeColor = '#1F2A24';

  if (mood === 'happy') {
    return `
      <g>
        <circle cx="78" cy="62" r="5" fill="${eyeColor}" />
        <circle cx="122" cy="62" r="5" fill="${eyeColor}" />
        <circle cx="79.5" cy="60.5" r="1.5" fill="#FFFFFF" />
        <circle cx="123.5" cy="60.5" r="1.5" fill="#FFFFFF" />
      </g>
    `;
  }

  if (mood === 'concerned') {
    return `
      <g>
        <path d="M73 64 Q78 60 83 64" stroke="${eyeColor}" stroke-width="3" stroke-linecap="round" fill="none" />
        <path d="M117 64 Q122 60 127 64" stroke="${eyeColor}" stroke-width="3" stroke-linecap="round" fill="none" />
      </g>
    `;
  }

  return `
    <g>
      <circle cx="78" cy="64" r="5" fill="${eyeColor}" />
      <circle cx="122" cy="64" r="5" fill="${eyeColor}" />
      <path d="M70 56 Q78 52 86 58" stroke="${eyeColor}" stroke-width="2.5" stroke-linecap="round" fill="none" />
      <path d="M114 58 Q122 52 130 56" stroke="${eyeColor}" stroke-width="2.5" stroke-linecap="round" fill="none" />
    </g>
  `;
}

function mouthMarkup(mood: AvatarMood, color: string): string {
  if (mood === 'happy') {
    return `<path d="M86 78 Q100 92 114 78" stroke="${color}" stroke-width="3.5" stroke-linecap="round" fill="none" />`;
  }
  if (mood === 'concerned') {
    return `<path d="M88 82 L112 82" stroke="${color}" stroke-width="3.5" stroke-linecap="round" />`;
  }
  return `<path d="M86 86 Q100 76 114 86" stroke="${color}" stroke-width="3.5" stroke-linecap="round" fill="none" />`;
}

export function renderAvatarSVG(kind: AvatarKind, mood: AvatarMood, size = 180): string {
  const skin = skins[kind][mood];
  const gradientId = `avatar-gradient-${gradientCounter++}`;

  return `
    <svg width="${size}" height="${size}" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
      <defs>
        <linearGradient id="${gradientId}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="${skin.bodyTop}" />
          <stop offset="1" stop-color="${skin.body}" />
        </linearGradient>
      </defs>

      <rect x="36" y="28" width="128" height="150" rx="28" ry="28" fill="url(#${gradientId})" stroke="${BORDER}" stroke-width="1.5" />

      ${kindDetailsMarkup(kind)}

      <circle cx="66" cy="68" r="7" fill="${skin.cheek}" opacity="0.55" />
      <circle cx="134" cy="68" r="7" fill="${skin.cheek}" opacity="0.55" />

      ${eyesMarkup(mood)}
      ${mouthMarkup(mood, skin.mouth)}

      ${mood === 'sad' ? '<ellipse cx="75" cy="72" rx="3" ry="5" fill="#8FB4D8" opacity="0.9" />' : ''}
    </svg>
  `;
}
