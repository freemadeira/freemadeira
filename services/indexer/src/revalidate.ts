import { setTimeout as sleep } from "node:timers/promises";

import { blogPath, feedPath, postPath } from "@freemadeira/blog";

import type { PostVersion } from "./posts.ts";
import { errorMessage } from "./relay.ts";
import type { Change } from "./store.ts";

const ATTEMPTS = 3;
const REQUEST_TIMEOUT = 20_000;

/**
 * Every page a change shows on: the post under each slug it had, its other
 * languages (their language link may have changed), and its language's blog
 * and feed. A new name or picture shows on its author's posts and the blogs
 * that list them.
 */
export function pagesToRevalidate(
  changes: Change[],
  versions: PostVersion[],
  changedProfiles: string[]
): string[] {
  const paths = new Set<string>();
  for (const { locale, slugs } of changes) {
    for (const slug of slugs) {
      paths.add(postPath(locale, slug));
    }
    paths.add(blogPath(locale));
    paths.add(feedPath(locale));
  }
  const changedPosts = new Set(changes.map((change) => change.postId));
  const people = new Set(changedProfiles);
  for (const version of versions) {
    const byChangedAuthor = version.authors.some((author) =>
      people.has(author)
    );
    if (changedPosts.has(version.postId) || byChangedAuthor) {
      paths.add(postPath(version.locale, version.slug));
    }
    if (byChangedAuthor) {
      paths.add(blogPath(version.locale));
    }
  }
  return [...paths].toSorted();
}

// A cached page asked for with the site's bypass token is rendered again and
// cached afresh (Vercel's on-demand ISR). A 404 or a redirect is a good
// answer too: the post is gone, or moved.
async function refresh(url: URL, token: string): Promise<void> {
  for (let attempt = 1; ; attempt += 1) {
    try {
      // oxlint-disable-next-line no-await-in-loop -- retries wait their turn
      const response = await fetch(url, {
        headers: { "x-prerender-revalidate": token },
        redirect: "manual",
        signal: AbortSignal.timeout(REQUEST_TIMEOUT),
      });
      // oxlint-disable-next-line no-await-in-loop -- only the status matters
      await response.body?.cancel();
      if (response.status < 500) {
        console.log(`Revalidated ${url.pathname} (${response.status})`);
        return;
      }
      throw new Error(`HTTP ${response.status}`);
    } catch (error) {
      if (attempt >= ATTEMPTS) {
        console.error(
          `Couldn't revalidate ${url.href}: ${errorMessage(error)}`
        );
        return;
      }
      // oxlint-disable-next-line no-await-in-loop -- back off before retrying
      await sleep(2 ** attempt * 1000);
    }
  }
}

/** Asks the site to render these pages again. */
export async function revalidate(
  origin: string,
  paths: string[],
  token: string | undefined
): Promise<void> {
  if (!token || paths.length === 0) {
    return;
  }
  await Promise.all(paths.map((path) => refresh(new URL(path, origin), token)));
}
