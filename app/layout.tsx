import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const Analytics = () => null;

export const metadata: Metadata = {
  title: 'Hagriia Labs | Laboratório de Tecnologia e Inovação',
  description:
    'O Hagriia Labs é um laboratório de tecnologia e inovação dedicado à investigação aplicada, ao desenvolvimento de software e à criação de soluções tecnológicas para desafios reais.',
  keywords: [
    'Hagriia Labs',
    'Laboratório de tecnologia e inovação',
    'Desenvolvimento de software',
    'Inteligência artificial',
    'Investigação aplicada',
    'Desenvolvimento tecnológico',
    'Soluções digitais',
  ],
  openGraph: {
    type: 'website',
    siteName: 'Hagriia Labs',
    title: 'Hagriia Labs | Laboratório de Tecnologia e Inovação',
    description:
      'Laboratório de tecnologia e inovação dedicado à investigação aplicada, ao desenvolvimento de software e à exploração de soluções inteligentes para desafios reais.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hagriia Labs | Laboratório de Tecnologia e Inovação',
    description:
      'Laboratório de tecnologia e inovação dedicado à investigação aplicada, ao desenvolvimento de software e à exploração de soluções inteligentes para desafios reais.',
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
    'Laboratório de tecnologia e inovação dedicado à investigação aplicada, ao desenvolvimento de software e à criação de soluções tecnológicas para desafios reais.',
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
