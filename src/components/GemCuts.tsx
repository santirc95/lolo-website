"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion, useInView } from "framer-motion";

const cuts = [
  {
    id: "round",
    label: "Round",
    cutImage: "/images/cuts/round-cut.png",
    handImage: "/images/cuts/round-hand.png",
    description:
      "El corte más clásico y brillante. Sus 57 facetas maximizan el destello desde cualquier ángulo, ideal para quien busca un anillo atemporal que nunca pase de moda.",
  },
  {
    id: "oval",
    label: "Oval",
    cutImage: "/images/cuts/oval-cut.png",
    handImage: "/images/cuts/oval-hand.png",
    description:
      "Elegante y alargado, el óvalo estiliza la mano y aparenta mayor tamaño que un round del mismo quilataje. Perfecto para un look sofisticado y moderno.",
  },
  {
    id: "emerald",
    label: "Emerald",
    cutImage: "/images/cuts/emerald-cut.png",
    handImage: "/images/cuts/emerald-hand.png",
    description:
      "Facetas escalonadas que crean un efecto de \"sala de espejos\". Transmite serenidad art-déco y destaca por su claridad. Ideal si prefieres brillo sutil sobre destello intenso.",
  },
  {
    id: "princess",
    label: "Princess",
    cutImage: "/images/cuts/princess-cut.png",
    handImage: "/images/cuts/princess-hand.png",
    description:
      "Cuadrado con esquinas vivas y brillo comparable al round. Ofrece un aspecto contemporáneo y geométrico que combina con monturas minimalistas y modernas.",
  },
  {
    id: "radiant",
    label: "Radiant",
    cutImage: "/images/cuts/radiant-cut.png",
    handImage: "/images/cuts/radiant-hand.png",
    description:
      "Combina la silueta rectangular del emerald con la intensidad del round. Sus esquinas recortadas lo hacen resistente y cómodo para uso diario.",
  },
  {
    id: "cushion",
    label: "Cushion",
    cutImage: "/images/cuts/cushion-cut.png",
    handImage: "/images/cuts/cushion-hand.png",
    description:
      "Bordes suaves y redondeados con un brillo cálido y romántico. Evoca un aire vintage que se adapta tanto a monturas halo como a solitarios clásicos.",
  },
  {
    id: "pear",
    label: "Pear",
    cutImage: "/images/cuts/pear-cut.png",
    handImage: "/images/cuts/pear-hand.png",
    description:
      "Mezcla de round y marquise con una punta delicada. Alarga visualmente el dedo y ofrece un estilo único que destaca entre los cortes más tradicionales.",
  },
  {
    id: "marquise",
    label: "Marquise",
    cutImage: "/images/cuts/marquise-cut.png",
    handImage: "/images/cuts/marquise-hand.png",
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
  const [hasEntered, setHasEntered] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.35 });

  useEffect(() => {
    if (isInView && !hasEntered) {
      setHasEntered(true);
      setWipeKey((k) => k + 1);
    }
  }, [isInView, hasEntered]);

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
      ref={sectionRef}
      role="region"
      aria-label="Cortes de diamante disponibles"
      className="overflow-clip bg-[#faf8f5] py-20 px-5"
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
        {/* Tabs — wrapped + sticky on mobile, single-row scrollable on desktop */}
        <div
          className="mx-auto max-w-4xl mb-6 md:mb-10
                     sticky top-16 z-20 bg-[#faf8f5]/90 backdrop-blur-md py-3
                     md:static md:z-auto md:bg-transparent md:backdrop-blur-none md:py-0
                     md:overflow-x-auto md:[scrollbar-width:none] md:[&::-webkit-scrollbar]:hidden"
        >
          <div
            role="tablist"
            aria-label="Selecciona un corte de diamante"
            className="flex flex-wrap justify-center gap-1.5 px-1
                       md:flex-nowrap md:gap-2 md:min-w-max md:mx-auto md:w-fit"
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
                  className={`pill-liquid whitespace-nowrap
                             text-xs px-3 py-2 md:text-sm md:px-5 md:py-2.5
                             ${isActive ? "pill-liquid--active" : "pill-liquid--idle"}`}
                >
                  {cut.label}
                </button>
              );
            })}
          </div>
          {/* Divider — content-width, mobile only */}
          <div className="mt-3 h-px w-full bg-gradient-to-r from-transparent via-[#d4b896]/25 to-transparent md:hidden" />
        </div>

        {/* Preview panel */}
        <div
          id={`panel-${active.id}`}
          role="tabpanel"
          aria-label={`Corte ${active.label}`}
          className="mx-auto max-w-5xl"
        >
          {/* Mobile: vertical card — aspect-[2/3] only for visual area, text flows naturally */}
          <div className="md:hidden">
            <div className="w-full max-w-[420px] mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-[#d4b896]/60 via-[#4a3160]/20 to-[#d4b896]/40 p-[1px]">
              <div className="relative flex flex-col rounded-[calc(1rem-1px)] bg-[#faf8f5]/70 backdrop-blur-md overflow-hidden">
                {/* Visual area — image + curtain locked to 2:3 */}
                <div className="relative aspect-[2/3] w-full overflow-hidden shrink-0">
                  {/* Hand image with top wash */}
                  <img
                    src={active.handImage}
                    alt={`Corte ${active.label} en mano`}
                    className="h-full w-full object-cover"
                  />
                  {/* Top wash */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#faf8f5]/70 via-transparent to-transparent pointer-events-none" />

                  {/* Curtain overlay — cutImage slides up slowly to reveal content */}
                  {!prefersReducedMotion && hasEntered && wipeKey > 0 && (
                    <motion.div
                      key={wipeKey}
                      initial={{ y: "0%" }}
                      animate={{ y: "-105%" }}
                      transition={{ duration: 1.35, ease: [0.12, 0.9, 0.18, 1] }}
                      className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center bg-white/35 backdrop-blur-[2px]"
                      aria-hidden="true"
                    >
                      <img
                        src={active.cutImage}
                        alt=""
                        className="h-40 w-40 object-contain drop-shadow-lg"
                      />
                      {/* Highlight line — travels with the curtain edge */}
                      <div
                        className="absolute bottom-0 left-0 right-0 h-[2px] opacity-70 blur-sm"
                        style={{
                          background:
                            "linear-gradient(90deg, transparent, rgba(212,184,150,0.75), rgba(124,58,237,0.25), transparent)",
                        }}
                      />
                    </motion.div>
                  )}
                </div>

                {/* Floating cut badge — overlaps image/text boundary */}
                <div className="relative mx-auto -mt-8 w-fit z-20">
                  <div className="rounded-xl p-[1px] shadow-[0_18px_45px_rgba(0,0,0,0.18)]"
                    style={{ background: "linear-gradient(135deg, rgba(212,184,150,0.8), rgba(74,49,96,0.35), rgba(212,184,150,0.8))" }}>
                    <div className="bg-[#faf8f5]/75 backdrop-blur-md rounded-xl p-2">
                      <img
                        src={active.cutImage}
                        alt={`Diamante corte ${active.label}`}
                        className="h-16 w-16 object-contain"
                      />
                    </div>
                  </div>
                  {/* Specular highlight */}
                  <div className="absolute inset-[1px] rounded-xl pointer-events-none overflow-hidden">
                    <div className="absolute -top-1/4 -left-1/4 w-3/4 h-3/4 rounded-full bg-white/20 blur-sm" />
                  </div>
                </div>

                {/* Text body — flows naturally below the visual area */}
                <div className="px-5 pt-4 pb-5">
                  {prefersReducedMotion ? (
                    <>
                      <h3 className="text-2xl font-display tracking-tight text-[#2c2c2c] mb-2">
                        Corte{" "}
                        <span className="italic text-[#4a3160]">{active.label}</span>
                      </h3>
                      <p className="text-base leading-relaxed text-[#8a8078]">
                        {active.description}
                      </p>
                    </>
                  ) : (
                    <motion.div
                      key={active.id}
                      initial={{ opacity: 0, y: 4, filter: "blur(2px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{ duration: 0.28, ease: [0.12, 0.9, 0.18, 1] }}
                    >
                      <h3 className="text-2xl font-display tracking-tight text-[#2c2c2c] mb-2">
                        Corte{" "}
                        <span className="italic text-[#4a3160]">{active.label}</span>
                      </h3>
                      <p className="text-base leading-relaxed text-[#8a8078]">
                        {active.description}
                      </p>
                    </motion.div>
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
