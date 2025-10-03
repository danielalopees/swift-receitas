"use client";

import { useState } from "react"
import { ShoppingCart, X, ChevronUp, MapPin, CheckCircle, XCircle } from "lucide-react"
import { Button, Modal } from "react-bootstrap"
import { useCart } from "@/hooks/use-cart"
import { motion, AnimatePresence } from "framer-motion"
import { useMediaQuery } from "@/hooks/use-media-query"
import { StoreMap } from "@/components/store-map"

export function MobileCart() {
  const { items, getTotalPrice, removeFromCart, getNearestAvailableStore } = useCart()
  const [isExpanded, setIsExpanded] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null)
  const isMobile = useMediaQuery("(max-width: 768px)")

  const handleShowModal = (productId: number) => {
    setSelectedProductId(productId)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setSelectedProductId(null)
  }

  // Não renderizar em telas grandes
  if (!isMobile) return null

  // Não renderizar se não houver itens
  if (items.length === 0) return null

  return (
    <>
      <div className="h-16" /> {/* Espaço para o carrinho fixo */}
      <div className="fixed-bottom bg-white border-top shadow-lg" style={{ bottom: "4rem" }}>
        <div className="container">
          <div className="d-flex align-items-center justify-content-between p-3">
            <Button
              variant="light"
              size="sm"
              className="d-flex align-items-center text-secondary"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <ShoppingCart size={20} className="me-2" />
              <span className="fw-medium">
                {items.length} {items.length === 1 ? "item" : "itens"}
              </span>
              <ChevronUp size={16} className={`ms-1 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
            </Button>
            <div className="d-flex align-items-center">
              <span className="fw-bold text-danger me-2">R$ {getTotalPrice().toFixed(2).replace(".", ",")}</span>
              <Button variant="danger" style={{ minHeight: '40px', minWidth: '100px' }}>
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
                <div className="p-3 pt-0" style={{ maxHeight: '15rem', overflowY: 'auto' }}>
                  {items.map((item) => {
                    const nearestStore = getNearestAvailableStore(item.id)

                    return (
                      <div key={item.id} className="d-flex flex-column py-2 border-top">
                        <div className="d-flex align-items-center">
                          <div style={{ width: '48px', height: '48px' }} className="bg-light rounded-md me-3 flex-shrink-0">
                            <img
                              src={item.image || "/placeholder.svg?height=48&width=48"}
                              alt={item.name}
                              className="w-100 h-100 object-cover rounded-md"
                            />
                          </div>
                          <div className="flex-grow-1 min-w-0">
                            <p className="fw-medium small text-truncate mb-0">{item.name}</p>
                            <p className="text-danger small mb-0">R$ {item.price.toFixed(2).replace(".", ",")}</p>
                          </div>
                          <Button
                            variant="light"
                            size="sm"
                            className="text-secondary"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <X size={16} />
                          </Button>
                        </div>

                        {/* Disponibilidade na loja mais próxima */}
                        <div className="mt-1 d-flex align-items-center" style={{ marginLeft: 'calc(48px + 0.75rem)'}}>
                          {nearestStore ? (
                            <Button
                              variant="light"
                              size="sm"
                              className="p-1 small d-flex align-items-center"
                              onClick={() => handleShowModal(item.id)}
                            >
                              {nearestStore.isAvailable ? (
                                <>
                                  <CheckCircle size={12} className="text-success me-1" />
                                  <span className="text-success">
                                    Disponível na loja {nearestStore.storeName}
                                  </span>
                                </>
                              ) : (
                                <>
                                  <XCircle size={12} className="text-danger me-1" />
                                  <span className="text-danger">Indisponível nas lojas próximas</span>
                                </> 
                              )}
                              <MapPin size={12} className="ms-1 text-primary" />
                            </Button>
                          ) : (
                            <span className="small text-muted ms-2">Verificando disponibilidade...</span>
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

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Disponibilidade nas Lojas</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProductId && <StoreMap productId={selectedProductId} />}
        </Modal.Body>
      </Modal>
    </>
  )
}
