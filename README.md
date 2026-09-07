# United Oilfield Services LLC — Website

Production website for **United Oilfield Services LLC (UOS)**, built from the supplied
PRD and the company's own image library.

- **Stack:** [Astro 5](https://astro.build) + TypeScript, static output
- **Zero client JS frameworks.** The only scripts are ~4 KB of inlined vanilla TS
  (nav, hero slider, scroll reveal, contact form). No JS files are requested over the network.
- **Fonts:** self-hosted Saira Condensed (display) + Inter (body), latin subsets only — 82 KB total.

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site -> ./dist
npm run preview  # serve ./dist locally
```

`dist/` is a plain static folder. Deploy it to Netlify, Vercel, Cloudflare Pages, S3 +
CloudFront, or any static host. `netlify.toml` and `vercel.json` are included.

**Before going live:** set the real domain in `astro.config.mjs` (`site:`) and in
`public/robots.txt`. It is currently `https://www.unitedoilfields.com`. This value drives
canonical URLs, Open Graph URLs and the sitemap.

---

## Project structure

```
src/
  assets/            Optimised source images (Astro generates responsive WebP at build)
    brand/           Logo lockups — transparent + reversed (white) variants
    home/            hero-1 … hero-5   (PRD images 11–15)
    services/        One image per service (PRD images 02–09)
    safety/          PRD image 10
  components/        Reusable UI
  data/              ← ALL SITE CONTENT LIVES HERE
    site.ts          Company name, address, phone, email, primary nav
    services.ts      All 8 services: taglines, copy, capabilities, images
    heroSlides.ts    The 5 homepage image ↔ tagline pairs
  layouts/
    BaseLayout.astro SEO head, JSON-LD, header/footer, scroll reveal
  pages/             File-based routes (see URL map below)
  styles/global.css  Design system: tokens, type scale, buttons, brand devices
```

### Navigation

The **Services** item in the primary nav opens a panel listing all eight services, each
linking to its own page, with a "Services overview" link through to `/services`. On mobile
the same list expands inside the full-screen menu. Both are driven by `services.ts`, so
adding a service adds it to the panel automatically.

### Editing content

Almost all copy is in `src/data/`. Change it there and it updates everywhere — nav,
footer, service pages, cards, the homepage index and the contact form's service picker.
Adding a service to `services.ts` automatically creates its page, its route, its footer
link and its entry in the services sub-nav.

---

## URL map

```
/                                        Homepage (hero slideshow)
/about
/services
/services/brine-production-water
/services/well-pump-maintenance
/services/pumping-well-operations
/services/roustabout
/services/steaming
/services/flowback
/services/plug-abandonment
/services/specialist-disciplines
/safety
/careers
/contact
/404
/sitemap-index.xml, /robots.txt
```

---

## The contact & careers forms

Both forms use the same `ContactForm.astro` component. Out of the box, on submit they
build a pre-filled email to `office@unitedoilfields.com` and open the visitor's mail
client. **No third-party form service is wired up, and no fake backend is implied.**

To switch to a real form handler (Formspree, Netlify Forms, Basin, your own endpoint),
add a `data-endpoint` attribute to the `<form>` in
`src/components/ContactForm.astro`:

```html
<form class="cform" data-contact-form data-endpoint="https://formspree.io/f/XXXX" ...>
```

The script then POSTs the `FormData` there and shows inline success/error states
instead of opening a mail client. No other change is needed.

---

## Brand system

Both brand colours were sampled directly from the supplied logo file:

| Token            | Value     | Use                                                     |
| ---------------- | --------- | ------------------------------------------------------- |
| `--navy-800`     | `#00235E` | Primary brand navy — headings, plates, buttons          |
| `--navy-900`     | `#001536` | Deep sections, footer                                    |
| `--orange-500`   | `#FA5C01` | Brand orange — accents, rules, graphic marks            |
| `--orange-ink`   | `#B84400` | Orange **text** on light backgrounds (AA-compliant)     |

`--orange-ink` exists because brand orange only reaches 3.18:1 against white, which
fails WCAG AA for body-size text. Graphic uses of orange keep the exact brand value;
only small orange *text* uses the darker variant. Accent buttons use navy text on brand
orange (4.7:1) rather than white (3.18:1) — both colours straight from the logo.

The **angled navy→orange rule** from the logo is reproduced in CSS as `.angled-rule` and
reused as the section divider throughout the site.

The logo was not redesigned. It was made transparent and a reversed (white) lockup was
derived for dark backgrounds; both live in `src/assets/brand/`.

---

## Images

Every image on the site comes from the supplied Drive folder. Nothing is stock.

Source files were upscaled with staged Lanczos resampling plus a light unsharp mask
before being handed to Astro, which then generates responsive WebP at build time. Each
image only requests widths its source actually contains, so nothing is upscaled twice.

**Worth knowing:** three of the five homepage sources are low resolution —
`13_homepage3` is 700×350, `14_homepage4` is 612×408, `15_homepage5` is 800×570. They
have been upscaled carefully and hold up well at full-bleed hero size (the sunset and
overcast frames in particular), but higher-resolution originals would visibly sharpen
slides 3–5 on large displays. `06_steaming_services` (480×270) is the smallest service
image and its layout is deliberately constrained so it is never blown up beyond what it
can carry. If better originals turn up, drop them into `src/assets/` under the same
filenames and rebuild — no code changes needed.

The **flowback** asset (image 07) is a capability diagram, not a photograph, so that
page uses a split layout that shows the graphic whole on a dark technical panel rather
than cropping it as a hero.

---

## Accessibility & QA

Verified by automated pass across all 15 routes:

- Colour contrast meets WCAG 2.1 AA (all text, light and dark surfaces)
- Exactly one `<h1>` per page, no skipped heading levels
- Every image has alt text; decorative images are correctly `aria-hidden`
- Every form control has a real `<label>`; errors are announced via `role="status"`
- Full keyboard operation, visible focus rings, working skip link
- Mobile menu traps focus, closes on Escape, restores focus and scroll
- No horizontal overflow at 320 / 390 / 768 / 1440 / 1920 px
- No console errors, no broken internal links

**Hero slideshow:** a W3C-pattern carousel with `aria-roledescription`, per-slide
grouping, keyboard arrow support, touch swipe, and inactive slides hidden from assistive
tech. It runs continuously by design — there is no pause control, slide counter or
progress indicator. Autoplay stops only under `prefers-reduced-motion: reduce` (where the
drift and reveal animations are disabled too), and defers while the tab is hidden.

> Note: WCAG 2.2.2 (*Pause, Stop, Hide*, Level A) asks for a way to pause content that
> auto-updates for more than five seconds. Removing the pause button was a deliberate
> design choice; the reduced-motion path still covers visitors who have asked their
> system for less movement. To restore compliance, re-add a pause control to
> `HeroSlider.astro` or raise the interval past the threshold.

Scroll reveal is opt-in: content is visible by default and only hidden once an inline
head script confirms JS and `IntersectionObserver` are available, with a 2.5 s failsafe.
If scripting fails, every section still renders.

---

## Content policy

All factual content comes from the PRD. No statistics, clients, testimonials, awards,
certifications, years in business, employee counts or equipment claims were invented.
The "40+ years of combined oilfield experience" figure appears only where the PRD places
it — describing the compliance team — and is never presented as years in business.

The contact page links out to a Google Maps *search* for the supplied address rather than
embedding a map with a pinned coordinate, because the exact pin could not be verified.
Swap in an embed once the location is confirmed.
