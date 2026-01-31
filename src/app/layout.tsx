import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import WhatsAppFloating from '@/components/WhatsAppFloating'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'KMINMOBILIARIA | Exclusive Properties',
  description: 'Gestión inmobiliaria de alta gama.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${playfair.variable}`}>
        {children}
        <WhatsAppFloating />
      </body>
    </html>
  )
}
