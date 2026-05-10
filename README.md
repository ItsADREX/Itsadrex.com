# itsadrex.com — React Portfolio

Vite + React + Tailwind + Framer Motion rebuild of Adam Oladiran's portfolio with live iframe previews of the 5 deployed Netlify demo sites.

## Local development

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build for production

```bash
npm run build
```

Outputs to `dist/`. Upload the **contents** of `dist/` (not the folder itself) to Hostinger `public_html/`, replacing the existing files. `.htaccess` is not required — routing uses hash-based URLs (`#/portfolio`, `#/contact`, etc.) which work on any static host.

## Preview the build locally

```bash
npm run preview
```

## Project structure

```
src/
├── main.jsx            router + mount
├── App.jsx             layout shell with page transitions
├── index.css           Tailwind + component styles
├── data/projects.js    projects, apps, skills, contact info
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── ThemeToggle.jsx
│   ├── Reveal.jsx           framer-motion fade-up on scroll
│   ├── ProjectCard.jsx      wraps BrowserFrame + metadata
│   ├── BrowserFrame.jsx     live, scaled-down iframe of the site
│   ├── PhoneFrame.jsx       mobile app mock
│   ├── CodeCard.jsx         hero code snippet
│   └── CTA.jsx
└── pages/
    ├── Home.jsx
    ├── Portfolio.jsx
    ├── Blog.jsx
    └── Contact.jsx
```

## Editing content

- **Project list, apps, skills, contact info:** `src/data/projects.js`.
- **Pages:** `src/pages/*.jsx`.
- **Colors / theme:** `tailwind.config.js` and CSS variables in `src/index.css`.
