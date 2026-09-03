import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { MaskedLine, FadeUp } from "./motion-primitives";
import OrbCard from "./Orb";

const pillars = [
  {
    title: "Strategy",
    heading: "Built Around Your Business",
    desc: "We start with your goals, audience and market — then build a marketing strategy around them.",
  },
  {
    title: "Creative",
    heading: "Content That Gets Attention",
  },
  {
    title: "Performance",
    heading: "Marketing That Drives Results",
  },
];

export default function Hero() {
  return (
    <section id="hero" data-testid="hero-section" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 pb-14 pt-28 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:pb-20 lg:pt-36">
        <div className="flex flex-col justify-between gap-10 lg:col-span-5">
          <div className="relative">
            <motion.div
              data-testid="hero-creature"
              initial={{ x: 140, opacity: 0, rotate: 10 }}
              animate={{ x: 0, opacity: 1, rotate: 0 }}
              transition={{ delay: 0.85, type: "spring", stiffness: 60, damping: 14 }}
              className="pointer-events-none absolute right-0 top-0 z-10"
            >
              <img
                src="/assets/turtle.png"
                alt="Turtle warrior sprinting forward"
                className="animate-bob h-20 w-28 object-contain mix-blend-multiply sm:h-32 sm:w-48"
              />
            </motion.div>
            <h1
              data-testid="hero-headline"
              className="font-display text-5xl font-extrabold leading-[0.98] tracking-tight text-neutral-950 sm:text-6xl lg:text-6xl xl:text-[4rem]"
            >
              <MaskedLine delay={0.15}>We Turn Attention</MaskedLine>
              <MaskedLine delay={0.27}>Into Real</MaskedLine>
              <MaskedLine delay={0.39}>
                <span className="text-[#16A34A]">Business.</span>
              </MaskedLine>
            </h1>
            <FadeUp delay={0.5}>
              <p className="mt-5 max-w-md text-base leading-relaxed text-neutral-600">
                Full-service digital marketing for ambitious brands ready to grow,
                scale and stand out.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.6} className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="orb-mini h-14 w-14 shrink-0 rounded-xl" />
              <div>
                <p className="font-semibold">Growth, Not Guesswork.</p>
                <p className="mt-1 max-w-xs text-sm leading-relaxed text-neutral-500">
                  Strategy, creative and performance marketing designed to move
                  your business forward.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#contact" data-testid="hero-start-growing-button" className="btn-pill">
                Start Growing
                <ArrowUpRight size={16} />
              </a>
              <a href="#work" data-testid="hero-view-work-button" className="btn-pill-dark-outline">
                View Our Work
              </a>
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={0.3} className="relative lg:col-span-4">
          <OrbCard />
          <img
            src="/assets/mascot.png"
            alt="NY Marketing mascot waving with a megaphone"
            data-testid="hero-mascot"
            className="animate-bob absolute -right-3 -top-10 z-20 h-24 w-24 rounded-full object-cover shadow-xl ring-2 ring-emerald-400/50 sm:-right-5 sm:-top-12 sm:h-28 sm:w-28"
          />
        </FadeUp>

        <FadeUp delay={0.45} className="lg:col-span-3">
          <div className="flex h-full flex-col justify-between gap-8 rounded-[2rem] border border-neutral-200/70 bg-white/70 p-6 backdrop-blur-sm sm:p-7">
            <div className="space-y-7">
              {pillars.map((p, i) => (
                <div
                  key={p.title}
                  className={i > 0 ? "border-t border-neutral-200/80 pt-7" : ""}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-display text-3xl font-extrabold tracking-tight">
                      {p.title}
                    </span>
                    <span className="h-1 w-8 bg-[#16A34A]" />
                  </div>
                  <p className="mt-2 text-sm font-semibold">{p.heading}</p>
                  {p.desc && (
                    <p className="mt-1 text-sm leading-relaxed text-neutral-500">
                      {p.desc}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm text-neutral-500">Full-service. Results-driven.</p>
              <a
                href="#work"
                data-testid="hero-explore-button"
                aria-label="View our work"
                className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-neutral-900 text-neutral-900 transition-colors duration-300 hover:border-[#16A34A] hover:bg-[#16A34A] hover:text-white"
              >
                <ArrowUpRight size={20} />
              </a>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
