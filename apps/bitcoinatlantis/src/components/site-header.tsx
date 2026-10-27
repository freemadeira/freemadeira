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

/** Sticky below the 2028 banner; blurs the page behind it once scrolled. */
export function SiteHeader({
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
        "sticky top-[67px] z-50 mb-4 pb-2 transition-all sm:top-11 xl:pt-2",
        scrolled && "mt-0 bg-white/70 backdrop-blur-md"
      )}
    >
      <Collapsible render={<nav aria-label="Main" />}>
        {/* Full width, as before: the old header's class replaced Container's max-w-7xl. */}
        <div className="mx-auto flex-wrap px-4 sm:px-6 lg:px-8">
          <div className="relative flex min-h-fit items-center justify-between">
            <a href={logoHref} className="hidden min-w-fit pt-3 sm:flex">
              <img
                {...logo.horizontal}
                alt="Bitcoin Atlantis"
                className="w-72"
              />
            </a>
            <a href={logoHref} className="flex min-w-fit pt-3 sm:hidden">
              <img {...logo.vertical} alt="Bitcoin Atlantis" className="w-24" />
            </a>

            <div className="hidden space-x-8 xl:flex">
              <div className="flex items-center justify-center overflow-hidden whitespace-nowrap">
                <div className="xl:space-x-8">
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
                  <ChevronDownIcon className="size-5" aria-hidden="true" />
                </PopoverTrigger>
                <PopoverContent
                  sideOffset={12}
                  className="w-48 gap-0 rounded-xl p-4 shadow-lg ring-gray-900/5"
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
                </PopoverContent>
              </Popover>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={language.href}
                hrefLang={language.hreflang}
                lang={language.lang}
                className="text-basalt hover:text-yellow px-2 py-1 text-sm font-semibold"
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
                  aria-hidden="true"
                />
                <XIcon
                  className="hidden size-6 group-data-panel-open:block"
                  aria-hidden="true"
                />
              </CollapsibleTrigger>
            </div>
          </div>

          <CollapsibleContent className="xl:hidden">
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
            </div>
          </CollapsibleContent>
        </div>
      </Collapsible>
    </header>
  );
}
