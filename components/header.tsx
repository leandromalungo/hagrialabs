"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hasWhiteBg = isScrolled || isMenuOpen;

  return (
    <header 
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-3xl transition-all duration-300 ${
        isMenuOpen
          ? "bg-background/95 backdrop-blur-md rounded-2xl shadow-lg"
          : isScrolled
            ? "bg-background/80 backdrop-blur-md rounded-full"
            : "bg-transparent"
      }`}
      style={{
        boxShadow: isScrolled && !isMenuOpen ? "rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px" : undefined
      }}
    >
      <div className="flex items-center justify-between transition-all duration-300 px-3 pl-4 py-2.5 md:px-2 md:pl-4 md:py-2">
        {/* Logo (alterna entre logo-dark.svg no fundo branco e logo-white.svg no fundo transparente) */}
        <Link
          href="#"
          className={`flex items-center gap-2.5 text-lg font-medium tracking-tight transition-colors duration-300 ${
            hasWhiteBg ? "text-foreground" : "text-white"
          }`}
        >
          <span className="relative h-7 w-7 shrink-0">
            {/* Logo para quando o fundo está sem cor (transparente) */}
            <Image
              src="/logo-white.svg"
              alt="HAGRIA Labs Logo Claro"
              fill
              className={`object-contain transition-opacity duration-300 ${
                hasWhiteBg ? "opacity-0" : "opacity-100"
              }`}
              priority
            />
            {/* Logo para quando o fundo está branco */}
            <Image
              src="/logo-dark.svg"
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
            href="#products"
            className={`text-sm transition-colors ${isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white"}`}
          >
            Produtos
          </Link>
          <Link
            href="#technology"
            className={`text-sm transition-colors ${isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white"}`}
          >
            Tecnologia
          </Link>
          <Link
            href="#gallery"
            className={`text-sm transition-colors ${isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white"}`}
          >
            Galeria
          </Link>
          <Link
            href="#accessories"
            className={`text-sm transition-colors ${isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white"}`}
          >
            Acessórios
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="#reserve"
            className={`group inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-all rounded-full ${
              isScrolled
                ? "bg-foreground text-background hover:opacity-80"
                : "bg-white text-foreground hover:bg-white/90"
            }`}
          >
            <span>Comprar produto</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`p-1.5 transition-colors md:hidden ${isScrolled || isMenuOpen ? "text-foreground" : "text-white"}`}
          aria-label="Alternar menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-border bg-background/95 px-6 py-6 md:hidden rounded-b-2xl">
          <nav className="flex flex-col gap-6">
            <Link
              href="#products"
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Produtos
            </Link>
            <Link
              href="#technology"
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Tecnologia
            </Link>
            <Link
              href="#gallery"
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Galeria
            </Link>
            <Link
              href="#accessories"
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Acessórios
            </Link>
            <Link
              href="#reserve"
              className="group mt-4 inline-flex items-center justify-center gap-1.5 bg-foreground px-5 py-3 text-center text-sm font-medium text-background rounded-full"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Comprar produto</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
