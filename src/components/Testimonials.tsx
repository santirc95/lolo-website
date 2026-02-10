"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  stagger,
  hoverLift,
  hoverTransition,
  viewportOnce,
} from "@/lib/motion";

const TESTIMONIALS = [
  {
    quote:
      "El proceso fue increíble. Me guiaron en cada paso y el anillo superó todas mis expectativas. Mi ahora esposa no podía creerlo.",
    author: "Carlos M.",
    detail: "Anillo solitario en oro blanco 18k",
  },
  {
    quote:
      "Buscaba algo único y lo encontré. La atención personalizada marca la diferencia. Se nota que aman lo que hacen.",
    author: "Andrea L.",
    detail: "Anillo halo en platino 950",
  },
  {
    quote:
      "Tenía muchas dudas sobre diamantes y metales. Me explicaron todo con paciencia y sin presión. 100% recomendados.",
    author: "Roberto S.",
    detail: "Anillo three-stone en oro rosa 14k",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="bg-champagne px-5 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          className="text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-gold-dark">
            Testimonios
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-charcoal sm:text-4xl">
            Historias que nos inspiran
          </h2>
        </motion.div>

        <motion.div
          className="mt-14 grid gap-8 md:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.author}
              variants={fadeUp}
              whileHover={hoverLift}
              transition={hoverTransition}
              className="rounded-2xl bg-white p-8 shadow-sm"
            >
              {/* Stars */}
              <div className="flex gap-1 text-gold">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              <blockquote className="mt-4 text-base leading-relaxed text-charcoal-light">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="mt-6 border-t border-gold/10 pt-4">
                <p className="text-sm font-semibold text-charcoal">
                  {t.author}
                </p>
                <p className="text-xs text-warm-gray">{t.detail}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
