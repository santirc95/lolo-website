"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const STYLES = [
  {
    id: "solitario",
    name: "Solitario",
    video: "/videos/styles/solitario.mp4",
    description:
      "La elegancia en su forma más pura. Un único diamante protagonista sobre una banda refinada que deja todo el protagonismo a la piedra y a su brillo.",
  },
  {
    id: "halo",
    name: "Halo",
    video: "/videos/styles/halo.mp4",
    description:
      "Un cerco de micro-diamantes abraza la piedra central, amplificando su tamaño y destello. Ideal para quien busca máxima presencia sin comprometer la elegancia.",
  },
  {
    id: "trilogia",
    name: "Trilogía",
    video: "/videos/styles/trilogia.mp4",
    description:
      "Tres piedras que representan pasado, presente y futuro. Un diseño cargado de significado con un equilibrio visual perfecto entre brillo y simetría.",
  },
  {
    id: "pave",
    name: "Pavé",
    video: "/videos/styles/pave.mp4",
    description:
      "Micro-diamantes engastados a lo largo de la banda crean un camino de luz continuo. Sofisticado y moderno, envuelve tu mano en un brillo sutil pero constante.",
  },
  {
    id: "side-stones",
    name: "Side Stones",
    video: "/videos/styles/sidestones.mp4",
    description:
      "Piedras laterales que enmarcan el diamante central, aportando simetría y un brillo envolvente. Un diseño que eleva la presencia del anillo sin restarle elegancia.",
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

const contentRevealVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.0, ease: EASE_LUXURY, delay: 0.2 },
  },
};

const panelVariants = {
  initial: { opacity: 0, y: 12, filter: "blur(4px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.4, ease: EASE_LUXURY },
  },
  exit: {
    opacity: 0,
    y: -12,
    filter: "blur(4px)",
    transition: { duration: 0.35, ease: EASE_LUXURY },
  },
};

const panelStaticVariants = {
  initial: { opacity: 1 },
  animate: { opacity: 1 },
  exit: { opacity: 1 },
};

