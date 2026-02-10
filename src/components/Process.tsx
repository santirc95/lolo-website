"use client";

import { motion } from "framer-motion";
import { getWhatsAppUrl } from "@/lib/constants";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const STEPS = [
  {
    number: "01",
    title: "Conversación inicial",
    description:
      "Nos cuentas tu idea, presupuesto y estilo. Te asesoramos sobre piedras, metales y diseños para que tomes la mejor decisión.",
  },
  {
    number: "02",
    title: "Diseño personalizado",
    description:
      "Creamos un diseño en 3D exclusivo para ti. Lo revisamos juntos y lo ajustamos hasta que sea exactamente lo que imaginaste.",
  },
  {
    number: "03",
    title: "Selección de diamante",
    description:
      "Te ayudamos a elegir el diamante perfecto con certificación GIA o IGI. Transparencia total en calidad y precio.",
  },
  {
    number: "04",
    title: "Creación artesanal",
    description:
      "Tu anillo cobra vida en nuestro taller. Cada detalle es cuidado por artesanos expertos con décadas de experiencia.",
  },
  {
    number: "05",
    title: "Entrega especial",
    description:
      "Recibes tu anillo en un empaque premium, con certificado de autenticidad y garantía. Listo para el gran momento.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="bg-cream px-5 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          className="text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-gold-dark">
            Proceso
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-charcoal sm:text-4xl">
            De la idea al anillo perfecto
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-warm-gray">
            Un proceso cercano y transparente, diseñado para que disfrutes cada
            paso tanto como el resultado final.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-8 md:grid-cols-5"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {STEPS.map((step) => (
            <motion.div key={step.number} variants={fadeUp} className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-champagne">
                <span className="font-display text-lg text-gold-dark">
                  {step.number}
                </span>
              </div>
              <h3 className="mt-4 text-base font-semibold text-charcoal">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-warm-gray">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-14 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <a
            href={getWhatsAppUrl("Hola, quiero iniciar el proceso de diseño de mi anillo de compromiso.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-charcoal px-8 py-4 text-base font-medium text-white transition-all hover:bg-charcoal-light hover:shadow-lg"
          >
            Inicia tu proceso hoy
          </a>
        </motion.div>
      </div>
    </section>
  );
}
