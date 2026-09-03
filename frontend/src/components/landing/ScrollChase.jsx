import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollChase() {
  const { scrollYProgress } = useScroll();
  const x = useTransform(
    scrollYProgress,
    [0, 0.06, 0.18, 0.72, 0.84, 1],
    ["110%", "110%", "15%", "15%", "110%", "110%"]
  );
  const top = useTransform(scrollYProgress, [0, 1], ["72vh", "22vh"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  return (
    <motion.div
      data-testid="scroll-chase"
      style={{ x, top, rotate }}
      className="pointer-events-none fixed right-0 z-40 hidden md:block"
    >
      <img
        src="/assets/parrot.png"
        alt=""
        aria-hidden="true"
        className="h-28 w-44 object-contain mix-blend-multiply"
      />
    </motion.div>
  );
}
