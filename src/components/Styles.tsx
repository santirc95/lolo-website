"use client";

import { motion } from "framer-motion";
import { getWhatsAppUrl } from "@/lib/constants";

const STYLES = [
  {
    name: "Solitario",
    description:
      "La elegancia en su forma más pura. Un diamante protagonista sobre una banda refinada.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M24 8L16 20H32L24 8Z" />
        <path d="M16 20L24 40L32 20" />
        <path d="M24 8L32 20" />
        <path d="M24 8L16 20" />
        <line x1="16" y1="20" x2="32" y2="20" />
      </svg>
    ),
  },
  {
    name: "Trilogía",
    description:
      "Tres piedras que representan pasado, presente y futuro. Significado y brillo en perfecta armonía.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M24 10L19 18H29L24 10Z" />
        <path d="M19 18L24 30L29 18" />
        <path d="M12 16L9 22H15L12 16Z" />
        <path d="M9 22L12 28L15 22" />
        <path d="M36 16L33 22H39L36 16Z" />
        <path d="M33 22L36 28L39 22" />
      </svg>
    ),
  },
  {
    name: "Halo",
    description:
      "Un halo de diamantes abraza la piedra central, amplificando su brillo y presencia.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M24 12L19 20H29L24 12Z" />
        <path d="M19 20L24 32L29 20" />
        <circle cx="24" cy="22" r="12" />
      </svg>
    ),
  },
  {
    name: "Pavé",
    description:
      "Micro-diamantes engastados en la banda crean un camino de luz que envuelve tu mano.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M24 10L19 18H29L24 10Z" />
        <path d="M19 18L24 30L29 18" />
        <circle cx="16" cy="26" r="1.5" />
        <circle cx="13" cy="29" r="1.5" />
        <circle cx="10" cy="32" r="1.5" />
        <circle cx="32" cy="26" r="1.5" />
        <circle cx="35" cy="29" r="1.5" />
        <circle cx="38" cy="32" r="1.5" />
      </svg>
    ),
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  }),
};

export default function Styles() {
  return (
    <section id="estilos" className="bg-cream px-5 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gold-dark">
            Estilos
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-charcoal sm:text-4xl">
            Encuentra tu estilo
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-warm-gray">
            Cada diseño tiene su propia personalidad. Explora los estilos más
            populares y cuéntanos cuál va contigo.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STYLES.map((style, i) => (
            <motion.a
              key={style.name}
              href={getWhatsAppUrl(
                `Hola, me interesa el estilo ${style.name} para mi anillo de compromiso.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{
                y: -4,
                boxShadow: "0 12px 32px rgba(184, 151, 126, 0.15)",
              }}
              transition={{ type: "tween", duration: 0.2 }}
              className="group flex cursor-pointer flex-col items-center rounded-2xl bg-white p-8 shadow-sm text-center"
            >
              {/* Placeholder image area */}
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-champagne text-gold-dark transition-colors group-hover:bg-gold-light/20">
                {style.icon}
              </div>

              <h3 className="mt-6 font-display text-lg font-semibold text-charcoal">
                {style.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-warm-gray">
                {style.description}
              </p>

              <span className="mt-4 text-xs font-medium uppercase tracking-wider text-gold-dark opacity-0 transition-opacity group-hover:opacity-100">
                Consultar &rarr;
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
