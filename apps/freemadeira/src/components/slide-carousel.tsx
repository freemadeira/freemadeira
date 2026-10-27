import { buttonVariants } from "@freemadeira/ui/components/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@freemadeira/ui/components/carousel";
import type { CarouselApi } from "@freemadeira/ui/components/carousel";
import { cn } from "cn";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { externalLinkProps } from "@/lib/links";
import { containerWrapper, heading } from "@/lib/typography";

export interface Slide {
  buttons: { href: string; label: string; light?: boolean }[];
  /** An optimised image from getImage(). */
  image: { sizes: string; src: string; srcset: string };
  /** Madeira's slides: a semibold heading over large body text. */
  subtitle?: string;
  text: string;
  title: string;
}

interface Props {
  label: string;
  nextLabel: string;
  previousLabel: string;
  slides: Slide[];
}

const AUTOPLAY_MS = 10_000;

const arrowButton =
  "inline-flex cursor-pointer items-center justify-center rounded-full border-[1.5px] border-white p-2 text-white transition duration-75 hover:bg-white hover:text-dark active:scale-95 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white";

function Controls({
  nextLabel,
  previousLabel,
}: Omit<Props, "label" | "slides">) {
  const { canScrollNext, canScrollPrev, scrollNext, scrollPrev } =
    useCarousel();
  return (
    <div className={cn(containerWrapper, "absolute inset-x-0 bottom-14")}>
      <div className="flex gap-3 md:justify-center md:gap-4">
        <button
          className={arrowButton}
          disabled={!canScrollPrev}
          onClick={scrollPrev}
          type="button"
        >
          <ArrowLeft
            aria-hidden="true"
            className="size-7 sm:size-8"
            strokeWidth={1.5}
          />
          <span className="sr-only">{previousLabel}</span>
        </button>
        <button
          className={arrowButton}
          disabled={!canScrollNext}
          onClick={scrollNext}
          type="button"
        >
          <ArrowRight
            aria-hidden="true"
            className="size-7 sm:size-8"
            strokeWidth={1.5}
          />
          <span className="sr-only">{nextLabel}</span>
        </button>
      </div>
    </div>
  );
}

/**
 * Full-height photo slides. They advance every ten seconds and pause while
 * the pointer is over them, or for two rounds after someone uses the arrows.
 */
export default function SlideCarousel({
  label,
  nextLabel,
  previousLabel,
  slides,
}: Props) {
  const [api, setApi] = useState<CarouselApi>();
  const [pausedUntil, setPausedUntil] = useState(0);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (!api) {
      return;
    }
    const pause = () => setPausedUntil(Date.now() + AUTOPLAY_MS * 2);
    api.on("pointerDown", pause);
    const timer = setInterval(() => {
      if (hovering || Date.now() < pausedUntil) {
        return;
      }
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, AUTOPLAY_MS);
    return () => {
      clearInterval(timer);
      api.off("pointerDown", pause);
    };
  }, [api, hovering, pausedUntil]);

  return (
    <Carousel
      aria-label={label}
      className="relative"
      onClickCapture={() => setPausedUntil(Date.now() + AUTOPLAY_MS * 2)}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      setApi={setApi}
    >
      <CarouselContent className="ml-0">
        {slides.map((slide) => (
          <CarouselItem className="pl-0" key={slide.title}>
            <div className="relative isolate h-screen w-full pt-14 pb-10 text-white select-none sm:pt-16 sm:pb-14">
              <img
                alt=""
                className="absolute inset-0 -z-10 size-full object-cover"
                decoding="async"
                draggable={false}
                loading="lazy"
                sizes={slide.image.sizes}
                src={slide.image.src}
                srcSet={slide.image.srcset}
              />
              <div className="absolute inset-0 -z-10 bg-black/60 md:bg-transparent md:bg-linear-to-r md:from-black/60 md:via-black/50 md:to-black/20" />
              <div className={cn(containerWrapper, "h-full")}>
                <div className="relative z-10 flex h-full flex-col gap-8">
                  <p className="flex items-center text-lg leading-[150%]">
                    {slide.title}
                  </p>
                  <div className="flex w-full grow flex-col justify-center gap-6 md:w-4/5 lg:w-3/5">
                    {slide.subtitle ? (
                      <>
                        <h2 className={cn(heading.h4, "font-semibold")}>
                          {slide.subtitle}
                        </h2>
                        <p className="text-3xl">{slide.text}</p>
                      </>
                    ) : (
                      <h2 className={heading.h4}>{slide.text}</h2>
                    )}
                    <div className="flex flex-wrap gap-4">
                      {slide.buttons.map((button) => (
                        <a
                          className={buttonVariants({
                            variant: button.light ? "fm-outline-light" : "fm",
                          })}
                          href={button.href}
                          key={button.href}
                          {...externalLinkProps(button.href)}
                        >
                          {button.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <Controls nextLabel={nextLabel} previousLabel={previousLabel} />
    </Carousel>
  );
}
