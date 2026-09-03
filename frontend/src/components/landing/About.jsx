import { FadeUp } from "./motion-primitives";

const pillars = ["Strategy", "Creativity", "Performance"];

export default function About() {
  return (
    <section id="about" data-testid="about-section" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-28">
        <FadeUp>
          <p className="eyebrow">/07 — About NY Marketing</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-[1.05] tracking-tight text-neutral-900 sm:text-5xl">
            We're Not Just Another Marketing Agency.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-neutral-500 sm:text-base">
            NY Marketing is a modern growth agency helping ambitious businesses
            build memorable brands, reach the right audience and turn attention
            into measurable business growth.
          </p>
        </FadeUp>

        <div className="mt-14 border-t border-neutral-200">
          {pillars.map((p, i) => (
            <FadeUp key={p} delay={i * 0.08}>
              <div
                data-testid={`about-pillar-${i + 1}`}
                className="group flex items-baseline gap-5 border-b border-neutral-200 py-6 sm:py-8"
              >
                <span className="font-mono text-xs font-semibold text-neutral-400">
                  /0{i + 1}
                </span>
                <span className="font-display text-3xl font-extrabold uppercase tracking-tight transition-colors duration-300 group-hover:text-[#16A34A] sm:text-5xl">
                  {p}
                </span>
              </div>
            </FadeUp>
          ))}
        </div>
        <FadeUp delay={0.2}>
          <p className="mt-6 text-sm font-semibold text-neutral-600">
            One team. One growth-focused approach.
          </p>
        </FadeUp>

        <FadeUp delay={0.1} className="mt-14">
          <div
            data-testid="ai-edge-card"
            className="orb-mesh flex items-center justify-between gap-6 rounded-[2rem] bg-[#0D0D0E] p-8 text-white sm:p-12"
          >
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-[#34D399]">
                Our edge
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-4xl">
                AI-Powered Marketing
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-400 sm:text-base">
                We combine human creativity with AI-powered research, automation
                and optimization to help brands move faster and make smarter
                marketing decisions.
              </p>
            </div>
            <img
              src="/assets/mascot.png"
              alt="NY Marketing mascot"
              data-testid="about-mascot"
              className="animate-bob hidden h-28 w-28 shrink-0 rounded-full object-cover ring-2 ring-emerald-400/40 sm:block sm:h-36 sm:w-36"
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
