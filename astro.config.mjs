import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://unitedoilfields.com',
  integrations: [
    sitemap({
      // Match the canonical URLs exactly (Vercel cleanUrls serves extensionless, no trailing slash)
      serialize: (item) => ({ ...item, url: item.url.replace(/(.+)\/$/, '$1') }),
    }),
  ],
  trailingSlash: 'never',
  build: { inlineStylesheets: 'auto' },
  image: {
    // Generated variants: keep photographic detail, avoid mushy re-compression
    experimentalLayout: 'constrained',
  },
  compressHTML: true,
});
