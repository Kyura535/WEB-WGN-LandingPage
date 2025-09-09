import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "PT Wifian Global Nusantara - WGN Home Internet",
  description: "Layanan Online Internet Access terpercaya dengan paket unlimited dan support 24/7",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={null}>{children}</Suspense>
          <Analytics />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  )
}
