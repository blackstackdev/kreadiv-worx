import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "../components/site-header";
import { sitePath } from "../lib/site-path";

export const metadata: Metadata = {
  title: "PortalDrop — Private file handoff",
  description:
    "PortalDrop hands files between trusted Windows PCs and Android devices through one Windows host, without a PortalDrop cloud account.",
  openGraph: {
    title: "PortalDrop — Private file handoff",
    description:
      "Windows PC to PC or Android, through one host you control. Same Wi-Fi works directly; Tailscale is optional for remote access.",
    images: [
      {
        url: sitePath("/products/portaldrop-social-16x9.png"),
        width: 1920,
        height: 1080,
        alt: "PortalDrop private file handoff across Windows PCs and Android devices",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PortalDrop — Private file handoff",
    description:
      "Windows PC to PC or Android, through one host you control. No PortalDrop cloud.",
    images: [sitePath("/products/portaldrop-social-16x9.png")],
  },
};

const proof = [
  ["6/6", "release checks passed"],
  ["Huawei", "physical transfer and download checked"],
  ["1 host", "stores and serves the files"],
  ["0", "PortalDrop cloud uploads"],
];

const workflow = [
  ["01", "Run the Windows host", "PortalDrop stores the files on one Windows PC you control."],
  ["02", "Pair a trusted device", "Use a short-lived pairing link on another Windows PC or an Android device."],
  ["03", "Choose the route", "Use the local address on the same Wi-Fi, or your private Tailscale route when away."],
  ["04", "Send with limits", "Set a destination, expiry, and optional one-time deletion before the transfer."],
];

export default function PortalDropPage() {
  return (
    <main className="product-page portaldrop-page" id="top">
      <div className="product-opening portaldrop-opening">
        <SiteHeader />
        <section className="product-hero shell">
          <div className="product-hero-copy">
            <p className="eyebrow eyebrow--light"><span /> PortalDrop · Windows + Android · beta.33</p>
            <h1>Private file<br /><em>handoff.</em></h1>
            <p className="product-hero-lede">
              Send files between trusted Windows PCs and Android devices through one
              Windows host you control. Keep your handoff on your own network.
            </p>
            <div className="product-badges" aria-label="Product status">
              <span>Founding beta · £9 once</span><span>PC to PC</span><span>Windows ↔ Android</span>
            </div>
            <div className="hero-actions">
              <a className="button button--primary" href="https://kreadivworx.lemonsqueezy.com/checkout/buy/fd4654e6-16b9-42b1-9ffe-f3b2aba83d60">Buy PortalDrop · £9 once <span>↗</span></a>
              <a className="button button--quiet" href="#demo">Watch the real handoff <span>↓</span></a>
            </div>
            <p className="product-gate-note">Windows host: £9 once, plus applicable tax shown at checkout. The Android companion is free to use with your licensed host. Includes Windows 10/11 (64-bit) installers and the Android 8+ APK. Checkout and download delivery through Lemon Squeezy. AppGallery release is pending review submission.</p>
          </div>
          <div className="product-hero-media">
            <div className="product-screen-frame portaldrop-feature-frame">
              <Image src={sitePath("/products/portaldrop-feature.png")} alt="PortalDrop private file handoff product graphic" width={1024} height={500} priority unoptimized />
            </div>
            <p><span>Supported handoff</span><strong>Windows PC ↔ Windows PC · Windows ↔ Android</strong></p>
          </div>
        </section>
      </div>

      <section className="product-proof" aria-labelledby="portal-proof-title">
        <div className="shell">
          <div className="product-section-heading">
            <p className="eyebrow"><span /> Current proof</p>
            <h2 id="portal-proof-title">The transfer happened.</h2>
            <p>A real file moved from Archive PC to Studio PC over the trusted local network, then appeared in the correct inbox with its source and expiry intact.</p>
          </div>
          <div className="product-proof-grid">
            {proof.map(([value, label]) => <p key={label}><strong>{value}</strong><span>{label}</span></p>)}
          </div>
        </div>
      </section>

      <section className="product-section shell" aria-labelledby="portal-workflow-title">
        <div className="product-section-heading product-section-heading--wide">
          <p className="eyebrow"><span /> The complete path</p>
          <h2 id="portal-workflow-title">Host. Pair. Route. Send.</h2>
        </div>
        <div className="product-workflow">
          {workflow.map(([number, title, text]) => (
            <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="product-gallery-section portaldrop-demo-section" id="demo" aria-labelledby="portal-demo-title">
        <div className="shell">
          <div className="product-section-heading product-section-heading--light">
            <p className="eyebrow eyebrow--light"><span /> Captioned release proof · 18 seconds</p>
            <h2 id="portal-demo-title">PC to PC. On screen.</h2>
            <p>The demo uses the real beta.29 interface and the same fictional transfer used for release verification. It has baked-in captions and no audio dependency.</p>
          </div>
          <div className="portaldrop-video-frame">
            <video controls preload="metadata" poster={sitePath("/products/portaldrop-social-16x9.png")} aria-label="PortalDrop beta.29 captioned product demonstration">
              <source src={sitePath("/products/portaldrop-beta29-demo.mp4")} type="video/mp4" />
              Your browser does not support the PortalDrop demonstration video.
            </video>
          </div>
          <div className="product-gallery portaldrop-gallery">
            <figure><Image src={sitePath("/products/portaldrop-send.png")} alt="Archive PC PortalDrop outbox after sending a fictional project handoff file" width={1366} height={768} unoptimized /><figcaption><strong>Send</strong><span>Archive PC sends a fictional handoff file to Studio PC.</span></figcaption></figure>
            <figure><Image src={sitePath("/products/portaldrop-receive.png")} alt="Studio PC PortalDrop inbox after receiving a fictional project handoff file" width={1366} height={768} unoptimized /><figcaption><strong>Receive</strong><span>Studio PC receives it with source, expiry, and one-time controls visible.</span></figcaption></figure>
          </div>
        </div>
      </section>

      <section className="product-section shell" id="connection" aria-labelledby="connection-title">
        <div className="product-section-heading product-section-heading--wide">
          <p className="eyebrow"><span /> The Tailscale answer</p>
          <h2 id="connection-title">Same room? You do not need it.</h2>
          <p>Tailscale is not PortalDrop&apos;s storage and it is not required for PC-to-PC transfers. It is one optional private route when the receiving device is away from the host&apos;s Wi-Fi.</p>
        </div>
        <div className="connection-grid">
          <article><span className="connection-dot connection-dot--local" /><p>Same trusted Wi-Fi</p><h3>Connect directly.</h3><small>Open the Windows host&apos;s Local network address on the other Windows PC or Android device.</small></article>
          <article><span className="connection-dot connection-dot--remote" /><p>Away from that Wi-Fi</p><h3>Use private Tailscale.</h3><small>Connect both devices to your private network, then open the Tailscale HTTPS address.</small></article>
          <article><span className="connection-dot connection-dot--host" /><p>Every route</p><h3>The host stays on.</h3><small>The Windows host stores and serves the files. PortalDrop does not add a hosted cloud in the middle.</small></article>
        </div>
      </section>

      <section className="product-trust" aria-labelledby="portal-gate-title">
        <div className="shell product-trust-grid">
          <div><p className="eyebrow eyebrow--light"><span /> Founding beta</p><h2 id="portal-gate-title">Know what you are buying.</h2></div>
          <div className="product-gate-list">
            <p><strong>£9 once</strong><span>Windows host and Android companion for one person, up to three personally controlled Windows PCs and their paired devices. No subscription. Applicable tax is shown at checkout.</span></p>
            <p><strong>Direct installation</strong><span>Windows setup or MSI, plus a signed Android APK. Windows installers are unsigned and may trigger SmartScreen. Android requires allowing installation from your chosen download source.</span></p>
            <p><strong>Practical limits</strong><span>The host stays on. Local HTTP is not encrypted. Files are limited to 2 GB each. Updates are manual; background alerts depend on phone settings. Keep independent backups.</span></p>
          </div>
        </div>
      </section>

      <section className="product-section shell product-faq" aria-labelledby="portal-faq-title">
        <div className="product-section-heading"><p className="eyebrow"><span /> Before you pair</p><h2 id="portal-faq-title">Straight answers.</h2></div>
        <div className="product-faq-grid">
          <article><h3>Does it work PC to PC?</h3><p>Yes. Another trusted Windows PC can pair through its browser. Android is an additional companion, not the only destination.</p></article>
          <article><h3>Does it upload to PortalDrop?</h3><p>No. The Windows host you run stores and serves the files. Krēˈādiv Worx does not receive them.</p></article>
          <article><h3>Must I install Tailscale?</h3><p>No for the same trusted Wi-Fi. Use it only if you want PortalDrop&apos;s current private remote-access route.</p></article>
          <article><h3>Does my Huawei need Google services?</h3><p>No. Use Enter Portal Link to pair. The optional QR scanner is only shown on phones with Google services. The direct APK is included with the Windows download.</p></article>
          <article><h3>What does the purchase include?</h3><p>The supplied beta has no licence expiry. Released 0.9.x fixes are included when available; a future 1.x upgrade is not promised. Request a refund within 14 days at kreadivworx@proton.me. Your consumer rights remain unaffected.</p></article>
        </div>
        <div className="product-policy-links">
          <Link href="/portaldrop/privacy">PortalDrop privacy →</Link>
          <Link href="/portaldrop/support">PortalDrop support →</Link>
        </div>
      </section>

      <footer className="site-footer shell">
        <p>A Krēˈādiv Worx product · Product direction: Raiden · Implementation: Codi / Codex</p>
        <a href="#top" aria-label="Back to top">Back to top ↑</a>
      </footer>
    </main>
  );
}
