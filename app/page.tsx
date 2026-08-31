import Link from "next/link";
import Image from "next/image";
import { BrandMark } from "./components/brand-mark";
import { SiteHeader } from "./components/site-header";
import { sitePath } from "./lib/site-path";

const portfolio = [
  {
    name: "DigiBoard",
    status: "Pre-release",
    text: "A paired notebook that keeps quick thoughts close across Windows and mobile.",
  },
  {
    name: "TableLift",
    status: "Beta",
    text: "Turns difficult tables into structured, usable data with a review-first workflow.",
  },
  {
    name: "PortalDrop",
    status: "Private beta",
    text: "A direct, local transfer path between the devices already in your hands.",
  },
  {
    name: "Bounded Memory Core",
    status: "Public proof",
    text: "Human-governed agent memory built to remember only what has been approved.",
  },
  {
    name: "AI Eyes",
    status: "Public proof",
    text: "An accessibility experiment exploring how multimodal AI can help people inspect the world.",
  },
  {
    name: "Steady Comeback",
    status: "Research",
    text: "A private consistency system where new training is earned one completed brick at a time.",
  },
];

export default function Home() {
  return (
    <main id="top">
      <div className="opening">
        <SiteHeader />
        <section className="hero shell">
          <div className="hero-copy">
          <p className="eyebrow"><span /> Independent tools · human craft</p>
          <h1 aria-label="Ideas, made visible.">
            <span className="hero-word"><b>Ideas,</b></span>
            <span className="hero-word hero-word--blue"><b>made visible.</b></span>
          </h1>
          <p className="hero-intro">
            We turn everyday friction into thoughtful software: small enough to
            understand, polished enough to trust, and carried all the way to a useful finish.
          </p>
          <div className="hero-actions">
            <a className="button button--primary" href="#work">Explore the work <span>↓</span></a>
            <Link className="button button--quiet" href="/links">Open the link hub <span>↗</span></Link>
          </div>
          </div>

          <div className="hero-art" aria-label="Krēˈādiv Worx continuous-path identity mark">
            <p className="hero-art-kicker"><span>One continuous path</span><b>01 / Identity</b></p>
            <BrandMark />
            <div className="hero-art-caption">
              <span>From everyday friction</span>
              <p>Through the work.<br />Into finished proof.</p>
            </div>
          </div>
        </section>
      </div>

      <section className="proof-strip" aria-label="NestKeeper verified proof">
        <div className="shell proof-grid">
          <p><strong>NestKeeper</strong><span>Flagship release candidate</span></p>
          <p><strong>v1.0.4</strong><span>Packaged Windows build</span></p>
          <p><strong>28/28</strong><span>Focused checks passed</span></p>
          <p><strong>0 uploads</strong><span>Local-only by design</span></p>
        </div>
      </section>

      <section className="section shell" id="work">
        <div className="section-heading">
          <p className="eyebrow"><span /> Flagship work</p>
          <h2>One useful thing.<br /><em>Finished properly.</em></h2>
          <p>NestKeeper is the first product receiving the complete treatment: product, identity, package, proof, and a clear path to market.</p>
        </div>

        <article className="featured-product">
          <div className="product-copy">
            <div className="product-title-row">
              <Image src={sitePath("/products/nestkeeper-icon.png")} alt="" width={512} height={512} unoptimized />
              <div><p className="status status--blue">Release candidate</p><h3>NestKeeper</h3></div>
            </div>
            <p className="product-lede">Find exact duplicate files across folders and drives, review every match, then choose what happens next.</p>
            <ul className="feature-list">
              <li><span>01</span> Local-only scanning. Nothing is uploaded.</li>
              <li><span>02</span> Visible progress, cancellation, and protected keepers.</li>
              <li><span>03</span> Recycle, review, or permanently delete—with deliberate confirmation.</li>
            </ul>
            <div className="product-note">
              <span>Windows · v1.0.4</span>
              <p>Packaging is verified. Public purchase and download open only after the remaining launch gate is closed.</p>
            </div>
          </div>

          <div className="product-visual">
            <div className="window-card window-card--back">
              <Image src={sitePath("/products/nestkeeper-review.png")} alt="NestKeeper duplicate review screen" width={1344} height={959} unoptimized />
            </div>
            <div className="window-card window-card--front">
              <div className="window-bar"><span /><span /><span /><small>Local only</small></div>
              <Image src={sitePath("/products/nestkeeper-ready.png")} alt="NestKeeper ready-to-scan screen" width={1344} height={959} unoptimized />
            </div>
          </div>
        </article>
      </section>

      <section className="section section--ink" id="approach">
        <div className="shell">
          <div className="section-heading section-heading--light">
            <p className="eyebrow eyebrow--light"><span /> How we build</p>
            <h2>Small tools.<br /><em>Serious care.</em></h2>
          </div>
          <div className="principles">
            <article><strong>01</strong><h3>Useful before impressive.</h3><p>Every product begins with a real friction point and a workflow small enough to make honest.</p></article>
            <article><strong>02</strong><h3>Local where it matters.</h3><p>Private files and personal routines stay on the devices that already own them whenever possible.</p></article>
            <article><strong>03</strong><h3>Proof over promises.</h3><p>Tests, real screenshots, limitations, and status labels do more work than a wall of adjectives.</p></article>
          </div>
        </div>
      </section>

      <section className="section shell" id="studio" aria-labelledby="portfolio-title">
        <div className="section-heading section-heading--row">
          <div><p className="eyebrow"><span /> Workbench</p><h2 id="portfolio-title">A wider studio,<br /><em>clearly labelled.</em></h2></div>
          <p>Some products are close. Some are proofs. Some are still research. We label them honestly and finish them one at a time.</p>
        </div>
        <div className="portfolio-grid">
          {portfolio.map((item, index) => (
            <article className="portfolio-card" key={item.name}>
              <div><span className="card-index">{String(index + 2).padStart(2, "0")}</span><span className="status">{item.status}</span></div>
              <h3>{item.name}</h3><p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section roadmap shell" id="roadmap">
        <div className="section-heading">
          <p className="eyebrow"><span /> What comes next</p>
          <h2>A roadmap without<br /><em>invented dates.</em></h2>
        </div>
        <div className="roadmap-list">
          <article><span className="roadmap-dot roadmap-dot--live" /><p>Now</p><h3>Finish NestKeeper 1.0</h3><small>Final all-drive gate, current launch media, storefront handoff.</small></article>
          <article><span className="roadmap-dot" /><p>Next</p><h3>Open the public front door</h3><small>Approve this site, refine the mark in context, connect the real support and social routes.</small></article>
          <article><span className="roadmap-dot" /><p>Then</p><h3>Productize the catalogue</h3><small>Give DigiBoard, PDF Forge, and the strongest tools the same evidence-led treatment.</small></article>
        </div>
      </section>

      <section className="closing">
        <div className="shell closing-inner">
          <Image className="closing-mark" src={sitePath("/brand/production/kradiv-mark.png")} alt="" width={1310} height={633} unoptimized />
          <p>Krēˈādiv Worx / working proof</p>
          <h2>Useful ideas<br /><em>deserve a finish.</em></h2>
          <Link className="button button--bone" href="/links">See every link <span>↗</span></Link>
        </div>
      </section>

      <footer className="site-footer shell">
        <p>© 2026 Krēˈādiv Worx</p>
        <p>Cape Town, South Africa · Local-first by default.</p>
        <a href="#top" aria-label="Back to top">Back to top ↑</a>
      </footer>
    </main>
  );
}
