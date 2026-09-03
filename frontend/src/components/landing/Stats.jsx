import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { FadeUp } from "./motion-primitives";

const metrics = [
  { to: 45, decimals: 0, prefix: "₹", suffix: " Cr+", label: "Client Revenue Generated" },
  { to: 4.8, decimals: 1, prefix: "", suffix: "x", label: "Average Campaign ROAS" },
  { to: 98.2, decimals: 1, prefix: "", suffix: "%", label: "Client Retention Rate" },
  { to: 140, decimals: 0, prefix: "", suffix: "+", label: "Brands Scaled in Jaipur & Beyond" },
];

function CountUp({ to, decimals, prefix, suffix, testid }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref} data-testid={testid}>
      {prefix}
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section id="results" data-testid="stats-section" className="scroll-mt-24 bg-[#0D0D0E] text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-28">
        <FadeUp>
          <p className="eyebrow !text-neutral-500">/02 — Proof in numbers</p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-none tracking-tight sm:text-5xl">
            Growth, measured
            <br />
            in crores<span className="text-[#FF4D2D]">.</span>
          </h2>
        </FadeUp>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-neutral-800 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <FadeUp key={m.label} delay={i * 0.08} className="bg-[#0D0D0E]">
              <div className="flex h-full flex-col justify-between gap-10 p-8 sm:p-10">
                <span className="font-mono text-[11px] uppercase leading-relaxed tracking-[0.2em] text-neutral-500">
                  /0{i + 1}
                </span>
                <div>
                  <p className="font-display text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl">
                    <CountUp
                      to={m.to}
                      decimals={m.decimals}
                      prefix={m.prefix}
                      suffix={m.suffix}
                      testid={`stat-value-${i + 1}`}
                    />
                  </p>
                  <p className="mt-2 text-sm text-neutral-400">{m.label}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
