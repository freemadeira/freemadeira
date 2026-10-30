import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import { defaultLocale, legacyRedirects, locales } from "@freemadeira/i18n";
import { paraglideVitePlugin } from "@inlang/paraglide-js";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, envField } from "astro/config";

import { routes } from "./src/i18n/routes";

// The indexer revalidates blog pages with this token when posts change.
// Without it, they're rendered again every five minutes instead.
const isrBypassToken = process.env.ISR_BYPASS_TOKEN;

export default defineConfig({
  adapter: vercel({
    // Blog pages are rendered on demand and cached until revalidated. The
    // other on-demand routes answer per request, and the newsletter
    // preferences page shows one subscriber's data, so none of them is cached.
    isr: {
      bypassToken: isrBypassToken,
      exclude: [
        /^\/api\//u,
        /^\/\.well-known\//u,
        /^\/(?:en\/)?newsletter\/prefer/u,
      ],
      expiration: isrBypassToken ? false : 300,
    },
  }),
  env: {
    // Read at runtime by the blog and the newsletter endpoints; set them in Vercel.
    schema: {
      // sqld, where the indexer writes the blog, and a read-only token for it.
      LIBSQL_AUTH_TOKEN: envField.string({
        access: "secret",
        context: "server",
        optional: true,
      }),
      LIBSQL_URL: envField.string({
        access: "secret",
        context: "server",
        optional: true,
      }),
      MAILERLITE_TOKEN: envField.string({
        access: "secret",
        context: "server",
        optional: true,
      }),
      SESSION_PASSWORD: envField.string({
        access: "secret",
        context: "server",
        optional: true,
      }),
    },
  },
  i18n: {
    defaultLocale,
    locales: [...locales],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [react()],
  redirects: {
    ...legacyRedirects(routes),
    // The course is taught in Portuguese, and so was its page.
    "/education/info-diploma-bitcoin": routes.diplomaBitcoin.pt,
    // Linked from newsletter emails already sent.
    "/newsletter/preferences/[email]/[token]":
      "/en/newsletter/preferences/[email]/[token]",
  },
  server: { port: 4321 },
  site: "https://freemadeira.org",
  vite: {
    plugins: [
      tailwindcss(),
      paraglideVitePlugin({
        outdir: "./src/paraglide",
        project: "./project.inlang",
      }),
    ],
  },
});
