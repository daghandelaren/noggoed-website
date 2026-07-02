/**
 * Duplicated from ../../src/constants/theme.ts (source of truth: APP_CONTEXT.md
 * "Kleurenpalet"). Kept separate because the Expo theme file imports
 * react-native's Platform, which doesn't resolve in a browser build — update
 * both files deliberately if the palette changes.
 */
export const colors = {
  background: '#FAF8F4',
  surface: '#FFFFFF',
  surfaceSubtle: '#F2EFE9',
  border: '#E8E2D6',
  primary: '#2E7D5B',
  primaryDark: '#235E45',
  primarySoft: '#E0EFE6',
  accent: '#F4B860',
  accentSoft: '#FBE9CC',
  text: '#1F2A24',
  textSecondary: '#6B7770',
  status: {
    fresh: '#4FA37A',
    soon: '#E8A546',
    today: '#E07A3E',
    expired: '#C85450',
  },
} as const;
