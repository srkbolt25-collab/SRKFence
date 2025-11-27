'use client';

import Link from "next/link";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./ui/carousel";
import { useEffect, useState } from "react";

const heroSlides = [
  {
    banner: "/weided.png",
    title: "High Security Fencing and Gates to",
    highlight: "Secure High Value Assets",
    badge: "Secure High Value Assets",
  },
  {
    banner: "/chain link.png",
    title: "Premium Metal Fencing Solutions",
    highlight: "Durable & Secure",
    badge: "Metal Fencing",
  },
  {
    banner: "/pvc.png",
    title: "Modern Vinyl Fencing Systems",
    highlight: "Low Maintenance Excellence",
    badge: "Vinyl Fencing",
  },
  {
    banner: "/corrugated.png",
    title: "Classic Wood Fencing",
    highlight: "Timeless Elegance",
    badge: "Wood Fencing",
  },
];

const Hero = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Auto-play functionality
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[580px] w-full overflow-hidden pt-0">
      <Carousel setApi={setApi} className="w-full h-full" opts={{ loop: true }}>
        <CarouselContent className="h-full">
          {heroSlides.map((slide, index) => (
            <CarouselItem key={index} className="h-full pl-0">
              <div className="relative h-[400px] sm:h-[500px] md:h-[550px] lg:h-[580px] w-full">
                {/* Banner Background - Fully Visible */}
                <div className="absolute inset-0 w-full h-full flex items-center justify-center" style={{ backgroundColor: '#ebebeb' }}>
                  <Image
                    src={slide.banner}
                    alt={slide.title}
                    fill
                    className="object-contain w-full h-full"
                    priority={index === 0}
                    sizes="100vw"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 sm:left-4 md:left-8 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 z-20" />
        <CarouselNext className="right-2 sm:right-4 md:right-8 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 z-20" />
      </Carousel>

      {/* Buttons at Bottom */}
      <div className="absolute inset-0 z-10 flex h-full w-full items-end pointer-events-none">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pointer-events-auto pb-8 sm:pb-10 lg:pb-12 w-full">
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#c5162a] to-[#e63946] px-4 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold uppercase tracking-wide text-white shadow-glow transition-all duration-300 hover:shadow-hover hover:scale-105 border-0"
            >
              Get a Quote
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/products"
              className="group inline-flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold uppercase tracking-wide text-gray-800 shadow-modern transition-all duration-300 hover:bg-white/20 hover:scale-105"
            >
              View Our Products
            </Link>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-20 sm:bottom-24 md:bottom-28 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index
                ? "w-8 bg-white"
                : "w-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
