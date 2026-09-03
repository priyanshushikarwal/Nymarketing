import { ArrowUpRight } from "lucide-react";
import { FadeUp } from "./motion-primitives";

const placeholders = [
  {
    title: "Brand Growth Campaign",
    category: "Social Media + Performance Marketing",
    desc: "From inconsistent digital presence to a structured growth system.",
  },
  {
    title: "Content Engine Build",
    category: "Content & Reels",
    desc: "A scroll-stopping short-form system built for today's attention economy.",
  },
  {
    title: "Conversion Website",
    category: "Website & Landing Pages",
    desc: "A high-converting digital experience designed to turn visitors into customers.",
  },
];

export default function Work() {
  return (
    <section id="work" data-testid="work-section" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-28">
        <FadeUp className="relative">
          <p className="eyebrow">/04 — Selected work</p>
          <img
            src="/assets/dolphin.png"
            alt="Dolphin character leaping upward"
            data-testid="work-mascot"
            className="animate-bob pointer-events-none absolute -top-16 right-0 hidden h-36 w-44 object-contain mix-blend-multiply lg:block"
          />
          <h2 className="mt-3 font-display text-3xl font-bold leading-[1.05] tracking-tight text-neutral-900 sm:text-5xl">
            Real Brands. Real Campaigns.{" "}
            <span className="text-[#16A34A]">Real Growth.</span>
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-neutral-500 sm:text-base">
            A selection of work created to build attention, generate demand and
            drive results.
          </p>
        </FadeUp>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {placeholders.map((w, i) => (
            <FadeUp key={w.title} delay={i * 0.07}>
              <div
                data-testid={`work-card-${i + 1}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-[#F9F8F5] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="work-thumb relative grid aspect-[4/3] place-items-center overflow-hidden">
                  <span className="px-6 text-center font-display text-2xl font-bold tracking-tight text-white/90">
                    Your Brand Could Be Next.
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#16A34A]">
                    {w.category}
                  </span>
                  <h3 className="font-display text-xl font-bold tracking-tight">
                    {w.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-500">{w.desc}</p>
                  <a
                    href="#contact"
                    data-testid={`work-cta-${i + 1}`}
                    className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-neutral-900 transition-colors duration-300 group-hover:text-[#16A34A]"
                  >
                    View Case Study
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
