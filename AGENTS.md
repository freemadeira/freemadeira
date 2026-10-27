# FREE Madeira websites

Monorepo for the websites of FREE Madeira, a Bitcoin education and adoption organisation in Madeira: [freemadeira.org](https://freemadeira.org) and [bitcoinatlantis.com](https://bitcoinatlantis.com).

## Layout

```
apps/freemadeira        freemadeira.org: Astro on Vercel
apps/bitcoinatlantis    bitcoinatlantis.com: Astro on Vercel
packages/ui             shadcn/ui on Base UI, Tailwind v4 tokens, shared by both sites
packages/i18n           locales and the localized-path types every site uses
packages/db             Drizzle schema and libSQL client for the read model
packages/tsconfig       shared tsconfig bases
services/indexer        Node service on the VPS: team relay → libSQL → Vercel revalidation
infra                   sqld for local development; production notes
```

## How content flows

There's no admin app here. Editors write blog posts, events, speakers and the programme in [freehub](https://github.com/freemadeira/freehub), the team's Nostr app, which saves them as signed events on the team relay. Each site has an owner in freehub who decides which npubs may edit which sections.

1. The indexer subscribes to the relay, drops events from npubs without the right role, and writes what's left to libSQL (sqld on the Hetzner VPS in Germany, run by Coolify).
2. It then asks Vercel to revalidate the pages that changed.
3. Pages are cached on Vercel's CDN, so visitors almost never wait on the database, and the sites stay up while the VPS is down.

The relay is the source of truth. libSQL is a read model: dropping it and replaying the relay rebuilds it. All sites share one database, and rows carry their `site`.

## Commands

Run from the root:

```bash
pnpm install
pnpm dev          # every app and service; or pnpm --filter freemadeira dev
pnpm build        # every app
pnpm typecheck    # tsc for packages, astro check for apps
pnpm check        # oxlint and oxfmt, through ultracite
pnpm fix          # the same, fixing what it can
```

Dev ports: freemadeira 4321, bitcoinatlantis 4322, indexer 3000.

There are no git hooks: run `pnpm fix` before committing, and CI runs `pnpm check`.

## Conventions

- **Dependencies.** Versions used by more than one package live in the `catalog` in `pnpm-workspace.yaml`; reference them as `"catalog:"`. pnpm won't install a release younger than a day (`minimumReleaseAge`): pick the previous version rather than excluding it. New packages with install scripts must be listed under `allowBuilds`.
- **TypeScript.** Packages and services use TypeScript 7. The Astro apps use 6 (`catalog:astro`), because `astro check` needs the JS API that 7 dropped.
- **Internal packages** export their TypeScript source; there is no build step. Import with the `.ts` extension inside packages, so Node can run the indexer without a build.
- **File names** are kebab-case, `.astro` files too (`base-layout.astro`, `home.astro`).
- **Formatting.** oxfmt doesn't read `.astro` files; the Astro VS Code extension formats them.
- **UI components** are added from `packages/ui` with `pnpm exec shadcn add <name>`, then `pnpm fix` to match the lint rules. Apps import them as `@freemadeira/ui/components/<name>`. Each app's `src/styles/global.css` imports Tailwind, then `@freemadeira/ui/styles.css`, then overrides the tokens with its brand.
- **Site variants.** Until the sites share one design system, shared components carry a variant per site, prefixed with it: `fm`, `fm-outline`, `fm-outline-light`, `atlantis`, `atlantis-outline` on the button. To style a link as a button, put `buttonVariants({ variant })` on the `<a>`.
- **Astro islands.** Ship no JavaScript by default. React components render to HTML; add `client:*` only where a component needs to be interactive, and prefer `client:visible` or `client:idle`. An island gets Astro-rendered markup (an SVG, a list of links) through a slot.
- **Images** live in `src/assets/` and go through `astro:assets`, optimised at build time. Give `<Image>` both `width` and `widths`, or the fallback `src` is the full-size original. An island gets its image from `getImage()` as `src` and `srcset` props. Illustrations and logos are `.svg` files imported as components. `public/` is only for files that need a fixed URL.
- **Copy.** UI strings and page copy are Paraglide messages, keyed by page and section (`about_donations_title`). Lists and structured content (events, people, FAQs) are typed modules in `src/data/`, with translated fields as `Record<Locale, string>`. Names, bios and similar stay in the language they were written in.

### i18n

- Portuguese lives at the root and English under `/en`, with translated slugs: `/sobre` and `/en/about` are the same page.
- Each app lists every page's paths in `src/i18n/routes.ts`. Pages, links, the language switcher and hreflang all read that map, so a new page gets its entry there first.
- A page is two thin files, such as `src/pages/sobre.astro` and `src/pages/en/about.astro`, rendering one view from `src/views/`.
- UI strings are Paraglide messages in `messages/{pt,en}.json`. Pages are prerendered, so pass the locale explicitly: `m.home_title({}, { locale })`, with `locale = toLocale(Astro.currentLocale)`.
- The sites were English-only, with no `/en`. `legacyRedirects(routes)` in each `astro.config.ts` sends the old paths to their English pages with a 301, unless a Portuguese page now has that path. Add other old URLs to `redirects` by hand.
- Planned: edge middleware that sends a first-time visitor whose browser prefers English to the English page. The language switcher sets a cookie that turns it off.

### freemadeira.org specifics

- `/.well-known/nostr.json` (NIP-05) and `/.well-known/lnurlp/<name>` (Lightning addresses paid through Blink) are on-demand endpoints, not files in `public/`. The Vercel adapter ignores `vercel.json` headers, and wallets and Nostr clients need CORS. The CDN caches both for a day.
- The newsletter runs on MailerLite. The sign-up form posts to `/api/newsletter/subscribe`. Each newsletter email links to `/newsletter/preferencias/<email>/<token>`, rendered on demand, which checks the token and keeps the subscriber in a sealed cookie for `/api/newsletter/preferences`. Both need `MAILERLITE_TOKEN` and `SESSION_PASSWORD` (see `apps/freemadeira/.env.example`), in Vercel and in a local `.env`.
- Upcoming and recurring events are listed by hand in `src/data/events.ts` until they come from freehub. Past events drop off at the next build.

### bitcoinatlantis.com specifics

- The site is the 2024 edition's archive until the 2028 lineup and programme come from freehub. Its content is static: speakers, satellite events, FAQs and the rest live in `src/data/`, and the photo gallery and videos stay on S3.
- `/.well-known/nostr.json` is an on-demand endpoint, like freemadeira.org's.

## Deploying

- Each app is its own Vercel project, with its root directory set to `apps/<name>`.
- Turn on "Skip deployments when there are no changes" in each project, and set Function Region to Frankfurt (`fra1`), next to the VPS.
- sqld and the indexer run on the VPS through Coolify. See `infra/README.md`.
