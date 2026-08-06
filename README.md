# Utsavkumar Patel — Developer Portfolio

A production-ready developer portfolio built with **React + TypeScript + Vite**, styled with
**Tailwind CSS v4**, routed with **React Router v7**, and using **react-helmet-async** for
per-page SEO metadata.

## Stack

- React 19 + TypeScript, bundled with Vite
- Tailwind CSS v4 (via `@tailwindcss/vite`, no separate PostCSS config needed)
- React Router v7 (client-side routing, incl. `/projects/:slug` case-study pages)
- react-helmet-async for per-route `<title>`/meta tags
- lucide-react for iconography (brand logos for GitHub/LinkedIn/Twitter are small inline
  SVGs in `src/components/icons/BrandIcons.tsx` — lucide-react v1 dropped brand icons)

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build locally
```

## Project structure & implementation notes

```
src/
  data/            Placeholder-friendly content arrays — EDIT THESE to re-brand the site
    site.ts          name, roles, intro, resume path, social links, SEO defaults
    skills.ts        skill categories -> skills (renders as an icon/label grid, not bars)
    projects.ts       featured + secondary projects, each with a nested `caseStudy` object
    experience.ts    work + education timeline entries (vertical timeline)
    openSource.ts    GitHub username + notable contributions list
    blog.ts          optional blog/writing cards; set `showBlogSection = false` to hide

  components/
    layout/          Header (hamburger nav + theme toggle), Footer, SkipLink, SEO
    hero/            Hero (typing effect via useTypingEffect), TerminalWindow (decorative)
    about/           About (stats, tech stack chips, fun fact)
    skills/          SkillsCloud (category -> icon grid)
    projects/        ProjectCard, ProjectGrid, CaseStudyPreview, ProjectImagePlaceholder
    opensource/       OpenSource (GitHub contribution graph embed + contributions list)
    blog/            BlogSection, BlogCard
    experience/      ExperienceTimeline
    contact/         ContactCTA, ContactForm

  pages/
    Home.tsx         Composes every section in order for the single-page layout
    CaseStudy.tsx    Dynamic case-study page driven by `data/projects.ts`
    NotFound.tsx     404 page (also used as the catch-all route)

  lib/
    useTypingEffect.ts   Hook powering the rotating hero role text (respects prefers-reduced-motion)
    ThemeProvider.tsx    Light/dark theme context, persisted to localStorage
```

### Reusable components

`Hero`, `ProjectGrid`, `ProjectCard`, `CaseStudyPreview`, `SkillsCloud`, `ExperienceTimeline`,
and `ContactCTA` are all self-contained and pull exclusively from `src/data/*` — none of them
hardcode content, so re-skinning the site for someone else means editing the data files only.

### Adding a project + case study

Push a new object onto the `projects` array in `src/data/projects.ts` with the same shape
(`slug`, `title`, `tech`, links, and a nested `caseStudy`). The grid and the `/projects/:slug`
route both pick it up automatically — no routing changes needed.

### Images

`ProjectImagePlaceholder` generates a deterministic gradient + initials placeholder so the
grid looks complete without real screenshots. To use real images:

1. Drop optimized images (WebP/AVIF preferred) in `public/projects/`.
2. Add an `image` field to the relevant `Project` object.
3. Swap `<ProjectImagePlaceholder />` for a native `<img loading="lazy" decoding="async" />`
   (or `next/image`-equivalent if you later migrate to Next.js) in `ProjectCard.tsx` and
   `CaseStudy.tsx`.

### SEO / metadata

Every route renders an `<SEO title="..." description="..." path="..." />` (see
`src/components/layout/SEO.tsx`). Site-wide defaults (keywords, canonical base URL, OG
description) live in `seoDefaults` in `src/data/site.ts` — update `siteUrl` there once you
have a real deployment domain.

### Contact form

`ContactForm` builds a `mailto:` link client-side so it works with zero backend on any static
host. To capture submissions server-side instead, replace the `onSubmit` handler in
`src/components/contact/ContactForm.tsx` with a POST to Formspree, Netlify Forms, or a custom
API route.

### Accessibility

- Skip-to-content link, semantic landmarks (`header`/`nav`/`main`/`footer`/`section`)
- All interactive controls (hamburger menu, theme toggle, "show more projects") are real
  `<button>`s with `aria-expanded`/`aria-controls` where relevant
- Visible focus rings (`:focus-visible`) and `prefers-reduced-motion` support baked into
  `src/index.css`
- Typing-effect roles are also exposed as static text via `.sr-only` for screen readers

### Responsive breakpoints

Tailwind's default breakpoints are used throughout: mobile-first base styles, `sm:` (640px)
for two-column grids, `lg:` (1024px) for the three-column project grid and side-by-side
hero/timeline layouts. The nav collapses to a hamburger menu below `md:` (768px).

## Deployment

This is a static SPA — any static host works. Two notes specific to client-side routing:

- **Vercel / Netlify**: both handle SPA fallback automatically for Vite projects, but if you
  see 404s on deep links (e.g. `/projects/rolling-dice-app` refreshed directly), add a
  rewrite: Vercel → `vercel.json` with a catch-all rewrite to `/index.html`; Netlify → a
  `public/_redirects` file containing `/* /index.html 200`.
- **GitHub Pages**: set `base` in `vite.config.ts` to your repo name (e.g. `/portfolio/`) and
  either add a 404.html SPA-redirect trick or switch `BrowserRouter` to `HashRouter` in
  `src/main.tsx` to avoid needing server-side rewrites.

```bash
npm run build   # outputs to dist/
```
