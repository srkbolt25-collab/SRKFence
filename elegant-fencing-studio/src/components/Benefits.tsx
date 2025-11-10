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
    <section id="benefits" className="py-24 bg-gradient-subtle relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(142_55%_48%/0.08)_0%,transparent_50%)]" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20">
            <span className="text-sm font-semibold text-secondary">WHY CHOOSE US</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Why Choose SRK FENCE
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We combine expertise, quality, and reliability to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group text-center p-8 rounded-2xl bg-gradient-card hover:shadow-hover transition-all duration-500 border border-border hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-accent mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                  <Icon className="w-10 h-10 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
