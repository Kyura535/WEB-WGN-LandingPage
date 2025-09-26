import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Script } from 'next/script'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'WGN Home Internet',
  description: 'Premium fiber optic internet for your home and business',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans`}>
        <Script 
          id="Cookiebot" 
          src="https://consent.cookiebot.com/uc.js" 
          data-cbid="9a4d8d2b-293d-4cfb-8b98-39726126457b" 
          type="text/javascript" 
          strategy="beforeInteractive"
        />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}