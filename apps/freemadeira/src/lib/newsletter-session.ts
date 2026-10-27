import { SESSION_PASSWORD } from "astro:env/server";
import { getIronSession, webCookies } from "iron-session";

/**
 * Remembers which subscriber opened the preferences page, in a sealed,
 * httpOnly cookie, so saving needs neither their email nor their token.
 */
interface NewsletterSession {
  /** Their groups other than the language ones. */
  groups?: string[];
  subscriberId?: string;
}

export function newsletterSession(request: Request, headers: Headers) {
  if (!SESSION_PASSWORD) {
    throw new Error("SESSION_PASSWORD is not set");
  }
  return getIronSession<NewsletterSession>(webCookies(request, headers), {
    cookieName: "newsletter_subscriber_data",
    cookieOptions: { secure: import.meta.env.PROD },
    password: SESSION_PASSWORD,
    ttl: 60 * 60,
  });
}
