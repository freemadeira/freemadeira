import type { Locale } from "@freemadeira/i18n";
import { MAILERLITE_TOKEN } from "astro:env/server";

// Subscribers are sorted into MailerLite groups by where they signed up and
// which language they read.
const WEBSITE_GROUP = "153157474249082044";
const NEWSLETTER_GROUP = "190971553192609215";
const LANGUAGE_GROUPS = {
  english: "153161521070868114",
  portuguese: "153161515456792037",
} as const;

export type Language = keyof typeof LANGUAGE_GROUPS;

export const languages = Object.keys(LANGUAGE_GROUPS) as Language[];

export interface Subscriber {
  email: string;
  fields: { token?: string | null };
  groups: { id: string }[];
  id: string;
}

export function isLanguage(value: unknown): value is Language {
  return languages.some((language) => language === value);
}

export function languagesFromGroups(groupIds: string[]): Language[] {
  return languages.filter((language) =>
    groupIds.includes(LANGUAGE_GROUPS[language])
  );
}

export function groupsFromLanguages(chosen: Language[]): string[] {
  return chosen.map((language) => LANGUAGE_GROUPS[language]);
}

/** Every group but the language ones, which the preferences page replaces. */
export function withoutLanguageGroups(groupIds: string[]): string[] {
  const languageGroups: string[] = Object.values(LANGUAGE_GROUPS);
  return groupIds.filter((id) => !languageGroups.includes(id));
}

/** The groups a new subscriber joins from a page in this locale. */
export function signUpGroups(locale: Locale): string[] {
  const language = locale === "pt" ? "portuguese" : "english";
  return [NEWSLETTER_GROUP, WEBSITE_GROUP, LANGUAGE_GROUPS[language]];
}

/** A random hex token that lets a subscriber open their preferences page. */
export function newToken(bytes = 16): string {
  return Array.from(crypto.getRandomValues(new Uint8Array(bytes)), (byte) =>
    byte.toString(16).padStart(2, "0")
  ).join("");
}

export function mailerlite(
  path: string,
  init: RequestInit = {}
): Promise<Response> {
  if (!MAILERLITE_TOKEN) {
    throw new Error("MAILERLITE_TOKEN is not set");
  }
  return fetch(`https://connect.mailerlite.com/api${path}`, {
    ...init,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${MAILERLITE_TOKEN}`,
      "Content-Type": "application/json",
    },
  });
}

/** The subscriber, or nothing when the email isn't on the list or MailerLite can't be reached. */
export async function findSubscriber(
  email: string
): Promise<Subscriber | undefined> {
  try {
    const response = await mailerlite(
      `/subscribers/${encodeURIComponent(email)}`
    );
    if (response.ok) {
      const { data } = (await response.json()) as { data: Subscriber };
      return data;
    }
  } catch (error) {
    console.error("MailerLite subscriber lookup failed", error);
  }
}

export function updateGroups(
  subscriberId: string,
  groups: string[]
): Promise<Response> {
  return mailerlite(`/subscribers/${subscriberId}`, {
    body: JSON.stringify({ groups }),
    method: "PUT",
  });
}
