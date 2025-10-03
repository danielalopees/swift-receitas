'use client'

import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { Container, Row, Col, Card, Form, Button, InputGroup } from "react-bootstrap"
import { ArrowLeft, User, ShieldCheck } from "lucide-react"
import Link from "next/link"

export default function LoginFidelidade() {
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
                Login Swift Fidelidade
              </h1>

              <Card className="shadow-sm border-warning-subtle">
                <Card.Header 
                  className="text-white rounded-top-lg p-3"
                  style={{ background: 'linear-gradient(to right, var(--bs-primary), var(--bs-warning))' }}
                >
                  <Card.Title as="h2" className="fs-5 mb-0">Acesse sua Conta</Card.Title>
                </Card.Header>
                <Card.Body className="p-4">
                  <Form>
                    <Form.Group className="mb-3" controlId="cpf">
                      <Form.Label>CPF ou E-mail</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <User size={16} className="text-muted" />
                        </InputGroup.Text>
                        <Form.Control
                          type="text"
                          placeholder="000.000.000-00 ou seu@email.com"
                        />
                      </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="senha">
                      <Form.Label>Senha</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <ShieldCheck size={16} className="text-muted" />
                        </InputGroup.Text>
                        <Form.Control
                          type="password"
                          placeholder="********"
                        />
                      </InputGroup>
                      <div className="text-end mt-1">
                        <Link href="#" className="small text-warning text-decoration-none">
                          Esqueceu a senha?
                        </Link>
                      </div>
                    </Form.Group>

                    <div className="d-grid pt-3">
                      <Link href="/fidelidade/dashboard" passHref>
                        <Button variant="warning" type="submit">Entrar</Button>
                      </Link>
                    </div>

                    <div className="text-center small text-muted pt-4">
                      Ainda não tem cadastro?{" "}
                      <Link href="/fidelidade/cadastro" className="text-warning text-decoration-none">
                        Cadastre-se
                      </Link>
                    </div>
                  </Form>
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