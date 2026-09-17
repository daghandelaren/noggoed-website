import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        privacy: resolve(__dirname, 'privacybeleid/index.html'),
        terms: resolve(__dirname, 'voorwaarden/index.html'),
      },
    },
  },
});
