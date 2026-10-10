"use client";

const specs = [
  { label: "Peso", value: "400g" },
  { label: "Capacidade", value: "0.5L - 2L" },
  { label: "Montagem", value: "2 min" },
  { label: "Tamanho compacto", value: "30 x 15 cm" },
];

export function EditorialSection() {
  return (
    <section className="bg-background">
      {/* Newsletter Banner */}
      

      {/* Decorative Icons */}
      <div className="hidden items-center justify-center gap-6 pb-20 md:flex" />

      {/* Specs Grid */}
      <div className="grid grid-cols-2 border-t border-border md:grid-cols-4">
        {specs.map((spec) => (
          <div
            key={spec.label}
            className="border-b border-border p-5 text-center odd:border-r sm:p-6 md:border-b-0 md:border-r md:p-8 md:last:border-r-0"
          >
            <p className="mb-1.5 text-xs uppercase tracking-widest text-muted-foreground md:mb-2">
              {spec.label}
            </p>
            <p className="text-xl font-medium text-foreground sm:text-2xl md:text-4xl">
              {spec.value}
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
