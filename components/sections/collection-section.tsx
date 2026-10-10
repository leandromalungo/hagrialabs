"use client";

import { FadeImage } from "@/components/fade-image";

const accessories = [
  {
    id: 1,
    name: "Base de Carregamento Sem Fio",
    description: "Base de indução para energia sem esforço",
    price: "$89",
    image: "/images/accessory-charger.png",
  },
  {
    id: 2,
    name: "Capa Protetora de Silicone",
    description: "Capa com textura aderente para maior durabilidade",
    price: "$45",
    image: "/images/accessory-sleeve.png",
  },
  {
    id: 3,
    name: "Suporte de Fibra de Carbono para Bike",
    description: "Sistema de fixação ultraleve para ciclismo",
    price: "$129",
    image: "/images/accessory-bike-mount.png",
  },
  {
    id: 4,
    name: "Alça de Transporte Premium",
    description: "Alça ajustável com fechos de engate rápido",
    price: "$39",
    image: "/images/accessory-strap.png",
  },
  {
    id: 5,
    name: "Sistema de Mosquetão",
    description: "Fixação segura para transporte com as mãos livres",
    price: "$29",
    image: "/images/accessory-carabiner.png",
  },
  {
    id: 6,
    name: "Base com Caixa de Som Bluetooth",
    description: "Base de áudio de alta fidelidade com estabilizadores",
    price: "$149",
    image: "/images/accessory-speaker-base.png",
  },
];

export function CollectionSection() {
  return (
    <section id="accessories" className="bg-background">
      {/* Section Title */}
      <div className="px-4 pt-10 pb-6 sm:px-6 md:px-12 md:py-10 lg:px-20">
        <h2 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl md:text-4xl">
          Acessórios Essenciais
        </h2>
      </div>

      {/* Accessories Grid/Carousel */}
      <div className="pb-14 md:pb-24">
        {/* Mobile: Horizontal Carousel */}
        <div className="flex gap-4 overflow-x-auto px-4 pb-4 md:hidden snap-x snap-mandatory scrollbar-hide">
          {accessories.map((accessory) => (
            <div key={accessory.id} className="group flex-shrink-0 w-[78vw] sm:w-[60vw] snap-center">
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-secondary">
                <FadeImage
                  src={accessory.image || "/placeholder.svg"}
                  alt={accessory.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="pt-4 pb-2">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <h3 className="text-base font-medium leading-snug text-foreground sm:text-lg">
                      {accessory.name}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      {accessory.description}
                    </p>
                  </div>
                  <span className="text-base font-medium text-foreground sm:text-lg">
                    {accessory.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 md:px-12 lg:px-20">
          {accessories.map((accessory) => (
            <div key={accessory.id} className="group">
              {/* Image */}
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-secondary">
                <FadeImage
                  src={accessory.image || "/placeholder.svg"}
                  alt={accessory.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="py-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium leading-snug text-foreground">
                      {accessory.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {accessory.description}
                    </p>
                  </div>
                  <span className="font-medium text-foreground text-2xl">
                    {accessory.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
