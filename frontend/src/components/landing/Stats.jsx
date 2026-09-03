import { FadeUp } from "./motion-primitives";

const focus = [
  { word: "Reach", desc: "Get seen by the right people." },
  { word: "Leads", desc: "Turn attention into enquiries." },
  { word: "Conversions", desc: "Turn enquiries into customers." },
  { word: "Revenue", desc: "Turn customers into growth." },
];

export default function Stats() {
  return (
    <section id="results" data-testid="results-section" className="scroll-mt-24 bg-[#0D0D0E] text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-28">
        <FadeUp>
          <p className="eyebrow !text-neutral-500">/05 — Results</p>
          <p className="mt-8 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
            We don't just talk about growth.
          </p>
          <h2 className="mt-3 font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl">
            We measure it<span className="text-[#22C55E]">.</span>
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-neutral-400 sm:text-base">
            Focused on the metrics that matter.
          </p>
        </FadeUp>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-neutral-800 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {focus.map((f, i) => (
            <FadeUp key={f.word} delay={i * 0.08} className="bg-[#0D0D0E]">
              <div className="flex h-full flex-col justify-between gap-10 p-8 sm:p-10">
                <span className="font-mono text-[11px] uppercase leading-relaxed tracking-[0.2em] text-neutral-500">
                  /0{i + 1}
                </span>
                <div>
                  <p
                    data-testid={`metric-word-${i + 1}`}
                    className="font-display text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-4xl"
                  >
                    {f.word}
                    <span className="text-[#22C55E]">.</span>
                  </p>
                  <p className="mt-2 text-sm text-neutral-400">{f.desc}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
