import { ArrowUpRight } from "lucide-react";
import { FadeUp } from "./motion-primitives";

const services = [
  {
    number: "01",
    title: "AI Performance Marketing",
    tag: "ROAS Maximizer",
    desc: "Predictive audience targeting and real-time creative optimization across Meta, Google & TikTok ads generating 4.8x average ROAS.",
  },
  {
    number: "02",
    title: "Search Engine Dominance",
    tag: "Jaipur & Global",
    desc: "Hyper-local Jaipur and pan-India SEO domination with generative AI search overview ranking strategies.",
  },
  {
    number: "03",
    title: "High-Conversion Web & UI/UX",
    tag: "Award Standard",
    desc: "Custom ultra-fast web experiences engineered specifically to turn site traffic into paying leads.",
  },
  {
    number: "04",
    title: "Social-First Brand Storytelling",
    tag: "Viral Creative",
    desc: "Cinematic video production, short-form reels, and influencer campaigns rooted in Rajasthan's rich storytelling heritage.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-8 sm:py-28"
    >
      <FadeUp>
        <p className="eyebrow">/01 — What we do</p>
        <h2 className="mt-3 font-display text-3xl font-bold leading-none tracking-tight text-neutral-900 sm:text-5xl">
          The Manifesto
        </h2>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-500 sm:text-base">
          Four disciplines, one obsession: measurable growth for the boldest brands
          in Jaipur and beyond.
        </p>
      </FadeUp>

      <div className="mt-12 sm:mt-16">
        {services.map((s, i) => (
          <FadeUp key={s.number} delay={i * 0.06}>
            <div
              data-testid={`service-card-${s.number}`}
              className="group grid grid-cols-1 gap-3 border-t border-neutral-200 px-2 py-8 transition-colors duration-300 last:border-b hover:bg-white sm:grid-cols-12 sm:items-center sm:gap-6 sm:px-4 sm:py-10"
            >
              <span className="font-mono text-sm font-semibold text-neutral-400 sm:col-span-1">
                /{s.number}
              </span>
              <h3 className="flex items-center gap-3 font-display text-2xl font-bold tracking-tight transition-colors duration-300 group-hover:text-[#FF4D2D] sm:col-span-4 sm:text-3xl">
                {s.title}
                <ArrowUpRight
                  size={22}
                  className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                />
              </h3>
              <p className="text-sm leading-relaxed text-neutral-500 sm:col-span-5">
                {s.desc}
              </p>
              <div className="flex sm:col-span-2 sm:justify-end">
                <span className="rounded-full border border-neutral-300 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                  {s.tag}
                </span>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
