import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Gift, ShoppingBag, History, Ticket, CreditCard, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function DashboardFidelidade() {
  // Dados simulados do usuário
  const usuario = {
    nome: "Maria Silva",
    pontos: 2850,
    nivel: "Prata",
    valorDisponivel: 28.5, // R$0,01 por ponto
  }

  // Dados simulados do histórico de pontos
  const historicoPontos = [
    {
      id: 1,
      data: "15/04/2025",
      descricao: "Compra na Loja Swift Shopping Morumbi",
      pontos: 1200,
      tipo: "ganho",
    },
    {
      id: 2,
      data: "10/04/2025",
      descricao: "Publicação de receita: Picanha ao Alho",
      pontos: 500,
      tipo: "ganho",
    },
    {
      id: 3,
      data: "05/04/2025",
      descricao: "Organização de Churras entre Amigos",
      pontos: 1000,
      tipo: "ganho",
    },
    {
      id: 4,
      data: "01/04/2025",
      descricao: "Resgate de desconto na loja física",
      pontos: 1000,
      tipo: "uso",
    },
    {
      id: 5,
      data: "25/03/2025",
      descricao: "Bônus de cadastro",
      pontos: 500,
      tipo: "ganho",
    },
  ]

  // Dados simulados de cupons disponíveis
  const cuponsDisponiveis = [
    {
      id: 1,
      titulo: "10% de desconto em carnes",
      pontos: 1000,
      validade: "30/05/2025",
    },
    {
      id: 2,
      titulo: "15% de desconto em linguiças",
      pontos: 1500,
      validade: "30/05/2025",
    },
    {
      id: 3,
      titulo: "R$50 de desconto em compras acima de R$200",
      pontos: 2500,
      validade: "15/05/2025",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-4 pb-16">
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" className="text-amber-600 hover:text-amber-700 hover:bg-amber-50 -ml-3">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-amber-600 flex items-center">
              <Gift className="mr-2 h-6 w-6 text-amber-500" />
              Swift Fidelidade
            </h1>
            <p className="text-gray-600">Gerencie seus pontos e descontos</p>
          </div>

          <div className="flex items-center">
            <Avatar className="h-10 w-10 mr-3">
              <AvatarImage src="https://i.pravatar.cc/150?img=5" />
              <AvatarFallback>MS</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium text-gray-800">{usuario.nome}</p>
              <p className="text-xs text-gray-500">Nível {usuario.nivel}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="border-amber-100 shadow-md">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Pontos Acumulados</p>
                  <p className="text-2xl font-bold text-amber-600">{usuario.pontos}</p>
                </div>
                <div className="bg-amber-100 p-3 rounded-full">
                  <Gift className="h-6 w-6 text-amber-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-100 shadow-md">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Valor Disponível</p>
                  <p className="text-2xl font-bold text-green-600">R$ {usuario.valorDisponivel.toFixed(2)}</p>
                </div>
                <div className="bg-green-100 p-3 rounded-full">
                  <CreditCard className="h-6 w-6 text-green-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-100 shadow-md">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Próximo Nível</p>
                  <div className="flex items-center">
                    <p className="text-lg font-bold text-amber-600">Ouro</p>
                    <Badge className="ml-2 bg-amber-100 text-amber-800">+1150 pts</Badge>
                  </div>
                </div>
                <div className="bg-amber-100 p-3 rounded-full">
                  <Ticket className="h-6 w-6 text-amber-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="historico" className="w-full">
          <TabsList className="w-full bg-amber-100 p-1 mb-6 grid grid-cols-3">
            <TabsTrigger
              value="historico"
              className="data-[state=active]:bg-amber-500 data-[state=active]:text-white text-xs sm:text-sm"
            >
              <History className="h-4 w-4 mr-1 sm:mr-2" />
              <span className="hidden xs:inline">Histórico</span>
              <span className="xs:hidden">Hist.</span>
            </TabsTrigger>
            <TabsTrigger
              value="cupons"
              className="data-[state=active]:bg-amber-500 data-[state=active]:text-white text-xs sm:text-sm"
            >
              <Ticket className="h-4 w-4 mr-1 sm:mr-2" />
              <span>Cupons</span>
            </TabsTrigger>
            <TabsTrigger
              value="loja"
              className="data-[state=active]:bg-amber-500 data-[state=active]:text-white text-xs sm:text-sm"
            >
              <ShoppingBag className="h-4 w-4 mr-1 sm:mr-2" />
              <span>Loja</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="historico" className="mt-0">
            <Card className="border-amber-100 shadow-md">
              <CardHeader className="bg-amber-50 py-3">
                <CardTitle className="text-lg text-amber-700">Histórico de Pontos</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-gray-100">
                  {historicoPontos.map((item) => (
                    <div key={item.id} className="p-4 flex justify-between items-center">
                      <div className="flex-1 min-w-0 pr-2">
                        <p className="font-medium text-gray-800 truncate">{item.descricao}</p>
                        <p className="text-xs text-gray-500">{item.data}</p>
                      </div>
                      <div
                        className={`font-bold whitespace-nowrap ${
                          item.tipo === "ganho" ? "text-green-600" : "text-amber-600"
                        } flex items-center`}
                      >
                        {item.tipo === "ganho" ? "+" : "-"}
                        {item.pontos} pts
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cupons" className="mt-0">
            <Card className="border-amber-100 shadow-md">
              <CardHeader className="bg-amber-50 py-3">
                <CardTitle className="text-lg text-amber-700">Cupons Disponíveis</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-gray-100">
                  {cuponsDisponiveis.map((cupom) => (
                    <div key={cupom.id} className="p-4 flex justify-between items-center">
                      <div>
                        <p className="font-medium text-gray-800">{cupom.titulo}</p>
                        <p className="text-xs text-gray-500">Válido até {cupom.validade}</p>
                      </div>
                      <div className="flex items-center">
                        <span className="text-amber-600 font-medium mr-3">{cupom.pontos} pts</span>
                        <Link href="/fidelidade/resgatar-cupom">
                          <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
                            Resgatar
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="mt-6 bg-amber-50 rounded-lg p-4 border border-amber-100">
              <h3 className="font-medium text-amber-700 mb-2">Como usar seus cupons?</h3>
              <p className="text-sm text-gray-600 mb-3">
                Resgate seus cupons aqui e apresente o código na loja física Swift para obter seu desconto!
              </p>
              <Link href="/fidelidade/lojas">
                <Button variant="outline" className="text-amber-600 border-amber-200 hover:bg-amber-50 bg-transparent">
                  Encontrar lojas próximas
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </TabsContent>

          <TabsContent value="loja" className="mt-0">
            <Card className="border-amber-100 shadow-md">
              <CardHeader className="bg-amber-50 py-3">
                <CardTitle className="text-lg text-amber-700">Loja Swift</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="text-center py-6">
                  <ShoppingBag className="h-12 w-12 text-amber-400 mx-auto mb-3" />
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Compre na Loja Física</h3>
                  <p className="text-gray-600 mb-4 max-w-md mx-auto">
                    Visite uma loja Swift e apresente seu CPF para acumular pontos ou usar seus descontos.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link href="/fidelidade/lojas">
                      <Button className="bg-amber-600 hover:bg-amber-700 text-white">Encontrar Lojas</Button>
                    </Link>
                    <Link href="/fidelidade/registrar-compra">
                      <Button
                        variant="outline"
                        className="border-amber-200 text-amber-600 hover:bg-amber-50 bg-transparent"
                      >
                        Registrar Compra
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Navigation />
    </div>
  )
}
