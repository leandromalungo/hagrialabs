"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";

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
      {/* Mobile Static Product Grid (No scroll-jacking slide animations) */}
      <div className="px-4 py-8 md:hidden">
        <h2 className="mb-8 text-center text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl">
          Meet Alpine & Forest.
        </h2>
        <div className="grid grid-cols-1 gap-4">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/product-backpack.png"
              alt="V1 Expedition Backpack in alpine setting"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4">
              <span className="rounded-full bg-[rgba(255,255,255,0.2)] px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                Alpine $299
              </span>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/02cdc426-dff4-4dff-b131-1b134c3699b5.png"
              alt="V1 Thermal mug in forest setting"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4">
              <span className="rounded-full bg-[rgba(255,255,255,0.2)] px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                Forest $199
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Scroll-Animated Product Grid (md and up only) */}
      <div ref={sectionRef} className="relative hidden md:block" style={{ height: "200vh" }}>
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="relative w-full">
            {/* Title - positioned behind the blocks */}
            <div 
              className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
              style={{ opacity: titleOpacity }}
            >
              <h2 className="text-[12vw] font-medium leading-[0.95] tracking-tighter text-foreground md:text-[10vw] lg:text-[8vw] text-center px-6">
                Meet Alpine & Forest.
              </h2>
            </div>

            {/* Product Grid */}
            <div className="relative z-10 grid grid-cols-1 gap-4 px-6 md:grid-cols-2 md:px-12 lg:px-20">
              {/* Alpine Image - comes from left */}
              <div 
                className="relative aspect-[4/3] overflow-hidden rounded-2xl"
                style={{
                  transform: `translate3d(${alpineTranslateX}%, 0, 0)`,
                  WebkitTransform: `translate3d(${alpineTranslateX}%, 0, 0)`,
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              >
                <Image
                  src="/images/product-backpack.png"
                  alt="V1 Expedition Backpack in alpine setting"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-6 left-6">
                  <span className="backdrop-blur-md px-4 py-2 text-sm font-medium rounded-full bg-[rgba(255,255,255,0.2)] text-white">
                    Alpine $299
                  </span>
                </div>
              </div>

              {/* Forest Image - comes from right */}
              <div 
                className="relative aspect-[4/3] overflow-hidden rounded-2xl"
                style={{
                  transform: `translate3d(${forestTranslateX}%, 0, 0)`,
                  WebkitTransform: `translate3d(${forestTranslateX}%, 0, 0)`,
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              >
                <Image
                  src="/images/02cdc426-dff4-4dff-b131-1b134c3699b5.png"
                  alt="V1 Thermal mug in forest setting"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-6 left-6">
                  <span className="backdrop-blur-md px-4 py-2 text-sm font-medium rounded-full bg-[rgba(255,255,255,0.2)] text-white">
                    Forest $199
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="px-6 py-12 md:px-12 md:py-28 lg:px-20 lg:py-36 lg:pb-14">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            First generation
          </p>
          <p className="mt-4 text-center text-lg leading-relaxed text-muted-foreground sm:text-xl md:mt-8 md:text-3xl">
            Alpine & Forest are high-tech outdoor accessories designed for modern adventurers. 
            Lightweight, durable, and engineered for extreme conditions.
          </p>
        </div>
      </div>
    </section>
  );
}
