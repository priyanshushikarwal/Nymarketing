import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { MaskedLine, FadeUp } from "./motion-primitives";
import DashboardCard from "./Dashboard";

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
      <div className="mx-auto grid max-w-[88rem] grid-cols-1 gap-10 px-5 pb-14 pt-28 sm:px-10 lg:grid-cols-[25%_50.5%_21%] lg:gap-[1.75%] lg:pb-24 lg:pt-40">
        <div className="relative z-30 flex flex-col justify-between gap-10">
          <div>
            <h1
              data-testid="hero-headline"
              className="font-display text-5xl font-extrabold leading-[0.98] tracking-tight text-neutral-950 sm:text-6xl lg:text-[2.9rem] xl:text-[3.5rem] 2xl:text-[3.9rem]"
            >
              <MaskedLine delay={0.15}>We Turn</MaskedLine>
              <MaskedLine delay={0.25}>Attention</MaskedLine>
              <MaskedLine delay={0.35}>Into Real</MaskedLine>
              <MaskedLine delay={0.45}>
                <span className="text-[#16A34A]">Business.</span>
              </MaskedLine>
            </h1>
            <FadeUp delay={0.5}>
              <p className="mt-5 max-w-[340px] text-base leading-relaxed text-neutral-600">
                Full-service digital marketing for ambitious brands ready to grow,
                scale and stand out.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.6} className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="h-14 w-14 shrink-0 rounded-2xl bg-gradient-to-br from-[#34D399] to-[#059669] shadow-lg shadow-emerald-500/30" />
              <div>
                <p className="font-semibold">Growth, Not Guesswork.</p>
                <p className="mt-1 max-w-[270px] text-sm leading-relaxed text-neutral-500">
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

        <FadeUp delay={0.3} className="relative">
          <motion.div
            data-testid="hero-turtle"
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, type: "spring", stiffness: 55, damping: 15 }}
            className="pointer-events-none absolute bottom-0 -left-[6%] z-20 hidden aspect-[3/5] h-full lg:block"
          >
            <img
              src="/assets/turtle-ny.png"
              alt="NY Marketing turtle warrior leaning on the client results dashboard"
              className="h-full w-full object-fill drop-shadow-2xl"
            />
          </motion.div>
          <motion.img
            src="/assets/turtle-ny.png"
            alt="NY Marketing turtle warrior"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, type: "spring", stiffness: 55, damping: 15 }}
            className="mx-auto mt-4 h-64 w-auto object-contain lg:hidden"
          />
          <div className="relative z-10 mt-6 w-full lg:ml-auto lg:mt-[16%] lg:w-[64%]">
            <DashboardCard />
          </div>
        </FadeUp>

        <FadeUp delay={0.45}>
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
