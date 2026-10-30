import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@freemadeira/ui/components/collapsible";
import { cn } from "cn";
import { MinusIcon, PlusIcon } from "lucide-react";
import type { ReactNode } from "react";

interface DisclosureProps {
  children: ReactNode;
  className?: string;
  /** Classes for the box around the plus and minus. */
  iconClassName?: string;
  /** Keep the closed panel in the page, so search engines and find-in-page see it. */
  keepMounted?: boolean;
  panelClassName?: string;
  summary: ReactNode;
  triggerClassName?: string;
}

/** A row that opens with a plus and closes with a minus, as on the 2024 site. */
export function Disclosure({
  children,
  className,
  iconClassName,
  keepMounted = false,
  panelClassName,
  summary,
  triggerClassName,
}: DisclosureProps) {
  return (
    <Collapsible className={cn("pt-6", className)}>
      {/* The 2024 icons sat in a 24px box, level with the first line. */}
      <CollapsibleTrigger
        className={cn(
          "group flex w-full items-start justify-between text-left text-gray-900",
          triggerClassName
        )}
      >
        {summary}
        <span
          className={cn(
            "ml-6 flex h-7 w-6 shrink-0 items-center justify-center",
            iconClassName
          )}
        >
          <PlusIcon
            className="size-5 group-data-panel-open:hidden"
            aria-hidden="true"
          />
          <MinusIcon
            className="hidden size-5 group-data-panel-open:block"
            aria-hidden="true"
          />
        </span>
      </CollapsibleTrigger>
      <CollapsibleContent
        // Only when open: a panel kept mounted still has its margin when closed.
        className={cn("overflow-hidden data-open:mt-2", panelClassName)}
        hiddenUntilFound={keepMounted}
        keepMounted={keepMounted}
      >
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
}
