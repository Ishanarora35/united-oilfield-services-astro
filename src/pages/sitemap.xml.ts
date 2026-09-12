import type { APIRoute } from 'astro';
import { services } from '@/data/services';

/**
 * Single sitemap served at the conventional /sitemap.xml.
 *
 * Hand-rolled rather than using @astrojs/sitemap so the file lands on the exact
 * URL search engines and Search Console expect, and so the URL list matches the
 * canonical tags exactly (no trailing slashes, no .html extensions).
 *
 * Only public, indexable pages are listed. 404 is excluded; there are no admin,
 * API or private routes in this project.
 */

const SITE = 'https://unitedoilfields.com';

type Entry = { path: string; priority: string; changefreq: string };

const staticPages: Entry[] = [
  { path: '/', priority: '1.0', changefreq: 'monthly' },
  { path: '/about', priority: '0.8', changefreq: 'yearly' },
  { path: '/services', priority: '0.9', changefreq: 'monthly' },
  { path: '/safety', priority: '0.8', changefreq: 'yearly' },
  { path: '/careers', priority: '0.6', changefreq: 'monthly' },
  { path: '/contact', priority: '0.7', changefreq: 'yearly' },
];

const servicePages: Entry[] = services.map((s) => ({
  path: `/services/${s.slug}`,
  priority: '0.8',
  changefreq: 'yearly',
}));

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().split('T')[0];
  const entries = [...staticPages, ...servicePages];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (e) => `  <url>
    <loc>${SITE}${e.path === '/' ? '/' : e.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
