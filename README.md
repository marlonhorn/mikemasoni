# Mike Masoni — Luxury Portfolio Website

A fully redesigned, dark, premium portfolio website built with **Next.js + Tailwind CSS** for Mike Masoni (photography + videography).

## Implemented website structure

- Fullscreen cinematic hero
- Filterable portfolio gallery with immersive lightbox
- Minimal about section with portrait block
- Services grid (editorial / commercial / portraits / events)
- Contact section with premium minimal form and social links
- Sticky transparent navbar with fullscreen mobile menu
- Smooth section reveal animations and smooth scrolling

## Recommended folder structure

```text
src/
  app/
    globals.css
    layout.tsx
    page.tsx
  components/
    about.tsx
    contact.tsx
    footer.tsx
    hero.tsx
    navbar.tsx
    portfolio.tsx
    reveal.tsx
    services.tsx
  data/
    content.ts
public/
  media/
    hero.svg
    about.svg
    gallery-01.svg ... gallery-08.svg
```

## Component architecture

- `Navbar`: sticky transparent nav, desktop links, fullscreen mobile menu
- `Hero`: cinematic opening with large visual impact
- `Portfolio`: centerpiece gallery (filters + hover motion + fullscreen lightbox)
- `Reveal`: reusable viewport-triggered fade/slide animation wrapper
- `About`, `Services`, `Contact`, `Footer`: modular sections with consistent spacing

## Design system highlights

- Near-black background with white/gray typography
- Editorial-inspired headings and generous whitespace
- Subtle transitions, hover zoom, layered gradients
- Responsive grid behavior across mobile/tablet/desktop
- SEO metadata configured in `layout.tsx`

## Suggestions for future enhancement

- Add **Framer Motion** for advanced page transitions and spring animations
- Integrate a production lightbox library like **yet-another-react-lightbox**
- Connect real media via Next Image optimization pipelines/CDN
- Add Instagram API feed module for live content sync

## Development

```bash
npm install
npm run dev
npm run lint
npm run build
```
