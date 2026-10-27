import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import { defaultLocale, legacyRedirects, locales } from "@freemadeira/i18n";
import { paraglideVitePlugin } from "@inlang/paraglide-js";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, envField } from "astro/config";

import { routes } from "./src/i18n/routes";

export default defineConfig({
  adapter: vercel(),
  env: {
    // Read at runtime by the newsletter endpoints; set them in Vercel.
    schema: {
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
