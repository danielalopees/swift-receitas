"use client"

import { useState } from "react"

interface Product {
  id: number
  name: string
  image: string
}

export function ProductSelector() {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([])

  // Produtos Swift simulados
  const products: Product[] = [
    { id: 1, name: "Picanha Angus Swift", image: "/images/products/picanha.webp" },
    { id: 2, name: "Carne Moída Swift", image: "/images/products/carne-moida.jpg" },
    { id: 3, name: "Frango Swift", image: "/images/products/frango.jpg" },
    { id: 4, name: "Linguiça Swift", image: "/images/products/linguica.jpg" },
    { id: 5, name: "Bacon Swift", image: "/images/products/bacon.jpg" },
    { id: 6, name: "Creme de Leite Swift", image: "/images/products/creme-de-leite.jpg" },
  ]

  const toggleProduct = (productId: number) => {
    setSelectedProducts((prevSelectedProducts) =>
      prevSelectedProducts.includes(productId)
        ? prevSelectedProducts.filter((id) => id !== productId)
        : [...prevSelectedProducts, productId],
    )
  }

  return (
    <div className="flex flex-col">
      <h2 className="text-lg font-semibold mb-4">Selecione os produtos Swift:</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className={`border rounded-lg p-4 cursor-pointer ${
              selectedProducts.includes(product.id) ? "border-blue-500" : "border-gray-300"
            }`}
            onClick={() => toggleProduct(product.id)}
          >
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-32 object-cover rounded-md mb-2"
            />
            <p className="text-sm font-medium">{product.name}</p>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <p>
          Produtos selecionados:{" "}
          {selectedProducts.length > 0
            ? selectedProducts.map((id) => products.find((p) => p.id === id)?.name).join(", ")
            : "Nenhum"}
        </p>
      </div>
    </div>
  )
}
