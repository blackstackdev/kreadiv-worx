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
      <div className="policy-opening"><SiteHeader /><div className="shell policy-hero"><p className="eyebrow eyebrow--light"><span /> PortalDrop privacy · updated 1 September 2026</p><h1>Your files stay<br /><em>on your route.</em></h1><p>PortalDrop has no hosted file cloud, developer account system, advertising, or analytics.</p></div></div>
      <article className="shell policy-article">
        <section><h2>What PortalDrop stores</h2><p>One Windows host selected by the user stores transferred files and the local metadata needed to display them: filename, size, source and destination device labels, expiry, download count, and one-time deletion status.</p></section>
        <section><h2>What Krēˈādiv Worx receives</h2><p>Krēˈādiv Worx does not receive file contents, filenames, transfer metadata, pairing links, private addresses, or account credentials. PortalDrop has no developer-operated transfer server.</p></section>
        <section><h2>Network routes</h2><p>On the same trusted Wi-Fi, another Windows PC or Android device can connect directly to the host&apos;s local address. Local <code>http://</code> traffic is not encrypted and should be used only on a network the user trusts.</p><p>For remote access, the user may choose private Tailscale HTTPS. Tailscale is optional on the same Wi-Fi and is governed by its own terms and privacy policy.</p></section>
        <section><h2>Pairing and expiry</h2><p>Pairing links are short-lived and should be treated as private credentials until they expire. Files can be configured with an expiry and optional deletion after the first successful download.</p></section>
        <section><h2>Android permissions</h2><p>The Android companion uses network access for transfers, notification permission for user-approved transfer alerts, and Google&apos;s on-device code scanner when the user chooses to scan a pairing QR code. PortalDrop does not request broad photo-library or storage access.</p></section>
        <section><h2>Removal</h2><p>Removing a file from PortalDrop deletes the host&apos;s stored copy. Uninstalling the Android companion removes its local app data; files remain under the Windows host owner&apos;s control until removed there or expired.</p></section>
        <p className="policy-back"><Link href="/portaldrop">← Return to PortalDrop</Link></p>
      </article>
    </main>
  );
}
