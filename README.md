# RANGRIOT Angular Website

Converted from the supplied single-index HTML into an Angular standalone application with separate routed pages.

## Pages / Routes
- Home: `/`
- About: `/about`
- Studio: `/studio`
- Clicks: `/clicks`
- Digital: `/digital`
- Contact: `/contact`

## Requirements
- Node.js 20.19+ (recommended for Angular 20)
- npm

## Run locally
```bash
npm install
npm start
```
Open `http://localhost:4200`.

## Production build
```bash
npm run build
```

## Project structure
- `src/app/app.component.*` — shared glass header, mobile navigation, footer and router outlet
- `src/app/app.routes.ts` — Angular routes
- `src/app/pages/` — one standalone component per page
- `src/styles.css` — shared styling, responsive rules and brand design system

Brand red: `#A1252A`.
