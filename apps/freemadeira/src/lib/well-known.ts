/**
 * Nostr clients and web wallets fetch these from other origins. The CDN keeps
 * them for a day, so the function behind them rarely runs.
 */
export const wellKnownHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Cache-Control": "public, max-age=3600, s-maxage=86400",
};
