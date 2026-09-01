import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../components/site-header";
import { nestkeeperCheckoutReady } from "../lib/nestkeeper-checkout";

export const metadata: Metadata = {
  title: "Privacy",
  description: "The Krēˈādiv Worx website and product privacy boundaries.",
};

export default function PrivacyPage() {
  return (
    <main className="policy-page">
      <div className="policy-opening"><SiteHeader /><div className="shell policy-hero"><p className="eyebrow eyebrow--light"><span /> Privacy · updated 1 September 2026</p><h1>Local means<br /><em>local.</em></h1><p>This page states what the current website and product candidates actually do—not what a future release might do.</p></div></div>
      <article className="shell policy-article">
        <section><h2>This website</h2><p>The current Krēˈādiv Worx website is a static GitHub Pages site. It does not create accounts, accept payments, use advertising, or intentionally run analytics or tracking cookies.</p></section>
        <section><h2>NestKeeper</h2><p>NestKeeper processes file paths, sizes, timestamps, and SHA256 content hashes on the customer&apos;s Windows computer. File contents are read locally only when required to calculate hashes.</p><p>The packaged app has no account system, telemetry, advertising, cloud sync, or upload feature. Scan data, file contents, hashes, and reports are not sent to Krēˈādiv Worx.</p></section>
        <section><h2>PortalDrop</h2><p>PortalDrop transfers files between devices selected by the user. One Windows host stores and serves the files; Krēˈādiv Worx does not receive them and PortalDrop has no hosted file cloud or developer account system.</p><p>On the same trusted Wi-Fi, devices can connect directly through the host&apos;s local address. For private remote access, users may choose Tailscale. That optional network service is governed by its own terms and privacy policy.</p><p>Read the <Link href="/portaldrop/privacy">complete PortalDrop privacy boundary →</Link></p></section>
        <section><h2>Local records</h2><p>Reports and dated Cleanup Sessions are stored below <code>%LOCALAPPDATA%\NestKeeper</code>. Review manifests may also be stored in a same-drive <code>_NestKeeper_Duplicates</code> folder. Redacted session-record ZIP exports are created only on a fixed drive the user selects.</p></section>
        <section><h2>File changes</h2><p>Scanning is read-only. Files change only after an explicit review-folder, Recycle Bin, permanent-delete, or manifest-restore confirmation. Permanent deletion cannot be undone. Restore never overwrites an existing destination.</p></section>
        <section><h2>{nestkeeperCheckoutReady ? "Checkout" : "Future checkout"}</h2><p>{nestkeeperCheckoutReady ? "NestKeeper purchases are processed by Lemon Squeezy as merchant of record. Lemon Squeezy handles payment, tax, receipt, fraud, and checkout customer data under its own published terms. NestKeeper itself remains local-only and receives no payment details." : "No checkout is connected today. The site is prepared for a future Lemon Squeezy buyer link, but the button remains closed until the private delivery and commercial gates pass."}</p></section>
        <p className="policy-back"><Link href="/">← Return to Krēˈādiv Worx</Link></p>
      </article>
    </main>
  );
}
