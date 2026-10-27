/** Links that leave the site open in a new tab, as they always have here. */
export function isExternal(href: string): boolean {
  return (
    /^https?:\/\//u.test(href) && !href.startsWith("https://freemadeira.org")
  );
}

/** Spread onto an <a>: a new tab and no opener for links that leave the site. */
export function externalLinkProps(href: string) {
  return isExternal(href)
    ? { rel: "noopener noreferrer", target: "_blank" }
    : {};
}
