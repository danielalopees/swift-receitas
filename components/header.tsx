"use client"

import { useState } from "react"
import { Search, Bell, Menu, ShoppingCart, User, Home, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"
import { useCart } from "@/hooks/use-cart"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { items, getTotalPrice } = useCart()

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          {/* Menu hambúrguer para mobile */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2 md:hidden text-gray-600">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[80%] sm:w-[300px] pt-12">
              <div className="flex flex-col h-full">
                <div className="flex-1 space-y-2">
                  <Link href="/" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-lg">
                      <Home className="mr-3 h-5 w-5" />
                      Início
                    </Button>
                  </Link>
                  <Link href="/busca" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-lg">
                      <Search className="mr-3 h-5 w-5" />
                      Buscar
                    </Button>
                  </Link>
                  <Link href="/ranking" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-lg">
                      <Award className="mr-3 h-5 w-5" />
                      Ranking
                    </Button>
                  </Link>
                  <Link href="/perfil" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="ghost" className="w-full justify-start text-lg">
                      <User className="mr-3 h-5 w-5" />
                      Perfil
                    </Button>
                  </Link>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-gray-500">Versão 1.0.0</span>
                    <Link href="/fidelidade/login">
                      <Button variant="outline" size="sm" className="text-red-600 border-red-200">
                        Entrar
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <Link href="/">
            <div className="flex items-center">
              <span className="font-semibold text-gray-800 text-lg tracking-wide">
                <span className="text-red-600">R</span>eceitas
              </span>
              <img src="/images/swift-logo.svg" alt="Swift" className="h-6 ml-2" />
            </div>
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          <Link href="/busca" className="md:block hidden">
            <Button variant="ghost" size="icon" className="text-gray-600">
              <Search className="h-5 w-5" />
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="text-gray-600">
            <Bell className="h-5 w-5" />
          </Button>
          <MobileCartButton items={items} totalPrice={getTotalPrice()} />
        </div>
      </div>
    </header>
  )
}

function MobileCartButton({ items, totalPrice }: { items: any[]; totalPrice: number }) {
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <div className="relative">
      <Button variant="ghost" size="icon" className="text-gray-600 relative" onClick={() => setIsCartOpen(!isCartOpen)}>
        <ShoppingCart className="h-5 w-5" />
        {items.length > 0 && (
          <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-red-500">
            {items.length}
          </Badge>
        )}
      </Button>

      <AnimatePresence>
        {isCartOpen && items.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute right-0 top-full mt-2 w-72 bg-white rounded-lg shadow-lg z-50 overflow-hidden"
          >
            <div className="p-3 border-b border-gray-100">
              <h3 className="font-medium text-gray-800">Seu Carrinho</h3>
            </div>
            <div className="max-h-60 overflow-y-auto">
              {items.map((item) => (
                <div key={item.id} className="p-3 border-b border-gray-100 flex items-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-md mr-3 flex-shrink-0">
                    <img
                      src={item.image || "/placeholder.svg?height=48&width=48"}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{item.name}</p>
                    <p className="text-red-600 text-sm">R$ {item.price.toFixed(2).replace(".", ",")}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 bg-gray-50">
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-600">Total:</span>
                <span className="font-bold text-red-600">R$ {totalPrice.toFixed(2).replace(".", ",")}</span>
              </div>
              <Button className="w-full bg-red-600 hover:bg-red-700">Ver Carrinho</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
