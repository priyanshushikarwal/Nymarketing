import { ArrowUpRight } from "lucide-react";
import { FadeUp } from "./motion-primitives";

export default function Testimonials() {
  return (
    <section
      id="stories"
      data-testid="testimonials-section"
      className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-8 sm:py-28"
    >
      <FadeUp>
        <p className="eyebrow">/06 — What our clients say</p>
        <h2 className="mt-6 max-w-3xl font-display text-3xl font-bold leading-[1.05] tracking-tight text-neutral-900 sm:text-5xl">
          Great partnerships start with great conversations
          <span className="text-[#16A34A]">.</span>
        </h2>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-neutral-500 sm:text-base">
          We're building our wall of client stories — yours could be the first
          one that matters.
        </p>
      </FadeUp>
      <FadeUp delay={0.15} className="mt-8">
        <a href="#contact" data-testid="testimonials-cta-button" className="btn-pill">
          Start the Conversation
          <ArrowUpRight size={16} />
        </a>
      </FadeUp>
    </section>
  );
}
