import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../../components/site-header";

export const metadata: Metadata = {
  title: "PromptDeck Support",
  description: "PromptDeck internal-testing support and privacy-safe bug-report guidance.",
};

export default function PromptDeckSupportPage() {
  return (
    <main className="policy-page">
      <div className="policy-opening"><SiteHeader /><div className="shell policy-hero"><p className="eyebrow eyebrow--light"><span /> PromptDeck support · v0.3.0 internal test</p><h1>Show the behaviour.<br /><em>Keep the prompt private.</em></h1><p>A useful report identifies the action and result without exposing creative work that should stay in the deck.</p></div></div>
      <article className="shell policy-article">
        <section><h2>Before reporting a problem</h2><ol><li>Confirm the About panel shows v0.3.0.</li><li>State the Android version and phone model.</li><li>Describe the action: create, edit, copy, favourite, search, filter, import, or export.</li><li>Use a fictional prompt to reproduce the issue whenever possible.</li><li>Do not send private prompt libraries, unrelated gallery images, credentials, or personal notifications.</li></ol></section>
        <section><h2>If an import fails</h2><p>Confirm the file is plain text or a PromptDeck JSON export and is no larger than 5 MB. Keep a backup of the original export before retrying.</p></section>
        <section><h2>If Pro is unavailable</h2><p>PromptDeck v0.3.0 is an internal-testing build. Its purchase service is not configured, so Restore purchases and Unlock Lifetime Pro are intentionally unavailable.</p></section>
        <section><h2>Contact</h2><p>Email <a href="mailto:kreadivworx@proton.me">kreadivworx@proton.me</a> with a short description and a privacy-safe screenshot. Response times are not yet guaranteed during internal testing.</p></section>
        <p className="policy-back"><Link href="/promptdeck/privacy">PromptDeck privacy →</Link></p>
      </article>
    </main>
  );
}
