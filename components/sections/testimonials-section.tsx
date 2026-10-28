"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section id="about" className="bg-background">
      {/* Contact & Collaboration Statement */}
      <div className="px-6 py-14 md:px-12 md:py-28 lg:px-20 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground md:mb-6">
            Inicie o Seu Projeto
          </p>
          <h2 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
            Pronto para modernizar as operações da sua organização?
          </h2>
          <p className="mt-6 max-w-4xl text-xl leading-relaxed text-muted-foreground sm:text-2xl md:text-3xl lg:leading-snug">
            Seja para implementar uma das nossas soluções prontas (AGRI-IA, RespondeEmail ou Atendimento Multicanal) ou para desenvolver um sistema à medida, a equipa de engenharia da Hagriia Labs está disponível para analisar o seu desafio.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4 md:mt-10">
            <Link
              href="/agendar-consultoria"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-all hover:opacity-85 shadow-sm"
            >
              <span>Agendar Sessão de Diagnóstico</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/contactos"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <span>Falar com a Equipa Técnica</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Section Image */}
      <div className="relative aspect-[16/9] w-full">
        <Image
          src="/bgfull.jpg"
          alt="Horizonte de exploração tecnológica — Hagriia Labs"
          fill
          sizes="100vw"
          loading="lazy"
          className="object-cover"
        />
        {/* Fade gradient overlay - white at bottom fading to transparent at top */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>
    </section>
  );
}
