"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Layers,
  X,
  Sparkles,
  Cpu,
  Mail,
  PhoneCall,
  Sprout,
} from "lucide-react";

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
    image: "/images/agriia-hero.jpg",
    isDedicatedPage: true,
    dedicatedUrl: "/projectos/agri-ia",
  },
  {
    id: "responde-email",
    name: "RespondeEmail",
    type: "Automação & Recursos Humanos",
    status: "Disponível",
    shortDescription:
      "Serviço inteligente de automação de recrutamento para equipas de Recursos Humanos que realiza a triagem de candidaturas, análise curricular e resposta automática por e-mail.",
    fullDescription:
      "O RespondeEmail é uma solução criada pelo Hagriia Labs para optimizar processos de recrutamento e selecção em departamentos de Recursos Humanos. O serviço processa automaticamente os e-mails de candidatura recebidos, analisa os currículos face aos requisitos da vaga e assegura comunicação rápida e profissional com todos os candidatos.",
    problem:
      "Equipas de RH recebem centenas de currículos por e-mail para cada vaga, tornando a triagem manual morosa e sujeita a falhas, deixando candidatos qualificados e não qualificados sem respostas oportunas.",
    solution:
      "Um serviço automatizado integrado no fluxo de correio electrónico que lê e analisa currículos em PDF e Word, pontua a adequação ao perfil solicitado e envia confirmações e actualizações de estado personalizadas.",
    highlights: [
      "Recepção e triagem automatizada de candidaturas por correio electrónico",
      "Extracção estruturada de competências, experiência e formação curricular",
      "Comunicação personalizada e automática em todas as etapas da selecção",
      "Redução de até 80% no tempo despendido em triagem inicial de candidatos",
    ],
    technologies: [
      "Processamento de Linguagem Natural",
      "Automação de E-mails",
      "Triagem Inteligente de Perfis",
      "APIs Empresariais",
    ],
    image: "/dev5.jpg",
    isDedicatedPage: false,
  },
  {
    id: "atendimento-multicanal",
    name: "Serviço de Atendimento com SMS, Texto e Voz",
    type: "Comunicação & Atendimento Empresarial",
    status: "Disponível",
    shortDescription:
      "Plataforma e serviço de atendimento automatizado com SMS, mensagens de texto e chamadas de voz para empresas, garantindo comunicação contínua e acessível com os clientes.",
    fullDescription:
      "O Serviço de Atendimento com SMS, Texto e Voz do Hagriia Labs permite a empresas e instituições públicas manterem canais de atendimento permanente, rápido e inclusivo. Combinando SMS bidireccional, texto digital e agentes automáticos de voz, o serviço assegura cobertura integral mesmo para clientes sem ligação à internet móvel.",
    problem:
      "Muitas empresas e instituições operam canais de atendimento lentos ou restritos a quem tem acesso à internet móvel de alta velocidade, excluindo uma grande fatia do mercado e sobrecarregando linhas telefónicas manuais.",
    solution:
      "Uma plataforma unificada com agentes inteligentes de voz e gateways SMS e mensagens de texto, capaz de prestar esclarecimentos, confirmar agendamentos, emitir lembretes e recolher dados automaticamente 24 horas por dia.",
    highlights: [
      "Atendimento por SMS bidireccional acessível em qualquer telemóvel simples",
      "Atendimento inteligente por voz com reconhecimento de linguagem natural",
      "Integração com bases de dados empresariais e envio de notificações transaccionais",
      "Alta escalabilidade e disponibilidade permanente 24/7",
    ],
    technologies: [
      "Gateways SMS & Telecom",
      "Sistemas de Voz Automatizados",
      "Mensagens Instantâneas",
      "APIs de Integração",
    ],
    image: "/side3.jpg",
    isDedicatedPage: false,
  },
];

const categories = [
  "Todos",
  "Agricultura de Precisão & IA",
  "Automação & Recursos Humanos",
  "Comunicação & Atendimento Empresarial",
];

