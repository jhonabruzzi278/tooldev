// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://tool-dev-rust.vercel.app',
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [icon(), react(), sitemap()]
});