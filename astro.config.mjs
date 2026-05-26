import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
          site: isGitHubPages
            ? 'https://yourpalmbeachbroker-wq.github.io'
                      : 'https://yourpalmbeachbroker.com',
          base: isGitHubPages ? '/the-palm-beach-broker' : '/',
          integrations: [tailwind()],
          output: 'static',
});
