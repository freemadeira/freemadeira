import { defaultLocale, isLocale } from "@freemadeira/i18n";
import type { APIRoute } from "astro";

import { mailerlite, newToken, signUpGroups } from "@/lib/mailerlite";

export const prerender = false;

/** Adds the email to the newsletter, in the language of the page it came from. */
export const POST: APIRoute = async ({ request }) => {
  const body = (await request.json().catch(() => ({}))) as Record<
    string,
    unknown
  >;
  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (!email) {
    return Response.json({ message: "Missing email" }, { status: 400 });
  }
  const locale = isLocale(body.locale) ? body.locale : defaultLocale;
  const language = typeof body.language === "string" ? body.language : locale;

  const response = await mailerlite("/subscribers", {
    body: JSON.stringify({
      email,
      // The token signs the preferences link in every newsletter email.
      fields: { language, token: newToken() },
      groups: signUpGroups(locale),
    }),
    method: "POST",
  });
  if (!response.ok) {
    return Response.json(
      { message: response.statusText },
      { status: response.status }
    );
  }
  // Nothing about the subscriber goes back, so the form can't reveal who is
  // already on the list.
  return Response.json({ success: true });
};
