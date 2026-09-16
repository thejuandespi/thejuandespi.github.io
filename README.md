# John Despi — Portfolio

Single-page portfolio built with **React 19 + Vite + Tailwind CSS v4**. Dark by default with a light
mode, a Marathon-inspired HUD layout, animated heat-map gradients and an Alpine Green palette.

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the build locally
```

Open the folder in VS Code and edit. Vite hot-reloads on save.

## Structure

```
public/
  favicon.svg            the JD mark from the nav, as the tab icon
  John-Despi-CV.pdf      the file behind every "Download CV" button
  fonts/                 self-hosted JetBrains Mono (Regular / Medium / Bold)
src/
  data/content.js        ← ALL copy, links, projects, certs, timeline
  index.css              design tokens, Tailwind theme, custom effects
  App.jsx                page composition
  components/
    Nav.jsx              top bar, mobile drawer, theme toggle, CV button
    Dock.jsx             floating section nav, right edge (≥1280px)
    Rail.jsx             decorative status rail, left edge (≥1400px)
    Backdrop.jsx         page-wide gradient wash + film grain
    Hero.jsx             name treatment, HUD panel, ticker
    About.jsx  Skills.jsx  Certifications.jsx  Work.jsx  Contact.jsx  Footer.jsx
    SectionHead.jsx      shared section heading
  hooks/                 theme, active section, scroll progress
  lib/scroll.js          smooth anchor scrolling + focus management
```

## Editing content

Almost everything you'll want to change lives in **`src/data/content.js`**: contact details, the
skills clusters, certifications, projects and the career timeline. Components read from it, so you
rarely need to touch JSX to update the site.

**Nav sections** come from the `SECTIONS` array. The certifications block is deliberately *not* in
that array — it renders as `#certs` in the page flow but gets no nav or dock entry.

**Replacing the CV:** drop your new PDF into `public/` and update `ME.cv` in `content.js`. Keep the
leading slash (`/My-CV.pdf`).

## Design tokens

Colours, fonts and spacing live at the top of `src/index.css`.

- `:root` holds the dark palette, `[data-theme="light"]` overrides it for light mode.
- The `@theme` block maps those onto Tailwind utilities, so `bg-bg`, `text-ink`, `border-line`,
  `text-accent` and friends follow the theme toggle automatically.
- Change `--c-alpine` and `--c-alpine2` to re-brand the whole site.

**Gradient speed** is set by the `melt-a` … `melt-d` animation durations on `.field .m1`–`.m4`
(hero) and `.ambient .a1`–`.a3` (rest of the page). Lower numbers move faster. The `contrast()` in
`--melt-filter` is what fuses the blurred blobs into hard-edged bands — drop it and you get plain
soft gradients.

**Name treatment** is plain HTML text: `.name-john` is an outline via `-webkit-text-stroke`,
`.name-despi` is solid with a `mask-image` cutting three horizontal slices, plus `::before` /
`::after` copies offset left and right for the chromatic split.

Everything freezes under `prefers-reduced-motion`, and the page-wide gradient layer is disabled
below 820px so phones stay smooth.

## Contact form

`Contact.jsx` validates input and then points the visitor at a `mailto:` link — there's no backend.
To make it live, post `form` to Formspree, Netlify Forms, or your own endpoint inside `send()`.

## Deploying

Any static host works. Build with `npm run build` and serve `dist/`.

- **Netlify / Vercel:** connect the repo, build command `npm run build`, publish directory `dist`.
- **GitHub Pages:** set `base: "/<repo-name>/"` in `vite.config.js` first, then publish `dist/`.
