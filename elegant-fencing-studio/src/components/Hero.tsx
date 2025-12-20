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
    image: "/SRK FENCE Banners.png",
    title: "Chain link fence",
    highlight: "Durable & Secure",
    badge: "Chain link fence",
    description: "A chain link fence consists of interwoven steel wires forming a diamond-shaped mesh structure. It is cost-effective, durable, and widely used for securing open areas like playgrounds, factories, and sports grounds. It allows clear visibility while offering reliable perimeter protection.",
  },
  {
    image: "/SRK FENCE Banners1.jpg",
    title: "Welded fence (Welded wire fence)",
    highlight: "Strong & Rigid",
    badge: "Welded Fence",
    description: "A welded fence is made from steel wires that are welded together at their intersections to form a strong and rigid mesh. It is commonly used for security, boundary marking, and industrial or residential applications. It provides high strength with minimal maintenance and a long service life.",
  },
  {
    image: "/SRK FENCE Banners2.jpg",
    title: "Eco PVC hoarding fence",
    highlight: "Clean & Weather-Resistant",
    badge: "Eco PVC Hoarding",
    description:
      "An Eco PVC hoarding fence is made from lightweight, weather-resistant PVC panels designed mainly for temporary or semi-permanent site enclosures. It offers a clean appearance, easy installation, and is recyclable and environmentally friendly. It is ideal for construction sites where safety, branding, and visual screening are required.",
  },
  {
    image: "/WhatsApp Image 2025-12-20 at 11.22.40 AM.jpeg",
    title: "PPGI corrugated fence",
    highlight: "Durable & Corrosion-Resistant",
    badge: "PPGI Corrugated",
    description:
      "A PPGI corrugated fence is made from pre-painted galvanized iron sheets with a wavy (corrugated) profile for added strength. It is highly durable, corrosion-resistant, and commonly used for industrial boundaries and construction sites. It provides excellent weather protection and a neat, long-lasting finish.",
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
    <section className="relative min-h-[550px] sm:min-h-[650px] lg:min-h-[760px] w-full overflow-hidden pt-0">
      <Carousel setApi={setApi} className="w-full h-full" opts={{ loop: true }}>
        <CarouselContent className="h-full">
          {heroSlides.map((slide, index) => (
            <CarouselItem key={index} className="h-full pl-0">
              <div className="relative h-[550px] sm:h-[650px] lg:h-[760px] w-full">
                <div className="absolute inset-0">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover scale-105 transition-transform ease-out"
                    style={{ transitionDuration: '20s' }}
                    priority={index === 0}
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
            <div className="flex flex-col justify-center lg:justify-start py-8 sm:py-12 lg:py-16 animate-fade-in">
              <div className="mb-6 flex items-center gap-2">
                <span className="h-1.5 w-16 bg-gradient-to-r from-[#c5162a] to-[#e63946] rounded-full" />
                <span className="h-1.5 w-6 bg-gradient-to-r from-[#c5162a] to-[#e63946] rounded-full" />
                <span className="h-1.5 w-3 bg-gradient-to-r from-[#c5162a] to-[#e63946] rounded-full" />
              </div>
              <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.3em] text-white/90 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                {heroSlides[current]?.badge || "Secure High Value Assets"}
              </span>
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-7xl leading-tight tracking-tight">
                {heroSlides[current]?.title || "High Security Fencing and Gates to"}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/70">
                  {heroSlides[current]?.highlight || "Secure High Value Assets"}
                </span>
              </h1>
              <p className="mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-white/90 font-medium">
                {heroSlides[current]?.description || "With over 160 years of expertise, SRK FENCE provides tailored, high security fencing solutions to protect your property, people, and reputation. Trusted worldwide, our fencing systems meet the highest international standards for critical infrastructure, data centres, and other high-stake sites."}
              </p>
              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#c5162a] to-[#e63946] px-10 py-5 text-base font-bold uppercase tracking-wide text-white shadow-glow transition-all duration-300 hover:shadow-hover hover:scale-105 border-0"
                >
                  Get a Quote
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
                <Link
                  href="/products"
                  className="group inline-flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/20 px-10 py-5 text-base font-bold uppercase tracking-wide text-white shadow-modern transition-all duration-300 hover:bg-white/20 hover:scale-105"
                >
                  View Our Products
                </Link>
              </div>
            </div>

            <div className="relative hidden items-start justify-end lg:flex pt-40">
              <div className="absolute left-[-60px] top-0 h-full w-[calc(100%+60px)] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <div className="relative h-[75%] w-[80%] max-h-[520px] max-w-[600px] overflow-hidden rounded-2xl border-4 border-white/20 shadow-float -mt-4">
                <Image
                  src={heroSlides[current]?.image || heroImage}
                  alt="Security fencing"
                  fill
                  className="object-cover transition-transform ease-out hover:scale-110"
                  style={{ transitionDuration: '20s' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
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
