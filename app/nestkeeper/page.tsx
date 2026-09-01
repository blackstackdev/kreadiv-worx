import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "../components/site-header";
import { sitePath } from "../lib/site-path";
import { nestkeeperCheckoutReady, nestkeeperCheckoutUrl } from "../lib/nestkeeper-checkout";

export const metadata: Metadata = {
  title: "NestKeeper — Exact duplicate control for Windows",
  description:
    "NestKeeper finds byte-for-byte duplicate files across local Windows folders and drives, then keeps every cleanup decision in human hands.",
  openGraph: {
    title: "NestKeeper — Find the copies. Keep the control.",
    description:
      "A local-only exact duplicate finder for Windows, with every cleanup decision kept in human hands.",
    images: [
      {
        url: sitePath("/products/nestkeeper-social-16x9.png"),
        width: 1600,
        height: 900,
        alt: "NestKeeper product page showing its local-only Windows duplicate scanner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NestKeeper — Find the copies. Keep the control.",
    description:
      "A local-only exact duplicate finder for Windows, with every cleanup decision kept in human hands.",
    images: [sitePath("/products/nestkeeper-social-16x9.png")],
  },
};

const proof = [
  ["52,117", "files in one acceptance run"],
  ["916", "exact-duplicate groups"],
  ["994", "marked extras removed"],
  ["0", "inspection errors in that run"],
];

const workflow = [
  ["01", "Choose the scope", "Scan one folder, several folders, or an explicitly selected broad local scope."],
  ["02", "Review exact matches", "SHA256 confirms byte-for-byte matches. NestKeeper protects one suggested keeper per group."],
  ["03", "Decide deliberately", "Unmark anything important, then use Recycle Bin, a same-drive review folder, or Advanced permanent deletion."],
  ["04", "Keep the receipt", "Reopen dated Cleanup Sessions and export redacted records with SHA256 checksums."],
];

const gallery = [
  ["nestkeeper-v1.0.4-ready.png", "Ready", "One clear starting point, with focused and broad scan lanes kept separate."],
  ["nestkeeper-v1.0.4-review.png", "Review", "Every exact match stays visible before any file changes."],
  ["nestkeeper-v1.0.4-history.png", "History", "Completed sessions reopen without repeating a multi-hour discovery pass."],
  ["nestkeeper-v1.0.4-delete.png", "Advanced safety", "Permanent deletion requires exact review, typed confirmation, and fresh validation."],
];

export default function NestKeeperPage() {
  return (
    <main className="product-page" id="top">
      <div className="product-opening">
        <SiteHeader />
        <section className="product-hero shell">
          <div className="product-hero-copy">
            <p className="eyebrow eyebrow--light"><span /> NestKeeper · Windows · v1.0.4</p>
            <h1>Find the copies.<br /><em>Keep the control.</em></h1>
            <p className="product-hero-lede">
              NestKeeper finds byte-for-byte duplicates across local folders and drives.
              It never decides which file matters. You do.
            </p>
            <div className="product-badges" aria-label="Product status">
              <span>Founding release candidate</span><span>Local-only</span><span>No subscription</span>
            </div>
            <div className="hero-actions">
              {nestkeeperCheckoutReady ? (
                <a className="button button--primary product-checkout-live" href={nestkeeperCheckoutUrl ?? undefined}>Buy NestKeeper — £9 <span>↗</span></a>
              ) : (
                <span className="button product-button-disabled" aria-disabled="true">Lemon Squeezy checkout prepared · not live</span>
              )}
              <a className="button button--quiet" href="#proof">Inspect the proof <span>↓</span></a>
            </div>
            <p className="product-gate-note">Planned founding price: <strong>£9 GBP once</strong>. The Lemon Squeezy buyer link stays closed while final verification, seller terms, signing, and test delivery are completed.</p>
          </div>
          <div className="product-hero-media">
            <div className="product-screen-frame">
              <div className="window-bar"><span /><span /><span /><small>v1.0.4 · local only</small></div>
              <Image src={sitePath("/products/nestkeeper-v1.0.4-ready.png")} alt="NestKeeper v1.0.4 ready screen with focused folder, multi-folder, and deliberate Full Scan choices" width={1344} height={959} priority unoptimized />
            </div>
            <p><span>Files stay here</span><strong>On your computer.</strong></p>
          </div>
        </section>
      </div>

      <section className="product-proof" id="proof" aria-labelledby="proof-title">
        <div className="shell">
          <div className="product-section-heading">
            <p className="eyebrow"><span /> One real acceptance run</p>
            <h2 id="proof-title">Receipts before rhetoric.</h2>
            <p>The run identified 236.44 GB of possible waste. That is a scan estimate—not a verified free-space claim—until the remaining drive check is closed.</p>
          </div>
          <div className="product-proof-grid">
            {proof.map(([value, label]) => <p key={label}><strong>{value}</strong><span>{label}</span></p>)}
          </div>
        </div>
      </section>

      <section className="product-section shell" aria-labelledby="workflow-title">
        <div className="product-section-heading product-section-heading--wide">
          <p className="eyebrow"><span /> The complete workflow</p>
          <h2 id="workflow-title">Scan. Review. Decide. Retain the receipt.</h2>
        </div>
        <div className="product-workflow">
          {workflow.map(([number, title, text]) => (
            <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="product-gallery-section" aria-labelledby="gallery-title">
        <div className="shell">
          <div className="product-section-heading product-section-heading--light">
            <p className="eyebrow eyebrow--light"><span /> Current build · real interface</p>
            <h2 id="gallery-title">Nothing important is hidden behind a promise.</h2>
          </div>
          <div className="product-gallery">
            {gallery.map(([file, label, caption]) => (
              <figure key={file}>
                <Image src={sitePath(`/products/${file}`)} alt={`NestKeeper v1.0.4 ${label.toLowerCase()} screen`} width={1344} height={959} unoptimized />
                <figcaption><strong>{label}</strong><span>{caption}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="product-section shell" aria-labelledby="edition-title">
        <div className="product-offer">
          <div className="product-offer-copy">
            <p className="eyebrow"><span /> Planned founding edition</p>
            <h2 id="edition-title">One purchase.<br /><em>No rent.</em></h2>
            <p>Built for people managing years of downloads, photos, project folders, backups, and external drives on Windows.</p>
          </div>
          <div className="product-price-card">
            <p className="status status--blue">{nestkeeperCheckoutReady ? "Founding checkout available" : "Lemon Squeezy integration ready · no live URL"}</p>
            <div className="product-price"><strong>£9</strong><span>founding price<br />one-time</span></div>
            <ul>
              <li>Installer and portable Windows builds</li>
              <li>One purchaser · up to three personally controlled PCs</li>
              <li>NestKeeper 1.x updates included when released</li>
              <li>No account, telemetry, advertising, or cloud upload</li>
            </ul>
            <p className="product-price-future">Planned regular price: £15. A future 2.x release, organisational deployment, and data-recovery services are not included.</p>
          </div>
        </div>
      </section>

      <section className="product-trust" aria-labelledby="trust-title">
        <div className="shell product-trust-grid">
          <div>
            <p className="eyebrow eyebrow--light"><span /> Release gate</p>
            <h2 id="trust-title">Why can&apos;t I buy it yet?</h2>
          </div>
          <div className="product-gate-list">
            <p><strong>Final all-drive verification</strong><span>The focused and multi-folder workflows are proven. The exact broadest scope still receives one monitored gate.</span></p>
            <p><strong>Windows signing decision</strong><span>The current independent binaries are unsigned and may trigger SmartScreen. That cannot be hidden from customers.</span></p>
            <p><strong>Seller and delivery test</strong><span>Legal seller details, refund/support terms, checkout identity, and a private customer download test must agree.</span></p>
          </div>
        </div>
      </section>

      <section className="product-section shell product-faq" aria-labelledby="faq-title">
        <div className="product-section-heading"><p className="eyebrow"><span /> Before you trust it</p><h2 id="faq-title">Straight answers.</h2></div>
        <div className="product-faq-grid">
          <article><h3>Does it upload my files?</h3><p>No. The packaged app has no account, telemetry, advertising, cloud sync, or upload feature.</p></article>
          <article><h3>Does it find similar photos?</h3><p>No. v1.0.4 finds byte-for-byte exact duplicates with SHA256, not visually similar or re-encoded media.</p></article>
          <article><h3>Does scanning delete anything?</h3><p>No. Scanning is read-only. Cleanup and restore actions require separate, deliberate confirmation.</p></article>
          <article><h3>Which Windows versions?</h3><p>The release candidate targets 64-bit Windows 10 and 11. No Node.js, account, or internet connection is required.</p></article>
        </div>
        <div className="product-policy-links">
          <Link href="/privacy">Read the privacy boundary →</Link>
          <Link href="/support">Read the support boundary →</Link>
        </div>
      </section>

      <footer className="site-footer shell">
        <p>A Krēˈādiv Worx product · Product direction: Raiden · Implementation: Codi</p>
        <a href="#top" aria-label="Back to top">Back to top ↑</a>
      </footer>
    </main>
  );
}
