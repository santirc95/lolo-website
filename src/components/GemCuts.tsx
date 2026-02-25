"use client";

import { useState, useEffect, useLayoutEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";

const cuts = [
  {
    id: "round",
    label: "Round",
    cutImage: "/images/cuts/round-cut.png",
    handImage: "/images/cuts/round-hand.png",
    description:
      "El corte más clásico y brillante. Sus 58 facetas maximizan el destello desde cualquier ángulo, ideal para quien busca un anillo atemporal que nunca pase de moda.",
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
  {
    id: "asscher",
    label: "Asscher",
    cutImage: "/images/cuts/asscher-cut.png",
    handImage: "/images/cuts/asscher-hand.png",
    description:
      "Un cuadrado de facetas escalonadas con esquinas recortadas que irradia simetría art-déco. Su brillo profundo y geométrico lo convierte en una elección única para quien valora el detalle y la distinción.",
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
  const curtainAnimRef = useRef<ReturnType<typeof animate> | null>(null);
  const prevHandImageRef = useRef(active.handImage);

  // Motion values for curtain progress tracking (mobile)
  const curtainY = useMotionValue(0);
  const curtainYPercent = useTransform(curtainY, (v) => `${v}%`);

  // Drive curtain animation — useLayoutEffect fires before paint,
  // so the reset + animation start happen in the same frame (no glitch)
  useLayoutEffect(() => {
    if (!prefersReducedMotion && hasEntered && wipeKey > 0) {
      curtainAnimRef.current?.stop();
      curtainY.set(0);
      curtainAnimRef.current = animate(curtainY, -105, {
        duration: 1.35,
        ease: [0.65, 0, 0.35, 1],
      });

    }
  }, [wipeKey, hasEntered, prefersReducedMotion, curtainY]);

  useEffect(() => {
    if (isInView && !hasEntered) {
      setHasEntered(true);
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
    prevHandImageRef.current = active.handImage;
    setActiveId(id);
    curtainAnimRef.current?.stop();
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
          className="mx-auto max-w-[400px] md:max-w-4xl mb-6 md:mb-10
                     sticky top-20 z-20 bg-[#faf8f5]/90 backdrop-blur-md py-3
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
                             text-[13px] px-3.5 py-2 md:text-sm md:px-5 md:py-2.5
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
            <div className="w-full max-w-[400px] mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-[#d4b896]/60 via-[#4a3160]/20 to-[#d4b896]/40 p-[1px]">
              <div className="relative flex flex-col rounded-[calc(1rem-1px)] bg-[#faf8f5]/70 backdrop-blur-md overflow-hidden">
                {/* Visual area — image + curtain locked to 2:3 */}
                <div className="relative aspect-[4/5] w-full overflow-hidden shrink-0">
                  {/* New hand image — revealed as curtain lifts */}
                  <img
                    src={active.handImage}
                    alt={`Corte ${active.label} en mano`}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  {/* Top wash */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#faf8f5]/70 via-transparent to-transparent pointer-events-none" />

                  {/* Curtain — translucent overlay with prev image + new diamond */}
                  {!prefersReducedMotion && hasEntered && wipeKey > 0 && (
                    <motion.div
                      style={{ y: curtainYPercent }}
                      className="absolute inset-0 z-10 pointer-events-none overflow-hidden"
                      aria-hidden="true"
                    >
                      {/* Previous hand image — visible through frosted glass */}
                      <img
                        src={prevHandImageRef.current}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                      {/* Frosted translucent overlay */}
                      <div className="absolute inset-0 bg-[#faf8f5]/40 backdrop-blur-[2px]" />
                      {/* New cut diamond — fades in during curtain's slow start */}
                      <motion.div
                        key={active.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.35, ease: EASE_LUXURY }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <img
                          src={active.cutImage}
                          alt=""
                          className="h-40 w-40 object-contain drop-shadow-lg"
                        />
                      </motion.div>

                      {/* Curtain fold — curved fabric edge */}
                      <div
                        className="absolute left-1/2 -translate-x-1/2 bottom-[-18px] w-[140%] h-[42px] rounded-[999px] blur-md opacity-70 pointer-events-none"
                        style={{
                          background:
                            "radial-gradient(closest-side, rgba(243,227,201,0.85), rgba(243,227,201,0.35), transparent 70%)",
                        }}
                      />
                      {/* Highlight line inside fold */}
                      <div
                        className="absolute left-1/2 -translate-x-1/2 bottom-[-6px] w-[110%] h-[2px] opacity-60 pointer-events-none"
                        style={{
                          background:
                            "linear-gradient(90deg, transparent, rgba(212,184,150,0.75), rgba(124,58,237,0.25), transparent)",
                        }}
                      />

                      {/* Highlight line — bottom edge */}
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
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={active.id}
                          src={active.cutImage}
                          alt={`Diamante corte ${active.label}`}
                          className="h-16 w-16 object-contain"
                          initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.85 }}
                          animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
                          exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.85 }}
                          transition={{ duration: 0.45, ease: EASE_LUXURY }}
                        />
                      </AnimatePresence>
                    </div>
                  </div>
                  {/* Specular highlight */}
                  <div className="absolute inset-[1px] rounded-xl pointer-events-none overflow-hidden">
                    <div className="absolute -top-1/4 -left-1/4 w-3/4 h-3/4 rounded-full bg-white/20 blur-sm" />
                  </div>
                </div>

                {/* Text body — fade in with badge */}
                <div className="px-5 pt-4 pb-5">
                  <AnimatePresence mode="popLayout">
                    <motion.div
                      key={active.id}
                      layout
                      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 6, filter: "blur(2px)" }}
                      animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={prefersReducedMotion ? undefined : { opacity: 0, y: -6, filter: "blur(2px)" }}
                      transition={{ duration: 0.65, ease: EASE_LUXURY }}
                    >
                      <h3 className="text-2xl font-display tracking-tight text-[#2c2c2c] mb-2">
                        Corte{" "}
                        <span className="italic text-[#4a3160]">{active.label}</span>
                      </h3>
                      <p className="text-base leading-relaxed text-[#8a8078]">
                        {active.description}
                      </p>
                    </motion.div>
                  </AnimatePresence>
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
