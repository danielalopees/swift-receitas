'use client'

import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { Container, Row, Col, Card, Button, Alert } from "react-bootstrap"
import { CheckCircle, Home, User } from "lucide-react"
import Link from "next/link"

export default function ConfirmacaoCadastro() {
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
                  <h1 className="fs-2 fw-bold text-success mb-2">Cadastro Realizado!</h1>
                  <p className="text-muted mb-4">
                    Seu cadastro no Swift Fidelidade foi realizado com sucesso. Você já pode começar a acumular pontos!
                  </p>

                  <div className="d-grid gap-3">
                    <Link href="/fidelidade/dashboard" passHref>
                      <Button variant="warning">
                        <User size={16} className="me-2" />
                        Acessar Minha Conta
                      </Button>
                    </Link>
                    <Link href="/" passHref>
                      <Button variant="outline-secondary">
                        <Home size={16} className="me-2" />
                        Voltar para Início
                      </Button>
                    </Link>
                  </div>

                  <Alert variant="warning" className="text-start mt-5">
                    <Alert.Heading as="h3" className="fs-6">Bônus de boas-vindas!</Alert.Heading>
                    <p className="small mb-0">
                      Você ganhou <span className="fw-bold">500 pontos</span> por se cadastrar no Swift
                      Fidelidade. Continue acumulando!
                    </p>
                  </Alert>
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