# Contributing

Keep contributions focused and update the documentation when setup, behavior, or architecture changes.

## Local setup

Use Node.js `^22.18.0` or `>=24.12.0`, then install dependencies and start the development server:

```sh
npm ci
npm run dev
```

## Validate changes

Run the checks that match your change before opening a pull request:

```sh
npm run lint
npm run build
npx playwright install chromium
npm run test:e2e
```

Playwright Chromium only needs to be installed once per environment. The GitHub Actions workflow runs lint, build, and E2E checks on Windows and Linux with the supported Node versions. Linux CI also audits production dependencies and builds the Docker image.

Add or update E2E coverage when changing visible page content, navigation, responsive layout, or contact behavior. Include `package-lock.json` when changing npm dependencies.

## Run with Docker

```sh
docker compose up --build
```

Visit <http://localhost:8080>. Stop the service with `docker compose down`.

## Commit messages

Use the conventional format with a short imperative description:

```text
<type>(<optional-scope>): <description>
```

Common types include `feat`, `fix`, `docs`, `refactor`, `test`, `build`, `ci`, and `chore`.

Examples:

```text
feat(portfolio): add a WhatsApp contact action
test(e2e): cover the mobile portfolio layout
docs: document local setup and release checks
```

## Release checks

The package version is the source of truth for release tags. Before creating a tag, run:

```sh
npm run check:release -- v1.0.0
```

The tag must use the `v` prefix and match the version in `package.json`. Release tags run validation only; publishing and deployment remain separate tasks.