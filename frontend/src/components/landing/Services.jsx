import { ArrowUpRight } from "lucide-react";
import { FadeUp } from "./motion-primitives";

const services = [
  {
    number: "01",
    title: "Social Media Marketing",
    desc: "Build an active, recognizable presence with content that attracts, engages and converts.",
  },
  {
    number: "02",
    title: "Performance Marketing",
    desc: "Meta and Google campaigns built around measurable business outcomes.",
  },
  {
    number: "03",
    title: "Branding & Creative",
    desc: "Build a brand people remember — from identity and positioning to campaigns and creative direction.",
  },
  {
    number: "04",
    title: "Content & Reels",
    desc: "Scroll-stopping short-form content designed for today's attention economy.",
  },
  {
    number: "05",
    title: "Website & Landing Pages",
    desc: "High-converting digital experiences designed to turn visitors into customers.",
  },
  {
    number: "06",
    title: "AI-Powered Marketing",
    desc: "Use AI to research faster, create smarter and optimize your marketing workflow.",
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
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold leading-[1.05] tracking-tight text-neutral-900 sm:text-5xl">
          Everything Your Brand Needs to Grow.
        </h2>
      </FadeUp>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <FadeUp key={s.number} delay={i * 0.05}>
            <div
              data-testid={`service-card-${s.number}`}
              className="group flex h-full flex-col justify-between gap-10 rounded-3xl border border-neutral-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-neutral-900 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-neutral-400">
                  /{s.number}
                </span>
                <span className="grid h-9 w-9 place-items-center rounded-full border border-neutral-200 text-neutral-400 transition-colors duration-300 group-hover:border-[#16A34A] group-hover:bg-[#16A34A] group-hover:text-white">
                  <ArrowUpRight size={15} />
                </span>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold tracking-tight transition-colors duration-300 group-hover:text-[#16A34A]">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                  {s.desc}
                </p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
