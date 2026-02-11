import Image from "next/image";

const PIECES = [
  {
    id: 1,
    title: "Anillo Eternity",
    subtitle: "Oro rosa 18k con diamantes pavé",
    image: "/images/pieces/01.jpg",
  },
  {
    id: 2,
    title: "Solitario Lumière",
    subtitle: "Platino con diamante corte brillante",
    image: "/images/pieces/02.jpg",
  },
  {
    id: 3,
    title: "Banda Céleste",
    subtitle: "Oro blanco 14k con zafiros",
    image: "/images/pieces/03.jpg",
  },
  {
    id: 4,
    title: "Anillo Torsade",
    subtitle: "Oro amarillo 18k entrelazado",
    image: "/images/pieces/04.jpg",
  },
  {
    id: 5,
    title: "Solitario Pétale",
    subtitle: "Oro rosa con amatista central",
    image: "/images/pieces/05.jpg",
  },
  {
    id: 6,
    title: "Anillo Infinité",
    subtitle: "Platino con diamantes baguette",
    image: "/images/pieces/06.jpg",
  },
  {
    id: 7,
    title: "Banda Royale",
    subtitle: "Oro blanco con rubí y diamantes",
    image: "/images/pieces/07.jpg",
  },
  {
    id: 8,
    title: "Solitario Éclat",
    subtitle: "Oro rosa 18k con morganita",
    image: "/images/pieces/08.jpg",
  },
];

export default function PiecesCarousel() {
  return (
    <section className="py-20 bg-cream overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-purple-dark">
            Colección
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-charcoal sm:text-4xl">
            Piezas Destacadas
          </h2>
        </div>

        {/* Carousel */}
        <div
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="region"
          aria-label="Carrusel de piezas destacadas"
        >
          {PIECES.map((piece) => (
            <article
              key={piece.id}
              tabIndex={0}
              className="
                group snap-start shrink-0
                w-[85%] md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]
                rounded-2xl p-px
                bg-gradient-to-br from-champagne via-purple-light/30 to-gold-light/60
                shadow-md shadow-purple-dark/5
                transition-all duration-500
                hover:shadow-xl hover:shadow-purple-dark/10
                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple
              "
              aria-label={`${piece.title} — ${piece.subtitle}`}
            >
              <div className="h-full rounded-2xl bg-champagne/40 backdrop-blur-xl overflow-hidden">
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={piece.image}
                    alt={`${piece.title}: ${piece.subtitle}`}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 85vw, (max-width: 1024px) 48vw, 32vw"
                  />
                  {/* Gradient overlay at bottom for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-champagne/50 via-transparent to-transparent" />
                </div>

                {/* Text content */}
                <div className="px-5 py-4">
                  <h3 className="font-display text-lg text-charcoal transition-colors duration-300 group-hover:text-purple-dark">
                    {piece.title}
                  </h3>
                  <p className="mt-1 text-sm text-warm-gray">
                    {piece.subtitle}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Scroll hint indicators */}
        <div className="mt-6 flex justify-center gap-1.5" aria-hidden="true">
          {PIECES.map((piece) => (
            <span
              key={piece.id}
              className="block h-1.5 w-1.5 rounded-full bg-purple-light/50"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
