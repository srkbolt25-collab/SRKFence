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
    <section className="relative w-full bg-white py-2 sm:py-3">
      <div className="relative mx-auto w-full px-0">
        <Carousel setApi={setApi} opts={{ loop: true }} className="w-full overflow-hidden bg-white">
          <CarouselContent className="ml-0">
            {slides.map((slide, index) => (
              <CarouselItem key={slide} className="pl-0">
                <div className="relative mx-auto w-full overflow-hidden bg-white">
                  <div className="relative mx-auto aspect-[1856/576] w-full max-h-[420px] min-h-[180px] sm:min-h-[220px] md:min-h-[260px] lg:min-h-[300px]">
                    <Image
                      src={slide}
                      alt={`${altPrefix} ${index + 1}`}
                      fill
                      className="object-contain object-center"
                      sizes="100vw"
                      priority={index === 0}
                      quality={92}
                      loading={index === 0 ? undefined : "lazy"}
                    />
                  </div>
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
              className={`h-2 rounded-full transition-all ${currentSlide === index ? "w-7 bg-white shadow" : "w-2 bg-white/70"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
