import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const Analytics = () => null;

export const metadata: Metadata = {
  title: 'HAGRIA Labs | Vá Mais Longe',
  description: 'Equipamentos outdoor de alta performance projetados para o explorador moderno. Leves, duráveis e prontos para a aventura.',
  openGraph: {
    title: 'HAGRIA Labs | Vá Mais Longe',
    description: 'Equipamentos outdoor de alta performance projetados para o explorador moderno. Leves, duráveis e prontos para a aventura.',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
