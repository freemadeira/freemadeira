import type { APIRoute } from "astro";

import nip05 from "@/data/nip05.json";
import { wellKnownHeaders } from "@/lib/well-known";

// Rendered on demand, so it can carry the CORS header NIP-05 asks for.
export const prerender = false;

export const GET: APIRoute = () =>
  Response.json(nip05, { headers: wellKnownHeaders });
