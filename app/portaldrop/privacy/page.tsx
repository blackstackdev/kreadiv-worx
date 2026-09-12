import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../../components/site-header";

export const metadata: Metadata = {
  title: "PortalDrop Privacy",
  description: "How PortalDrop handles files, pairing data, local network access, and optional Tailscale routing.",
};

export default function PortalDropPrivacyPage() {
  return (
    <main className="policy-page">
      <div className="policy-opening"><SiteHeader /><div className="shell policy-hero"><p className="eyebrow eyebrow--light"><span /> PortalDrop privacy · updated 12 September 2026</p><h1>Your files stay<br /><em>on your route.</em></h1><p>PortalDrop has no developer-operated file cloud or advertising. Optional network services and the Google QR component have their own data practices, described below.</p></div></div>
      <article className="shell policy-article">
        <section><h2>What PortalDrop stores</h2><p>One Windows host selected by the user stores transferred files and the local metadata needed to display them: filename, size, source and destination device labels, expiry, download count, and one-time deletion status.</p></section>
        <section><h2>What Krēˈādiv Worx receives</h2><p>Krēˈādiv Worx does not receive file contents, filenames, transfer metadata, pairing links, private addresses, or account credentials. PortalDrop has no developer-operated transfer server.</p></section>
        <section><h2>Network routes</h2><p>On the same trusted Wi-Fi, another Windows PC or Android device can connect directly to the host&apos;s local address. Local <code>http://</code> traffic is not encrypted and should be used only on a network the user trusts.</p><p>For remote access, the user may choose private Tailscale HTTPS. Tailscale is optional on the same Wi-Fi and is governed by its own terms and privacy policy.</p></section>
        <section><h2>Pairing and expiry</h2><p>Pairing links are short-lived and should be treated as private credentials until they expire. Files can be configured with an expiry and optional deletion after the first successful download.</p></section>
        <section><h2>Android permissions</h2><p>The companion uses network access for transfers, notification permission for alerts, an optional foreground service for Live Watch, and legacy external-storage permission on Android 9 and earlier to save downloads. Files are selected through the system picker.</p><p>The optional Google code-scanner component processes QR images and scan results on the device. Its SDK may collect device/app information, identifiers and performance or usage diagnostics. On phones without Google services, scanning is hidden and you can enter the pairing link instead.</p></section>
        <section><h2>Purchase and support</h2><p>The checkout provider shown at purchase processes payment under its own privacy policy; the PortalDrop app does not handle payment details. Information you choose to email to kreadivworx@proton.me is used to answer your support or order question. Do not include private files or access credentials.</p></section>
        <section><h2>Removal</h2><p>Removing a file from PortalDrop deletes the host&apos;s stored copy. Uninstalling the Android companion removes its local app data; files remain under the Windows host owner&apos;s control until removed there or expired.</p></section>
        <p className="policy-back"><Link href="/portaldrop">← Return to PortalDrop</Link></p>
      </article>
    </main>
  );
}
