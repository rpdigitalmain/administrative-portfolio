# Changelog

All notable changes to this project are documented here. This changelog follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project uses [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-11-20

### Added

- Responsive administrative portfolio with profile, summary, skills, experience, education, and independent learning.
- Cloudflare R2 profile photo with an initials fallback when the image is missing or unavailable.
- WhatsApp contact links built from the configured international phone number.
- Resume PDF generated from portfolio data with a QR code linking to the public site.
- Vue Router not-found page and top-of-document navigation behavior.
- Unit and Playwright browser integration coverage for portfolio data, PDF generation, contact links, profile image fallback, mobile layout, and unknown routes.
- Architecture, contribution, and security documentation.
- CI and release checks for lint, production builds, E2E tests, dependency audit, and Docker image build.
