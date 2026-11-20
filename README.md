# Administrative Portfolio

A responsive one-page portfolio for administrative professionals, built with Vue 3 and Vite. It presents a profile, professional summary, skills, experience, education, certifications, and configurable social media links.

## Features

- Responsive portfolio layout for desktop, tablet, and mobile screens.
- Reusable Vue components grouped by layout and portfolio content.
- Portfolio text and records centralized in `src/data/portfolio.js`.
- Social media links and Font Awesome icons configured from portfolio data.
- Reduced-motion support and semantic page sections.
- Vue Router history mode with a not-found page.
- Docker image for serving the production build with Nginx.
- Playwright end-to-end coverage and GitHub Actions CI.

## Requirements

Use Node.js `^22.18.0` or `>=24.12.0`, as declared in `package.json`.

## Getting started

```sh
npm ci
npm run dev
```

Vite prints the local development URL when the server starts.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run build` | Create the production bundle in `dist/`. |
| `npm run preview` | Serve the production bundle locally. |
| `npm run lint` | Check JavaScript and Vue files with ESLint. |
| `npm run lint:fix` | Apply automatic ESLint fixes. |
| `npm run test:e2e` | Run Playwright end-to-end tests. |
| `npm run test:e2e:ui` | Open the Playwright test runner UI. |

Install Playwright Chromium once per environment before running E2E tests:

```sh
npx playwright install chromium
```

## Project structure

```text
src/
├── assets/styles/       Modular CSS, split by responsibility
│   ├── main.css         CSS entry point and import order
│   ├── token.css        Colors and shared design values
│   ├── reset.css        Browser reset
│   ├── base.css         Global page defaults
│   ├── typography.css   Heading and text styles
│   ├── layout.css       Shell, header, hero, and grid
│   ├── components.css   Portfolio card styles
│   ├── pages.css        Route-level page styles
│   ├── utilities.css    Shared helpers and animation
│   └── responsive.css   Responsive and reduced-motion rules
├── components/
│   ├── common/          Reusable icon list
│   ├── layout/          Site header and portfolio grid
│   └── portfolio/       Hero and portfolio cards
├── data/portfolio.js    Editable portfolio content
├── icons/               Font Awesome icon registry
├── pages/               Home and not-found pages
├── router/              Vue Router configuration
└── main.js              Application entry point

test/e2e/                Playwright browser tests
docs/                    Architecture, contribution, and security notes
public/resume.pdf        Replace with the portfolio owner's resume
```

## Personalize the portfolio

Edit `src/data/portfolio.js` to replace the bracketed sample values with the portfolio owner's name, experience, skills, education, certifications, and other details. Replace `public/resume.pdf` with a real PDF before publishing the site.

Edit the `socialLinks` list in `src/data/portfolio.js` to add or remove profiles. Each item has a label, URL, and icon key. Add icon keys to `src/icons/portfolioIcons.js` using Font Awesome definitions.

## Validate changes

```sh
npm run lint
npm run build
npm run test:e2e
```

The CI workflow runs these checks on Windows and Linux for the supported Node.js versions. It also audits production dependencies and builds the Docker image.

## Run with Docker

```sh
docker compose up --build
```

Open <http://localhost:8080>. To stop the service, run `docker compose down`.

## Deployment

The production bundle in `dist/` can be hosted on any static host that supports SPA fallback routing. Configure unknown paths to serve `/index.html` so direct visits to Vue Router routes work. The included Docker image uses Nginx and provides that fallback.

Version tags that begin with `v` trigger lint, build, and E2E checks. The release workflow does not publish or deploy the site.

## Documentation

- [Architecture](docs/ARCHITECTURE.md) describes the application structure and data flow.
- [Contributing](docs/CONTRIBUTING.md) explains local checks and contribution conventions.
- [Security policy](docs/SECURITY.md) explains supported releases and vulnerability reporting.

## License

This project is licensed under the [MIT License](LICENSE).
