'use client'

import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { Container, Row, Col, Card, Form, Button, InputGroup, ListGroup } from "react-bootstrap"
import { ArrowLeft, User, DollarSign, Receipt, ShoppingBag } from "lucide-react"
import Link from "next/link"

export default function RegistrarCompra() {
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
                <ShoppingBag size={28} className="me-2" />
                Registrar Compra
              </h1>

              <Card className="shadow-sm border-warning-subtle">
                <Card.Header 
                  className="text-white rounded-top-lg p-3"
                  style={{ background: 'linear-gradient(to right, var(--bs-primary), var(--bs-warning))' }}
                >
                  <Card.Title as="h2" className="fs-5 mb-0">Dados da Compra</Card.Title>
                </Card.Header>
                <Card.Body className="p-4">
                  <Form>
                    <Form.Group className="mb-3" controlId="cpf">
                      <Form.Label>CPF do Cliente</Form.Label>
                      <InputGroup>
                        <InputGroup.Text><User size={16} className="text-muted" /></InputGroup.Text>
                        <Form.Control type="text" placeholder="000.000.000-00" />
                      </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="valor">
                      <Form.Label>Valor da Compra (R$)</Form.Label>
                      <InputGroup>
                        <InputGroup.Text><DollarSign size={16} className="text-muted" /></InputGroup.Text>
                        <Form.Control type="text" placeholder="0,00" />
                      </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="nota">
                      <Form.Label>Número da Nota Fiscal</Form.Label>
                      <InputGroup>
                        <InputGroup.Text><Receipt size={16} className="text-muted" /></InputGroup.Text>
                        <Form.Control type="text" placeholder="000000000" />
                      </InputGroup>
                    </Form.Group>

                    <div className="d-grid pt-3">
                      <Link href="/fidelidade/confirmacao-pontos" passHref>
                        <Button variant="warning" type="submit">Registrar Compra</Button>
                      </Link>
                    </div>
                  </Form>
                </Card.Body>
              </Card>

              <Card className="mt-4 bg-warning-subtle border-warning-subtle">
                <Card.Body>
                  <h3 className="fw-semibold fs-6 text-warning-emphasis mb-3">Informações Importantes</h3>
                  <ListGroup variant="flush">
                    <ListGroup.Item className="bg-transparent d-flex align-items-start border-0 px-0 small">
                      <div className="bg-warning rounded-circle p-1 me-2 mt-1"><div className="bg-warning-emphasis rounded-circle" style={{width: '8px', height: '8px'}}></div></div>
                      <span>O cliente ganha 10 pontos a cada R$1 gasto.</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-transparent d-flex align-items-start border-0 px-0 small">
                      <div className="bg-warning rounded-circle p-1 me-2 mt-1"><div className="bg-warning-emphasis rounded-circle" style={{width: '8px', height: '8px'}}></div></div>
                      <span>O registro pode ser feito pelo vendedor ou pelo cliente.</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-transparent d-flex align-items-start border-0 px-0 small">
                      <div className="bg-warning rounded-circle p-1 me-2 mt-1"><div className="bg-warning-emphasis rounded-circle" style={{width: '8px', height: '8px'}}></div></div>
                      <span>Os pontos são creditados instantaneamente.</span>
                    </ListGroup.Item>
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