export function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [activeProduct, setActiveProduct] = useState<ProductItem | null>(null);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveProduct(null);
      }
    };
    if (activeProduct) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProduct]);

  const filteredProducts =
    selectedCategory === "Todos"
      ? productsData
      : productsData.filter((p) => p.type === selectedCategory);

  return (
    <section id="produtos" className="scroll-mt-20 bg-background py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12 border-b border-border">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Inovação Aplicada · Hagriia Labs
            </p>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Nossos Produtos
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Soluções tecnológicas desenhadas a partir de necessidades concretas, combinando engenharia de software rigorosa, inteligência artificial e conectividade acessível.
            </p>
          </div>

          {/* Quick Stats or Sub-badge */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-xs font-medium text-foreground">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              {productsData.length} Soluções Disponíveis
            </span>
          </div>
        </div>

        {/* Filter Category Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-8 pb-10">
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
                  isSelected
                    ? "bg-foreground text-background shadow-sm"
                    : "border border-border bg-white text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => {
            const isAgriIa = product.id === "agri-ia";

            return (
              <article
                key={product.id}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div>
                  {/* Product Card Image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-md shadow-sm">
                        {product.status}
                      </span>
                    </div>

                    {/* Dedicated Page Pill for AGRI-IA */}
                    {isAgriIa && (
                      <div className="absolute top-4 right-4">
                        <span className="flex items-center gap-1 rounded-full bg-emerald-600/95 px-2.5 py-1 text-[11px] font-medium text-white shadow-sm backdrop-blur-sm">
                          <Sparkles className="h-3 w-3" />
                          Apresentação
                        </span>
                      </div>
                    )}

                    {/* Product Name on Bottom of Image */}
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <p className="text-xs uppercase tracking-wider text-white/80">
                        {product.type}
                      </p>
                      <h3 className="text-xl font-medium tracking-tight text-white">
                        {product.name}
                      </h3>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {product.shortDescription}
                    </p>

                    {/* Highlights Preview */}
                    <ul className="mt-5 space-y-2 border-t border-border pt-4">
                      {product.highlights.slice(0, 3).map((highlight, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs leading-snug text-foreground/90"
                        >
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-foreground" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="border-t border-border p-6 pt-4 bg-secondary/10">
                  {isAgriIa ? (
                    <div className="flex flex-col gap-2">
                      <Link
                        href="/projectos/agri-ia"
                        className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-xs font-medium text-background transition-all hover:opacity-90"
                      >
                        <span>Ver Apresentação AGRI-IA</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Link>
                      <button
                        type="button"
                        onClick={() => setActiveProduct(product)}
                        className="inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-border bg-white px-4 py-2 text-xs font-medium text-foreground transition-colors hover:bg-secondary/40"
                      >
                        <span>Ficha Técnica</span>
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2">
                      <button
                        type="button"
                        onClick={() => setActiveProduct(product)}
                        className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-4 py-2.5 text-xs font-medium text-background transition-all hover:opacity-90"
                      >
                        <span>Ver Detalhes</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </button>
                      <Link
                        href={`/agendar-consultoria?tipo=${product.id}`}
                        className="inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-border bg-white px-4 py-2 text-xs font-medium text-foreground transition-colors hover:bg-secondary/40"
                      >
                        <span>Solicitar Demonstração</span>
                        <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Product Details Modal ("Ver mais / Ficha técnica") */}
      {activeProduct && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveProduct(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-border bg-white p-6 shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              type="button"
              onClick={() => setActiveProduct(null)}
              className="absolute top-5 right-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-secondary/50 text-foreground transition-colors hover:bg-secondary"
              aria-label="Fechar modal"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Modal Image & Header */}
            <div className="relative mb-6 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-muted">
              <Image
                src={activeProduct.image}
                alt={activeProduct.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur-md">
                  {activeProduct.type}
                </span>
                <h3 className="mt-2 text-2xl font-medium tracking-tight text-white sm:text-3xl">
                  {activeProduct.name}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Estado de Desenvolvimento
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  {activeProduct.status}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Visão Geral da Solução
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {activeProduct.fullDescription}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-secondary/20 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
                    Desafio Identificado
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {activeProduct.problem}
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-secondary/20 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-foreground">
                    Abordagem & Solução
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {activeProduct.solution}
                  </p>
                </div>
              </div>

              {/* Highlights */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Capacidades & Destaques
                </p>
                <ul className="mt-3 space-y-2">
                  {activeProduct.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2.5 text-xs text-foreground sm:text-sm"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Áreas Tecnológicas
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {activeProduct.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
                <button
                  type="button"
                  onClick={() => setActiveProduct(null)}
                  className="rounded-full border border-border px-5 py-2.5 text-xs font-medium text-foreground transition-colors hover:bg-secondary/50"
                >
                  Fechar
                </button>

                <div className="flex flex-wrap items-center gap-3">
                  {activeProduct.id === "agri-ia" && (
                    <Link
                      href="/projectos/agri-ia"
                      className="group inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-5 py-2.5 text-xs font-medium text-white shadow-sm transition-all hover:bg-emerald-700"
                    >
                      <span>Aceder à Apresentação Completa</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </Link>
                  )}
                  <Link
                    href={`/agendar-consultoria?assunto=${encodeURIComponent(
                      `Demonstração / Teste do produto ${activeProduct.name}`
                    )}`}
                    className="group inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-xs font-medium text-background transition-all hover:opacity-85"
                  >
                    <span>Contactar / Agendar Demonstração</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
