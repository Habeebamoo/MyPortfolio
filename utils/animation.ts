import type { Variants } from "framer-motion";

const heroText: Variants = {
  hidden: { opacity: 0, filter: "blur(8px)", y: 20 },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 2,
      ease: "easeInOut"
    }
  }
}

export { heroText }