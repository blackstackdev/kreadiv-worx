import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../../components/site-header";

export const metadata: Metadata = {
  title: "PortalDrop Support",
  description: "PortalDrop founding-beta setup and safe bug-report guidance.",
};

export default function PortalDropSupportPage() {
  return (
    <main className="policy-page">
      <div className="policy-opening"><SiteHeader /><div className="shell policy-hero"><p className="eyebrow eyebrow--light"><span /> PortalDrop support · beta.30</p><h1>Describe the route.<br /><em>Hide the secret.</em></h1><p>Useful reports identify the two device types and connection route without exposing pairing links or private network details.</p></div></div>
      <article className="shell policy-article">
        <section><h2>Before reporting a problem</h2><ol><li>Confirm the Windows host is running and shows PortalDrop beta.30.</li><li>State whether the other device is Windows or Android.</li><li>State whether both devices are on the same trusted Wi-Fi or using Tailscale remotely.</li><li>Use a fictional filename to reproduce the issue whenever possible.</li><li>Do not publish pairing links, QR codes, private IP addresses, hostnames, or real filenames.</li></ol></section>
        <section><h2>If the other device cannot connect</h2><p>On the same Wi-Fi, try the Local network address shown by the Windows host. Away from that Wi-Fi, confirm both devices are connected to the same private Tailscale network and use the Tailscale HTTPS address. The Windows host must remain on and reachable in both cases.</p></section>
        <section><h2>If a file is missing</h2><p>Check the selected destination, expiry time, and whether delete-after-download was enabled. Refresh the correct Inbox before repeating the transfer.</p></section>
        <section><h2>Contact support</h2><p>Email <a href="mailto:kreadivworx@proton.me">kreadivworx@proton.me</a> with your app version, device types and a short description. Include an order number for purchase or refund questions. Never send access keys, pairing links or private files. Support is handled by a small independent team; instant replies are not guaranteed.</p></section>
        <section><h2>Installing on Huawei</h2><p>Install the signed APK from your purchase download, then choose Enter Portal Link. No Google Play account is required. Keep both devices on the same trusted network and use the Windows host&apos;s Local network pairing link.</p></section>
        <p className="policy-back"><Link href="/portaldrop">← Return to PortalDrop</Link></p>
      </article>
    </main>
  );
}
