import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://arkgithubforyou.github.io',
  base: '/portfolio',
  integrations: [tailwind()],
  output: 'static',
});
