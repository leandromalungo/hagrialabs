"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Copy,
  Check,
  Mail,
  Building2,
  User,
  Phone,
  FileText,
  Sparkles,
} from "lucide-react";
import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";

interface FormState {
  nome: string;
  perfil: string;
  cargo: string;
  organizacao: string;
  sector: string;
  email: string;
  telefone: string;
  localizacao: string;
  area: string;
  prazo: string;
  modalidade: string;
  assunto: string;
  mensagem: string;
}

const initialFormState: FormState = {
  nome: "",
  perfil: "Representante de Empresa",
  cargo: "",
  organizacao: "",
  sector: "Tecnologia e Telecomunicações",
  email: "",
  telefone: "",
  localizacao: "Luanda, Angola",
  area: "Desenvolvimento de Software",
  prazo: "Curto prazo (1 a 3 meses)",
  modalidade: "Videoconferência (Online)",
  assunto: "",
  mensagem: "",
};

const perfis = [
  "Representante de Empresa",
  "Instituição Pública / Governamental",
  "Universidade / Centro de Investigação",
  "Empreendedor / Startup",
  "Investigador / Profissional Independente",
  "Organização Não-Governamental",
  "Outro",
];

const sectores = [
  "Tecnologia e Telecomunicações",
  "Educação e Investigação Científica",
  "Finanças, Banca e Seguros",
  "Energia, Indústria e Recursos Naturais",
  "Logística, Transportes e Mobilidade",
  "Saúde e Biotecnologia",
  "Agricultura, Ambiente e Observação da Terra",
  "Administração e Serviços Públicos",
  "Comércio e Serviços",
  "Outro",
];

const areasTecnologicas = [
  "Desenvolvimento de Software",
  "Inteligência Artificial e Sistemas Inteligentes",
  "Investigação Aplicada e Prototipagem",
  "Dados, Análise e Modelação Computacional",
  "Arquitectura de Sistemas e Consultoria Técnica",
  "Observação da Terra e Dados Espaciais",
  "Parceria Tecnológica ou Cooperação Institucional",
];

const prazos = [
  "Imediato (menos de 1 mês)",
  "Curto prazo (1 a 3 meses)",
  "Médio prazo (3 a 6 meses)",
  "Exploratório / Longo prazo",
];

const modalidades = [
  "Videoconferência (Online)",
  "Reunião Presencial",
  "Contacto Telefónico Inicial",
];

