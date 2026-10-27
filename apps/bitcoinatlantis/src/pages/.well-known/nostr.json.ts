import type { APIRoute } from "astro";

import { wellKnownHeaders } from "@/lib/well-known";

// Rendered on demand, so it can carry the CORS header NIP-05 asks for.
export const prerender = false;

const nip05 = {
  names: {
    _: "bd4b16bc0875f85a40ea134b030d71c5a715ad0cea5f513d53ce2dd699d44d98",
  },
};

export const GET: APIRoute = () =>
  Response.json(nip05, { headers: wellKnownHeaders });
