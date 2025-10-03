'use client'

import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { Container, Row, Col, Card, Form, Button, InputGroup, ListGroup } from "react-bootstrap"
import { ArrowLeft, User, Mail, Phone, ShieldCheck } from "lucide-react"
import Link from "next/link"

export default function CadastroFidelidade() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light-subtle">
      <Header />
      <main className="flex-grow-1">
        <Container className="py-4 pb-5">
          <div className="mb-4">
            <Link href="/" passHref>
              <Button variant="link" className="text-decoration-none text-warning">
                <ArrowLeft size={16} className="me-2" />
                Voltar
              </Button>
            </Link>
          </div>

          <Row className="justify-content-center">
            <Col md={6} lg={5}>
              <h1 className="fs-2 fw-bold text-warning mb-4 d-flex align-items-center">
                <User size={28} className="me-2 text-warning-emphasis" />
                Cadastro Swift Fidelidade
              </h1>

              <Card className="shadow-sm border-warning-subtle">
                <Card.Header 
                  className="text-white rounded-top-lg p-3"
                  style={{ background: 'linear-gradient(to right, var(--bs-primary), var(--bs-warning))' }}
                >
                  <Card.Title as="h2" className="fs-5 mb-0">Seus Dados</Card.Title>
                </Card.Header>
                <Card.Body className="p-4">
                  <Form>
                    <Form.Group className="mb-3" controlId="cpf">
                      <Form.Label>CPF</Form.Label>
                      <InputGroup>
                        <InputGroup.Text><User size={16} className="text-muted" /></InputGroup.Text>
                        <Form.Control type="text" placeholder="000.000.000-00" />
                      </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="telefone">
                      <Form.Label>Telefone</Form.Label>
                      <InputGroup>
                        <InputGroup.Text><Phone size={16} className="text-muted" /></InputGroup.Text>
                        <Form.Control type="tel" placeholder="(00) 00000-0000" />
                      </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>E-mail</Form.Label>
                      <InputGroup>
                        <InputGroup.Text><Mail size={16} className="text-muted" /></InputGroup.Text>
                        <Form.Control type="email" placeholder="seu@email.com" />
                      </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="senha">
                      <Form.Label>Senha</Form.Label>
                      <InputGroup>
                        <InputGroup.Text><ShieldCheck size={16} className="text-muted" /></InputGroup.Text>
                        <Form.Control type="password" placeholder="********" />
                      </InputGroup>
                    </Form.Group>

                    <div className="d-grid pt-3">
                      <Link href="/fidelidade/confirmacao-cadastro" passHref>
                        <Button variant="warning" type="submit">Cadastrar</Button>
                      </Link>
                    </div>

                    <div className="text-center small text-muted pt-4">
                      Já tem cadastro?{" "}
                      <Link href="/fidelidade/login" className="text-warning text-decoration-none">
                        Faça login
                      </Link>
                    </div>
                  </Form>
                </Card.Body>
              </Card>

              <Card className="mt-4 bg-warning-subtle border-warning-subtle">
                <Card.Body>
                  <h3 className="fw-semibold text-warning-emphasis mb-3">Como funciona o Swift Fidelidade?</h3>
                  <ListGroup variant="flush">
                    <ListGroup.Item className="bg-transparent d-flex align-items-start border-0 px-0">
                      <div className="bg-warning rounded-circle p-1 me-2 mt-1"><div className="bg-warning-emphasis rounded-circle" style={{width: '8px', height: '8px'}}></div></div>
                      <span>Ganhe 10 pontos a cada R$1 gasto nas lojas Swift</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-transparent d-flex align-items-start border-0 px-0">
                      <div className="bg-warning rounded-circle p-1 me-2 mt-1"><div className="bg-warning-emphasis rounded-circle" style={{width: '8px', height: '8px'}}></div></div>
                      <span>Ganhe 500 pontos ao publicar uma receita no app</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-transparent d-flex align-items-start border-0 px-0">
                      <div className="bg-warning rounded-circle p-1 me-2 mt-1"><div className="bg-warning-emphasis rounded-circle" style={{width: '8px', height: '8px'}}></div></div>
                      <span>Ganhe 1000 pontos ao organizar um churras com amigos</span>
                    </ListGroup.Item>
                    <ListGroup.Item className="bg-transparent d-flex align-items-start border-0 px-0">
                      <div className="bg-warning rounded-circle p-1 me-2 mt-1"><div className="bg-warning-emphasis rounded-circle" style={{width: '8px', height: '8px'}}></div></div>
                      <span>Troque seus pontos por descontos nas lojas físicas Swift</span>
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