# Administrative Portfolio

A responsive one-page portfolio for administrative professionals, built with Vue 3 and Vite. It presents a profile, professional summary, skills, experience, education, independent learning, and configurable social media links.

[![CI](https://github.com/rpdigitalmain/administrative-portfolio/actions/workflows/ci.yml/badge.svg?branch=develop)](https://github.com/rpdigitalmain/administrative-portfolio/actions/workflows/ci.yml)
[![Version](https://img.shields.io/badge/version-1.0.0-informational)](CHANGELOG.md)
[![License](https://img.shields.io/github/license/rpdigitalmain/administrative-portfolio)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-22.18%2B%20%7C%2024.12%2B-339933?logo=nodedotjs&logoColor=white)](package.json)

## Features

- Responsive portfolio layout for desktop, tablet, and mobile screens.
- Reusable Vue components grouped by layout and portfolio content.
- Portfolio text and records centralized in `src/data/portfolio.js`.
- Social media links and Font Awesome icons configured from portfolio data.
- Cloudflare R2 profile photo with an initials fallback.
- Resume PDF generated from portfolio data with a QR code to the site.
- Self-hosted Latin Inter font subset for Portuguese and English content.
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
| `npm run test:unit` | Run unit tests with Node.js's built-in test runner. |
| `npm run test:e2e` | Run Playwright browser integration tests. |
| `npm run test:e2e:ui` | Open the Playwright test runner UI. |
| `npm test` | Run unit and browser integration tests. |

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
├── services/            Client-side PDF generation
└── main.js              Application entry point

test/unit/               Node.js unit tests
test/e2e/                Playwright browser integration tests
docs/                    Architecture, contribution, and security notes
```

## Personalize the portfolio

Edit `src/data/portfolio.js` to replace the sample values with the portfolio owner's name, experience, skills, education, independent learning, and other details. Set `profileImage` to a public image URL or `null`; the profile card shows the initials if the URL is empty or fails to load. The header downloads a generated resume PDF based on the available profile data, leaving out empty sections and adding a QR code for the configured site URL or current origin.

Edit the `socialLinks` list in `src/data/portfolio.js` to add or remove profiles. Each item has a label, icon key, and URL or phone number. Set `displayValue` to control the short identifier shown in the generated resume. WhatsApp uses a phone number with the country code instead of a URL. Add icon keys to `src/icons/portfolioIcons.js` using Font Awesome definitions.

## Validate changes

```sh
npm run lint
npm run test:unit
npm run build
npm run test:e2e
```

Run `npm test` to execute both unit and browser integration suites. The CI workflow runs lint, unit tests, production builds, and browser integration tests on Windows and Linux for the supported Node.js versions. It also audits production dependencies and builds the Docker image.

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
