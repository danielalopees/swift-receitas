import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Gift, Trophy, Star, Ticket, Users, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"

export default function Recompensas() {
  // Dados simulados de recompensas
  const cupons = [
    {
      id: 1,
      titulo: "10% OFF em Carnes Swift",
      pontos: 1000,
      validade: "30 dias",
      imagem: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      titulo: "15% OFF em Linguiças",
      pontos: 1500,
      validade: "30 dias",
      imagem: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      titulo: "Frete Grátis",
      pontos: 2000,
      validade: "15 dias",
      imagem: "/placeholder.svg?height=100&width=100",
    },
  ]

  const combos = [
    {
      id: 4,
      titulo: "Combo Churrasco Básico",
      descricao: "Picanha 1kg + Linguiça + Carvão",
      pontos: 5000,
      valorMercado: "R$ 149,90",
      imagem: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 5,
      titulo: "Combo Churrasco Premium",
      descricao: "Picanha 1kg + Costela + Fraldinha + Carvão",
      pontos: 8000,
      valorMercado: "R$ 249,90",
      imagem: "/placeholder.svg?height=100&width=100",
    },
  ]

  const sorteios = [
    {
      id: 6,
      titulo: "Churrasqueira Elétrica",
      dataEncerramento: "15/05/2025",
      participantes: 145,
      imagem: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 7,
      titulo: "Kit Churrasco Profissional",
      dataEncerramento: "30/05/2025",
      participantes: 89,
      imagem: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-4 pb-20">
        <div className="mb-6">
          <Link href="/registrar-evento">
            <Button variant="ghost" className="text-red-600 hover:text-red-700 hover:bg-red-50 -ml-3">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-red-600 flex items-center">
              <Gift className="mr-2 h-6 w-6 text-red-500" />
              Recompensas
            </h1>
            <p className="text-gray-600">Resgate prêmios com seus pontos acumulados</p>
          </div>

          <Card className="bg-white shadow-sm border-red-100 p-3 w-full md:w-auto">
            <div className="flex items-center">
              <Trophy className="h-5 w-5 text-red-600 mr-2" />
              <div>
                <h3 className="font-medium text-red-600">1.700 pontos</h3>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                  <div className="bg-red-500 h-1.5 rounded-full" style={{ width: "34%" }}></div>
                </div>
              </div>
              <Badge className="ml-3 bg-red-100 text-red-800 hover:bg-red-200">Nível 2</Badge>
            </div>
          </Card>
        </div>

        <Tabs defaultValue="cupons" className="w-full">
          <TabsList className="w-full bg-red-100 p-1 mb-6">
            <TabsTrigger value="cupons" className="data-[state=active]:bg-red-500 data-[state=active]:text-white">
              <Ticket className="h-4 w-4 mr-2" />
              Cupons
            </TabsTrigger>
            <TabsTrigger value="combos" className="data-[state=active]:bg-red-500 data-[state=active]:text-white">
              <ShoppingBag className="h-4 w-4 mr-2" />
              Combos
            </TabsTrigger>
            <TabsTrigger value="sorteios" className="data-[state=active]:bg-red-500 data-[state=active]:text-white">
              <Star className="h-4 w-4 mr-2" />
              Sorteios
            </TabsTrigger>
          </TabsList>

          <TabsContent value="cupons" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cupons.map((cupom) => (
                <Card key={cupom.id} className="border-red-100 shadow-md overflow-hidden">
                  <div className="flex h-full">
                    <div className="w-1/3 bg-gradient-to-b from-red-500 to-amber-500 flex items-center justify-center p-4">
                      <img
                        src={cupom.imagem || "/placeholder.svg"}
                        alt={cupom.titulo}
                        className="h-16 w-16 object-contain"
                      />
                    </div>
                    <div className="w-2/3">
                      <CardHeader className="py-3">
                        <CardTitle className="text-lg text-red-600">{cupom.titulo}</CardTitle>
                      </CardHeader>
                      <CardContent className="py-0">
                        <div className="flex items-center text-sm text-gray-600 mb-2">
                          <Trophy className="h-4 w-4 mr-1 text-amber-500" />
                          <span>{cupom.pontos} pontos</span>
                        </div>
                        <div className="text-xs text-gray-500">Válido por {cupom.validade}</div>
                      </CardContent>
                      <CardFooter className="pt-3 pb-4">
                        <Button
                          className={`w-full ${
                            cupom.pontos <= 1700
                              ? "bg-red-600 hover:bg-red-700"
                              : "bg-gray-300 hover:bg-gray-300 cursor-not-allowed"
                          } text-white`}
                          disabled={cupom.pontos > 1700}
                        >
                          {cupom.pontos <= 1700 ? "Resgatar Agora" : `Faltam ${cupom.pontos - 1700} pontos`}
                        </Button>
                      </CardFooter>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="combos" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {combos.map((combo) => (
                <Card key={combo.id} className="border-red-100 shadow-md overflow-hidden">
                  <div className="flex h-full">
                    <div className="w-1/3 bg-gradient-to-b from-red-600 to-red-500 flex items-center justify-center p-4">
                      <img
                        src={combo.imagem || "/placeholder.svg"}
                        alt={combo.titulo}
                        className="h-20 w-20 object-contain"
                      />
                    </div>
                    <div className="w-2/3">
                      <CardHeader className="py-3">
                        <CardTitle className="text-lg text-red-600">{combo.titulo}</CardTitle>
                      </CardHeader>
                      <CardContent className="py-0">
                        <p className="text-sm text-gray-600 mb-2">{combo.descricao}</p>
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center text-sm text-gray-600">
                            <Trophy className="h-4 w-4 mr-1 text-amber-500" />
                            <span>{combo.pontos} pontos</span>
                          </div>
                          <div className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">
                            Valor: {combo.valorMercado}
                          </div>
                        </div>
                        <Progress value={(1700 / combo.pontos) * 100} className="h-2 bg-gray-200" />
                        <p className="text-xs text-gray-500 mt-1">
                          {Math.round((1700 / combo.pontos) * 100)}% concluído
                        </p>
                      </CardContent>
                      <CardFooter className="pt-3 pb-4">
                        <Button
                          className="w-full bg-gray-300 hover:bg-gray-300 cursor-not-allowed text-white"
                          disabled={true}
                        >
                          Faltam {combo.pontos - 1700} pontos
                        </Button>
                      </CardFooter>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sorteios" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sorteios.map((sorteio) => (
                <Card key={sorteio.id} className="border-red-100 shadow-md overflow-hidden">
                  <div className="flex h-full">
                    <div className="w-1/3 bg-gradient-to-b from-amber-500 to-amber-600 flex items-center justify-center p-4">
                      <img
                        src={sorteio.imagem || "/placeholder.svg"}
                        alt={sorteio.titulo}
                        className="h-20 w-20 object-contain"
                      />
                    </div>
                    <div className="w-2/3">
                      <CardHeader className="py-3">
                        <CardTitle className="text-lg text-red-600">{sorteio.titulo}</CardTitle>
                      </CardHeader>
                      <CardContent className="py-0">
                        <div className="flex items-center text-sm text-gray-600 mb-1">
                          <Users className="h-4 w-4 mr-1 text-amber-500" />
                          <span>{sorteio.participantes} participantes</span>
                        </div>
                        <div className="text-xs text-gray-500 mb-3">Encerra em: {sorteio.dataEncerramento}</div>
                        <div className="bg-red-50 rounded-lg p-2 text-xs text-red-800">
                          Participar deste sorteio custa apenas 500 pontos!
                        </div>
                      </CardContent>
                      <CardFooter className="pt-3 pb-4">
                        <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Participar do Sorteio</Button>
                      </CardFooter>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-8">
          <Card className="border-red-100 shadow-md bg-gradient-to-r from-red-50 to-amber-50">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center">
                <div className="mb-4 md:mb-0 md:mr-6">
                  <img
                    src="/placeholder.svg?height=120&width=120"
                    alt="Convide amigos"
                    className="h-24 w-24 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-red-600 mb-2">Convide amigos e ganhe mais pontos!</h3>
                  <p className="text-gray-600 mb-4">
                    Para cada amigo que se cadastrar e participar de um churras, você ganha 1.000 pontos!
                  </p>
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    Convidar Amigos
                    <Users className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Navigation />
    </div>
  )
}
