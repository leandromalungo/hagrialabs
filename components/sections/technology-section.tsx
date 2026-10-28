"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Plus } from "lucide-react";

function ScrollRevealText({ text }: { text: string }) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) return;
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Wide scroll range for a slower, gradual word-by-word reveal
      const startOffset = windowHeight * 0.98;
      const endOffset = -windowHeight * 0.1;
      
      const totalDistance = startOffset - endOffset;
      const currentPosition = startOffset - rect.top;
      
      const newProgress = Math.max(0, Math.min(1, currentPosition / totalDistance));
      setProgress(newProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const words = text.split(" ");
  
  return (
    <>
      {/* Mobile static text without scroll-by-word color animation */}
      <p className="text-xl font-semibold leading-relaxed text-foreground sm:text-2xl md:hidden">
        {text}
      </p>

      {/* Desktop scroll-reveal text (md and up) — slower transition & higher visibility */}
      <p
        ref={containerRef}
        className="hidden font-semibold leading-snug text-foreground md:block md:text-3xl lg:text-[2.5rem] lg:leading-snug"
      >
        {words.map((word, index) => {
          const wordProgress = index / words.length;
          const isRevealed = progress >= wordProgress;
          
          return (
            <span
              key={index}
              className="transition-opacity duration-[1200ms] ease-out"
              style={{
                color: "var(--foreground)",
                opacity: isRevealed ? 1 : 0.48,
              }}
            >
              {word}{index < words.length - 1 ? " " : ""}
            </span>
          );
        })}
      </p>
    </>
  );
}

const sideImages = [
  {
    src: "/side6.jpg",
    alt: "Trilha na floresta",
    position: "left",
    span: 1,
  },
  {
    src: "/side8.jpg",
    alt: "Pico da montanha",
    position: "left",
    span: 1,
  },
  {
    src: "/side4.jpg",
    alt: "Paisagem alpina",
    position: "right",
    span: 1,
  },
  {
    src: "/side7.jpg",
    alt: "Montanha nevada",
    position: "right",
    span: 1,
  },
];

const faqItems = [
  {
    question: "Que tipo de projetos a Hagriia Labs desenvolve?",
    answer:
      "Desenvolvemos produtos tecnológicos próprios (como a AGRI-IA para agricultura de precisão, o RespondeEmail para automação de RH e o Atendimento Multicanal SMS/Voz) e criamos sistemas de software e inteligência artificial à medida para empresas, instituições públicas e startups.",
  },
  {
    question: "Como a Hagriia Labs garante que as soluções funcionam no terreno?",
    answer:
      "Todas as nossas soluções são testadas em condições reais de operação, com utilizadores reais e limitações de infraestrutura (incluindo funcionamento sem cobertura de internet ou através de telemóveis simples).",
  },
  {
    question: "A Hagriia Labs está aberta a parcerias e investidores?",
    answer:
      "Sim. Colaboramos ativamente com investidores que pretendam apoiar soluções tecnológicas com forte tração de mercado, bem como com instituições agrícolas, empresas e centros de investigação para projetos-piloto conjuntos.",
  },
  {
    question: "Quanto tempo demora o desenvolvimento de um projeto ou prova de conceito?",
    answer:
      "O prazo varia de acordo com o âmbito técnico. Tipicamente, entregamos uma prova de conceito (PoC) funcional entre 4 a 8 semanas, permitindo validar hipóteses e medir o retorno antes de investimentos em escala.",
  },
  {
    question: "Como posso agendar uma conversa técnica ou solicitar uma proposta?",
    answer:
      "Basta clicar em «Agendar Sessão Técnica» ou aceder à página de Contactos. A nossa equipa de engenharia analisa o seu desafio e responde no prazo de 24 horas para marcar uma reunião inicial sem compromisso.",
  },
];

