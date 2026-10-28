"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeImage } from "@/components/fade-image";

const features = [
  {
    title: "Aplicações Web, Móveis e Sistemas Críticos",
    category: "Engenharia de Software",
    description:
      "Desenvolvemos plataformas escaláveis, APIs robustas e arquiteturas desenhadas para aguentar operações diárias exigentes sem quebras de serviço.",
    image: "/dev1.jpg",
  },
  {
    title: "Modelos Preditivos, Visão Computacional e Automação",
    category: "Sistemas Inteligentes",
    description:
      "Substitua processos manuais lentos por automação algorítmica. Do diagnóstico por imagem ao processamento estruturado de documentos e linguagem natural.",
    image: "/dev3.jpg",
  },
  {
    title: "Auditorias de Segurança e Testes com Comunidade Real",
    category: "Validação Técnica & Segurança",
    description:
      "Testes rigorosos de interface, usabilidade e auditorias de vulnerabilidades com utilizadores reais antes de qualquer lançamento público.",
    image: "/dev4.jpg",
  },
];

export function FeaturedProductsSection() {
  return (
    <section id="servicos" className="scroll-mt-20 bg-background">
      {/* Section Title */}
      <div className="px-6 py-12 text-center md:px-12 md:py-24 lg:px-20 lg:py-28 lg:pb-16">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground md:mb-4">
          Capacidades Técnicas · Hagriia Labs
        </p>
        <h2 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
          Serviços Especializados de Engenharia
          <br />
          e Sistemas Inteligentes.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:mt-6 md:text-base">
          Não aplicamos fórmulas pré-fabricadas. Diagnosticamos o estrangulamento operacional e construímos a arquitetura adequada para resolver o problema com rigor.
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
                className="object-cover"
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
