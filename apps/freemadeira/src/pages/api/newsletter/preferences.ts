import type { APIRoute } from "astro";

import {
  groupsFromLanguages,
  isLanguage,
  updateGroups,
} from "@/lib/mailerlite";
import { newsletterSession } from "@/lib/newsletter-session";

export const prerender = false;

/** Saves the languages chosen on the preferences page. */
export const POST: APIRoute = async ({ request }) => {
  const session = await newsletterSession(request, new Headers());
  if (!session.subscriberId || !session.groups) {
    return Response.json(
      { message: "No subscriber in session" },
      { status: 401 }
    );
  }
  const body = (await request.json().catch(() => ({}))) as {
    languages?: unknown;
  };
  const chosen = Array.isArray(body.languages)
    ? body.languages.filter(isLanguage)
    : [];
  if (chosen.length === 0) {
    return Response.json(
      { message: "Choose at least one language" },
      { status: 400 }
    );
  }

  const response = await updateGroups(session.subscriberId, [
    ...session.groups,
    ...groupsFromLanguages(chosen),
  ]);
  if (!response.ok) {
    return Response.json(
      { message: response.statusText },
      { status: response.status }
    );
  }
  return Response.json({ success: true });
};
