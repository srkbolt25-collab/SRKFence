'use client';

import heroImage from "@/assets/hero-fence.jpg";
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
    title: "Chain Link Fence",
    badge: "Boundary Fencing",
    description: "Cost-effective fencing for warehouses, factories, farms and open-site perimeters.",
  },
  {
    image: "/SRK FENCE Banners1.webp",
    title: "Welded Mesh Fence",
    badge: "Industrial Security",
    description: "Rigid mesh fencing for commercial, industrial and high-visibility boundary projects.",
  },
  {
    image: "/SRK FENCE Banners2.webp",
    title: "Eco PVC Hoarding",
    badge: "Construction Projects",
    description: "Clean hoarding panels for temporary enclosures, site screening and project branding.",
  },
  {
    image: "/WhatsApp Image 2025-12-20 at 11.22.40 AM.webp",
    title: "PPGI Corrugated Fence",
    badge: "Weather Resistant",
    description: "Durable corrugated fencing for industrial boundaries and construction site coverage.",
  },
];

const heroBlurDataURL =
  "data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADQAQCdASoIAAUAAUAmJaACdLoB+AADsAD+8ut//NgVzXPv9//S4P0uD9LgAAAA";

const Hero = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => api.scrollNext(), 5000);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="relative mx-auto w-full max-h-[420px] min-h-[280px] sm:min-h-[320px] lg:min-h-[360px]">
        <Carousel setApi={setApi} className="h-full w-full" opts={{ loop: true }}>
          <CarouselContent className="h-full">
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index} className="h-full pl-0">
                <div className="relative aspect-[1856/576] h-full w-full max-h-[420px] min-h-[280px] sm:min-h-[320px] lg:min-h-[360px] bg-white">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-contain object-center"
                  sizes="100vw"
                  priority={index === 0}
                  quality={78}
                  placeholder="blur"
                  blurDataURL={heroBlurDataURL}
                  loading={index === 0 ? undefined : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#25080d]/78 via-[#25080d]/48 to-transparent" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
          <CarouselPrevious className="left-3 md:left-6 h-10 w-10 rounded-full bg-white/10 text-white hover:bg-white/20 z-20" />
          <CarouselNext className="right-3 md:right-6 h-10 w-10 rounded-full bg-white/10 text-white hover:bg-white/20 z-20" />
        </Carousel>
      </div>

      <div className="absolute inset-0 z-10 flex items-center pointer-events-none">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pointer-events-auto">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_0.82fr]">
            <div className="max-w-[560px] rounded-2xl bg-black/35 p-4 shadow-lg backdrop-blur-[2px] sm:p-5">
              <span className="mb-3 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-white/90 backdrop-blur-sm">
                {heroSlides[current]?.badge || 'GCC Fencing Solutions'}
              </span>
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-[42px]">
                Fencing Supplier in Dubai for Security, Industrial & Commercial Projects
              </h1>
              <p className="mt-3 max-w-[520px] text-sm leading-6 text-white/90 sm:text-[15px]">
                {heroSlides[current]?.description || 'Reliable fencing solutions for industrial, commercial and project sites across UAE and GCC.'}
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="inline-flex items-center justify-center rounded-xl bg-[#c5162a] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#a91525]">
                  Get a Quote <span className="ml-2">→</span>
                </Link>
                <Link href="/products" className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-md transition hover:bg-white/20">
                  View Products
                </Link>
              </div>
            </div>

            <div className="relative hidden justify-end lg:flex">
              <div className="relative h-[200px] w-[360px] overflow-hidden rounded-2xl border-4 border-white/20 bg-white/5 shadow-float xl:h-[220px] xl:w-[400px]">
                <Image
                  src={heroSlides[current]?.image || heroImage}
                  alt={heroSlides[current]?.title || 'Security fencing'}
                  fill
                  className="object-contain object-center"
                  sizes="440px"
                  loading="lazy"
                  quality={65}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 rounded-full transition-all ${current === index ? 'w-8 bg-white' : 'w-2 bg-white/45 hover:bg-white/70'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
