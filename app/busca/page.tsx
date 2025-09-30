import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function BuscaPage() {
  // Dados simulados de chefs
  const chefs = [
    { name: "Maria Silva", recipes: 24, avatar: "https://i.pravatar.cc/150?img=5" },
    { name: "João Pereira", recipes: 18, avatar: "https://i.pravatar.cc/150?img=12" },
    { name: "Ana Costa", recipes: 15, avatar: "https://i.pravatar.cc/150?img=9" },
    { name: "Pedro Santos", recipes: 12, avatar: "https://i.pravatar.cc/150?img=3" },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-4">
        <h2 className="text-lg font-medium text-gray-700 mb-4">Buscar Receitas</h2>

        <div className="relative mb-6">
          <Input
            type="text"
            placeholder="Buscar receitas, ingredientes ou chefs..."
            className="pl-10 pr-4 py-2 border-gray-300 rounded-lg"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>

        <Tabs defaultValue="categorias" className="mb-6">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="categorias">Categorias</TabsTrigger>
            <TabsTrigger value="ingredientes">Ingredientes</TabsTrigger>
            <TabsTrigger value="chefs">Chefs</TabsTrigger>
          </TabsList>

          <TabsContent value="categorias">
            <div className="grid grid-cols-2 gap-3">
              <CategoryButton name="Carnes" image="/images/picanha.webp" />
              <CategoryButton name="Aves" image="/images/strogonoff.webp" />
              <CategoryButton name="Massas" image="/images/lasanha.jpeg" />
              <CategoryButton name="Pratos Típicos" image="/images/feijoada.jpeg" />
              <CategoryButton name="Sobremesas" image="/images/bolo-chocolate.jpeg" />
              <CategoryButton name="Frutos do Mar" image="/images/risoto-camarao.jpeg" />
            </div>
          </TabsContent>

          <TabsContent value="ingredientes">
            <div className="grid grid-cols-2 gap-3">
              <IngredientButton name="Picanha" />
              <IngredientButton name="Frango" />
              <IngredientButton name="Carne Moída" />
              <IngredientButton name="Feijão" />
              <IngredientButton name="Camarão" />
              <IngredientButton name="Chocolate" />
            </div>
          </TabsContent>

          <TabsContent value="chefs">
            <div className="grid grid-cols-2 gap-3">
              {chefs.map((chef, index) => (
                <ChefButton key={index} name={chef.name} recipes={chef.recipes} avatar={chef.avatar} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div>
          <h3 className="text-md font-medium text-gray-700 mb-3">Buscas Recentes</h3>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" className="rounded-full">
              Picanha ao ponto
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Strogonoff de frango
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Receitas rápidas
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              Sobremesas
            </Button>
          </div>
        </div>
      </main>
      <Navigation />
    </div>
  )
}

function CategoryButton({ name, image }: { name: string; image: string }) {
  return (
    <Button variant="outline" className="h-24 relative overflow-hidden p-0 w-full">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <img src={image || "/placeholder.svg"} alt={name} className="absolute inset-0 w-full h-full object-cover" />
      <span className="relative z-20 text-white font-medium">{name}</span>
    </Button>
  )
}

function IngredientButton({ name }: { name: string }) {
  return (
    <Button variant="outline" className="justify-start h-12 w-full">
      <span>{name}</span>
    </Button>
  )
}

function ChefButton({ name, recipes, avatar }: { name: string; recipes: number; avatar: string }) {
  return (
    <Button variant="outline" className="justify-start h-16 w-full flex items-center">
      <Avatar className="h-10 w-10 mr-3">
        <AvatarImage src={avatar || "/placeholder.svg"} />
        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col items-start">
        <span className="font-medium">{name}</span>
        <span className="text-xs text-gray-500">{recipes} receitas</span>
      </div>
    </Button>
  )
}
