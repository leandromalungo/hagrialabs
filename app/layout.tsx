import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const Analytics = () => null;

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  'https://www.hagrialabs.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  title: 'Hagriia Labs | Engenharia de Software e Inteligência Artificial',
  description:
    'Laboratório de engenharia de software e inteligência artificial aplicada. Desenvolvemos produtos digitais e sistemas à medida para empresas, instituições e startups.',
  keywords: [
    'Hagriia Labs',
    'Engenharia de software',
    'Inteligência artificial',
    'Agricultura de precisão',
    'AGRI-IA',
    'Automação de processos',
    'Atendimento multicanal',
    'Angola tecnologia',
  ],
  openGraph: {
    type: 'website',
    siteName: 'Hagriia Labs',
    title: 'Hagriia Labs | Engenharia de Software e Inteligência Artificial',
    description:
      'Laboratório de engenharia de software e inteligência artificial aplicada para empresas, instituições e startups.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hagriia Labs | Engenharia de Software e Inteligência Artificial',
    description:
      'Laboratório de engenharia de software e inteligência artificial aplicada para empresas, instituições e startups.',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ResearchOrganization',
      '@id': `${siteUrl}/#organization`,
      name: 'Hagriia Labs',
      url: siteUrl,
      logo: `${siteUrl}/logo-gray.png`,
      description:
        'Laboratório de engenharia de software e inteligência artificial aplicada. Desenvolvemos produtos digitais e sistemas à medida para empresas, instituições e startups.',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'technical support',
        url: `${siteUrl}/contactos`,
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Hagriia Labs',
      publisher: {
        '@id': `${siteUrl}/#organization`,
      },
      hasPart: [
        {
          '@type': 'WebPage',
          name: 'Serviços de Engenharia e Sistemas Inteligentes',
          url: `${siteUrl}/#servicos`,
        },
        {
          '@type': 'WebPage',
          name: 'Produtos e Tecnologias no Terreno',
          url: `${siteUrl}/#produtos`,
        },
        {
          '@type': 'WebPage',
          name: 'AGRI-IA — Agricultura de Precisão',
          url: `${siteUrl}/projectos/agri-ia`,
        },
        {
          '@type': 'WebPage',
          name: 'Sobre a Hagriia Labs',
          url: `${siteUrl}/#sobre-nos`,
        },
        {
          '@type': 'WebPage',
          name: 'Como Trabalhamos — Metodologia',
          url: `${siteUrl}/#como-trabalhamos`,
        },
        {
          '@type': 'WebPage',
          name: 'Perguntas Frequentes (FAQ)',
          url: `${siteUrl}/#faq`,
        },
        {
          '@type': 'WebPage',
          name: 'Contactos',
          url: `${siteUrl}/contactos`,
        },
        {
          '@type': 'WebPage',
          name: 'Agendar Consultoria e Diagnóstico Técnico',
          url: `${siteUrl}/agendar-consultoria`,
        },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
