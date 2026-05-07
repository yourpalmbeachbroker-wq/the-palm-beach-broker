import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
    site: 'https://yourpalmbeachbroker.com',
    integrations: [tailwind()],
    output: 'static',
});
