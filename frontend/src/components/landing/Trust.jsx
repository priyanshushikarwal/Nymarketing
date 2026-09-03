import { FadeUp } from "./motion-primitives";

export default function Trust() {
  return (
    <section
      data-testid="trust-section"
      className="border-y border-neutral-200 bg-white/60"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-16">
        <FadeUp className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
          <h2 className="shrink-0 font-display text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
            Built for Ambitious Brands.
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-neutral-500 sm:text-base">
            From startups to growing businesses, we help brands build visibility,
            credibility and sustainable growth.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
