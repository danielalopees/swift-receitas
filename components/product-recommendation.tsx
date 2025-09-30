"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Check, MapPin, ChevronDown, ChevronUp, CheckCircle, XCircle } from "lucide-react"
import type { Product } from "@/types/product"
import { useCart } from "@/hooks/use-cart"
import { ProductAvailabilityInfo } from "@/components/product-availability-info"

interface ProductRecommendationProps {
  product: Product
  onAddToCart: () => void
}

export function ProductRecommendation({ product, onAddToCart }: ProductRecommendationProps) {
  const [isAdded, setIsAdded] = useState(false)
  const [showAvailability, setShowAvailability] = useState(false)
  const { items, getProductAvailability, getNearestAvailableStore } = useCart()

  // Verificar se o produto já está no carrinho
  const isInCart = items.some((item) => item.id === product.id)

  // Obter a loja mais próxima onde o produto está disponível
  const nearestStore = getNearestAvailableStore(product.id)

  // Obter disponibilidade em todas as lojas
  const availability = getProductAvailability(product.id)
  const availableStores = availability.filter((store) => store.isAvailable)
  const unavailableStores = availability.filter((store) => !store.isAvailable)

  const handleAddToCart = () => {
    if (!isInCart && !isAdded) {
      onAddToCart()
      setIsAdded(true)
      setShowAvailability(true)

      // Reset o estado após 5 segundos para permitir adicionar novamente
      setTimeout(() => {
        setIsAdded(false)
      }, 5000)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="flex">
        <div className="w-20 h-20 bg-gray-100 flex-shrink-0">
          <img
            src={product.image || "/placeholder.svg?height=80&width=80"}
            alt={product.name}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="flex-1 p-2 flex flex-col justify-between">
          <div>
            <h4 className="font-medium text-sm line-clamp-1">{product.name}</h4>
            <p className="text-xs text-gray-500 line-clamp-1">{product.description}</p>
          </div>
          <div className="flex justify-between items-center mt-1">
            <span className="font-bold text-red-600">R$ {product.price.toFixed(2).replace(".", ",")}</span>
            <Button
              size="sm"
              variant={isInCart || isAdded ? "outline" : "default"}
              className={`h-9 px-3 min-w-[80px] touch-manipulation ${isInCart || isAdded ? "border-green-500 text-green-600" : "bg-red-600 hover:bg-red-700"}`}
              onClick={handleAddToCart}
              disabled={isInCart || isAdded}
            >
              {isInCart || isAdded ? (
                <>
                  <Check className="h-3 w-3 mr-1" />
                  <span className="text-xs">Adicionado</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="h-3 w-3 mr-1" />
                  <span className="text-xs">Adicionar</span>
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Informação de disponibilidade na loja mais próxima */}
      {(isInCart || isAdded) && nearestStore && (
        <div className="px-3 py-2 border-t border-gray-100 bg-gray-50">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <MapPin className="h-3 w-3 mr-1 text-gray-500" />
              <span className="text-xs text-gray-600">Disponibilidade em lojas:</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0"
              onClick={() => setShowAvailability(!showAvailability)}
            >
              {showAvailability ? (
                <ChevronUp className="h-4 w-4 text-gray-500" />
              ) : (
                <ChevronDown className="h-4 w-4 text-gray-500" />
              )}
            </Button>
          </div>

          <div className="flex items-center mt-1">
            {nearestStore.isAvailable ? (
              <>
                <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
                <span className="text-xs text-green-600">
                  Disponível na loja {nearestStore.storeName} ({nearestStore.distance.toFixed(1)}km)
                </span>
              </>
            ) : (
              <>
                <XCircle className="h-3 w-3 text-red-500 mr-1" />
                <span className="text-xs text-red-600">Indisponível nas lojas próximas</span>
              </>
            )}
          </div>

          {/* Lista detalhada de disponibilidade */}
          {showAvailability && (
            <ProductAvailabilityInfo availableStores={availableStores} unavailableStores={unavailableStores} />
          )}
        </div>
      )}
    </div>
  )
}
