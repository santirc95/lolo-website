"use client";

import { motion } from "framer-motion";
import { getWhatsAppUrl } from "@/lib/constants";
import { easeLuxury } from "@/lib/motion";

const heroItem = {
  hidden: { opacity: 0, y: 22, filter: "blur(10px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.45,
      ease: easeLuxury,
      delay: 0.35 + i * 0.22,
    },
  }),
};

const heroCtas = {
  hidden: { opacity: 0, y: 16, filter: "blur(8px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.25,
      ease: easeLuxury,
      delay: 0.35 + i * 0.22,
    },
  }),
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-champagne px-5 pt-20">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold" />
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold" />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold" />
      </div>

      {/* Subtle brand glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-[18%] h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl opacity-[0.12]
          bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.55),transparent_60%)]"
        />
      </div>

      <motion.div className="relative z-10 mx-auto max-w-3xl text-center" initial="hidden" animate="show">
        <motion.p
          custom={0}
          variants={heroItem}
          className="mb-4 text-sm uppercase tracking-[0.34em] text-gold-dark"
        >
          Joyería fina personalizada
        </motion.p>

        <motion.h1
          custom={1}
          variants={heroItem}
          className="font-display text-4xl leading-tight tracking-tight text-charcoal sm:text-5xl md:text-6xl lg:text-7xl"
        >
          El anillo que cuenta
          <br />
          <span className="italic text-gold-dark">vuestra historia</span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={heroItem}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-warm-gray sm:text-xl"
        >
          Diseñamos anillos de compromiso únicos, con diamantes certificados y la artesanía que un momento así merece.
        </motion.p>

        <motion.div
          custom={3}
          variants={heroCtas}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-charcoal px-8 py-4 text-base font-medium text-white transition-all hover:bg-charcoal-light hover:shadow-lg"
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
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 px-8 py-4 text-base font-medium text-charcoal transition-all hover:border-gold hover:bg-white/50"
          >
            Cómo funciona
          </a>
        </motion.div>

        <motion.div
          custom={4}
          variants={heroItem}
          className="mt-12 flex items-center justify-center gap-8 text-xs uppercase tracking-wider text-warm-gray"
        >
          <span>Diamantes GIA</span>
          <span className="h-4 w-px bg-gold/30" />
          <span>Oro 14k &amp; 18k</span>
          <span className="h-4 w-px bg-gold/30" />
          <span>Platino 950</span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator — slower, more discreet */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 5, 0] }}
        transition={{
          duration: 4.2,
          repeat: Infinity,
          ease: easeLuxury,
          delay: 2.4,
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
