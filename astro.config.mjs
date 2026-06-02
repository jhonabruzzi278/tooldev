// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  // Cambiar por la URL real de producción (Vercel o dominio personalizado)
  site: 'https://tooldev.dev',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [icon(), react(), sitemap()]
});