"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

const pieces = [
  { id: 1, src: "/images/pieces/01.jpg", title: "Solitario Eterno", subtitle: "Oro 18k & Diamante GIA" },
  { id: 2, src: "/images/pieces/02.jpg", title: "Alianza Infinita", subtitle: "Platino 950 & Pavé" },
  { id: 3, src: "/images/pieces/03.jpg", title: "Halo Luminoso", subtitle: "Oro Rosa 14k & Zafiro" },
  { id: 4, src: "/images/pieces/04.jpg", title: "Torsade Royale", subtitle: "Oro 18k & Esmeralda" },
  { id: 5, src: "/images/pieces/05.jpg", title: "Cinta de Luz", subtitle: "Platino 950 & Baguettes" },
  { id: 6, src: "/images/pieces/06.jpg", title: "Nudo Imperial", subtitle: "Oro Amarillo 18k" },
  { id: 7, src: "/images/pieces/07.jpg", title: "Pétalos de Alba", subtitle: "Oro Rosa 18k & Morganita" },
  { id: 8, src: "/images/pieces/08.jpg", title: "Constellation", subtitle: "Platino 950 & Diamantes" },
];

const ease = [0.22, 1, 0.36, 1] as const;

const headerVariants = {
  hidden: { opacity: 0, y: 12, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease },
  },
};

const cardContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 12, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease },
  },
};

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

export default function PiecesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const cardWidth = container.firstElementChild?.firstElementChild?.clientWidth ?? 340;
    const distance = cardWidth + 20; // card width + gap
    container.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });
  };

  return (
    <section
      role="region"
      aria-label="Galería de piezas destacadas"
      className="overflow-hidden bg-[#faf8f5] py-20 px-5"
    >
      {/* Header */}
      <motion.div
        className="mx-auto max-w-3xl text-center mb-12"
        variants={prefersReducedMotion ? undefined : headerVariants}
        initial={prefersReducedMotion ? undefined : "hidden"}
        whileInView={prefersReducedMotion ? undefined : "visible"}
        viewport={{ once: true, margin: "-60px" }}
      >
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#4a3160]">
          Colección
        </p>
        <h2 className="font-display text-3xl tracking-tight text-[#2c2c2c] sm:text-4xl md:text-5xl">
          Piezas que{" "}
          <span className="italic text-[#4a3160]">enamoran</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#8a8078] sm:text-lg">
          Cada anillo es una obra única, diseñada con materiales nobles y el
          cuidado artesanal que merece vuestra historia.
        </p>
      </motion.div>

      {/* Carousel wrapper with nav buttons */}
      <div className="relative mx-auto max-w-7xl">
        {/* Prev button — hidden on mobile */}
        <button
          type="button"
          aria-label="Ver piezas anteriores"
          onClick={() => scroll("left")}
          className="absolute -left-1 top-1/2 z-20 hidden -translate-y-1/2 md:flex
                     h-11 w-11 items-center justify-center rounded-full
                     bg-[#faf8f5]/70 backdrop-blur-md
                     border border-[#d4b896]/40
                     text-[#4a3160] shadow-sm
                     transition-all duration-200
                     hover:bg-white/90 hover:shadow-md hover:border-[#d4b896]/70
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4a3160]/50 focus-visible:ring-offset-2"
        >
          <ArrowIcon direction="left" />
        </button>

        {/* Next button — hidden on mobile */}
        <button
          type="button"
          aria-label="Ver siguientes piezas"
          onClick={() => scroll("right")}
          className="absolute -right-1 top-1/2 z-20 hidden -translate-y-1/2 md:flex
                     h-11 w-11 items-center justify-center rounded-full
                     bg-[#faf8f5]/70 backdrop-blur-md
                     border border-[#d4b896]/40
                     text-[#4a3160] shadow-sm
                     transition-all duration-200
                     hover:bg-white/90 hover:shadow-md hover:border-[#d4b896]/70
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4a3160]/50 focus-visible:ring-offset-2"
        >
          <ArrowIcon direction="right" />
        </button>

        {/* Scrollable track */}
        <div
          ref={scrollRef}
          className="overflow-x-auto scroll-smooth snap-x snap-mandatory
                     [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <motion.div
            className="flex gap-5 px-[7.5%] lg:px-0"
            variants={prefersReducedMotion ? undefined : cardContainerVariants}
            initial={prefersReducedMotion ? undefined : "hidden"}
            whileInView={prefersReducedMotion ? undefined : "visible"}
            viewport={{ once: true, margin: "-60px" }}
          >
            {pieces.map((piece) => (
              <motion.div
                key={piece.id}
                tabIndex={0}
                variants={prefersReducedMotion ? undefined : cardVariants}
                className="w-[85%] flex-shrink-0 snap-center
                           md:w-[calc((100%-1.25rem*1)/2)]
                           lg:w-[calc((100%-1.25rem*2)/3)]
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4a3160]/50 focus-visible:ring-offset-2
                           rounded-2xl overflow-hidden transition-all duration-300
                           hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Gradient border wrapper */}
                <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#d4b896]/60 via-[#4a3160]/20 to-[#d4b896]/40 p-[1px]">
                  {/* Glass card */}
                  <div className="rounded-[calc(1rem-1px)] bg-[#faf8f5]/70 backdrop-blur-md overflow-hidden">
                    <div className="aspect-[4/5] w-full overflow-hidden rounded-t-[calc(1rem-1px)]">
                      <img
                        src={piece.src}
                        alt={piece.title}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="px-5 py-4">
                      <h3 className="text-base font-medium text-[#2c2c2c]">
                        {piece.title}
                      </h3>
                      <p className="mt-1 text-sm text-[#8a8078]">
                        {piece.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
