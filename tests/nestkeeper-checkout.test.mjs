import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import ts from 'typescript';
const source = readFileSync(new URL('../app/lib/nestkeeper-checkout.ts', import.meta.url), 'utf8');
const js = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } }).outputText;
const { approvedLemonSqueezyUrl: approved } = await import('data:text/javascript;base64,' + Buffer.from(js).toString('base64'));
test('checkout stays closed without explicit live approval', () => {
  assert.equal(approved('https://kreadivworx.lemonsqueezy.com/checkout/buy/example-live-id'), null);
});
test('accepts store buyer routes only after approval', () => {
  for (const route of ['buy/example-live-id', 'checkout/buy/example-live-id']) {
    const url = 'https://kreadivworx.lemonsqueezy.com/' + route;
    assert.equal(approved(url, true), url);
  }
});
test('rejects known test checkout and unintended destinations', () => {
  for (const url of [undefined, '', 'invalid',
    'https://kreadivworx.lemonsqueezy.com/checkout/buy/244c2c1a-ff08-468d-9729-4b04bb3a3d95',
    'https://other.lemonsqueezy.com/buy/id', 'https://kreadivworx.lemonsqueezy.com.evil.com/buy/id',
    'http://kreadivworx.lemonsqueezy.com/buy/id', 'https://kreadivworx.lemonsqueezy.com/buy/',
    'https://user:password@kreadivworx.lemonsqueezy.com/buy/id',
    'https://kreadivworx.lemonsqueezy.com:8443/buy/id',
    'https://kreadivworx.lemonsqueezy.com/my-orders/id']) assert.equal(approved(url, true), null);
});
