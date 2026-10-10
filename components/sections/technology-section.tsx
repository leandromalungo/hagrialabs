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
      
      // Slower animation - more viewport range
      const startOffset = windowHeight * 0.9;
      const endOffset = windowHeight * 0.1;
      
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

      {/* Desktop scroll-reveal text (md and up) */}
      <p
        ref={containerRef}
        className="hidden font-semibold leading-snug md:block md:text-4xl lg:text-5xl"
      >
        {words.map((word, index) => {
          const wordProgress = index / words.length;
          const isRevealed = progress > wordProgress;
          
          return (
            <span
              key={index}
              className="transition-colors duration-150"
              style={{
                color: isRevealed ? "var(--foreground)" : "#e4e4e7",
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
  const sectionRef = useRef<HTMLElement>(null);
  const textSectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [textProgress, setTextProgress] = useState(0);
  
  const descriptionText = "Experimente equipamentos outdoor reinventados com tecnologia de ponta. Os acessórios Alpine & Forest combinam materiais ultraleves, controle inteligente de temperatura e engenharia resistente ao clima para elevar cada aventura. Dos picos das montanhas às trilhas na floresta, seu equipamento se adapta às condições.";

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) return;
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollableHeight = window.innerHeight * 2;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));
      
      setScrollProgress(progress);

      // Text scroll progress
      if (textSectionRef.current) {
        const textRect = textSectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        const startOffset = windowHeight * 0.9;
        const endOffset = windowHeight * 0.1;
        
        const totalDistance = startOffset - endOffset;
        const currentPosition = startOffset - textRect.top;
        
        const newTextProgress = Math.max(0, Math.min(1, currentPosition / totalDistance));
        setTextProgress(newTextProgress);
      }
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
    <section ref={sectionRef} className="relative bg-foreground">
      {/* Mobile Static Layout (No scroll-jacking animations) */}
      <div className="px-4 py-12 md:hidden">
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

      {/* Desktop Sticky container for scroll animation (md and up only) */}
      <div className="sticky top-0 hidden h-screen overflow-hidden md:block">
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
              
              {/* Title Text - Fades out word by word with blur */}
              <div 
                className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
              >
                <h2 className="max-w-3xl font-medium leading-tight tracking-tight text-white md:text-5xl lg:text-7xl text-5xl">
                  {["Tecnologia", "Encontra", "a Natureza."].map((word, index) => {
                    // Each word fades out sequentially based on scrollProgress
                    const wordFadeStart = index * 0.07;
                    const wordFadeEnd = wordFadeStart + 0.07;
                    const wordProgress = Math.max(0, Math.min(1, (scrollProgress - wordFadeStart) / (wordFadeEnd - wordFadeStart)));
                    const wordOpacity = 1 - wordProgress;
                    const wordBlur = wordProgress * 10; // 0px to 10px blur
                    
                    return (
                      <span
                        key={index}
                        className="inline-block"
                        style={{
                          opacity: wordOpacity,
                          filter: `blur(${wordBlur}px)`,
                          transition: 'opacity 0.1s linear, filter 0.1s linear',
                          marginRight: index < 2 ? '0.3em' : '0',
                        }}
                      >
                        {word}
                        {index === 1 && <br />}
                      </span>
                    );
                  })}
                </h2>
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

      {/* Scroll space to enable animation on desktop only */}
      <div className="hidden h-[200vh] md:block" />

      {/* Description Section with Scroll Reveal on desktop and static on mobile */}
      <div 
        ref={textSectionRef}
        className="relative overflow-hidden bg-background px-6 py-14 md:px-12 md:py-32 lg:px-20 lg:py-40"
      >
        {/* Text Content */}
        <div className="relative z-10 mx-auto max-w-4xl">
          <ScrollRevealText text={descriptionText} />
        </div>
      </div>
    </section>
  );
}
