import type { Variants, Transition } from "framer-motion";

/* ─── Luxury easing ─── */
export const easeLuxury: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ─── Fade-up entrance ─── */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easeLuxury },
  },
};

/* ─── Staggered container ─── */
export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

/* ─── Hover lift (use with whileHover) ─── */
export const hoverLift = {
  y: -6,
  scale: 1.01,
  boxShadow: "0 16px 40px rgba(184, 151, 126, 0.12)",
};

/* ─── Shared transition for hover/tap ─── */
export const hoverTransition: Transition = {
  type: "tween",
  duration: 0.35,
  ease: easeLuxury,
};

/* ─── Viewport config for whileInView ─── */
export const viewportOnce = { once: true, margin: "-60px" as const };
