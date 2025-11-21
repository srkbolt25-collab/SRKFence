'use client';

import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote:
      "SRK FENCE delivered an impeccable perimeter solution for our headquarters. Their attention to detail and ability to coordinate complex logistics kept the project on schedule and on budget.",
    name: "Amelia Roberts",
    role: "Global Facilities Director, Vertex Technologies",
  },
  {
    quote:
      "From design workshops to installation, the team was proactive and collaborative. The final result elevates our campus while meeting rigorous security requirements.",
    name: "Colin Stewart",
    role: "Head of Infrastructure, Northgate University",
  },
  {
    quote:
      "Their materials knowledge and craftsmanship are second to none. We now have a premium perimeter that enhances the guest experience without compromising protection.",
    name: "Sofia Martinez",
    role: "Operations Manager, Azure Resorts",
  },
];

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0f1c43] via-[#122456] to-[#183067] py-24 lg:py-32 text-primary-foreground">
      <div className="absolute inset-y-0 right-[-12%] hidden h-[120%] w-[45%] rounded-full bg-[#1f408f]/30 blur-3xl lg:block" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(356_70%_40%/_0.1)_0%,transparent_50%)]" />
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl animate-fade-in">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.3em] text-white/90">
            Client Stories
          </span>
          <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Trusted by leaders protecting their most valuable assets
          </h2>
          <p className="mt-4 text-lg text-white/80 font-medium">
            Our partners span critical infrastructure, hospitality, education, and global enterprises. Hear how SRK FENCE
            elevates security and aesthetics in every project.
          </p>
        </div>

        <div className="mt-16 relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full">
                  <article className="group flex h-full flex-col rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 hover:bg-white/15 hover:shadow-2xl hover:shadow-[#122456]/40 hover:border-white/30">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-[#fbbf24] text-[#fbbf24]" />
                      ))}
                    </div>
                    <p className="mt-6 flex-1 text-base md:text-lg leading-relaxed text-white/90 font-medium">
                      "{testimonial.quote}"
                    </p>
                    <div className="mt-8 pt-6 border-t border-white/10">
                      <p className="text-lg md:text-xl font-extrabold text-white">{testimonial.name}</p>
                      <p className="text-sm md:text-base uppercase tracking-[0.2em] text-white/70 font-semibold mt-1">
                        {testimonial.role}
                      </p>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 md:-left-12 h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300" />
            <CarouselNext className="right-0 md:-right-12 h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

