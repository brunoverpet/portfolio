import type { Metadata } from 'next'
import { Lexend_Deca, Recursive } from 'next/font/google'
import './globals.css'
import type React from 'react'

const recursive = Recursive({
  subsets: ['latin'],
  variable: '--font-recursive',
  axes: ['MONO'],
  weight: 'variable',
})

const lexendDeca = Lexend_Deca({
  variable: '--font-lexend',
  subsets: ['latin'],
  weight: ['900'],
})

export const metadata: Metadata = {
  title: 'Bruno – Développeur Backend Node.js | Portfolio',
  description:
    'Portfolio de Bruno, développeur backend spécialisé en Node.js et Laravel. Projets, expériences et compétences techniques. Découvrez mon travail et mes réalisations.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${recursive.variable} font-mono-recursive antialiased my-16 mx-5`}>
        {children}
      </body>
    </html>
  )
}
