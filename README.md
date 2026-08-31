# Krēˈādiv Worx Website

The public home for Krēˈādiv Worx: an independent software studio building useful, local-first products with visible proof and honest status labels.

Live site: https://blackstackdev.github.io/kreadiv-worx/

## Current state

- Static public presentation prepared for GitHub Pages.
- NestKeeper is the flagship release candidate.
- The home, `/about`, and `/links` routes use the approved production mark and current portfolio evidence.
- `/about` documents Raiden's role, the Raiden/Codex collaboration, and the June–August 2026 build journey.
- Decorative and scroll-driven animation is intentionally removed. Navigation remains interactive and accessible.

## Run locally

```bash
npm install
npm run dev
```

## Verify

```bash
npm run lint
npm test
npm run build:pages
```

`npm test` builds the production bundle and verifies all three rendered routes, the static-presentation contract, navigation accessibility, and Windows-safe production asset paths. `npm run build:pages` creates the static `out/` artifact when `GITHUB_PAGES=true`.

## Public boundary

The site does not collect user data, create accounts, process payments, or expose private project information. New external destinations remain separate release actions.
