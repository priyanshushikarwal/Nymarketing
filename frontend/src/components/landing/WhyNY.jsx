import { FadeUp } from "./motion-primitives";

const features = [
  {
    number: "01",
    title: "Strategy First",
    desc: "No random posting. Every campaign starts with a clear objective.",
  },
  {
    number: "02",
    title: "Creative That Converts",
    desc: "Beautiful content means nothing if it doesn't move people to act.",
  },
  {
    number: "03",
    title: "Data Driven",
    desc: "We use performance data to understand what's working, what's not and where to scale.",
  },
  {
    number: "04",
    title: "Built for Growth",
    desc: "Our goal isn't one viral post. It's building a repeatable growth engine.",
  },
];

export default function WhyNY() {
  return (
    <section data-testid="why-ny-section" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-28">
        <FadeUp className="relative">
          <p className="eyebrow">/02 — Why NY</p>
          <img
            src="/assets/mascot-light.png"
            alt="NY Marketing mascot jumping with joy"
            data-testid="why-mascot"
            className="animate-bob absolute right-0 top-0 hidden h-28 w-28 rounded-3xl object-cover shadow-lg lg:block"
          />
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-[1.05] tracking-tight text-neutral-900 sm:text-5xl">
            We Don't Just Make Your Brand Look Good.{" "}
            <span className="text-[#16A34A]">We Make It Work.</span>
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-neutral-500 sm:text-base">
            Marketing should do more than generate likes. We combine strategy,
            creativity and performance to create marketing that contributes to
            real business growth.
          </p>
        </FadeUp>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <FadeUp key={f.number} delay={i * 0.06}>
              <div
                data-testid={`why-card-${f.number}`}
                className="group flex h-full flex-col gap-10 rounded-3xl border border-neutral-200 bg-[#F9F8F5] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-neutral-900 hover:shadow-lg"
              >
                <span className="font-mono text-xs font-semibold text-[#16A34A]">
                  /{f.number}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold uppercase tracking-tight">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                    {f.desc}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
