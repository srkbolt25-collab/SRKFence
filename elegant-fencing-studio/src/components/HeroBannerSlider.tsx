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
  imageWidth?: number;
  imageHeight?: number;
};

export default function HeroBannerSlider({
  slides,
  altPrefix = "Banner",
  imageWidth = 1856,
  imageHeight = 576,
}: HeroBannerSliderProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrentSlide(api.selectedScrollSnap());
    const onSelect = () => setCurrentSlide(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => api.off("select", onSelect);
  }, [api]);

  useEffect(() => {
    if (!api) return;
    const timer = setInterval(() => api.scrollNext(), 4500);
    return () => clearInterval(timer);
  }, [api]);

  if (!slides.length) return null;

  return (
    <section className="relative w-full !mt-0 bg-white py-3 sm:py-4">
      <div className="relative mx-auto w-full max-w-7xl px-3 sm:px-4 lg:px-6">
        <Carousel setApi={setApi} opts={{ loop: true }} className="w-full overflow-hidden rounded-none sm:rounded-xl">
          <CarouselContent className="ml-0">
            {slides.map((slide, index) => (
              <CarouselItem key={slide} className="pl-0">
                <div className="relative w-full overflow-hidden bg-white" style={{ aspectRatio: `${imageWidth} / ${imageHeight}` }}>
                  <Image
                    src={slide}
                    alt={`${altPrefix} ${index + 1}`}
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    priority={index === 0}
                    quality={90}
                    loading={index === 0 ? undefined : "lazy"}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 sm:left-3 h-9 w-9 border-white/30 bg-black/35 text-white hover:bg-black/55" />
          <CarouselNext className="right-2 sm:right-3 h-9 w-9 border-white/30 bg-black/35 text-white hover:bg-black/55" />
        </Carousel>
        <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`h-2 rounded-full transition-all ${currentSlide === index ? "w-7 bg-white shadow" : "w-2 bg-white/70"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
