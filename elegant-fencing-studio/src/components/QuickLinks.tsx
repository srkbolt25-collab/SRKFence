'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const categoryLinks = [
  {
    label: "Steel & Metal Fencing",
    to: "/products#steel-metal-fencing",
    description: "Durable and secure metal fencing solutions",
  },
  {
    label: "Welded Mesh Fencing",
    to: "/products#welded-mesh-fencing",
    description: "Strong welded mesh for maximum security",
  },
  {
    label: "Wire Fencing",
    to: "/products#wire-fencing",
    description: "Versatile wire fencing options",
  },
  {
    label: "ECO / PVC Fencing",
    to: "/products#eco-pvc-fencing",
    description: "Eco-friendly PVC fencing solutions",
  },
  {
    label: "Fence Accessories",
    to: "/products#fence-accessories",
    description: "Complete range of fencing accessories",
  },
];

const QuickLinks = () => {
  return (
    <section className="bg-background py-16 lg:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <span className="text-sm font-bold text-primary uppercase tracking-[0.2em]">Quick Links</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            Explore Our Product Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quick access to our main product categories
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {categoryLinks.map((link, index) => (
            <Link
              key={index}
              href={link.to}
              className="group relative p-6 rounded-xl bg-gradient-to-br from-background via-background/90 to-secondary/5 border border-border hover:border-primary/50 hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {link.label}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {link.description}
                </p>
                <div className="flex items-center text-primary font-semibold text-sm mt-4">
                  <span>View Products</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;

