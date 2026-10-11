"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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
    src: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=1000",
    alt: "Trilha na floresta",
    position: "left",
    span: 1,
  },
  {
    src: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?q=80&w=1000",
    alt: "Pico da montanha",
    position: "left",
    span: 1,
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1000",
    alt: "Paisagem alpina",
    position: "right",
    span: 1,
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000",
    alt: "Montanha nevada",
    position: "right",
    span: 1,
  },
];

export function TechnologySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textSectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const descriptionText = "Experimente equipamentos outdoor reinventados com tecnologia de ponta. Os acessórios Alpine & Forest combinam materiais ultraleves, controle inteligente de temperatura e engenharia resistente ao clima para elevar cada aventura. Dos picos das montanhas às trilhas na floresta, seu equipamento se adapta às condições.";

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
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl sm:aspect-[16/10]">
          <Image
            src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2000"
            alt="Vista aérea de expedição de acampamento na natureza"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-foreground/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <h2 className="text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl">
              Tecnologia Encontra
              <br />
              a Natureza.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/85 sm:text-base">
              Sensores inteligentes, materiais aeroespaciais e autonomia térmica integrados para enfrentar os ambientes mais extremos com total precisão.
            </p>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-3">
          {sideImages.map((img, idx) => (
            <div
              key={idx}
              className="relative aspect-[4/3] overflow-hidden rounded-xl"
            >
              <Image
                src={img.src || "/placeholder.svg"}
                alt={img.alt}
                fill
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
                    className="relative overflow-hidden will-change-transform"
                    style={{
                      flex: img.span,
                      borderRadius: `${borderRadius}px`,
                    }}
                  >
                    <Image
                      src={img.src || "/placeholder.svg"}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Main Center Image */}
              <div 
                className="relative overflow-hidden will-change-transform"
                style={{
                  width: `${centerWidth}%`,
                  height: "100%",
                  flex: "0 0 auto",
                  borderRadius: `${borderRadius}px`,
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2000"
                  alt="Vista aérea de expedição de acampamento na natureza"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-foreground/40" />
                
                {/* Title Text & Description - Fades out word by word with blur */}
                <div 
                  className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
                >
                  <h2 className="max-w-3xl text-5xl font-medium leading-tight tracking-tight text-white md:text-5xl lg:text-7xl">
                    {["Tecnologia", "Encontra", "a Natureza."].map((word, index) => {
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
                    Sensores inteligentes, materiais aeroespaciais e autonomia térmica integrados para enfrentar os ambientes mais extremos com total precisão.
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
                    className="relative overflow-hidden will-change-transform"
                    style={{
                      flex: img.span,
                      borderRadius: `${borderRadius}px`,
                    }}
                  >
                    <Image
                      src={img.src || "/placeholder.svg"}
                      alt={img.alt}
                      fill
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
        className="relative z-10 bg-background px-6 pt-5 pb-12 md:px-12 md:pt-6 md:pb-16 lg:px-20 lg:pt-8 lg:pb-20"
      >
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-foreground md:mb-4 md:text-base">
            Sobre nós
          </p>
          <ScrollRevealText text={descriptionText} />
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-foreground/80 sm:text-lg md:mt-6 md:text-xl">
            Na HAGRIA Labs, unimos design minimalista, engenharia de materiais aeroespaciais e testes rigorosos em campo para criar equipamentos duráveis que acompanham você em qualquer clima, altitude ou território.
          </p>
        </div>
      </div>
    </section>
  );
}
