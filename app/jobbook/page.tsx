import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "../components/site-header";
import { sitePath } from "../lib/site-path";
export const metadata: Metadata = { title: "Jobbook — Offline quotes and invoices", description: "Quotes, invoices and payment records for independent trades on Windows. £9 GBP once. Early access." };
export default function JobbookPage() {
 return <main className="product-page"><div className="product-opening"><SiteHeader />
 <section className="product-hero shell"><div className="product-hero-copy">
 <p className="eyebrow eyebrow--light">Jobbook · Windows x64 · Early access 0.1.0</p>
 <h1 style={{fontSize:"clamp(2.8rem, 4.6vw, 4.6rem)",lineHeight:1.05}}>Quote the job.<br /><em>Know what’s owed.</em></h1>
 <p className="product-hero-lede">Turn an accepted quote into an invoice, record deposits and see the balance. Keep customers, reusable items and PDF documents together on your PC.</p>
 <div className="product-badges"><span>Works offline</span><span>Seven currencies</span><span>No subscription</span></div>
 <div className="hero-actions"><a className="button button--primary" href="https://kreadivworx.lemonsqueezy.com/checkout/buy/d5d39059-f27e-40f0-9360-d8f8d7e61730">Buy Jobbook — £9 <span>↗</span></a></div>
 <p className="product-gate-note">£9 GBP once, plus applicable tax at checkout. Includes the Windows folder download, guide and licence. Extract the whole folder, then run Jobbook.exe.</p></div>
 <div className="product-hero-media"><div className="product-screen-frame"><Image src={sitePath("/products/jobbook-overview.png")} alt="Jobbook overview showing example quotes, invoices and payment balances" width={1600} height={1200} priority unoptimized style={{width:"100%",height:"auto"}} /></div></div></section></div>
 <article className="shell policy-article">
 <section><h2>From quote to payment record</h2><p>Create a quote from reusable items. Mark it accepted, create a fixed invoice, and record money you have already received. Export PDFs and make backups for safekeeping.</p><p>Choose ZAR, GBP, USD, EUR, AUD, CAD or NZD. Each book uses one currency; Jobbook does not convert exchange rates.</p></section>
 <section><h2>Know what you’re getting</h2><p>This is early access 0.1.0, supplied as an unsigned Windows x64 folder download. Windows may show a security warning. It records payments manually; it does not collect money, file taxes, automatically email customers or sync books between PCs.</p><p>Records and backups are not encrypted by the app. Protect your PC and keep backups somewhere you control.</p></section>
 <section><h2>Your licence and refunds</h2><p>One individual may use Jobbook on up to three personally controlled PCs, including their own business. Released 0.1.x fixes are included when available. No subscription, promised update schedule or entitlement to future major versions.</p><p>For a voluntary full refund within 14 days, email <a href="mailto:kreadivworx@proton.me">kreadivworx@proton.me</a> with your order number. Mandatory consumer rights remain unaffected.</p></section>
 <section><h2>Checkout and support</h2><p>Purchases are processed and fulfilled by Lemon Squeezy as Merchant of Record. Deen Storkey, trading as Krēˈādiv Worx, licenses and supports Jobbook.</p><p><Link href="/privacy">Privacy</Link> · <Link href="/support">Support</Link></p></section>
 </article></main>;
}
