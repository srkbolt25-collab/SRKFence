import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import metalFence from "@/assets/metal-fence.jpg";
import vinylFence from "@/assets/vinyl-fence.jpg";
import woodFence from "@/assets/wood-fence.jpg";

const services = [
  {
    title: "Metal Fencing",
    description: "Durable aluminum and steel solutions for commercial and residential security.",
    image: metalFence,
  },
  {
    title: "Vinyl Fencing",
    description: "Low-maintenance, long-lasting vinyl fences in various styles and colors.",
    image: vinylFence,
  },
  {
    title: "Wood Fencing",
    description: "Classic natural wood fencing with expert craftsmanship and finishing.",
    image: woodFence,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(142_55%_48%/0.08)_0%,transparent_50%)]" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-4 px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20">
            <span className="text-sm font-semibold text-secondary">WHAT WE OFFER</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional fencing solutions tailored to your specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-hover transition-all duration-500 border-border bg-gradient-card hover:-translate-y-2"
            >
              <div className="h-64 overflow-hidden relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-2xl group-hover:text-secondary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
