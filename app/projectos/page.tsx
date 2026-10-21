"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Layers,
  X,
} from "lucide-react";
import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";

interface ProjectItem {
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
}

const projectTypes = [
  "Todos",
  "Agricultura de Precisão & IA",
  "Automação & Recursos Humanos",
  "Comunicação & Atendimento Empresarial",
];

const projects: ProjectItem[] = [
  {
    id: "agri-ia",
    name: "AGRI-IA",
    type: "Agricultura de Precisão & IA",
    status: "Em desenvolvimento / Disponível para piloto",
    shortDescription:
      "Aplicação inteligente para auxílio de agricultores na agricultura de precisão, combinando análise assistida por inteligência artificial, monitorização das culturas e recomendações técnicas no campo.",
    fullDescription:
      "A AGRI-IA foi desenvolvida pelo Hagriia Labs para apoiar produtores agrícolas e técnicos agrónomos na tomada de decisões fundamentadas no terreno. A aplicação utiliza inteligência artificial e análise de dados agronómicos para auxiliar no diagnóstico precoce de culturas, gestão eficiente de recursos e acompanhamento produtivo.",
    problem:
      "Produtores agrícolas enfrentam frequentemente dificuldades na detecção atempada de pragas, doenças das plantas, stress hídrico e desequilíbrios nutricionais do solo, resultando em perdas de produtividade e uso ineficiente de insumos.",
    solution:
      "Uma aplicação acessível e orientada para o terreno que permite aos agricultores registar observações, analisar indicadores das lavras com suporte de IA e receber orientações práticas e contextualizadas para cada fase do cultivo.",
    highlights: [
      "Auxílio técnico inteligente para agricultura de precisão no campo",
      "Apoio na identificação de problemas fitossanitários e nutricionais das culturas",
      "Recomendações práticas para gestão de rega, solo e planeamento de safra",
      "Interface desenhada para utilização simples por agricultores e cooperativas",
    ],
    technologies: [
      "Inteligência Artificial",
      "Visão Computacional",
      "Análise Agronómica",
      "Aplicação Móvel e Web",
    ],
    image: "/images/agriia-hero.jpg",
  },
  {
    id: "responde-email",
    name: "RespondeEmail",
    type: "Automação & Recursos Humanos",
    status: "Disponível",
    shortDescription:
      "Serviço inteligente de automação de recrutamento para equipas de Recursos Humanos que realiza a triagem de candidaturas, análise curricular e resposta automática por e-mail.",
    fullDescription:
      "O RespondeEmail é uma solução criada pelo Hagriia Labs para optimizar processos de recrutamento e selecção em departamentos de Recursos Humanos. O serviço processa automaticamente os e-mails de candidatura recebidos, analisa os currículos face aos requisitos de cada vaga e assegura uma comunicação rápida e profissional com todos os candidatos.",
    problem:
      "As equipas de Recursos Humanos recebem centenas de candidaturas por correio electrónico para cada vaga aberta, tornando a triagem manual lenta, sujeita a falhas e deixando muitos candidatos sem resposta atempada.",
    solution:
      "Um serviço automatizado ligado ao fluxo de recrutamento por e-mail que lê e interpreta currículos, classifica os perfis de acordo com os critérios definidos pela empresa e envia respostas personalizadas de confirmação ou encaminhamento.",
    highlights: [
      "Recepção e leitura automatizada de candidaturas e currículos por e-mail",
      "Classificação e triagem de candidatos segundo os critérios técnicos da vaga",
      "Envio automático de respostas personalizadas aos candidatos em todas as fases",
      "Redução drástica do tempo operacional das equipas de Recursos Humanos",
    ],
    technologies: [
      "Processamento de Linguagem Natural",
      "Automação de E-mail",
      "Triagem Inteligente de RH",
      "Integração Empresarial",
    ],
    image: "/images/d18fe616-5596-4559-90f5-a90f5397d0d8.png",
  },
  {
    id: "atendimento-multicanal",
    name: "Serviço de Atendimento com SMS, Texto e Voz",
    type: "Comunicação & Atendimento Empresarial",
    status: "Disponível",
    shortDescription:
      "Plataforma e serviço de atendimento automatizado com SMS, mensagens de texto e chamadas de voz para empresas, garantindo comunicação contínua e acessível com os clientes.",
    fullDescription:
      "O Serviço de Atendimento com SMS, Texto e Voz do Hagriia Labs permite às empresas e instituições manterem um canal de atendimento permanente, rápido e inclusivo com os seus clientes. Ao combinar mensagens SMS, canais de texto digitais e atendimento automatizado por voz, a solução adapta-se tanto a utilizadores ligados à internet como a clientes que utilizam apenas a rede telefónica móvel tradicional.",
    problem:
      "Muitas empresas perdem oportunidades ou sobrecarregam as suas equipas de suporte porque os canais de atendimento estão fragmentados ou dependem exclusivamente de ligação à internet por parte do cliente.",
    solution:
      "Uma plataforma unificada que integra fluxos inteligentes de atendimento por SMS, mensagens de texto e voz, permitindo responder a dúvidas frequentes, realizar agendamentos, enviar notificações e encaminhar casos complexos.",
    highlights: [
      "Atendimento bidireccional por SMS sem necessidade de internet no telemóvel do cliente",
      "Atendimento automatizado por voz com compreensão natural e encaminhamento inteligente",
      "Canais de texto integrados para suporte rápido, consultas e alertas transaccionais",
      "Elevada disponibilidade para empresas, banca, logística, saúde e serviços públicos",
    ],
    technologies: [
      "Gateway SMS",
      "Sistemas de Voz (IVR & IA)",
      "Mensagens de Texto",
      "APIs de Integração Empresarial",
    ],
    image: "/images/e26fa9c3-966d-4966-94a4-954a1e511c1c.png",
  },
];

