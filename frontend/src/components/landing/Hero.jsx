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
    <section
      id="hero"
      data-testid="hero-section"
      className="relative overflow-hidden"
    >
      <div className="mx-auto max-w-[100rem] px-5 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 gap-10 pb-16 pt-24 sm:pt-28 lg:grid-cols-[31%_47%_22%] lg:gap-0 lg:pb-24 lg:pt-32">

          {/* LEFT — HEADLINE */}
          <div className="relative z-30 flex flex-col justify-between gap-10 lg:pr-8">

            <div>
              <h1
                data-testid="hero-headline"
                className="font-display text-5xl font-extrabold leading-[0.98] tracking-tight text-neutral-950 sm:text-6xl lg:text-[3.4rem] xl:text-[4rem] 2xl:text-[4.4rem]"
              >
                <MaskedLine delay={0.15}>We Turn</MaskedLine>
                <MaskedLine delay={0.25}>Attention</MaskedLine>
                <MaskedLine delay={0.35}>Into Real</MaskedLine>
                <MaskedLine delay={0.45}>
                  <span className="text-[#16A34A]">Business.</span>
                </MaskedLine>
              </h1>

              <FadeUp delay={0.5}>
                <p className="mt-6 max-w-[390px] text-base leading-relaxed text-neutral-600 sm:text-lg">
                  Full-service digital marketing for ambitious brands ready to
                  grow, scale and stand out.
                </p>
              </FadeUp>
            </div>

            <FadeUp delay={0.6} className="space-y-8">

              <div className="flex items-start gap-4">
                <div className="h-14 w-14 shrink-0 rounded-2xl bg-gradient-to-br from-[#34D399] to-[#059669] shadow-lg shadow-emerald-500/30" />

                <div>
                  <p className="font-semibold">
                    Growth, Not Guesswork.
                  </p>

                  <p className="mt-1 max-w-[290px] text-sm leading-relaxed text-neutral-500">
                    Strategy, creative and performance marketing designed to
                    move your business forward.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  data-testid="hero-start-growing-button"
                  className="btn-pill"
                >
                  Start Growing
                  <ArrowUpRight size={16} />
                </a>

                <a
                  href="#work"
                  data-testid="hero-view-work-button"
                  className="btn-pill-dark-outline"
                >
                  View Our Work
                </a>
              </div>

            </FadeUp>
          </div>

          {/* CENTER — DASHBOARD + TURTLE */}
          <FadeUp
            delay={0.3}
            className="relative min-w-0 lg:pl-0"
          >

            {/* Orb Card — Centered on mobile, aligned on desktop */}
            <div className="relative z-10 w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[500px] mx-auto lg:mr-auto lg:translate-x-[120px] lg:mt-[10%]">
              <OrbCard />
            </div>

            {/* Turtle — ONLY DESKTOP (Large & prominent on left of card) */}
            <motion.div
              data-testid="hero-turtle"
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.7,
                type: "spring",
                stiffness: 55,
                damping: 15,
              }}
              className="pointer-events-none absolute bottom-[-40px] left-[-25%] xl:left-[-22%] z-20 hidden h-[116%] xl:h-[120%] w-auto max-w-none lg:block"
            >
              <img
                src="/assets/turtle-ny.png"
                alt="NyMarketingGroups turtle warrior"
                className="h-full w-auto object-contain object-bottom drop-shadow-2xl"
              />
            </motion.div>

          </FadeUp>

          {/* RIGHT — PILLARS */}
          <FadeUp delay={0.45} className="relative z-30 lg:pl-5">
            <div className="flex h-full flex-col justify-between gap-8 rounded-[2rem] border border-neutral-200/70 bg-white/70 p-6 backdrop-blur-sm sm:p-7">

              <div className="space-y-7">
                {pillars.map((p, i) => (
                  <div
                    key={p.title}
                    className={
                      i > 0
                        ? "border-t border-neutral-200/80 pt-7"
                        : ""
                    }
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-display text-3xl font-extrabold tracking-tight">
                        {p.title}
                      </span>

                      <span className="h-1 w-8 bg-[#16A34A]" />
                    </div>

                    <p className="mt-2 text-sm font-semibold">
                      {p.heading}
                    </p>

                    {p.desc && (
                      <p className="mt-1 text-sm leading-relaxed text-neutral-500">
                        {p.desc}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between gap-4">
                <p className="text-sm text-neutral-500">
                  Full-service. Results-driven.
                </p>

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
      </div>
    </section>
  );
}