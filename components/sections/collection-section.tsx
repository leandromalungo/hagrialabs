"use client";

import { FadeImage } from "@/components/fade-image";

// Adicione aqui os caminhos das novas imagens em /public/images/...
const items = [
  { id: 1, image: "" },
  { id: 2, image: "" },
  { id: 3, image: "" },
  { id: 4, image: "" },
  { id: 5, image: "" },
  { id: 6, image: "" },
];

export function CollectionSection() {
  return (
    <section id="accessories" className="bg-background">
      {/* Grid / Carousel reservado para as novas imagens */}
      <div className="pt-8 pb-14 md:pt-12 md:pb-24">
        {/* Mobile: Horizontal Carousel */}
        <div className="flex gap-4 overflow-x-auto px-4 pb-4 md:hidden snap-x snap-mandatory scrollbar-hide">
          {items.map((item) => (
            <div
              key={item.id}
              className="group flex-shrink-0 w-[78vw] sm:w-[60vw] snap-center"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-secondary">
                {item.image ? (
                  <FadeImage
                    src={item.image}
                    alt={`Imagem ${item.id}`}
                    fill
                    className="object-cover"
                  />
                ) : null}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 md:px-12 lg:px-20">
          {items.map((item) => (
            <div key={item.id} className="group">
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl border border-border bg-secondary">
                {item.image ? (
                  <FadeImage
                    src={item.image}
                    alt={`Imagem ${item.id}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
