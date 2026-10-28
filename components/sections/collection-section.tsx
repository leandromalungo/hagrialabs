"use client";

import { FadeImage } from "@/components/fade-image";

const accessories = [
  {
    id: 1,
    name: "Empresas e Startups",
    description:
      "Automatize processos operacionais, reduza despesas com tarefas manuais e lance plataformas digitais robustas no mercado com validação técnica garantida.",
    image: "",
  },
  {
    id: 2,
    name: "Setor Público e Cooperativas",
    description:
      "Modernize a comunicação com o cidadão através de canais acessíveis (SMS e chamadas de voz) e implemente agricultura de precisão com dados territoriais e de satélite.",
    image: "",
  },
  {
    id: 3,
    name: "Investidores e Parceiros Estratégicos",
    description:
      "Apoie e acelere soluções tecnológicas com aplicação prática comprovada em setores de grande impacto económico, com equipa técnica dedicada e tração real.",
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
              Segmentos e Parcerias
            </p>
            <h2 className="mt-2 text-2xl font-medium tracking-tight text-foreground sm:text-3xl md:text-4xl">
              A Quem se Destinam as Nossas Soluções
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Construímos pontes entre engenharia de software avançada e as necessidades operacionais de quem decide e atua no terreno.
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

