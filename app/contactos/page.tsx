"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Copy,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MessageSquare,
  Youtube,
  Calendar,
} from "lucide-react";
import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";

export default function ContactosPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [nome, setNome] = useState("");
  const [contacto, setContacto] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("lmalungo@outlook.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      setCopiedEmail(false);
    }
  };

  const handleQuickSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome.trim() || !contacto.trim() || !mensagem.trim()) return;

    setIsSending(true);
    try {
      await fetch("/api/consultoria", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome,
          perfil: "Contacto Rápido",
          organizacao: "Contacto Directo via Página de Contactos",
          email: contacto,
          telefone: contacto,
          assunto: `Mensagem rápida de ${nome}`,
          mensagem,
        }),
      });
    } catch {
      // Fallback handled by mailto below
    }

    const subject = encodeURIComponent(
      `[Hagriia Labs — Contacto] Mensagem de ${nome}`
    );
    const body = encodeURIComponent(
      `Nome: ${nome}\nContacto (E-mail / Telefone): ${contacto}\n\nMensagem:\n${mensagem}`
    );
    const link = document.createElement("a");
    link.href = `mailto:lmalungo@outlook.com?subject=${subject}&body=${body}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setIsSending(false);
    setSent(true);
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

        {/* Page Title */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Contactos · Hagriia Labs
          </p>
          <h1 className="mt-3 text-2xl font-medium leading-tight tracking-tight text-foreground sm:text-2xl md:text-3xl">
            Formas simples e directas de falar connosco.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Estamos disponíveis para esclarecer dúvidas, conhecer ideias, discutir desafios tecnológicos e explorar oportunidades de colaboração. Escolha o canal mais conveniente para si.
          </p>
        </div>

        {/* Direct Contact Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Card 1: Direct Email */}
          <div className="flex flex-col justify-between rounded border border-border bg-white p-6 shadow-sm sm:p-8">
            <div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground text-background">
                <Mail className="h-5 w-5" />
              </div>
              <h2 className="mt-6 text-xl font-semibold text-foreground">
                Correio Electrónico
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Envie-nos um e-mail directo para questões gerais, propostas de parceria ou informações sobre os nossos projectos.
              </p>
              <p className="mt-4 font-mono text-sm font-medium text-foreground">
                geral@hagrilabs.com
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2.5 pt-4 border-t border-border">
              <a
                href="mailto:lmalungo@outlook.com?subject=Contacto%20—%20Hagriia%20Labs"
                className="group inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2.5 text-xs font-medium text-background transition-all hover:opacity-85"
              >
                <span>Abrir E-mail</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2.5 text-xs font-medium text-foreground transition-colors hover:bg-secondary"
              >
                {copiedEmail ? (
                  <>
                    <Check className="h-3.5 w-3.5" />
                    <span>Copiado</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>Copiar e-mail</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Card 2: Schedule Consultation */}
          <div className="flex flex-col justify-between rounded border border-border bg-white p-6 shadow-sm sm:p-8">
            <div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground text-background">
                <Calendar className="h-5 w-5" />
              </div>
              <h2 className="mt-6 text-xl font-semibold text-foreground">
                Agendar Consultoria
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Tem um projecto específico ou representa uma empresa ou instituição? Utilize o formulário completo de diagnóstico 
                técnico.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-border">
              <Link
                href="/agendar-consultoria"
                className="group inline-flex w-full items-center justify-between rounded-full bg-foreground px-5 py-2.5 text-xs font-medium text-background transition-all hover:opacity-85 sm:text-sm"
              >
                <span>Agendar consultoria</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Card 3: Social Networks */}
          <div className="flex flex-col justify-between rounded border border-border bg-white p-6 shadow-sm sm:p-8">
            <div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground text-background">
                <MessageSquare className="h-5 w-5" />
              </div>
              <h2 className="mt-6 text-xl font-semibold text-foreground">
                Redes Sociais
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Acompanhe as novidades, publicações técnicas e iniciativas do Hagriia Labs através dos nossos perfis oficiais.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3 pt-4 border-t border-border">
              {[
                { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com" },
                { label: "Instagram", icon: Instagram, href: "https://www.instagram.com" },
                { label: "Facebook", icon: Facebook, href: "https://www.facebook.com" },
                { label: "YouTube", icon: Youtube, href: "https://www.youtube.com" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary/50 text-foreground transition-colors hover:bg-foreground hover:text-background"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Simple Quick Message Box */}
        <div className="mt-12 rounded border border-border bg-secondary/30 p-6 sm:p-8 md:p-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Mensagem Rápida
              </p>
              <h2 className="mt-2 text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                Envie-nos uma mensagem rápida.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                Se preferir deixar apenas o seu nome, contacto e uma breve mensagem, preencha os três campos ao lado e enviaremos a sua nota directamente para{" "}
                <span className="font-medium text-foreground">
                  geral@hagrialabs.com
                </span>
                .
              </p>
            </div>

            <div className="lg:col-span-7">
              {sent ? (
                <div className="rounded border border-border bg-white p-6">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-foreground" />
                    <h3 className="text-lg font-medium text-foreground">
                      Mensagem encaminhada para lmalungo@outlook.com
                    </h3>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Obrigado pelo seu contacto. Responderemos com a maior brevidade possível.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSent(false);
                      setNome("");
                      setContacto("");
                      setMensagem("");
                    }}
                    className="mt-4 text-xs font-semibold uppercase tracking-wider text-foreground underline underline-offset-4"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleQuickSend}
                  className="grid grid-cols-1 gap-4 rounded border border-border bg-white p-6 sm:grid-cols-2"
                >
                  <div>
                    <label
                      htmlFor="quick-nome"
                      className="mb-1.5 block text-xs font-medium text-foreground"
                    >
                      O seu nome *
                    </label>
                    <input
                      id="quick-nome"
                      type="text"
                      required
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      placeholder="Nome completo"
                      className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="quick-contacto"
                      className="mb-1.5 block text-xs font-medium text-foreground"
                    >
                      E-mail ou Telefone *
                    </label>
                    <input
                      id="quick-contacto"
                      type="text"
                      required
                      value={contacto}
                      onChange={(e) => setContacto(e.target.value)}
                      placeholder="email@exemplo.com ou +244..."
                      className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="quick-mensagem"
                      className="mb-1.5 block text-xs font-medium text-foreground"
                    >
                      Mensagem *
                    </label>
                    <textarea
                      id="quick-mensagem"
                      rows={3}
                      required
                      value={mensagem}
                      onChange={(e) => setMensagem(e.target.value)}
                      placeholder="Como podemos ajudar?"
                      className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none"
                    />
                  </div>

                  <div className="sm:col-span-2 flex justify-end">
                    <button
                      type="submit"
                      disabled={isSending}
                      className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:opacity-85 disabled:opacity-50"
                    >
                      <span>{isSending ? "A enviar..." : "Enviar mensagem"}</span>
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
