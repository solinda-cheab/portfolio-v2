

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
## Notes

- All content strings live in `src/i18n/translations.js` — edit copy there rather than
  inside components, so the language toggle stays in sync.
- The certificates modal opens on click and closes on Escape, the close button, or a
  backdrop click.
- Colors and fonts are defined once in `tailwind.config.js`; change them there to
  re-theme the whole site.
