# IHC Panel Advisor

A fast, offline-capable reference tool for surgical pathologists. Search 175 diagnoses across 22 categories to look up IHC markers with sensitivity/specificity data and molecular alterations.

**Live app:** https://syliu0125.github.io/panel-advisor/

## Features

- **Search by diagnosis** — type a diagnosis name and pick from matched results to see the full IHC panel
- **Search by marker** — look up a marker (e.g. TTF-1, CD20) to see all diagnoses where it applies, sorted by positivity role
- **Search by genetic alteration** — reverse-lookup by gene, fusion, or keyword (e.g. EWSR1, BRAF, ETV6-NTRK3)
- **PWA** — installable on iOS and Android for offline use; works without internet after first visit

## Data

175 diagnoses with IHC markers and molecular alterations. Sources:
- *Quick Reference Handbook for Surgical Pathologists* (Rekhtman et al.)
- *Dabbs' Diagnostic Immunohistochemistry*
- WHO Classification of Tumours
- Peer-reviewed pathology literature

Sensitivity/specificity values are approximate ranges. This tool is a reference aid only — not a substitute for institutional guidelines or clinical judgement.

## Stack

- React 18 + Vite 6
- `vite-plugin-pwa` for service worker and web app manifest
- No backend — all data is bundled in `src/panelAdvisor.js`
- Deployed to GitHub Pages via GitHub Actions

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build
npm run preview  # preview production build locally
```

Pushes to `main` automatically deploy via `.github/workflows/deploy.yml`.
