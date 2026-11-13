import { defaultLocale, htmlLang } from "@freemadeira/i18n";
import {
  ScrollViewStyleReset,
  useServerDocumentContext,
} from "expo-router/html";
import type { PropsWithChildren } from "react";

import { colors } from "@/theme/colors";

// The page behind the app, in the visitor's scheme before the app hydrates.
const background = `body{background-color:${colors.light.background}}@media (prefers-color-scheme:dark){body{background-color:${colors.dark.background}}}`;

const registerServiceWorker = `if("serviceWorker" in navigator){addEventListener("load",()=>navigator.serviceWorker.register("/sw.js"))}`;

/**
 * The HTML around every page of the web build. Only runs at build time.
 * Expo passes the favicon, styles, fonts and scripts through the server
 * document context: without its nodes, pages ship no JavaScript.
 */
export default function Root({ children }: PropsWithChildren) {
  const { bodyAttributes, bodyNodes, headNodes, htmlAttributes } =
    useServerDocumentContext();
  return (
    <html {...htmlAttributes} lang={htmlLang[defaultLocale]}>
      <head>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta
          content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
          name="viewport"
        />
        <meta
          content={colors.light.background}
          media="(prefers-color-scheme: light)"
          name="theme-color"
        />
        <meta
          content={colors.dark.background}
          media="(prefers-color-scheme: dark)"
          name="theme-color"
        />
        <link href="/manifest.webmanifest" rel="manifest" />
        <link href="/icons/apple-touch-icon.png" rel="apple-touch-icon" />
        <ScrollViewStyleReset />
        {/* oxlint-disable-next-line react/no-danger -- static CSS, no input */}
        <style dangerouslySetInnerHTML={{ __html: background }} />
        {process.env.NODE_ENV === "production" && (
          // oxlint-disable-next-line react/no-danger -- static script, no input
          <script dangerouslySetInnerHTML={{ __html: registerServiceWorker }} />
        )}
        {headNodes}
      </head>
      <body {...bodyAttributes}>
        {children}
        {bodyNodes}
      </body>
    </html>
  );
}
