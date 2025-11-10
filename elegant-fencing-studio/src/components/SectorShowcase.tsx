import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
  const [startIndex, setStartIndex] = useState(0);

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

  useEffect(() => {
    setStartIndex((prev) => Math.min(prev, Math.max(0, sectors.length - itemsPerView)));
  }, [itemsPerView]);

  const maxIndex = useMemo(() => Math.max(0, sectors.length - itemsPerView), [itemsPerView]);

  const handleNavigate = (direction: "prev" | "next") => {
    setStartIndex((prev) => {
      if (direction === "prev") {
        return Math.max(0, prev - itemsPerView);
      }
      return Math.min(maxIndex, prev + itemsPerView);
    });
  };

  return (
    <section className="bg-[#f7f7f7] py-16 sm:py-20">
      <div className="container mx-auto flex flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        <div className="max-w-md space-y-6 text-center lg:text-left">
          <h2 className="text-3xl font-extrabold uppercase tracking-wide text-[#a5192b] sm:text-4xl">
            Browse by Sector
          </h2>
          <p className="text-lg text-[#5b5b5b]">
            We have a wealth of experience providing solutions for all sectors.
          </p>
          <a
            href="/applications"
            className="inline-flex items-center justify-center rounded-sm bg-[#c5162a] px-8 py-3 text-base font-semibold uppercase tracking-wide text-white transition hover:bg-[#a71323]"
          >
            Applications
          </a>
        </div>

        <div className="relative flex-1">
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${(100 / itemsPerView) * startIndex}%)`,
              }}
            >
            {sectors.map((sector) => (
              <article
                key={sector.title}
                className="group relative aspect-[3/4] flex-none overflow-hidden rounded-sm shadow-lg"
                style={{
                  width: `${100 / itemsPerView}%`,
                  minWidth: `${100 / itemsPerView}%`,
                }}
              >
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/35 transition duration-500 group-hover:bg-black/45" />
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <h3 className="text-center text-2xl font-bold uppercase tracking-wide text-white drop-shadow-lg">
                    {sector.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
          </div>

          <button
            type="button"
            onClick={() => handleNavigate("prev")}
            className="absolute left-0 top-1/2 hidden -translate-y-1/2 rounded-full bg-white p-3 text-[#c5162a] shadow-lg transition hover:bg-[#c5162a] hover:text-white lg:flex disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Scroll sectors left"
            disabled={startIndex === 0}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => handleNavigate("next")}
            className="absolute right-0 top-1/2 hidden -translate-y-1/2 rounded-full bg-white p-3 text-[#c5162a] shadow-lg transition hover:bg-[#c5162a] hover:text-white lg:flex disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Scroll sectors right"
            disabled={startIndex >= maxIndex}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectorShowcase;

