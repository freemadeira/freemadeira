/**
 * Publishes a sample blog to a relay, the way freehub writes one, for working
 * on the sites without freehub: a project owned by SEED_KEY and a few posts in
 * Portuguese and English. Run it against a local relay only.
 *
 *   pnpm --filter @freemadeira/indexer seed
 */
import type { EventTemplate } from "applesauce-core/helpers/event";
import { PrivateKeySigner } from "applesauce-signers";
import { noop } from "rxjs";

import { PROJECT_KIND, PUBLISHED_KIND } from "./posts.ts";
import { TeamRelay } from "./relay.ts";

const PROJECT_D = "sample-blog";

function image(id: number, alt: string): { markdown: string; tag: string[] } {
  const url = (width: number) =>
    `https://picsum.photos/id/${id}/${width}/${Math.round((width * 2) / 3)}.webp`;
  return {
    markdown: url(1920),
    tag: [
      "imeta",
      `url ${url(1920)}`,
      "m image/webp",
      "dim 1920x1280",
      `alt ${alt}`,
      `srcset ${url(640)} 640w, ${url(1280)} 1280w, ${url(1920)} 1920w`,
    ],
  };
}

interface Sample {
  postId: string;
  locale: "pt" | "en";
  title: string;
  slug: string;
  summary: string;
  daysAgo: number;
  topics: string[];
  cover?: ReturnType<typeof image>;
  body: string;
  images?: ReturnType<typeof image>[];
}

const beach = image(1015, "A river between mountains");
const forest = image(1018, "Mountains over a valley");

const samples: Sample[] = [
  {
    body: `A FREE Madeira publica aqui notícias, guias e histórias da comunidade Bitcoin na Madeira.

## O que vais encontrar

- Notícias dos encontros mensais
- Guias para comerciantes
- Entrevistas

> Uma linha nova
> parte a linha, como no editor.

![Um rio entre montanhas](${beach.markdown} "O Funchal visto de cima")

Lê mais em [freemadeira.org](https://freemadeira.org).`,
    cover: beach,
    daysAgo: 1,
    images: [beach],
    locale: "pt",
    postId: "a1b2c3d4e5f60708",
    slug: "bem-vindo-ao-blog",
    summary: "O que vais encontrar no blog da FREE Madeira.",
    title: "Bem-vindo ao blog",
    topics: ["comunidade"],
  },
  {
    body: `FREE Madeira publishes news, guides and stories from the Bitcoin community in Madeira here.

## What you'll find

- News from the monthly meetups
- Guides for merchants
- Interviews

![A river between mountains](${beach.markdown} "Funchal from above")

| Meetup | When |
| --- | --- |
| Funchal | Last Wednesday |`,
    cover: beach,
    daysAgo: 1,
    images: [beach],
    locale: "en",
    postId: "a1b2c3d4e5f60708",
    slug: "welcome-to-the-blog",
    summary: "What you'll find on FREE Madeira's blog.",
    title: "Welcome to the blog",
    topics: ["community"],
  },
  {
    body: `Aceitar Bitcoin na tua loja é mais simples do que parece.

### Três passos

1. Instala uma carteira Lightning
2. Imprime o teu código QR
3. Avisa os clientes

\`\`\`
lnurl1...
\`\`\``,
    cover: forest,
    daysAgo: 8,
    locale: "pt",
    postId: "0f1e2d3c4b5a6978",
    slug: "aceitar-bitcoin-na-tua-loja",
    summary: "Um guia curto para comerciantes.",
    title: "Aceitar Bitcoin na tua loja",
    topics: ["comerciantes", "lightning"],
  },
];

function template(sample: Sample, pubkey: string): EventTemplate {
  const publishedAt = Math.floor(Date.now() / 1000) - sample.daysAgo * 86_400;
  const tags = [
    ["d", `${sample.postId}-${sample.locale}`],
    ["a", `${PROJECT_KIND}:${pubkey}:${PROJECT_D}`],
    ["post", sample.postId],
    ["L", "ISO-639-1"],
    ["l", sample.locale, "ISO-639-1"],
    ["title", sample.title],
    ["slug", sample.slug],
    ["summary", sample.summary],
    ["published_at", String(publishedAt)],
    ...sample.topics.map((topic) => ["t", topic]),
    ["p", pubkey, "", "author"],
    ...(sample.cover
      ? [["image", sample.cover.markdown], sample.cover.tag]
      : []),
    ...(sample.images ?? [])
      .filter((item) => item !== sample.cover)
      .map((item) => item.tag),
    ["alt", `Blog post: ${sample.title}`],
  ];
  return {
    content: sample.body,
    created_at: Math.floor(Date.now() / 1000),
    kind: PUBLISHED_KIND,
    tags,
  };
}

const relayUrl = process.env.RELAY_URL;
const key = process.env.SEED_KEY;
if (!(relayUrl && key)) {
  console.error(
    "Set RELAY_URL and SEED_KEY (an nsec, whitelisted on the relay)."
  );
  process.exit(1);
}
const signer = PrivateKeySigner.fromKey(key);
const pubkey = await signer.getPublicKey();
const relay = new TeamRelay(relayUrl, signer, pubkey);
// A subscription opens the connection, and the relay's challenge logs the key in.
relay.start([{ authors: [pubkey], kinds: [PROJECT_KIND] }], noop);
await relay.authenticated();

const events: EventTemplate[] = [
  {
    content: "",
    created_at: Math.floor(Date.now() / 1000),
    kind: PROJECT_KIND,
    tags: [
      ["d", PROJECT_D],
      ["title", "Sample blog"],
      ["alt", "Project: Sample blog"],
    ],
  },
  ...samples.map((sample) => template(sample, pubkey)),
];
for (const item of events) {
  // oxlint-disable-next-line no-await-in-loop -- one at a time, as the relay's rate limit wants
  const response = await relay.relay.publish(await signer.signEvent(item));
  console.log(
    `${item.kind} ${response.ok ? "ok" : `refused: ${response.message ?? ""}`}`
  );
}
relay.close();
console.log(
  `\nSITES=[{"site":"freemadeira","project":"${PROJECT_KIND}:${pubkey}:${PROJECT_D}","url":"http://localhost:4321","locales":["pt","en"]}]`
);
