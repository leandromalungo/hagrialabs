"use client";

const specs = [
  {
    label: "01 · Abordagem de Referência",
    value: "Identificar",
    description:
      "Compreender o problema, o contexto e as necessidades que justificam o desenvolvimento de uma solução.",
  },
  {
    label: "02 · Investigação",
    value: "Explorar",
    description:
      "Investigar alternativas, estudar tecnologias e avaliar possíveis abordagens.",
  },
  {
    label: "03 · Engenharia",
    value: "Desenvolver",
    description:
      "Construir protótipos, aplicações ou sistemas que permitam testar as hipóteses identificadas.",
  },
  {
    label: "04 · Evolução Contínua",
    value: "Validar e aperfeiçoar",
    description:
      "Avaliar os resultados, identificar limitações e melhorar a solução com base em testes e evidências.",
  },
];

export function EditorialSection() {
  return (
    <section id="como-trabalhamos" className="bg-background">
      {/* Section Header */}
      <div className="px-6 pt-6 pb-8 text-center md:px-12 md:pt-10 md:pb-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Como Trabalhamos
        </p>
        <h2 className="mt-2 text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
          Da Identificação do Problema à Validação Prática
        </h2>
      </div>

      {/* 4-Stage Methodology Grid */}
      <div className="grid grid-cols-1 border-t border-border sm:grid-cols-2 md:grid-cols-4">
        {specs.map((spec) => (
          <div
            key={spec.label}
            className="border-b border-border p-6 text-left sm:odd:border-r md:border-b-0 md:border-r md:p-8 md:last:border-r-0"
          >
            <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
              {spec.label}
            </p>
            <p className="text-xl font-medium text-foreground sm:text-2xl md:text-2xl lg:text-3xl">
              {spec.value}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {spec.description}
            </p>
          </div>
        ))}
      </div>

      {/* Full-width Video */}
      <div className="relative aspect-[16/9] w-full overflow-hidden md:aspect-[21/9]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bcdafadc-cb7e-4cb7-9cbf-edcbaf2360a5_1-cNBCz5fomcLRmm1cTXSBOKCq10VP91.mp4"
        />
        {/* Video Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-black/35 bg-gradient-to-t from-black/65 via-black/25 to-black/20" />
      </div>
    </section>
  );
}
