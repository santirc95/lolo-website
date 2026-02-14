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
    video: "/videos/styles/side-stones.mp4",
    description:
      "Piedras laterales que enmarcan el diamante central, aportando simetría y un brillo envolvente. Un diseño que eleva la presencia del anillo sin restarle elegancia.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

const sectionRevealVariants = {
  hidden: { opacity: 0, y: 12, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease },
  },
};

const panelVariants = {
  initial: { opacity: 0, y: 12, filter: "blur(4px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.4, ease },
  },
  exit: {
    opacity: 0,
    y: -12,
    filter: "blur(4px)",
    transition: { duration: 0.35, ease },
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
    <motion.section
      id="estilos"
      role="region"
      aria-label="Estilos de anillo de compromiso"
      className="overflow-hidden bg-[#faf8f5] px-5 py-20 md:py-28"
      variants={prefersReducedMotion ? undefined : sectionRevealVariants}
      initial={prefersReducedMotion ? undefined : "hidden"}
      whileInView={prefersReducedMotion ? undefined : "visible"}
      viewport={{ once: true, margin: "-60px" }}
    >
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center mb-12">
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
      </div>

      {/* Mobile: pills selector (visible < md) — wrapped, no scroll */}
      <div className="md:hidden mx-auto max-w-4xl mb-8">
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
                className={`whitespace-nowrap rounded-full px-3 py-2 text-xs font-medium
                           transition-all duration-300
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4a3160]/50 focus-visible:ring-offset-2
                           ${
                             isActive
                               ? "bg-[#4a3160] text-white shadow-md"
                               : "bg-white/60 text-[#8a8078] border border-[#d4b896]/30 hover:bg-white hover:text-[#2c2c2c] hover:border-[#d4b896]/60"
                           }`}
              >
                {style.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main layout */}
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:gap-10 md:items-stretch">
          {/* Video panel — full width mobile, ~63% desktop */}
          <div className="md:w-[63%] flex-shrink-0">
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
              >
                {/* Glass border wrapper */}
                <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#d4b896]/60 via-[#4a3160]/20 to-[#d4b896]/40 p-[1px]">
                  <div className="rounded-[calc(1rem-1px)] bg-[#faf8f5]/70 backdrop-blur-md overflow-hidden">
                    <div className="aspect-[5/7] md:aspect-[16/10] w-full overflow-hidden rounded-[calc(1rem-1px)]">
                      <video
                        key={active.video}
                        src={active.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full object-cover"
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
          <div
            className="hidden md:flex flex-col gap-3 flex-1 justify-center"
            role="tablist"
            aria-label="Selecciona un estilo de anillo"
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
                  className={`group relative w-full text-left rounded-2xl overflow-hidden transition-all duration-300
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4a3160]/50 focus-visible:ring-offset-2
                             ${
                               isActive
                                 ? "bg-gradient-to-br from-[#d4b896]/60 via-[#4a3160]/20 to-[#d4b896]/40 p-[1px] shadow-md"
                                 : "p-[1px] bg-[#d4b896]/20 hover:bg-[#d4b896]/40"
                             }`}
                >
                  <div
                    className={`rounded-[calc(1rem-1px)] px-6 py-5 transition-colors duration-300
                               ${
                                 isActive
                                   ? "bg-[#faf8f5]/80 backdrop-blur-md"
                                   : "bg-[#faf8f5]/50 backdrop-blur-sm hover:bg-[#faf8f5]/70"
                               }`}
                  >
                    {/* Active indicator bar — animated with Framer Motion */}
                    <motion.div
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] rounded-full bg-[#4a3160]"
                      initial={false}
                      animate={{
                        height: isActive ? 32 : 0,
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, ease }}
                    />

                    <h3
                      className={`font-display text-lg tracking-tight transition-colors duration-300
                                 ${
                                   isActive
                                     ? "text-[#4a3160]"
                                     : "text-[#2c2c2c] group-hover:text-[#4a3160]"
                                 }`}
                    >
                      {style.name}
                    </h3>
                    <p
                      className={`mt-1.5 text-sm leading-relaxed transition-colors duration-300
                                 ${
                                   isActive
                                     ? "text-[#8a8078]"
                                     : "text-[#8a8078]/70"
                                 }`}
                    >
                      {style.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
