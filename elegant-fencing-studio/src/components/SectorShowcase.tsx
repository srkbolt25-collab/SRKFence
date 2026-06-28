'use client';

import { useEffect, useMemo, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import heroFence from "@/assets/hero-fence.jpg";
import metalFence from "@/assets/metal-fence.jpg";
import vinylFence from "@/assets/vinyl-fence.jpg";
import woodFence from "@/assets/wood-fence.jpg";

const sectors = [
  {
    title: "Commercial Property",
    image: metalFence,
  },
  {
    title: "Education",
    image: vinylFence,
  },
  {
    title: "High Security",
    image: heroFence,
  },
  {
    title: "Transport & Logistics",
    image: woodFence,
  },
  {
    title: "Government & Defence",
    image: heroFence,
  },
  {
    title: "Utilities & Energy",
    image: metalFence,
  },
  {
    title: "Leisure & Recreation",
    image: vinylFence,
  },
  {
    title: "Residential Developments",
    image: woodFence,
  },
];

const SectorShowcase = () => {
  const [itemsPerView, setItemsPerView] = useState(4);
  const [startIndex, setStartIndex] = useState(sectors.length);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Create multiple copies for seamless infinite loop
  const duplicatedSectors = useMemo(() => [...sectors, ...sectors, ...sectors], []);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1280) {
        setItemsPerView(4);
      } else if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 640) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  // Initialize to middle section for seamless looping
  useEffect(() => {
    setStartIndex(sectors.length);
  }, []);

  const handleNavigate = useCallback((direction: "prev" | "next") => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    
    setStartIndex((prev) => {
      const step = itemsPerView;
      let newIndex;

      if (direction === "prev") {
        newIndex = prev - step;
        // If we go before the first set, jump to the last set seamlessly
        if (newIndex < sectors.length) {
          // Calculate equivalent position in the last set
          const equivalentIndex = sectors.length * 2 + (newIndex % sectors.length);
          // After transition completes, jump without animation
          setTimeout(() => {
            setStartIndex(equivalentIndex);
            setTimeout(() => setIsTransitioning(false), 10);
          }, 500);
          return newIndex;
        }
      } else {
        newIndex = prev + step;
        // If we go past the last set, jump to the first set seamlessly
        if (newIndex >= sectors.length * 2) {
          // Calculate equivalent position in the first set
          const equivalentIndex = sectors.length + (newIndex % sectors.length);
          // After transition completes, jump without animation
          setTimeout(() => {
            setStartIndex(equivalentIndex);
            setTimeout(() => setIsTransitioning(false), 10);
          }, 500);
          return newIndex;
        }
      }

      // Normal transition
      setTimeout(() => setIsTransitioning(false), 500);
      return newIndex;
    });
  }, [isTransitioning, itemsPerView]);

  // Auto-play carousel - automatically move to the right
  useEffect(() => {
    const autoPlayInterval = setInterval(() => {
      if (!isTransitioning) {
        handleNavigate("next");
      }
    }, 4000); // Move every 4 seconds

    return () => clearInterval(autoPlayInterval);
  }, [isTransitioning, handleNavigate]);

  return (
    <section className="bg-gradient-to-b from-muted/30 to-background py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,hsl(356_70%_40%/_0.05)_0%,transparent_50%)]" />
      <div className="container mx-auto flex flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-20 lg:px-8 relative max-w-7xl">
        <div className="max-w-md space-y-6 text-center lg:text-left animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <span className="text-sm font-bold text-primary uppercase tracking-[0.2em]">Sectors</span>
          </div>
          <h2 className="text-3xl font-extrabold uppercase tracking-wide text-gradient sm:text-4xl">
            Browse by Sector
          </h2>
          <p className="text-lg text-muted-foreground font-medium">
            We have a wealth of experience providing solutions for all sectors.
          </p>
          <Link
            href="/applications"
            className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#c5162a] to-[#e63946] px-8 py-4 text-base font-bold uppercase tracking-wide text-white shadow-glow transition-all duration-300 hover:shadow-hover hover:scale-105 border-0"
          >
            Applications
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="relative flex-1">
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${(100 / itemsPerView) * startIndex}%)`,
                transitionDuration: isTransitioning ? '0ms' : '500ms',
              }}
            >
            {duplicatedSectors.map((sector, index) => (
              <article
                key={`${sector.title}-${index}`}
                className="group relative aspect-[3/4] flex-none overflow-hidden rounded-2xl shadow-modern transition-all duration-500 hover:-translate-y-2 hover:shadow-float"
                style={{
                  width: `${100 / itemsPerView}%`,
                  minWidth: `${100 / itemsPerView}%`,
                }}
              >
                <div className="relative h-full w-full">
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 transition duration-500 group-hover:from-black/90 group-hover:via-black/70 group-hover:to-black/50" />
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <h3 className="text-center text-2xl font-extrabold uppercase tracking-wide text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] transition-transform duration-300 group-hover:scale-105">
                    {sector.title}
                  </h3>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white font-bold">→</span>
                </div>
              </article>
            ))}
          </div>
          </div>

          <button
            type="button"
            onClick={() => handleNavigate("prev")}
            disabled={isTransitioning}
            className="absolute left-0 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/90 backdrop-blur-md p-4 text-[#c5162a] shadow-float transition-all duration-300 hover:bg-gradient-to-br hover:from-[#c5162a] hover:to-[#e63946] hover:text-white hover:scale-110 hover:shadow-glow lg:flex disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
            aria-label="Scroll sectors left"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={() => handleNavigate("next")}
            disabled={isTransitioning}
            className="absolute right-0 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/90 backdrop-blur-md p-4 text-[#c5162a] shadow-float transition-all duration-300 hover:bg-gradient-to-br hover:from-[#c5162a] hover:to-[#e63946] hover:text-white hover:scale-110 hover:shadow-glow lg:flex disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
            aria-label="Scroll sectors right"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectorShowcase;

