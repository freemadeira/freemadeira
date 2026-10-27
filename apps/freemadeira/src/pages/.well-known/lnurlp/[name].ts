import type { APIRoute } from "astro";

import { wellKnownHeaders } from "@/lib/well-known";

// Rendered on demand, so it can carry the CORS header LNURL asks for.
export const prerender = false;

/** The Lightning addresses at freemadeira.org, all paid into the Blink wallet. */
const addresses = new Map([
  ["donate", "Donation to FREE Madeira"],
  ["donations", "Donation to FREE Madeira"],
  ["info", "Payment to FREE Madeira"],
]);

export const GET: APIRoute = ({ params }) => {
  const name = params.name ?? "";
  const description = addresses.get(name);
  if (description === undefined) {
    return new Response(null, { status: 404 });
  }
  return Response.json(
    {
      allowsNostr: true,
      callback: "https://blink.sv:443/lnurlp/freemadeira/callback",
      commentAllowed: 0,
      maxSendable: 100_000_000_000,
      metadata: JSON.stringify([
        ["text/plain", description],
        ["text/identifier", `${name}@freemadeira.org`],
      ]),
      minSendable: 1000,
      nostrPubkey:
        "cad00c48a8c689d32d7c770b90221124d6a68bbc6b1d31c2039a84d5ab90cf7b",
      tag: "payRequest",
    },
    { headers: wellKnownHeaders }
  );
};
