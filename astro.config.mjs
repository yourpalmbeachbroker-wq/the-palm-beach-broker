import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://yourpalmbeachbroker-wq.github.io',
  base: '/the-palm-beach-broker',
  integrations: [tailwind()],
  output: 'static',
});
