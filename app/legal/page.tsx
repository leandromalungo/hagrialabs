import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/header";
import { FooterSection } from "@/components/sections/footer-section";

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header forceSolid />

      <section className="mx-auto max-w-4xl px-4 pt-28 pb-20 sm:px-6 md:px-12 md:pt-36 md:pb-28">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Voltar à página inicial</span>
          </Link>
        </div>

        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Informação Institucional · Hagriia Labs
        </p>
        <h1 className="mt-3 text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          Política de Privacidade e Termos de Utilização
        </h1>

        <div className="mt-12 space-y-12">
          <article
            id="privacidade"
            className="scroll-mt-28 rounded-3xl border border-border bg-white p-6 sm:p-8"
          >
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
              1. Política de Privacidade
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              O Hagriia Labs respeita a privacidade de todos os visitantes, parceiros e organizações que entram em contacto connosco. Os dados recolhidos através dos formulários de contacto e de agendamento de consultoria (nome, perfil, organização, e-mail, telefone e descrição do projecto) destinam-se exclusivamente à análise do pedido submetido e à comunicação institucional directa.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Não partilhamos, comercializamos nem cedemos informações pessoais ou institucionais a terceiros sem autorização expressa. Para solicitar a actualização ou eliminação dos seus dados de contacto, envie uma mensagem para{" "}
              <a
                href="mailto:lmalungo@outlook.com"
                className="font-medium text-foreground underline underline-offset-4"
              >
                lmalungo@outlook.com
              </a>
              .
            </p>
          </article>

          <article
            id="termos"
            className="scroll-mt-28 rounded-3xl border border-border bg-white p-6 sm:p-8"
          >
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
              2. Termos de Utilização
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              O conteúdo disponibilizado neste website tem carácter informativo e institucional sobre as actividades de investigação aplicada, engenharia de software e desenvolvimento tecnológico do Hagriia Labs.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              As propostas de projectos, parcerias ou consultorias técnicas submetidas através da plataforma estão sujeitas a avaliação de viabilidade técnica e alinhamento institucional. Todos os direitos sobre a identidade visual, marcas, conteúdos e software desenvolvido pelo Hagriia Labs encontram-se reservados.
            </p>
          </article>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
