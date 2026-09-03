import { ArrowUpRight, Instagram, Linkedin, Twitter } from "lucide-react";
import { MaskedLine, FadeUp } from "./motion-primitives";

export default function Footer() {
  return (
    <footer id="contact" data-testid="footer-section" className="scroll-mt-24 bg-[#0D0D0E] text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-28">
        <FadeUp>
          <p className="eyebrow !text-neutral-500">/04 — Say hello</p>
        </FadeUp>

        <h2 className="mt-6 font-display text-4xl font-extrabold uppercase leading-[1.0] tracking-tight sm:text-6xl lg:text-7xl">
          <MaskedLine delay={0.1}>Let&apos;s build Jaipur&apos;s</MaskedLine>
          <MaskedLine delay={0.22}>
            next big brand<span className="text-[#FF4D2D]">.</span>
          </MaskedLine>
        </h2>

        <FadeUp delay={0.35} className="mt-8 max-w-md">
          <p className="text-sm leading-relaxed text-neutral-400 sm:text-base">
            One conversation is all it takes. Tell us where your brand is today —
            we&apos;ll show you exactly where AI-driven marketing can take it.
          </p>
        </FadeUp>

        <FadeUp delay={0.45} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="mailto:hello@nymarketinggroups.com?subject=Schedule%20a%20Demo"
            data-testid="footer-demo-button"
            className="btn-pill-light"
          >
            Schedule a Demo
            <ArrowUpRight size={16} />
          </a>
          <a href="#services" data-testid="footer-explore-button" className="btn-pill-outline">
            Explore Services
          </a>
        </FadeUp>

        <div className="mt-16 flex flex-col gap-6 border-t border-neutral-800 pt-8 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 nymarketinggroups — Jaipur, Rajasthan, India</span>
          <span className="font-mono text-xs tracking-wide">
            hello@nymarketinggroups.com · +91 98290 00000
          </span>
          <div className="flex items-center gap-3">
            <a
              href="#hero"
              data-testid="footer-social-instagram"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-neutral-700 transition-colors duration-300 hover:border-white hover:bg-white hover:text-neutral-950"
            >
              <Instagram size={16} />
            </a>
            <a
              href="#hero"
              data-testid="footer-social-linkedin"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-full border border-neutral-700 transition-colors duration-300 hover:border-white hover:bg-white hover:text-neutral-950"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="#hero"
              data-testid="footer-social-twitter"
              aria-label="Twitter"
              className="grid h-10 w-10 place-items-center rounded-full border border-neutral-700 transition-colors duration-300 hover:border-white hover:bg-white hover:text-neutral-950"
            >
              <Twitter size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
