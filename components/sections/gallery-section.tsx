"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";

export function GallerySection() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [sectionHeight, setSectionHeight] = useState("100vh");
  const [translateX, setTranslateX] = useState(0);
  const rafRef = useRef<number | null>(null);

  const images = [
     {
      src: "/images/bottle-mountain.png",
      alt: "Linha de exploração em observação da Terra e dados geoespaciais",
      title: "Observação da Terra e Dados Espaciais",
      description:
        "Linha de exploração tecnológica dedicada à análise de dados de satélite, inteligência artificial e aplicações terrestres.",
    },
     {
      src: "/images/bottle-water.png",
      alt: "Automação de processos empresariais e optimização de fluxos de trabalho",
      title: "Automação de Processos",
      description:
        "Soluções automatizadas para otimizar e melhorar a eficiência dos processos empresariais.",
    },
    {
      src: "/images/bottle-canyon.png",
      alt: "Projectos colaborativos e investigação multidisciplinar",
      title: "Projectos em Colaboração",
      description:
        "Iniciativas conjuntas com profissionais, investigadores e organizações para testar soluções no terreno.",
    },
    {
      src: "/images/bottle-lake.png",
      alt: "Testes de segurança, análise de vulnerabilidades e protecção de sistemas",
      title: "Testes de Segurança e Auditoria",
      description:
        "Avaliação rigorosa de vulnerabilidades, testes de intrusão e auditoria de segurança para proteger aplicações, dados e infra-estruturas digitais.",
    }
  ];

  // Calculate section height based on content width (desktop only)
  useEffect(() => {
    const calculateHeight = () => {
      if (window.innerWidth < 768) return;
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      // Height = viewport height + the extra scroll needed to reveal all content
      const totalHeight = viewportHeight + (containerWidth - viewportWidth);
      setSectionHeight(`${totalHeight}px`);
    };

    // Small delay to ensure container is rendered
    const timer = setTimeout(calculateHeight, 100);
    window.addEventListener("resize", calculateHeight);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", calculateHeight);
    };
  }, []);

  const updateTransform = useCallback(() => {
    if (window.innerWidth < 768) return;
    if (!galleryRef.current || !containerRef.current) return;
    
    const rect = galleryRef.current.getBoundingClientRect();
    const containerWidth = containerRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;
    
    // Total scroll distance needed to reveal all images
    const totalScrollDistance = containerWidth - viewportWidth;
    
    // Current scroll position within this section
    const scrolled = Math.max(0, -rect.top);
    
    // Progress from 0 to 1
    const progress = Math.min(1, scrolled / totalScrollDistance);
    
    // Calculate new translateX
    const newTranslateX = progress * -totalScrollDistance;
    
    setTranslateX(newTranslateX);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) return;
      // Cancel any pending animation frame
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      
      // Use requestAnimationFrame for smooth updates
      rafRef.current = requestAnimationFrame(updateTransform);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateTransform();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updateTransform]);

  return (
    <section id="gallery" className="relative bg-background">
      {/* Mobile Native Horizontal Swipe Carousel (No vertical scroll-jacking) */}
      <div className="py-8 md:hidden">
        <div className="flex gap-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory scrollbar-hide">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative h-[54vh] min-h-[340px] max-h-[460px] w-[84vw] flex-shrink-0 snap-center overflow-hidden rounded-2xl"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index < 2}
              />
              {/* Card Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-black/25 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

              {/* Card Content */}
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
                <div className="max-w-[75%]">
                  <h1 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    {image.title}
                  </h1>
                  <p className="mt-1.5 text-xs leading-relaxed text-white/80 sm:text-sm">
                    {image.description}
                  </p>
                </div>

                <Link
                  href="/projectos"
                  aria-label={`Ver detalhes de ${image.title}`}
                  className="group/btn flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/40 bg-black text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black active:bg-white active:text-black"
                >
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Scroll-Driven Horizontal Gallery (md and up only) */}
      <div
        ref={galleryRef}
        className="relative hidden md:block"
        style={{ height: sectionHeight }}
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="flex h-full items-center">
            {/* Horizontal scrolling container */}
            <div 
              ref={containerRef}
              className="flex gap-6 px-6"
              style={{
                transform: `translate3d(${translateX}px, 0, 0)`,
                WebkitTransform: `translate3d(${translateX}px, 0, 0)`,
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                perspective: 1000,
                WebkitPerspective: 1000,
                touchAction: 'pan-y',
              }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="group relative h-[70vh] w-[85vw] flex-shrink-0 overflow-hidden rounded-2xl md:w-[60vw] lg:w-[45vw]"
                  style={{
                    transform: 'translateZ(0)',
                    WebkitTransform: 'translateZ(0)',
                  }}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority={index < 3}
                  />
                  {/* Card Overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-black/25 bg-gradient-to-t from-black/85 via-black/35 to-black/10 transition-opacity duration-300" />

                  {/* Card Content */}
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-8 lg:p-10">
                    <div className="max-w-md">
                      <h1 className="text-2xl font-semibold tracking-tight text-white lg:text-3xl">
                        {image.title}
                      </h1>
                      <p className="mt-2.5 text-sm leading-relaxed text-white/80 lg:text-base">
                        {image.description}
                      </p>
                    </div>

                    <Link
                      href="/projectos"
                      aria-label={`Ver detalhes de ${image.title}`}
                      className="group/btn flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/40 bg-black text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                    >
                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
