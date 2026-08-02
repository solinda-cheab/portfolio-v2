# Linda — Portfolio

A personal portfolio built with **React + Vite + Tailwind CSS**, styled after the shadcn/ui
aesthetic (neutral palette, bordered cards, clean type). Includes SEO/OpenGraph metadata,
a dark/light toggle, an English ⇄ Khmer language toggle, and a certificates section that's
hidden by default and only shown in a modal when the user clicks "View Certificates."

## Project structure

```
linda-portfolio/
├── index.html              # HTML shell + SEO/OpenGraph/JSON-LD meta tags
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── favicon.svg         # add resume.pdf and og-image.png here too
└── src/
    ├── main.jsx             # React entry point
    ├── App.jsx               # top-level layout, language + theme state
    ├── index.css              # Tailwind directives + custom styles
    ├── i18n/
    │   └── translations.js    # all EN/KM copy in one place
    ├── hooks/
    │   └── useReveal.js        # scroll-reveal animation hook
    └── components/
        ├── Header.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── Certificates.jsx     # click-to-reveal modal
        ├── Contact.jsx
        ├── Footer.jsx
        └── icons/
            └── Icons.jsx        # shared inline SVG icons
```

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build      # production build to /dist
npm run preview     # preview the production build
```

## Before you publish — replace these placeholders

| What | Where |
|---|---|
| Email address | `src/components/Contact.jsx` (`mailto:your.email@example.com`) |
| GitHub URL | `src/components/Contact.jsx` |
| LinkedIn URL | `src/components/Contact.jsx` |
| Resume file | Add `resume.pdf` to `/public/` (linked from Contact) |
| Certificates | `src/i18n/translations.js` → `certSample` (title, issuer, date) for both `en` and `km` |
| Project links | `src/i18n/translations.js` → each project's `href` |
| OpenGraph image | Add `og-image.png` (1200×630px) to `/public/`, referenced in `index.html` |
| Canonical domain | `index.html` → `og:url`, `twitter:image`, `<link rel="canonical">`, and the JSON-LD `url` |

## Notes

- All content strings live in `src/i18n/translations.js` — edit copy there rather than
  inside components, so the language toggle stays in sync.
- The certificates modal opens on click and closes on Escape, the close button, or a
  backdrop click.
- Colors and fonts are defined once in `tailwind.config.js`; change them there to
  re-theme the whole site.
