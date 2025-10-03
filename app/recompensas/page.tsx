'use client'

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import ProgressBar from "react-bootstrap/ProgressBar";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ArrowLeft, Gift, Trophy, Star, Ticket, Users, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"

export default function Recompensas() {
  // Dados simulados de recompensas
  const cupons = [
    {
      id: 1,
      titulo: "10% OFF em Carnes Swift",
      pontos: 1000,
      validade: "30 dias",
      imagem: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      titulo: "15% OFF em Linguiças",
      pontos: 1500,
      validade: "30 dias",
      imagem: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      titulo: "Frete Grátis",
      pontos: 2000,
      validade: "15 dias",
      imagem: "/placeholder.svg?height=100&width=100",
    },
  ]

  const combos = [
    {
      id: 4,
      titulo: "Combo Churrasco Básico",
      descricao: "Picanha 1kg + Linguiça + Carvão",
      pontos: 5000,
      valorMercado: "R$ 149,90",
      imagem: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 5,
      titulo: "Combo Churrasco Premium",
      descricao: "Picanha 1kg + Costela + Fraldinha + Carvão",
      pontos: 8000,
      valorMercado: "R$ 249,90",
      imagem: "/placeholder.svg?height=100&width=100",
    },
  ]

  const sorteios = [
    {
      id: 6,
      titulo: "Churrasqueira Elétrica",
      dataEncerramento: "15/05/2025",
      participantes: 145,
      imagem: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 7,
      titulo: "Kit Churrasco Profissional",
      dataEncerramento: "30/05/2025",
      participantes: 89,
      imagem: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <div className="d-flex flex-column min-vh-100 bg-light-subtle">
      <Header />
      <main className="flex-grow-1 py-4 pb-5">
        <Container>
          <div className="mb-4">
            <Link href="/registrar-evento" passHref>
              <Button variant="link" className="text-danger text-decoration-none">
                <ArrowLeft size={16} className="me-2" />
                Voltar
              </Button>
            </Link>
          </div>

          <Row className="justify-content-between align-items-start mb-4 g-4">
            <Col md="auto">
              <div className="d-flex align-items-center">
                <Gift size={24} className="text-danger me-2" />
                <div>
                  <h1 className="fs-2 fw-bold text-danger">Recompensas</h1>
                  <p className="text-muted">Resgate prêmios com seus pontos acumulados</p>
                </div>
              </div>
            </Col>
            <Col md="auto">
              <Card bg="white" className="shadow-sm border-danger-subtle p-2">
                <div className="d-flex align-items-center">
                  <Trophy size={20} className="text-danger me-2" />
                  <div>
                    <h3 className="fw-medium text-danger fs-6 mb-0">1.700 pontos</h3>
                    <ProgressBar variant="danger" now={34} style={{ height: '6px' }} />
                  </div>
                  <Badge bg="danger-subtle" text="danger-emphasis" className="ms-3">Nível 2</Badge>
                </div>
              </Card>
            </Col>
          </Row>

          <Tabs defaultActiveKey="cupons" id="recompensas-tabs" className="recompensas-tabs">
            <Tab eventKey="cupons" title={<><Ticket size={16} className="me-2" />Cupons</>}>
              <Row className="g-3 mt-3">
                {cupons.map((cupom) => (
                  <Col key={cupom.id} md={6} lg={4}>
                    <Card className="border-danger-subtle shadow-sm h-100">
                      <Row className="g-0 h-100">
                        <Col xs={4} className="bg-gradient bg-danger d-flex align-items-center justify-content-center p-3">
                          <img
                            src={cupom.imagem || "/placeholder.svg"}
                            alt={cupom.titulo}
                            className="img-fluid"
                            style={{ maxHeight: '64px' }}
                          />
                        </Col>
                        <Col xs={8}>
                          <Card.Body className="d-flex flex-column h-100 p-3">
                            <Card.Title as="h4" className="fs-6 text-danger mb-2">{cupom.titulo}</Card.Title>
                            <div className="d-flex align-items-center small text-muted mb-2">
                              <Trophy size={16} className="me-1 text-warning" />
                              <span>{cupom.pontos} pontos</span>
                            </div>
                            <div className="small text-muted">Válido por {cupom.validade}</div>
                            <Button
                              variant={cupom.pontos <= 1700 ? "danger" : "secondary"}
                              className="w-100 mt-auto"
                              disabled={cupom.pontos > 1700}
                            >
                              {cupom.pontos <= 1700 ? "Resgatar Agora" : `Faltam ${cupom.pontos - 1700} pts`}
                            </Button>
                          </Card.Body>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Tab>
            <Tab eventKey="combos" title={<><ShoppingBag size={16} className="me-2" />Combos</>}>
              <Row className="g-3 mt-3">
                {combos.map((combo) => (
                  <Col key={combo.id} md={6}>
                    <Card className="border-danger-subtle shadow-sm h-100">
                      <Row className="g-0 h-100">
                        <Col xs={4} className="bg-gradient bg-danger d-flex align-items-center justify-content-center p-3">
                          <img
                            src={combo.imagem || "/placeholder.svg"}
                            alt={combo.titulo}
                            className="img-fluid"
                            style={{ maxHeight: '80px' }}
                          />
                        </Col>
                        <Col xs={8}>
                          <Card.Body className="d-flex flex-column h-100 p-3">
                            <Card.Title as="h4" className="fs-6 text-danger mb-2">{combo.titulo}</Card.Title>
                            <p className="small text-muted mb-2">{combo.descricao}</p>
                            <div className="d-flex justify-content-between align-items-center mb-2">
                              <div className="d-flex align-items-center small text-muted">
                                <Trophy size={16} className="me-1 text-warning" />
                                <span>{combo.pontos} pontos</span>
                              </div>
                              <Badge bg="danger-subtle" text="danger-emphasis" pill>
                                Valor: {combo.valorMercado}
                              </Badge>
                            </div>
                            <ProgressBar now={(1700 / combo.pontos) * 100} variant="danger" style={{ height: '6px' }} />
                            <p className="small text-muted mt-1">
                              {Math.round((1700 / combo.pontos) * 100)}% concluído
                            </p>
                            <Button
                              variant="secondary"
                              className="w-100 mt-auto"
                              disabled={true}
                            >
                              Faltam {combo.pontos - 1700} pontos
                            </Button>
                          </Card.Body>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Tab>
            <Tab eventKey="sorteios" title={<><Star size={16} className="me-2" />Sorteios</>}>
              <Row className="g-3 mt-3">
                {sorteios.map((sorteio) => (
                  <Col key={sorteio.id} md={6}>
                    <Card className="border-danger-subtle shadow-sm h-100">
                      <Row className="g-0 h-100">
                        <Col xs={4} className="bg-gradient bg-warning d-flex align-items-center justify-content-center p-3">
                          <img
                            src={sorteio.imagem || "/placeholder.svg"}
                            alt={sorteio.titulo}
                            className="img-fluid"
                            style={{ maxHeight: '80px' }}
                          />
                        </Col>
                        <Col xs={8}>
                          <Card.Body className="d-flex flex-column h-100 p-3">
                            <Card.Title as="h4" className="fs-6 text-danger mb-2">{sorteio.titulo}</Card.Title>
                            <div className="d-flex align-items-center small text-muted mb-1">
                              <Users size={16} className="me-1 text-warning" />
                              <span>{sorteio.participantes} participantes</span>
                            </div>
                            <div className="small text-muted mb-3">Encerra em: {sorteio.dataEncerramento}</div>
                            <div className="bg-danger-subtle rounded p-2 small text-danger-emphasis">
                              Participar deste sorteio custa apenas 500 pontos!
                            </div>
                            <Button variant="danger" className="w-100 mt-auto">Participar do Sorteio</Button>
                          </Card.Body>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Tab>
          </Tabs>

          <div className="mt-4">
            <Card className="border-danger-subtle shadow-sm bg-light">
              <Card.Body>
                <Row className="align-items-center">
                  <Col md="auto" className="text-center">
                    <img
                      src="/placeholder.svg?height=120&width=120"
                      alt="Convide amigos"
                      className="img-fluid"
                      style={{ maxHeight: '96px' }}
                    />
                  </Col>
                  <Col>
                    <h3 className="fs-5 fw-bold text-danger mb-2">Convide amigos e ganhe mais pontos!</h3>
                    <p className="text-muted mb-3">
                      Para cada amigo que se cadastrar e participar de um churras, você ganha 1.000 pontos!
                    </p>
                    <Button variant="danger">
                      Convidar Amigos
                      <Users size={16} className="ms-2" />
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </main>
      <Navigation />
    </div>
  )
}