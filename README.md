# Nasser Gamal — Portfolio

Dark, terminal-inspired single-page portfolio. Vite + React 19 + Tailwind CSS v4 + Framer Motion. Builds to pure static files.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build for deployment

```bash
npm run build      # output in /dist — upload anywhere
npm run preview    # test the production build locally
```

`dist/` is fully static — drag-and-drop it to **Netlify**, connect the repo to **Vercel**, or serve it from **GitHub Pages**. No server needed.

## Editing content (no code knowledge needed)

**Everything lives in `src/data/content.js`** — name, links, about text, skills, experience, press, certifications and projects. Edit that one file and save.

### Swapping in real project screenshots

1. Put images in `public/projects/` named `project-1.jpg`, `project-2.jpg`, … (any format works — update the filename in content.js if you use `.png`)
2. In `src/data/content.js`, find the `projects` array and update each entry's `title`, `desc`, `result` (e.g. `"+40% engagement"`), and `alt` text.

Until a real image exists, cards show a styled "screenshot coming soon" placeholder automatically — nothing ever looks broken.

## Structure

```
src/
  data/content.js        ← ALL text/content here
  components/
    Navbar.jsx           sticky pill nav + mobile menu
    Hero.jsx             name, tagline, terminal card, marquee
    About.jsx            pull-quote + summary + fact chips
    Skills.jsx           builder.exe / growth.exe toggle
    Experience.jsx       git-log style timeline
    Press.jsx            TV appearance badges
    Certifications.jsx   badge wall
    Projects.jsx         swap-ready work gallery
    Contact.jsx          channels + mailto form
    Footer.jsx
    ui/Reveal.jsx        scroll-reveal wrapper
    ui/SectionHeader.jsx numbered section headings
```
