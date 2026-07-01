# JM Arquitetura e Urbanismo — Landing page

Single-page site for the architect **Jean Maciel** (JM Arquitetura e Urbanismo),
built from the Claude Design handoff prototype (`JM Arquitetura.dc.html`).

Recreated 1:1 in a production stack:

- **React 18**
- **Vite 5**
- **GSAP 3** (`ScrollTrigger` + `CustomEase`) for the scroll animations

## Getting started

```bash
npm install
npm run dev      # dev server at http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## What's implemented

Every section of the prototype, in order:

1. **Navbar** — fixed; transparent → blurred scrim on scroll; logo + bar shrink
   on scroll; desktop links + WhatsApp CTA; theme toggle; mobile hamburger menu.
2. **Hero** — headline, lead, CTAs, parallax image, floating chip.
3. **Counters band** — `2026 / 100% / 04 / 1:1` with count-up on scroll.
4. **Sobre** — portrait + bio + four value points.
5. **Serviços** — Plantas / Cortes / Vistas & fachadas / Projeto 3D + image.
6. **Processo** — four-step hairline grid (last card featured).
7. **Projetos** — featured 16:7 project + three 4:5 cards (hover-zoom).
8. **Pra quem eu projeto** — inverted deep band with four audiences.
9. **Contato** — centered CTA (WhatsApp + Instagram).
10. **Footer** + floating, pulsing **WhatsApp FAB**.

### Behaviors ported to GSAP

- **Reveal on scroll** — staggered fade + rise (`data-reveal` / `data-delay`),
  using the prototype's house ease `cubic-bezier(0.16, 1, 0.3, 1)` via `CustomEase`.
- **Parallax** on the hero / about / services images (scrubbed `ScrollTrigger`).
- **Count-up** counters triggered when the stats band enters view.
- **Dark / light theme** — toggled, persisted to `localStorage` (`jm-theme`),
  swaps the logo variants. Defaults to dark.
- **Reduced motion** — with `prefers-reduced-motion: reduce`, all content renders
  immediately (no reveal/parallax, counters show final values).

## Customizing

- **Contact details & brand accent** — everything lives in
  [`src/data/site.js`](src/data/site.js): WhatsApp number, Instagram handle,
  email, city, default theme, and the `--gold` accent. The WhatsApp/Instagram/
  email links are derived automatically.

- **Project images** — the prototype's `image-slot` drop zones are recreated as
  the [`ImageSlot`](src/components/ImageSlot.jsx) component. Each renders an
  elegant placeholder until you pass a real render:

  ```jsx
  import heroRender from '../assets/hero.jpg';
  <ImageSlot src={heroRender} alt="Residência unifamiliar" />
  ```

  The eight slots are `hero-main`, `sobre-retrato`, `serv-visual`, and
  `proj-1`…`proj-4`. Aspect ratios and hover-zoom are already wired.

## Project structure

```
src/
├── main.jsx / App.jsx        # entry + section composition
├── index.css                 # reset, shared utilities, reveal base, keyframes
├── styles/tokens.css         # design tokens (dark + light) — ported 1:1
├── data/site.js              # contact config + derived links
├── hooks/
│   ├── useTheme.jsx          # theme context (persist + logo swap)
│   └── useSiteAnimations.js  # GSAP reveal / parallax / counters
└── components/               # one folder-mate .css per component
    ├── Navbar / MobileMenu / Hero / CountersBand / About / Services
    ├── Process / Projects / Audience / Contact / Footer / WhatsAppFab
    ├── Eyebrow / ImageSlot
    └── icons/                # all SVG icons (WhatsApp, sun/moon, etc.)
```

## Notes

- **Font:** Satoshi, loaded from Fontshare (as in the prototype). To self-host,
  drop the `.woff2` files in and swap the `<link>` in `index.html` for local
  `@font-face` rules.
- The `uploads/referencias/*` images in the handoff bundle were third-party
  website references (design inspiration), **not** JM's own renders, so they were
  intentionally left out. Add real project photos via `ImageSlot src`.
