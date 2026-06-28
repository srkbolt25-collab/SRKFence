"use client";

import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Globe, Award } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

const heroSlides = [
  {
    image: "/Applicationsnew/unused%20banners/residential-security-fencing-solutions-uae-dubai.png",
    badge: 'Residential & Commercial',
    description: 'Reliable fencing solutions for residential, commercial and industrial projects across Dubai, UAE and GCC markets.',
  },
  {
    image: "/Applicationsnew/unused%20banners/eco-pvc-welded-pvc-coated-fence-uae-supplier.png",
    badge: 'Oil, Gas & Infrastructure',
    description: 'PVC, welded mesh and coated fencing options for industrial, energy and perimeter security projects.',
  },
  {
    image: "/Applicationsnew/unused%20banners/home-back-yard-fencing-in-uae.png",
    badge: 'Temporary & Site Fencing',
    description: 'Fast project support for temporary fencing, site hoarding and practical boundary control solutions.',
  },
];

const BANNER_WIDTH = 1856;
const BANNER_HEIGHT = 576;

const stats = [
  { icon: Shield, value: '1,200+', label: 'Projects Supported' },
  { icon: Users, value: '30+', label: 'Markets Served' },
  { icon: Globe, value: '24/7', label: 'Quote Support' },
  { icon: Award, value: '4.9/5', label: 'Client Rating' },
];

const Hero = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on('select', onSelect);

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => {
      api.off('select', onSelect);
      clearInterval(interval);
    };
  }, [api]);

  const activeSlide = heroSlides[current] || heroSlides[0];

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="relative mx-auto w-full">
        <Carousel setApi={setApi} className="w-full overflow-hidden bg-white" opts={{ loop: true }}>
          <CarouselContent className="ml-0">
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index} className="pl-0">
                <div className="relative flex w-full items-center justify-center bg-white">
                  <Image
                    src={slide.image}
                    alt={slide.badge}
                    width={BANNER_WIDTH}
                    height={BANNER_HEIGHT}
                    className="block h-auto max-h-[430px] max-w-full w-auto object-contain object-center"
                    sizes="100vw"
                    priority={index === 0}
                    quality={92}
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-transparent" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-3 md:left-6 h-10 w-10 rounded-full bg-white/10 text-white hover:bg-white/20 z-20" />
          <CarouselNext className="right-3 md:right-6 h-10 w-10 rounded-full bg-white/10 text-white hover:bg-white/20 z-20" />
        </Carousel>

        <div className="pointer-events-none absolute inset-0 z-10 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_0.82fr]">
              <div className="max-w-[560px] rounded-2xl bg-black/35 p-4 shadow-lg backdrop-blur-[2px] sm:p-5">
                <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/90 ring-1 ring-white/25">
                  {activeSlide.badge}
                </div>
                <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-[42px]">
                  Fencing Supplier in Dubai for Security, Industrial & Commercial Projects
                </h1>
                <p className="mt-3 max-w-[520px] text-sm leading-6 text-white/90 sm:text-[15px]">
                  {activeSlide.description}
                </p>
                <div className="pointer-events-auto mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg" className="rounded-full bg-primary px-7 text-white hover:bg-primary/90">
                    <a href="/contact">Request a Quote <ArrowRight className="ml-2 h-4 w-4" /></a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-full border-white/40 bg-white/10 px-7 text-white hover:bg-white/15">
                    <a href="/products">View Products</a>
                  </Button>
                </div>
              </div>

              <div className="relative hidden justify-end lg:flex">
                <div className="relative h-[200px] w-[360px] overflow-hidden rounded-2xl border-4 border-white/20 bg-white/5 shadow-float xl:h-[220px] xl:w-[400px]">
                  <Image
                    src={activeSlide.image}
                    alt="Featured fencing solution"
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 1280px) 360px, 400px"
                    quality={92}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {heroSlides.map((_, index) => (
            <span
              key={index}
              className={`h-2.5 w-2.5 rounded-full ${current === index ? 'bg-white' : 'bg-white/35'}`}
            />
          ))}
        </div>
      </div>

      <section className="bg-card py-14 border-y border-border/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="group relative overflow-hidden rounded-3xl border border-border bg-background/90 p-6 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-modern">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-modern transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/15">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
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
