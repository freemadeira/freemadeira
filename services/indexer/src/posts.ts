/**
 * Blog posts as freehub publishes them (see BLOG_PLAN.md, "Post events"):
 * one kind 30023 event per language version, tagged with the project whose
 * members may publish it. Several members can write the same post, each
 * under their own key, so the newest version by a member wins, as on
 * freehub's doc pages.
 */
import type { PostImage } from "@freemadeira/db";
import type { Locale } from "@freemadeira/i18n";
import type { NostrEvent } from "applesauce-core/helpers/event";

export const PROFILE_KIND = 0;
export const PROJECT_KIND = 30_304;
export const PUBLISHED_KIND = 30_023;

const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/u;
const PUBKEY = /^[0-9a-f]{64}$/u;

export interface Address {
  kind: number;
  pubkey: string;
  d: string;
}

export function parseAddress(address: string): Address | undefined {
  const [kind, pubkey, ...d] = address.split(":");
  if (!(kind && pubkey && PUBKEY.test(pubkey) && d.length > 0)) {
    return undefined;
  }
  return { d: d.join(":"), kind: Number(kind), pubkey };
}

function tag(event: NostrEvent, name: string): string | undefined {
  return event.tags.find(([key]) => key === name)?.[1];
}

/** Whether `a` wins over `b`: later, or the lower id on a tie, as freehub decides. */
export function newer(a: NostrEvent, b: NostrEvent): boolean {
  return (
    a.created_at > b.created_at ||
    (a.created_at === b.created_at && a.id < b.id)
  );
}

/**
 * Who may write in a project: its creator and everyone its `p` tags list,
 * except viewers (`["p", pubkey, "", "viewer"]`). freehub's `parseMembership`.
 */
export function projectMembers(project: NostrEvent): Set<string> {
  const members = new Set([project.pubkey]);
  for (const [name, pubkey, , role] of project.tags) {
    if (name === "p" && pubkey && PUBKEY.test(pubkey) && role !== "viewer") {
      members.add(pubkey);
    }
  }
  return members;
}

/** An `imeta` tag's fields: `["imeta", "url …", "dim 1920x1080", …]`. */
export function parseImeta(fields: string[]): PostImage | undefined {
  const values = new Map<string, string>();
  for (const field of fields) {
    const space = field.indexOf(" ");
    if (space > 0) {
      values.set(field.slice(0, space), field.slice(space + 1));
    }
  }
  const url = values.get("url");
  const [width, height] = (values.get("dim") ?? "").split("x").map(Number);
  if (!(url && width && height)) {
    return undefined;
  }
  return {
    alt: values.get("alt") ?? "",
    height,
    srcset: values.get("srcset") ?? `${url} ${width}w`,
    url,
    width,
  };
}

export interface PostVersion {
  event: NostrEvent;
  postId: string;
  locale: Locale;
  slug: string;
  /** Slugs it was published under before, which redirect to `slug`. */
  oldSlugs: string[];
  title: string;
  summary: string;
  markdown: string;
  /** Every image the post uploaded, by its URL. */
  images: Map<string, PostImage>;
  cover?: PostImage;
  topics: string[];
  authors: string[];
  publishedAt: Date;
  updatedAt: Date;
}

/** Every image the post uploaded, by its URL. */
function imagesOf(event: NostrEvent): Map<string, PostImage> {
  const images = new Map<string, PostImage>();
  for (const [name, ...fields] of event.tags) {
    const image = name === "imeta" ? parseImeta(fields) : undefined;
    if (image) {
      images.set(image.url, image);
    }
  }
  return images;
}

/** The people the post says it's from, or whoever published it. */
function authorsOf(event: NostrEvent): string[] {
  const authors = event.tags
    .filter(
      ([name, pubkey, , role]) =>
        name === "p" && role === "author" && pubkey && PUBKEY.test(pubkey)
    )
    .map(([, pubkey]) => pubkey as string);
  return authors.length > 0 ? [...new Set(authors)] : [event.pubkey];
}

function oldSlugsOf(event: NostrEvent, slug: string): string[] {
  const slugs = event.tags
    .filter(
      ([name, value]) =>
        name === "old_slug" && value && value !== slug && SLUG.test(value)
    )
    .map(([, value]) => value as string);
  return [...new Set(slugs)];
}

