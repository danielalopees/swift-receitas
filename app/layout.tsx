import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ChefAssistantButton } from "@/components/chef-assistant-button"
import { CartProvider } from "@/hooks/use-cart"
import { MobileCart } from "@/components/mobile-cart"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Churras Swift entre Amigos",
  description: "Organize churrascos, divida as compras e ganhe recompensas com a Swift!",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <CartProvider>
          {children}
          <ChefAssistantButton />
          <MobileCart />
        </CartProvider>
      </body>
    </html>
  )
}
