"use client";

import { FadeImage } from "@/components/fade-image";

const features = [
  {
    title: "Controle Inteligente de Temperatura",
    description: "Inovação",
    image: "/images/d18fe616-5596-4559-90f5-a90f5397d0d8.png",
  },
  {
    title: "Estrutura Ultraleve de Carbono",
    description: "Performance",
    image: "/images/e26fa9c3-966d-4966-94a4-954a1e511c1c.png",
  },
  {
    title: "Design Resistente ao Clima",
    description: "Durabilidade",
    image: "/images/car.jpg",
  },
  {
    title: "Rastreamento GPS Integrado",
    description: "Navegação",
    image: "/images/204cee22-9e85-49e8-9303-1d309af626b0.png",
  },
  {
    title: "Lanterna LED Embutida",
    description: "Visibilidade",
    image: "/images/led-flashlight-bottle.png",
  },
  {
    title: "Tecnologia de Autoaquecimento",
    description: "Conforto",
    image: "/images/heating-campfire.png",
  },
];

export function FeaturedProductsSection() {
  return (
    <section id="technology" className="bg-background">
      {/* Section Title */}
      <div className="px-6 py-12 text-center md:px-12 md:py-28 lg:px-20 lg:py-32 lg:pb-20">
        <h2 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
          Projetado para a Excelência.
          <br />
          Desenhado para a Aventura.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground md:mt-6">
          Tecnologia
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 gap-6 px-4 pb-14 sm:px-6 md:grid-cols-3 md:gap-4 md:px-12 md:pb-20 lg:px-20">
        {features.map((feature) => (
          <div key={feature.title} className="group">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <FadeImage
                src={feature.image || "/placeholder.svg"}
                alt={feature.title}
                fill
                className="object-cover md:transition-transform md:duration-500 md:group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="pt-4 pb-2 md:py-6">
              <p className="mb-1.5 text-xs uppercase tracking-widest text-muted-foreground md:mb-2">
                {feature.description}
              </p>
              <h3 className="text-lg font-semibold text-foreground md:text-xl">
                {feature.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
