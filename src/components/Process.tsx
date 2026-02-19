"use client";

import { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getWhatsAppUrl } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    number: "01",
    title: "Conversación inicial",
    description:
      "Nos cuentas tu idea, presupuesto y estilo. Te asesoramos sobre piedras, metales y diseños para que tomes la mejor decisión.",
  },
  {
    number: "02",
    title: "Selección de diamante",
    description:
      "Te ayudamos a elegir el diamante perfecto con certificación GIA o IGI. Transparencia total en calidad y precio.",
  },
  {
    number: "03",
    title: "Diseño personalizado",
    description:
      "Creamos un diseño en 3D exclusivo para ti. Lo revisamos juntos y lo ajustamos hasta que sea exactamente lo que imaginaste.",
  },
  {
    number: "04",
    title: "Creación artesanal",
    description:
      "Tu anillo cobra vida en nuestro taller. Cada detalle es cuidado por artesanos expertos con décadas de experiencia.",
  },
  {
    number: "05",
    title: "Entrega y acompañamiento",
    description:
      "Recibe tu anillo cuidadosamente preparado, con certificado y listo para el momento más importante.",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<HTMLDivElement[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);

  const setStepRef = useCallback((el: HTMLDivElement | null, i: number) => {
    if (el) stepRefs.current[i] = el;
  }, []);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      // Show everything statically
      stepRefs.current.forEach((el) => {
        if (el) {
          el.style.opacity = "1";
          el.style.transform = "none";
          el.style.filter = "none";
        }
      });
      if (lineRef.current) lineRef.current.style.height = "100%";
      if (revealRef.current) revealRef.current.style.opacity = "0";
      if (ctaRef.current) {
        ctaRef.current.style.opacity = "1";
        ctaRef.current.style.transform = "none";
        ctaRef.current.style.filter = "none";
      }
      return;
    }

    const ctx = gsap.context(() => {
      // --- Reveal mask: gradient overlay fades out on enter ---
      if (revealRef.current) {
        gsap.fromTo(
          revealRef.current,
          { opacity: 1 },
          {
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // --- Timeline line fill (scrub with scroll) ---
      if (lineRef.current && trackRef.current) {
        gsap.fromTo(
          lineRef.current,
          { height: "0%" },
          {
            height: "100%",
            ease: "none",
            scrollTrigger: {
              trigger: trackRef.current,
              start: "top 70%",
              end: "bottom 30%",
              scrub: true,
            },
          }
        );
      }

      // --- Steps reveal stagger ---
      stepRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 12, filter: "blur(6px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
            delay: i * 0.14,
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // --- CTA reveal ---
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { opacity: 0, y: 12, filter: "blur(6px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="proceso"
      className="relative overflow-hidden bg-[#faf8f5] px-5 py-20 md:py-28"
    >
      {/* Reveal overlay mask */}
      <div
        ref={revealRef}
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to bottom, #faf8f5 0%, #faf8f5 40%, transparent 100%)",
        }}
      />

      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#4a3160]">
            Proceso
          </p>
          <h2 className="font-display text-3xl tracking-tight text-[#2c2c2c] sm:text-4xl md:text-5xl">
            De la idea al{" "}
            <span className="italic text-[#4a3160]">anillo perfecto</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#8a8078] sm:text-lg">
            Un proceso cercano y transparente, diseñado para que disfrutes cada
            paso tanto como el resultado final.
          </p>
        </div>

        {/* Timeline track */}
        <div ref={trackRef} className="relative">
          {/* Timeline rail — centered vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-[#d4b896]/30 md:left-1/2 md:-translate-x-1/2">
            {/* Animated fill */}
            <div
              ref={lineRef}
              className="w-full bg-gradient-to-b from-[#4a3160] to-[#d4b896]"
              style={{ height: "0%" }}
            />
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-12 md:gap-16">
            {STEPS.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={step.number}
                  ref={(el) => setStepRef(el, i)}
                  className="relative flex items-start gap-5 md:items-center"
                  style={{ opacity: 0 }}
                >
                  {/* Desktop: alternating sides */}
                  {/* Left content (desktop even) */}
                  <div
                    className={`hidden md:block md:w-1/2 ${
                      isEven ? "pr-12 text-right" : "order-3 pl-12 text-left"
                    }`}
                  >
                    <h3 className="font-display text-lg tracking-tight text-[#2c2c2c]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#8a8078]">
                      {step.description}
                    </p>
                  </div>

                  {/* Center dot */}
                  <div
                    className={`relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full
                               border border-[#d4b896]/40 bg-[#faf8f5]/80 backdrop-blur-md shadow-sm
                               md:order-2 md:mx-auto`}
                  >
                    <span className="font-display text-sm font-medium text-[#4a3160]">
                      {step.number}
                    </span>
                  </div>

                  {/* Right content (desktop even) — spacer */}
                  <div
                    className={`hidden md:block md:w-1/2 ${
                      isEven ? "order-3 pl-12" : "pr-12"
                    }`}
                  />

                  {/* Mobile content */}
                  <div className="flex-1 md:hidden">
                    <h3 className="font-display text-lg tracking-tight text-[#2c2c2c]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#8a8078]">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="mt-16 text-center" style={{ opacity: 0 }}>
          <a
            href={getWhatsAppUrl(
              "Hola, quiero iniciar el proceso de diseño de mi anillo de compromiso."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-liquid btn-liquid--primary px-8 py-4 text-base"
          >
            Inicia tu proceso hoy
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
