const checkoutValue = process.env.NEXT_PUBLIC_NESTKEEPER_CHECKOUT_URL?.trim();

function approvedLemonSqueezyUrl(value: string | undefined) {
  if (!value) return null;

  try {
    const url = new URL(value);
    const isLemonSqueezy =
      url.hostname === "lemonsqueezy.com" || url.hostname.endsWith(".lemonsqueezy.com");
    const isBuyerLink = url.pathname.startsWith("/buy/");

    return url.protocol === "https:" && isLemonSqueezy && isBuyerLink
      ? url.toString()
      : null;
  } catch {
    return null;
  }
}

export const nestkeeperCheckoutUrl = approvedLemonSqueezyUrl(checkoutValue);
export const nestkeeperCheckoutReady = Boolean(nestkeeperCheckoutUrl);

