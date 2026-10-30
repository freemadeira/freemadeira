import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@freemadeira/ui/components/dialog";
import { cn } from "cn";
import { ArrowRight, XIcon } from "lucide-react";
import type { ReactNode } from "react";

import { heading } from "@/lib/typography";

interface Props {
  bio: string;
  closeLabel: string;
  name: string;
  /** An optimised portrait from getImage(). */
  picture?: { src: string; srcset: string };
  /** The person's social links, rendered by Astro. */
  socials?: ReactNode;
  triggerLabel: string;
}

/** "Read X's full bio", opening the bio in a dialog. */
export default function PersonBio(props: Props) {
  return (
    <Dialog>
      <DialogTrigger className="group flex w-fit cursor-pointer items-center gap-4 pt-2.5 text-left">
        <span className="underline-offset-6 group-hover:underline">
          {props.triggerLabel}
        </span>
        <span className="bg-primary-400 rounded-full p-1 text-black">
          <ArrowRight aria-hidden="true" size={22} strokeWidth={1.2} />
        </span>
      </DialogTrigger>
      {/* A sheet along the bottom on phones, a centred panel from sm up. */}
      <DialogContent
        className="no-scrollbar bg-bridal-50 text-dark top-auto bottom-0 block max-h-[80vh] max-w-full translate-y-0 overflow-auto rounded-none px-4 pt-0 pb-16 text-left text-base ring-0 sm:top-1/2 sm:bottom-auto sm:max-w-[min(64rem,calc(100%-4rem))] sm:-translate-y-1/2 sm:py-8 sm:pl-8"
        showCloseButton={false}
      >
        <div className="bg-bridal-50 sticky top-0 z-20 pt-4 pb-3 text-right sm:absolute sm:top-4 sm:right-4 sm:bg-transparent sm:py-1">
          <DialogClose className="hover:bg-mountain-mist-50 inline-flex cursor-pointer items-center justify-center rounded-full p-2">
            <XIcon aria-hidden="true" className="size-8" strokeWidth={1.5} />
            <span className="sr-only">{props.closeLabel}</span>
          </DialogClose>
        </div>
        <div className="flex flex-col items-start gap-8 sm:flex-row">
          {props.picture && (
            <img
              alt=""
              className="aspect-square w-full min-w-0 object-cover sm:w-1/3"
              sizes="(max-width: 640px) 100vw, 33vw"
              src={props.picture.src}
              srcSet={props.picture.srcset}
            />
          )}
          <div className={props.picture ? "sm:max-w-2/3" : undefined}>
            {/* Pinned under the close button while the bio scrolls on phones;
                from sm up, the bio and links scroll beneath it. */}
            <DialogTitle
              className={cn(
                heading.h4,
                "bg-bridal-50 sticky top-12 z-10 w-full sm:absolute sm:w-auto sm:pb-10"
              )}
            >
              {props.name}
            </DialogTitle>
            <div className="sm:mt-27 sm:max-h-96 sm:overflow-auto sm:pr-8">
              <p className="py-8 text-lg sm:pt-0 sm:pb-10">{props.bio}</p>
              {props.socials}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
