"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    name: "Fernando Huerta",
    image: "/images/testimonials/fernando.png",
    rating: 5,
    text: "Ya he comprado varias piezas en Loló y siempre quedo sorprendido para bien. Definitivamente lo recomiendo.",
  },
  {
    name: "Fernanda Hierro",
    image: "/images/testimonials/fernanda.png",
    rating: 5,
    text: "El mejor joyero. Mi anillo es la cosa más bonita que tengo. Gracias.",
  },
  {
    name: "Mauricio Barriga",
    image: "/images/testimonials/mauricio.png",
    rating: 5,
    text: "Súper profesionales. Me ayudaron con cada detalle para que la pieza fuera única y especial. Servicio totalmente personalizado y excelente.",
  },
  {
    name: "René Torti",
    image: "/images/testimonials/rene.png",
    rating: 5,
    text: "Comprar un anillo de compromiso puede ser complicado, especialmente cuando no sabes mucho del tema y es una compra importante. Con Santiago todo fue sencillo. Siempre me sentí cómodo, sin presión, y se tomó el tiempo para explicarme cada detalle. Fue una gran experiencia y se nota la pasión por lo que hace.",
  },
  {
    name: "Sebastián Coronel",
    image: "/images/testimonials/sebastian.png",
    rating: 5,
    text: "Desde el primer momento me sentí en confianza. Me explicaron todo con paciencia y me ayudaron a elegir el diamante perfecto para mi anillo. El resultado quedó increíble. Sin duda volvería a elegir Loló.",
  },
  {
    name: "Adrián Leyva",
    image: "/images/testimonials/leyva.png",
    rating: 5,
    text: "Buscaba algo único y en Loló entendieron exactamente lo que quería. El proceso fue totalmente personalizado y logramos materializar mi idea. El anillo quedó justo como lo imaginaba.",
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
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className="h-full rounded-2xl bg-gradient-to-br from-[#d4b896]/60 via-[#4a3160]/20 to-[#d4b896]/40 p-[1px]
                 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="rounded-[calc(1rem-1px)] bg-[#faf8f5]/70 backdrop-blur-md overflow-hidden h-full flex flex-col">
        <div className="p-6 flex flex-col flex-1">
          <Stars count={t.rating} />

          {t.text && (
            <div className="mt-4 flex-1">
              <blockquote
                className={`text-base leading-relaxed text-[#4a4a4a] ${
                  !expanded ? "line-clamp-3" : ""
                }`}
              >
                &ldquo;{t.text}&rdquo;
              </blockquote>
              {t.text.length > 120 && (
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="mt-1 text-sm font-medium text-[#4a3160] hover:text-[#4a3160]/70 transition-colors"
                >
                  {expanded ? "Leer menos" : "Leer más"}
                </button>
              )}
            </div>
          )}

          <div className={`flex items-center gap-3 border-t border-[#d4b896]/20 pt-4 ${t.text ? "mt-5" : "mt-4"}`}>
            <div className="h-10 w-10 flex-shrink-0 rounded-full border border-[#d4b896]/30 bg-[#4a3160]/10 flex items-center justify-center">
              <span className="text-sm font-medium text-[#4a3160]">
                {t.name.split(" ").map((w) => w[0]).join("")}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-[#2c2c2c]">{t.name}</p>
            </div>
          </div>
        </div>

        <img
          src={t.image}
          alt={`Pieza de ${t.name}`}
          className="w-full aspect-square object-cover"
        />
      </div>
    </motion.div>
  );
}

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={direction === "left" ? "rotate-180" : ""}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth =
      container.firstElementChild?.firstElementChild?.clientWidth ?? 340;
    const distance = cardWidth + 20;
    container.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="testimonios"
      role="region"
      aria-label="Reseñas de clientes"
      className="overflow-x-clip bg-[#faf8f5] px-5 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
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

        {/* Carousel wrapper with nav buttons */}
        <div className="relative">
          {/* Prev button — hidden on mobile */}
          <button
            type="button"
            aria-label="Ver testimonios anteriores"
            onClick={() => scroll("left")}
            className="pill-liquid pill-liquid--idle absolute -left-1 top-1/2 z-20 hidden -translate-y-1/2 md:flex
                       h-11 w-11 text-[#4a3160]"
          >
            <ArrowIcon direction="left" />
          </button>

          {/* Next button — hidden on mobile */}
          <button
            type="button"
            aria-label="Ver siguientes testimonios"
            onClick={() => scroll("right")}
            className="pill-liquid pill-liquid--idle absolute -right-1 top-1/2 z-20 hidden -translate-y-1/2 md:flex
                       h-11 w-11 text-[#4a3160]"
          >
            <ArrowIcon direction="right" />
          </button>

          {/* Scrollable track */}
          <div
            ref={scrollRef}
            className="-my-3 py-3 overflow-x-auto scroll-smooth snap-x snap-mandatory
                       [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <div className="flex gap-5 px-[7.5%] lg:px-0">
              {TESTIMONIALS.map((t, i) => (
                <div
                  key={t.name}
                  tabIndex={0}
                  className="w-[85%] flex-shrink-0 snap-center
                             md:w-[calc((100%-1.25rem*1)/2)]
                             lg:w-[calc((100%-1.25rem*2)/3)]
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4a3160]/50 focus-visible:ring-offset-2
                             rounded-2xl"
                >
                  <TestimonialCard t={t} index={i} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-4 text-center text-xs tracking-wide text-[#8a8078] md:hidden">
          Desliza &rarr;
        </p>
      </div>
    </section>
  );
}
