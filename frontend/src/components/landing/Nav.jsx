import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { easeOut } from "./motion-primitives";

const links = [
  { label: "Services", href: "#services", testid: "nav-link-services" },
  { label: "Work", href: "#work", testid: "nav-link-work" },
  { label: "About", href: "#about", testid: "nav-link-about" },
  { label: "Process", href: "#process", testid: "nav-link-process" },
  { label: "Contact", href: "#contact", testid: "nav-link-contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="main-nav"
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-neutral-200/80 bg-[#F9F8F5]/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[88rem] items-center justify-between px-5 py-4 sm:px-10">
        <a
          href="#hero"
          data-testid="nav-logo"
          className="font-display text-lg font-extrabold tracking-tight"
        >
          NY Marketing
          <span className="text-[#16A34A]">.</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={l.testid}
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-950"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            data-testid="nav-demo-button"
            className="btn-pill hidden !px-5 !py-2.5 sm:inline-flex"
          >
            Get a Free Strategy Call
            <ArrowUpRight size={15} />
          </a>
          <button
            data-testid="nav-menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-neutral-300 lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            data-testid="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: easeOut }}
            className="overflow-hidden border-t border-neutral-200/80 lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4 sm:px-8">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  data-testid={`mobile-${l.testid}`}
                  onClick={() => setOpen(false)}
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * i, duration: 0.3, ease: easeOut }}
                  className="flex items-center justify-between rounded-xl px-3 py-3 font-display text-2xl font-bold tracking-tight hover:bg-white"
                >
                  {l.label}
                  <ArrowUpRight size={20} className="text-neutral-400" />
                </motion.a>
              ))}
              <a
                href="#contact"
                data-testid="mobile-nav-demo-button"
                onClick={() => setOpen(false)}
                className="btn-pill mt-3 justify-center"
              >
                Get a Free Strategy Call
                <ArrowUpRight size={15} />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
