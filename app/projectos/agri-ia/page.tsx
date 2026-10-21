"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Calendar,
  Send,
  Globe,
  Apple,
  Github,
  Sparkles,
  Leaf,
  Layers,
  ShieldCheck,
  Cpu,
  Clock,
  MapPin,
  Building,
  User,
  Phone,
  Mail,
  X,
} from "lucide-react";
import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";

// Custom Android Logo SVG component to match Apple, Globe, and GitHub
function AndroidIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-1.0001 0-.551.4482-.9996.9993-.9996.5516 0 .9997.4486.9997.9996 0 .5515-.4481 1.0001-.9997 1.0001m-11.046 0c-.5511 0-.9993-.4486-.9993-1.0001 0-.551.4482-.9996.9993-.9996.5516 0 .9997.4486.9997.9996 0 .5515-.4481 1.0001-.9997 1.0001m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5682.1523l-2.0223 3.503C15.5902 8.4116 13.8533 8.081 12 8.081c-1.8533 0-3.5902.3306-5.1362.8688L4.8415 5.4469a.4161.4161 0 00-.5682-.1523.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.741h24c-.3432-4.0821-2.6889-7.5543-6.1185-9.4196" />
    </svg>
  );
}

// Sponsor & Partner Data
const sponsors = [
  {
    name: "Fundo de Apoio ao Desenvolvimento Agrário",
    initials: "FADA",
    role: "Apoio Institucional & Fomento",
    badge: "Fomento Agrícola",
  },
  {
    name: "Instituto de Investigação Agronómica",
    initials: "IIA",
    role: "Validação Científica & Agronómica",
    badge: "Investigação",
  },
  {
    name: "Google for Startups Cloud",
    initials: "Google Cloud",
    role: "Infra-estrutura de IA & Satélite",
    badge: "Tecnologia & IA",
  },
  {
    name: "Associação Nacional de Cooperativas Agrícolas",
    initials: "ANCA",
    role: "Ensaios e Pilotos no Terreno",
    badge: "Comunidade Agrária",
  },
  {
    name: "Hub de Inovação Agroalimentar",
    initials: "AgroTech Hub",
    role: "Aceleração & Parceria Técnica",
    badge: "Inovação",
  },
  {
    name: "Open Agriculture Initiative",
    initials: "OpenAgri",
    role: "Modelos Agro-climáticos Abertos",
    badge: "Ciência Aberta",
  },
];

