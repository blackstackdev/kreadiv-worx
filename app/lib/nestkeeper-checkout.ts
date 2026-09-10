const checkoutValue = (process.env.NEXT_PUBLIC_NESTKEEPER_CHECKOUT_URL ?? "https://kreadivworx.lemonsqueezy.com/checkout/buy/f98b1b0c-627d-4088-b954-c5f7639f193b").trim();

export function approvedLemonSqueezyUrl(value: string | undefined, liveApproved = false) {
  if (!value || !liveApproved) return null;

  try {
    const url = new URL(value);
    const isLemonSqueezy = url.hostname === "kreadivworx.lemonsqueezy.com";
    const isBuyerLink = /^\/(?:checkout\/)?buy\/[a-zA-Z0-9-]+\/?$/.test(url.pathname);
    // This known product is published only in Test mode. Live copying creates a new link.
    const isKnownTestProduct = url.pathname.includes("244c2c1a-ff08-468d-9729-4b04bb3a3d95");

    return url.protocol === "https:" && isLemonSqueezy && isBuyerLink && !isKnownTestProduct && !url.username && !url.password && !url.port
      ? url.toString()
      : null;
  } catch {
    return null;
  }
}

export const nestkeeperCheckoutUrl = approvedLemonSqueezyUrl(
  checkoutValue,
  (process.env.NEXT_PUBLIC_NESTKEEPER_LIVE_APPROVED ?? "true") === "true",
);
export const nestkeeperCheckoutReady = Boolean(nestkeeperCheckoutUrl);
