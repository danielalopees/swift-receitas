export interface StoreInventoryItem {
  productId: number
  quantity: number
}

export interface Store {
  id: number
  name: string
  address: string
  cep: string
  phone: string
  hours: string
  distance: number
  latitude: number
  longitude: number
  inventory: StoreInventoryItem[]
}

export interface ProductAvailability {
  productId: number
  storeId: number
  storeName: string
  isAvailable: boolean
  quantity: number
  distance: number
}
