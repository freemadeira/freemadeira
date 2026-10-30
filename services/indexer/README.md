# Indexer

Reads the blog posts freehub publishes to the team relay, keeps the ones each site may show, writes them to libSQL and asks the site to render the changed pages again (Vercel's on-demand ISR).

- **On start:** it applies the database migrations from `packages/db`, reads every post of each site's freehub project from the relay, and brings the `posts`, `slug_history` and `profiles` tables in line with it.
- **While running:** it keeps one subscription open, and writes changes that arrive within two seconds of each other together. It also reads the relay again every ten minutes in case the subscription missed something.
- **What's shown:** for each post and language, the newest published version by a member of the site's project, unless that version unpublished it.
  - The Markdown becomes sanitized HTML once, here, so pages only read it.
  - Bylines' names and pictures come from Nostr profiles, from the team relay and a few public relays, and are looked up again once a day.
- **What's refreshed:** for each change, the indexer revalidates:
  - the post's page under its old and new slug, and its other languages' pages;
  - that language's blog index and RSS feed.

## Post events

Each language version of a post is a NIP-23 event. freehub's GUIDE.md and `src/lib/blog.ts` write it. The rules here read it:

| Tag | Meaning |
| --- | --- |
| kind | `30023` published. Drafts are `30024`, which the indexer never reads. |
| `["d", "<post id>-<locale>"]` | The post id is 16 hex characters, shared by its language versions. |
| `["a", "30304:<creator>:<d>"]` | The freehub project. Its creator and members (not viewers) may publish. |
| `["post", "<post id>"]`, `["l", "<locale>", "ISO-639-1"]` | Must agree with `d`. |
| `["old_slug", …]` | Slugs the version was published under before. They redirect to the current one, with a 301. They're tags, not database history, so a rebuild keeps them. |
| `["title", …]`, `["slug", …]`, `["summary", …]` | The slug is lowercase letters, digits and hyphens. When two posts take the same slug in a language, the one published first keeps it. |
| `["published_at", "<unix seconds>"]` | First publication. Without it, the event's time. |
| `["p", <pubkey>, "", "author"]` | Who the post is from. Without one, whoever published it. |
| `["t", …]` | Topics. |
| `["image", <url>]` | The cover: one of the `imeta` URLs. |
| `["imeta", "url …", "dim WxH", "alt …", "srcset …"]` | One per uploaded image. Each Markdown image with that URL gets its sizes, `width` and `height`. |
| `["deleted"]` | The post is unpublished. |

Markdown follows freehub's editor: GFM, where a single newline is a line break and raw HTML stays as text. An image on its own line becomes a `<figure>`, with its Markdown title as the caption.

## Commands

From the repository root:

```bash
pnpm --filter @freemadeira/indexer dev       # run, restarting on changes; reads .env
pnpm --filter @freemadeira/indexer key       # a new Nostr key for it
pnpm --filter @freemadeira/indexer projects  # the relay's projects and their addresses, for SITES
pnpm --filter @freemadeira/indexer seed      # publish a sample blog to a local relay
pnpm --filter @freemadeira/indexer rebuild   # empty the tables, then run
pnpm --filter @freemadeira/indexer test
```

## Local development

1. Start sqld: `docker compose -f infra/compose.yaml up -d`.
2. Run a relay that requires NIP-42 AUTH, such as `nak serve --auth` on `ws://localhost:10547`, as freehub's README does.
   - Haven works too, but it only accepts AUTH addressed to `wss://`, so it needs TLS in front of it even on localhost.
3. Copy `.env.example` to `.env`. Fill in `INDEXER_KEY` and `SEED_KEY` with two keys from `key`, whitelisted if the relay has a whitelist.
4. Run `seed`. It publishes a project and sample posts, and prints the `SITES` line to paste into `.env`.
5. Run `dev`. With `REVALIDATE_TOKEN` set and a site running, it revalidates the site's pages as posts change.

Deploying is in `infra/README.md`.