export default function AgendarConsultoriaPage() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg(null);
  };

  const buildEmailSummary = (data: FormState) => {
    return [
      `PEDIDO DE CONSULTORIA / COLABORAÇÃO — HAGRIIA LABS`,
      `--------------------------------------------------`,
      `Nome completo: ${data.nome}`,
      `Quem é (Perfil): ${data.perfil}`,
      `Cargo / Função: ${data.cargo || "Não especificado"}`,
      `Empresa / Instituição: ${data.organizacao}`,
      `Sector de Actividade: ${data.sector}`,
      `E-mail: ${data.email}`,
      `Telefone / WhatsApp: ${data.telefone}`,
      `Localização: ${data.localizacao || "Não especificado"}`,
      `Área de Interesse: ${data.area}`,
      `Prazo Estimado: ${data.prazo}`,
      `Modalidade Preferida: ${data.modalidade}`,
      `--------------------------------------------------`,
      `Assunto: ${data.assunto}`,
      ``,
      `Descrição do Desafio / Projecto:`,
      data.mensagem,
    ].join("\n");
  };

  const buildMailtoHref = (data: FormState) => {
    const subject = encodeURIComponent(
      `[Hagriia Labs — Consultoria] ${data.assunto} — ${data.organizacao || data.nome}`
    );
    const body = encodeURIComponent(buildEmailSummary(data));
    return `mailto:lmalungo@outlook.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (
      !formData.nome.trim() ||
      !formData.organizacao.trim() ||
      !formData.email.trim() ||
      !formData.telefone.trim() ||
      !formData.assunto.trim() ||
      !formData.mensagem.trim()
    ) {
      setErrorMsg(
        "Por favor, preencha todos os campos obrigatórios assinalados com *."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/consultoria", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok || !result.ok) {
        setErrorMsg(
          result.error || "Não foi possível submeter o formulário. Tente novamente."
        );
        setIsSubmitting(false);
        return;
      }

      // Trigger mailto link to lmalungo@outlook.com as direct guarantee
      const mailtoUrl = buildMailtoHref(formData);
      const link = document.createElement("a");
      link.href = mailtoUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setIsSubmitted(true);
    } catch {
      // Even if network fails, allow direct email sending to lmalungo@outlook.com
      const mailtoUrl = buildMailtoHref(formData);
      const link = document.createElement("a");
      link.href = mailtoUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopySummary = async () => {
    try {
      await navigator.clipboard.writeText(buildEmailSummary(formData));
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header forceSolid />

      <section className="mx-auto max-w-6xl px-4 pt-28 pb-20 sm:px-6 md:px-12 md:pt-36 md:pb-28 lg:px-16">
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

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column — Institutional Context & Steps */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Consultoria Técnica e Investigação
            </p>
         
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              Apresente o seu desafio tecnológico, proposta de investigação ou necessidade de desenvolvimento de software. A nossa equipa analisa cada pedido para estruturar uma abordagem técnica adequada ao seu contexto.
            </p>

            {/* Reference Methodology Cards */}
            <div className="mt-10 space-y-4 border-t border-border pt-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-foreground">
                O que acontece a seguir
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded border border-border bg-secondary/40 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    01 · Análise Preliminar
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-foreground">
                    Avaliamos o contexto, os objectivos e os requisitos técnicos descritos no formulário.
                  </p>
                </div>

                <div className="rounded border border-border bg-secondary/40 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    02 · Sessão de Diagnóstico
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-foreground">
                    Agendamos uma conversa técnica para aprofundar o problema e alinhar possíveis soluções.
                  </p>
                </div>

                <div className="rounded border border-border bg-secondary/40 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    03 · Proposta Técnica
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-foreground">
                    Definimos a arquitectura de referência, etapas de prototipagem ou plano de desenvolvimento.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Contact Box */}
            <div className="mt-8 rounded border border-border bg-background p-5">
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-foreground text-background">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Destinatário Directo
                  </p>
                  <a
                    href="mailto:lmalungo@outlook.com"
                    className="mt-0.5 block text-base font-medium text-foreground underline-offset-4 hover:underline"
                  >
                    geral@hagrialabs.com
                  </a>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    Todas as informações submetidas neste formulário são encaminhadas directamente para este endereço.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column — Comprehensive Form or Confirmation State */}
          <div className="lg:col-span-7">
            <div className="rounded border border-border bg-white p-6 shadow sm:p-8 md:p-10">
              {isSubmitted ? (
                <div className="py-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>

                  <h2 className="mt-5 text font-semibold tracking-tight text-foreground sm:text-3xl">
                    Pedido preparado e encaminhado com sucesso.
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    Os dados da sua solicitação foram formatados e direcionados para{" "}
                    <span className="font-medium text-foreground">
                      lmalungo@outlook.com
                    </span>
                    . Caso o seu cliente de correio electrónico não tenha aberto automaticamente, utilize o botão abaixo para concluir o envio imediato.
                  </p>

                  {/* Summary Preview */}
                  <div className="mt-6 rounded border border-border bg-secondary/40 p-5 text-sm">
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div>
                        <span className="text-xs uppercase tracking-wider text-muted-foreground">
                          Nome
                        </span>
                        <p className="font-medium text-foreground">
                          {formData.nome}
                        </p>
                      </div>
                      <div>
                        <span className="text-xs uppercase tracking-wider text-muted-foreground">
                          Quem é / Perfil
                        </span>
                        <p className="font-medium text-foreground">
                          {formData.perfil}
                        </p>
                      </div>
                      <div>
                        <span className="text-xs uppercase tracking-wider text-muted-foreground">
                          Empresa / Instituição
                        </span>
                        <p className="font-medium text-foreground">
                          {formData.organizacao}
                        </p>
                      </div>
                      <div>
                        <span className="text-xs uppercase tracking-wider text-muted-foreground">
                          Contactos
                        </span>
                        <p className="font-medium text-foreground">
                          {formData.email} · {formData.telefone}
                        </p>
                      </div>
                      <div className="sm:col-span-2">
                        <span className="text-xs uppercase tracking-wider text-muted-foreground">
                          Assunto
                        </span>
                        <p className="font-medium text-foreground">
                          {formData.assunto}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <a
                      href={buildMailtoHref(formData)}
                      className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-all hover:opacity-85"
                    >
                      <span>Enviar no cliente de e-mail (lmalungo@outlook.com)</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>

                    <button
                      type="button"
                      onClick={handleCopySummary}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                    >
                      {copied ? (
                        <>
                          <Check className="h-4 w-4" />
                          <span>Dados copiados</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" />
                          <span>Copiar resumo</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData(initialFormState);
                      }}
                      className="px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      Preencher novo formulário
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                  {/* Group 1: Identificação Pessoal */}
                  <div>
                    <div className="mb-4 flex items-center gap-2 border-b border-border pb-2.5">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                        1. Identificação e Perfil
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="nome"
                          className="mb-1.5 block text-sm font-medium text-foreground"
                        >
                          Nome completo <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="nome"
                          name="nome"
                          type="text"
                          required
                          value={formData.nome}
                          onChange={handleChange}
                          placeholder="Ex.: João Manuel dos Santos"
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="perfil"
                          className="mb-1.5 block text-sm font-medium text-foreground"
                        >
                          Quem é / Perfil <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="perfil"
                          name="perfil"
                          value={formData.perfil}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-foreground focus:outline-none"
                        >
                          {perfis.map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="cargo"
                          className="mb-1.5 block text-sm font-medium text-foreground"
                        >
                          Cargo ou função
                        </label>
                        <input
                          id="cargo"
                          name="cargo"
                          type="text"
                          value={formData.cargo}
                          onChange={handleChange}
                          placeholder="Ex.: Director Técnico, Investigador, Gestor..."
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Group 2: Empresa ou Instituição */}
                  <div>
                    <div className="mb-4 flex items-center gap-2 border-b border-border pb-2.5">
                      <Building2 className="h-4 w-4 text-muted-foreground" />
                      <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                        2. Empresa ou Instituição
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="organizacao"
                          className="mb-1.5 block text-sm font-medium text-foreground"
                        >
                          Empresa, instituição ou organização{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="organizacao"
                          name="organizacao"
                          type="text"
                          required
                          value={formData.organizacao}
                          onChange={handleChange}
                          placeholder="Nome da empresa, universidade ou entidade"
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="sector"
                          className="mb-1.5 block text-sm font-medium text-foreground"
                        >
                          Sector de actividade
                        </label>
                        <select
                          id="sector"
                          name="sector"
                          value={formData.sector}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-foreground focus:outline-none"
                        >
                          {sectores.map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Group 3: Contactos */}
                  <div>
                    <div className="mb-4 flex items-center gap-2 border-b border-border pb-2.5">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                        3. Contactos e Localização
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                      <div className="sm:col-span-1">
                        <label
                          htmlFor="email"
                          className="mb-1.5 block text-sm font-medium text-foreground"
                        >
                          E-mail <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="nome@empresa.com"
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none"
                        />
                      </div>

                      <div className="sm:col-span-1">
                        <label
                          htmlFor="telefone"
                          className="mb-1.5 block text-sm font-medium text-foreground"
                        >
                          Telefone / WhatsApp <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="telefone"
                          name="telefone"
                          type="tel"
                          required
                          value={formData.telefone}
                          onChange={handleChange}
                          placeholder="+244 9XX XXX XXX"
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none"
                        />
                      </div>

                      <div className="sm:col-span-1">
                        <label
                          htmlFor="localizacao"
                          className="mb-1.5 block text-sm font-medium text-foreground"
                        >
                          Cidade / País
                        </label>
                        <input
                          id="localizacao"
                          name="localizacao"
                          type="text"
                          value={formData.localizacao}
                          onChange={handleChange}
                          placeholder="Luanda, Angola"
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Group 4: Enquadramento Técnico e Assunto */}
                  <div>
                    <div className="mb-4 flex items-center gap-2 border-b border-border pb-2.5">
                      <Sparkles className="h-4 w-4 text-muted-foreground" />
                      <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                        4. Enquadramento da Consultoria
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="area"
                          className="mb-1.5 block text-sm font-medium text-foreground"
                        >
                          Área tecnológica principal
                        </label>
                        <select
                          id="area"
                          name="area"
                          value={formData.area}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-foreground focus:outline-none"
                        >
                          {areasTecnologicas.map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="prazo"
                          className="mb-1.5 block text-sm font-medium text-foreground"
                        >
                          Horizonte temporal / Prazo
                        </label>
                        <select
                          id="prazo"
                          name="prazo"
                          value={formData.prazo}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-foreground focus:outline-none"
                        >
                          {prazos.map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="modalidade"
                          className="mb-1.5 block text-sm font-medium text-foreground"
                        >
                          Modalidade de sessão preferida
                        </label>
                        <select
                          id="modalidade"
                          name="modalidade"
                          value={formData.modalidade}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-foreground focus:outline-none"
                        >
                          {modalidades.map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Group 5: Assunto e Descrição */}
                  <div>
                    <div className="mb-4 flex items-center gap-2 border-b border-border pb-2.5">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                        5. Assunto e Descrição do Projecto
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label
                          htmlFor="assunto"
                          className="mb-1.5 block text-sm font-medium text-foreground"
                        >
                          Assunto <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="assunto"
                          name="assunto"
                          type="text"
                          required
                          value={formData.assunto}
                          onChange={handleChange}
                          placeholder="Resumo breve do pedido de consultoria ou projecto"
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="mensagem"
                          className="mb-1.5 block text-sm font-medium text-foreground"
                        >
                          Descrição detalhada da necessidade, problema ou ideia{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="mensagem"
                          name="mensagem"
                          rows={5}
                          required
                          value={formData.mensagem}
                          onChange={handleChange}
                          placeholder="Descreva o desafio que pretende resolver, os objectivos esperados e quaisquer detalhes técnicos relevantes..."
                          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm leading-relaxed text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {errorMsg && (
                    <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                      {errorMsg}
                    </div>
                  )}

                  {/* Submit Action */}
                  <div className="flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
                   
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-all hover:opacity-85 disabled:opacity-50"
                    >
                      <span>
                        {isSubmitting
                          ? "Enviando..."
                          : "Enviar"}
                      </span>
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