export function TechnologySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textSectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  
  const descriptionText = "A Hagriia Labs é um laboratório de engenharia de software e inteligência artificial focado em resolver problemas estruturais nos setores agrícola, empresarial e institucional.";

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) return;
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollableHeight = window.innerHeight * 1.2;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));
      
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Image transforms start after title fades (0.2 to 1)
  const imageProgress = Math.max(0, Math.min(1, (scrollProgress - 0.2) / 0.8));
  
  // Smooth interpolations
  const centerWidth = 100 - (imageProgress * 58); // 100% to 42%
  const sideWidth = imageProgress * 22; // 0% to 22%
  const sideOpacity = imageProgress;
  const sideTranslateLeft = -100 + (imageProgress * 100); // -100% to 0%
  const sideTranslateRight = 100 - (imageProgress * 100); // 100% to 0%
  const borderRadius = imageProgress * 24; // 0px to 24px
  const gap = imageProgress * 16; // 0px to 16px

  return (
    <section className="relative bg-background">
      {/* Mobile Static Layout (No scroll-jacking animations) */}
      <div className="px-4 pt-8 pb-2 md:hidden">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-muted/20 sm:aspect-[16/10]">
          <Image
            src="/side5.png"
            alt="Hagriia Labs — Investigação aplicada e exploração tecnológica"
            fill
            sizes="100vw"
            loading="lazy"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-foreground/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <h2 className="text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl">
              Engenharia de Terreno 
              <br />
              e Inteligência Artificial Aplicada.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/85 sm:text-base">
              Desenvolvemos sistemas digitais robustos e modelos de inteligência artificial desenhados para operar com fiabilidade em condições reais.
            </p>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-3">
          {sideImages.map((img, idx) => (
            <div
              key={idx}
              className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted/20"
            >
              <Image
                src={img.src || "/placeholder.svg"}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                loading="lazy"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Sticky Bento Wrapper — ends before the text so the text stays right below the cards without sliding over them */}
      <div ref={sectionRef} className="relative hidden md:block">
        <div className="sticky top-0 h-screen overflow-hidden bg-background">
          <div className="flex h-full w-full items-center justify-center">
            {/* Bento Grid Container */}
            <div 
              className="relative flex h-full w-full items-stretch justify-center"
              style={{ gap: `${gap}px`, padding: `${imageProgress * 16}px` }}
            >
              
              {/* Left Column */}
              <div 
                className="flex flex-col will-change-transform"
                style={{
                  width: `${sideWidth}%`,
                  gap: `${gap}px`,
                  transform: `translateX(${sideTranslateLeft}%)`,
                  opacity: sideOpacity,
                }}
              >
                {sideImages.filter(img => img.position === "left").map((img, idx) => (
                  <div 
                    key={idx} 
                    className="relative overflow-hidden will-change-transform bg-muted/20"
                    style={{
                      flex: img.span,
                      borderRadius: `${borderRadius}px`,
                    }}
                  >
                    <Image
                      src={img.src || "/placeholder.svg"}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 1200px) 25vw, 20vw"
                      loading="lazy"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Main Center Image */}
              <div 
                className="relative overflow-hidden will-change-transform bg-muted/20"
                style={{
                  width: `${centerWidth}%`,
                  height: "100%",
                  flex: "0 0 auto",
                  borderRadius: `${borderRadius}px`,
                }}
              >
                <Image
                  src="/side5.png"
                  alt="Hagriia Labs — Investigação aplicada e exploração tecnológica"
                  fill
                  sizes="(max-width: 1200px) 70vw, 55vw"
                  loading="lazy"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-foreground/40" />
                
                {/* Title Text & Description - Fades out word by word with blur */}
                <div 
                  className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
                >
                  <h2 className="max-w-3xl text-5xl font-medium leading-tight tracking-tight text-white md:text-5xl lg:text-5xl">
                    {["Engenharia de Terreno ", "e Inteligência Artificial Aplicada."].map((word, index) => {
                      const wordFadeStart = index * 0.06;
                      const wordFadeEnd = wordFadeStart + 0.07;
                      const wordProgress = Math.max(0, Math.min(1, (scrollProgress - wordFadeStart) / (wordFadeEnd - wordFadeStart)));
                      const wordOpacity = 1 - wordProgress;
                      const wordBlur = wordProgress * 10;
                      
                      return (
                        <span key={index}>
                          <span
                            className="inline-block"
                            style={{
                              opacity: wordOpacity,
                              filter: `blur(${wordBlur}px)`,
                              transition: 'opacity 0.1s linear, filter 0.1s linear',
                              marginRight: index === 0 ? '0.28em' : '0',
                            }}
                          >
                            {word}
                          </span>
                          {index === 0 ? " " : null}
                          {index === 1 ? <br /> : null}
                        </span>
                      );
                    })}
                  </h2>

                  <p
                    className="mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg lg:text-xl"
                    style={{
                      opacity: Math.max(0, 1 - Math.max(0, Math.min(1, (scrollProgress - 0.1) / 0.12))),
                      filter: `blur(${Math.max(0, Math.min(1, (scrollProgress - 0.1) / 0.12)) * 10}px)`,
                      transition: "opacity 0.1s linear, filter 0.1s linear",
                    }}
                  >
                    Desenvolvemos sistemas digitais robustos e modelos de inteligência artificial desenhados para operar com fiabilidade em condições reais.
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div 
                className="flex flex-col will-change-transform"
                style={{
                  width: `${sideWidth}%`,
                  gap: `${gap}px`,
                  transform: `translateX(${sideTranslateRight}%)`,
                  opacity: sideOpacity,
                }}
              >
                {sideImages.filter(img => img.position === "right").map((img, idx) => (
                  <div 
                    key={idx} 
                    className="relative overflow-hidden will-change-transform bg-muted/20"
                    style={{
                      flex: img.span,
                      borderRadius: `${borderRadius}px`,
                    }}
                  >
                    <Image
                      src={img.src || "/placeholder.svg"}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 1200px) 25vw, 20vw"
                      loading="lazy"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* Scroll space to complete the Bento card animation */}
        <div className="h-[120vh]" />
      </div>

      {/* Description Section (Sobre nós) — directly below the cards without climbing over them */}
      <div 
        id="sobre-nos"
        ref={textSectionRef}
        className="relative z-10 bg-background px-6 pt-5 pb-14 md:px-12 md:pt-6 md:pb-20 lg:px-20 lg:pt-8 lg:pb-24"
      >
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-foreground md:mb-4 md:text-base">
            Sobre a Hagriia Labs
          </p>
          <ScrollRevealText text={descriptionText} />
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-foreground/80 sm:text-lg md:mt-6 md:text-xl">
            Trabalhamos em estreita colaboração com equipas de terreno, gestores e decisores públicos. Desenvolvemos desde provas de conceito a produtos completos em produção, com foco permanente na eficiência económica, na segurança dos dados e na utilidade prática.
          </p>

          {/* FAQ — Perguntas Frequentes */}
          <div id="faq" className="mt-14 border-t border-border pt-12 md:mt-20 md:pt-16">
            <div className="mb-8 md:mb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                FAQ · Esclarecimentos Técnicos e Comerciais
              </p>
              <h3 className="mt-2 text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                Perguntas Frequentes sobre a Hagriia Labs
              </h3>
            </div>

            <div className="divide-y divide-border border-y border-border">
              {faqItems.map((item, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className="py-5 md:py-6">
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="flex w-full items-start justify-between gap-6 text-left transition-colors hover:text-foreground/80"
                    >
                      <span className="text-base font-medium leading-snug text-foreground sm:text-lg md:text-xl">
                        {item.question}
                      </span>
                      <span
                        className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-transform duration-300 ${
                          isOpen ? "rotate-45 bg-foreground text-background" : "bg-transparent"
                        }`}
                      >
                        <Plus className="h-4 w-4" />
                      </span>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-3xl pb-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
