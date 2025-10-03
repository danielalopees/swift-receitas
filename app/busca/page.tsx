'use client'
import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { Form, Button, Tabs, Tab, Image } from "react-bootstrap"
import { Search } from "lucide-react"

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
          <Form.Control
            type="text"
            placeholder="Buscar receitas, ingredientes ou chefs..."
            className="pl-10 pr-4 py-2 border-gray-300 rounded-lg"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>

        <Tabs defaultActiveKey="categorias" className="mb-6">
          <Tab eventKey="categorias" title="Categorias">
            <div className="grid grid-cols-2 gap-3 mt-4">
              <CategoryButton name="Carnes" image="/images/picanha.webp" />
              <CategoryButton name="Aves" image="/images/strogonoff.webp" />
              <CategoryButton name="Massas" image="/images/lasanha.jpeg" />
              <CategoryButton name="Pratos Típicos" image="/images/feijoada.jpeg" />
              <CategoryButton name="Sobremesas" image="/images/bolo-chocolate.jpeg" />
              <CategoryButton name="Frutos do Mar" image="/images/risoto-camarao.jpeg" />
            </div>
          </Tab>

          <Tab eventKey="ingredientes" title="Ingredientes">
            <div className="grid grid-cols-2 gap-3 mt-4">
              <IngredientButton name="Picanha" />
              <IngredientButton name="Frango" />
              <IngredientButton name="Carne Moída" />
              <IngredientButton name="Feijão" />
              <IngredientButton name="Camarão" />
              <IngredientButton name="Chocolate" />
            </div>
          </Tab>

          <Tab eventKey="chefs" title="Chefs">
            <div className="grid grid-cols-2 gap-3 mt-4">
              {chefs.map((chef, index) => (
                <ChefButton key={index} name={chef.name} recipes={chef.recipes} avatar={chef.avatar} />
              ))}
            </div>
          </Tab>
        </Tabs>

        <div>
          <h3 className="text-md font-medium text-gray-700 mb-3">Buscas Recentes</h3>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline-secondary" size="sm" className="rounded-full">
              Picanha ao ponto
            </Button>
            <Button variant="outline-secondary" size="sm" className="rounded-full">
              Strogonoff de frango
            </Button>
            <Button variant="outline-secondary" size="sm" className="rounded-full">
              Receitas rápidas
            </Button>
            <Button variant="outline-secondary" size="sm" className="rounded-full">
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
    <div className="card shadow-sm text-decoration-none text-dark text-center">
      <div className="d-flex justify-content-center pt-3">
        <img
          src={image || "/placeholder.jpg"}
          alt={name}
          className="rounded"
          style={{
            width: '150px',
            height: '150px',
            objectFit: 'cover',
          }}
        />
      </div>
      <div className="card-body">
        <h3 className="fs-6 fw-medium">{name}</h3>
      </div>
    </div>
  )
}

function IngredientButton({ name }: { name: string }) {
  return (
    <Button variant="outline-secondary" className="justify-start h-12 w-full">
      <span>{name}</span>
    </Button>
  )
}

function ChefButton({ name, recipes, avatar }: { name: string; recipes: number; avatar: string }) {
  return (
    <Button variant="outline-secondary" className="justify-start h-auto p-3 w-full flex items-center text-left">
      <Image
        src={avatar || "/placeholder-user.jpg"}
        className="rounded-circle shadow-sm"
        style={{
          width: '64px',
          height: '64px',
          objectFit: 'cover',
          marginRight: '1rem'
        }}
      />
      <div className="flex flex-col items-start">
        <span className="font-medium">{name}</span>
        <span className="text-xs text-gray-500">{recipes} receitas</span>
      </div>
    </Button>
  )
}