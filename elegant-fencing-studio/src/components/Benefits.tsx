'use client';

import { Award, Clock, Users, Globe } from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "Top-grade materials and expert craftsmanship in every project",
  },
  {
    icon: Clock,
    title: "Fast Installation",
    description: "Efficient service without compromising on quality standards",
  },
  {
    icon: Users,
    title: "Expert Craftsmen",
    description: "Skilled professionals with years of fencing experience",
  },
  {
    icon: Globe,
    title: "International Service",
    description: "Serving residential and commercial clients worldwide",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="pt-6 pb-24 lg:pt-8 lg:pb-32 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(356_70%_40%/_0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(356_70%_40%/_0.05)_0%,transparent_50%)]" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative max-w-7xl">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-4 px-5 py-2.5 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
            <span className="text-sm font-bold text-primary uppercase tracking-[0.2em]">WHY CHOOSE US</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-6">
            Why Choose <span className="text-gradient">SRK FENCE</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            We combine expertise, quality, and reliability to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group text-center p-8 rounded-3xl bg-white/80 backdrop-blur-sm hover:bg-white border border-border/50 hover:border-primary/30 hover:shadow-float transition-all duration-500 hover:-translate-y-3 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#c5162a] to-[#e63946] mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-glow">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-extrabold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-medium">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
