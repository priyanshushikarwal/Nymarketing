import { ArrowUpRight, Star } from "lucide-react";
import { MaskedLine, FadeUp } from "./motion-primitives";
import OrbCard from "./Orb";

const experts = [11, 32, 47];
const users = [5, 15, 25, 35];

export default function Hero() {
  return (
    <section id="hero" data-testid="hero-section" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 pb-14 pt-28 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:pb-20 lg:pt-36">
        <div className="flex flex-col justify-between gap-10 lg:col-span-5">
          <div>
            <FadeUp delay={0.05}>
              <div className="mb-6 flex items-center gap-3 font-mono text-[11px] font-semibold uppercase tracking-[0.25em] text-neutral-500">
                <span className="whitespace-nowrap">Turning potential with performance</span>
                <span className="h-px flex-1 bg-neutral-300" />
                <span>2026</span>
              </div>
            </FadeUp>
            <h1
              data-testid="hero-headline"
              className="font-display text-5xl font-extrabold leading-[0.98] tracking-tight text-neutral-950 sm:text-6xl lg:text-6xl xl:text-[4rem]"
            >
              <MaskedLine delay={0.15}>Marketing</MaskedLine>
              <MaskedLine delay={0.27}>Smarter with a</MaskedLine>
              <MaskedLine delay={0.39}>
                Touch of <span className="text-[#FF4D2D]">AI</span>
              </MaskedLine>
            </h1>
          </div>

          <FadeUp delay={0.55} className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="orb-mini h-14 w-14 shrink-0 rounded-xl" />
              <div>
                <p className="font-semibold">Accelerating Progress</p>
                <p className="mt-1 max-w-xs text-sm leading-relaxed text-neutral-500">
                  Helping Jaipur businesses unlock the power of AI for next-level
                  marketing impact.
                </p>
              </div>
            </div>
            <a href="#contact" data-testid="hero-get-started-button" className="btn-pill">
              Get started
              <ArrowUpRight size={16} />
            </a>
          </FadeUp>
        </div>

        <FadeUp delay={0.3} className="lg:col-span-4">
          <OrbCard />
        </FadeUp>

        <FadeUp delay={0.45} className="lg:col-span-3">
          <div className="flex h-full flex-col justify-between gap-10 rounded-[2rem] border border-neutral-200/70 bg-white/70 p-6 backdrop-blur-sm sm:p-7">
            <div>
              <div className="flex items-center gap-4">
                <span className="font-display text-6xl font-extrabold leading-none tracking-tight">
                  AI
                </span>
                <span className="h-1 w-10 shrink-0 bg-neutral-900" />
              </div>
              <p className="mt-3 max-w-[16rem] text-sm leading-snug text-neutral-500">
                Unlocking transformative potential with AI-driven marketing
              </p>
            </div>

            <div>
              <div data-testid="hero-expert-avatars" className="mb-3 flex -space-x-3">
                {experts.map((id) => (
                  <img
                    key={id}
                    src={`https://i.pravatar.cc/80?img=${id}`}
                    alt="Team expert"
                    className="h-11 w-11 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <p className="font-semibold">Team of Experts</p>
              <p className="text-sm text-neutral-500">revolutionizing industries</p>
              <div className="mt-2 flex items-center gap-1 text-[#FF4D2D]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
                ))}
                <span className="ml-1 text-xs font-semibold text-neutral-600">4.9/5</span>
              </div>
            </div>

            <div>
              <p className="font-display text-2xl font-bold tracking-tight">The NY Method</p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-500">
                Partner with a creative force that unleashes bold ideas and inspired
                strategies.
              </p>
            </div>

            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="mb-2 text-sm font-semibold">More than 5k users</p>
                <div className="flex -space-x-2">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-neutral-950 text-sm font-bold text-white ring-2 ring-white">
                    +
                  </span>
                  {users.map((id) => (
                    <img
                      key={id}
                      src={`https://i.pravatar.cc/72?img=${id}`}
                      alt="Happy client"
                      className="h-9 w-9 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
              </div>
              <a
                href="#services"
                data-testid="hero-explore-button"
                aria-label="Explore services"
                className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-neutral-900 text-neutral-900 transition-colors duration-300 hover:bg-neutral-950 hover:text-white"
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
