"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const footerLinks = {
  laboratory: [
    { label: "Início", href: "/", targetId: "top" },
    { label: "Sobre nós", href: "/#sobre-nos", targetId: "sobre-nos" },
    { label: "Missão e Visão", href: "/#products", targetId: "products" },
    { label: "Como trabalhamos", href: "/#como-trabalhamos", targetId: "como-trabalhamos" },
  ],
  areas: [
    { label: "Serviços e Áreas", href: "/#servicos", targetId: "servicos" },
    { label: "Projectos e Produtos", href: "/#produtos", targetId: "produtos" },
    { label: "Colaboração", href: "/agendar-consultoria" },
    { label: "Oportunidades", href: "/contactos" },
  ],
  institutional: [
    { label: "Contactos", href: "/contactos" },
    { label: "Agendar Consultoria", href: "/agendar-consultoria" },
    { label: "Política de Privacidade", href: "/legal#privacidade" },
    { label: "Termos de Utilização", href: "/legal#termos" },
  ],
};

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com", icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com", icon: Instagram },
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: Linkedin },
  { label: "YouTube", href: "https://www.youtube.com", icon: Youtube },
];

export function FooterSection() {
  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId?: string
  ) => {
    if (!targetId || typeof window === "undefined") return;
    if (window.location.pathname === "/") {
      if (targetId === "top") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const el = document.getElementById(targetId);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <footer id="footer" className="relative overflow-hidden bg-[#070707] text-white">
      {/* Bottom Center Atmospheric Bloom Effect */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center"
        style={{
          height: "420px",
          filter: "blur(64px)",
          WebkitFilter: "blur(64px)",
        }}
      >
        {/* Conical upward-fading light dispersion */}
        <div
          className="absolute bottom-[-40px] h-[380px] w-[115%] max-w-6xl"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            background:
              "radial-gradient(ellipse 70% 85% at 50% 100%, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.14) 45%, rgba(255,255,255,0.03) 75%, transparent 100%)",
          }}
        />
        {/* Soft core horizon bloom at bottom center */}
        <div
          className="absolute bottom-[-60px] h-[220px] w-[80%] max-w-4xl rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0.08) 55%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-20 pb-12 md:px-12 md:pt-28 md:pb-14">
        {/* Top Center Logo & Institutional Summary */}
        <div className="mb-16 flex flex-col items-center text-center md:mb-20">
          <Link
            href="/"
            onClick={(e) => handleAnchorClick(e, "top")}
            aria-label="HAGRIA Labs"
            className="group relative block select-none"
          >
            <Image
              src="/logo-gray.png"
              alt="HAGRIA Labs"
              width={200}
              height={200}
              className="h-28 w-28 object-contain opacity-90 transition-opacity duration-300 group-hover:opacity-100 md:h-36 md:w-36"
            />
          </Link>
          <p className="mt-8 max-w-xl text-sm leading-relaxed text-[#a3a3a3] md:text-base">
            Hagriia Labs é um laboratório de tecnologia e inovação dedicado à exploração de ideias, ao desenvolvimento de software e à criação de soluções tecnológicas para desafios reais.
          </p>
        </div>

        {/* Three Columns */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8 md:justify-items-start">
          {/* Column 1: LABORATÓRIO */}
          <div className="w-full sm:w-auto">
            <h4 className="mb-5 font-mono text-xs tracking-[0.16em] text-[#737373] uppercase">
              Laboratório
            </h4>
            <ul className="space-y-3.5">
              {footerLinks.laboratory.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.targetId)}
                    className="text-sm font-normal text-[#e5e5e5] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: ACTUAÇÃO */}
          <div className="w-full sm:mx-auto sm:w-auto">
            <h4 className="mb-5 font-mono text-xs tracking-[0.16em] text-[#737373] uppercase">
              Actuação
            </h4>
            <ul className="space-y-3.5">
              {footerLinks.areas.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.targetId)}
                    className="text-sm font-normal text-[#e5e5e5] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: INSTITUCIONAL */}
          <div className="w-full sm:ml-auto sm:w-auto">
            <h4 className="mb-5 font-mono text-xs tracking-[0.16em] text-[#737373] uppercase">
              Institucional
            </h4>
            <ul className="space-y-3.5">
              {footerLinks.institutional.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm font-normal text-[#e5e5e5] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media Icons & Copyright */}
        <div className="mt-20 flex flex-col items-center gap-6 text-center md:mt-24">
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[#a3a3a3] transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>

          <p className="text-xs text-[#8a8a8a]">
            © 2026 Hagriia Labs. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
