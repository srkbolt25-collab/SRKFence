import heroImage from "@/assets/hero-fence.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[620px] w-full overflow-hidden pt-12">
      <div className="absolute inset-0">
        <img src={heroImage} alt="High security fencing" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#360c13]/95 via-[#360c13]/85 to-[#1f0a0f]/60" />
      </div>

      <div className="relative z-10 flex h-full w-full items-stretch">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col justify-center py-16">
              <div className="mb-6 flex items-center gap-2">
                <span className="h-1 w-12 bg-[#c5162a]" />
                <span className="h-1 w-4 bg-[#c5162a]" />
                <span className="h-1 w-2 bg-[#c5162a]" />
              </div>
              <span className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                Secure High Value Assets
              </span>
              <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                High Security Fencing and Gates to Secure High Value Assets
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
                With over 160 years of expertise, SRK FENCE provides tailored, high security fencing solutions to
                protect your property, people, and reputation. Trusted worldwide, our fencing systems meet the highest
                international standards for critical infrastructure, data centres, and other high-stake sites.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-[#c5162a] px-8 py-4 text-base font-semibold uppercase tracking-wide text-white shadow-md transition hover:bg-[#a91023]"
                >
                  Speak to an Expert
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center justify-center rounded-md bg-[#3f3f3f] px-8 py-4 text-base font-semibold uppercase tracking-wide text-white shadow-md transition hover:bg-[#1f1f1f]"
                >
                  View Our Products
                </a>
              </div>
            </div>

            <div className="relative hidden min-h-[400px] items-center justify-end lg:flex">
              <div className="absolute inset-y-16 right-16 w-4 rounded bg-white/70" />
              <div className="absolute bottom-20 right-16 h-12 w-4 rounded bg-white/70" />
              <div className="absolute top-16 right-16 h-24 w-24 bg-white/40" />
              <div className="absolute left-[-80px] top-0 h-full w-[calc(100%+80px)] bg-gradient-to-r from-transparent via-white/25 to-transparent" />
              <div className="relative h-full w-full overflow-hidden">
                <img
                  src={heroImage}
                  alt="Security fencing"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
