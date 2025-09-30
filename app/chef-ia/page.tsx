import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { ChefHat, Clock, Flame, Utensils, ArrowRight, ThumbsUp, Send } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChefMessage } from "@/components/chef-message"
import { UserMessage } from "@/components/user-message"
import { PopularQuestions } from "@/components/popular-questions"

export default function ChefIA() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-4 pb-16 flex flex-col">
        {/* Cabeçalho do Chef IA */}
        <div className="flex items-center mb-4">
          <div className="bg-gradient-to-r from-red-500 to-red-600 p-3 rounded-full mr-3">
            <ChefHat className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">Swift Chef IA</h1>
            <p className="text-sm text-gray-600">Seu assistente culinário para carnes</p>
          </div>
        </div>

        {/* Área de chat */}
        <Card className="flex-1 border-red-100 shadow-md mb-4 flex flex-col overflow-hidden">
          <CardContent className="p-0 flex-1 flex flex-col">
            <ScrollArea className="flex-1 p-4">
              {/* Mensagem de boas-vindas do Chef IA */}
              <div className="space-y-4">
                <ChefMessage
                  message="Olá! Eu sou o Swift Chef IA, seu assistente culinário especializado em carnes. Como posso ajudar você hoje?"
                  isIntro={true}
                />

                {/* Exemplo de conversa */}
                <UserMessage message="O que fazer com uma fraldinha?" />

                <ChefMessage
                  message={`A fraldinha é um corte versátil e saboroso! Aqui estão algumas opções de preparo:`}
                />

                <Card className="border-red-100 bg-white shadow-sm ml-10 mb-4">
                  <CardContent className="p-4">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium text-red-700 flex items-center mb-2">
                          <Flame className="h-4 w-4 mr-2" />
                          Opções de Preparo
                        </h3>
                        <div className="grid grid-cols-2 gap-2">
                          <Badge className="bg-red-100 text-red-700 hover:bg-red-200 flex items-center justify-center py-1">
                            <Flame className="h-3 w-3 mr-1" /> Churrasco
                          </Badge>
                          <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-200 flex items-center justify-center py-1">
                            <Utensils className="h-3 w-3 mr-1" /> Forno
                          </Badge>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-medium text-red-700 flex items-center mb-2">
                          <Utensils className="h-4 w-4 mr-2" />
                          Temperos Sugeridos
                        </h3>
                        <p className="text-sm text-gray-700">
                          Sal grosso, alho, pimenta-do-reino, alecrim e um fio de azeite de oliva.
                        </p>
                      </div>

                      <div>
                        <h3 className="font-medium text-red-700 flex items-center mb-2">
                          <Clock className="h-4 w-4 mr-2" />
                          Tempo de Preparo
                        </h3>
                        <div className="flex items-center">
                          <Badge className="bg-green-100 text-green-700">Churrasco: ~25 min</Badge>
                          <Badge className="bg-green-100 text-green-700 ml-2">Forno: ~40 min</Badge>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-gray-100">
                        <h3 className="font-medium text-gray-800 mb-2">Dica rápida:</h3>
                        <p className="text-sm text-gray-700">
                          Para um churrasco perfeito, grelhe a fraldinha em fogo médio-alto por cerca de 7-8 minutos de
                          cada lado para um ponto ao médio. Deixe descansar por 5 minutos antes de fatiar contra as
                          fibras da carne.
                        </p>
                      </div>

                      <div className="flex justify-between pt-2">
                        <Button variant="outline" className="text-red-600 border-red-200">
                          <ThumbsUp className="h-4 w-4 mr-2" />
                          Útil
                        </Button>
                        <Button className="bg-red-600 hover:bg-red-700">
                          Ver receita completa
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <UserMessage message="Como preparo costela na airfryer?" />

                <div className="flex items-center gap-2 ml-10">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-150"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-300"></div>
                  <span className="text-sm text-gray-400">Swift Chef está digitando...</span>
                </div>
              </div>
            </ScrollArea>

            {/* Campo de entrada de mensagem */}
            <div className="p-3 border-t border-gray-200 bg-white">
              <div className="flex gap-2">
                <Input
                  placeholder="Pergunte algo sobre carnes..."
                  className="border-red-200 focus:border-red-500 focus:ring-red-500"
                />
                <Button className="bg-red-600 hover:bg-red-700 px-3">
                  <Send className="h-5 w-5" />
                </Button>
              </div>

              {/* Sugestões de perguntas populares */}
              <PopularQuestions />
            </div>
          </CardContent>
        </Card>
      </main>
      <Navigation />
    </div>
  )
}
