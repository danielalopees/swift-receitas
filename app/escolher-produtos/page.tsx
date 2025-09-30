import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, ShoppingCart, Users } from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProdutoCard } from "@/components/produto-card"
import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"

export default function EscolherProdutos() {
  // Dados simulados de produtos
  const carnes = [
    {
      id: 1,
      nome: "Picanha Premium Swift",
      preco: 89.9,
      imagem: "/placeholder.svg?height=200&width=200",
      descricao: "Peça de 1kg, corte especial",
    },
    {
      id: 2,
      nome: "Costela Swift",
      preco: 49.9,
      imagem: "/placeholder.svg?height=200&width=200",
      descricao: "Peça de 1.2kg, macia e suculenta",
    },
    {
      id: 3,
      nome: "Linguiça Toscana Swift",
      preco: 24.9,
      imagem: "/placeholder.svg?height=200&width=200",
      descricao: "Pacote com 500g, temperada",
    },
  ]

  const bebidas = [
    {
      id: 4,
      nome: "Cerveja Especial",
      preco: 29.9,
      imagem: "/placeholder.svg?height=200&width=200",
      descricao: "Pack com 6 unidades, 350ml",
    },
    {
      id: 5,
      nome: "Refrigerante",
      preco: 9.9,
      imagem: "/placeholder.svg?height=200&width=200",
      descricao: "2L, diversos sabores",
    },
  ]

  const acessorios = [
    {
      id: 6,
      nome: "Carvão Premium",
      preco: 19.9,
      imagem: "/placeholder.svg?height=200&width=200",
      descricao: "Saco com 5kg, alta duração",
    },
    {
      id: 7,
      nome: "Kit Espetos",
      preco: 39.9,
      imagem: "/placeholder.svg?height=200&width=200",
      descricao: "Conjunto com 6 espetos inox",
    },
  ]

  // Dados simulados de amigos
  const amigos = [
    { id: 1, nome: "João Silva", avatar: "https://i.pravatar.cc/150?img=1" },
    { id: 2, nome: "Maria Oliveira", avatar: "https://i.pravatar.cc/150?img=5" },
    { id: 3, nome: "Pedro Santos", avatar: "https://i.pravatar.cc/150?img=3" },
    { id: 4, nome: "Você", avatar: "https://i.pravatar.cc/150?img=8", isYou: true },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-4 pb-20">
        <div className="mb-6">
          <Link href="/criar-grupo">
            <Button variant="ghost" className="text-red-600 hover:text-red-700 hover:bg-red-50 -ml-3">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-red-600 flex items-center">
              <ShoppingCart className="mr-2 h-6 w-6 text-red-500" />
              Escolher Produtos
            </h1>
            <p className="text-gray-600">Selecione os itens para o seu churras</p>
          </div>

          <Card className="bg-white shadow-sm border-red-100 p-3 w-full md:w-auto">
            <div className="flex items-center">
              <Users className="h-5 w-5 text-red-600 mr-2" />
              <h3 className="font-medium text-red-600">Churras de Sábado</h3>
              <Badge className="ml-2 bg-red-100 text-red-800 hover:bg-red-200">4 pessoas</Badge>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Tabs defaultValue="carnes" className="w-full">
              <TabsList className="w-full bg-red-100 p-1 mb-6">
                <TabsTrigger value="carnes" className="data-[state=active]:bg-red-500 data-[state=active]:text-white">
                  Carnes
                </TabsTrigger>
                <TabsTrigger value="bebidas" className="data-[state=active]:bg-red-500 data-[state=active]:text-white">
                  Bebidas
                </TabsTrigger>
                <TabsTrigger
                  value="acessorios"
                  className="data-[state=active]:bg-red-500 data-[state=active]:text-white"
                >
                  Acessórios
                </TabsTrigger>
              </TabsList>

              <TabsContent value="carnes" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {carnes.map((produto) => (
                    <ProdutoCard key={produto.id} produto={produto} amigos={amigos} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="bebidas" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {bebidas.map((produto) => (
                    <ProdutoCard key={produto.id} produto={produto} amigos={amigos} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="acessorios" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {acessorios.map((produto) => (
                    <ProdutoCard key={produto.id} produto={produto} amigos={amigos} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <Card className="border-red-100 shadow-md sticky top-4">
              <CardHeader className="bg-gradient-to-r from-red-500 to-amber-500 text-white rounded-t-lg">
                <CardTitle className="text-xl flex items-center">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Resumo do Pedido
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                        <span className="text-sm">Picanha Premium Swift</span>
                      </div>
                      <span className="font-medium">R$ 89,90</span>
                    </div>
                    <div className="pl-4 text-xs text-gray-500">
                      <div className="flex items-center">
                        <Avatar className="h-4 w-4 mr-1">
                          <AvatarImage src="https://i.pravatar.cc/150?img=1" />
                          <AvatarFallback>J</AvatarFallback>
                        </Avatar>
                        <span>João Silva</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                        <span className="text-sm">Cerveja Especial</span>
                      </div>
                      <span className="font-medium">R$ 29,90</span>
                    </div>
                    <div className="pl-4 text-xs text-gray-500">
                      <div className="flex items-center">
                        <Avatar className="h-4 w-4 mr-1">
                          <AvatarImage src="https://i.pravatar.cc/150?img=5" />
                          <AvatarFallback>M</AvatarFallback>
                        </Avatar>
                        <span>Maria Oliveira</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                        <span className="text-sm">Carvão Premium</span>
                      </div>
                      <span className="font-medium">R$ 19,90</span>
                    </div>
                    <div className="pl-4 text-xs text-gray-500">
                      <div className="flex items-center">
                        <Avatar className="h-4 w-4 mr-1">
                          <AvatarImage src="https://i.pravatar.cc/150?img=8" />
                          <AvatarFallback>V</AvatarFallback>
                        </Avatar>
                        <span>Você</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-dashed border-gray-200 pt-4 mt-4">
                    <div className="flex justify-between items-center font-medium">
                      <span>Total</span>
                      <span className="text-red-600">R$ 139,70</span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-500 mt-1">
                      <span>Por pessoa (média)</span>
                      <span>R$ 34,93</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-red-50 rounded-b-lg">
                <Link href="/registrar-compras" className="w-full">
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    Continuar
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      <Navigation />
    </div>
  )
}
