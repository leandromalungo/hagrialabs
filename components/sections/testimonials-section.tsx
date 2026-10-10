"use client";

import Image from "next/image";

export function TestimonialsSection() {
  return (
    <section id="about" className="bg-background">
      {/* Large Text Statement */}
      <div className="px-6 py-14 md:px-12 md:py-32 lg:px-20 lg:py-40">
        <p className="mx-auto max-w-5xl text-xl leading-relaxed text-foreground sm:text-2xl md:text-3xl lg:text-[2.5rem] lg:leading-snug">
          Os acessórios Alpine & Forest combinam materiais de grau aeroespacial com tecnologia de ponta — 
          projetados para exploradores que não abrem mão da qualidade ou da performance na natureza.
        </p>
      </div>

      {/* About Image */}
      <div className="relative aspect-[16/9] w-full">
        <Image
          src="/images/3d4046a0-b072-4b07-941f-9141ee3ed4a7.png"
          alt="Picos das montanhas ao nascer do sol"
          fill
          className="object-cover"
        />
        {/* Fade gradient overlay - white at bottom fading to transparent at top */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>
    </section>
  );
}
