import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import { defaultLocale, legacyRedirects, locales } from "@freemadeira/i18n";
import { paraglideVitePlugin } from "@inlang/paraglide-js";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import { routes } from "./src/i18n/routes";

export default defineConfig({
  adapter: vercel(),
  i18n: {
    defaultLocale,
    locales: [...locales],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [react()],
  redirects: legacyRedirects(routes),
  server: { port: 4322 },
  site: "https://bitcoinatlantis.com",
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
