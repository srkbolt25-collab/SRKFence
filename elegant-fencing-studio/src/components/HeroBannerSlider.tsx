"use client";

import * as React from "react";
import Image from "next/image";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export type HeroBannerSliderProps = {
  slides: readonly string[];
  altPrefix: string;
};

const BANNER_WIDTH = 1856;
const BANNER_HEIGHT = 576;

export default function HeroBannerSlider({
  slides,
  altPrefix,
}: HeroBannerSliderProps) {
  const [api, setApi] = React.useState<any>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const updateCurrent = () => setCurrent(api.selectedScrollSnap());

    updateCurrent();
    api.on("select", updateCurrent);

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4500);

    return () => {
      api.off("select", updateCurrent);
      clearInterval(interval);
    };
  }, [api]);

  if (!slides?.length) return null;

  return (
    <section className="relative w-full bg-white py-2 sm:py-3">
      <div className="relative mx-auto w-full px-0">
        <Carousel setApi={setApi} opts={{ loop: true }} className="w-full overflow-hidden bg-white">
          <CarouselContent className="ml-0">
            {slides.map((slide, index) => (
              <CarouselItem key={slide} className="pl-0">
                <div className="flex w-full items-center justify-center bg-white">
                  <Image
                    src={slide}
                    alt={`${altPrefix} ${index + 1}`}
                    width={BANNER_WIDTH}
                    height={BANNER_HEIGHT}
                    className="block h-auto max-h-[420px] max-w-full w-auto object-contain object-center"
                    sizes="100vw"
                    priority={index === 0}
                    quality={92}
                    loading={index === 0 ? undefined : "lazy"}
                    draggable={false}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-3 h-9 w-9 border-white/30 bg-black/35 text-white hover:bg-black/55" />
          <CarouselNext className="right-3 h-9 w-9 border-white/30 bg-black/35 text-white hover:bg-black/55" />
        </Carousel>
        <div className="pointer-events-none absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`h-2.5 w-2.5 rounded-full ${current === index ? "bg-primary" : "bg-primary/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
