# Architecture

## Overview

This project is a client-rendered, single-page application built with Vue 3 and Vite. Vue Router renders the home portfolio and a not-found page. Portfolio copy and records live in one JavaScript data module; components present those records without a global store or backend.

```mermaid
flowchart TD
    HTML[index.html] --> Entry[src/main.js]
    Entry --> App[src/App.vue]
    Entry --> Styles[assets/styles/main.css]
    App --> Router[router/index.js]
    Router --> Home[pages/HomePage.vue]
    Router --> NotFound[pages/NotFoundPage.vue]
    Home --> Header[components/layout/SiteHeader.vue]
    Home --> Hero[components/portfolio/HeroSection.vue]
    Home --> Grid[components/layout/PortfolioGrid.vue]
    Grid --> Cards[Portfolio cards]
    Data[data/portfolio.js] --> Hero
    Data --> Cards
    WhatsApp[WhatsApp CTA] --> External[WhatsApp Click to Chat]
```

## Application startup and routing

- `index.html` defines the document language, metadata, and `#app` mount point.
- `src/main.js` loads the Inter font, shared styles, router, and root component.
- `src/App.vue` renders the active route through `RouterView`.
- `src/router/index.js` maps `/` to the home page and unknown paths to the not-found page. Hash navigation scrolls to its target; a new route without a hash starts at the top.
- `src/pages/HomePage.vue` composes the site header, hero, and portfolio grid.

Static hosts must rewrite unknown paths to `/index.html` for history-mode routing. The included Nginx Docker configuration provides this fallback.

## Components and data

`src/components/` is grouped by responsibility:

- `layout/` contains the page header and the grid that arranges the portfolio cards.
- `portfolio/` contains the hero and cards for the profile, summary, skills, experience, contact CTA, and education.
- `pages/` contains route-level views.

`src/data/portfolio.js` is the single source for editable profile content. It exports the `portfolio` object consumed by the home page and passed to its child components. Presentation styles and responsive breakpoints live in `src/assets/styles/main.css`.

## WhatsApp contact action

`contact.whatsappNumber` in `src/data/portfolio.js` accepts digits only, including country and area codes. `WhatsAppCtaCard.vue` strips non-digit characters defensively, URL-encodes the configured message, and builds a `https://wa.me/` link. If no number is configured, the card shows a disabled setup prompt. Contact takes place in WhatsApp; this application does not submit or store the message.

## Resume file

`public/resume.pdf` is a placeholder path used by the download link. Replace it with the portfolio owner's actual resume PDF before deployment.

## Styling and assets

- Inter is self-hosted through `@fontsource-variable/inter`.
- `src/assets/styles/main.css` contains design tokens, base styles, component styles, and responsive breakpoints.
- The layout adapts from a four-column desktop grid to two columns on tablets and a single column on narrow screens.
- Reduced-motion preferences are respected for CSS transitions.

## Build, test, and runtime

- `npm run dev` starts Vite for local development.
- `npm run lint` checks JavaScript and Vue files with ESLint.
- `npm run build` creates the static production bundle in `dist/`.
- `npm run preview` serves the production bundle locally.
- `npm run test:e2e` starts Vite and runs the Playwright Chromium suite from `test/e2e/`.
- `npm run check:release -- v1.0.0` verifies that a tag matches `package.json`.
- Docker uses a Node build stage and an Nginx runtime stage.

## CI and release

GitHub Actions runs lint, build, and E2E tests on Windows and Linux across Node.js 22.18.0 and 24.12.0. Linux CI also audits production dependencies and builds the Docker image. A `v*` tag triggers the release validation workflow; that workflow validates the version and reruns the quality checks but does not publish or deploy the site.