import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
        site: 'https://yourpalmbeachbroker.com',
        base: '/the-palm-beach-broker',
        integrations: [tailwind()],
        output: 'static',
});
