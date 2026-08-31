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
