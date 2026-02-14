"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const cuts = [
  {
    id: "round",
    label: "Round",
    cutImage: "/images/cuts/round-cut.png",
    handImage: "/images/cuts/round-hand.jpg",
    description:
      "El corte más clásico y brillante. Sus 57 facetas maximizan el destello desde cualquier ángulo, ideal para quien busca un anillo atemporal que nunca pase de moda.",
  },
  {
    id: "oval",
    label: "Oval",
    cutImage: "/images/cuts/oval-cut.png",
    handImage: "/images/cuts/oval-hand.jpg",
    description:
      "Elegante y alargado, el óvalo estiliza la mano y aparenta mayor tamaño que un round del mismo quilataje. Perfecto para un look sofisticado y moderno.",
  },
  {
    id: "emerald",
    label: "Emerald",
    cutImage: "/images/cuts/emerald-cut.png",
    handImage: "/images/cuts/emerald-hand.jpg",
    description:
      "Facetas escalonadas que crean un efecto de \"sala de espejos\". Transmite serenidad art-déco y destaca por su claridad. Ideal si prefieres brillo sutil sobre destello intenso.",
  },
  {
    id: "princess",
    label: "Princess",
    cutImage: "/images/cuts/princess-cut.png",
    handImage: "/images/cuts/princess-hand.jpg",
    description:
      "Cuadrado con esquinas vivas y brillo comparable al round. Ofrece un aspecto contemporáneo y geométrico que combina con monturas minimalistas y modernas.",
  },
  {
    id: "radiant",
    label: "Radiant",
    cutImage: "/images/cuts/radiant-cut.png",
    handImage: "/images/cuts/radiant-hand.jpg",
    description:
      "Combina la silueta rectangular del emerald con la intensidad del round. Sus esquinas recortadas lo hacen resistente y cómodo para uso diario.",
  },
  {
    id: "cushion",
    label: "Cushion",
    cutImage: "/images/cuts/cushion-cut.png",
    handImage: "/images/cuts/cushion-hand.jpg",
    description:
      "Bordes suaves y redondeados con un brillo cálido y romántico. Evoca un aire vintage que se adapta tanto a monturas halo como a solitarios clásicos.",
  },
  {
    id: "pear",
    label: "Pear",
    cutImage: "/images/cuts/pear-cut.png",
    handImage: "/images/cuts/pear-hand.jpg",
    description:
      "Mezcla de round y marquise con una punta delicada. Alarga visualmente el dedo y ofrece un estilo único que destaca entre los cortes más tradicionales.",
  },
  {
    id: "marquise",
    label: "Marquise",
    cutImage: "/images/cuts/marquise-cut.png",
    handImage: "/images/cuts/marquise-hand.jpg",
    description:
      "Su forma de naveta maximiza la superficie visible del diamante, creando un efecto dramático en la mano. Ideal para quien busca presencia y originalidad.",
  },
];

const EASE_LUXURY: [number, number, number, number] = [0.22, 1, 0.36, 1];

const viewportConfig = { once: true, amount: 0.35, margin: "0px 0px -15% 0px" as const };

const headerRevealVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.0, ease: EASE_LUXURY },
  },
};

const contentRevealDesktop = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.0, ease: EASE_LUXURY, delay: 0.2 },
  },
};

const contentRevealMobile = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: EASE_LUXURY },
  },
};

const previewVariants = {
  initial: { opacity: 0, y: 12, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.4, ease: EASE_LUXURY } },
  exit: { opacity: 0, y: -12, filter: "blur(4px)", transition: { duration: 0.35, ease: EASE_LUXURY } },
};

const previewStaticVariants = {
  initial: { opacity: 1 },
  animate: { opacity: 1 },
  exit: { opacity: 1 },
};

