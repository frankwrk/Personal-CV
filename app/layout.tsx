import type React from "react"
import type { Metadata } from "next"
import { ThemeProvider } from "@/contexts/ThemeContext"
import "./globals.css"

export const metadata: Metadata = {
  title: "Francisc Furdui - Digital Experience Designer",
  description: "Portfolio and CV of Francisc Furdui, Digital Experience Designer",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'