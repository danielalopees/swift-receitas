import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Plus, UserPlus, X, Users, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"

export default function CriarGrupo() {
  // Dados simulados de amigos adicionados
  const amigos = [
    { id: 1, nome: "João Silva", cpf: "123.456.789-00", avatar: "https://i.pravatar.cc/150?img=1" },
    { id: 2, nome: "Maria Oliveira", cpf: "987.654.321-00", avatar: "https://i.pravatar.cc/150?img=5" },
    { id: 3, nome: "Pedro Santos", cpf: "456.789.123-00", avatar: "https://i.pravatar.cc/150?img=3" },
  ]

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
          <Users className="mr-2 h-6 w-6 text-red-500" />
          Criar Grupo de Churras
        </h1>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <Card className="border-red-100 shadow-md">
              <CardHeader className="bg-gradient-to-r from-red-500 to-amber-500 text-white rounded-t-lg">
                <CardTitle className="text-xl">Informações do Grupo</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="nome-grupo" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome do Grupo
                    </label>
                    <Input
                      id="nome-grupo"
                      placeholder="Ex: Churras de Sábado"
                      className="border-red-200 focus:border-red-500 focus:ring-red-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="data" className="block text-sm font-medium text-gray-700 mb-1">
                      Data do Churras
                    </label>
                    <Input id="data" type="date" className="border-red-200 focus:border-red-500 focus:ring-red-500" />
                  </div>

                  <div>
                    <label htmlFor="local" className="block text-sm font-medium text-gray-700 mb-1">
                      Local
                    </label>
                    <Input
                      id="local"
                      placeholder="Ex: Casa do João"
                      className="border-red-200 focus:border-red-500 focus:ring-red-500"
                    />
                  </div>

                  <div className="pt-4">
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                      <Plus className="mr-2 h-4 w-4" />
                      Criar Grupo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="border-red-100 shadow-md">
              <CardHeader className="bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-t-lg">
                <CardTitle className="text-xl flex items-center justify-between">
                  <span>Adicionar Amigos</span>
                  <Badge className="bg-white text-amber-700">{amigos.length} amigos</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex space-x-2">
                    <Input
                      placeholder="CPF ou código Swift"
                      className="border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                    />
                    <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                      <UserPlus className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-sm font-medium text-gray-700 mb-3">Amigos adicionados</h3>
                    <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
                      {amigos.map((amigo) => (
                        <div
                          key={amigo.id}
                          className="flex items-center justify-between bg-white p-3 rounded-lg border border-amber-100 shadow-sm"
                        >
                          <div className="flex items-center">
                            <Avatar className="h-10 w-10 mr-3">
                              <AvatarImage src={amigo.avatar || "/placeholder.svg"} />
                              <AvatarFallback>{amigo.nome.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-gray-800">{amigo.nome}</p>
                              <p className="text-xs text-gray-500">{amigo.cpf}</p>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-500">
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link href="/escolher-produtos">
                      <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                        Continuar para Produtos
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Navigation />
    </div>
  )
}
