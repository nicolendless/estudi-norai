// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

const noindexPaths = [
  '/aviso-legal/',
  '/politica-de-privacidad/',
  '/politica-de-cookies/',
  '/404/',
];

// https://astro.build/config
export default defineConfig({
  site: 'https://www.estudinorai.com',
  security: { checkOrigin: false },
  output: 'server',
  adapter: vercel(),
  integrations: [
    sitemap({
      filter: (page) => !noindexPaths.some((path) => page.includes(path)),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
