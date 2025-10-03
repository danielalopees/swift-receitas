"use client"
import { CheckCircle, XCircle, MapPin } from "lucide-react"
import type { ProductAvailability } from "@/types/store"
import { Button } from "react-bootstrap"
import Link from "next/link"

interface ProductAvailabilityInfoProps {
  availableStores: ProductAvailability[]
  unavailableStores: ProductAvailability[]
}

export function ProductAvailabilityInfo({ availableStores, unavailableStores }: ProductAvailabilityInfoProps) {
  return (
    <div className="mt-2 pt-2 border-t border-gray-200">
      <div className="max-h-40 overflow-y-auto">
        {/* Lojas com disponibilidade */}
        {availableStores.length > 0 && (
          <div className="mb-2">
            <h5 className="text-xs font-medium text-gray-700 mb-1">Disponível em:</h5>
            <ul className="space-y-1">
              {availableStores.map((store) => (
                <li key={store.storeId} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CheckCircle className="h-3 w-3 text-green-500 mr-1 flex-shrink-0" />
                    <span className="text-xs text-gray-600 truncate max-w-[150px]">{store.storeName}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xs text-gray-500 mr-1">{store.distance.toFixed(1)}km</span>
                    <Link href={`/store-map?storeId=${store.storeId}`} passHref>
                      <Button variant="link" size="sm" className="h-6 w-6 p-0">
                        <MapPin className="h-3 w-3 text-blue-500" />
                      </Button>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Lojas sem disponibilidade */}
        {unavailableStores.length > 0 && (
          <div>
            <h5 className="text-xs font-medium text-gray-700 mb-1">Indisponível em:</h5>
            <ul className="space-y-1">
              {unavailableStores.map((store) => (
                <li key={store.storeId} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <XCircle className="h-3 w-3 text-red-500 mr-1 flex-shrink-0" />
                    <span className="text-xs text-gray-600 truncate max-w-[150px]">{store.storeName}</span>
                  </div>
                  <span className="text-xs text-gray-500">{store.distance.toFixed(1)}km</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
