'use client'

import { useState } from "react"
import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { RankingPodium } from "@/components/ranking-podium"
import { RankingList } from "@/components/ranking-list"
import { Container, Row, Col, Button, Modal, Tabs, Tab, Badge } from "react-bootstrap"
import { Info, Trophy, Calendar } from "lucide-react"

export default function RankingPage() {
  const [showInfoModal, setShowInfoModal] = useState(false)

  // Mock data remains the same
  const topRecipes = [
    { id: 1, position: 1, name: "Picanha Angus Uruguaia", image: "/images/picanha.webp", author: "Maria Silva", authorAvatar: "https://i.pravatar.cc/150?img=5", likes: 1345, isLiked: false },
    { id: 2, position: 2, name: "Strogonoff de Frango", image: "/images/strogonoff.webp", author: "João Pereira", authorAvatar: "https://i.pravatar.cc/150?img=12", likes: 987, isLiked: false },
    { id: 3, position: 3, name: "Feijoada Completa", image: "/images/feijoada.jpeg", author: "Ana Costa", authorAvatar: "https://i.pravatar.cc/150?img=9", likes: 856, isLiked: false },
  ]
  const otherRecipes = [
    { id: 4, position: 4, name: "Lasanha de Carne", image: "/images/lasanha.jpeg", author: "Pedro Santos", authorAvatar: "https://i.pravatar.cc/150?img=3", likes: 743, isLiked: false },
    { id: 5, position: 5, name: "Bolo de Chocolate", image: "/images/bolo-chocolate.jpeg", author: "Carla Oliveira", authorAvatar: "https://i.pravatar.cc/150?img=1", likes: 689, isLiked: false },
    { id: 6, position: 6, name: "Risoto de Camarão", image: "/images/risoto-camarao.jpeg", author: "Roberto Alves", authorAvatar: "https://i.pravatar.cc/150?img=11", likes: 621, isLiked: false },
    { id: 7, position: 7, name: "Torta de Frango", image: "/images/torta.jpeg", author: "Fernanda Lima", authorAvatar: "https://i.pravatar.cc/150?img=8", likes: 598, isLiked: false },
  ]
  const lastMonthTopRecipes = [
    { id: 8, position: 1, name: "Gelatina de Frutas Vermelhas", image: "/images/gelatina.jpeg", author: "Carla Oliveira", authorAvatar: "https://i.pravatar.cc/150?img=1", likes: 1567, isLiked: false },
    { id: 2, position: 2, name: "Strogonoff de Frango", image: "/images/strogonoff.webp", author: "João Pereira", authorAvatar: "https://i.pravatar.cc/150?img=12", likes: 1245, isLiked: false },
    { id: 1, position: 3, name: "Picanha Angus Uruguaia", image: "/images/picanha.webp", author: "Maria Silva", authorAvatar: "https://i.pravatar.cc/150?img=5", likes: 1102, isLiked: false },
  ]

  return (
    <div className="d-flex flex-column min-vh-100 bg-light-subtle">
      <Header />
      <main className="flex-grow-1">
        <Container className="py-4 pb-5">
          <Row className="justify-content-between align-items-center mb-4">
            <Col xs="auto">
              <div className="d-flex align-items-center">
                <Trophy className="text-primary me-2" size={20} />
                <h2 className="fs-5 fw-semibold text-dark mb-0">Ranking Mensal</h2>
              </div>
            </Col>
            <Col xs="auto">
              <Button variant="outline-primary" size="sm" onClick={() => setShowInfoModal(true)}>
                <Info size={16} className="me-1" />
                Como Participar
              </Button>
            </Col>
          </Row>

          <Tabs defaultActiveKey="atual" id="ranking-tabs" className="mb-4" justify>
            <Tab eventKey="atual" title="Mês Atual">
              <div className="bg-white rounded p-4 shadow-sm mb-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="d-flex align-items-center">
                    <Calendar size={16} className="text-primary me-2" />
                    <span className="small fw-medium">Abril 2025</span>
                  </div>
                  <Badge bg="primary-subtle" text="primary-emphasis">Atualizado hoje</Badge>
                </div>
                <RankingPodium recipes={topRecipes} />
              </div>
              <div>
                <h3 className="fs-6 fw-medium text-secondary mb-3 d-flex align-items-center">
                  <span className="bg-primary rounded me-2" style={{ width: '8px', height: '20px' }}></span>
                  Outras Receitas Premiadas
                </h3>
                <RankingList recipes={otherRecipes} />
              </div>
            </Tab>
            <Tab eventKey="anterior" title="Mês Anterior">
              <div className="bg-white rounded p-4 shadow-sm mb-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="d-flex align-items-center">
                    <Calendar size={16} className="text-primary me-2" />
                    <span className="small fw-medium">Março 2025</span>
                  </div>
                  <Badge bg="secondary-subtle" text="secondary-emphasis">Finalizado</Badge>
                </div>
                <RankingPodium recipes={lastMonthTopRecipes} />
              </div>
            </Tab>
          </Tabs>

          <div className="mt-4 p-4 rounded border border-primary-subtle" style={{ background: 'linear-gradient(to right, var(--bs-primary-bg-subtle), var(--bs-danger-bg-subtle))' }}>
            <h3 className="fs-6 fw-bold text-primary mb-2 d-flex align-items-center">
              <Trophy size={20} className="me-2" />
              Prêmios do Mês
            </h3>
            <p className="small text-secondary mb-2">Participe do ranking e ganhe cupons exclusivos!</p>
            <ul className="small text-secondary ps-4">
              <li>1º lugar: Cupom de 50% de desconto</li>
              <li>2º lugar: Cupom de 30% de desconto</li>
              <li>3º lugar: Cupom de 20% de desconto</li>
              <li>4º ao 10º lugar: Cupom de 10% de desconto</li>
            </ul>
          </div>
        </Container>
      </main>
      <Navigation />

      <Modal show={showInfoModal} onHide={() => setShowInfoModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-primary fs-5">Como participar do Ranking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Participar do ranking mensal da Swift Receitas é muito simples! Siga os passos abaixo:</p>
            <ol className="list-group list-group-numbered">
              <li className="list-group-item border-0">Crie uma conta na Swift Receitas.</li>
              <li className="list-group-item border-0">Publique suas receitas utilizando produtos Swift.</li>
              <li className="list-group-item border-0">Compartilhe com a hashtag #SwiftReceitas.</li>
              <li className="list-group-item border-0">Quanto mais curtidas, mais pontos você ganha.</li>
              <li className="list-group-item border-0">O ciclo se encerra no último dia do mês.</li>
            </ol>
            <p className="fw-medium text-primary mt-3">Os vencedores são anunciados no primeiro dia do mês seguinte e os cupons são enviados automaticamente!</p>
        </Modal.Body>
      </Modal>
    </div>
  )
}