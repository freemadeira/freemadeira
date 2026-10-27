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
  /** Keep the closed panel in the page, so search engines and find-in-page see it. */
  keepMounted?: boolean;
  panelClassName?: string;
  summary: ReactNode;
}

/** A row that opens with a plus and closes with a minus, as on the 2024 site. */
export function Disclosure({
  children,
  className,
  keepMounted = false,
  panelClassName,
  summary,
}: DisclosureProps) {
  return (
    <Collapsible className={cn("pt-6", className)}>
      <CollapsibleTrigger className="group flex w-full items-center justify-between text-left text-gray-900">
        {summary}
        <span className="ml-6 flex h-7 items-center">
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
        className={cn("mt-2 overflow-hidden", panelClassName)}
        hiddenUntilFound={keepMounted}
        keepMounted={keepMounted}
      >
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
}
