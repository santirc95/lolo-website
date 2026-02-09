import { getWhatsAppUrl } from "@/lib/constants";

const TRUST_POINTS = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Diamantes certificados",
    description:
      "Trabajamos exclusivamente con diamantes certificados por laboratorios gemológicos reconocidos (GIA, IGI). Sin sorpresas.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Experiencia comprobada",
    description:
      "Más de una década creando piezas únicas. Cada anillo refleja nuestra pasión por la artesanía y la excelencia.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Atención personalizada",
    description:
      "No eres un número. Te acompañamos de inicio a fin con asesoría experta y el cariño que un momento tan especial merece.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    title: "Precios transparentes",
    description:
      "Sin costos ocultos. Te mostramos exactamente en qué se invierte cada peso de tu presupuesto.",
  },
];

export default function Trust() {
  return (
    <section id="nosotros" className="bg-cream px-5 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gold-dark">
            Por qué LOLŌ
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-charcoal sm:text-4xl">
            Joyería con alma
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-warm-gray">
            Creemos que un anillo de compromiso es mucho más que una joya. Es una
            promesa hecha materia. Por eso ponemos el mismo amor en crearlo que
            tú al entregarlo.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_POINTS.map((point) => (
            <div
              key={point.title}
              className="rounded-2xl bg-white p-6 shadow-sm text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-champagne text-gold-dark">
                {point.icon}
              </div>
              <h3 className="mt-4 text-base font-semibold text-charcoal">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-warm-gray">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-charcoal px-8 py-4 text-base font-medium text-white transition-all hover:bg-charcoal-light hover:shadow-lg"
          >
            Conócenos mejor
          </a>
        </div>
      </div>
    </section>
  );
}
