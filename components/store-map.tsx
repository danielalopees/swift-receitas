"use client"

import { useState } from "react"
import { useCart } from "@/hooks/use-cart"
import { stores } from "@/data/stores"
import { CheckCircle, XCircle, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface StoreMapProps {
  productId?: number
}

export function StoreMap({ productId }: StoreMapProps) {
  const { getProductAvailability } = useCart()
  const [activeTab, setActiveTab] = useState<string>("list")

  // Se um productId for fornecido, filtre as lojas pela disponibilidade desse produto
  const storeAvailability = productId ? getProductAvailability(productId) : []

  // Ordenar lojas por distância
  const sortedStores = [...stores].sort((a, b) => a.distance - b.distance)

  // Função para obter a cor do marcador com base na disponibilidade
  const getMarkerColor = (storeId: number): string => {
    if (!productId) return "#3B82F6" // Azul padrão se não houver produto selecionado

    const availability = storeAvailability.find((a) => a.storeId === storeId)
    return availability?.isAvailable ? "#10B981" : "#EF4444" // Verde se disponível, vermelho se não
  }

  return (
    <div className="w-full">
      <Tabs defaultValue="list" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-2 mb-4">
          <TabsTrigger value="list">Lista</TabsTrigger>
          <TabsTrigger value="map">Mapa</TabsTrigger>
        </TabsList>

        <TabsContent value="list" className="mt-0">
          <div className="max-h-[300px] overflow-y-auto">
            {sortedStores.map((store) => {
              // Verificar disponibilidade se um productId for fornecido
              const availability = productId ? storeAvailability.find((a) => a.storeId === store.id) : null

              return (
                <div key={store.id} className="mb-3 p-3 border border-gray-200 rounded-lg">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-gray-800">{store.name}</h3>
                    <div className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full flex items-center">
                      <Navigation className="h-3 w-3 mr-1" />
                      {store.distance.toFixed(1)}km
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mt-1">{store.address}</p>
                  <p className="text-xs text-gray-500 mt-1">CEP: {store.cep}</p>

                  {/* Mostrar disponibilidade se um produto estiver selecionado */}
                  {availability && (
                    <div className="mt-2 flex items-center">
                      {availability.isAvailable ? (
                        <>
                          <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                          <span className="text-sm text-green-600">Disponível ({availability.quantity} unidades)</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="h-4 w-4 text-red-500 mr-1" />
                          <span className="text-sm text-red-600">Indisponível</span>
                        </>
                      )}
                    </div>
                  )}

                  <div className="mt-2 flex justify-between items-center">
                    <span className="text-xs text-gray-500">{store.hours}</span>
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-8 text-xs"
                      onClick={() => {
                        // Abrir no Google Maps
                        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${store.latitude},${store.longitude}`
                        window.open(mapsUrl, "_blank")
                      }}
                    >
                      <Navigation className="h-3 w-3 mr-1" />
                      Como chegar
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </TabsContent>

        <TabsContent value="map" className="mt-0">
          <div className="relative w-full h-[300px] bg-gray-100 rounded-lg overflow-hidden">
            {/* Mapa simplificado - em uma implementação real, usaríamos Google Maps ou Leaflet */}
            <div className="absolute inset-0 bg-blue-50 p-4">
              <div className="w-full h-full relative border-2 border-blue-200 rounded-lg">
                {/* Marcadores de lojas */}
                {sortedStores.map((store) => {
                  // Posição relativa no mapa baseada em latitude e longitude
                  const left = ((store.longitude + 46.8) / 0.5) * 100
                  const top = ((store.latitude + 23.8) / 0.5) * 100

                  return (
                    <div
                      key={store.id}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2"
                      style={{
                        left: `${Math.min(Math.max(left, 10), 90)}%`,
                        top: `${Math.min(Math.max(top, 10), 90)}%`,
                      }}
                    >
                      <div
                        className="w-4 h-4 rounded-full border-2 border-white shadow-md cursor-pointer"
                        style={{ backgroundColor: getMarkerColor(store.id) }}
                        title={store.name}
                      ></div>
                    </div>
                  )
                })}

                {/* Legenda */}
                <div className="absolute bottom-2 left-2 bg-white p-2 rounded-md shadow-md text-xs">
                  <div className="flex items-center mb-1">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
                    <span>Disponível</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
                    <span>Indisponível</span>
                  </div>
                </div>

                {/* Mensagem de mapa simplificado */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-gray-500">
                  <p>Mapa simplificado</p>
                  <p className="text-xs">Clique em "Lista" para ver detalhes</p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
