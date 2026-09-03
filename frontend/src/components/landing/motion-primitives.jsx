import { motion } from "framer-motion";

export const easeOut = [0.22, 1, 0.36, 1];

export const MaskedLine = ({ children, delay = 0, className = "" }) => (
  <span className={`block overflow-hidden ${className}`}>
    <motion.span
      className="block will-change-transform"
      initial={{ y: "112%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, delay, ease: easeOut }}
    >
      {children}
    </motion.span>
  </span>
);

export const FadeUp = ({ children, delay = 0, className = "" }) => (
  <motion.div
    className={className}
    initial={{ y: 32, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, margin: "-70px" }}
    transition={{ duration: 0.7, delay, ease: easeOut }}
  >
    {children}
  </motion.div>
);
