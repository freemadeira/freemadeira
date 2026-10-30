import { buttonVariants } from "@freemadeira/ui/components/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@freemadeira/ui/components/sheet";
import { cn } from "cn";
import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import type { ReactNode } from "react";

import { heading } from "@/lib/typography";

interface Link {
  href: string;
  label: string;
}

interface Props {
  about: { items: Link[]; label: string };
  backLabel: string;
  bitcoinAtlantis: Link;
  blog: Link;
  closeLabel: string;
  current: string;
  home: string;
  language: Link & { hreflang: string; lang: string };
  learn: Link;
  /** The logo, rendered by Astro and passed in as a slot. */
  logo?: ReactNode;
  openLabel: string;
  shop: Link;
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 15 26"
    >
      <path
        d="M1 25L13 13L0.999999 1"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  );
}

/**
 * The header menu below the lg breakpoint: a yellow panel, with the About
 * pages on a dark panel of their own.
 */
export default function MobileMenu(props: Props) {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <Sheet onOpenChange={(open) => !open && setAboutOpen(false)}>
      <SheetTrigger className="hover:bg-mountain-mist-50 -me-4 flex size-18 cursor-pointer items-center justify-center rounded-full lg:hidden">
        <span className="sr-only">{props.openLabel}</span>
        <MenuIcon aria-hidden="true" size={40} />
      </SheetTrigger>
      <SheetContent
        className={cn(
          "bg-primary-400 text-dark gap-0 overflow-y-auto border-0 p-0 shadow-none data-[side=right]:w-full sm:px-4 sm:py-8 data-[side=right]:sm:max-w-md lg:hidden",
          aboutOpen && "bg-dark"
        )}
        showCloseButton={false}
        side="right"
      >
        <SheetTitle className="sr-only">{props.about.label}</SheetTitle>
        <div
          className={cn(
            "flex items-center justify-between bg-white p-4 sm:justify-end sm:p-0",
            aboutOpen ? "sm:bg-dark" : "sm:bg-primary-400"
          )}
        >
          <a className="-ms-2 sm:hidden" href={props.home}>
            {props.logo}
          </a>
          <SheetClose className="hover:bg-mountain-mist-50 flex aspect-square cursor-pointer items-center justify-center rounded-full p-2 sm:hover:bg-transparent">
            <span className="sr-only">{props.closeLabel}</span>
            <XIcon
              aria-hidden="true"
              className={cn(aboutOpen && "sm:text-white")}
              size={40}
            />
          </SheetClose>
        </div>

        {aboutOpen ? (
          <>
            <button
              className="group flex cursor-pointer flex-col items-start gap-8 px-4 py-8 sm:pt-4 sm:pb-0"
              onClick={() => setAboutOpen(false)}
              type="button"
            >
              <span className="sr-only">{props.backLabel}</span>
              <ChevronRight className="-ml-2 h-4 w-8 rotate-180 text-white" />
              <span className="text-primary-400 group-hover:border-primary-400 w-fit border-b border-transparent pb-2 text-lg">
                {props.about.label}
              </span>
            </button>
            <ul className="divide-mountain-mist-300 text-mountain-mist-300 flex flex-col divide-y px-4 py-8 sm:pt-2 sm:pb-0">
              {props.about.items.map((item) => (
                <li key={item.href}>
                  <a
                    aria-current={
                      item.href === props.current ? "page" : undefined
                    }
                    className={cn(
                      "block py-6 hover:text-white",
                      heading.h5,
                      item.href === props.current && "text-white"
                    )}
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div className="flex grow flex-col justify-between gap-8 px-4 py-8 sm:pt-2 sm:pb-0">
            <ul className="divide-mountain-mist-700 flex flex-col divide-y">
              <li>
                <button
                  className={cn(
                    "text-mountain-mist-700 hover:text-dark flex w-full cursor-pointer items-center justify-between py-6 text-left",
                    heading.h4
                  )}
                  onClick={() => setAboutOpen(true)}
                  type="button"
                >
                  {props.about.label}
                  <ChevronRight className="h-4 w-8" />
                </button>
              </li>
              <li>
                <a
                  aria-current={
                    props.current.startsWith(props.blog.href)
                      ? "page"
                      : undefined
                  }
                  className={cn(
                    "text-mountain-mist-700 hover:text-dark aria-[current=page]:text-dark block py-6",
                    heading.h4
                  )}
                  href={props.blog.href}
                >
                  {props.blog.label}
                </a>
              </li>
              <li>
                <a
                  className={cn(
                    "text-mountain-mist-700 hover:text-dark block py-6",
                    heading.h4
                  )}
                  href={props.bitcoinAtlantis.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {props.bitcoinAtlantis.label}
                </a>
              </li>
              <li>
                <a
                  className="text-mountain-mist-700 hover:text-dark block py-6 text-lg"
                  href={props.language.href}
                  hrefLang={props.language.hreflang}
                  lang={props.language.lang}
                >
                  {props.language.label}
                </a>
              </li>
            </ul>
            <div className="flex flex-col gap-2">
              <a
                className={cn(
                  buttonVariants({ variant: "fm-outline" }),
                  "w-full border-0 bg-white"
                )}
                href={props.learn.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                {props.learn.label}
              </a>
              <a
                className={cn(
                  buttonVariants({ variant: "fm-outline-light" }),
                  "bg-dark w-full border-0"
                )}
                href={props.shop.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                {props.shop.label}
              </a>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
