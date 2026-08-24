"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export type SlideItem = {
  src: string;
  alt: string;
};

export default function CoatingMaterialsHeroSlider({ slides }: { slides: SlideItem[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    const timer = setInterval(() => api.scrollNext(), 4500);
    return () => {
      api.off("select", onSelect);
      clearInterval(timer);
    };
  }, [api]);

  if (!slides?.length) return null;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-white p-2 shadow-sm">
      <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
        <CarouselContent className="ml-0">
          {slides.map((slide, index) => (
            <CarouselItem key={`${slide.src}-${index}`} className="pl-0">
              <div className="flex min-h-[240px] items-center justify-center overflow-hidden rounded-xl bg-muted/20 sm:min-h-[320px] lg:min-h-[360px]">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={1200}
                  height={700}
                  className="h-auto max-h-[420px] w-full object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-3 h-9 w-9 border-white/40 bg-black/35 text-white hover:bg-black/50" />
        <CarouselNext className="right-3 h-9 w-9 border-white/40 bg-black/35 text-white hover:bg-black/50" />
      </Carousel>
      <div className="pointer-events-none absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`h-2.5 rounded-full transition-all ${current === index ? "w-7 bg-primary" : "w-2.5 bg-primary/30"}`}
          />
        ))}
      </div>
    </div>
  );
}
