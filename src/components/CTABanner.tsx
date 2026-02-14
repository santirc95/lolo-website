"use client";

import { motion } from "framer-motion";
import { getWhatsAppUrl } from "@/lib/constants";
import { easeLuxury } from "@/lib/motion";

const EASE_LUXURY: [number, number, number, number] = easeLuxury;

const bannerVariants = {
  hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.05,
      ease: EASE_LUXURY,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: EASE_LUXURY,
      delay: i * 0.1,
    },
  }),
};

export default function CTABanner() {
  return (
    <section
      aria-label="Contacto y siguiente paso"
      className="bg-gradient-to-br from-[#faf8f5] via-[#f3ede5] to-[#efe8e0] px-5 py-20 md:py-28"
    >
      <motion.div
        variants={bannerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="mx-auto max-w-5xl"
      >
        {/* Glass card with gradient border */}
        <div
          className="rounded-3xl overflow-hidden bg-gradient-to-br from-[#d4b896]/60 via-[#4a3160]/20 to-[#d4b896]/40 p-[1px]
                     shadow-[0_8px_40px_rgba(74,49,96,0.08)]"
        >
          <div
            className="rounded-[calc(1.5rem-1px)] bg-[#faf8f5]/80 backdrop-blur-xl overflow-hidden
                        px-8 py-14 md:px-16 md:py-16"
          >
            <div className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left md:justify-between gap-10 md:gap-16">
              {/* Text column */}
              <div className="max-w-xl">
                <motion.p
                  custom={0}
                  variants={childVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="mb-3 text-sm uppercase tracking-[0.3em] text-[#4a3160]"
                >
                  Listo para comenzar
                </motion.p>

                <motion.h2
                  custom={1}
                  variants={childVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="font-display text-3xl tracking-tight text-[#2c2c2c] sm:text-4xl md:text-[2.75rem] md:leading-tight"
                >
                  Diseñemos el anillo que contará{" "}
                  <span className="italic text-[#4a3160]">vuestra historia</span>
                </motion.h2>

                <motion.p
                  custom={2}
                  variants={childVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="mt-4 text-base leading-relaxed text-[#8a8078] sm:text-lg"
                >
                  Te guiamos en cada paso: selección del diamante, diseño y
                  fabricación. Sin presión, con claridad.
                </motion.p>
              </div>

              {/* CTAs column */}
              <motion.div
                custom={3}
                variants={childVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col gap-4 sm:flex-row md:flex-col md:min-w-[220px]"
              >
                {/* Primary CTA — WhatsApp */}
                <a
                  href={getWhatsAppUrl("Hola, quiero diseñar mi anillo de compromiso.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Hablar por WhatsApp para diseñar tu anillo"
                  className="btn-liquid btn-liquid--primary gap-2.5 px-8 py-4 text-base"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="#25D366"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Hablar por WhatsApp
                </a>

                {/* Secondary CTA — Ver proceso */}
                <a
                  href="#proceso"
                  aria-label="Ver cómo funciona nuestro proceso"
                  className="btn-liquid btn-liquid--ghost px-8 py-4 text-base"
                >
                  Ver proceso
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
