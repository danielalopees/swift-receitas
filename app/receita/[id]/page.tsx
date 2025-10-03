import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { Button, Image, Badge, Tabs, Tab, Container, Row, Col } from "react-bootstrap"
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
    <div className="d-flex flex-column min-vh-100 bg-light-subtle">
      <Header />
      <main className="flex-grow-1 pb-5">
        <div className="position-relative" style={{ height: '256px' }}>
          <Image src={recipe.image || "/placeholder.svg"} alt={recipe.name} className="w-100 h-100" style={{ objectFit: 'cover' }} />
          <div className="position-absolute top-0 start-0 end-0 p-4">
            <Link href="/">
              <Button variant="light" className="rounded-circle p-0 d-flex justify-content-center align-items-center" style={{ width: '40px', height: '40px', background: 'rgba(255, 255, 255, 0.8)' }}>
                <ChevronLeft size={20} />
              </Button>
            </Link>
          </div>
          <div className="position-absolute bottom-0 start-0 end-0 p-4" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }}>
            <h1 className="text-white fs-2 fw-bold">{recipe.name}</h1>
          </div>
        </div>

        <Container className="py-4">
          <Row className="justify-content-between align-items-center mb-4">
            <Col xs="auto">
              <Link href={`/perfil/${recipe.author.replace(/\s+/g, "-").toLowerCase()}`} className="text-decoration-none text-dark">
                <div className="d-flex align-items-center">
                  <Image src={recipe.authorAvatar || "/placeholder.svg"} roundedCircle className="me-2" style={{ width: '32px', height: '32px', objectFit: 'cover' }} />
                  <span className="fw-medium small">{recipe.author}</span>
                </div>
              </Link>
            </Col>
            <Col xs="auto">
              <div className="d-flex gap-2">
                <Button variant="outline-secondary" size="sm" className="d-flex align-items-center gap-1">
                  <Heart size={16} />
                  {recipe.likes}
                </Button>
                <Button variant="outline-secondary" size="sm" className="d-flex align-items-center gap-1">
                  <Share2 size={16} />
                  Compartilhar
                </Button>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-between mb-4 text-center">
            <Col>
              <div className="d-flex align-items-center justify-content-center">
                <Clock size={16} className="me-1 text-muted" />
                <span className="small text-muted">{recipe.prepTime}</span>
              </div>
            </Col>
            <Col>
              <div className="d-flex align-items-center justify-content-center">
                <Users size={16} className="me-1 text-muted" />
                <span className="small text-muted">{recipe.servings}</span>
              </div>
            </Col>
            <Col>
              <div className="d-flex align-items-center justify-content-center">
                <span className="small text-muted">Dificuldade: {recipe.difficulty}</span>
              </div>
            </Col>
          </Row>

          <div className="mb-4">
            <h3 className="small text-muted mb-2">Produtos Swift utilizados:</h3>
            <div className="d-flex flex-wrap gap-2">
              {recipe.swiftProducts.map((product, index) => (
                <Badge
                  key={index}
                  bg="danger-subtle"
                  text="danger-emphasis"
                  className="d-flex align-items-center gap-1"
                >
                  <Tag size={12} />
                  {product}
                </Badge>
              ))}
            </div>
          </div>

          <Tabs defaultActiveKey="ingredientes" id="recipe-tabs" className="mb-6" fill>
            <Tab eventKey="ingredientes" title="Ingredientes">
              <div className="py-4">
                <ul className="list-unstyled">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="d-flex align-items-center gap-2 p-2 border-bottom">
                      <div style={{width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--bs-danger)'}}></div>
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Tab>
            <Tab eventKey="preparo" title="Modo de Preparo">
              <div className="py-4">
                <ol className="list-unstyled">
                  {recipe.steps.map((step, index) => (
                    <li key={index} className="d-flex gap-3 mb-3">
                      <div className="flex-shrink-0 bg-danger text-white rounded-circle d-flex align-items-center justify-content-center" style={{width: '24px', height: '24px', fontSize: '12px', fontWeight: 'bold'}}>
                        {index + 1}
                      </div>
                      <p className="mb-0">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </Tab>
            <Tab eventKey="dicas" title="Dicas">
              <div className="p-4 bg-danger-subtle rounded-lg mt-4">
                <p className="mb-0">{recipe.tips}</p>
              </div>
            </Tab>
          </Tabs>
        </div>
      </main>
      <Navigation />
    </div>
  )
}
