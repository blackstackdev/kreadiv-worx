import type { Metadata } from "next";
import Link from "next/link";
import { BrandMark } from "../components/brand-mark";

export const metadata: Metadata = {
  title: "Links",
  description: "The official Krēˈādiv Worx link hub.",
};

const links = [
  { label: "Shop our software", note: "NestKeeper and Jobbook · £9 GBP each, one-time · tax at checkout", href: "https://kreadivworx.lemonsqueezy.com/", external: true },
  { label: "Jobbook", note: "Offline quotes, invoices and payment records for Windows · early access", href: "/jobbook", external: false },
  { label: "Company home", note: "Mission, work, and roadmap", href: "/", external: false },
  { label: "NestKeeper", note: "Windows duplicate finder, pricing, privacy, and proof", href: "/nestkeeper", external: false },
  { label: "PortalDrop", note: "Private file handoff for Windows + Android · £9 once", href: "/portaldrop", external: false },
  { label: "About Raiden", note: "The builder, the collaboration, and the journey", href: "/about", external: false },
  { label: "Public builds on GitHub", note: "Code, proofs, and hackathon work", href: "https://github.com/blackstackdev", external: true },
  { label: "Bounded Memory Core", note: "Human-governed agent memory proof", href: "https://github.com/blackstackdev/bounded-memory-core", external: true },
  { label: "AI Eyes", note: "Accessibility-focused multimodal proof", href: "https://github.com/blackstackdev/ai-eyes", external: true },
];

export default function LinksPage() {
  return (
    <main className="links-page">
      <div className="links-glow links-glow--blue" /><div className="links-glow links-glow--coral" />
      <div className="links-shell">
        <header className="links-header">
          <Link href="/" aria-label="Return to Krēˈādiv Worx home">← Home</Link>
          <span>Official links / 2026</span>
        </header>
        <section className="links-intro">
          <div className="links-mark"><BrandMark compact /></div>
          <p className="eyebrow eyebrow--light"><span /> Krēˈādiv Worx</p>
          <h1>Ideas,<br /><em>made visible.</em></h1>
          <p>Independent software, practical experiments, and the public receipts behind the work.</p>
        </section>
        <div className="link-stack">
          {links.map((item, index) => (
            item.external ? (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                <span className="link-number">0{index + 1}</span>
                <span><strong>{item.label}</strong><small>{item.note}</small></span>
                <b>↗</b>
              </a>
            ) : (
              <Link key={item.label} href={item.href}>
                <span className="link-number">0{index + 1}</span>
                <span><strong>{item.label}</strong><small>{item.note}</small></span>
                <b>→</b>
              </Link>
            )
          ))}

        </div>
        <footer className="links-footer"><span>Cape Town, South Africa</span><span>Local-first by default.</span></footer>
      </div>
    </main>
  );
}
