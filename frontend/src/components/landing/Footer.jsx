import { ArrowUpRight, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import { MaskedLine, FadeUp } from "./motion-primitives";

const serviceLinks = [
  "Social Media Marketing",
  "Performance Marketing",
  "Branding & Creative",
  "Content & Reels",
  "Web Development",
  "AI-Powered Marketing",
];

const companyLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer id="contact" data-testid="footer-section" className="scroll-mt-24 bg-[#0D0D0E] text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-28">
        <FadeUp>
          <p className="eyebrow !text-neutral-500">/08 — Say hello</p>
        </FadeUp>

        <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.0] tracking-tight sm:text-6xl">
          <MaskedLine delay={0.1}>Ready to Make Your</MaskedLine>
          <MaskedLine delay={0.22}>
            Marketing <span className="text-[#22C55E]">Work Harder?</span>
          </MaskedLine>
        </h2>

        <FadeUp delay={0.35} className="mt-8 max-w-md">
          <p className="text-sm leading-relaxed text-neutral-400 sm:text-base">
            Tell us where your business is today. We'll show you where it could
            go next.
          </p>
        </FadeUp>

        <FadeUp delay={0.45} className="mt-10 flex flex-wrap items-center gap-5">
          <a
            href="mailto:hello@NyMarketingGroups.com?subject=Free%20Strategy%20Call"
            data-testid="footer-cta-button"
            className="inline-flex items-center gap-2 rounded-full bg-[#16A34A] px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#15803D]"
          >
            Get a Free Strategy Call
            <ArrowUpRight size={16} />
          </a>
          <p className="text-sm text-neutral-500">
            No generic marketing pitch. Just a conversation about your growth.
          </p>
        </FadeUp>

        <div className="mt-20 grid grid-cols-2 gap-10 border-t border-neutral-800 pt-12 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <p className="font-display text-lg font-extrabold tracking-tight">
              NyMarketingGroups<span className="text-[#22C55E]">.</span>
            </p>
            <p className="mt-2 text-sm text-neutral-500">
              Building brands. Driving growth.
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500">
              Services
            </p>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    data-testid={`footer-service-${s.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                    className="text-sm text-neutral-400 transition-colors duration-300 hover:text-white"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500">
              Company
            </p>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    data-testid={`footer-company-${l.label.toLowerCase()}`}
                    className="text-sm text-neutral-400 transition-colors duration-300 hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500">
              Connect
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href="#hero" data-testid="footer-connect-instagram" className="flex items-center gap-2 text-sm text-neutral-400 transition-colors duration-300 hover:text-white">
                  <Instagram size={14} /> Instagram
                </a>
              </li>
              <li>
                <a href="#hero" data-testid="footer-connect-linkedin" className="flex items-center gap-2 text-sm text-neutral-400 transition-colors duration-300 hover:text-white">
                  <Linkedin size={14} /> LinkedIn
                </a>
              </li>
              <li>
                <a href="#hero" data-testid="footer-connect-whatsapp" className="flex items-center gap-2 text-sm text-neutral-400 transition-colors duration-300 hover:text-white">
                  <MessageCircle size={14} /> WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:hello@NyMarketingGroups.com" data-testid="footer-connect-email" className="flex items-center gap-2 text-sm text-neutral-400 transition-colors duration-300 hover:text-white">
                  <Mail size={14} /> Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-800 pt-6 text-sm text-neutral-500">
          © 2026 NyMarketingGroups. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
