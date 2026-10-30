import { buttonVariants } from "@freemadeira/ui/components/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@freemadeira/ui/components/collapsible";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@freemadeira/ui/components/popover";
import { cn } from "cn";
import { ChevronDownIcon, MenuIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";

export interface HeaderLink {
  href: string;
  label: string;
  /** Listed under "More" on wide screens. */
  more?: boolean;
}

interface Picture {
  height: number;
  src: string;
  width: number;
}

interface SiteHeaderProps {
  /** Tighter nav between xl and 2xl, for labels too long to fit (Portuguese). */
  compactNav?: boolean;
  currentPath: string;
  labels: { menu: string; more: string };
  language: { href: string; hreflang: string; label: string; lang: string };
  links: HeaderLink[];
  logo: Record<"horizontal" | "vertical", Picture>;
  logoHref: string;
  recap: { href: string; label: string };
}

function linkClass(active: boolean) {
  return cn(
    "hover:text-yellow font-bold",
    active ? "text-yellow" : "text-basalt"
  );
}

/**
 * Sticks with the 2028 banner (base-layout.astro); blurs the page behind it
 * once scrolled. The open phone menu scrolls when it is taller than the screen.
 */
export function SiteHeader({
  compactNav = false,
  currentPath,
  labels,
  language,
  links,
  logo,
  logoHref,
  recap,
}: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navbarLinks = links.filter((link) => !link.more);
  const moreLinks = links.filter((link) => link.more);

  return (
    <header
      className={cn(
        "flex min-h-0 flex-col pb-2 transition-all xl:pt-2",
        scrolled && "bg-white/70 backdrop-blur-md"
      )}
    >
      <Collapsible
        className="flex min-h-0 flex-col"
        render={<nav aria-label="Main" />}
      >
        {/* Full width, as before: the old header's class replaced Container's max-w-7xl. */}
        <div className="flex min-h-0 flex-col px-4 sm:px-6 lg:px-8">
          <div className="relative flex min-h-fit shrink-0 items-center justify-between">
            <a href={logoHref} className="hidden min-w-fit pt-3 sm:flex">
              <img
                {...logo.horizontal}
                alt="Bitcoin Atlantis"
                className="w-72"
              />
            </a>
            {/* Shrinks on the narrowest phones, where the button and menu need the room. */}
            <a href={logoHref} className="block min-w-0 pt-3 sm:hidden">
              <img {...logo.vertical} alt="Bitcoin Atlantis" className="w-24" />
            </a>

            <div
              className={cn(
                "hidden xl:flex",
                compactNav ? "space-x-4 2xl:space-x-8" : "space-x-8"
              )}
            >
              <div className="flex items-center justify-center overflow-hidden whitespace-nowrap">
                <div
                  className={
                    compactNav ? "xl:space-x-4 2xl:space-x-8" : "xl:space-x-8"
                  }
                >
                  {navbarLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "inline-flex items-center px-1 py-1",
                        linkClass(currentPath === link.href)
                      )}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              <Popover>
                <PopoverTrigger className="text-basalt hover:text-yellow inline-flex items-center gap-x-1 outline-hidden">
                  <span className="px-1 py-1 font-bold">{labels.more}</span>
                  <ChevronDownIcon
                    className="size-5"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </PopoverTrigger>
                <PopoverContent
                  sideOffset={12}
                  className="w-max min-w-48 gap-0 rounded-xl p-4 shadow-lg ring-gray-900/5"
                >
                  {moreLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "block p-2 px-1 py-1",
                        linkClass(currentPath === link.href)
                      )}
                    >
                      {link.label}
                    </a>
                  ))}
                  <a
                    href={language.href}
                    hrefLang={language.hreflang}
                    lang={language.lang}
                    className={cn(
                      "mt-2 block border-t border-gray-900/10 px-1 pt-3 pb-1 uppercase",
                      linkClass(false)
                    )}
                  >
                    {language.label}
                  </a>
                </PopoverContent>
              </Popover>
            </div>

            <div className="flex items-center gap-2">
              {/* Only where the bar has room: on phones it is in the menu, and
                  from xl, where the nav fills the bar, under "More". */}
              <a
                href={language.href}
                hrefLang={language.hreflang}
                lang={language.lang}
                className="text-basalt hover:text-yellow hidden px-2 py-1 text-sm font-semibold sm:inline xl:hidden"
              >
                {language.label}
              </a>
              <a
                href={recap.href}
                className={buttonVariants({ variant: "atlantis" })}
              >
                <span className="whitespace-nowrap">{recap.label}</span>
              </a>

              <CollapsibleTrigger className="group text-basalt hover:text-basalt-medium focus:ring-yellow relative inline-flex items-center justify-center rounded-md p-2 focus:ring-2 focus:outline-hidden focus:ring-inset xl:hidden">
                <span className="sr-only">{labels.menu}</span>
                <MenuIcon
                  className="block size-6 group-data-panel-open:hidden"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <XIcon
                  className="hidden size-6 group-data-panel-open:block"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </CollapsibleTrigger>
            </div>
          </div>

          <CollapsibleContent className="min-h-0 overflow-y-auto overscroll-contain xl:hidden">
            <div className="flex flex-col justify-end space-y-1 pt-2 pb-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "block px-3 py-2 text-right",
                    linkClass(currentPath === link.href)
                  )}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={language.href}
                hrefLang={language.hreflang}
                lang={language.lang}
                className={cn(
                  "block px-3 py-2 text-right uppercase sm:hidden",
                  linkClass(false)
                )}
              >
                {language.label}
              </a>
            </div>
          </CollapsibleContent>
        </div>
      </Collapsible>
    </header>
  );
}
