"use client"

import { Button, Card, Badge, Tabs, Tab, Container, Row, Col, Image } from "react-bootstrap"
import { ArrowLeft, ArrowRight, ShoppingCart, Users } from "lucide-react"
import Link from "next/link"
import { ProdutoCard } from "@/components/produto-card"
import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"

export default function EscolherProdutos() {
  // Dados simulados de produtos
  const carnes = [
    {
      id: 1,
      nome: "Picanha Premium Swift",
      preco: 89.9,
      imagem: "/placeholder.svg?height=200&width=200",
      descricao: "Peça de 1kg, corte especial",
    },
    {
      id: 2,
      nome: "Costela Swift",
      preco: 49.9,
      imagem: "/placeholder.svg?height=200&width=200",
      descricao: "Peça de 1.2kg, macia e suculenta",
    },
    {
      id: 3,
      nome: "Linguiça Toscana Swift",
      preco: 24.9,
      imagem: "/placeholder.svg?height=200&width=200",
      descricao: "Pacote com 500g, temperada",
    },
  ]

  const bebidas = [
    {
      id: 4,
      nome: "Cerveja Especial",
      preco: 29.9,
      imagem: "/placeholder.svg?height=200&width=200",
      descricao: "Pack com 6 unidades, 350ml",
    },
    {
      id: 5,
      nome: "Refrigerante",
      preco: 9.9,
      imagem: "/placeholder.svg?height=200&width=200",
      descricao: "2L, diversos sabores",
    },
  ]

  const acessorios = [
    {
      id: 6,
      nome: "Carvão Premium",
      preco: 19.9,
      imagem: "/placeholder.svg?height=200&width=200",
      descricao: "Saco com 5kg, alta duração",
    },
    {
      id: 7,
      nome: "Kit Espetos",
      preco: 39.9,
      imagem: "/placeholder.svg?height=200&width=200",
      descricao: "Conjunto com 6 espetos inox",
    },
  ]

  // Dados simulados de amigos
  const amigos = [
    { id: 1, nome: "João Silva", avatar: "https://i.pravatar.cc/150?img=1" },
    { id: 2, nome: "Maria Oliveira", avatar: "https://i.pravatar.cc/150?img=5" },
    { id: 3, nome: "Pedro Santos", avatar: "https://i.pravatar.cc/150?img=3" },
    { id: 4, nome: "Você", avatar: "https://i.pravatar.cc/150?img=8", isYou: true },
  ]

  return (
    <div className="d-flex flex-column min-vh-100 bg-light-subtle">
      <Header />
      <main className="flex-grow-1 py-4 pb-5">
        <Container>
          <div className="mb-4">
            <Link href="/criar-grupo" passHref>
              <Button variant="link" className="text-danger text-decoration-none">
                <ArrowLeft size={16} className="me-2" />
                Voltar
              </Button>
            </Link>
          </div>

          <Row className="justify-content-between align-items-start mb-4 g-4">
            <Col md="auto">
              <div className="d-flex align-items-center">
                <ShoppingCart size={24} className="text-danger me-2" />
                <div>
                  <h1 className="fs-2 fw-bold text-danger">Escolher Produtos</h1>
                  <p className="text-muted">Selecione os itens para o seu churras</p>
                </div>
              </div>
            </Col>
            <Col md="auto">
              <Card bg="white" className="shadow-sm border-danger-subtle p-2">
                <div className="d-flex align-items-center">
                  <Users size={20} className="text-danger me-2" />
                  <h3 className="fw-medium text-danger fs-6 mb-0">Churras de Sábado</h3>
                  <Badge bg="danger-subtle" text="danger-emphasis" className="ms-2">4 pessoas</Badge>
                </div>
              </Card>
            </Col>
          </Row>

          <Row className="g-4">
            <Col lg={8}>
              <Tabs defaultActiveKey="carnes" id="produtos-tabs" className="produtos-tabs">
                <Tab eventKey="carnes" title="Carnes">
                  <Row className="g-3 mt-3">
                    {carnes.map((produto) => (
                      <Col key={produto.id} md={6}>
                        <ProdutoCard produto={produto} amigos={amigos} />
                      </Col>
                    ))}
                  </Row>
                </Tab>
                <Tab eventKey="bebidas" title="Bebidas">
                  <Row className="g-3 mt-3">
                    {bebidas.map((produto) => (
                      <Col key={produto.id} md={6}>
                        <ProdutoCard produto={produto} amigos={amigos} />
                      </Col>
                    ))}
                  </Row>
                </Tab>
                <Tab eventKey="acessorios" title="Acessórios">
                  <Row className="g-3 mt-3">
                    {acessorios.map((produto) => (
                      <Col key={produto.id} md={6}>
                        <ProdutoCard produto={produto} amigos={amigos} />
                      </Col>
                    ))}
                  </Row>
                </Tab>
              </Tabs>
            </Col>
            <Col lg={4}>
              <Card className="border-danger-subtle shadow-sm position-sticky" style={{ top: '1rem' }}>
                <Card.Header className="bg-gradient bg-danger text-white">
                  <Card.Title as="h2" className="fs-5 d-flex align-items-center">
                    <ShoppingCart size={20} className="me-2" />
                    Resumo do Pedido
                  </Card.Title>
                </Card.Header>
                <Card.Body>
                  <div className="d-grid gap-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <div className="bg-danger rounded-circle me-2" style={{ width: '8px', height: '8px' }}></div>
                        <span className="small">Picanha Premium Swift</span>
                      </div>
                      <span className="fw-medium small">R$ 89,90</span>
                    </div>
                    <div className="ps-4 small text-muted d-flex align-items-center">
                      <Image src="https://i.pravatar.cc/150?img=1" roundedCircle style={{ width: '16px', height: '16px' }} className="me-1" />
                      <span>João Silva</span>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <div className="bg-danger rounded-circle me-2" style={{ width: '8px', height: '8px' }}></div>
                        <span className="small">Cerveja Especial</span>
                      </div>
                      <span className="fw-medium small">R$ 29,90</span>
                    </div>
                    <div className="ps-4 small text-muted d-flex align-items-center">
                      <Image src="https://i.pravatar.cc/150?img=5" roundedCircle style={{ width: '16px', height: '16px' }} className="me-1" />
                      <span>Maria Oliveira</span>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <div className="bg-danger rounded-circle me-2" style={{ width: '8px', height: '8px' }}></div>
                        <span className="small">Carvão Premium</span>
                      </div>
                      <span className="fw-medium small">R$ 19,90</span>
                    </div>
                    <div className="ps-4 small text-muted d-flex align-items-center">
                      <Image src="https://i.pravatar.cc/150?img=8" roundedCircle style={{ width: '16px', height: '16px' }} className="me-1" />
                      <span>Você</span>
                    </div>
                  </div>

                  <hr className="my-3 border-dashed" />

                  <div className="d-grid gap-1">
                    <div className="d-flex justify-content-between align-items-center fw-medium">
                      <span>Total</span>
                      <span className="text-danger">R$ 139,70</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center small text-muted">
                      <span>Por pessoa (média)</span>
                      <span>R$ 34,93</span>
                    </div>
                  </div>
                </Card.Body>
                <Card.Footer className="bg-light">
                  <Link href="/registrar-compras" passHref>
                    <Button variant="danger" className="w-100">
                      Continuar
                      <ArrowRight size={16} className="ms-2" />
                    </Button>
                  </Link>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
      <Navigation />
    </div>
  )
}
