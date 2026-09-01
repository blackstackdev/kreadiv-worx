import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../../components/site-header";

export const metadata: Metadata = {
  title: "PortalDrop Support",
  description: "PortalDrop private-beta setup and safe bug-report guidance.",
};

export default function PortalDropSupportPage() {
  return (
    <main className="policy-page">
      <div className="policy-opening"><SiteHeader /><div className="shell policy-hero"><p className="eyebrow eyebrow--light"><span /> PortalDrop support · beta.29</p><h1>Describe the route.<br /><em>Hide the secret.</em></h1><p>Useful reports identify the two device types and connection route without exposing pairing links or private network details.</p></div></div>
      <article className="shell policy-article">
        <section><h2>Before reporting a problem</h2><ol><li>Confirm the Windows host is running and shows PortalDrop beta.29.</li><li>State whether the other device is Windows or Android.</li><li>State whether both devices are on the same trusted Wi-Fi or using Tailscale remotely.</li><li>Use a fictional filename to reproduce the issue whenever possible.</li><li>Do not publish pairing links, QR codes, private IP addresses, hostnames, or real filenames.</li></ol></section>
        <section><h2>If the other device cannot connect</h2><p>On the same Wi-Fi, try the Local network address shown by the Windows host. Away from that Wi-Fi, confirm both devices are connected to the same private Tailscale network and use the Tailscale HTTPS address. The Windows host must remain on and reachable in both cases.</p></section>
        <section><h2>If a file is missing</h2><p>Check the selected destination, expiry time, and whether delete-after-download was enabled. Refresh the correct Inbox before repeating the transfer.</p></section>
        <section><h2>Current public route</h2><p>Private-beta updates and public questions currently live at <a href="https://x.com/skillissue_md" target="_blank" rel="noreferrer">@skillissue_md on X ↗</a>. A dedicated customer-support inbox and response expectation will be published before a public release.</p></section>
        <p className="policy-back"><Link href="/portaldrop">← Return to PortalDrop</Link></p>
      </article>
    </main>
  );
}
