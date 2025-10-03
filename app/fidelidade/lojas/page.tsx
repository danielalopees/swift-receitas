'use client'

import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { Container, Row, Col, Card, Button, Form, InputGroup, Badge, ListGroup } from "react-bootstrap"
import { ArrowLeft, MapPin, Phone, Clock, Navigation2 } from "lucide-react"
import Link from "next/link"

export default function Lojas() {
  // Mock data for stores
  const lojas = [
    { id: 1, nome: "Swift Shopping Morumbi", endereco: "Av. Roque Petroni Júnior, 1089 - Morumbi, São Paulo - SP", telefone: "(11) 5555-1234", horario: "Seg a Sáb: 10h às 22h | Dom: 12h às 20h", distancia: "2,5 km" },
    { id: 2, nome: "Swift Shopping Ibirapuera", endereco: "Av. Ibirapuera, 3103 - Moema, São Paulo - SP", telefone: "(11) 5555-5678", horario: "Seg a Sáb: 10h às 22h | Dom: 12h às 20h", distancia: "4,8 km" },
    { id: 3, nome: "Swift Shopping Eldorado", endereco: "Av. Rebouças, 3970 - Pinheiros, São Paulo - SP", telefone: "(11) 5555-9012", horario: "Seg a Sáb: 10h às 22h | Dom: 12h às 20h", distancia: "6,2 km" },
  ]

  return (
    <div className="d-flex flex-column min-vh-100 bg-light-subtle">
      <Header />
      <main className="flex-grow-1">
        <Container className="py-4 pb-5">
          <div className="mb-4">
            <Link href="/fidelidade/dashboard" passHref>
              <Button variant="link" className="text-decoration-none text-warning">
                <ArrowLeft size={16} className="me-2" />
                Voltar ao Dashboard
              </Button>
            </Link>
          </div>

          <h1 className="fs-2 fw-bold text-warning mb-4 d-flex align-items-center">
            <MapPin size={28} className="me-2" />
            Lojas Swift
          </h1>

          <Row className="justify-content-center mb-4">
            <Col md={8}>
              <InputGroup>
                <InputGroup.Text><MapPin size={16} className="text-muted" /></InputGroup.Text>
                <Form.Control placeholder="Buscar por CEP, cidade ou bairro" />
              </InputGroup>
            </Col>
          </Row>

          <div className="d-grid gap-3">
            {lojas.map((loja) => (
              <Card key={loja.id} className="shadow-sm border-warning-subtle">
                <Card.Header className="d-flex justify-content-between align-items-center">
                  <Card.Title as="h3" className="fs-6 fw-semibold text-warning-emphasis mb-0">{loja.nome}</Card.Title>
                  <Badge bg="warning-subtle" text="warning-emphasis" className="d-flex align-items-center">
                    <Navigation2 size={12} className="me-1" />
                    {loja.distancia}
                  </Badge>
                </Card.Header>
                <Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item className="d-flex align-items-start border-0 px-0">
                      <MapPin size={20} className="text-muted me-2 mt-1 flex-shrink-0" />
                      <span className="small text-muted">{loja.endereco}</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-start border-0 px-0">
                      <Phone size={16} className="text-muted me-2 mt-1 flex-shrink-0" />
                      <span className="small text-muted">{loja.telefone}</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex align-items-start border-0 px-0">
                      <Clock size={16} className="text-muted me-2 mt-1 flex-shrink-0" />
                      <span className="small text-muted">{loja.horario}</span>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
                <Card.Footer className="text-end">
                    <Button variant="warning">
                      <Navigation2 size={16} className="me-2" />
                      Como Chegar
                    </Button>
                </Card.Footer>
              </Card>
            ))}
          </div>
        </Container>
      </main>
      <Navigation />
    </div>
  )
}