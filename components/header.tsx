"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function Header({ forceSolid = false }: { forceSolid?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isInFooter, setIsInFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const footerEl = document.getElementById("footer") || document.querySelector("footer");
      if (footerEl) {
        const footerRect = footerEl.getBoundingClientRect();
        const inFooter = footerRect.top <= window.innerHeight * 0.75;
        setIsInFooter(inFooter);
        if (inFooter) {
          setIsMenuOpen(false);
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const hasWhiteBg = forceSolid || isScrolled || isMenuOpen;

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    setIsMenuOpen(false);
    if (typeof window === "undefined") return;

    if (window.location.pathname === "/") {
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 72;
        const startY = window.scrollY;
        const targetY =
          targetEl.getBoundingClientRect().top + window.scrollY - headerOffset;
        const distance = targetY - startY;
        const duration = 950;
        let startTime: number | null = null;

        const easeInOutCubic = (t: number) =>
          t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

        const step = (currentTime: number) => {
          if (startTime === null) startTime = currentTime;
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = easeInOutCubic(progress);

          window.scrollTo(0, startY + distance * eased);

          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            window.history.pushState(null, "", `/#${targetId}`);
          }
        };

        requestAnimationFrame(step);
      }
    }
  };

  return (
    <header 
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-3xl transition-all duration-300 ${
        isInFooter
          ? "pointer-events-none -translate-y-8 opacity-0"
          : "translate-y-0 opacity-100"
      } ${
        isMenuOpen
          ? "bg-background/95 backdrop-blur-md rounded-2xl shadow-lg"
          : hasWhiteBg
            ? "bg-background/85 backdrop-blur-md rounded-full"
            : "bg-transparent"
      }`}
      style={{
        boxShadow: hasWhiteBg && !isMenuOpen ? "rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px" : undefined
      }}
    >
      <div className="flex items-center justify-between transition-all duration-300 px-3 pl-4 py-2.5 md:px-2 md:pl-4 md:py-2">
        {/* Logo (alterna entre logo-dark.png no fundo branco e logo-white.png no fundo transparente) */}
        <Link
          href="/"
          className={`flex items-center gap-1 text-lg font-medium tracking-tight transition-colors duration-300 ${
            hasWhiteBg ? "text-foreground" : "text-white"
          }`}
        >
          <span className="relative h-7 w-7 shrink-0">
            {/* Logo para quando o fundo está sem cor (transparente) */}
            <Image
              src="/logo-white.png"
              alt="HAGRIA Labs Logo Claro"
              fill
              className={`object-contain transition-opacity duration-300 ${
                hasWhiteBg ? "opacity-0" : "opacity-100"
              }`}
              priority
            />
            {/* Logo para quando o fundo está branco */}
            <Image
              src="/logo-dark.png"
              alt="HAGRIA Labs Logo Escuro"
              fill
              className={`object-contain transition-opacity duration-300 ${
                hasWhiteBg ? "opacity-100" : "opacity-0"
              }`}
              priority
            />
          </span>
          <span>HAGRIA Labs</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          <Link
            href="/#servicos"
            onClick={(e) => handleSmoothScroll(e, "servicos")}
            className={`text-sm transition-colors ${hasWhiteBg ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white"}`}
          >
            Serviços
          </Link>
          <Link
            href="/#produtos"
            onClick={(e) => handleSmoothScroll(e, "produtos")}
            className={`text-sm transition-colors ${hasWhiteBg ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white"}`}
          >
            Produtos
          </Link>
          <Link
            href="/contactos"
            className={`text-sm transition-colors ${hasWhiteBg ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white"}`}
          >
            Contactos
          </Link>
          <Link
            href="/#sobre-nos"
            onClick={(e) => handleSmoothScroll(e, "sobre-nos")}
            className={`text-sm transition-colors ${hasWhiteBg ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white"}`}
          >
            Sobre nós
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/agendar-consultoria"
            className={`group inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-all rounded-full ${
              hasWhiteBg
                ? "bg-foreground text-background hover:opacity-80"
                : "bg-white text-foreground hover:bg-white/90"
            }`}
          >
            <span>Contactar</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Menu Button - Formato Escada (estilo ChatGPT) */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`flex h-9 w-9 flex-col items-end justify-center gap-[5px] p-1.5 transition-colors md:hidden ${
            hasWhiteBg ? "text-foreground" : "text-white"
          }`}
          aria-label="Alternar menu"
          aria-expanded={isMenuOpen}
        >
          <span
            className={`block h-[2px] rounded-full bg-current transition-all duration-300 ease-out ${
              isMenuOpen ? "w-5 translate-y-[7px] rotate-45" : "w-5"
            }`}
          />
          <span
            className={`block h-[2px] rounded-full bg-current transition-all duration-300 ease-out ${
              isMenuOpen ? "w-0 opacity-0" : "w-3.5"
            }`}
          />
          <span
            className={`block h-[2px] rounded-full bg-current transition-all duration-300 ease-out ${
              isMenuOpen ? "w-5 -translate-y-[7px] -rotate-45" : "w-2"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-border bg-background/95 px-6 py-6 md:hidden rounded-b-2xl">
          <nav className="flex flex-col gap-6">
            <Link
              href="/#servicos"
              className="text-lg text-foreground"
              onClick={(e) => handleSmoothScroll(e, "servicos")}
            >
              Serviços
            </Link>
            <Link
              href="/#produtos"
              className="text-lg text-foreground"
              onClick={(e) => handleSmoothScroll(e, "produtos")}
            >
              Produtos
            </Link>
            <Link
              href="/contactos"
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Contactos
            </Link>
            <Link
              href="/#sobre-nos"
              className="text-lg text-foreground"
              onClick={(e) => handleSmoothScroll(e, "sobre-nos")}
            >
              Sobre nós
            </Link>
            <Link
              href="/agendar-consultoria"
              className="group mt-4 inline-flex items-center justify-center gap-1.5 bg-foreground px-5 py-3 text-center text-sm font-medium text-background rounded-full"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Contactar</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
