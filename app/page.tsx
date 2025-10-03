'use client'

import { Header } from "@/components/header"
import { RecipeCard } from "@/components/recipe-card"
import { Navigation } from "@/components/navigation"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { Flame, Users, ArrowRight, Gift, CreditCard } from "lucide-react"
import Link from "next/link"

export default function Home() {
  // Mock data for recipes
  const recipes = [
    { id: 1, name: "Picanha Angus Uruguaia", image: "/images/picanha.webp", author: "Maria Silva", authorAvatar: "https://i.pravatar.cc/150?img=5", swiftProducts: ["Picanha Angus Swift", "Sal Grosso Swift"], likes: 345, isLiked: true },
    { id: 2, name: "Strogonoff de Frango", image: "/images/strogonoff.webp", author: "João Pereira", authorAvatar: "https://i.pravatar.cc/150?img=12", swiftProducts: ["Creme de Leite Swift", "Frango Swift"], likes: 245, isLiked: false },
    { id: 3, name: "Feijoada Completa", image: "/images/feijoada.jpeg", author: "Ana Costa", authorAvatar: "https://i.pravatar.cc/150?img=9", swiftProducts: ["Feijão Preto Swift", "Linguiça Swift", "Bacon Swift"], likes: 189, isLiked: true },
    { id: 4, name: "Lasanha à Bolonhesa", image: "/images/lasanha.jpeg", author: "Carlos Oliveira", authorAvatar: "https://i.pravatar.cc/150?img=11", swiftProducts: ["Carne Moída Swift", "Molho de Tomate Swift"], likes: 432, isLiked: false },
    { id: 5, name: "Bolo de Chocolate", image: "/images/bolo-chocolate.jpeg", author: "Juliana Santos", authorAvatar: "https://i.pravatar.cc/150?img=1", swiftProducts: ["Ovos Swift", "Farinha de Trigo"], likes: 512, isLiked: true },
    { id: 6, name: "Risoto de Camarão", image: "/images/risoto-camarao.jpeg", author: "Pedro Martins", authorAvatar: "https://i.pravatar.cc/150?img=7", swiftProducts: ["Camarão Swift", "Arroz Arbóreo"], likes: 289, isLiked: false },
  ]

  return (
    <div className="d-flex flex-column min-vh-100 bg-light-subtle">
      <Header />
      <main className="flex-grow-1">
        <Container className="py-4 pb-5">
          <h2 className="fs-5 fw-medium text-secondary mb-3">Receitas em Destaque</h2>
          <Row className="g-3 mb-4">
            {recipes.map((recipe) => (
              <Col key={recipe.id} md={6} lg={4}>
                <RecipeCard recipe={recipe} />
              </Col>
            ))}
          </Row>

          {/* CTA Cards */}
          <Row className="g-3">
            <Col md={6}>
              <Card className="h-100 shadow-sm border-primary-subtle overflow-hidden">
                <div className="bg-gradient-primary" style={{height: '4px'}}></div>
                <Card.Body className="p-4">
                  <Row className="align-items-center">
                    <Col xs="auto" className="d-none d-sm-block">
                      <div className="bg-warning-subtle p-3 rounded-circle">
                        <Flame size={48} className="text-primary" />
                      </div>
                    </Col>
                    <Col>
                      <h2 className="fs-4 fw-bold text-primary">Churras<span className="text-warning fw-normal">Swift</span></h2>
                      <p className="text-muted small mb-3">Organize churrascos, divida as compras e ganhe recompensas!</p>
                      <div className="d-flex flex-wrap gap-2">
                        <Link href="/criar-grupo" passHref><Button variant="primary"><Users size={16} className="me-2"/>Criar Grupo</Button></Link>
                        <Link href="/entrar-grupo" passHref><Button variant="outline-warning"><ArrowRight size={16} className="me-2"/>Entrar em Grupo</Button></Link>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="h-100 shadow-sm border-warning-subtle overflow-hidden">
                <div className="bg-gradient-warning" style={{height: '4px'}}></div>
                <Card.Body className="p-4">
                  <Row className="align-items-center">
                    <Col xs="auto" className="d-none d-sm-block">
                      <div className="bg-warning-subtle p-3 rounded-circle">
                        <Gift size={48} className="text-warning" />
                      </div>
                    </Col>
                    <Col>
                      <h2 className="fs-4 fw-bold text-primary">Swift<span className="text-warning fw-normal">Fidelidade</span></h2>
                      <p className="text-muted small mb-3">Ganhe pontos e troque por descontos exclusivos nas lojas Swift!</p>
                      <div className="d-flex flex-wrap gap-2">
                        <Link href="/fidelidade/cadastro" passHref><Button variant="warning"><CreditCard size={16} className="me-2"/>Cadastrar</Button></Link>
                        <Link href="/fidelidade/login" passHref><Button variant="outline-warning"><ArrowRight size={16} className="me-2"/>Acessar Conta</Button></Link>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
      <Navigation />
    </div>
  )
}