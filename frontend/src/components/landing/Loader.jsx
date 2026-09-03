import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          data-testid="page-loader"
          className="fixed inset-0 z-[200] grid place-items-center bg-[#F9F8F5]"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col items-center gap-5">
            <motion.img
              src="/assets/mascot.png"
              alt="NY Marketing mascot waving hello"
              data-testid="loader-mascot"
              className="h-32 w-32 rounded-full object-cover shadow-xl ring-2 ring-emerald-400/50 sm:h-40 sm:w-40"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, rotate: [0, -5, 5, -3, 0] }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="font-display text-xl font-extrabold tracking-tight text-neutral-950"
            >
              NY Marketing<span className="text-[#16A34A]">.</span>
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
