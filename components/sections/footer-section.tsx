"use client";

import Link from "next/link";

const footerLinks = {
  product: [
    { label: "Recursos", href: "#technology" },
    { label: "Dados em Tempo Real", href: "#products" },
    { label: "Preços", href: "#accessories" },
    { label: "Comparação", href: "#gallery" },
  ],
  developer: [
    { label: "Console do Desenvolvedor", href: "#" },
    { label: "Documentação da API", href: "#" },
    { label: "Fórum de Desenvolvedores", href: "#" },
    { label: "Status da API", href: "#" },
  ],
  resources: [
    { label: "Política de Privacidade", href: "#" },
    { label: "Termos de Serviço", href: "#" },
    { label: "Suporte", href: "#" },
  ],
};

export function FooterSection() {
  return (
    <footer className="relative overflow-hidden bg-[#070707] text-white">
      {/* Bottom Center Triangular Spotlight Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden"
        style={{ height: "340px" }}
      >
        <div
          className="h-full w-full max-w-5xl blur-2xl"
          style={{
            clipPath: "polygon(50% 8%, 0% 100%, 100% 100%)",
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.09) 55%, rgba(255,255,255,0.18) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-20 pb-12 md:px-12 md:pt-28 md:pb-14">
        {/* Top Center Geometric Monogram */}
        <div className="mb-16 flex justify-center md:mb-24">
          <Link
            href="/"
            aria-label="HAGRIA Labs"
            className="group relative block h-28 w-28 select-none md:h-36 md:w-36"
          >
            {/* Single diagonal stroke (top-right to bottom-left) */}
            <span
              className="absolute top-0 left-1/2 h-full w-[11px] -translate-x-1/2 bg-[#1f1f1f] transition-colors duration-300 group-hover:bg-[#2a2a2a] md:w-[13px]"
              style={{ transform: " skewX(-35deg)" }}
            />
            {/* Hollow double-line diagonal stroke (top-left to bottom-right) */}
            <span
              className="absolute top-0 left-1/2 h-full w-[34px] -translate-x-1/2 border-[9px] border-[#1f1f1f] bg-[#070707] transition-colors duration-300 group-hover:border-[#2a2a2a] md:w-[44px] md:border-[11px]"
              style={{ transform: " skewX(35deg)" }}
            />
          </Link>
        </div>

        {/* Three Columns */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8 md:justify-items-start">
          {/* Column 1: PRODUTO */}
          <div className="w-full sm:w-auto">
            <h4 className="mb-5 font-mono text-xs tracking-[0.16em] text-[#737373] uppercase">
              Produto
            </h4>
            <ul className="space-y-3.5">
              {footerLinks.product.map((link) => (
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

          {/* Column 2: DESENVOLVEDOR */}
          <div className="w-full sm:mx-auto sm:w-auto">
            <h4 className="mb-5 font-mono text-xs tracking-[0.16em] text-[#737373] uppercase">
              Desenvolvedor
            </h4>
            <ul className="space-y-3.5">
              {footerLinks.developer.map((link) => (
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

          {/* Column 3: RECURSOS */}
          <div className="w-full sm:ml-auto sm:w-auto">
            <h4 className="mb-5 font-mono text-xs tracking-[0.16em] text-[#737373] uppercase">
              Recursos
            </h4>
            <ul className="space-y-3.5">
              {footerLinks.resources.map((link) => (
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

        {/* Bottom Copyright */}
        <div className="mt-20 text-center md:mt-28">
          <p className="text-xs text-[#8a8a8a]">
            © 2026 HAGRIA Labs. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
