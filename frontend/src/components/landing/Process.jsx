import { FadeUp } from "./motion-primitives";

const steps = [
  { number: "01", title: "Discover", desc: "Understand your brand, audience, competitors and goals." },
  { number: "02", title: "Strategize", desc: "Build your positioning, content and acquisition strategy." },
  { number: "03", title: "Create", desc: "Turn strategy into campaigns, content and creative." },
  { number: "04", title: "Launch", desc: "Put everything into the market and start generating attention." },
  { number: "05", title: "Optimize", desc: "Analyze performance, improve what works and scale intelligently." },
];

export default function Process() {
  return (
    <section
      id="process"
      data-testid="process-section"
      className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-8 sm:py-28"
    >
      <FadeUp className="relative">
        <p className="eyebrow">/03 — The NY Growth Process</p>
        <img
          src="/assets/turtle.png"
          alt="Turtle warrior character sprinting forward"
          data-testid="process-mascot"
          className="animate-bob pointer-events-none absolute -top-14 right-0 hidden h-36 w-44 object-contain mix-blend-multiply lg:block"
        />
        <h2 className="mt-3 font-display text-3xl font-bold leading-[1.05] tracking-tight text-neutral-900 sm:text-5xl">
          From first conversation
          <br className="hidden sm:block" /> to measurable growth.
        </h2>
      </FadeUp>

      <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
        {steps.map((s, i) => (
          <FadeUp key={s.number} delay={i * 0.07}>
            <div
              data-testid={`process-step-${s.number}`}
              className="border-t-2 border-neutral-200 pt-6 transition-colors duration-300 hover:border-[#16A34A]"
            >
              <span className="font-mono text-sm font-semibold text-[#16A34A]">
                {s.number}
              </span>
              <h3 className="mt-3 font-display text-xl font-bold uppercase tracking-tight">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                {s.desc}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
