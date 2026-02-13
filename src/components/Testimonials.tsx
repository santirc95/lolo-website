"use client";

import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    name: "Carlos M.",
    avatar: "/images/testimonials/01.jpg",
    rating: 5,
    text: "El proceso fue increíble. Me guiaron en cada paso y el anillo superó todas mis expectativas. Mi ahora esposa no podía creerlo.",
    detail: "Anillo solitario en oro blanco 18k",
  },
  {
    name: "Andrea L.",
    avatar: "/images/testimonials/02.jpg",
    rating: 5,
    text: "Buscaba algo único y lo encontré. La atención personalizada marca la diferencia. Se nota que aman lo que hacen.",
    detail: "Anillo halo en platino 950",
  },
  {
    name: "Roberto S.",
    avatar: "/images/testimonials/03.jpg",
    rating: 5,
    text: "Tenía muchas dudas sobre diamantes y metales. Me explicaron todo con paciencia y sin presión. 100% recomendados.",
    detail: "Anillo trilogía en oro rosa 14k",
  },
  {
    name: "Valentina R.",
    avatar: "/images/testimonials/04.jpg",
    rating: 5,
    text: "Desde el primer contacto sentí confianza. El diseño 3D fue clave para visualizar el resultado. Quedó incluso mejor de lo que imaginé.",
    detail: "Anillo pavé en oro amarillo 18k",
  },
  {
    name: "Sebastián G.",
    avatar: "/images/testimonials/05.jpg",
    rating: 5,
    text: "Quería algo especial para nuestra historia y lo lograron. La calidad del diamante y el acabado son impecables.",
    detail: "Anillo solitario en platino 950",
  },
  {
    name: "Mariana T.",
    avatar: "/images/testimonials/06.jpg",
    rating: 5,
    text: "Me encantó poder participar en cada decisión. El empaque y la entrega fueron un detalle precioso. Totalmente recomendable.",
    detail: "Anillo halo en oro rosa 18k",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 12, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      delay: i * 0.12,
    },
  }),
};

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} de 5 estrellas`}>
      {Array.from({ length: count }, (_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-[#c9a96e]"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({
  t,
  index,
}: {
  t: (typeof TESTIMONIALS)[number];
  index: number;
}) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#d4b896]/60 via-[#4a3160]/20 to-[#d4b896]/40 p-[1px]
                 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="rounded-[calc(1rem-1px)] bg-[#faf8f5]/70 backdrop-blur-md overflow-hidden p-6 h-full flex flex-col">
        <Stars count={t.rating} />

        <blockquote className="mt-4 flex-1 text-base leading-relaxed text-[#4a4a4a]">
          &ldquo;{t.text}&rdquo;
        </blockquote>

        <div className="mt-5 flex items-center gap-3 border-t border-[#d4b896]/20 pt-4">
          <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border border-[#d4b896]/30">
            <img
              src={t.avatar}
              alt={`Foto de ${t.name}`}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-medium text-[#2c2c2c]">{t.name}</p>
            <p className="text-xs text-[#8a8078]">{t.detail}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      role="region"
      aria-label="Reseñas de clientes"
      className="overflow-hidden bg-[#faf8f5] px-5 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#4a3160]">
            Reseñas de clientes
          </p>
          <h2 className="font-display text-3xl tracking-tight text-[#2c2c2c] sm:text-4xl md:text-5xl">
            Historias que nos{" "}
            <span className="italic text-[#4a3160]">inspiran</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#8a8078] sm:text-lg">
            La confianza de nuestros clientes es nuestro mayor orgullo. Estas
            son algunas de sus experiencias.
          </p>
        </div>

        {/* Mobile: horizontal carousel (visible < md) */}
        <div className="md:hidden">
          <div
            className="overflow-x-auto scroll-smooth snap-x snap-mandatory
                       [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <div className="flex gap-4 px-1">
              {TESTIMONIALS.map((t, i) => (
                <div
                  key={t.name}
                  tabIndex={0}
                  className="w-[85%] flex-shrink-0 snap-center
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4a3160]/50 focus-visible:ring-offset-2
                             rounded-2xl"
                >
                  <TestimonialCard t={t} index={i} />
                </div>
              ))}
            </div>
          </div>
          <p className="mt-4 text-center text-xs tracking-wide text-[#8a8078]">
            Desliza &rarr;
          </p>
        </div>

        {/* Desktop: grid (visible md+) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
