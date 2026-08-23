"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Globe, Shield, Users } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const heroSlides = [
  {
    image: "/Applicationsnew/unused%20banners/residential-security-fencing-solutions-uae-dubai.png",
    badge: "Residential & Commercial Fencing",
    title: "Fencing Supplier in Dubai for Security, Industrial & Commercial Projects",
    description:
      "SRK Fence supplies chain link, welded mesh, anti-climb, PVC, temporary and perimeter security fencing for UAE and GCC projects.",
  },
  {
    image: "/Applicationsnew/unused%20banners/eco-pvc-welded-pvc-coated-fence-uae-supplier.png",
    badge: "Industrial & Infrastructure Fencing",
    title: "Project-Ready Fencing for UAE and GCC Sites",
    description:
      "Get specification-led support for warehouses, oil and gas facilities, logistics centres, construction sites and boundary security requirements.",
  },
  {
    image: "/Applicationsnew/unused%20banners/home-back-yard-fencing-in-uae.png",
    badge: "Temporary & Site Fencing",
    title: "Fence Supply, Installation Guidance and Fast Quotes",
    description:
      "Share site location, fence height, running meters, coating, posts, gates and delivery scope for a practical project quotation.",
  },
];

const stats = [
  { icon: Shield, value: "1,200+", label: "Projects Supported" },
  { icon: Users, value: "30+", label: "Markets Served" },
  { icon: Globe, value: "24/7", label: "Quote Support" },
  { icon: Award, value: "4.9/5", label: "Client Rating" },
];

const Hero = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);

    const interval = setInterval(() => api.scrollNext(), 5000);

    return () => {
      api.off("select", onSelect);
      clearInterval(interval);
    };
  }, [api]);

  return (
    <section className="overflow-hidden bg-gradient-to-br from-[#fff7f7] via-white to-[#f8f8f8]">
      <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="order-2 lg:order-1">
            <div className="mb-4 inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
              {heroSlides[current]?.badge || "GCC Fencing Solutions"}
            </div>
            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[56px]">
              {heroSlides[current]?.title || heroSlides[0].title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              {heroSlides[current]?.description || heroSlides[0].description}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-glow transition hover:bg-primary/90"
              >
                Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-white px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-foreground transition hover:border-primary/40 hover:text-primary"
              >
                View Products
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <Carousel setApi={setApi} opts={{ loop: true }} className="relative w-full overflow-hidden rounded-3xl border border-border bg-white p-2 shadow-float">
              <CarouselContent className="ml-0">
                {heroSlides.map((slide, index) => (
                  <CarouselItem key={slide.image} className="pl-0">
                    <div className="flex aspect-[1856/576] w-full items-center justify-center overflow-hidden rounded-2xl bg-white">
                      <Image
                        src={slide.image}
                        alt={slide.badge}
                        width={1856}
                        height={576}
                        className="h-auto w-full object-contain"
                        sizes="(max-width: 1024px) 100vw, 760px"
                        priority={index === 0}
                        quality={92}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 h-10 w-10 border-white/40 bg-black/35 text-white hover:bg-black/55" />
              <CarouselNext className="right-4 h-10 w-10 border-white/40 bg-black/35 text-white hover:bg-black/55" />
              <div className="pointer-events-none absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
                {heroSlides.map((_, index) => (
                  <span
                    key={index}
                    className={`h-2.5 rounded-full transition-all ${current === index ? "w-8 bg-primary" : "w-2.5 bg-primary/35"}`}
                  />
                ))}
              </div>
            </Carousel>
          </div>
        </div>
      </div>

      <section className="border-y border-border/60 bg-white/80 py-5 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="rounded-2xl border border-border bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xl font-extrabold text-foreground">{stat.value}</div>
                      <div className="text-xs font-medium text-muted-foreground sm:text-sm">{stat.label}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
