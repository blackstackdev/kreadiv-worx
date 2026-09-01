# Krēˈādiv Worx Website

The public home for Krēˈādiv Worx: an independent software studio building useful, local-first products with visible proof and honest status labels.

Live site: https://blackstackdev.github.io/kreadiv-worx/

## Current state

- Static public presentation prepared for GitHub Pages.
- NestKeeper is the flagship commercial release candidate; PortalDrop beta.29 is the current cross-device private-transfer candidate.
- The home, `/nestkeeper`, `/portaldrop`, product privacy/support, `/about`, and `/links` routes use the approved production mark and current portfolio evidence.
- `/nestkeeper` presents v1.0.4 proof, planned founding pricing, customer boundaries, and a Lemon Squeezy-ready checkout state. Without an approved buyer URL, the button remains disabled and no binary or payment route is public.
- `/portaldrop` presents real Windows PC-to-PC proof, a captioned demo, honest same-Wi-Fi/Tailscale guidance, and dedicated Play-ready privacy and support pages. No public Android installation route is claimed yet.
- `/about` documents Raiden's role, the Raiden/Codex collaboration, and the June–August 2026 build journey.
- Decorative and scroll-driven animation is intentionally removed. Navigation remains interactive and accessible.

## Run locally

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` only when testing an approved Lemon Squeezy buyer URL. Private payout, identity, tax, bank, PayPal, password, and API details do not belong in the repository.

## Verify

```bash
npm run lint
npm test
npm run build:pages
```

`npm test` builds the production bundle and verifies all rendered product and policy routes, the static-presentation contract, navigation accessibility, and Windows-safe production asset paths. `npm run build:pages` creates the static `out/` artifact when `GITHUB_PAGES=true`.

## Public boundary

The site does not collect user data, create accounts, process payments, or expose private project information. New external destinations remain separate release actions.
