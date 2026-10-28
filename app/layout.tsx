import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const Analytics = () => null;

export const metadata: Metadata = {
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
  '@type': 'ResearchOrganization',
  name: 'Hagriia Labs',
  description:
    'Laboratório de engenharia de software e inteligência artificial aplicada. Desenvolvemos produtos digitais e sistemas à medida para empresas, instituições e startups.',
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
