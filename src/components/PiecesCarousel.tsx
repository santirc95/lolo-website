"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const pieces = [
  { id: 1, src: "/images/collection/01.webp", title: "Pieza destacada", subtitle: "Joyería fina personalizada", alt: "Anillo de compromiso con diamante diseñado por LOLŌ — Pieza 01" },
  { id: 2, src: "/images/collection/02.webp", title: "Pieza destacada", subtitle: "Joyería fina personalizada", alt: "Anillo de compromiso con diamante diseñado por LOLŌ — Pieza 02" },
  { id: 3, src: "/images/collection/03.webp", title: "Pieza destacada", subtitle: "Joyería fina personalizada", alt: "Anillo de compromiso con diamante diseñado por LOLŌ — Pieza 03" },
  { id: 4, src: "/images/collection/04.webp", title: "Pieza destacada", subtitle: "Joyería fina personalizada", alt: "Anillo de compromiso con diamante diseñado por LOLŌ — Pieza 04" },
  { id: 5, src: "/images/collection/05.webp", title: "Pieza destacada", subtitle: "Joyería fina personalizada", alt: "Anillo de compromiso con diamante diseñado por LOLŌ — Pieza 05" },
  { id: 6, src: "/images/collection/06.webp", title: "Pieza destacada", subtitle: "Joyería fina personalizada", alt: "Anillo de compromiso con diamante diseñado por LOLŌ — Pieza 06" },
  { id: 7, src: "/images/collection/07.webp", title: "Pieza destacada", subtitle: "Joyería fina personalizada", alt: "Anillo de compromiso con diamante diseñado por LOLŌ — Pieza 07" },
  { id: 8, src: "/images/collection/08.webp", title: "Pieza destacada", subtitle: "Joyería fina personalizada", alt: "Anillo de compromiso con diamante diseñado por LOLŌ — Pieza 08" },
  { id: 9, src: "/images/collection/09.webp", title: "Pieza destacada", subtitle: "Joyería fina personalizada", alt: "Anillo de compromiso con diamante diseñado por LOLŌ — Pieza 09" },
  { id: 10, src: "/images/collection/10.webp", title: "Pieza destacada", subtitle: "Joyería fina personalizada", alt: "Anillo de compromiso con diamante diseñado por LOLŌ — Pieza 10" },
  { id: 11, src: "/images/collection/11.webp", title: "Pieza destacada", subtitle: "Joyería fina personalizada", alt: "Anillo de compromiso con diamante diseñado por LOLŌ — Pieza 11" },
  { id: 12, src: "/images/collection/12.webp", title: "Pieza destacada", subtitle: "Joyería fina personalizada", alt: "Anillo de compromiso con diamante diseñado por LOLŌ — Pieza 12" },
  { id: 13, src: "/images/collection/13.webp", title: "Pieza destacada", subtitle: "Joyería fina personalizada", alt: "Anillo de compromiso con diamante diseñado por LOLŌ — Pieza 13" },
  { id: 14, src: "/images/collection/14.webp", title: "Pieza destacada", subtitle: "Joyería fina personalizada", alt: "Anillo de compromiso con diamante diseñado por LOLŌ — Pieza 14" },
  { id: 15, src: "/images/collection/15.webp", title: "Pieza destacada", subtitle: "Joyería fina personalizada", alt: "Anillo de compromiso con diamante diseñado por LOLŌ — Pieza 15" },
  { id: 16, src: "/images/collection/16.webp", title: "Pieza destacada", subtitle: "Joyería fina personalizada", alt: "Anillo de compromiso con diamante diseñado por LOLŌ — Pieza 16" },
  { id: 17, src: "/images/collection/17.webp", title: "Pieza destacada", subtitle: "Joyería fina personalizada", alt: "Anillo de compromiso con diamante diseñado por LOLŌ — Pieza 17" },
];

const ease = [0.22, 1, 0.36, 1] as const;

const headerVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
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
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 1);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

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
      className="overflow-x-clip bg-[#faf8f5] py-20 px-5"
    >
      {/* Header */}
      <motion.div
        className="mx-auto max-w-3xl text-center mb-12"
        variants={prefersReducedMotion ? undefined : headerVariants}
        initial={prefersReducedMotion ? undefined : "hidden"}
        whileInView={prefersReducedMotion ? undefined : "visible"}
        viewport={{ once: true, margin: "-60px" }}
      >
        <span className="mb-3 block text-sm uppercase tracking-[0.3em] text-[#4a3160]">
          Colección
        </span>
        <h2 className="font-display text-3xl tracking-tight text-[#2c2c2c] sm:text-4xl md:text-5xl">
          Piezas que{" "}
          <span className="italic text-[#4a3160]">enamoran</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#736b65] sm:text-lg">
          Cada anillo es una obra única, diseñada con materiales nobles y el
          cuidado artesanal que merece vuestra historia.
        </p>
      </motion.div>

      {/* Carousel wrapper with nav buttons */}
      <div className="relative mx-auto max-w-6xl">
        {/* Prev button — only on desktop, hidden when at start */}
        {canScrollLeft && (
          <button
            type="button"
            aria-label="Ver piezas anteriores"
            onClick={() => scroll("left")}
            className="pill-liquid pill-liquid--idle absolute -left-1 top-1/2 z-20 hidden -translate-y-1/2 md:flex
                       h-11 w-11 text-[#4a3160]"
          >
            <ArrowIcon direction="left" />
          </button>
        )}

        {/* Next button — only on desktop, hidden when at end */}
        {canScrollRight && (
          <button
            type="button"
            aria-label="Ver siguientes piezas"
            onClick={() => scroll("right")}
            className="pill-liquid pill-liquid--idle absolute -right-1 top-1/2 z-20 hidden -translate-y-1/2 md:flex
                       h-11 w-11 text-[#4a3160]"
          >
            <ArrowIcon direction="right" />
          </button>
        )}

        {/* Scrollable track — py-3/-my-3 gives room for hover shadow inside scroll container */}
        <div
          ref={scrollRef}
          className="-my-3 py-3 overflow-x-auto scroll-smooth snap-x snap-mandatory
                     [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex gap-5 px-[7.5%] lg:px-0">
            {pieces.map((piece) => (
              <div
                key={piece.id}
                tabIndex={0}
                className="w-[85%] flex-shrink-0 snap-center
                           md:w-[calc((100%-1.25rem*1)/2)]
                           lg:w-[calc((100%-1.25rem*2)/3)]
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4a3160]/50 focus-visible:ring-offset-2
                           rounded-2xl transition-shadow duration-300
                           md:hover:shadow-lg"
              >
                {/* Gradient border wrapper */}
                <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#d4b896]/60 via-[#4a3160]/20 to-[#d4b896]/40 p-[1px]">
                  {/* Glass card */}
                  <div className="rounded-[calc(1rem-1px)] bg-[#faf8f5]/70 backdrop-blur-md overflow-hidden">
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-[calc(1rem-1px)] bg-[#ece5db]">
                      <Image
                        src={piece.src}
                        alt={piece.alt}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 85vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="px-5 py-4">
                      <h3 className="text-base font-medium text-[#2c2c2c]">
                        {piece.title}
                      </h3>
                      <p className="mt-1 text-sm text-[#736b65]">
                        {piece.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-4 text-center text-xs tracking-wide text-[#736b65] md:hidden">
        Desliza &rarr;
      </p>

      {/* Mobile-only scroll-down indicator */}
      <motion.div
        className="mt-8 flex flex-col items-center gap-1 md:hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease }}
      >
        <span className="text-xs tracking-wide text-neutral-400/70">
          Explora los estilos de anillo
        </span>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-neutral-400/60"
          animate={prefersReducedMotion ? undefined : { y: [0, 4, 0] }}
          transition={
            prefersReducedMotion
              ? undefined
              : { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <path d="m6 9 6 6 6-6" />
        </motion.svg>
      </motion.div>
    </section>
  );
}