export default function Styles() {
  const [activeId, setActiveId] = useState(STYLES[0].id);
  const active = STYLES.find((s) => s.id === activeId)!;
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="estilos"
      role="region"
      aria-label="Estilos de anillo de compromiso"
      className="overflow-x-clip bg-[#faf8f5] px-5 py-20 md:py-28"
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
          Estilos
        </p>
        <h2 className="font-display text-3xl tracking-tight text-[#2c2c2c] sm:text-4xl md:text-5xl">
          Encuentra tu{" "}
          <span className="italic text-[#4a3160]">estilo</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#8a8078] sm:text-lg">
          Cada diseño tiene su propia personalidad. Explora los estilos más
          populares y cuéntanos cuál va contigo.
        </p>
      </motion.div>

      {/* Content — revealed after header */}
      <motion.div
        variants={prefersReducedMotion ? undefined : contentRevealVariants}
        initial={prefersReducedMotion ? undefined : "hidden"}
        whileInView={prefersReducedMotion ? undefined : "visible"}
        viewport={viewportConfig}
      >
      {/* Mobile: sticky pills selector (visible < md) */}
      <div className="md:hidden sticky top-20 z-20 -mx-5 px-5 bg-[#faf8f5]/90 backdrop-blur-md py-3 mb-8">
        <div className="mx-auto max-w-4xl">
          <div
            role="tablist"
            aria-label="Selecciona un estilo de anillo"
            className="flex flex-wrap justify-center gap-2 px-1"
          >
            {STYLES.map((style) => {
              const isActive = style.id === activeId;
              return (
                <button
                  key={style.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${style.id}`}
                  onClick={() => setActiveId(style.id)}
                  className={`pill-liquid whitespace-nowrap px-3 py-2 text-xs
                             ${isActive ? "pill-liquid--active" : "pill-liquid--idle"}`}
                >
                  {style.name}
                </button>
              );
            })}
          </div>
          {/* Divider — content-width, mobile only */}
          <div className="mt-3 h-px w-full bg-gradient-to-r from-transparent via-[#d4b896]/25 to-transparent" />
        </div>
      </div>

      {/* Main layout */}
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:gap-10 md:items-stretch md:h-[clamp(520px,62vh,680px)]">
          {/* Video panel — full width mobile, ~63% desktop */}
          <div className="md:w-[63%] flex-shrink-0 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                id={`panel-${active.id}`}
                role="tabpanel"
                aria-label={`Estilo ${active.name}`}
                variants={prefersReducedMotion ? panelStaticVariants : panelVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="max-w-[420px] mx-auto md:max-w-none md:mx-0 md:flex-1 md:min-h-0"
              >
                {/* Glass border wrapper */}
                <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#d4b896]/60 via-[#4a3160]/20 to-[#d4b896]/40 p-[1px] md:h-full">
                  <div className="rounded-[calc(1rem-1px)] bg-[#faf8f5]/70 backdrop-blur-md overflow-hidden md:h-full p-2">
                    <div className="aspect-[3/4] md:aspect-auto w-full overflow-hidden rounded-[calc(1rem-1px)] md:rounded-xl md:h-full">
                      <video
                        src={active.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Description — mobile only */}
                <div className="mt-5 md:hidden">
                  <h3 className="text-2xl font-display tracking-tight text-[#2c2c2c] mb-2">
                    Estilo{" "}
                    <span className="italic text-[#4a3160]">
                      {active.name}
                    </span>
                  </h3>
                  <p className="text-base leading-relaxed text-[#8a8078]">
                    {active.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Desktop vertical selector (hidden < md) */}
          <div className="hidden md:flex md:flex-col md:flex-1 md:min-h-0 relative">
            {/* OSMO top fade mask */}
            <div className="pointer-events-none absolute top-0 left-0 right-0 h-6 z-10 bg-gradient-to-b from-[#faf8f5] to-transparent" />
            {/* OSMO bottom fade mask */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-6 z-10 bg-gradient-to-t from-[#faf8f5] to-transparent" />

            {/* Scrollable card list */}
            <div
              className="flex flex-col gap-2 flex-1 min-h-0 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-6 pr-1"
              role="tablist"
              aria-label="Selecciona un estilo de anillo"
            >
              {STYLES.map((style) => {
                const isActive = style.id === activeId;
                return (
                  <motion.div
                    key={style.id}
                    layout
                    transition={{ layout: { duration: 0.35, ease: EASE_LUXURY } }}
                    role="tab"
                    tabIndex={0}
                    aria-selected={isActive}
                    aria-controls={`panel-${style.id}`}
                    onClick={() => setActiveId(style.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveId(style.id);
                      }
                    }}
                    className={`group relative w-full text-left rounded-2xl cursor-pointer
                               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4a3160]/50 focus-visible:ring-offset-2
                               ${
                                 isActive
                                   ? "bg-gradient-to-br from-[#d4b896]/60 via-[#4a3160]/20 to-[#d4b896]/40 p-[1px] shadow-lg shadow-[#4a3160]/10"
                                   : "p-[1px] bg-[#d4b896]/20 hover:bg-[#d4b896]/40"
                               }`}
                  >
                    <div
                      className={`rounded-[calc(1rem-1px)] px-5 transition-colors duration-300
                                 ${
                                   isActive
                                     ? "py-5 bg-[#faf8f5]/80 backdrop-blur-md"
                                     : "py-3.5 bg-[#faf8f5]/50 backdrop-blur-sm hover:bg-[#faf8f5]/70"
                                 }`}
                    >
                      {/* Active indicator bar — animated with Framer Motion */}
                      <motion.div
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] rounded-full bg-[#4a3160]"
                        initial={false}
                        animate={{
                          height: isActive ? 28 : 0,
                          opacity: isActive ? 1 : 0,
                        }}
                        transition={{ duration: 0.3, ease: EASE_LUXURY }}
                      />

                      <h3
                        className={`font-display text-base tracking-tight transition-colors duration-300
                                   ${
                                     isActive
                                       ? "text-[#4a3160]"
                                       : "text-[#2c2c2c] group-hover:text-[#4a3160]"
                                   }`}
                      >
                        {style.name}
                      </h3>
                      <p
                        className={`mt-1 text-sm leading-snug min-w-0 break-words transition-colors duration-300
                                   ${isActive ? "whitespace-normal" : "line-clamp-2"}
                                   ${
                                     isActive
                                       ? "text-[#8a8078]"
                                       : "text-[#8a8078]/70"
                                   }`}
                      >
                        {style.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      </motion.div>
    </section>
  );
}
