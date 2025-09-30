import { Header } from "@/components/header"
import { RecipeCard } from "@/components/recipe-card"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Flame, Users, ArrowRight, Gift, CreditCard } from "lucide-react"
import Link from "next/link"

export default function Home() {
  // Dados simulados de receitas
  const recipes = [
    {
      id: 1,
      name: "Picanha Angus Uruguaia",
      image: "/images/picanha.webp",
      author: "Maria Silva",
      authorAvatar: "https://i.pravatar.cc/150?img=5",
      swiftProducts: ["Picanha Angus Swift", "Sal Grosso Swift"],
      likes: 345,
      isLiked: true,
    },
    {
      id: 2,
      name: "Strogonoff de Frango",
      image: "/images/strogonoff.webp",
      author: "João Pereira",
      authorAvatar: "https://i.pravatar.cc/150?img=12",
      swiftProducts: ["Creme de Leite Swift", "Frango Swift"],
      likes: 245,
      isLiked: false,
    },
    {
      id: 3,
      name: "Feijoada Completa",
      image: "/images/feijoada.jpeg",
      author: "Ana Costa",
      authorAvatar: "https://i.pravatar.cc/150?img=9",
      swiftProducts: ["Feijão Preto Swift", "Linguiça Swift", "Bacon Swift"],
      likes: 189,
      isLiked: true,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-4 pb-16">
        <h2 className="text-lg font-medium text-gray-700 mb-4">Receitas em Destaque</h2>
        <div className="space-y-4 mb-6">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>

        {/* Seção Churras Swift entre Amigos */}
        <Card className="w-full mb-6 overflow-hidden border-red-100 shadow-md">
          <div className="bg-gradient-to-r from-red-500 to-amber-500 p-1"></div>
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                <div className="bg-amber-50 p-3 rounded-full">
                  <Flame className="h-12 w-12 text-red-500" />
                </div>
              </div>
              <div className="flex-1 min-w-0 text-center md:text-left">
                <h2 className="text-xl font-bold text-red-600 flex items-center flex-wrap justify-center md:justify-start">
                  Churras<span className="text-amber-700 ml-2 text-lg">Swift</span>
                  <span className="text-gray-700 ml-2 text-lg">entre Amigos</span>
                </h2>
                <p className="text-gray-600 mb-4">
                  Organize churrascos incríveis, divida as compras e ganhe recompensas com a Swift!
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <Link href="/criar-grupo">
                    <Button className="bg-red-600 hover:bg-red-700 text-white min-h-[44px] touch-manipulation">
                      <Users className="mr-2 h-4 w-4" />
                      Criar Grupo
                    </Button>
                  </Link>
                  <Link href="/entrar-grupo">
                    <Button
                      variant="outline"
                      className="border-amber-600 text-amber-700 hover:bg-amber-50 min-h-[44px] touch-manipulation bg-transparent"
                    >
                      <ArrowRight className="mr-2 h-4 w-4" />
                      Entrar em um Grupo
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Seção Swift Fidelidade */}
        <Card className="w-full mb-6 overflow-hidden border-amber-100 shadow-md">
          <div className="bg-gradient-to-r from-red-500 to-amber-500 p-1"></div>
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                <div className="bg-amber-50 p-3 rounded-full">
                  <Gift className="h-12 w-12 text-amber-600" />
                </div>
              </div>
              <div className="flex-1 min-w-0 text-center md:text-left">
                <h2 className="text-xl font-bold text-red-600 flex items-center flex-wrap justify-center md:justify-start">
                  Swift<span className="text-amber-700 ml-2">Fidelidade</span>
                </h2>
                <p className="text-gray-600 mb-4">
                  Ganhe pontos publicando receitas ou participando de churrascos e troque por descontos nas lojas Swift!
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <Link href="/fidelidade/cadastro">
                    <Button className="bg-amber-600 hover:bg-amber-700 text-white min-h-[44px] touch-manipulation">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Cadastrar
                    </Button>
                  </Link>
                  <Link href="/fidelidade/login">
                    <Button
                      variant="outline"
                      className="border-amber-600 text-amber-700 hover:bg-amber-50 min-h-[44px] touch-manipulation bg-transparent"
                    >
                      <ArrowRight className="mr-2 h-4 w-4" />
                      Acessar Conta
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Navigation />
    </div>
  )
}
