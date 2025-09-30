import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { UserProfile } from "@/components/user-profile"
import { UserStats } from "@/components/user-stats"
import { UserRecipes } from "@/components/user-recipes"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Edit, Ticket } from "lucide-react"
import { UserPhotos } from "@/components/user-photos"
import { UserVideos } from "@/components/user-videos"

export default function ProfilePage() {
  // Dados simulados do usuário
  const user = {
    id: 1,
    name: "Maria Silva",
    username: "@mariasilva",
    avatar: "https://i.pravatar.cc/150?img=5",
    bio: "Apaixonada por culinária e produtos Swift. Compartilho minhas melhores receitas aqui!",
    stats: {
      recipes: 24,
      likes: 1876,
      ranking: 3,
    },
  }

  // Receitas do usuário
  const userRecipes = [
    {
      id: 1,
      name: "Picanha Angus Uruguaia",
      image: "/images/picanha.webp",
      likes: 345,
      isLiked: true,
    },
    {
      id: 2,
      name: "Strogonoff de Frango",
      image: "/images/strogonoff.webp",
      likes: 245,
      isLiked: true,
    },
    {
      id: 3,
      name: "Feijoada Completa",
      image: "/images/feijoada.jpeg",
      likes: 189,
      isLiked: false,
    },
    {
      id: 4,
      name: "Lasanha de Carne",
      image: "/images/lasanha.jpeg",
      likes: 156,
      isLiked: false,
    },
  ]

  // Fotos do usuário
  const userPhotos = [
    {
      id: 1,
      title: "Churrasco de Domingo",
      image: "/images/picanha.webp",
      date: "15/04/2025",
      likes: 87,
    },
    {
      id: 2,
      title: "Preparo do Strogonoff",
      image: "/images/strogonoff.webp",
      date: "10/04/2025",
      likes: 62,
    },
    {
      id: 3,
      title: "Feijoada em Família",
      image: "/images/feijoada.jpeg",
      date: "02/04/2025",
      likes: 45,
    },
    {
      id: 4,
      title: "Lasanha Caseira",
      image: "/images/lasanha.jpeg",
      date: "28/03/2025",
      likes: 38,
    },
  ]

  // Vídeos do usuário
  const userVideos = [
    {
      id: 1,
      title: "Como fazer o ponto perfeito da picanha",
      thumbnail: "/images/picanha.webp",
      duration: "3:45",
      date: "12/04/2025",
      views: 245,
    },
    {
      id: 2,
      title: "Dicas para strogonoff cremoso",
      thumbnail: "/images/strogonoff.webp",
      duration: "2:30",
      date: "05/04/2025",
      views: 187,
    },
    {
      id: 3,
      title: "Segredo da feijoada perfeita",
      thumbnail: "/images/feijoada.jpeg",
      duration: "4:12",
      date: "25/03/2025",
      views: 156,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-4 pb-20">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-lg font-medium text-gray-700">Meu Perfil</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="text-gray-600">
              <Edit className="h-4 w-4 mr-1" />
              Editar
            </Button>
            <Button variant="outline" size="sm" className="text-red-600 border-red-200 bg-red-50">
              <Ticket className="h-4 w-4 mr-1" />
              Cupons
            </Button>
          </div>
        </div>

        <UserProfile user={user} />

        <UserStats stats={user.stats} />

        <Tabs defaultValue="recipes" className="mt-6">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="recipes">Minhas Receitas</TabsTrigger>
            <TabsTrigger value="saved">Receitas Salvas</TabsTrigger>
            <TabsTrigger value="photos">Fotos</TabsTrigger>
            <TabsTrigger value="videos">Vídeos</TabsTrigger>
          </TabsList>
          <TabsContent value="recipes">
            <UserRecipes recipes={userRecipes} />
          </TabsContent>
          <TabsContent value="saved">
            <UserRecipes recipes={userRecipes.slice(0, 2)} />
          </TabsContent>
          <TabsContent value="photos">
            <UserPhotos photos={userPhotos} />
          </TabsContent>
          <TabsContent value="videos">
            <UserVideos videos={userVideos} />
          </TabsContent>
        </Tabs>
      </main>
      <Navigation />
    </div>
  )
}
