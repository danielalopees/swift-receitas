import type { Store } from "@/types/store"

export const stores: Store[] = [
  {
    id: 1,
    name: "Swift Shopping Morumbi",
    address: "Av. Roque Petroni Júnior, 1089 - Morumbi, São Paulo - SP",
    cep: "05652-000",
    phone: "(11) 5555-1234",
    hours: "Seg a Sáb: 10h às 22h | Dom: 12h às 20h",
    distance: 2.5,
    latitude: -23.6225,
    longitude: -46.6975,
    inventory: [
      { productId: 1, quantity: 15 }, // Picanha Premium
      { productId: 2, quantity: 20 }, // Fraldinha
      { productId: 3, quantity: 8 }, // Costela
      { productId: 4, quantity: 30 }, // Linguiça
      { productId: 5, quantity: 0 }, // Contra-filé (indisponível)
      { productId: 6, quantity: 12 }, // Cupim
      { productId: 7, quantity: 25 }, // Carvão
      { productId: 8, quantity: 40 }, // Cerveja
      { productId: 9, quantity: 18 }, // Sal Grosso
      { productId: 10, quantity: 5 }, // Chimichurri
    ],
  },
  {
    id: 2,
    name: "Swift Shopping Ibirapuera",
    address: "Av. Ibirapuera, 3103 - Moema, São Paulo - SP",
    cep: "04029-200",
    phone: "(11) 5555-5678",
    hours: "Seg a Sáb: 10h às 22h | Dom: 12h às 20h",
    distance: 4.8,
    latitude: -23.6095,
    longitude: -46.6673,
    inventory: [
      { productId: 1, quantity: 8 }, // Picanha Premium
      { productId: 2, quantity: 15 }, // Fraldinha
      { productId: 3, quantity: 0 }, // Costela (indisponível)
      { productId: 4, quantity: 25 }, // Linguiça
      { productId: 5, quantity: 10 }, // Contra-filé
      { productId: 6, quantity: 5 }, // Cupim
      { productId: 7, quantity: 30 }, // Carvão
      { productId: 8, quantity: 35 }, // Cerveja
      { productId: 9, quantity: 20 }, // Sal Grosso
      { productId: 10, quantity: 0 }, // Chimichurri (indisponível)
    ],
  },
  {
    id: 3,
    name: "Swift Shopping Eldorado",
    address: "Av. Rebouças, 3970 - Pinheiros, São Paulo - SP",
    cep: "05402-600",
    phone: "(11) 5555-9012",
    hours: "Seg a Sáb: 10h às 22h | Dom: 12h às 20h",
    distance: 6.2,
    latitude: -23.5746,
    longitude: -46.7055,
    inventory: [
      { productId: 1, quantity: 20 }, // Picanha Premium
      { productId: 2, quantity: 0 }, // Fraldinha (indisponível)
      { productId: 3, quantity: 15 }, // Costela
      { productId: 4, quantity: 18 }, // Linguiça
      { productId: 5, quantity: 12 }, // Contra-filé
      { productId: 6, quantity: 8 }, // Cupim
      { productId: 7, quantity: 0 }, // Carvão (indisponível)
      { productId: 8, quantity: 50 }, // Cerveja
      { productId: 9, quantity: 15 }, // Sal Grosso
      { productId: 10, quantity: 10 }, // Chimichurri
    ],
  },
  {
    id: 4,
    name: "Swift Shopping Anália Franco",
    address: "R. Regente Feijó, 1739 - Tatuapé, São Paulo - SP",
    cep: "03342-900",
    phone: "(11) 5555-3456",
    hours: "Seg a Sáb: 10h às 22h | Dom: 12h às 20h",
    distance: 8.7,
    latitude: -23.5567,
    longitude: -46.5756,
    inventory: [
      { productId: 1, quantity: 10 }, // Picanha Premium
      { productId: 2, quantity: 12 }, // Fraldinha
      { productId: 3, quantity: 5 }, // Costela
      { productId: 4, quantity: 20 }, // Linguiça
      { productId: 5, quantity: 8 }, // Contra-filé
      { productId: 6, quantity: 0 }, // Cupim (indisponível)
      { productId: 7, quantity: 15 }, // Carvão
      { productId: 8, quantity: 30 }, // Cerveja
      { productId: 9, quantity: 10 }, // Sal Grosso
      { productId: 10, quantity: 8 }, // Chimichurri
    ],
  },
]
