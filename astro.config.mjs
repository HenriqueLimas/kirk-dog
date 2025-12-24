// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://henriquelimas.github.io',
  base: '/kirk-dog',
  vite: {
    plugins: [tailwindcss()]
  }
});