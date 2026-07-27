# Nasser Gamal — Portfolio

Personal portfolio of **Nasser Gamal Mohamed Idris** — AI & Machine Learning student,
founder of Mwasalaty (3rd place @ TechFront Hackathon, patent filed) and digital
marketing specialist.

**Live:** https://nassergamale1-sketch.github.io/nasser-portfolio/

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | React 19 + Vite 7 |
| Styling | Tailwind CSS v4 (CSS-first config, dark/light themes) |
| Animation | Framer Motion 12 (scroll reveals, parallax, typing, counters, marquees) |
| Fonts | Syne · Space Grotesk · JetBrains Mono (Google Fonts) |
| Hosting | GitHub Pages (`gh-pages` branch, static build) |

## Run Locally

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build & Deploy

```bash
npm run build      # outputs static site to dist/
```

Deploy to GitHub Pages (from repo root):

```bash
cd dist
git init -b gh-pages && git add -A && git commit -m deploy
git push -f https://github.com/nassergamale1-sketch/nasser-portfolio.git gh-pages
cd .. && rm -rf dist/.git
```

The site is 100% static — it also deploys as-is on **Netlify** or **Vercel**
(build command `npm run build`, output directory `dist`).

## Editing Content

All copy, links, projects, certifications, skills and stats live in **one file**:

```
src/data/content.js
```

Images go in `public/`:

| Folder / file | Used for |
|---|---|
| `public/nasser.jpg` | Hero portrait |
| `public/nasser-speaking.jpg` | Press section photo |
| `public/certificates/*.jpg` | Certificate scans (auto-hidden if missing) |
| `public/projects/*.jpg` | Project screenshots |
| `public/moments/*.jpg` | Event photos strip (auto-hidden if missing) |
| `public/Nasser_Gamal_CV.pdf` | “Download CV” button |

Missing images never break the layout — components hide them automatically.

## Custom Domain (later)

1. Buy a domain (e.g. `nassergamal.com`).
2. Add a `CNAME` file containing the domain to the `gh-pages` branch.
3. Point DNS `A` records to GitHub Pages IPs + `www` CNAME to
   `nassergamale1-sketch.github.io`.
4. Enable **Enforce HTTPS** in the repo Settings → Pages.

> Note: don’t add the CNAME file before the domain is purchased and DNS is set —
> it would break the current github.io URL.

## Structure

```
src/
├── data/content.js        ← ALL editable content
├── components/            ← one component per section
│   ├── Navbar, Hero, About, Stats, Services, Skills,
│   ├── Experience, Press, Moments, Certifications,
│   ├── Projects, Contact, Footer
│   └── ui/                ← Reveal, SpotlightCard, Lightbox, Intro,
│                            TypingText, ScrollProgress, BackToTop
└── index.css              ← Tailwind v4 theme tokens (dark + light)
```
