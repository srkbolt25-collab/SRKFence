'use client';

import { Award, Globe, Users, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "160+",
    label: "Years of Excellence",
    description: "Trusted expertise since 1864",
  },
  {
    icon: Globe,
    value: "50+",
    label: "Countries Served",
    description: "Global reach, local expertise",
  },
  {
    icon: Users,
    value: "10,000+",
    label: "Projects Completed",
    description: "Successful installations worldwide",
  },
  {
    icon: TrendingUp,
    value: "99%",
    label: "Client Satisfaction",
    description: "Exceeding expectations daily",
  },
];

const Stats = () => {
  return (
    <section className="relative py-16 bg-gradient-to-br from-primary/5 via-background to-muted/20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(356_70%_40%/_0.05)_0%,transparent_70%)]" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group text-center p-6 lg:p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:bg-white/80 transition-all duration-500 hover:-translate-y-2 hover:shadow-float"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br from-[#c5162a] to-[#e63946] mb-4 lg:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-glow">
                  <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-extrabold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm lg:text-base font-bold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-xs lg:text-sm text-muted-foreground font-medium">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;

