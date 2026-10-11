"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeImage } from "@/components/fade-image";

const accessories = [
  {
    id: 1,
    name: "Programadores e Engenheiros",
    description:
      "Colaboração em projectos de desenvolvimento de software, arquitectura de sistemas e validação técnica de soluções.",
    price: "Projectos",
    image: "/images/accessory-charger.png",
  },
  {
    id: 2,
    name: "Investigadores e Estudantes",
    description:
      "Propostas de investigação aplicada, experimentação de algoritmos e estudo de viabilidade de novas abordagens.",
    price: "Investigação",
    image: "/images/accessory-sleeve.png",
  },
  {
    id: 3,
    name: "Universidades e Centros de Investigação",
    description:
      "Cooperação científica e tecnológica para aproximar a produção académica da resolução de problemas reais.",
    price: "Cooperação",
    image: "/images/accessory-bike-mount.png",
  },
  {
    id: 4,
    name: "Empresas e Organizações",
    description:
      "Parcerias tecnológicas para identificar desafios operacionais e desenvolver sistemas adaptados ao contexto real.",
    price: "Parcerias",
    image: "/images/accessory-strap.png",
  },
  {
    id: 5,
    name: "Empreendedores",
    description:
      "Exploração conjunta de ideias, construção de protótipos funcionais e validação técnica de novos produtos digitais.",
    price: "Iniciativas",
    image: "/images/accessory-carabiner.png",
  },
  {
    id: 6,
    name: "Comunidades Tecnológicas",
    description:
      "Participação em desafios de desenvolvimento, partilha de conhecimento técnico e iniciativas abertas.",
    price: "Comunidade",
    image: "/images/accessory-speaker-base.png",
  },
];

export function CollectionSection() {
  return (
    <section id="accessories" className="bg-background">
      {/* Section Title & Collaboration Intro */}
      <div className="px-4 pt-10 pb-8 sm:px-6 md:px-12 md:py-14 lg:px-20">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Colaboração e Oportunidades
            </p>
            <h2 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Construir em Conjunto
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Acreditamos que o desenvolvimento tecnológico beneficia da colaboração entre diferentes competências e perspectivas. O Hagriia Labs procura estabelecer relações com pessoas e organizações interessadas em explorar ideias, desenvolver soluções e participar em projectos tecnológicos com objectivos concretos.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href="#about"
              className="group inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-all hover:opacity-85"
            >
              <span>Propor uma colaboração</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Collaboration Grid/Carousel */}
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
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {accessory.description}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-border px-2.5 py-1 text-xs font-medium text-foreground">
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
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {accessory.description}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground">
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
