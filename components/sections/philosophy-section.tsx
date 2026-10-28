"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";

function TypingText({
  children,
  className,
}: {
  children: string;
  className: string;
}) {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleLength, setVisibleLength] = useState(0);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisibleLength(children.length);
      return;
    }

    const interval = window.setInterval(() => {
      setVisibleLength((length) => {
        if (length >= children.length) {
          window.clearInterval(interval);
          return length;
        }
        return length + 1;
      });
    }, 14);

    return () => window.clearInterval(interval);
  }, [children, isVisible]);

  return (
    <p
      ref={textRef}
      className={`relative ${className}`}
      aria-label={children}
    >
      <span className="invisible" aria-hidden="true">
        {children}
      </span>
      <span className="absolute inset-0" aria-hidden="true">
        {children.slice(0, visibleLength)}
      </span>
    </p>
  );
}

export function PhilosophySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [alpineTranslateX, setAlpineTranslateX] = useState(-100);
  const [forestTranslateX, setForestTranslateX] = useState(100);
  const [titleOpacity, setTitleOpacity] = useState(1);
  const rafRef = useRef<number | null>(null);

  const updateTransforms = useCallback(() => {
    if (window.innerWidth < 768) return;
    if (!sectionRef.current) return;
    
    const rect = sectionRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const sectionHeight = sectionRef.current.offsetHeight;
    
    // Calculate progress based on scroll position
    const scrollableRange = sectionHeight - windowHeight;
    const scrolled = -rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / scrollableRange));
    
    // Alpine comes from left (-100% to 0%)
    setAlpineTranslateX((1 - progress) * -100);
    
    // Forest comes from right (100% to 0%)
    setForestTranslateX((1 - progress) * 100);
    
    // Title fades out as blocks come together
    setTitleOpacity(1 - progress);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) return;
      // Cancel any pending animation frame
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      
      // Use requestAnimationFrame for smooth updates
      rafRef.current = requestAnimationFrame(updateTransforms);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateTransforms();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updateTransforms]);

  return (
    <section id="products" className="bg-background">
      {/* Mobile Static Grid (No scroll-jacking slide animations) */}
      <div className="px-4 py-2 md:hidden">
        <h2 className="mb-8 text-center text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl">
          NOSSA VISÃO & MISSÃO
        </h2>
        <p></p>
        <div className="grid grid-cols-1 gap-4">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted/20">
            <Image
              src="/ms1.jpg"
              alt="Missão do Hagriia Labs — Investigação e desenvolvimento tecnológico"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4">
              <span className="rounded-full bg-[rgba(255,255,255,0.2)] px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                Missão · Investigação e Engenharia
              </span>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted/20">
            <Image
              src="/ms2.jpg"
              alt="Visão do Hagriia Labs — Ecossistema de desenvolvimento tecnológico"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4">
              <span className="rounded-full bg-[rgba(255,255,255,0.2)] px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                Visão · Ecossistema Tecnológico
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Scroll-Animated Grid (md and up only) */}
      <div ref={sectionRef} className="relative hidden md:block" style={{ height: "125vh" }}>
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="relative w-full">
            {/* Title - positioned behind the blocks */}
            <div 
              className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
              style={{ opacity: titleOpacity }}
            >
              <h2 className="text-[10vw] font-medium leading-[0.95] tracking-tighter text-foreground md:text-[8.5vw] lg:text-[7vw] text-center px-6">
                 Nossa Visão & Missão 
              </h2>
            </div>

            {/* Grid */}
            <div className="relative z-10 grid grid-cols-1 gap-4 px-6 md:grid-cols-2 md:px-12 lg:px-20">
              {/* Left Image - comes from left */}
              <div 
                className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted/20"
                style={{
                  transform: `translate3d(${alpineTranslateX}%, 0, 0)`,
                  WebkitTransform: `translate3d(${alpineTranslateX}%, 0, 0)`,
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              >
                <Image
                  src="/ms1.jpg"
                  alt="Missão do Hagriia Labs — Investigação e desenvolvimento tecnológico"
                  fill
                  sizes="(max-width: 1200px) 50vw, 40vw"
                  loading="lazy"
                  className="object-cover"
                />
              </div>

              {/* Right Image - comes from right */}
              <div 
                className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted/20"
                style={{
                  transform: `translate3d(${forestTranslateX}%, 0, 0)`,
                  WebkitTransform: `translate3d(${forestTranslateX}%, 0, 0)`,
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              >
                <Image
                  src="/ms2.jpg"
                  alt="Visão do Hagriia Labs — Ecossistema de desenvolvimento tecnológico"
                  fill
                  sizes="(max-width: 1200px) 50vw, 40vw"
                  loading="lazy"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Statements */}
      <div className="px-6 pt-0 pb-12 md:px-12 md:pt-2 md:pb-28 lg:px-20 lg:pt-4 lg:pb-14">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <h1 className="text-2xl font-semibold uppercase tracking-widest text-foreground">
              Missão
            </h1>
            <TypingText className="mt-4 text-lg leading-relaxed text-muted-foreground sm:text-xl md:mt-6 md:text-2xl">
              Desenvolver sistemas de software, automação e inteligência artificial que resolvem estrangulamentos operacionais reais, com rigor técnico de engenharia e impacto mensurável no terreno.
            </TypingText>
          </div>
          <div>
            <h1 className="text-2xl font-semibold uppercase tracking-widest text-foreground">
              Visão
            </h1>
            <TypingText className="mt-4 text-lg leading-relaxed text-muted-foreground sm:text-xl md:mt-6 md:text-2xl">
              Ser o laboratório de referência em engenharia de software e inteligência artificial aplicada em Angola e África Austral, transformando investigação técnica em soluções comerciais sustentáveis.
            </TypingText>
          </div>
        </div>
      </div>
    </section>
  );
}
