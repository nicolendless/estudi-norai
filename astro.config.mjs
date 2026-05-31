// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

const noindexSegments = [
  'aviso-legal',
  'politica-de-privacidad',
  'politica-de-cookies',
  '404',
];

// https://astro.build/config
export default defineConfig({
  site: 'https://www.estudinorai.com',
  security: { checkOrigin: false },
  output: 'server',
  adapter: vercel(),
  integrations: [
    sitemap({
      filter: (page) => !noindexSegments.some((segment) => page.includes(`/${segment}`)),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
