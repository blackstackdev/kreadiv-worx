"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BrandMark } from "./brand-mark";

const items = [
  ["Work", "/#work"],
  ["About", "/about"],
  ["Approach", "/#approach"],
  ["Roadmap", "/#roadmap"],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", close);
    document.body.classList.toggle("menu-open", open);
    return () => { window.removeEventListener("keydown", close); document.body.classList.remove("menu-open"); };
  }, [open]);
  return (
    <header className="site-header shell">
      <Link className="brand-lockup" href="/" aria-label="Krēˈādiv Worx home"><BrandMark compact /><span>Krēˈādiv Worx</span></Link>
      <span className="brand-purpose" aria-hidden="true">Useful software<br />Human craft</span>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {items.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        <Link className="nav-cta" href="/links">Links ↗</Link>
      </nav>
      <button className={`menu-trigger ${open ? "is-open" : ""}`} onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close navigation" : "Open navigation"}>
        <span /><span /><span className="menu-label">{open ? "Close" : "Menu"}</span>
      </button>
      <div className={`menu-panel ${open ? "is-open" : ""}`} id="mobile-menu" aria-hidden={!open}>
        <div className="menu-panel__signal"><BrandMark /></div>
        <nav aria-label="Mobile navigation">
          {items.map(([label, href], index) => <Link key={href} href={href} onClick={() => setOpen(false)}><small>0{index + 1}</small>{label}<span>↘</span></Link>)}
          <Link href="/links" onClick={() => setOpen(false)}><small>05</small>Links<span>↗</span></Link>
        </nav>
        <p>Useful software · visibly human craft</p>
      </div>
    </header>
  );
}
