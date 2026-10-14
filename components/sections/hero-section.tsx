"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const word = "INTELIGÊNCIA";

const sideImages = [
  {
    src: "hero1.jpg",
    alt: "Investigação tecnológica e exploração de novos horizontes",
    position: "left",
    span: 1,
  },
  {
    src: "hero2.jpg",
    alt: "Observação e análise de dados em cenários reais",
    position: "left",
    span: 1,
  },
  {
    src: "hero3.jpg",
    alt: "Experimentação aplicada e validação no terreno",
    position: "right",
    span: 1,
  },
  {
    src: "hero4.png",
    alt: "Ecossistema de desenvolvimento tecnológico multidisciplinar",
    position: "right",
    span: 1,
  },
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) return;
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollableHeight = window.innerHeight * 1.4;
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

  // Text fades out first (0 to 0.2)
  const textOpacity = Math.max(0, 1 - (scrollProgress / 0.2));
  
  // Image transforms start after text fades (0.2 to 1)
  const imageProgress = Math.max(0, Math.min(1, (scrollProgress - 0.2) / 0.8));
  
  // Smooth interpolations
  const centerWidth = 100 - (imageProgress * 58); // 100% to 42%
  const centerHeight = 100 - (imageProgress * 30); // 100% to 70%
  const sideWidth = imageProgress * 22; // 0% to 22%
  const sideOpacity = imageProgress;
  const sideTranslateLeft = -100 + (imageProgress * 100); // -100% to 0%
  const sideTranslateRight = 100 - (imageProgress * 100); // 100% to 0%
  const borderRadius = imageProgress * 24; // 0px to 24px
  const gap = imageProgress * 16; // 0px to 16px
  
  // Vertical offset for side columns
  const sideTranslateY = -(imageProgress * 15);

  return (
    <section ref={sectionRef} className="relative bg-background">
      {/* Mobile Static Hero (No scroll-jacking animations) */}
      <div className="md:hidden">
        <div className="relative h-[85vh] min-h-[500px] w-full overflow-hidden">
          <Image
            src="/images/hero-main.png"
            alt="Hagriia Labs — Laboratório de tecnologia e inovação"
            fill
            className="object-cover"
            priority
          />
          {/* Subtle Hero Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-black/20 bg-gradient-to-t from-black/65 via-black/20 to-black/10" />
          <div className="absolute inset-x-0 bottom-7 flex flex-col items-start justify-end overflow-hidden px-5">
            <p className="mb-3 max-w-md text-sm leading-relaxed text-white/85 sm:text-base">
              Somos um laboratório de tecnologia e inovação dedicado à investigação aplicada, 
              ao desenvolvimento de software e à exploração de soluções  diversas para desafios reais que exigem:
            </p>
            <h1 className="w-full whitespace-nowrap text-[13.5vw] font-medium leading-[0.85] tracking-tighter text-white">
              {word}
            </h1>
          </div>
        </div>

        {/* Mobile Secondary Bento Grid */}
        <div className="grid grid-cols-2 gap-3 px-4 pt-4">
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
      <div className="sticky top-0 z-0 hidden h-screen overflow-hidden md:block">
        <div className="flex h-full w-full items-center justify-center">
          {/* Bento Grid Container */}
          <div 
            className="relative flex h-full w-full items-stretch justify-center"
            style={{ gap: `${gap}px`, padding: `${imageProgress * 16}px`, paddingBottom: `${60 + (imageProgress * 40)}px` }}
          >
            
            {/* Left Column */}
            <div 
              className="flex flex-col will-change-transform"
              style={{
                width: `${sideWidth}%`,
                gap: `${gap}px`,
                transform: `translateX(${sideTranslateLeft}%) translateY(${sideTranslateY}%)`,
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

            {/* Main Hero Image - Center */}
            <div 
              className="relative overflow-hidden will-change-transform"
              style={{
                width: `${centerWidth}%`,
                height: `${centerHeight}%`,
                flex: "0 0 auto",
                borderRadius: `${borderRadius}px`,
              }}
            >
              <Image
                src="/images/hero-main.png"
                alt="Hagriia Labs — Laboratório de tecnologia e inovação"
                fill
                className="object-cover"
                priority
              />

              {/* Subtle Hero Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-black/20 bg-gradient-to-t from-black/65 via-black/20 to-black/10" />
              
              {/* Overlay Text - Fades out first */}
              <div 
                className="absolute inset-0 flex flex-col items-start justify-end overflow-hidden px-8 pb-8 lg:px-12 lg:pb-10"
                style={{ opacity: textOpacity }}
              >
                <p className="mb-4 max-w-2xl text-base leading-relaxed text-white/85 md:mb-6 md:text-lg lg:max-w-3xl lg:text-xl">
                  Somos um laboratório de tecnologia e inovação dedicado à investigação aplicada, ao desenvolvimento de software e à 
                  exploração de soluções diversas para desafios reais que exigem:
                </p>
                <h1 className="w-full whitespace-nowrap text-[13.5vw] font-medium leading-[0.85] tracking-tighter text-white">
                  {word.split("").map((letter, index) => (
                    <span
                      key={index}
                      className="inline-block animate-[slideUp_0.8s_ease-out_forwards] opacity-0"
                      style={{
                        animationDelay: `${index * 0.08}s`,
                        transition: 'all 1.5s',
                        transitionTimingFunction: 'cubic-bezier(0.86, 0, 0.07, 1)',
                      }}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </span>
                  ))}
                </h1>
              </div>
            </div>

            {/* Right Column */}
            <div 
              className="flex flex-col will-change-transform"
              style={{
                width: `${sideWidth}%`,
                gap: `${gap}px`,
                transform: `translateX(${sideTranslateRight}%) translateY(${sideTranslateY}%)`,
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
      <div className="hidden h-[140vh] md:block" />

      {/* Institutional Value Proposition & CTAs Section — slides over the sticky Bento images with a solid white background */}
      <div className="relative z-20 bg-white px-6 py-16 md:px-12 md:py-2 lg:px-20 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-4xl font-semibold leading-relaxed text-foreground md:text-3xl lg:text-[2.5rem] lg:leading-snug uppercase">
            Tecnologia para explorar
            <br />
            novas possibilidades.
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Investigação e experimentação tecnológica, desenvolvimento de software e sistemas inteligentes, criação de soluções inovadoras e colaboração multidisciplinar.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/projectos"
              className="group inline-flex items-center gap-1.5 rounded-full hover:border border-foreground bg-foreground hover:bg-white px-6 py-3 text-sm font-medium text-background hover:text-gray-950 transition-all hover:opacity-85"
            >
              <span>Explorar projectos</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
