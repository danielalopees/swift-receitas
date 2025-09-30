import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChefHat, ArrowLeft, Clock, Utensils, Users, Flame, ThumbsUp, MessageCircle, Share2 } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default function ReceitaChefIA() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-4 pb-16">
        <div className="mb-6">
          <Link href="/chef-ia">
            <Button variant="ghost" className="text-red-600 hover:text-red-700 hover:bg-red-50 -ml-3">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para o Chef IA
            </Button>
          </Link>
        </div>

        <div className="flex items-center mb-4">
          <div className="bg-gradient-to-r from-red-500 to-red-600 p-3 rounded-full mr-3">
            <ChefHat className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">Receita Gerada pelo Swift Chef IA</h1>
            <p className="text-sm text-gray-600">Fraldinha grelhada perfeita</p>
          </div>
        </div>

        <div className="relative h-48 md:h-64 rounded-lg overflow-hidden mb-6">
          <img
            src="/placeholder.svg?height=300&width=800"
            alt="Fraldinha grelhada"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-4 text-white">
              <h1 className="text-2xl font-bold">Fraldinha Grelhada Perfeita</h1>
              <p className="text-sm opacity-90">Suculenta e macia, pronta em 30 minutos</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Card className="border-red-100 shadow-md mb-6">
              <CardContent className="p-4">
                <h2 className="text-lg font-bold text-red-700 mb-4 flex items-center">
                  <Utensils className="h-5 w-5 mr-2" />
                  Ingredientes
                </h2>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="bg-red-100 rounded-full p-1 mr-2 mt-0.5 flex-shrink-0">
                      <div className="bg-red-500 rounded-full w-2 h-2"></div>
                    </div>
                    <span>1kg de fraldinha Swift</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-100 rounded-full p-1 mr-2 mt-0.5 flex-shrink-0">
                      <div className="bg-red-500 rounded-full w-2 h-2"></div>
                    </div>
                    <span>2 colheres de sopa de sal grosso</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-100 rounded-full p-1 mr-2 mt-0.5 flex-shrink-0">
                      <div className="bg-red-500 rounded-full w-2 h-2"></div>
                    </div>
                    <span>4 dentes de alho picados</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-100 rounded-full p-1 mr-2 mt-0.5 flex-shrink-0">
                      <div className="bg-red-500 rounded-full w-2 h-2"></div>
                    </div>
                    <span>1 colher de sopa de pimenta-do-reino moída na hora</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-100 rounded-full p-1 mr-2 mt-0.5 flex-shrink-0">
                      <div className="bg-red-500 rounded-full w-2 h-2"></div>
                    </div>
                    <span>2 ramos de alecrim fresco</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-100 rounded-full p-1 mr-2 mt-0.5 flex-shrink-0">
                      <div className="bg-red-500 rounded-full w-2 h-2"></div>
                    </div>
                    <span>3 colheres de sopa de azeite de oliva extra virgem</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-100 shadow-md mb-6">
              <CardContent className="p-4">
                <h2 className="text-lg font-bold text-red-700 mb-4 flex items-center">
                  <Flame className="h-5 w-5 mr-2" />
                  Modo de Preparo
                </h2>
                <ol className="space-y-4">
                  <li className="flex">
                    <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                      1
                    </div>
                    <p>
                      Retire a fraldinha da geladeira 30 minutos antes do preparo para que atinja a temperatura
                      ambiente.
                    </p>
                  </li>
                  <li className="flex">
                    <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                      2
                    </div>
                    <p>
                      Tempere a carne com sal grosso, alho picado e pimenta-do-reino. Esfregue bem os temperos em toda a
                      superfície da carne.
                    </p>
                  </li>
                  <li className="flex">
                    <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                      3
                    </div>
                    <p>
                      Aqueça a churrasqueira ou grelha em fogo médio-alto. Se estiver usando forno, pré-aqueça a 200°C.
                    </p>
                  </li>
                  <li className="flex">
                    <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                      4
                    </div>
                    <p>
                      Regue a carne com azeite e coloque os ramos de alecrim ao lado da carne durante o cozimento para
                      aromatizar.
                    </p>
                  </li>
                  <li className="flex">
                    <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                      5
                    </div>
                    <p>
                      Grelhe por aproximadamente 7-8 minutos de cada lado para um ponto ao médio. Ajuste o tempo
                      conforme sua preferência de ponto.
                    </p>
                  </li>
                  <li className="flex">
                    <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                      6
                    </div>
                    <p>
                      Retire da grelha e deixe a carne descansar por 5 minutos antes de fatiar, para que os sucos se
                      redistribuam.
                    </p>
                  </li>
                  <li className="flex">
                    <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                      7
                    </div>
                    <p>Fatie a fraldinha contra as fibras da carne para garantir maior maciez e sirva imediatamente.</p>
                  </li>
                </ol>
              </CardContent>
            </Card>

            <Card className="border-red-100 shadow-md">
              <CardContent className="p-4">
                <h2 className="text-lg font-bold text-red-700 mb-4 flex items-center">
                  <ChefHat className="h-5 w-5 mr-2" />
                  Dicas do Chef IA
                </h2>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <span className="font-medium">Ponto perfeito:</span> Para verificar o ponto, pressione levemente a
                    carne com uma pinça. Se estiver macia com alguma resistência, está no ponto médio ideal.
                  </p>
                  <p>
                    <span className="font-medium">Corte correto:</span> Sempre fatie a fraldinha na transversal, contra
                    as fibras, para garantir a maciez máxima.
                  </p>
                  <p>
                    <span className="font-medium">Acompanhamentos:</span> Combina perfeitamente com vinagrete, farofa,
                    arroz branco e batatas assadas.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between">
                  <Button variant="outline" className="text-red-600 border-red-200">
                    <ThumbsUp className="h-4 w-4 mr-2" />
                    Útil
                  </Button>
                  <Link href="/chef-ia">
                    <Button className="bg-red-600 hover:bg-red-700">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Perguntar mais
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="border-red-100 shadow-md mb-6 sticky top-4">
              <CardContent className="p-4">
                <h2 className="text-lg font-bold text-red-700 mb-4">Informações</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Tempo de Preparo</h3>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-red-500 mr-2" />
                      <span className="font-medium">30 minutos</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Porções</h3>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-red-500 mr-2" />
                      <span className="font-medium">4 pessoas</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Dificuldade</h3>
                    <div className="flex items-center">
                      <ChefHat className="h-4 w-4 text-red-500 mr-2" />
                      <span className="font-medium">Fácil</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-1">Método de Preparo</h3>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <Badge className="bg-red-100 text-red-700 hover:bg-red-200">
                        <Flame className="h-3 w-3 mr-1" /> Churrasco
                      </Badge>
                      <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-200">
                        <Utensils className="h-3 w-3 mr-1" /> Forno
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <h3 className="text-sm font-medium text-gray-500 mb-3">Compartilhar Receita</h3>
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    <Share2 className="h-4 w-4 mr-2" />
                    Compartilhar
                  </Button>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <h3 className="text-sm font-medium text-gray-500 mb-3">Produtos Recomendados</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gray-100 rounded-md mr-3 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium text-sm">Fraldinha Swift Premium</p>
                        <p className="text-red-600 text-sm font-medium">R$ 59,90/kg</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gray-100 rounded-md mr-3 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium text-sm">Sal Grosso Swift</p>
                        <p className="text-red-600 text-sm font-medium">R$ 12,90</p>
                      </div>
                    </div>
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
