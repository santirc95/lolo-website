"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { easeLuxury, fadeUp, viewportOnce } from "@/lib/motion";
import { getWhatsAppUrl } from "@/lib/constants";

const FAQS = [
  {
    question: "¿Cuánto cuesta un anillo de compromiso personalizado?",
    answer:
      "El precio varía según el tipo de metal, el diamante y el diseño. Trabajamos con presupuestos desde $15,000 MXN. En tu primera consulta te damos un estimado transparente sin compromiso.",
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
      "Todos nuestros diamantes vienen con certificación de laboratorios gemológicos reconocidos internacionalmente como GIA (Gemological Institute of America) o IGI (International Gemological Institute).",
  },
  {
    question: "¿Ofrecen garantía?",
    answer:
      "Sí. Todos nuestros anillos incluyen garantía de por vida en la estructura y el engaste. También ofrecemos servicio de limpieza y mantenimiento gratuito.",
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
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const panelId = `faq-panel-${index}`;

  return (
    <div className="border-b border-gold/10">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={open}
        aria-controls={panelId}
      >
        <span className="pr-4 text-base font-medium text-charcoal">
          {question}
        </span>
        <div className="flex shrink-0 items-center gap-2">
          <AnimatePresence initial={false}>
            {open && (
              <motion.button
                key="contact-btn"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.25, ease: easeLuxury }}
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(getWhatsAppUrl(), "_blank");
                }}
                className="rounded-full bg-[#4a3160] px-3 py-1 text-xs font-medium text-white
                           transition-colors duration-200 hover:bg-[#5c3d7a]
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4a3160]/50 focus-visible:ring-offset-2"
                aria-label="Contactar por WhatsApp"
              >
                Contactar
              </motion.button>
            )}
          </AnimatePresence>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="shrink-0 text-gold"
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.4, ease: easeLuxury }}
          >
            <path d="m6 9 6 6 6-6" />
          </motion.svg>
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            key="content"
            role="region"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: easeLuxury }}
            className="overflow-hidden"
          >
            <div className="pb-5 pr-12 text-sm leading-relaxed text-warm-gray">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
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
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} index={i} />
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
