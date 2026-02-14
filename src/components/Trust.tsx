"use client";

import { motion } from "framer-motion";
import { getWhatsAppUrl } from "@/lib/constants";

const TRUST_POINTS = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Diamantes certificados",
    description:
      "Trabajamos exclusivamente con diamantes certificados por laboratorios gemológicos reconocidos (GIA, IGI). Sin sorpresas.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Experiencia comprobada",
    description:
      "Más de una década creando piezas únicas. Cada anillo refleja nuestra pasión por la artesanía y la excelencia.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Atención personalizada",
    description:
      "No eres un número. Te acompañamos de inicio a fin con asesoría experta y el cariño que un momento tan especial merece.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    title: "Precios transparentes",
    description:
      "Sin costos ocultos. Te mostramos exactamente en qué se invierte cada peso de tu presupuesto.",
  },
];

const EASE_LUXURY: [number, number, number, number] = [0.22, 1, 0.36, 1];

const cardVariants = {
  hidden: { opacity: 0, y: 12, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: EASE_LUXURY,
      delay: i * 0.12,
    },
  }),
};

export default function Trust() {
  return (
    <section
      id="nosotros"
      role="region"
      aria-label="Por qué elegir LOLŌ"
      className="bg-[#faf8f5] px-5 py-20 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-14">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#4a3160]">
            Por qué LOLŌ
          </p>
          <h2 className="font-display text-3xl tracking-tight text-[#2c2c2c] sm:text-4xl md:text-5xl">
            Joyería con{" "}
            <span className="italic text-[#4a3160]">alma</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#8a8078] sm:text-lg">
            Creemos que un anillo de compromiso es mucho más que una joya. Es una
            promesa hecha materia. Por eso ponemos el mismo amor en crearlo que
            tú al entregarlo.
          </p>
        </div>

        {/* Cards — stacking sticky on mobile, grid on md+ */}
        <div className="md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6">
          {TRUST_POINTS.map((point, i) => (
            <motion.div
              key={point.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="sticky md:static mb-6 md:mb-0 h-[240px] md:h-auto"
              style={{
                top: `${96 + i * 12}px`,
                zIndex: i + 1,
              }}
            >
              <div
                className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#d4b896]/60 via-[#4a3160]/20 to-[#d4b896]/40 p-[1px]
                           shadow-sm transition-all duration-300
                           hover:-translate-y-1 hover:shadow-lg
                           h-full"
              >
                <div className="rounded-[calc(1rem-1px)] bg-[#faf8f5]/95 md:bg-[#faf8f5]/80 backdrop-blur-md overflow-hidden p-6 text-center
                               h-full flex flex-col items-center justify-between">
                  <div>
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f5efe8] text-[#4a3160]">
                      {point.icon}
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-[#2c2c2c]">
                      {point.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[#8a8078] line-clamp-3 md:line-clamp-none">
                    {point.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra scroll room for stacking effect on mobile */}
        <div className="h-8 md:hidden" />

        {/* CTA */}
        <motion.div
          custom={TRUST_POINTS.length}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="mt-10 md:mt-14 text-center"
        >
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-liquid btn-liquid--primary px-8 py-4 text-base"
          >
            Conócenos mejor
          </a>
        </motion.div>
      </div>
    </section>
  );
}
