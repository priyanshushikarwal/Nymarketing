import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { FadeUp, easeOut } from "./motion-primitives";

const items = [
  {
    quote:
      "nymarketinggroups transformed our D2C brand from 10L a month to 1.2 Cr a month in under 8 months with their AI ad engine.",
    author: "Vikramaditya Rathore",
    role: "Founder, Royal Rajputana Heritage D2C",
    location: "Jaipur",
  },
  {
    quote:
      "The cleanest web design and most aggressive performance marketing team in Rajasthan. Unmatched attention to detail.",
    author: "Ananya Sharma",
    role: "Chief Marketing Officer, Crafts & Co.",
    location: "Jaipur / Mumbai",
  },
  {
    quote:
      "From local search to national shelves — their SEO and performance stack put our Jaipur handicraft label on the map.",
    author: "Rohan Meena",
    role: "Director, Heritage Crafts Co.",
    location: "Jaipur",
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i - 1 + items.length) % items.length);
  const next = () => setIdx((i) => (i + 1) % items.length);
  const item = items[idx];

  return (
    <section
      id="stories"
      data-testid="testimonials-section"
      className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-8 sm:py-28"
    >
      <FadeUp>
        <p className="eyebrow">/03 — Client stories</p>
      </FadeUp>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-9">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.45, ease: easeOut }}
            >
              <p
                data-testid="testimonial-quote"
                className="font-display text-2xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl"
              >
                “{item.quote}”
              </p>
              <footer className="mt-8 flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-neutral-950 font-display text-lg font-bold text-white">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold" data-testid="testimonial-author">
                    {item.author}
                  </p>
                  <p className="text-sm text-neutral-500">
                    {item.role} · {item.location}
                  </p>
                </div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="flex items-end justify-between gap-4 lg:col-span-3 lg:flex-col lg:items-end">
          <div className="flex items-center gap-1 text-[#FF4D2D]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-neutral-500">
              0{idx + 1} / 0{items.length}
            </span>
            <button
              data-testid="testimonial-prev-button"
              aria-label="Previous story"
              onClick={prev}
              className="grid h-12 w-12 place-items-center rounded-full border border-neutral-900 transition-colors duration-300 hover:bg-neutral-950 hover:text-white"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              data-testid="testimonial-next-button"
              aria-label="Next story"
              onClick={next}
              className="grid h-12 w-12 place-items-center rounded-full border border-neutral-900 transition-colors duration-300 hover:bg-neutral-950 hover:text-white"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
