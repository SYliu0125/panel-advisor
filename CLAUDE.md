# IHC Panel Advisor — Claude Code Guide

## Project overview

Static React/Vite SPA for surgical pathology IHC reference. No backend, no auth, no database. All diagnosis data lives in `src/panelAdvisor.js` as a single exported `DIAGNOSES` array.

## Key files

| File | Purpose |
|------|---------|
| `src/panelAdvisor.js` | All diagnosis data — the single source of truth |
| `src/PanelAdvisor.jsx` | Main search/display component |
| `src/App.jsx` | Shell layout (header, main, footer) |
| `src/index.css` | All styles via CSS custom properties |
| `vite.config.js` | Vite + React + PWA plugin config |
| `public/` | PWA icons, favicon, manifest assets |

## Data shape

Each entry in `DIAGNOSES`:
```js
{
  id: "lung-adeno",           // kebab-case, unique
  name: "Lung Adenocarcinoma",
  category: "Lung",
  markers: [
    {
      marker: "TTF-1",
      role: "positive",       // positive | negative | variable | screen | loss | retained
      sensitivity: "~80%",
      specificity: "high",
      notes: "..."
    }
  ],
  molecular: [                // optional
    { alteration: "EGFR mutation", notes: "..." }
  ]
}
```

## Important import note

`src/panelAdvisor.js` (data) and `src/PanelAdvisor.jsx` (component) differ only in case. On macOS the filesystem is case-insensitive, but Rollup resolves `.js` before `.jsx`. Always use the explicit extension when importing the component:

```js
import PanelAdvisor from './PanelAdvisor.jsx'  // correct
import PanelAdvisor from './PanelAdvisor'       // breaks production build
```

## Deployment

- Base path: `/panel-advisor/` (set in `vite.config.js` and required in all absolute asset paths in `index.html`)
- Push to `main` → GitHub Actions builds → deploys to `gh-pages` branch → live at https://syliu0125.github.io/panel-advisor/
- PWA service worker precaches all assets; users get offline access after first visit

## Styling conventions

All design tokens are CSS custom properties in `src/index.css` under `:root`. Use `var(--token)` inline or in CSS classes. No Tailwind, no CSS modules — plain CSS classes (`.btn`, `.card`, `.filter-chip`, etc.) plus inline styles for layout.

## Adding diagnoses

Add a new object to the `DIAGNOSES` array in `src/panelAdvisor.js`. The search in `PanelAdvisor.jsx` works over `name` and `category` fields automatically — no other changes needed.
