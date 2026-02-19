"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { easeLuxury, fadeUp, viewportOnce } from "@/lib/motion";
import { getWhatsAppUrl } from "@/lib/constants";

const PANEL_TRANSITION = {
  duration: 0.26,
  ease: easeLuxury,
} as const;

const FAQS = [
  {
    question: "¿Cuánto cuesta un anillo de compromiso personalizado?",
    answer:
      "El precio de un anillo de compromiso depende principalmente del diamante y del diseño que elijas. Trabajamos contigo para encontrar la mejor opción según tu presupuesto y prioridades, asegurando siempre calidad y asesoría personalizada.\n\nPodemos orientarte con distintas alternativas para que tomes una decisión informada y segura.",
  },
  {
    question: "¿Cuánto tiempo tarda el proceso?",
    answer:
      "Desde la primera consulta hasta la entrega, el proceso toma entre 4 y 6 semanas. Si tienes una fecha especial, podemos ajustar los tiempos. Recomendamos empezar con al menos 6 semanas de anticipación.",
  },
  {
    question: "¿Puedo ver el diseño antes de que lo fabriquen?",
    answer:
      "Sí. Creamos un render 3D fotorrealista de tu anillo para que lo apruebes antes de iniciar la fabricación. Puedes pedir los cambios que necesites.",
  },
  {
    question: "¿Qué certificaciones tienen los diamantes?",
    answer:
      "Nuestros diamantes vienen con certificación de laboratorios gemológicos reconocidos internacionalmente como GIA (Gemological Institute of America) o IGI (International Gemological Institute).",
  },
  {
    question: "¿Ofrecen garantía?",
    answer:
      "Sí, ofrecemos garantía ante cualquier falla relacionada con la fabricación de la pieza.\n\nEn caso de golpes, accidentes o desgaste por uso, evaluamos cada caso para poder ayudarte con la mejor solución posible. Nuestro compromiso es acompañarte incluso después de la entrega.",
  },
  {
    question: "¿Pueden trabajar con un diseño que yo traiga?",
    answer:
      "Por supuesto. Si tienes una imagen, boceto o referencia de Pinterest, podemos partir de ahí y adaptarlo a tus gustos y presupuesto.",
  },
  {
    question: "¿Envían a toda la República?",
    answer:
      "Sí. Realizamos envíos asegurados a toda la República Mexicana. La entrega se hace en empaque premium con servicio de mensajería especializada.",
  },
];

function FAQItem({
  question,
  answer,
  index,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const panelId = `faq-panel-${index}`;

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onToggle();
      }
    },
    [onToggle],
  );

  return (
    <motion.div layout="position" className="border-b border-gold/10">
      <div
        role="button"
        tabIndex={0}
        onClick={onToggle}
        onKeyDown={handleKeyDown}
        className="liquid-row flex w-full items-center justify-between py-5 text-left cursor-pointer"
        aria-expanded={open}
        aria-controls={panelId}
      >
        <span className="pr-4 text-base font-medium text-charcoal">
          {question}
        </span>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="shrink-0 text-gold"
          animate={{ rotate: open ? 180 : 0 }}
          transition={PANEL_TRANSITION}
        >
          <path d="m6 9 6 6 6-6" />
        </motion.svg>
      </div>
      <AnimatePresence initial={false} mode="sync">
        {open && (
          <motion.div
            id={panelId}
            key="content"
            role="region"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={PANEL_TRANSITION}
            className="overflow-hidden"
            style={{ willChange: "height" }}
          >
            <div className="relative pb-14 pr-4 text-sm leading-relaxed text-warm-gray">
              {answer.split("\n\n").map((paragraph, i) => (
                <p key={i} className={`pr-8${i > 0 ? " mt-3" : ""}`}>
                  {paragraph}
                </p>
              ))}
              <motion.button
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, ease: easeLuxury }}
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(getWhatsAppUrl(), "_blank");
                }}
                className="btn-liquid btn-liquid--primary absolute bottom-4 right-4 px-5 py-2 text-sm"
                aria-label="Contactar por WhatsApp"
              >
                Contactar
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-champagne px-5 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <motion.div
          className="text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-gold-dark">
            FAQ
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-charcoal sm:text-4xl">
            Preguntas frecuentes
          </h2>
        </motion.div>

        <motion.div
          className="mt-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {FAQS.map((faq, i) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              index={i}
              open={activeIndex === i}
              onToggle={() => setActiveIndex(activeIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>

      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
}
