'use client'

import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { UserProfile } from "@/components/user-profile"
import { UserStats } from "@/components/user-stats"
import { UserRecipes } from "@/components/user-recipes"
import { UserPhotos } from "@/components/user-photos"
import { UserVideos } from "@/components/user-videos"
import { Container, Row, Col, Button, Tabs, Tab } from "react-bootstrap"
import { Edit, Ticket } from "lucide-react"

export default function ProfilePage() {
  // Mock data remains the same
  const user = { id: 1, name: "Maria Silva", username: "@mariasilva", avatar: "https://i.pravatar.cc/150?img=5", bio: "Apaixonada por culinária e produtos Swift. Compartilho minhas melhores receitas aqui!", stats: { recipes: 24, likes: 1876, ranking: 3 } };
  const userRecipes = [
    { id: 1, name: "Picanha Angus Uruguaia", image: "/images/picanha.webp", likes: 345, isLiked: true },
    { id: 2, name: "Strogonoff de Frango", image: "/images/strogonoff.webp", likes: 245, isLiked: true },
    { id: 3, name: "Feijoada Completa", image: "/images/feijoada.jpeg", likes: 189, isLiked: false },
    { id: 4, name: "Lasanha de Carne", image: "/images/lasanha.jpeg", likes: 156, isLiked: false },
  ];
  const userPhotos = [
    { id: 1, title: "Churrasco de Domingo", image: "/images/picanha.webp", date: "15/04/2025", likes: 87 },
    { id: 2, title: "Preparo do Strogonoff", image: "/images/strogonoff.webp", date: "10/04/2025", likes: 62 },
    { id: 3, title: "Feijoada em Família", image: "/images/feijoada.jpeg", date: "02/04/2025", likes: 45 },
    { id: 4, title: "Lasanha Caseira", image: "/images/lasanha.jpeg", date: "28/03/2025", likes: 38 },
  ];
  const userVideos = [
    { id: 1, title: "Como fazer o ponto perfeito da picanha", thumbnail: "/images/picanha.webp", duration: "3:45", date: "12/04/2025", views: 245 },
    { id: 2, title: "Dicas para strogonoff cremoso", thumbnail: "/images/strogonoff.webp", duration: "2:30", date: "05/04/2025", views: 187 },
    { id: 3, title: "Segredo da feijoada perfeita", thumbnail: "/images/feijoada.jpeg", duration: "4:12", date: "25/03/2025", views: 156 },
  ];

  return (
    <div className="d-flex flex-column min-vh-100 bg-light-subtle">
      <Header />
      <main className="flex-grow-1">
        <Container className="py-4 pb-5">
          <Row className="justify-content-between align-items-start mb-4">
            <Col xs="auto">
              <h2 className="fs-5 fw-medium text-secondary">Meu Perfil</h2>
            </Col>
            <Col xs="auto" className="d-flex gap-2">
              <Button variant="outline-secondary" size="sm">
                <Edit size={16} className="me-1" />
                Editar
              </Button>
              <Button variant="outline-primary" size="sm">
                <Ticket size={16} className="me-1" />
                Cupons
              </Button>
            </Col>
          </Row>

          <UserProfile user={user} />

          <UserStats stats={user.stats} />

          <Tabs defaultActiveKey="recipes" id="profile-tabs" className="mt-4" fill>
            <Tab eventKey="recipes" title="Minhas Receitas">
              <div className="py-4">
                <UserRecipes recipes={userRecipes} />
              </div>
            </Tab>
            <Tab eventKey="saved" title="Receitas Salvas">
              <div className="py-4">
                <UserRecipes recipes={userRecipes.slice(0, 2)} />
              </div>
            </Tab>
            <Tab eventKey="photos" title="Fotos">
              <div className="py-4">
                <UserPhotos photos={userPhotos} />
              </div>
            </Tab>
            <Tab eventKey="videos" title="Vídeos">
              <div className="py-4">
                <UserVideos videos={userVideos} />
              </div>
            </Tab>
          </Tabs>
        </Container>
      </main>
      <Navigation />
    </div>
  )
}