export default function AgriIAPage() {
  const [isTestModalOpen, setIsTestModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    organizacao: "",
    contacto: "",
    email: "",
    provincia: "Luanda",
    cultura: "Milho e Cereais",
    area: "",
    mensagem: "",
  });

  const handleSubmitTest = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const resetForm = () => {
    setFormSubmitted(false);
    setIsTestModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header with transparent overlay at top, transitions seamlessly */}
      <Header />

      {/* =========================================================================
          HERO SECTION
          (Imagem com overlay, H1, com <p> de descrição. De baixo da descrição ponha
          um texto bem pequeno escrito disponível depois com os logos da plataformas
          web, android, iPhone, GitHub)
          ========================================================================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-black text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/agriia-hero.jpg"
            alt="AGRI-IA — Agricultura de Precisão assistida por Inteligência Artificial no campo"
            fill
            priority
            className="object-cover object-center scale-105 transition-transform duration-1000"
          />
          {/* Multi-layered cinematic overlay for optimum readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/40" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-black/30 to-black/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-5xl px-6 pt-32 pb-20 text-center sm:px-8 md:pt-40 md:pb-28">
          {/* Breadcrumb / Back link */}
          <div className="mb-6 flex items-center justify-center">
            <Link
              href="/projectos"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-md transition-colors hover:bg-white/20 hover:text-white"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Ver todos os projectos</span>
            </Link>
          </div>

          {/* Project Category Tag */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-950/60 px-4 py-1.5 text-xs font-medium text-emerald-300 backdrop-blur-md">
            <Leaf className="h-3.5 w-3.5 text-emerald-400" />
            <span className="tracking-wide uppercase">Agricultura de Precisão · IA Aplicada</span>
          </div>

          {/* H1 Headline */}
          <h1 className="text-3xl font-medium tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4rem] lg:leading-[1.1]">
            AGRI-IA
          </h1>
          <p className="mx-auto mt-2 text-xl font-normal text-white/90 sm:text-2xl md:text-3xl">
            Inteligência Artificial para o Futuro da Agricultura de Precisão.
          </p>

          {/* <p> de descrição */}
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg md:text-xl md:leading-relaxed">
            Uma aplicação e plataforma inteligente desenvolvida pelo <span className="font-semibold text-white">Hagriia Labs</span> que combina visão computacional no terreno, análise biofísica de culturas e integração de dados agronómicos para apoiar agricultores, cooperativas e técnicos agrónomos na tomada de decisões em tempo real.
          </p>

          {/* Available Platforms: Texto bem pequeno escrito disponível depois com os logos das plataformas */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3">
            <p className="text-[11px] font-medium tracking-[0.2em] text-white/60 uppercase">
              Disponível para as plataformas
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {/* Web */}
              <div className="group flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-md transition-all hover:border-white/35 hover:bg-white/20">
                <Globe className="h-4 w-4 text-emerald-400" />
                <span>Web</span>
              </div>

              {/* Android */}
              <div className="group flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-md transition-all hover:border-white/35 hover:bg-white/20">
                <AndroidIcon className="h-4 w-4 text-emerald-400" />
                <span>Android</span>
              </div>

              {/* iPhone */}
              <div className="group flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-md transition-all hover:border-white/35 hover:bg-white/20">
                <Apple className="h-4 w-4 text-emerald-400" />
                <span>iPhone</span>
              </div>

              {/* GitHub */}
              <div className="group flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-md transition-all hover:border-white/35 hover:bg-white/20">
                <Github className="h-4 w-4 text-emerald-400" />
                <span>GitHub</span>
              </div>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setIsTestModalOpen(true)}
              className="group inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all hover:bg-white/90 hover:scale-[1.02] shadow-lg shadow-black/40"
            >
              <Calendar className="h-4 w-4 text-emerald-700" />
              <span>Agendar Teste de Campo</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <a
              href="#section-detalhes"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              <span>Conhecer os Recursos</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1
          (H1, com texto de descrição a esquerda com imagem a direita)
          ========================================================================= */}
      <section id="section-detalhes" className="border-b border-border bg-background py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Column: Description & H1 */}
            <div className="order-1 flex flex-col justify-center">
              <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                <Cpu className="h-4 w-4" />
                <span>Visão Computacional no Terreno</span>
              </div>

              {/* H1 Heading */}
              <h1 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl lg:leading-[1.15]">
                Diagnóstico Fitossanitário Inteligente em Segundos
              </h1>

              {/* Text Description */}
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                <p>
                  Com o <strong className="text-foreground font-semibold">AGRI-IA</strong>, o agricultor ou extensionista aponta a câmara do seu telemóvel para a planta e obtém uma análise imediata do índice de saúde vegetal, detecção de pragas e sintomas de carência nutricional de nitrogénio, fósforo e potássio.
                </p>
                <p>
                  Concebida especificamente para operar em realidades desafiantes, a inteligência da aplicação conta com uma arquitectura <em className="text-foreground">offline-first</em>. As inferências podem ser realizadas directamente no dispositivo móvel, mesmo em zonas rurais sem cobertura de dados móveis ou acesso estável à internet.
                </p>
              </div>

              {/* Feature Highlights */}
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="flex items-start gap-3 rounded-2xl border border-border bg-secondary/50 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <div>
                    <h2 className="text-sm font-semibold text-foreground">Detecção Precoce</h2>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Identificação de fungos, vírus e pragas antes da propagação pela lavra.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-border bg-secondary/50 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <div>
                    <h2 className="text-sm font-semibold text-foreground">Modo Offline no Campo</h2>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Modelos ligeiros que correm localmente no telemóvel em lavras isoladas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-border bg-secondary/50 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <div>
                    <h2 className="text-sm font-semibold text-foreground">Recomendações Práticas</h2>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Indicação de medidas correctivas imediatas e manejo integrado.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-border bg-secondary/50 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <div>
                    <h2 className="text-sm font-semibold text-foreground">Múltiplas Culturas</h2>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Suporte a milho, hortícolas, mandioca, feijão, soja e café.
                    </p>
                  </div>
                </div>
              </div>

              {/* In-section Test Button */}
              <div className="mt-8">
                <button
                  type="button"
                  onClick={() => setIsTestModalOpen(true)}
                  className="group inline-flex items-center gap-2 rounded-full border border-foreground bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:bg-background hover:text-foreground"
                >
                  <span>Agendar teste deste módulo</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="order-2 flex items-center justify-center">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border bg-secondary shadow-xl transition-all duration-500 hover:shadow-2xl">
                <Image
                  src="/images/agriia-diagnosis.jpg"
                  alt="Interface móvel do AGRI-IA a analisar saúde de folha e detecção de pragas"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-black/60 px-4 py-2.5 backdrop-blur-md text-white text-xs">
                  <span className="font-semibold text-emerald-300">Scanner de Campo AGRI-IA:</span> Análise instantânea de saúde foliar e nutrição por IA
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2
          (H1, com texto de descrição a direita com imagem da esquerda)
          ========================================================================= */}
      <section className="border-b border-border bg-secondary/30 py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Column: Image */}
            <div className="order-2 flex items-center justify-center lg:order-1">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border bg-secondary shadow-xl transition-all duration-500 hover:shadow-2xl">
                <Image
                  src="/images/agriia-analytics.jpg"
                  alt="Painel de monitorização por satélite NDVI, humidade do solo e estimativa de safra do AGRI-IA"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-black/60 px-4 py-2.5 backdrop-blur-md text-white text-xs">
                  <span className="font-semibold text-emerald-300">Visão Geoespacial:</span> Mapas de vigor vegetativo NDVI e gestão de humidade do solo
                </div>
              </div>
            </div>

            {/* Right Column: Description & H1 */}
            <div className="order-1 flex flex-col justify-center lg:order-2">
              <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                <Layers className="h-4 w-4" />
                <span>Dados de Satélite & Modelação Agronómica</span>
              </div>

              {/* H1 Heading */}
              <h1 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl lg:leading-[1.15]">
                Monitorização Geoespacial e Gestão Preditiva de Safra
              </h1>

              {/* Text Description */}
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                <p>
                  Além da análise visual individual, a plataforma <strong className="text-foreground font-semibold">AGRI-IA</strong> correlaciona índices de vegetação por satélite (NDVI), previsões agrometeorológicas hiper-locais e métricas de humidade do solo para apresentar uma visão panorâmica de cada parcela da quinta.
                </p>
                <p>
                  Os gestores agrícolas e cooperativas acedem a projecções preditivas de produtividade por talhão, alertas automáticos de stress hídrico e janelas óptimas para sementeira, adubação e colheita — reduzindo o desperdício de água e adubos em até 30%.
                </p>
              </div>

              {/* Bullet Features */}
              <div className="mt-8 space-y-3">
                <div className="flex items-start gap-3 rounded-2xl border border-border bg-background p-4">
                  <div className="rounded-lg bg-emerald-100 p-2 text-emerald-800">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold text-foreground">Economia de Insumos</h2>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      Aplicação de fertilizantes e pesticidas apenas nas zonas onde o mapa de calor acusa necessidade real.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-border bg-background p-4">
                  <div className="rounded-lg bg-emerald-100 p-2 text-emerald-800">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold text-foreground">Previsão e Janela de Colheita</h2>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      Estimativas antecipadas do rendimento da safra para melhorar a comercialização e logística.
                    </p>
                  </div>
                </div>
              </div>

              {/* In-section Test Button */}
              <div className="mt-8">
                <button
                  type="button"
                  onClick={() => setIsTestModalOpen(true)}
                  className="group inline-flex items-center gap-2 rounded-full border border-foreground bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:bg-background hover:text-foreground"
                >
                  <span>Agendar teste de monitorização</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: PATROCINADORES (Logos dos patrocinadores)
          ========================================================================= */}
      <section className="border-b border-border bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600">
              Cooperação & Apoio Institucional
            </p>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Patrocinadores e Parceiros
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
              Organizações, fundos de apoio, entidades académicas e parceiros tecnológicos que colaboram na validação e expansão da AGRI-IA.
            </p>
          </div>

          {/* Sponsors Grid with Clean Monochromatic Logos & Marks */}
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="group relative flex flex-col justify-between rounded-3xl border border-border bg-secondary/30 p-7 transition-all duration-300 hover:border-emerald-500/40 hover:bg-secondary/60 hover:shadow-md"
              >
                <div>
                  {/* Top Badge & Logo mark */}
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-semibold text-emerald-800">
                      {sponsor.badge}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Logo Emblem Icon / Initial graphic */}
                  <div className="mt-5 flex items-center gap-3.5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-background font-mono text-base font-bold text-foreground shadow-sm group-hover:border-emerald-500/50 group-hover:text-emerald-700 transition-colors">
                      {sponsor.initials.slice(0, 3)}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-foreground">
                        {sponsor.initials}
                      </h3>
                      <p className="text-xs font-medium text-emerald-700">
                        {sponsor.role}
                      </p>
                    </div>
                  </div>

                  {/* Full Org Name */}
                  <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                    {sponsor.name}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-1.5 border-t border-border pt-4 text-xs font-medium text-muted-foreground group-hover:text-foreground">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Parceria activa com Hagriia Labs</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          BOTÃO AGENDAR TESTE (Secção Final de Conversão e Chamada de Acção)
          ========================================================================= */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-900">
            <Sparkles className="h-3.5 w-3.5 text-emerald-700" />
            <span>Fase Piloto no Terreno</span>
          </div>

          <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Pronto para testar a AGRI-IA na sua lavra ou exploração?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Estamos a seleccionar agricultores, cooperativas e técnicos agrícolas para ensaios práticos assistidos pela nossa equipa técnica. Agende uma sessão de teste demonstrativo sem qualquer custo.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {/* Primary Test Button */}
            <button
              type="button"
              onClick={() => setIsTestModalOpen(true)}
              className="group inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 text-base font-semibold text-background shadow-lg transition-all hover:scale-[1.02] hover:opacity-95"
            >
              <Calendar className="h-5 w-5 text-emerald-400" />
              <span>Agendar teste</span>
              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <Link
              href="/agendar-consultoria"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-4 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <span>Consultoria Técnica Completa</span>
            </Link>
          </div>

          <p className="mt-5 text-xs text-muted-foreground">
            Contacto directo: <span className="font-mono font-medium text-foreground">geral@hagrilabs.com</span> · Resposta em menos de 24 horas
          </p>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE MODAL: AGENDAR TESTE
          ========================================================================= */}
      {isTestModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setIsTestModalOpen(false)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-border bg-background p-6 shadow-2xl sm:p-8 md:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setIsTestModalOpen(false)}
              aria-label="Fechar"
              className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              <X className="h-5 w-5" />
            </button>

            {!formSubmitted ? (
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-600">
                  <Leaf className="h-4 w-4" />
                  <span>Inscrição para Teste Piloto</span>
                </div>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  Agendar Teste da AGRI-IA
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Preencha os dados da sua exploração ou iniciativa agrícola. A nossa equipa entrará em contacto para coordenar a instalação da aplicação e o plano de ensaio no terreno.
                </p>

                <form onSubmit={handleSubmitTest} className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Nome Completo *
                      </label>
                      <div className="relative mt-1.5">
                        <User className="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground" />
                        <input
                          type="text"
                          required
                          value={formData.nome}
                          onChange={(e) =>
                            setFormData({ ...formData, nome: e.target.value })
                          }
                          placeholder="Ex: Manuel Silva"
                          className="w-full rounded-xl border border-border bg-background py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Organização ou Fazenda
                      </label>
                      <div className="relative mt-1.5">
                        <Building className="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground" />
                        <input
                          type="text"
                          value={formData.organizacao}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              organizacao: e.target.value,
                            })
                          }
                          placeholder="Ex: Cooperativa Agro-Verde"
                          className="w-full rounded-xl border border-border bg-background py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Telefone / WhatsApp *
                      </label>
                      <div className="relative mt-1.5">
                        <Phone className="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground" />
                        <input
                          type="tel"
                          required
                          value={formData.contacto}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              contacto: e.target.value,
                            })
                          }
                          placeholder="+244 9xx xxx xxx"
                          className="w-full rounded-xl border border-border bg-background py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        E-mail de Contacto *
                      </label>
                      <div className="relative mt-1.5">
                        <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="seu.email@exemplo.com"
                          className="w-full rounded-xl border border-border bg-background py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Província / Região
                      </label>
                      <div className="relative mt-1.5">
                        <MapPin className="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground" />
                        <select
                          value={formData.provincia}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              provincia: e.target.value,
                            })
                          }
                          className="w-full rounded-xl border border-border bg-background py-3 pl-10 pr-4 text-sm text-foreground focus:border-foreground focus:outline-none"
                        >
                          <option value="Bengo">Bengo</option>
                          <option value="Benguela">Benguela</option>
                          <option value="Bié">Bié</option>
                          <option value="Cabinda">Cabinda</option>
                          <option value="Cuanza Norte">Cuanza Norte</option>
                          <option value="Cuanza Sul">Cuanza Sul</option>
                          <option value="Huambo">Huambo</option>
                          <option value="Huíla">Huíla</option>
                          <option value="Luanda">Luanda</option>
                          <option value="Malanje">Malanje</option>
                          <option value="Uíge">Uíge</option>
                          <option value="Zaire">Zaire</option>
                          <option value="Outra">Outra região</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Cultura Principal
                      </label>
                      <select
                        value={formData.cultura}
                        onChange={(e) =>
                          setFormData({ ...formData, cultura: e.target.value })
                        }
                        className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-foreground focus:outline-none"
                      >
                        <option value="Milho e Cereais">Milho e Cereais</option>
                        <option value="Hortícolas e Legumes">Hortícolas e Legumes</option>
                        <option value="Mandioca e Tubérculos">Mandioca e Tubérculos</option>
                        <option value="Soja e Leguminosas">Soja e Leguminosas</option>
                        <option value="Café e Fruteiras">Café e Fruteiras</option>
                        <option value="Outra Cultura">Outra Cultura</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Área (Hectares)
                      </label>
                      <input
                        type="text"
                        value={formData.area}
                        onChange={(e) =>
                          setFormData({ ...formData, area: e.target.value })
                        }
                        placeholder="Ex: 50 ha"
                        className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Notas ou objectivos específicos para o teste
                    </label>
                    <textarea
                      rows={3}
                      value={formData.mensagem}
                      onChange={(e) =>
                        setFormData({ ...formData, mensagem: e.target.value })
                      }
                      placeholder="Descreva que desafios de pragas, solo ou rega gostaria de analisar com a AGRI-IA..."
                      className="mt-1.5 w-full rounded-xl border border-border bg-background p-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-muted-foreground">
                      Dados encaminhados directamente para <span className="font-semibold text-foreground">geral@hagrilabs.com</span>
                    </p>
                    <button
                      type="submit"
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-all hover:opacity-90"
                    >
                      <Send className="h-4 w-4" />
                      <span>Confirmar Agendamento</span>
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="py-6 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
                  Pedido de Teste Registado!
                </h3>
                <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
                  Obrigado, <strong className="text-foreground">{formData.nome || "pelo seu interesse"}</strong>. A equipa do Hagriia Labs entrará em contacto através do e-mail{" "}
                  <strong className="text-foreground">{formData.email || "indicado"}</strong> ou contacto telefónico para agendar a demonstração no terreno.
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="rounded-full bg-foreground px-6 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
                  >
                    Concluir
                  </button>
                  <a
                    href={`mailto:geral@hagrilabs.com?subject=Agendamento%20Teste%20AGRI-IA%20-%20${encodeURIComponent(formData.nome)}&body=Nome:%20${encodeURIComponent(formData.nome)}%0AOrganizacao:%20${encodeURIComponent(formData.organizacao)}%0AContacto:%20${encodeURIComponent(formData.contacto)}%0AEmail:%20${encodeURIComponent(formData.email)}%0AProvincia:%20${encodeURIComponent(formData.provincia)}%0ACultura:%20${encodeURIComponent(formData.cultura)}%0AArea:%20${encodeURIComponent(formData.area)}%0AMensagem:%20${encodeURIComponent(formData.mensagem)}`}
                    className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Abrir no seu leitor de e-mail</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <FooterSection />
    </main>
  );
}
