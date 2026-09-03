const brands = [
  "Vectra AI",
  "Optimal Jaipur",
  "Grapho Media",
  "Dexign Studio",
  "Signet Luxe",
  "Heritage Crafts",
];

export default function Marquee() {
  return (
    <section
      data-testid="client-marquee-section"
      className="border-y border-neutral-200 bg-white/60 py-8"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-8 lg:flex-row lg:items-center lg:gap-12">
        <p className="shrink-0 text-sm leading-snug text-neutral-500">
          /Trusted by
          <br />
          leading companies.
        </p>
        <div className="marquee-container relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="animate-marquee flex w-max items-center gap-14 pr-14">
            {[...brands, ...brands].map((brand, i) => (
              <span
                key={i}
                className="whitespace-nowrap font-display text-2xl font-bold tracking-tight text-neutral-400 transition-colors hover:text-neutral-900 sm:text-3xl"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
