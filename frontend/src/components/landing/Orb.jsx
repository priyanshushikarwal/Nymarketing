import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";

const stars = [
  { top: "10%", left: "14%" },
  { top: "20%", left: "84%" },
  { top: "58%", left: "10%" },
  { top: "72%", left: "78%" },
  { top: "38%", left: "48%" },
  { top: "84%", left: "34%" },
];

export default function OrbCard() {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 55, damping: 14 });
  const sy = useSpring(my, { stiffness: 55, damping: 14 });
  const orbX = useTransform(sx, [-0.5, 0.5], [-18, 18]);
  const orbY = useTransform(sy, [-0.5, 0.5], [-14, 14]);
  const glowX = useTransform(sx, [-0.5, 0.5], [26, -26]);
  const glowY = useTransform(sy, [-0.5, 0.5], [22, -22]);

  const onMove = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      data-testid="hero-orb-card"
      className="
        group relative flex min-h-[380px] sm:min-h-[450px] flex-col justify-between
        overflow-hidden rounded-[2rem] border border-emerald-900/40
        bg-[#0B1512] p-5 text-white shadow-2xl
        sm:p-6
      "
    >
      {/* BACKGROUND MESH & STARS */}
      <div className="orb-mesh pointer-events-none absolute inset-0" />
      {stars.map((s, i) => (
        <span
          key={i}
          className="star-dot absolute h-1 w-1 rounded-full bg-white"
          style={{ top: s.top, left: s.left, animationDelay: `${i * 0.5}s` }}
        />
      ))}

      {/* HEADER — Offset on desktop so the turtle arm doesn't obscure */}
      <div className="relative z-10 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-300 lg:pl-[75px]">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#22C55E] shadow-[0_0_8px_#22C55E]" />
          <span>The NY Method</span>
        </div>
        <Sparkles size={14} className="text-[#34D399]" />
      </div>

      {/* 3D ORB VISUALIZER WITH ORBITAL RINGS */}
      <div className="relative z-10 flex flex-1 items-center justify-center py-6">
        <motion.div
          style={{ x: glowX, y: glowY }}
          className="absolute h-48 w-48 rounded-full bg-[#10B981]/25 blur-3xl"
        />
        <div className="animate-spin-slow absolute h-[210px] w-[210px] rounded-full border border-emerald-400/20 sm:h-[260px] sm:w-[260px]">
          <span className="absolute -top-1.5 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#34D399] shadow-[0_0_12px_#34D399]" />
        </div>
        <div className="animate-spin-slower absolute h-[155px] w-[155px] rounded-full border border-emerald-200/15 sm:h-[195px] sm:w-[195px]">
          <span className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#6EE7B7] shadow-[0_0_10px_#6EE7B7]" />
        </div>
        <motion.div
          style={{ x: orbX, y: orbY }}
          className="orb-core h-32 w-32 rounded-full transition-transform duration-500 group-hover:scale-105 sm:h-40 sm:w-40"
        />
      </div>

      {/* BOTTOM — Offset on desktop so it sits cleanly */}
      <div className="relative z-10 flex items-end justify-between gap-4 border-t border-white/10 pt-5 lg:pl-[85px]">
        <div>
          <p className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
            Brands that get noticed.
          </p>
          <p className="mt-1 text-xs text-neutral-400">
            Strategy • Creative • Performance
          </p>
        </div>
        <div className="hidden rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 font-mono text-[10px] font-semibold text-emerald-400 sm:block">
          Growth Engine
        </div>
      </div>
    </div>
  );
}
