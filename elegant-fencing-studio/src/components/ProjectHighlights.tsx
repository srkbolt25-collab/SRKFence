'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Building2, ShieldCheck, Layers } from 'lucide-react';
import heroFence from "@/assets/hero-fence.jpg";
import metalFence from "@/assets/metal-fence.jpg";
import vinylFence from "@/assets/vinyl-fence.jpg";

const projects = [
  {
    id: 1,
    title: "High Security Data Center",
    category: "Security Fencing",
    description: "Comprehensive security fencing solution for a major data center facility, featuring CPNI certified systems and integrated monitoring.",
    image: heroFence,
    icon: ShieldCheck,
    location: "Mumbai, India",
  },
  {
    id: 2,
    title: "Industrial Perimeter Protection",
    category: "Metal Fencing",
    description: "Large-scale metal fencing installation for industrial complex, ensuring maximum security and durability.",
    image: metalFence,
    icon: Building2,
    location: "Delhi, India",
  },
  {
    id: 3,
    title: "Commercial Property Enclosure",
    category: "PVC Fencing",
    description: "Modern PVC fencing system for commercial property, combining aesthetics with functionality.",
    image: vinylFence,
    icon: Layers,
    location: "Bangalore, India",
  },
];

const ProjectHighlights = () => {
  return (
    <section className="bg-gradient-to-b from-background to-muted/30 py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(356_70%_40%/_0.05)_0%,transparent_50%)]" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <span className="text-sm font-bold text-primary uppercase tracking-[0.2em]">Project Highlights</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">
            Our Recent Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing excellence in fencing solutions across various sectors
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl bg-background border border-border hover:border-primary/50 hover:shadow-float transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  {typeof project.image === 'string' && project.image.startsWith('http') ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2">
                      <Icon className="h-4 w-4 text-white" />
                      <span className="text-xs font-bold uppercase tracking-wide text-white">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-extrabold text-white mb-2 drop-shadow-lg">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/90 flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-white/60" />
                      {project.location}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-primary font-semibold text-sm hover:gap-2 transition-all duration-300 group/link"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#c5162a] to-[#e63946] px-8 py-4 text-base font-bold uppercase tracking-wide text-white shadow-glow transition-all duration-300 hover:shadow-hover hover:scale-105"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlights;

