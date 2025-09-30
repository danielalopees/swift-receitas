import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Camera, Hash, Users, MessageSquare } from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"

export default function RegistrarEvento() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-4 pb-20">
        <div className="mb-6">
          <Link href="/registrar-compras">
            <Button variant="ghost" className="text-red-600 hover:text-red-700 hover:bg-red-50 -ml-3">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-red-600 flex items-center">
              <Camera className="mr-2 h-6 w-6 text-red-500" />
              Registrar Evento
            </h1>
            <p className="text-gray-600">Compartilhe fotos do seu churras e ganhe pontos!</p>
          </div>

          <Card className="bg-white shadow-sm border-red-100 p-3 w-full md:w-auto">
            <div className="flex items-center">
              <Users className="h-5 w-5 text-red-600 mr-2" />
              <h3 className="font-medium text-red-600">Churras de Sábado</h3>
              <Badge className="ml-2 bg-red-100 text-red-800 hover:bg-red-200">4 pessoas</Badge>
            </div>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-red-100 shadow-md">
            <CardHeader className="bg-gradient-to-r from-red-500 to-amber-500 text-white rounded-t-lg">
              <CardTitle className="text-xl">Compartilhe seu Churras</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="border-2 border-dashed border-red-200 rounded-lg p-8 text-center">
                  <Camera className="h-12 w-12 text-red-400 mx-auto mb-3" />
                  <p className="text-gray-600 mb-4">Envie fotos do seu churras</p>
                  <Button className="bg-red-600 hover:bg-red-700 text-white">Selecionar Fotos</Button>
                </div>

                <div>
                  <label htmlFor="legenda" className="block text-sm font-medium text-gray-700 mb-1">
                    Legenda
                  </label>
                  <Textarea
                    id="legenda"
                    placeholder="Conte como foi o churras..."
                    className="border-red-200 focus:border-red-500 focus:ring-red-500 min-h-[100px]"
                  />
                </div>

                <div>
                  <label htmlFor="hashtag" className="block text-sm font-medium text-gray-700 mb-1">
                    Hashtag
                  </label>
                  <div className="relative">
                    <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-500 h-4 w-4" />
                    <Input
                      id="hashtag"
                      defaultValue="ChurrasSwift"
                      className="pl-9 border-red-200 focus:border-red-500 focus:ring-red-500"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    Publicar e Ganhar Pontos
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-red-100 shadow-md">
              <CardHeader className="bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-t-lg">
                <CardTitle className="text-xl">Benefícios</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-red-100 rounded-full p-1 mr-3 mt-0.5">
                      <div className="bg-red-500 rounded-full w-3 h-3"></div>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Ganhe 500 pontos</p>
                      <p className="text-sm text-gray-600">Ao registrar seu churras com fotos</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-100 rounded-full p-1 mr-3 mt-0.5">
                      <div className="bg-red-500 rounded-full w-3 h-3"></div>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">+200 pontos por pessoa</p>
                      <p className="text-sm text-gray-600">Para cada amigo no seu grupo</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-100 rounded-full p-1 mr-3 mt-0.5">
                      <div className="bg-red-500 rounded-full w-3 h-3"></div>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Bônus de 300 pontos</p>
                      <p className="text-sm text-gray-600">Se todas as compras forem confirmadas</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-100 shadow-md overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-t-lg py-3">
                <CardTitle className="text-lg flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Comentários do Grupo
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-red-100">
                  <div className="p-4 flex">
                    <Avatar className="h-8 w-8 mr-3">
                      <AvatarImage src="https://i.pravatar.cc/150?img=1" />
                      <AvatarFallback>J</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium text-gray-800">João Silva</p>
                      <p className="text-sm text-gray-600">Vou levar mais cerveja! 🍺</p>
                    </div>
                  </div>
                  <div className="p-4 flex">
                    <Avatar className="h-8 w-8 mr-3">
                      <AvatarImage src="https://i.pravatar.cc/150?img=5" />
                      <AvatarFallback>M</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium text-gray-800">Maria Oliveira</p>
                      <p className="text-sm text-gray-600">Alguém vai trazer farofa?</p>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-red-50">
                  <div className="flex">
                    <Input
                      placeholder="Escreva um comentário..."
                      className="border-red-200 focus:border-red-500 focus:ring-red-500"
                    />
                    <Button className="ml-2 bg-red-500 hover:bg-red-600 text-white">Enviar</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <Link href="/recompensas">
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Próximo: Ver Recompensas
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </main>
      <Navigation />
    </div>
  )
}
