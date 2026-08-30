import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kajal Pandey | Computer Science Engineering Student & Developer',
  description:
    'Portfolio of Kajal Pandey — Computer Science Engineering student, developer, AI/ML enthusiast, and problem solver.',
  generator: 'v0.app',
  authors: [{ name: 'Kajal Pandey' }],
  keywords: [
    'Kajal Pandey',
    'Computer Science',
    'Developer Portfolio',
    'AI/ML',
    'Python',
    'Full-Stack',
  ],
  openGraph: {
    title: 'Kajal Pandey | Computer Science Engineering Student & Developer',
    description:
      'Portfolio of Kajal Pandey — Computer Science Engineering student, developer, AI/ML enthusiast, and problem solver.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0d12',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-background font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
