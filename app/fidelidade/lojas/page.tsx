import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, MapPin, Phone, Clock, Navigation2 } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"

export default function Lojas() {
  // Dados simulados de lojas
  const lojas = [
    {
      id: 1,
      nome: "Swift Shopping Morumbi",
      endereco: "Av. Roque Petroni Júnior, 1089 - Morumbi, São Paulo - SP",
      telefone: "(11) 5555-1234",
      horario: "Seg a Sáb: 10h às 22h | Dom: 12h às 20h",
      distancia: "2,5 km",
    },
    {
      id: 2,
      nome: "Swift Shopping Ibirapuera",
      endereco: "Av. Ibirapuera, 3103 - Moema, São Paulo - SP",
      telefone: "(11) 5555-5678",
      horario: "Seg a Sáb: 10h às 22h | Dom: 12h às 20h",
      distancia: "4,8 km",
    },
    {
      id: 3,
      nome: "Swift Shopping Eldorado",
      endereco: "Av. Rebouças, 3970 - Pinheiros, São Paulo - SP",
      telefone: "(11) 5555-9012",
      horario: "Seg a Sáb: 10h às 22h | Dom: 12h às 20h",
      distancia: "6,2 km",
    },
  ]

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

        <h1 className="text-2xl font-bold text-amber-600 mb-6 flex items-center">
          <MapPin className="mr-2 h-6 w-6 text-amber-500" />
          Lojas Swift
        </h1>

        <div className="mb-6">
          <div className="relative">
            <Input
              placeholder="Buscar por CEP, cidade ou bairro"
              className="pl-10 border-amber-200 focus:border-amber-500 focus:ring-amber-500"
            />
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>
        </div>

        <div className="space-y-4">
          {lojas.map((loja) => (
            <Card key={loja.id} className="border-amber-100 shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-amber-700 flex justify-between items-center">
                  <span>{loja.nome}</span>
                  <Badge distancia={loja.distancia} />
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2">
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 text-gray-500 mt-1 mr-2 flex-shrink-0" />
                    <p className="text-sm text-gray-600 break-words">{loja.endereco}</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-gray-500 mr-2 flex-shrink-0" />
                    <p className="text-sm text-gray-600">{loja.telefone}</p>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-4 w-4 text-gray-500 mt-1 mr-2 flex-shrink-0" />
                    <p className="text-sm text-gray-600">{loja.horario}</p>
                  </div>
                  <div className="pt-2 flex justify-end">
                    <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                      <Navigation2 className="mr-2 h-4 w-4" />
                      Como Chegar
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Navigation />
    </div>
  )
}

// Componente Badge para mostrar a distância
function Badge({ distancia }: { distancia: string }) {
  return (
    <div className="bg-amber-100 text-amber-700 text-xs font-medium px-2 py-1 rounded-full flex items-center">
      <Navigation2 className="h-3 w-3 mr-1" />
      {distancia}
    </div>
  )
}