function topicsOf(event: NostrEvent): string[] {
  const topics = event.tags
    .filter(([name, value]) => name === "t" && value?.trim())
    .map(([, value]) => (value as string).trim());
  return [...new Set(topics)];
}

/** When it was first published, or when this version was, without the tag. */
function publishedAtOf(event: NostrEvent): Date {
  const published = Number(tag(event, "published_at"));
  const seconds =
    Number.isInteger(published) && published > 0 ? published : event.created_at;
  return new Date(seconds * 1000);
}

/** A published version as the site shows it, or why it can't be shown. */
export function parsePost(
  event: NostrEvent,
  locales: readonly Locale[]
): PostVersion | string {
  const d = tag(event, "d") ?? "";
  const postId = tag(event, "post") ?? "";
  const locale = event.tags.find(
    ([name, , namespace]) => name === "l" && namespace === "ISO-639-1"
  )?.[1];
  if (!locales.some((known) => known === locale)) {
    return `language "${locale ?? ""}" isn't one of the site's`;
  }
  if (!postId || d !== `${postId}-${locale}`) {
    return `d tag "${d}" doesn't match post "${postId}" in ${locale}`;
  }
  const slug = tag(event, "slug") ?? "";
  if (!SLUG.test(slug)) {
    return `slug "${slug}" isn't lowercase letters, digits and hyphens`;
  }
  const title = tag(event, "title")?.trim();
  if (!title) {
    return "it has no title";
  }
  const images = imagesOf(event);
  const cover = tag(event, "image");
  return {
    authors: authorsOf(event),
    cover: cover ? images.get(cover) : undefined,
    event,
    images,
    locale: locale as Locale,
    markdown: event.content,
    oldSlugs: oldSlugsOf(event, slug),
    postId,
    publishedAt: publishedAtOf(event),
    slug,
    summary: tag(event, "summary")?.trim() ?? "",
    title,
    topics: topicsOf(event),
    updatedAt: new Date(event.created_at * 1000),
  };
}

export interface Resolved {
  posts: PostVersion[];
  /** Versions left out, and why, for the log. */
  skipped: { event: NostrEvent; reason: string }[];
}

/**
 * The posts a site shows: for each `d`, the newest published version by a
 * current member of the project, unless it's been unpublished. When two posts
 * claim the same slug in a language, the one published first keeps it.
 */
export function resolvePosts(
  project: NostrEvent | undefined,
  events: Iterable<NostrEvent>,
  locales: readonly Locale[]
): Resolved {
  const resolved: Resolved = { posts: [], skipped: [] };
  if (!project) {
    return resolved;
  }
  const address = `${PROJECT_KIND}:${project.pubkey}:${tag(project, "d") ?? ""}`;
  const members = projectMembers(project);
  const newest = new Map<string, NostrEvent>();
  for (const event of events) {
    const d = tag(event, "d");
    if (
      event.kind !== PUBLISHED_KIND ||
      !d ||
      !members.has(event.pubkey) ||
      !event.tags.some(([name, value]) => name === "a" && value === address)
    ) {
      continue;
    }
    const current = newest.get(d);
    if (!current || newer(event, current)) {
      newest.set(d, event);
    }
  }
  const bySlug = new Map<string, PostVersion>();
  for (const event of newest.values()) {
    if (event.tags.some(([name]) => name === "deleted")) {
      continue;
    }
    const post = parsePost(event, locales);
    if (typeof post === "string") {
      resolved.skipped.push({ event, reason: post });
      continue;
    }
    const key = `${post.locale}/${post.slug}`;
    const holder = bySlug.get(key);
    const first =
      !holder ||
      post.publishedAt < holder.publishedAt ||
      (post.publishedAt.getTime() === holder.publishedAt.getTime() &&
        post.postId < holder.postId);
    if (holder) {
      const loser = first ? holder : post;
      resolved.skipped.push({
        event: loser.event,
        reason: `slug "${post.slug}" in ${post.locale} is taken by an earlier post`,
      });
    }
    if (first) {
      bySlug.set(key, post);
    }
  }
  resolved.posts = [...bySlug.values()];
  return resolved;
}
