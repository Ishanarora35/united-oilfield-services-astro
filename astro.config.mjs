import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.unitedoilfields.com',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
  image: {
    // Generated variants: keep photographic detail, avoid mushy re-compression
    experimentalLayout: 'constrained',
  },
  compressHTML: true,
});
