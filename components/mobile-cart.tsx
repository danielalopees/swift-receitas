"use client"

import { useState } from "react"
import { ShoppingCart, X, ChevronUp, MapPin, CheckCircle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import { motion, AnimatePresence } from "framer-motion"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { StoreMap } from "@/components/store-map"

export function MobileCart() {
  const { items, getTotalPrice, removeFromCart, getNearestAvailableStore } = useCart()
  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null)
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Não renderizar em telas grandes
  if (!isMobile) return null

  // Não renderizar se não houver itens
  if (items.length === 0) return null

  return (
    <>
      <div className="h-16" /> {/* Espaço para o carrinho fixo */}
      <div className="fixed bottom-16 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg">
        <div className="container mx-auto">
          <div className="flex items-center justify-between p-3">
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center text-gray-600"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              <span className="font-medium">
                {items.length} {items.length === 1 ? "item" : "itens"}
              </span>
              <ChevronUp className={`h-4 w-4 ml-1 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
            </Button>
            <div className="flex items-center">
              <span className="font-bold text-red-600 mr-2">R$ {getTotalPrice().toFixed(2).replace(".", ",")}</span>
              <Button className="bg-red-600 hover:bg-red-700 min-h-[40px] min-w-[100px] touch-manipulation">
                Finalizar
              </Button>
            </div>
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-3 pt-0 max-h-60 overflow-y-auto">
                  {items.map((item) => {
                    const nearestStore = getNearestAvailableStore(item.id)

                    return (
                      <div key={item.id} className="flex flex-col py-2 border-t border-gray-100">
                        <div className="flex items-center">
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
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-gray-400 hover:text-red-600"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>

                        {/* Disponibilidade na loja mais próxima */}
                        <div className="ml-15 mt-1 flex items-center">
                          {nearestStore ? (
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-6 p-1 text-xs flex items-center"
                                  onClick={() => setSelectedProductId(item.id)}
                                >
                                  {nearestStore.isAvailable ? (
                                    <>
                                      <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
                                      <span className="text-green-600">
                                        Disponível na loja {nearestStore.storeName}
                                      </span>
                                    </>
                                  ) : (
                                    <>
                                      <XCircle className="h-3 w-3 text-red-500 mr-1" />
                                      <span className="text-red-600">Indisponível nas lojas próximas</span>
                                    </>
                                  )}
                                  <MapPin className="h-3 w-3 ml-1 text-blue-500" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-md">
                                <DialogHeader>
                                  <DialogTitle>Disponibilidade nas Lojas</DialogTitle>
                                </DialogHeader>
                                <div className="mt-2">
                                  <StoreMap productId={item.id} />
                                </div>
                              </DialogContent>
                            </Dialog>
                          ) : (
                            <span className="text-xs text-gray-500 ml-2">Verificando disponibilidade...</span>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  )
}