export default function GemCuts() {
  const [activeId, setActiveId] = useState(cuts[0].id);
  const active = cuts.find((c) => c.id === activeId)!;
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const [wipeKey, setWipeKey] = useState(0);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    setIsMobile(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  const contentVariants = prefersReducedMotion
    ? undefined
    : isMobile
      ? contentRevealMobile
      : contentRevealDesktop;

  function handleCutChange(id: string) {
    setActiveId(id);
    setWipeKey((k) => k + 1);
  }

  return (
    <section
      role="region"
      aria-label="Cortes de diamante disponibles"
      className="overflow-hidden bg-[#faf8f5] py-20 px-5"
    >
      {/* Header */}
      <motion.div
        className="mx-auto max-w-3xl text-center mb-12"
        variants={prefersReducedMotion ? undefined : headerRevealVariants}
        initial={prefersReducedMotion ? undefined : "hidden"}
        whileInView={prefersReducedMotion ? undefined : "visible"}
        viewport={viewportConfig}
      >
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#4a3160]">
          Cortes
        </p>
        <h2 className="font-display text-3xl tracking-tight text-[#2c2c2c] sm:text-4xl md:text-5xl">
          Encuentra tu{" "}
          <span className="italic text-[#4a3160]">corte ideal</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#8a8078] sm:text-lg">
          Cada forma refleja la luz de manera distinta y transforma el carácter
          de tu anillo. Explora los cortes y descubre cuál va contigo.
        </p>
      </motion.div>

      {/* Tabs + Panel */}
      <motion.div
        variants={contentVariants}
        initial={prefersReducedMotion ? undefined : "hidden"}
        whileInView={prefersReducedMotion ? undefined : "visible"}
        viewport={viewportConfig}
      >
        {/* Tabs — horizontally scrollable on mobile */}
        <div
          className="mx-auto max-w-4xl mb-10 overflow-x-auto
                     [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <div
            role="tablist"
            aria-label="Selecciona un corte de diamante"
            className="flex gap-2 px-1 min-w-max mx-auto w-fit"
          >
            {cuts.map((cut) => {
              const isActive = cut.id === activeId;
              return (
                <button
                  key={cut.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${cut.id}`}
                  onClick={() => handleCutChange(cut.id)}
                  className={`relative whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium
                             transition-all duration-300
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4a3160]/50 focus-visible:ring-offset-2
                             ${
                               isActive
                                 ? "bg-[#2c2c2c] text-white shadow-md"
                                 : "bg-white/60 text-[#8a8078] border border-[#d4b896]/30 hover:bg-white hover:text-[#2c2c2c] hover:border-[#d4b896]/60"
                             }`}
                >
                  {cut.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Preview panel */}
        <div
          id={`panel-${active.id}`}
          role="tabpanel"
          aria-label={`Corte ${active.label}`}
          className="mx-auto max-w-5xl"
        >
          {/* Mobile: unified card with curtain wipe */}
          <div className="md:hidden">
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#d4b896]/60 via-[#4a3160]/20 to-[#d4b896]/40 p-[1px]">
              <div className="rounded-[calc(1rem-1px)] bg-[#faf8f5]/70 backdrop-blur-md overflow-hidden">
                {/* Cut image — always on top, updates instantly */}
                <div className="flex items-center justify-center bg-white/40 py-6">
                  <img
                    src={active.cutImage}
                    alt={`Diamante corte ${active.label}`}
                    className="h-40 w-40 object-contain"
                  />
                </div>

                {/* Hand + title + description — base layer with curtain overlay */}
                <div className="relative overflow-hidden">
                  {/* Base content — always in DOM */}
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={active.handImage}
                      alt={`Corte ${active.label} en mano`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-display tracking-tight text-[#2c2c2c] mb-3">
                      Corte{" "}
                      <span className="italic text-[#4a3160]">{active.label}</span>
                    </h3>
                    <p className="text-base leading-relaxed text-[#8a8078]">
                      {active.description}
                    </p>
                  </div>

                  {/* Curtain overlay — wipe reveal on tab change only */}
                  {!prefersReducedMotion && wipeKey > 0 && (
                    <motion.div
                      key={wipeKey}
                      initial={{ scaleY: 1 }}
                      animate={{ scaleY: 0 }}
                      transition={{ duration: 0.28, ease: EASE_LUXURY }}
                      style={{ transformOrigin: "bottom" }}
                      className="absolute inset-0 bg-[#faf8f5]"
                      aria-hidden="true"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop: 2-column grid — unchanged */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              variants={prefersReducedMotion ? previewStaticVariants : previewVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="hidden md:grid md:grid-cols-2 md:gap-10 items-center"
            >
              {/* Cut image */}
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#d4b896]/60 via-[#4a3160]/20 to-[#d4b896]/40 p-[1px]">
                <div className="rounded-[calc(1rem-1px)] bg-[#faf8f5]/70 backdrop-blur-md overflow-hidden">
                  <div className="aspect-square w-full overflow-hidden rounded-[calc(1rem-1px)] flex items-center justify-center bg-white/40">
                    <img
                      src={active.cutImage}
                      alt={`Diamante corte ${active.label}`}
                      className="h-3/4 w-3/4 object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Info + hand image */}
              <div className="flex flex-col gap-6">
                <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#d4b896]/60 via-[#4a3160]/20 to-[#d4b896]/40 p-[1px]">
                  <div className="rounded-[calc(1rem-1px)] bg-[#faf8f5]/70 backdrop-blur-md overflow-hidden">
                    <div className="aspect-[4/3] w-full overflow-hidden rounded-t-[calc(1rem-1px)]">
                      <img
                        src={active.handImage}
                        alt={`Corte ${active.label} en mano`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-display tracking-tight text-[#2c2c2c] mb-3">
                    Corte{" "}
                    <span className="italic text-[#4a3160]">{active.label}</span>
                  </h3>
                  <p className="text-base leading-relaxed text-[#8a8078]">
                    {active.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
