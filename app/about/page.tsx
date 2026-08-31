import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = {
  title: "About Raiden",
  description:
    "Raiden's path from persistent ideas to useful software, built with Codex and finished with visible proof.",
};

const raidenResponsibilities = [
  "Finds the friction and defines the useful outcome.",
  "Directs the product, interaction, and visual standard.",
  "Tests the work and makes the final decision on what ships.",
];

const codiResponsibilities = [
  "Implements the code and keeps the architecture coherent.",
  "Tests, documents, and catches the edges that weaken a release.",
  "Produces proof, release packs, and traceable project records.",
];

const journey = [
  {
    date: "June 2026",
    title: "Tools become products.",
    copy: "DigiBoard, PortalDrop, and PromptDeck move ideas out of chat and into working interfaces with real workflows.",
  },
  {
    date: "July 2026",
    title: "Proof becomes public.",
    copy: "AI Eyes and Bounded Memory Core turn experiments into inspectable builds with constraints, documentation, and human control.",
  },
  {
    date: "August 2026",
    title: "Governance gets teeth.",
    copy: "Is The Road Open?, Actalume, and Krēˈādiv Worx establish a standard: evidence first, honest status, and a deliberate path after launch.",
  },
];

function ResponsibilityList({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={item}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function AboutPage() {
  return (
    <main className="about-page" id="top">
      <div className="about-opening">
        <SiteHeader />
        <section className="about-hero shell">
          <div>
            <p className="eyebrow eyebrow--light"><span /> About Raiden</p>
            <h1 className="about-title">I had ideas. <em>Then I started finishing them.</em></h1>
          </div>
          <div className="about-story">
            <p>
              Krēˈādiv Worx is how I turn everyday friction into useful software—without pretending the route here was conventional.
            </p>
            <p>
              <strong>I am Raiden:</strong> product direction, problem discovery, visual judgement, and the final human decision. Codex is my implementation and verification partner. Together, we take an idea through code, testing, proof, and the question that matters: is it ready to be useful?
            </p>
            <p className="about-signoff"><span>Cape Town, South Africa</span><span>Human-led · AI-assisted</span></p>
          </div>
        </section>
      </div>

      <section className="about-section shell" aria-labelledby="work-split-title">
        <div className="about-section-heading">
          <div>
            <p className="eyebrow"><span /> The collaboration</p>
            <h2 className="about-section-title" id="work-split-title">One studio.<br /><em>Clear ownership.</em></h2>
          </div>
          <p>The work is collaborative. The judgement is not outsourced. Every public release still passes through a human decision.</p>
        </div>
        <div className="work-split">
          <article className="split-column">
            <p className="split-label">Human lead</p>
            <h3>Raiden</h3>
            <ResponsibilityList items={raidenResponsibilities} />
          </article>
          <article className="split-column">
            <p className="split-label">Build partner</p>
            <h3>Codi / Codex</h3>
            <ResponsibilityList items={codiResponsibilities} />
          </article>
        </div>
      </section>

      <section className="about-section journey" aria-labelledby="journey-title">
        <div className="shell">
          <div className="about-section-heading">
            <div>
              <p className="eyebrow"><span /> The journey</p>
              <h2 className="about-section-title" id="journey-title">The route wasn&apos;t conventional. <em>The work is real.</em></h2>
            </div>
            <p>Ninety days of turning persistent ideas into working proof—and learning that a finished build needs an afterlife, not a graveyard.</p>
          </div>
          <div className="journey-rail">
            {journey.map((chapter) => (
              <article className="journey-chapter" key={chapter.date}>
                <span className="journey-dot" aria-hidden="true" />
                <time>{chapter.date}</time>
                <h3>{chapter.title}</h3>
                <p>{chapter.copy}</p>
              </article>
            ))}
          </div>
          <p className="journey-close"><strong>The next chapter is not more unfinished ideas.</strong> It is repeat use, public proof, and revenue—one well-finished product at a time.</p>
        </div>
      </section>

      <section className="about-closing">
        <div className="shell about-closing-inner">
          <p>The standard from here</p>
          <h2>Make it useful.<br /><em>Make it visible.</em></h2>
          <Link className="button button--bone" href="/#work">See the work <span>↗</span></Link>
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
