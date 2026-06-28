"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

export type HeroBannerSliderProps = {
  slides: readonly string[];
  altPrefix?: string;
};

export default function HeroBannerSlider({
  slides,
  altPrefix = "Banner",
}: HeroBannerSliderProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => setCurrentSlide(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);

    const timer = setInterval(() => api.scrollNext(), 4500);

    return () => {
      api.off("select", onSelect);
      clearInterval(timer);
    };
  }, [api]);

  if (!slides.length) return null;

  return (
    <section className="relative bg-gradient-to-b from-white to-muted/20 py-6 sm:py-8">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Carousel setApi={setApi} opts={{ loop: true }} className="relative overflow-hidden rounded-3xl border border-border bg-white p-2 shadow-elegant">
          <CarouselContent className="ml-0">
            {slides.map((slide, index) => (
              <CarouselItem key={slide} className="pl-0">
                <div className="flex aspect-[1856/576] w-full items-center justify-center overflow-hidden rounded-2xl bg-white">
                  <Image
                    src={slide}
                    alt={`${altPrefix} ${index + 1}`}
                    width={1856}
                    height={576}
                    className="h-auto w-full object-contain"
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    priority={index === 0}
                    quality={92}
                    loading={index === 0 ? undefined : "lazy"}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 h-10 w-10 border-white/40 bg-black/35 text-white hover:bg-black/55" />
          <CarouselNext className="right-4 h-10 w-10 border-white/40 bg-black/35 text-white hover:bg-black/55" />
          <div className="pointer-events-none absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`h-2.5 rounded-full transition-all ${currentSlide === index ? "w-8 bg-primary" : "w-2.5 bg-primary/35"}`}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
}
