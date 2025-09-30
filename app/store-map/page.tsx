import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, MapPin } from "lucide-react"
import Link from "next/link"
import { StoreMap } from "@/components/store-map"

export default function StoreMapPage({ searchParams }: { searchParams: { productId?: string } }) {
  const productId = searchParams.productId ? Number.parseInt(searchParams.productId) : undefined

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-4 pb-20">
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" className="text-red-600 hover:text-red-700 hover:bg-red-50 -ml-3">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
          </Link>
        </div>

        <h1 className="text-2xl font-bold text-red-600 mb-6 flex items-center">
          <MapPin className="mr-2 h-6 w-6 text-red-500" />
          Lojas Swift
        </h1>

        <Card className="border-red-100 shadow-md mb-6">
          <CardHeader className="bg-red-50">
            <CardTitle className="text-lg text-red-700">
              {productId ? "Disponibilidade do Produto nas Lojas" : "Encontre a Loja Swift Mais Próxima"}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <StoreMap productId={productId} />
          </CardContent>
        </Card>
      </main>
      <Navigation />
    </div>
  )
}
