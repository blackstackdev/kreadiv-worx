import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../../components/site-header";

export const metadata: Metadata = {
  title: "PromptDeck Privacy",
  description: "How PromptDeck stores prompts, handles imports and exports, and protects local creative work.",
};

export default function PromptDeckPrivacyPage() {
  return (
    <main className="policy-page">
      <div className="policy-opening"><SiteHeader /><div className="shell policy-hero"><p className="eyebrow eyebrow--light"><span /> PromptDeck privacy · updated 1 September 2026</p><h1>Your prompts stay<br /><em>in your deck.</em></h1><p>PromptDeck v0.3.0 is local-first: no account, advertising, analytics, cloud sync, or developer-operated prompt server.</p></div></div>
      <article className="shell policy-article">
        <section><h2>What PromptDeck stores</h2><p>PromptDeck stores the prompts and fields that the user creates on that device, including titles, categories, model labels, aspect ratios, styles, tags, prompt text, negative prompts, favourites, and local usage counters.</p></section>
        <section><h2>What Krēˈādiv Worx receives</h2><p>Krēˈādiv Worx does not receive prompt contents, prompt metadata, imports, exports, usage activity, account credentials, advertising identifiers, analytics events, or device location from PromptDeck v0.3.0.</p></section>
        <section><h2>Imports and exports</h2><p>PromptDeck reads an import only after the user chooses a JSON or text file. An export is created only after the user chooses where to save it. These operations happen on the device; exported copies remain wherever the user saves or shares them.</p></section>
        <section><h2>Android network and billing capability</h2><p>The Android package includes network and Google Play billing capability for a possible future Pro purchase. In the v0.3.0 internal-testing build, billing is not configured and does not initialise. The app interface is loaded from bundled Android assets rather than a remote website.</p></section>
        <section><h2>Removal</h2><p>Deleting a prompt removes it from PromptDeck&apos;s local library. Uninstalling the app removes its local app data according to Android&apos;s normal behaviour. Files that the user previously exported remain in the location the user selected and must be removed there.</p></section>
        <section><h2>Support</h2><p>For privacy or support questions, email <a href="mailto:kreadivworx@proton.me">kreadivworx@proton.me</a>. Do not include private prompt text unless it is necessary to reproduce a problem.</p></section>
        <p className="policy-back"><Link href="/promptdeck/support">PromptDeck support →</Link></p>
      </article>
    </main>
  );
}
