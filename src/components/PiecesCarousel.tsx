"use client";

const pieces = [
  { id: 1, src: "/images/pieces/01.jpg", title: "Solitario Eterno", subtitle: "Oro 18k & Diamante GIA" },
  { id: 2, src: "/images/pieces/02.jpg", title: "Alianza Infinita", subtitle: "Platino 950 & Pavé" },
  { id: 3, src: "/images/pieces/03.jpg", title: "Halo Luminoso", subtitle: "Oro Rosa 14k & Zafiro" },
  { id: 4, src: "/images/pieces/04.jpg", title: "Torsade Royale", subtitle: "Oro 18k & Esmeralda" },
  { id: 5, src: "/images/pieces/05.jpg", title: "Cinta de Luz", subtitle: "Platino 950 & Baguettes" },
  { id: 6, src: "/images/pieces/06.jpg", title: "Nudo Imperial", subtitle: "Oro Amarillo 18k" },
  { id: 7, src: "/images/pieces/07.jpg", title: "Pétalos de Alba", subtitle: "Oro Rosa 18k & Morganita" },
  { id: 8, src: "/images/pieces/08.jpg", title: "Constellation", subtitle: "Platino 950 & Diamantes" },
];

export default function PiecesCarousel() {
  return (
    <section
      role="region"
      aria-label="Galería de piezas destacadas"
      className="overflow-hidden bg-[#faf8f5] py-20 px-5"
    >
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center mb-12">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#4a3160]">
          Colección
        </p>
        <h2 className="font-display text-3xl tracking-tight text-[#2c2c2c] sm:text-4xl md:text-5xl">
          Piezas que{" "}
          <span className="italic text-[#4a3160]">enamoran</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#8a8078] sm:text-lg">
          Cada anillo es una obra única, diseñada con materiales nobles y el
          cuidado artesanal que merece vuestra historia.
        </p>
      </div>

      {/* Carousel */}
      <div
        className="mx-auto max-w-7xl overflow-x-auto scroll-smooth snap-x snap-mandatory
                   [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="flex gap-5 px-[7.5%] lg:px-0">
          {pieces.map((piece) => (
            <div
              key={piece.id}
              tabIndex={0}
              className="w-[85%] flex-shrink-0 snap-center
                         md:w-[calc((100%-1.25rem*1)/2)]
                         lg:w-[calc((100%-1.25rem*2)/3)]
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4a3160]/50 focus-visible:ring-offset-2
                         rounded-2xl transition-transform duration-300 hover:scale-[1.02]"
            >
              {/* Gradient border wrapper */}
              <div className="rounded-2xl bg-gradient-to-br from-[#d4b896]/60 via-[#4a3160]/20 to-[#d4b896]/40 p-[1px]">
                {/* Glass card */}
                <div className="rounded-2xl bg-[#faf8f5]/70 backdrop-blur-md overflow-hidden">
                  <div className="aspect-[4/5] w-full overflow-hidden">
                    <img
                      src={piece.src}
                      alt={piece.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="px-5 py-4">
                    <h3 className="text-base font-medium text-[#2c2c2c]">
                      {piece.title}
                    </h3>
                    <p className="mt-1 text-sm text-[#8a8078]">
                      {piece.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
