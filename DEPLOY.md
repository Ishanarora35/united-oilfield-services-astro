# Deploying this site

The repo is already created and empty:
**https://github.com/Ishanarora35/united-oilfield-services-astro**

Pick whichever path suits you. Both end in the same place.

---

## Path A — git (fastest if you have git)

This folder is already a git repository with both commits made. From inside it:

```bash
git remote add origin https://github.com/Ishanarora35/united-oilfield-services-astro.git
git push -u origin main
```

## Path B — no terminal, drag and drop

1. Open <https://github.com/Ishanarora35/united-oilfield-services-astro/upload/main>
2. Drag the **contents** of this folder onto the page — not the `uos` folder itself, but
   everything inside it (`src`, `public`, `scripts`, `package.json`, `astro.config.mjs`,
   `README.md`, `netlify.toml`, `vercel.json`, `tsconfig.json`, `package-lock.json`,
   `.gitignore`).
   GitHub preserves the folder structure when you drag folders in.
3. Scroll down, click **Commit changes**.

`node_modules/` and `dist/` are excluded by `.gitignore` and are not needed — Vercel
installs and builds from source.

---

## Then: Vercel

1. Sign in at <https://vercel.com> (GitHub login).
2. **Add New → Project → Import** `united-oilfield-services-astro`.
3. Astro is auto-detected. Framework Preset `Astro`, build `npm run build`, output `dist`.
   Nothing needs changing — `vercel.json` in this repo already sets it.
4. **Deploy.**

You get a URL like `united-oilfield-services-astro.vercel.app`, entirely separate from the
existing `united-oilfield-services.vercel.app`, so both stay live while you compare.

### Pointing a real domain at it later

Set `site:` in `astro.config.mjs` and the sitemap URL in `public/robots.txt` to the real
domain before the final deploy — those drive canonical URLs, Open Graph tags and the
sitemap. Then add the domain under Vercel → Project → Settings → Domains.
