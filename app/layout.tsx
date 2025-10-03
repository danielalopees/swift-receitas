import type React from "react"
import type { Metadata } from "next"

// 1. Import the custom Bootstrap styles
import "@/styles/custom-bootstrap.scss"

import { ChefAssistantButton } from "@/components/chef-assistant-button"
import { CartProvider } from "@/components/CartProvider"
import { MobileCart } from "@/components/mobile-cart"

// 2. Import the component that loads Bootstrap JS
import BootstrapClient from "@/components/BootstrapClient"

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
    <html lang="pt-BR" data-bs-theme="light">
      <body>
        <CartProvider>
          {children}
          <MobileCart />
        </CartProvider>
        {/* 3. Add the Bootstrap JS loader component */}
        <BootstrapClient />
      </body>
    </html>
  )
}