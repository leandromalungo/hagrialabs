"use client";

import { FadeImage } from "@/components/fade-image";

const accessories = [
  {
    id: 1,
    name: "Empresas e Organizações",
    description:
      "Identificação de desafios reais, criação de soluções tecnológicas à medida e validação de sistemas em contexto operacional.",
    image: "",
  },
  {
    id: 2,
    name: "Empreendedores e Parceiros",
    description:
      "Transformação de ideias inovadoras em protótipos funcionais, produtos digitais e novas iniciativas tecnológicas.",
    image: "",
  },
  {
    id: 3,
    name: "Comunidade e Especialistas",
    description:
      "Participação em iniciativas abertas, partilha de competências técnicas e exploração multidisciplinar de tecnologias emergentes.",
    image: "",
  },
];

export function CollectionSection() {
  return (
    <section id="accessories" className="bg-background">
      {/* Section Title */}
      <div className="px-6 py-12 md:px-12 md:py-20 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Actuação
            </p>
            <h2 className="mt-2 text-2xl font-medium tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Nossos Clientes
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Estamos aberto à colaboração com profissionais, investigadores, empresas e organizações 
            interessadas em explorar ideias, desenvolver projectos ou testar soluções tecnológicas.
          </p>
        </div>
      </div>

      {/* Accessories Grid/Carousel */}
      <div className="pb-14 md:pb-24">
        {/* Mobile: Horizontal Carousel */}
        <div className="flex gap-4 overflow-x-auto px-4 pb-4 md:hidden snap-x snap-mandatory scrollbar-hide">
          {accessories.map((accessory) => (
            <div key={accessory.id} className="group flex-shrink-0  snap-center">

              {/* Image Container (pronto para receber nova imagem) */}
              <div className="relative">
                {accessory.image ? (
                  <FadeImage
                    src={accessory.image}
                    alt={accessory.name}
                    fill
                    className="object-cover"
                  />
                ) : null}
              </div>

              {/* Content */}
              <div className="pt-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    {accessory.name}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {accessory.description}
                  </p>
                </div>
                </div>
            </div>
          ))}
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 md:px-12 lg:px-20">
          {accessories.map((accessory) => (
            <div key={accessory.id} className="group">
              {/* Image Container (pronto para receber nova imagem) */}
              <div className="relative">
                {accessory.image ? (
                  <FadeImage
                    src={accessory.image}
                    alt={accessory.name}
                    fill
                    className="object-cover"
                  />
                ) : null}
              </div>

              {/* Content */}
              <div className="py-6 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {accessory.name}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {accessory.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

