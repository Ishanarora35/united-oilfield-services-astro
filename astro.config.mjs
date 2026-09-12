import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://unitedoilfields.com',
  trailingSlash: 'never',
  build: { inlineStylesheets: 'auto', format: 'file' },
  image: {
    // Generated variants: keep photographic detail, avoid mushy re-compression
    experimentalLayout: 'constrained',
  },
  compressHTML: true,
});
