import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Home, User, Gift } from "lucide-react"
import Link from "next/link"

export default function ConfirmacaoPontos() {
  // Dados simulados da compra
  const compra = {
    valor: 120.5,
    pontos: 1205, // 10 pontos por real
    data: "30/04/2025",
    loja: "Swift Shopping Morumbi",
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-4 pb-16 flex items-center justify-center">
        <div className="max-w-md w-full">
          <Card className="border-green-100 shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-teal-500 h-2"></div>
            <CardContent className="pt-6 pb-6 px-4 sm:px-6 text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-10 w-10 text-green-500" />
              </div>
              <h1 className="text-2xl font-bold text-green-600 mb-2">Pontos Registrados!</h1>
              <p className="text-gray-600 mb-6">
                A compra foi registrada com sucesso e os pontos foram adicionados à sua conta.
              </p>

              <div className="bg-amber-50 rounded-lg p-4 mb-6">
                <div className="flex flex-wrap justify-between items-center mb-2">
                  <span className="text-gray-600 mr-2">Valor da compra:</span>
                  <span className="font-bold text-gray-800">R$ {compra.valor.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Data:</span>
                  <span className="text-gray-800">{compra.data}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Loja:</span>
                  <span className="text-gray-800">{compra.loja}</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-amber-100 mt-2">
                  <span className="text-amber-700 font-medium">Pontos ganhos:</span>
                  <span className="font-bold text-amber-700 flex items-center">
                    <Gift className="h-4 w-4 mr-1" />
                    {compra.pontos} pontos
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <Link href="/fidelidade/dashboard">
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                    <User className="mr-2 h-4 w-4" />
                    Ver Minha Conta
                  </Button>
                </Link>
                <Link href="/">
                  <Button variant="outline" className="w-full border-gray-300 text-gray-700 bg-transparent">
                    <Home className="mr-2 h-4 w-4" />
                    Voltar para Início
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Navigation />
    </div>
  )
}
