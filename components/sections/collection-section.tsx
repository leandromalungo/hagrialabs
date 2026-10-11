"use client";

import { FadeImage } from "@/components/fade-image";

const accessories = [
  {
    id: 1,
    name: "Programadores e Engenheiros",
    description:
      "Colaboração em projectos de desenvolvimento de software, arquitectura de sistemas e validação técnica de soluções.",
    price: "Projectos",
    image: "",
  },
  {
    id: 2,
    name: "Investigadores e Estudantes",
    description:
      "Propostas de investigação aplicada, experimentação de algoritmos e estudo de viabilidade de novas abordagens.",
    price: "Investigação",
    image: "",
  },
  {
    id: 3,
    name: "Universidades e Centros de Investigação",
    description:
      "Parcerias académicas, intercâmbio de conhecimento científico e desenvolvimento conjunto de linhas de investigação.",
    price: "Academia",
    image: "",
  },
  {
    id: 4,
    name: "Empresas e Organizações",
    description:
      "Identificação de desafios reais, criação de soluções tecnológicas à medida e validação de sistemas em contexto operacional.",
    price: "Parcerias",
    image: "",
  },
  {
    id: 5,
    name: "Empreendedores e Parceiros",
    description:
      "Transformação de ideias inovadoras em protótipos funcionais, produtos digitais e novas iniciativas tecnológicas.",
    price: "Inovação",
    image: "",
  },
  {
    id: 6,
    name: "Comunidade e Especialistas",
    description:
      "Participação em iniciativas abertas, partilha de competências técnicas e exploração multidisciplinar de tecnologias emergentes.",
    price: "Comunidade",
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
              Colaboração e Oportunidades
            </p>
            <h2 className="mt-2 text-2xl font-medium tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Aberto à Colaboração Técnica e Científica
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            O Hagriia Labs está aberto à colaboração com profissionais, investigadores, estudantes, universidades, empresas e organizações interessadas em explorar ideias, desenvolver projectos ou testar soluções tecnológicas.
          </p>
        </div>
      </div>

      {/* Accessories Grid/Carousel */}
      <div className="pb-14 md:pb-24">
        {/* Mobile: Horizontal Carousel */}
        <div className="flex gap-4 overflow-x-auto px-4 pb-4 md:hidden snap-x snap-mandatory scrollbar-hide">
          {accessories.map((accessory) => (
            <div
              key={accessory.id}
              className="group flex-shrink-0 w-[78vw] sm:w-[60vw] snap-center"
            >
              {/* Image Container (pronto para receber nova imagem) */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-secondary">
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
                <span className="shrink-0 text-xs font-medium text-muted-foreground">
                  {accessory.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 md:px-12 lg:px-20">
          {accessories.map((accessory) => (
            <div key={accessory.id} className="group">
              {/* Image Container (pronto para receber nova imagem) */}
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl border border-border bg-secondary">
                {accessory.image ? (
                  <FadeImage
                    src={accessory.image}
                    alt={accessory.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
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
                <span className="shrink-0 text-sm font-medium text-muted-foreground">
                  {accessory.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

