"use client";

import { motion, useReducedMotion } from "framer-motion";
import { getWhatsAppUrl } from "@/lib/constants";
import { easeLuxury } from "@/lib/motion";

/* ==============================
   Animation presets
================================ */
const heroItem = {
  hidden: { opacity: 0, y: 24, filter: "blur(10px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.6,
      ease: easeLuxury,
      delay: 0.45 + i * 0.24,
    },
  }),
};

const heroCtas = {
  hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.4,
      ease: easeLuxury,
      delay: 0.6 + i * 0.24,
    },
  }),
};

/* ==============================
   Hero Component
================================ */
export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pt-20 bg-luxury-wash bg-luxury-grain">

      {/* ==============================
          Mobile background video
      ============================== */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 z-0 md:hidden">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src="/videos/hero/lolo-hero-mobile.webm" type="video/webm" />
            <source src="/videos/hero/lolo-hero-mobile.mp4" type="video/mp4" />
          </video>
        </div>
      )}

      {/* ==============================
          Decorative rings (gold)
      ============================== */}
      <div className="absolute inset-0 z-[1] opacity-[0.03]">
        <div className="absolute left-1/2 top-1/2 h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold" />
        <div className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold" />
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold" />
      </div>

      {/* ==============================
          Purple glow system (lavender)
      ============================== */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        {/* Top soft wash */}
        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{
            background:
              "radial-gradient(85% 55% at 50% 0%, rgba(74,49,96,0.18), transparent 62%)",
          }}
        />

        {/* Center glow */}
        <div
          className="absolute left-1/2 top-[18%] h-[600px] w-[600px] -translate-x-1/2 rounded-full blur-3xl opacity-[0.11]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(74,49,96,0.45), transparent 66%)",
          }}
        />
      </div>

      {/* ==============================
          Main content
      ============================== */}
      <motion.div
        className="relative z-10 mx-auto max-w-3xl text-center"
        initial="hidden"
        animate="show"
      >
        {/* Eyebrow */}
        <motion.p
          custom={0}
          variants={heroItem}
          className="mb-4 text-sm uppercase tracking-[0.34em] text-gold-dark"
        >
          Joyería fina personalizada
        </motion.p>

        {/* Headline */}
        <motion.h1
          custom={1}
          variants={heroItem}
          className="font-display text-4xl leading-tight tracking-tight text-charcoal sm:text-5xl md:text-6xl lg:text-7xl"
        >
          El anillo que cuenta
          <br />
          <span className="italic text-gold-dark">tu historia</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          custom={2}
          variants={heroItem}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-warm-gray sm:text-xl"
        >
          Diseñamos anillos de compromiso únicos, con diamantes certificados y la
          artesanía que un momento así merece.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={3}
          variants={heroCtas}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-liquid btn-liquid--dark px-8 py-4 text-base"
          >
            Empieza tu diseño
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>

          <a
            href="#proceso"
            className="btn-liquid btn-liquid--ghost px-8 py-4 text-base"
          >
            Cómo funciona
          </a>
        </motion.div>

        {/* Trust line */}
        <motion.div
          custom={4}
          variants={heroItem}
          className="mx-auto mt-12 flex max-w-md items-center justify-center gap-8 text-xs uppercase tracking-wider text-warm-gray"
        >
          <span className="flex-1 text-center">Oro 14k &amp; 18k</span>
          <span className="h-4 w-px shrink-0 bg-gold/30" />
          <span className="flex-1 text-center">Diamantes<br />GIA &amp; IGI</span>
          <span className="h-4 w-px shrink-0 bg-gold/30" />
          <span className="flex-1 text-center">Platino 950</span>
        </motion.div>
      </motion.div>

      {/* ==============================
          Scroll indicator
      ============================== */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: easeLuxury,
          delay: 2.8,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-gold"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </motion.div>
    </section>
  );
}


