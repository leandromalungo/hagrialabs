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
            Contacto e Colaboração
          </p>
          <h2 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
            Vamos explorar novas possibilidades?
          </h2>
          <p className="mt-6 max-w-4xl text-xl leading-relaxed text-muted-foreground sm:text-2xl md:text-3xl lg:leading-snug">
            Estamos disponíveis para conhecer propostas, discutir desafios tecnológicos e explorar oportunidades de colaboração. Entra em contacto com o Hagriia Labs para apresentar a tua ideia ou iniciar uma conversa sobre um possível projecto.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4 md:mt-10">
            <Link
              href="/contactos"
              className="group inline-flex items-center gap-1.5 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-all hover:opacity-85"
            >
              <span>Entrar em contacto</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/agendar-consultoria"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <span>Propor uma colaboração</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Section Image */}
      <div className="relative aspect-[16/9] w-full">
        <Image
          src="/images/3d4046a0-b072-4b07-941f-9141ee3ed4a7.png"
          alt="Horizonte de exploração tecnológica — Hagriia Labs"
          fill
          className="object-cover"
        />
        {/* Fade gradient overlay - white at bottom fading to transparent at top */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>
    </section>
  );
}
