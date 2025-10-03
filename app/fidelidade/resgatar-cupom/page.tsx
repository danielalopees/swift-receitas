'use client'

import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap"
import { ArrowLeft, Ticket, Gift, Store, QrCode } from "lucide-react"
import Link from "next/link"

export default function ResgatarCupom() {
  // Mock data for the coupon
  const cupom = {
    id: 1,
    titulo: "10% de desconto em carnes",
    pontos: 1000,
    codigo: "SWIFT10CARNES",
    validade: "30/05/2025",
    descricao: "Válido para qualquer corte de carne nas lojas físicas Swift.",
  }

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

          <Row className="justify-content-center">
            <Col md={6} lg={5}>
              <h1 className="fs-2 fw-bold text-warning mb-4 d-flex align-items-center">
                <Ticket size={28} className="me-2" />
                Resgatar Cupom
              </h1>

              <Card className="shadow-sm border-warning-subtle overflow-hidden">
                <Card.Header 
                  className="text-white p-3"
                  style={{ background: 'linear-gradient(to right, var(--bs-primary), var(--bs-warning))' }}
                >
                  <Card.Title as="h2" className="fs-5 mb-0">{cupom.titulo}</Card.Title>
                </Card.Header>
                <Card.Body className="p-4">
                  <ListGroup variant="flush" className="mb-4 bg-warning-subtle rounded-3 p-3">
                    <ListGroup.Item className="bg-transparent d-flex justify-content-between align-items-center px-0">
                      <span className="text-muted">Custo:</span>
                      <span className="fw-bold text-warning d-flex align-items-center"><Gift size={16} className="me-1" />{cupom.pontos} pontos</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-transparent d-flex justify-content-between align-items-center px-0">
                      <span className="text-muted">Validade:</span>
                      <span className="text-dark">{cupom.validade}</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-transparent px-0 pt-2">
                       <p className="small text-muted mb-0">{cupom.descricao}</p>
                    </ListGroup.Item>
                  </ListGroup>

                  <div className="border-warning border-2 rounded-3 p-4 text-center" style={{borderStyle: 'dashed'}}>
                    <QrCode size={128} className="text-warning mx-auto mb-4" />
                    <p className="fw-bold fs-5 text-warning-emphasis mb-1">Código do Cupom</p>
                    <p className="bg-warning-subtle text-warning-emphasis py-2 px-3 rounded-3 font-monospace fs-5">
                      {cupom.codigo}
                    </p>
                  </div>

                  <div className="d-grid pt-4 mt-2">
                    <Button variant="warning">
                      <Gift size={16} className="me-2" />
                      Resgatar por {cupom.pontos} pontos
                    </Button>
                  </div>
                </Card.Body>
              </Card>

              <Card className="mt-4 bg-warning-subtle border-warning-subtle">
                <Card.Body>
                  <h3 className="fw-semibold fs-6 text-warning-emphasis mb-3 d-flex align-items-center">
                    <Store size={16} className="me-2" />
                    Como usar este cupom
                  </h3>
                  <ListGroup as="ol" numbered variant="flush">
                    <ListGroup.Item as="li" className="bg-transparent border-0 small p-0 pb-2">Resgate o cupom clicando no botão acima.</ListGroup.Item>
                    <ListGroup.Item as="li" className="bg-transparent border-0 small p-0 pb-2">Visite uma loja física Swift.</ListGroup.Item>
                    <ListGroup.Item as="li" className="bg-transparent border-0 small p-0 pb-2">Apresente o código ou QR code ao caixa.</ListGroup.Item>
                    <ListGroup.Item as="li" className="bg-transparent border-0 small p-0">O desconto será aplicado automaticamente.</ListGroup.Item>
                  </ListGroup>
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