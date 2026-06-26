'use client';

import heroImage from "@/assets/hero-fence.jpg";
import metalFence from "@/assets/metal-fence.jpg";
import vinylFence from "@/assets/vinyl-fence.jpg";
import woodFence from "@/assets/wood-fence.jpg";
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
    image: "/SRK FENCE Banners.webp",
    title: "Chain link fence",
    highlight: "Durable & Secure",
    badge: "Chain link fence",
    description: "Cost-effective boundary fencing for factories, warehouses, farms, schools and open-site perimeter protection.",
  },
  {
    image: "/SRK FENCE Banners1.webp",
    title: "Welded fence (Welded wire fence)",
    highlight: "Strong & Rigid",
    badge: "Welded Fence",
    description: "Strong welded mesh fencing for commercial, industrial and residential boundaries with good visibility and low maintenance.",
  },
  {
    image: "/SRK FENCE Banners2.webp",
    title: "Eco PVC hoarding fence",
    highlight: "Clean & Weather-Resistant",
    badge: "Eco PVC Hoarding",
    description:
      "Clean, weather-resistant hoarding panels for construction sites, temporary enclosures, safety screening and project branding.",
  },
  {
    image: "/WhatsApp Image 2025-12-20 at 11.22.40 AM.webp",
    title: "PPGI corrugated fence",
    highlight: "Durable & Corrosion-Resistant",
    badge: "PPGI Corrugated",
    description:
      "Durable corrugated fencing for industrial boundaries, construction sites and long-term weather-resistant perimeter coverage.",
  },
];

const heroBlurDataURL =
  "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADQAQCdASoIAAUAAUAmJaACdLoB+AADsAD+8ut//NgVzXPv9//S4P0uD9LgAAAA";

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
    <section className="relative min-h-[430px] sm:min-h-[500px] lg:min-h-[580px] w-full overflow-hidden pt-0">
      <Carousel setApi={setApi} className="w-full h-full" opts={{ loop: true }}>
        <CarouselContent className="h-full">
          {heroSlides.map((slide, index) => (
            <CarouselItem key={index} className="h-full pl-0">
              <div className="relative h-[430px] sm:h-[500px] lg:h-[580px] w-full">
                <div className="absolute inset-0">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover scale-105 transition-transform ease-out"
                    style={{ transitionDuration: '20s' }}
                    sizes="100vw"
                    priority={index === 0}
                    quality={75}
                    placeholder="blur"
                    blurDataURL={heroBlurDataURL}
                    loading={index === 0 ? undefined : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#360c13]/96 via-[#360c13]/88 to-[#1f0a0f]/70" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(356_70%_30%/_0.3)_0%,transparent_50%)]" />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 md:left-8 h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 z-20" />
        <CarouselNext className="right-4 md:right-8 h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 z-20" />
      </Carousel>

      {/* Content overlay - shows current slide content */}
      <div className="absolute inset-0 z-10 flex h-full w-full items-stretch pointer-events-none">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pointer-events-auto">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] h-full">
            <div className="flex flex-col justify-center lg:justify-start py-7 sm:py-9 lg:py-11 animate-fade-in">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-1.5 w-16 bg-gradient-to-r from-[#c5162a] to-[#e63946] rounded-full" />
                <span className="h-1.5 w-6 bg-gradient-to-r from-[#c5162a] to-[#e63946] rounded-full" />
                <span className="h-1.5 w-3 bg-gradient-to-r from-[#c5162a] to-[#e63946] rounded-full" />
              </div>
              <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[0.3em] text-white/90 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                {heroSlides[current]?.badge || "Secure High Value Assets"}
              </span>
              <h1 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl leading-tight tracking-tight">
                Fencing Supplier in Dubai for Security & Industrial Projects
              </h1>
              <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-white/90 font-medium">
                <span className="font-bold text-white">{heroSlides[current]?.title || "Security fencing"}:</span>{" "}
                {heroSlides[current]?.description || "SRK Fence provides tailored fencing solutions for residential, commercial, industrial, construction, infrastructure, warehouse, oil and gas, data center, farm and high-security perimeter projects across UAE and GCC."}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#c5162a] to-[#e63946] px-7 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-glow transition-all duration-300 hover:shadow-hover hover:scale-105 border-0"
                >
                  Get a Quote
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
                <Link
                  href="/products"
                  className="group inline-flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/20 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-modern transition-all duration-300 hover:bg-white/20 hover:scale-105"
                >
                  View Our Products
                </Link>
              </div>
            </div>

            <div className="relative hidden items-start justify-end lg:flex pt-28">
              <div className="absolute left-[-60px] top-0 h-full w-[calc(100%+60px)] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <div className="relative h-[62%] w-[78%] max-h-[380px] max-w-[600px] overflow-hidden rounded-2xl border-4 border-white/20 shadow-float -mt-4">
                <Image
                  src={heroSlides[current]?.image || heroImage}
                  alt="Security fencing"
                  fill
                  className="object-cover transition-transform ease-out hover:scale-110"
                  style={{ transitionDuration: '20s' }}
                  sizes="(max-width: 1024px) 100vw, 600px"
                  loading="lazy"
                  quality={65}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
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
