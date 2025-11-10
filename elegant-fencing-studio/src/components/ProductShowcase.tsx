import heroFence from "@/assets/hero-fence.jpg";
import metalFence from "@/assets/metal-fence.jpg";
import vinylFence from "@/assets/vinyl-fence.jpg";
import woodFence from "@/assets/wood-fence.jpg";

const products = [
  {
    title: "High Security Fencing",
    description:
      "A range of high-level security fencing including tested and approved CPNI & LPS1175 A1, B3, C5 & D10 in woven mesh, 358 prison mesh and others...",
    image: heroFence,
    highlight: true,
  },
  {
    title: "MUGAs & Sports Fencing",
    image: vinylFence,
    description: "Tailored enclosures engineered for durability, player safety, and spectator visibility.",
  },
  {
    title: "Playground Fencing",
    image: woodFence,
    description: "Vibrant, secure boundaries designed to protect children while complementing play areas.",
  },
  {
    title: "Perimeter Fencing",
    image: metalFence,
    description: "Robust perimeter systems balancing aesthetics with uncompromising site protection.",
  },
  {
    title: "Hostile Vehicle Mitigation (HVM)",
    image: woodFence,
    description: "Integrated barriers engineered to stop vehicle threats while maintaining safe access.",
  },
];

const ProductShowcase = () => {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-12">
          {products.map((product, index) => {
            const isHighlight = Boolean(product.highlight);
            const colSpan =
              index === 0
                ? "lg:col-span-6"
                : index === 1
                  ? "lg:col-span-6"
                  : "lg:col-span-4";

            return (
              <article
                key={product.title}
                className={`group relative aspect-[4/3] overflow-hidden rounded-lg bg-black shadow-lg transition-transform duration-500 hover:-translate-y-1 ${colSpan}`}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/75 opacity-0 transition-opacity duration-500 group-hover:opacity-80" />
                <div className="absolute inset-0 flex flex-col justify-between p-6 text-white sm:p-8">
                  <div>
                    <h3 className="text-2xl font-bold uppercase tracking-tight text-white drop-shadow-[0_3px_8px_rgba(0,0,0,0.7)] sm:text-3xl">
                      {product.title}
                    </h3>
                    <span className="mt-3 block h-[3px] w-12 origin-left bg-[#c5162a] transition-[width] duration-500 ease-out group-hover:w-32" />
                  </div>
                  <p
                    className={`mt-6 text-sm font-medium leading-relaxed text-white/85 transition-all duration-500 ease-out sm:text-base ${
                      isHighlight ? "" : ""
                    } translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100`}
                  >
                    {product.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;

