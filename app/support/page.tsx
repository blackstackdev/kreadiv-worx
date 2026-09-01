import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = {
  title: "Support",
  description: "Krēˈādiv Worx product support and safe bug-report guidance.",
};

export default function SupportPage() {
  return (
    <main className="policy-page">
      <div className="policy-opening"><SiteHeader /><div className="shell policy-hero"><p className="eyebrow eyebrow--light"><span /> Product support</p><h1>Useful evidence.<br /><em>No private paths.</em></h1><p>Krēˈādiv Worx products publish their limits before asking anyone to trust them.</p></div></div>
      <article className="shell policy-article">
        <section><h2>Before reporting a problem</h2><ol><li>Confirm the About/version label shows v1.0.4.</li><li>Note whether the scan used one folder, several folders, or Full Scan.</li><li>Record whether the files were on a local disk or removable local drive. Network locations are unsupported.</li><li>Copy the latest summary from <code>%LOCALAPPDATA%\NestKeeper\Reports\latest-summary.txt</code>.</li><li>Do not post screenshots containing personal folder names or an unredacted session export.</li></ol></section>
        <section><h2>Current public route</h2><p>Release updates and public questions currently live at <a href="https://x.com/skillissue_md" target="_blank" rel="noreferrer">@skillissue_md on X ↗</a>. A dedicated customer-support route and response expectation will be published before checkout opens.</p></section>
        <section><h2>PortalDrop</h2><p>For pairing, connection, expiry, or Android beta questions, use the dedicated <Link href="/portaldrop/support">PortalDrop support boundary →</Link>. Do not include pairing links, QR codes, private network addresses, or real filenames in a public report.</p></section>
        <section><h2>PromptDeck</h2><p>For PromptDeck create, edit, copy, search, import, or export issues, use the dedicated <Link href="/promptdeck/support">PromptDeck support boundary →</Link>. Reproduce problems with fictional prompts whenever possible.</p></section>
        <section><h2>What GitHub contains</h2><p>The public GitHub account contains selected public builds and the Krēˈādiv Worx website. NestKeeper&apos;s source code, installer, portable build, private reports, and Cleanup Sessions are not published there.</p></section>
        <p className="policy-back"><Link href="/">← Return to Krēˈādiv Worx</Link></p>
      </article>
    </main>
  );
}
