import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
        site: 'https://yourpalmbeachbroker.com',
        base: '/',
        integrations: [tailwind()],
        output: 'static',
});
