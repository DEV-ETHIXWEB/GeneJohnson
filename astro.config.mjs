// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.genejohnsonplumbing.com',

  // Astro does not read PORT on its own; honour it so the dev server can be
  // started on a host-assigned port when 4321 is already taken.
  server: { port: Number(process.env.PORT) || 4321 },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap(), mdx()]
});