"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeImage } from "@/components/fade-image";

const features = [
  {
    title: "Desenvolvimento de Software",
    category: "Actividade Principal",
    description:
      "Criação de aplicações, plataformas digitais, serviços de software e ferramentas tecnológicas orientadas para necessidades concretas.",
    image: "/images/d18fe616-5596-4559-90f5-a90f5397d0d8.png",
  },
  {
    title: "Inteligência Artificial",
    category: "Sistemas Inteligentes",
    description:
      "Exploração e desenvolvimento de sistemas inteligentes, automação, análise de dados e aplicações de aprendizagem automática.",
    image: "/images/e26fa9c3-966d-4966-94a4-954a1e511c1c.png",
  },
  {
    title: "Investigação Aplicada",
    category: "Experimentação e Prototipagem",
    description:
      "Experimentação de ideias, avaliação de abordagens técnicas e desenvolvimento de protótipos para estudar a viabilidade de novas soluções.",
    image: "/images/car.jpg",
  },
  {
    title: "Dados e Sistemas Inteligentes",
    category: "Análise e Modelação",
    description:
      "Utilização de dados, modelos computacionais e ferramentas analíticas para compreender problemas e apoiar decisões.",
    image: "/images/204cee22-9e85-49e8-9303-1d309af626b0.png",
  },
  {
    title: "Tecnologias Emergentes",
    category: "Exploração Progressiva",
    description:
      "Exploração progressiva de novas áreas tecnológicas, através de investigação, aprendizagem, experimentação e colaboração com especialistas.",
    image: "/images/led-flashlight-bottle.png",
  },
  {
    title: "Observação da Terra e Dados Espaciais",
    category: "Linha de Exploração Futura",
    description:
      "Linha de exploração tecnológica relacionada com observação da Terra, dados de satélite, inteligência artificial e aplicações terrestres.",
    image: "/images/heating-campfire.png",
  },
];

export function FeaturedProductsSection() {
  return (
    <section id="servicos" className="scroll-mt-20 bg-background">
      {/* Section Title */}
      <div className="px-6 py-12 text-center md:px-12 md:py-28 lg:px-20 lg:py-32 lg:pb-20">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground md:mb-4">
          Serviços e Áreas de Actuação
        </p>
        <h2 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
          Engenharia de Software,
          <br />
          Investigação e Exploração.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:mt-6 md:text-base">
          Desenvolvimento de soluções tecnológicas, sistemas inteligentes e linhas de investigação aplicada orientadas para desafios reais.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 gap-6 px-4 pb-14 sm:px-6 md:grid-cols-3 md:gap-6 md:px-12 md:pb-20 lg:px-20">
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
                {feature.category}
              </p>
              <h3 className="text-lg font-semibold text-foreground md:text-xl">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
