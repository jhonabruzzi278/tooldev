// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  // Production URL — update when custom domain is set
  site: 'https://tool-dev-rust.vercel.app',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [icon(), react(), sitemap()]
});