export default function ProjectosPage() {
  const [selectedType, setSelectedType] = useState<string>("Todos");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    selectedType === "Todos"
      ? projects
      : projects.filter((project) => project.type === selectedType);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header forceSolid />

      <section className="mx-auto max-w-6xl px-4 pt-20 pb-20 sm:px-6 md:px-12 md:pt-36 md:pb-28 lg:px-16">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Voltar à página inicial</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="max-w-3xl">
          <h1 className="text-2xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl md:text-3xl">
            Soluções desenvolvidas para desafios reais.
          </h1>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
            Conheça os produtos e projectos criados pelo Hagriia Labs, organizados por área de aplicação. 
            Cada solução parte de necessidades concretas identificadas no terreno e combina engenharia de 
            software com inteligência artificial.
          </p>
        </div>

        {/* Category / Type Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center gap-2.5 border-b border-border pb-6">
          {projectTypes.map((type) => {
            const isActive = selectedType === type;
            return (
              <button
                key={type}
                type="button"
                onClick={() => setSelectedType(type)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition-all sm:text-sm ${
                  isActive
                    ? "bg-foreground text-background shadow-sm"
                    : "border border-border bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                {type}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col overflow-hidden rounded border border-border bg-white shadow-sm transition-all duration-300 hover:shadow-md"
            >
              {/* Card Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                    <Layers className="h-3 w-3" />
                    <span>{project.type}</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    {project.status}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                    {project.name}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.shortDescription}
                  </p>
                </div>

                <div className="mt-6 border-t border-border pt-4">
                  {project.id === "agri-ia" ? (
                    <div className="flex flex-col gap-2">
                      <Link
                        href="/projectos/agri-ia"
                        className="group/btn inline-flex w-full items-center justify-between rounded-full border border-foreground bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all duration-300 hover:bg-background hover:text-foreground"
                      >
                        <span>Ver Apresentação AGRI-IA</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </Link>
                      <button
                        type="button"
                        onClick={() => setActiveProject(project)}
                        className="inline-flex w-full items-center justify-center rounded-full border border-border bg-secondary/50 px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                      >
                        <span>Ver Ficha Técnica</span>
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setActiveProject(project)}
                      className="group/btn inline-flex w-full items-center justify-between rounded-full border border-foreground bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all duration-300 hover:bg-background hover:text-foreground"
                    >
                      <span>Ver mais</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Project Details Modal ("Ver mais") */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-border bg-background p-6 shadow-2xl sm:p-8 md:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setActiveProject(null)}
              aria-label="Fechar detalhes"
              className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-secondary">
              <Image
                src={activeProject.image}
                alt={activeProject.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                  {activeProject.type} · {activeProject.status}
                </span>
                <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                  {activeProject.name}
                </h2>
              </div>
            </div>

            {/* Modal Content */}
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Visão Geral
                </h3>
                <p className="mt-2 text-base leading-relaxed text-foreground">
                  {activeProject.fullDescription}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-secondary/40 p-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                    Problema que Resolve
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {activeProject.problem}
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-secondary/40 p-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                    Solução Proposta
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {activeProject.solution}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Principais Funcionalidades e Capacidades
                </h4>
                <ul className="mt-3 space-y-2.5">
                  {activeProject.highlights.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Domínios Tecnológicos
                </h4>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {activeProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  Fechar janela
                </button>

                <div className="flex flex-wrap items-center gap-3">
                  {activeProject.id === "agri-ia" && (
                    <Link
                      href="/projectos/agri-ia"
                      className="group inline-flex items-center gap-2 rounded-full border border-foreground bg-background px-5 py-3 text-sm font-medium text-foreground transition-all hover:bg-foreground hover:text-background"
                    >
                      <span>Ver Apresentação AGRI-IA</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  )}
                  <Link
                    href="/agendar-consultoria"
                    className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:opacity-85"
                  >
                    <span>Solicitar demonstração deste projecto</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <FooterSection />
    </main>
  );
}
