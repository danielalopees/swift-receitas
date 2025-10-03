'use client'

import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap"
import { CheckCircle, Home, User, Gift } from "lucide-react"
import Link from "next/link"

export default function ConfirmacaoPontos() {
  // Mock data for the purchase
  const compra = {
    valor: 120.5,
    pontos: 1205,
    data: "30/04/2025",
    loja: "Swift Shopping Morumbi",
  }

  return (
    <div className="d-flex flex-column min-vh-100 bg-light-subtle">
      <Header />
      <main className="flex-grow-1 d-flex align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md={6} lg={5}>
              <Card className="shadow-sm overflow-hidden border-success-subtle">
                <div 
                  style={{ height: '4px' }} 
                  className="bg-gradient-success"
                ></div>
                <Card.Body className="text-center p-4 p-sm-5">
                  <div className="mx-auto bg-success-subtle rounded-circle d-flex align-items-center justify-content-center mb-4" style={{ width: '64px', height: '64px' }}>
                    <CheckCircle size={40} className="text-success" />
                  </div>
                  <h1 className="fs-2 fw-bold text-success mb-2">Pontos Registrados!</h1>
                  <p className="text-muted mb-4">
                    A compra foi registrada com sucesso e os pontos foram adicionados à sua conta.
                  </p>

                  <div className="bg-warning-subtle rounded-3 p-3 mb-4 text-start">
                    <ListGroup variant="flush">
                      <ListGroup.Item className="bg-transparent d-flex justify-content-between align-items-center px-0 small">
                        <span className="text-muted">Valor da compra:</span>
                        <span className="fw-bold text-dark">R$ {compra.valor.toFixed(2)}</span>
                      </ListGroup.Item>
                      <ListGroup.Item className="bg-transparent d-flex justify-content-between align-items-center px-0 small">
                        <span className="text-muted">Data:</span>
                        <span className="text-dark">{compra.data}</span>
                      </ListGroup.Item>
                      <ListGroup.Item className="bg-transparent d-flex justify-content-between align-items-center px-0 small">
                        <span className="text-muted">Loja:</span>
                        <span className="text-dark">{compra.loja}</span>
                      </ListGroup.Item>
                      <ListGroup.Item className="bg-transparent d-flex justify-content-between align-items-center px-0 pt-2 mt-2 border-top border-warning-subtle">
                        <span className="text-warning-emphasis fw-medium">Pontos ganhos:</span>
                        <span className="fw-bold text-warning-emphasis d-flex align-items-center"><Gift size={16} className="me-1" />{compra.pontos} pontos</span>
                      </ListGroup.Item>
                    </ListGroup>
                  </div>

                  <div className="d-grid gap-3">
                    <Link href="/fidelidade/dashboard" passHref>
                      <Button variant="warning">
                        <User size={16} className="me-2" />
                        Ver Minha Conta
                      </Button>
                    </Link>
                    <Link href="/" passHref>
                      <Button variant="outline-secondary">
                        <Home size={16} className="me-2" />
                        Voltar para Início
                      </Button>
                    </Link>
                  </div>
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