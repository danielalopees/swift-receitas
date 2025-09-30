"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import type { Product } from "@/types/product"
import type { ProductAvailability } from "@/types/store"
import { stores } from "@/data/stores"

interface CartContextType {
  items: Product[]
  addToCart: (product: Product) => void
  removeFromCart: (productId: number) => void
  clearCart: () => void
  getTotalPrice: () => number
  getProductAvailability: (productId: number) => ProductAvailability[]
  getNearestAvailableStore: (productId: number) => ProductAvailability | null
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Product[]>([])

  const addToCart = (product: Product) => {
    setItems((prev) => {
      // Verificar se o produto já está no carrinho
      if (prev.some((item) => item.id === product.id)) {
        return prev
      }
      return [...prev, product]
    })
  }

  const removeFromCart = (productId: number) => {
    setItems((prev) => prev.filter((item) => item.id !== productId))
  }

  const clearCart = () => {
    setItems([])
  }

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price, 0)
  }

  // Função para verificar a disponibilidade de um produto em todas as lojas
  const getProductAvailability = (productId: number): ProductAvailability[] => {
    return stores
      .map((store) => {
        const inventoryItem = store.inventory.find((item) => item.productId === productId)
        return {
          productId,
          storeId: store.id,
          storeName: store.name,
          isAvailable: (inventoryItem?.quantity || 0) > 0,
          quantity: inventoryItem?.quantity || 0,
          distance: store.distance,
        }
      })
      .sort((a, b) => a.distance - b.distance) // Ordenar por distância
  }

  // Função para obter a loja mais próxima onde o produto está disponível
  const getNearestAvailableStore = (productId: number): ProductAvailability | null => {
    const availableStores = getProductAvailability(productId).filter((item) => item.isAvailable)
    return availableStores.length > 0 ? availableStores[0] : null
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalPrice,
        getProductAvailability,
        getNearestAvailableStore,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
