import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLinkItem,
  DropdownMenuTrigger,
} from "@freemadeira/ui/components/dropdown-menu";
import { cn } from "cn";

import { menuItemClass } from "@/lib/navigation";

interface Props {
  current: string;
  items: { href: string; label: string }[];
  label: string;
}

/** The desktop header's dropdown for the pages about FREE Madeira. */
export default function AboutMenu({ current, items, label }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          menuItemClass,
          "data-popup-open:border-b-dark flex items-center gap-2"
        )}
      >
        {label}
        <svg
          aria-hidden="true"
          className="h-1 w-2"
          fill="none"
          viewBox="0 0 9 6"
        >
          <path
            d="M0.5 0.5L4.5 4.5L8.5 0.5"
            stroke="currentColor"
            strokeLinecap="round"
          />
        </svg>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="divide-mountain-mist-500 bg-dark w-60 divide-y rounded-none px-6.5 py-2 shadow-none ring-0"
        sideOffset={20}
      >
        {items.map((item) => (
          <DropdownMenuLinkItem
            aria-current={item.href === current ? "page" : undefined}
            className={cn(
              "text-mountain-mist-500 rounded-none px-0 py-4.5 text-base hover:text-white focus:bg-transparent focus:text-white",
              item.href === current && "text-white"
            )}
            href={item.href}
            key={item.href}
          >
            {item.label}
          </DropdownMenuLinkItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
