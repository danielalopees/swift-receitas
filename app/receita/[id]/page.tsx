import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Share2, Clock, Users, Tag, ChevronLeft } from "lucide-react"
import Link from "next/link"

interface ReceitaPageProps {
  params: {
    id: string
  }
}

export default function ReceitaPage({ params }: ReceitaPageProps) {
  // Simulando busca de receita pelo ID
  const recipeId = Number.parseInt(params.id)

  // Dados simulados da receita
  const recipe = {
    id: recipeId,
    name:
      recipeId === 1
        ? "Picanha Angus Uruguaia"
        : recipeId === 2
          ? "Strogonoff de Frango"
          : recipeId === 3
            ? "Feijoada Completa"
            : "Lasanha de Carne",
    image:
      recipeId === 1
        ? "/images/picanha.webp"
        : recipeId === 2
          ? "/images/strogonoff.webp"
          : recipeId === 3
            ? "/images/feijoada.jpeg"
            : "/images/lasanha.jpeg",
    author: "Maria Silva",
    authorAvatar:
      recipeId === 1
        ? "https://i.pravatar.cc/150?img=5"
        : recipeId === 2
          ? "https://i.pravatar.cc/150?img=12"
          : recipeId === 3
            ? "https://i.pravatar.cc/150?img=9"
            : "https://i.pravatar.cc/150?img=3",
    likes: 345,
    prepTime: "45 min",
    servings: "4 pessoas",
    difficulty: "Médio",
    swiftProducts:
      recipeId === 1
        ? ["Picanha Angus Swift", "Sal Grosso Swift"]
        : recipeId === 2
          ? ["Creme de Leite Swift", "Frango Swift"]
          : recipeId === 3
            ? ["Feijão Preto Swift", "Linguiça Swift", "Bacon Swift"]
            : ["Carne Moída Swift", "Molho de Tomate Swift"],
    ingredients: [
      "500g de carne",
      "2 colheres de sopa de azeite",
      "1 cebola picada",
      "2 dentes de alho",
      "Sal e pimenta a gosto",
      "Ervas frescas (alecrim, tomilho)",
    ],
    steps: [
      "Tempere a carne com sal e pimenta.",
      "Aqueça o azeite em uma frigideira.",
      "Sele a carne de todos os lados até dourar.",
      "Adicione a cebola e o alho, refogue por 2 minutos.",
      "Adicione as ervas frescas.",
      "Cozinhe até o ponto desejado.",
    ],
    tips: "Para uma carne mais suculenta, deixe-a descansar por 5 minutos antes de cortar.",
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 pb-20">
        <div className="relative h-64">
          <img src={recipe.image || "/placeholder.svg"} alt={recipe.name} className="w-full h-full object-cover" />
          <div className="absolute top-0 left-0 right-0 p-4">
            <Link href="/">
              <Button variant="outline" size="icon" className="bg-white/80 backdrop-blur-sm rounded-full h-8 w-8">
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </Link>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <h1 className="text-white text-2xl font-bold">{recipe.name}</h1>
          </div>
        </div>

        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center mb-6">
            <Link href={`/perfil/${recipe.author.replace(/\s+/g, "-").toLowerCase()}`}>
              <div className="flex items-center">
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarImage src={recipe.authorAvatar || "/placeholder.svg"} />
                  <AvatarFallback>{recipe.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">{recipe.author}</span>
              </div>
            </Link>

            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Heart className="h-4 w-4" />
                {recipe.likes}
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Share2 className="h-4 w-4" />
                Compartilhar
              </Button>
            </div>
          </div>

          <div className="flex justify-between mb-6">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1 text-gray-500" />
              <span className="text-sm text-gray-600">{recipe.prepTime}</span>
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1 text-gray-500" />
              <span className="text-sm text-gray-600">{recipe.servings}</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-gray-600">Dificuldade: {recipe.difficulty}</span>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Produtos Swift utilizados:</h3>
            <div className="flex flex-wrap gap-2">
              {recipe.swiftProducts.map((product, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="flex items-center gap-1 bg-red-50 text-red-600 border-red-200"
                >
                  <Tag className="h-3 w-3" />
                  {product}
                </Badge>
              ))}
            </div>
          </div>

          <Tabs defaultValue="ingredientes" className="mb-6">
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="ingredientes">Ingredientes</TabsTrigger>
              <TabsTrigger value="preparo">Modo de Preparo</TabsTrigger>
              <TabsTrigger value="dicas">Dicas</TabsTrigger>
            </TabsList>

            <TabsContent value="ingredientes">
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-center gap-2 p-2 border-b border-gray-100">
                    <div className="h-2 w-2 rounded-full bg-red-500"></div>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="preparo">
              <ol className="space-y-4">
                {recipe.steps.map((step, index) => (
                  <li key={index} className="flex gap-3">
                    <div className="flex-shrink-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </div>
                    <p>{step}</p>
                  </li>
                ))}
              </ol>
            </TabsContent>

            <TabsContent value="dicas">
              <div className="p-4 bg-red-50 rounded-lg">
                <p>{recipe.tips}</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Navigation />
    </div>
  )
}
