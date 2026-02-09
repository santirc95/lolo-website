"use client";

import { useState } from "react";

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
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gold/10">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="pr-4 text-base font-medium text-charcoal">
          {question}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className={`shrink-0 text-gold transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {open && (
        <div className="pb-5 pr-12 text-sm leading-relaxed text-warm-gray">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-champagne px-5 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gold-dark">
            FAQ
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-charcoal sm:text-4xl">
            Preguntas frecuentes
          </h2>
        </div>

        <div className="mt-12">
          {FAQS.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
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
