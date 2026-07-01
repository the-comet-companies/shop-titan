import type { Variants, Transition } from "framer-motion";

const ease: Transition["ease"] = [0.22, 1, 0.36, 1];

// Quieter motion — smaller distance, same easing
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease } },
};

export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

export const viewportOnce = { once: true, amount: 0.2 } as const;
