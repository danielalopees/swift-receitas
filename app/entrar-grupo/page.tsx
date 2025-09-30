import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Search, Users } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"

export default function EntrarGrupo() {
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
          Entrar em um Grupo
        </h1>

        <div className="max-w-md mx-auto">
          <Card className="border-red-100 shadow-md">
            <CardHeader className="bg-gradient-to-r from-red-500 to-amber-500 text-white rounded-t-lg">
              <CardTitle className="text-xl">Encontre seu Grupo</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="codigo-grupo" className="block text-sm font-medium text-gray-700 mb-1">
                    Código do Grupo
                  </label>
                  <div className="relative">
                    <Input
                      id="codigo-grupo"
                      placeholder="Digite o código do grupo"
                      className="border-red-200 focus:border-red-500 focus:ring-red-500 pl-10"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    O código do grupo é fornecido pelo organizador do churras
                  </p>
                </div>

                <div className="pt-4">
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Buscar Grupo</Button>
                </div>

                <div className="relative flex items-center py-4">
                  <div className="flex-grow border-t border-gray-300"></div>
                  <span className="flex-shrink mx-4 text-gray-500 text-sm">ou</span>
                  <div className="flex-grow border-t border-gray-300"></div>
                </div>

                <div>
                  <label htmlFor="cpf" className="block text-sm font-medium text-gray-700 mb-1">
                    Seu CPF
                  </label>
                  <Input
                    id="cpf"
                    placeholder="Digite seu CPF"
                    className="border-red-200 focus:border-red-500 focus:ring-red-500"
                  />
                  <p className="text-xs text-gray-500 mt-1">Encontre grupos em que você foi adicionado pelo seu CPF</p>
                </div>

                <div className="pt-4">
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">Encontrar meus Grupos</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 bg-white rounded-lg border border-red-100 shadow-md p-4">
            <h3 className="font-medium text-red-600 mb-3 flex items-center">
              <Users className="h-5 w-5 text-amber-500 mr-2" />
              Grupos Recentes
            </h3>
            <div className="text-center py-6 text-gray-500">
              <p>Você ainda não participou de nenhum grupo.</p>
              <p className="text-sm mt-2">Entre em um grupo para começar!</p>
            </div>
          </div>
        </div>
      </main>
      <Navigation />
    </div>
  )
}
