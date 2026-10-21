"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sprout } from "lucide-react";

export interface ProductItem {
  id: string;
  name: string;
  type: string;
  status: string;
  shortDescription: string;
  fullDescription: string;
  problem: string;
  solution: string;
  highlights: string[];
  technologies: string[];
  image: string;
  isDedicatedPage?: boolean;
  dedicatedUrl?: string;
  icon?: React.ReactNode;
}

export const productsData: ProductItem[] = [
  {
    id: "agri-ia",
    name: "AGRI-IA",
    type: "Agricultura de Precisão & IA",
    status: "Em desenvolvimento / Piloto Disponível",
    shortDescription:
      "Aplicação inteligente para auxílio de agricultores na agricultura de precisão, combinando visão computacional para diagnóstico de culturas, análise de dados de satélite e recomendações práticas no terreno.",
    fullDescription:
      "A AGRI-IA foi desenvolvida pelo Hagriia Labs para apoiar produtores agrícolas, cooperativas e técnicos agrónomos na tomada de decisões fundamentadas no campo. A aplicação utiliza inteligência artificial e análise de dados agronómicos para diagnóstico precoce de pragas e doenças, acompanhamento de humidade e nutrientes do solo e gestão eficiente de insumos.",
    problem:
      "Produtores agrícolas enfrentam dificuldades na detecção atempada de pragas, doenças fitossanitárias, stress hídrico e carências nutricionais, o que gera perdas graves de produtividade e desperdício de recursos.",
    solution:
      "Uma aplicação intuitiva e orientada para o terreno que permite ao produtor capturar fotos de folhas para diagnóstico instantâneo por IA, monitorizar o índice de vegetação da sua parcela e receber recomendações práticas contextualizadas.",
    highlights: [
      "Diagnóstico fitossanitário instantâneo por visão computacional e IA",
      "Monitorização geoespacial com índices de vegetação (NDVI) e clima",
      "Recomendações técnicas adaptadas ao terreno, solo e cultura",
      "Interface optimizada para agricultores e suporte a funcionamento offline",
    ],
    technologies: [
      "Inteligência Artificial",
      "Visão Computacional",
      "Dados de Satélite & Clima",
      "Mobile & Web",
    ],
    image: "/side7.jpg",
    isDedicatedPage: true,
    dedicatedUrl: "/projectos/agri-ia",
  },
];

export function ProductsSection() {
  const product = productsData[0];

  return (
    <section
      id="produtos"
      className="scroll-mt-20 bg-background py-12 md:py-12 lg:py-12"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Inovação Aplicada · Hagriia Labs
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              AGRI-IA
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {product.shortDescription}
            </p>
            <ul className="mt-7 space-y-3">
              {product.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 text-sm leading-relaxed text-foreground/90 sm:text-base"
                >
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-foreground"
                    aria-hidden="true"
                  />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded bg-muted shadow-sm">
              <Image
                src={product.image}
                alt="AGRI-IA — tecnologia inteligente para a agricultura"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              <span className="absolute bottom-5 left-5">

                <Link
                  href={product.dedicatedUrl ?? "/projectos/agri-ia"}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-4 
                  text-sm font-medium text-background transition-opacity hover:opacity-90 sm:w-fit sm:self-end"
                >
                  <span>Saber mais</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </span>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
