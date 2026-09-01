# NestKeeper Lemon Squeezy Handoff

## Current state

The storefront integration is prepared but disabled. No Lemon Squeezy account, store, product, buyer link, payment method, bank account, PayPal account, KYC record, or customer download is connected to this repository.

The site enables checkout only when `NEXT_PUBLIC_NESTKEEPER_CHECKOUT_URL` contains an HTTPS Lemon Squeezy `/buy/` URL. Missing, malformed, non-HTTPS, or non-Lemon-Squeezy values keep the customer button closed.

## Private setup later

1. Create or open the Krēˈādiv Worx Lemon Squeezy store in test mode.
2. Complete private owner, tax, payout, and identity fields directly in Lemon Squeezy. Never save those details in this repository.
3. Create **NestKeeper 1.0 — Founding Edition** as a single-payment digital product priced at **£9 GBP**.
4. Attach the installer, portable build, and customer-docs ZIP from the private NestKeeper release folder.
5. Preserve the stated personal licence: one purchaser, up to three personally controlled Windows PCs, with released NestKeeper 1.x updates.
6. Add the unsigned-Windows/SmartScreen disclosure, limitations, privacy boundary, support route, and refund terms before activation.
7. Complete a dummy purchase and download in Lemon Squeezy test mode. Confirm every file, filename, checksum, email, receipt, and return route.
8. Put the test buyer URL in a local `.env.local` file and rebuild the static site. Do not commit `.env.local`.
9. Switch to a live buyer URL only after the all-drive, signing, legal, payout, store-approval, and private delivery gates are explicitly approved.

## Local configuration

```env
NEXT_PUBLIC_NESTKEEPER_CHECKOUT_URL=https://your-store.lemonsqueezy.com/buy/your-product-id
```

The checkout URL is public by design. Passwords, API keys, bank information, government identity, tax records, PayPal details, and private customer files must never be placed in this environment variable or repository.

