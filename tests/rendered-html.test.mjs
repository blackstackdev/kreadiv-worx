import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
}

test("renders the Krēˈādiv Worx homepage and premium navigation", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<title>Krēˈādiv Worx/);
  assert.match(html, /Ideas,.*made visible/s);
  assert.match(html, /aria-label="Open navigation"/);
  assert.match(html, /brand\/production\/kradiv-mark\.png/);
  assert.doesNotMatch(html, /Page progress/);
  assert.match(html, /NestKeeper/);
  assert.match(html, /Packaged Windows build/);
  assert.match(html, /0 uploads.*Local-only by design/s);
  assert.match(html, /href="\/about"/);
  assert.match(html, /href="\/portaldrop"/);
  assert.match(html, /Cape Town/);
});

test("renders Raiden's about page and dated build journey", async () => {
  const response = await render("/about");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<title>About Raiden/);
  assert.match(html, /I had ideas.*Then I started finishing them/s);
  assert.match(html, /Human lead.*Raiden/s);
  assert.match(html, /Build partner.*Codi \/ Codex/s);
  assert.match(html, /June 2026.*July 2026.*August 2026/s);
  assert.match(html, /AI Eyes.*Bounded Memory Core/s);
  assert.match(html, /Actalume.*Krēˈādiv Worx/s);
});

test("uses one production identity across the link hub", async () => {
  const response = await render("/links");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /brand\/production\/kradiv-mark\.png/);
  assert.doesNotMatch(html, /kradiv-worx-logo-directions\.png/);
  assert.match(html, /Official links/);
  assert.match(html, /href="\/nestkeeper"/);
  assert.match(html, /href="\/portaldrop"/);
});

test("renders the NestKeeper founding-release candidate with a prepared but closed checkout", async () => {
  const response = await render("/nestkeeper");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Find the copies/);
  assert.match(html, /52,117/);
  assert.match(html, /236\.44 GB of possible waste/);
  assert.match(html, /Lemon Squeezy checkout prepared · not live/);
  assert.match(html, /£9 GBP once/);
  assert.match(html, /href="\/privacy"/);
  assert.match(html, /href="\/support"/);
  assert.doesNotMatch(html, /lemonsqueezy\.com\/buy\/|gumroad\.com\/l\//);
});

test("renders current privacy and support boundaries", async () => {
  const [privacyResponse, supportResponse] = await Promise.all([
    render("/privacy"),
    render("/support"),
  ]);
  assert.equal(privacyResponse.status, 200);
  assert.equal(supportResponse.status, 200);
  const [privacy, support] = await Promise.all([
    privacyResponse.text(),
    supportResponse.text(),
  ]);
  assert.match(privacy, /no account system, telemetry, advertising, cloud sync, or upload feature/i);
  assert.match(privacy, /No checkout is connected today/);
  assert.match(privacy, /PortalDrop has no hosted file cloud/);
  assert.match(support, /Do not post screenshots containing personal folder names/);
  assert.match(support, /source code, installer, portable build.*are not published/s);
});

test("renders PortalDrop as a proven PC-to-PC and Android private beta", async () => {
  const response = await render("/portaldrop");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Private file.*handoff/s);
  assert.match(html, /PC to PC proven/);
  assert.match(html, /Archive PC.*Studio PC/s);
  assert.match(html, /Same trusted Wi-Fi/);
  assert.match(html, /Use private Tailscale/);
  assert.match(html, /portaldrop-beta29-demo\.mp4/);
  assert.match(html, /href="\/portaldrop\/privacy"/);
  assert.match(html, /href="\/portaldrop\/support"/);
});

test("renders PortalDrop privacy and support without exposing private routing data", async () => {
  const [privacyResponse, supportResponse] = await Promise.all([
    render("/portaldrop/privacy"),
    render("/portaldrop/support"),
  ]);
  assert.equal(privacyResponse.status, 200);
  assert.equal(supportResponse.status, 200);
  const [privacy, support] = await Promise.all([
    privacyResponse.text(),
    supportResponse.text(),
  ]);
  assert.match(privacy, /Krēˈādiv Worx does not receive file contents/);
  assert.match(privacy, /Tailscale is optional on the same Wi-Fi/);
  assert.match(support, /Do not publish pairing links, QR codes, private IP addresses/);
});

test("keeps the presentation static and the navigation accessible", async () => {
  const [css, header, mark, page] = await Promise.all([
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/components/site-header.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/brand-mark.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
  ]);
  assert.match(header, /aria-expanded=\{open\}/);
  assert.match(header, /event\.key === "Escape"/);
  assert.match(mark, /brand-symbol__static/);
  assert.doesNotMatch(mark, /LogoTrace|canvas|requestAnimationFrame/);
  assert.doesNotMatch(page, /MotionRail|Page progress/);
  assert.doesNotMatch(css, /animation\s*:|@keyframes|transition\s*:/);
});

test("serves production assets with URL-safe paths on Windows", async () => {
  const [cache, patcher] = await Promise.all([
    readFile(
      new URL(
        "../node_modules/vinext/dist/server/static-file-cache.js",
        import.meta.url,
      ),
      "utf8",
    ),
    readFile(
      new URL("../scripts/patch-vinext-windows-paths.mjs", import.meta.url),
      "utf8",
    ),
  ]);
  assert.match(cache, /split\(path\.sep\)\.join\("\/"\)/);
  assert.match(patcher, /vinext static paths for Windows production serving/);
});
