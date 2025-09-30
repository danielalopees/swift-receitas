import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Ticket, Gift, Store, QrCode } from "lucide-react"
import Link from "next/link"

export default function ResgatarCupom() {
  // Dados simulados do cupom
  const cupom = {
    id: 1,
    titulo: "10% de desconto em carnes",
    pontos: 1000,
    codigo: "SWIFT10CARNES",
    validade: "30/05/2025",
    descricao: "Válido para qualquer corte de carne nas lojas físicas Swift.",
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-4 pb-16">
        <div className="mb-6">
          <Link href="/fidelidade/dashboard">
            <Button variant="ghost" className="text-amber-600 hover:text-amber-700 hover:bg-amber-50 -ml-3">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
          </Link>
        </div>

        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold text-amber-600 mb-6 flex items-center">
            <Ticket className="mr-2 h-6 w-6 text-amber-500" />
            Resgatar Cupom
          </h1>

          <Card className="border-amber-100 shadow-md overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-red-500 to-amber-500 text-white">
              <CardTitle className="text-xl">{cupom.titulo}</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="bg-amber-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Custo:</span>
                    <span className="font-bold text-amber-600 flex items-center">
                      <Gift className="h-4 w-4 mr-1" />
                      {cupom.pontos} pontos
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Validade:</span>
                    <span className="text-gray-800">{cupom.validade}</span>
                  </div>
                  <div className="pt-2">
                    <p className="text-sm text-gray-600">{cupom.descricao}</p>
                  </div>
                </div>

                <div className="border-2 border-dashed border-amber-200 rounded-lg p-4 text-center">
                  <QrCode className="h-24 w-24 sm:h-32 sm:w-32 text-amber-500 mx-auto mb-4" />
                  <p className="font-bold text-lg text-amber-700 mb-1">Código do Cupom</p>
                  <p className="bg-amber-100 text-amber-800 py-2 px-4 rounded-lg font-mono text-sm sm:text-lg break-all">
                    {cupom.codigo}
                  </p>
                </div>

                <div className="pt-4">
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                    <Gift className="mr-2 h-4 w-4" />
                    Resgatar por {cupom.pontos} pontos
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 bg-amber-50 rounded-lg p-4 border border-amber-100">
            <h3 className="font-medium text-amber-700 mb-2 flex items-center">
              <Store className="h-4 w-4 mr-1" />
              Como usar este cupom
            </h3>
            <ol className="space-y-2 text-sm text-gray-600 list-decimal pl-5">
              <li>Resgate o cupom clicando no botão acima</li>
              <li>Visite uma loja física Swift</li>
              <li>Apresente o código ou QR code ao caixa</li>
              <li>O desconto será aplicado automaticamente na sua compra</li>
            </ol>
          </div>
        </div>
      </main>
      <Navigation />
    </div>
  )
}
