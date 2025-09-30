import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, CheckCircle, ShoppingBag, Upload, Users } from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"

export default function RegistrarCompras() {
  // Dados simulados de compras
  const compras = [
    {
      id: 1,
      produto: "Picanha Premium Swift",
      preco: 89.9,
      responsavel: {
        id: 1,
        nome: "João Silva",
        avatar: "https://i.pravatar.cc/150?img=1",
      },
      status: "pendente",
    },
    {
      id: 2,
      produto: "Cerveja Especial",
      preco: 29.9,
      responsavel: {
        id: 2,
        nome: "Maria Oliveira",
        avatar: "https://i.pravatar.cc/150?img=5",
      },
      status: "confirmado",
      comprovante: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      produto: "Carvão Premium",
      preco: 19.9,
      responsavel: {
        id: 4,
        nome: "Você",
        avatar: "https://i.pravatar.cc/150?img=8",
        isYou: true,
      },
      status: "pendente",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-4 pb-20">
        <div className="mb-6">
          <Link href="/escolher-produtos">
            <Button variant="ghost" className="text-red-600 hover:text-red-700 hover:bg-red-50 -ml-3">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-red-600 flex items-center">
              <ShoppingBag className="mr-2 h-6 w-6 text-red-500" />
              Registrar Compras
            </h1>
            <p className="text-gray-600">Confirme suas compras para o churras</p>
          </div>

          <Card className="bg-white shadow-sm border-red-100 p-3 w-full md:w-auto">
            <div className="flex items-center">
              <Users className="h-5 w-5 text-red-600 mr-2" />
              <h3 className="font-medium text-red-600">Churras de Sábado</h3>
              <Badge className="ml-2 bg-red-100 text-red-800 hover:bg-red-200">4 pessoas</Badge>
            </div>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {compras.map((compra) => (
            <Card key={compra.id} className="border-red-100 shadow-md overflow-hidden">
              <CardHeader
                className={`${
                  compra.status === "confirmado" ? "bg-green-500" : "bg-red-500"
                } text-white rounded-t-lg py-3`}
              >
                <CardTitle className="text-lg flex items-center justify-between">
                  <span className="flex items-center">
                    {compra.status === "confirmado" ? (
                      <CheckCircle className="mr-2 h-5 w-5" />
                    ) : (
                      <ShoppingBag className="mr-2 h-5 w-5" />
                    )}
                    {compra.produto}
                  </span>
                  <Badge
                    className={`${
                      compra.status === "confirmado"
                        ? "bg-green-100 text-green-800 hover:bg-green-200"
                        : "bg-red-100 text-red-800 hover:bg-red-200"
                    }`}
                  >
                    {compra.status === "confirmado" ? "Confirmado" : "Pendente"}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="flex items-center mb-4">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={compra.responsavel.avatar || "/placeholder.svg"} />
                    <AvatarFallback>{compra.responsavel.nome.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-gray-800">
                      {compra.responsavel.isYou ? "Você" : compra.responsavel.nome}
                    </p>
                    <p className="text-sm text-gray-500">Responsável pela compra</p>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">Valor:</span>
                  <span className="font-bold text-red-600">R$ {compra.preco.toFixed(2).replace(".", ",")}</span>
                </div>

                {compra.status === "confirmado" ? (
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Comprovante:</p>
                    <div className="bg-gray-100 rounded-lg p-2 flex justify-center">
                      <img
                        src={compra.comprovante || "/placeholder.svg"}
                        alt="Comprovante"
                        className="h-24 object-cover rounded-lg border border-gray-200"
                      />
                    </div>
                  </div>
                ) : compra.responsavel.isYou ? (
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600">Anexe o comprovante da sua compra:</p>
                    <div className="border-2 border-dashed border-red-200 rounded-lg p-4 text-center">
                      <Upload className="h-8 w-8 text-red-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">Clique para enviar ou arraste o arquivo</p>
                    </div>
                    <div className="pt-2">
                      <Input
                        type="text"
                        placeholder="Número do CPF na nota"
                        className="border-red-200 focus:border-red-500 focus:ring-red-500"
                      />
                    </div>
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                      Confirmar Compra
                      <CheckCircle className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <div className="bg-red-50 rounded-lg p-3 text-center">
                    <p className="text-sm text-red-800">Aguardando confirmação de {compra.responsavel.nome}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <Link href="/registrar-evento">
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Próximo: Registrar Evento
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </main>
      <Navigation />
    </div>
  )
}
