import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { RankingPodium } from "@/components/ranking-podium"
import { RankingList } from "@/components/ranking-list"
import { Button } from "@/components/ui/button"
import { Info, Trophy, Calendar } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RankingPage() {
  // Dados simulados do ranking
  const topRecipes = [
    {
      id: 1,
      position: 1,
      name: "Picanha Angus Uruguaia",
      image: "/images/picanha.webp",
      author: "Maria Silva",
      authorAvatar: "https://i.pravatar.cc/150?img=5",
      likes: 1345,
    },
    {
      id: 2,
      position: 2,
      name: "Strogonoff de Frango",
      image: "/images/strogonoff.webp",
      author: "João Pereira",
      authorAvatar: "https://i.pravatar.cc/150?img=12",
      likes: 987,
    },
    {
      id: 3,
      position: 3,
      name: "Feijoada Completa",
      image: "/images/feijoada.jpeg",
      author: "Ana Costa",
      authorAvatar: "https://i.pravatar.cc/150?img=9",
      likes: 856,
    },
  ]

  const otherRecipes = [
    {
      id: 4,
      position: 4,
      name: "Lasanha de Carne",
      image: "/images/lasanha.jpeg",
      author: "Pedro Santos",
      authorAvatar: "https://i.pravatar.cc/150?img=3",
      likes: 743,
    },
    {
      id: 5,
      position: 5,
      name: "Bolo de Chocolate",
      image: "/images/bolo-chocolate.jpeg",
      author: "Carla Oliveira",
      authorAvatar: "https://i.pravatar.cc/150?img=1",
      likes: 689,
    },
    {
      id: 6,
      position: 6,
      name: "Risoto de Camarão",
      image: "/images/risoto-camarao.jpeg",
      author: "Roberto Alves",
      authorAvatar: "https://i.pravatar.cc/150?img=11",
      likes: 621,
    },
    {
      id: 7,
      position: 7,
      name: "Torta de Frango",
      image: "/images/torta.jpeg",
      author: "Fernanda Lima",
      authorAvatar: "https://i.pravatar.cc/150?img=8",
      likes: 598,
    },
  ]

  // Dados simulados do ranking do mês anterior
  const lastMonthTopRecipes = [
    {
      id: 8,
      position: 1,
      name: "Gelatina de Frutas Vermelhas",
      image: "/images/gelatina.jpeg",
      author: "Carla Oliveira",
      authorAvatar: "https://i.pravatar.cc/150?img=1",
      likes: 1567,
    },
    {
      id: 2,
      position: 2,
      name: "Strogonoff de Frango",
      image: "/images/strogonoff.webp",
      author: "João Pereira",
      authorAvatar: "https://i.pravatar.cc/150?img=12",
      likes: 1245,
    },
    {
      id: 1,
      position: 3,
      name: "Picanha Angus Uruguaia",
      image: "/images/picanha.webp",
      author: "Maria Silva",
      authorAvatar: "https://i.pravatar.cc/150?img=5",
      likes: 1102,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-4 pb-20">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <Trophy className="h-5 w-5 text-red-500 mr-2" />
            <h2 className="text-lg font-semibold text-gray-800">Ranking Mensal</h2>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="text-red-600 border-red-200 bg-red-50">
                <Info className="h-4 w-4 mr-1" />
                Como Participar
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-red-600">Como participar do Ranking Mensal</DialogTitle>
                <DialogDescription>
                  <div className="mt-4 space-y-4">
                    <p>Participar do ranking mensal da Swift Receitas é muito simples! Siga os passos abaixo:</p>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>Crie uma conta na Swift Receitas (se ainda não tiver)</li>
                      <li>Publique suas receitas utilizando produtos Swift</li>
                      <li>Compartilhe suas criações nas redes sociais com a hashtag #SwiftReceitas</li>
                      <li>Quanto mais curtidas e compartilhamentos sua receita receber, mais pontos você ganha</li>
                      <li>Os rankings são atualizados diariamente e o ciclo se encerra no último dia do mês</li>
                    </ol>
                    <p className="font-medium text-red-600">
                      Os vencedores são anunciados no primeiro dia do mês seguinte e os cupons são enviados
                      automaticamente!
                    </p>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>

        <Tabs defaultValue="atual" className="mb-6">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="atual" className="flex items-center">
              <span>Mês Atual</span>
            </TabsTrigger>
            <TabsTrigger value="anterior" className="flex items-center">
              <span>Mês Anterior</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="atual">
            <div className="bg-white rounded-lg p-4 shadow-sm mb-6">
              <div className="flex justify-between items-center mb-1 sm:mb-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 text-red-500 mr-2" />
                  <span className="text-sm font-medium">Abril 2025</span>
                </div>
                <div className="bg-red-100 text-red-600 text-xs font-medium px-2 py-1 rounded-full">
                  Atualizado hoje
                </div>
              </div>
              <RankingPodium recipes={topRecipes} />
            </div>

            <div className="mt-6">
              <h3 className="text-md font-medium text-gray-700 mb-3 flex items-center">
                <span className="bg-red-500 w-2 h-5 rounded mr-2"></span>
                Outras Receitas Premiadas
              </h3>
              <RankingList recipes={otherRecipes} />
            </div>
          </TabsContent>

          <TabsContent value="anterior">
            <div className="bg-white rounded-lg p-4 shadow-sm mb-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 text-red-500 mr-2" />
                  <span className="text-sm font-medium">Março 2025</span>
                </div>
                <div className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">Finalizado</div>
              </div>
              <RankingPodium recipes={lastMonthTopRecipes} />
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-6 p-4 bg-gradient-to-r from-red-50 to-red-100 rounded-lg border border-red-200">
          <h3 className="text-md font-bold text-red-600 mb-2 flex items-center">
            <Trophy className="h-5 w-5 mr-2" />
            Prêmios do Mês
          </h3>
          <p className="text-sm text-gray-700 mb-2">
            Participe do ranking mensal e ganhe cupons exclusivos para comprar produtos Swift com descontos incríveis!
          </p>
          <ul className="text-sm text-gray-700 list-disc list-inside">
            <li>1º lugar: Cupom de 50% de desconto</li>
            <li>2º lugar: Cupom de 30% de desconto</li>
            <li>3º lugar: Cupom de 20% de desconto</li>
            <li>4º ao 10º lugar: Cupom de 10% de desconto</li>
          </ul>
        </div>
      </main>
      <Navigation />
    </div>
  )
}
