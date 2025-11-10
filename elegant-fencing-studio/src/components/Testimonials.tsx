import { Star } from "lucide-react";

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
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0f1c43] via-[#122456] to-[#183067] py-20 text-primary-foreground">
      <div className="absolute inset-y-0 right-[-12%] hidden h-[120%] w-[45%] rounded-full bg-[#1f408f]/30 blur-3xl lg:block" />
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
            Client Stories
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by leaders protecting their most valuable assets
          </h2>
          <p className="mt-4 text-lg text-white/75">
            Our partners span critical infrastructure, hospitality, education, and global enterprises. Hear how SRK FENCE
            elevates security and aesthetics in every project.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/10 hover:shadow-2xl hover:shadow-[#122456]/30"
            >
              <div className="flex items-center gap-1 text-secondary">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-6 flex-1 text-base leading-relaxed text-white/90">“{testimonial.quote}”</p>
              <div className="mt-8">
                <p className="text-lg font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm uppercase tracking-[0.2em] text-white/60">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

