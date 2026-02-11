"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

const previewVariants = {
  initial: { opacity: 0, y: 12, filter: "blur(6px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -12, filter: "blur(6px)", transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
};

export default function GemCuts() {
  const [activeId, setActiveId] = useState(cuts[0].id);
  const active = cuts.find((c) => c.id === activeId)!;

  return (
    <section
      role="region"
      aria-label="Cortes de diamante disponibles"
      className="overflow-hidden bg-[#faf8f5] py-20 px-5"
    >
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center mb-12">
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
      </div>

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
                onClick={() => setActiveId(cut.id)}
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
      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          id={`panel-${active.id}`}
          role="tabpanel"
          aria-label={`Corte ${active.label}`}
          variants={previewVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="mx-auto max-w-5xl"
        >
          <div className="grid gap-6 md:grid-cols-2 md:gap-10 items-center">
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
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
