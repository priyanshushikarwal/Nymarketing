import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles, TrendingUp } from "lucide-react";

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
      className="group relative flex min-h-[440px] flex-col justify-between overflow-hidden rounded-[2rem] border border-neutral-800 bg-[#0D0D0E] p-6 text-white shadow-2xl sm:min-h-[560px] sm:p-8"
    >
      <div className="orb-mesh pointer-events-none absolute inset-0" />
      {stars.map((s, i) => (
        <span
          key={i}
          className="star-dot absolute h-1 w-1 rounded-full bg-white"
          style={{ top: s.top, left: s.left, animationDelay: `${i * 0.5}s` }}
        />
      ))}

      <div className="relative z-10 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-400">
        <span>The NY AI Verse</span>
        <Sparkles size={14} className="text-[#FF2A85]" />
      </div>

      <div className="relative z-10 flex flex-1 items-center justify-center py-12">
        <motion.div
          style={{ x: glowX, y: glowY }}
          className="absolute h-64 w-64 rounded-full bg-[#FF2A85]/30 blur-3xl"
        />
        <div className="animate-spin-slow absolute h-[290px] w-[290px] rounded-full border border-pink-400/20 sm:h-[370px] sm:w-[370px]">
          <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#B026FF] shadow-[0_0_12px_#B026FF]" />
        </div>
        <div className="animate-spin-slower absolute h-[215px] w-[215px] rounded-full border border-orange-300/15 sm:h-[270px] sm:w-[270px]">
          <span className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#FF5E3A] shadow-[0_0_10px_#FF5E3A]" />
        </div>
        <motion.div
          style={{ x: orbX, y: orbY }}
          className="orb-core h-40 w-40 rounded-full transition-transform duration-500 group-hover:scale-105 sm:h-52 sm:w-52"
        />
      </div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-4 top-20 z-20 flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 backdrop-blur-md sm:left-6 sm:top-24"
      >
        <TrendingUp size={13} className="text-[#FF5E3A]" />
        <span className="text-xs font-semibold">4.8x ROAS</span>
      </motion.div>

      <div className="relative z-10 flex items-end justify-between gap-4">
        <div>
          <p className="font-display text-xl font-bold tracking-tight">
            Marketing, reimagined
          </p>
          <p className="mt-1 text-xs text-neutral-400">
            Predictive AI · Human creativity · Jaipur born
          </p>
        </div>
      </div>
    </div>
  );
}
