"use client"

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ArrowLeft, ArrowRight, CheckCircle, ShoppingBag, Upload, Users } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"

export default function RegistrarCompras() {
  // Dados simulados de compras
  const compras = [
    {
      id: 1,
      produto: "Picanha Premium Swift",
      preco: 89.9,
      responsavel: {
        id: 1,
        nome: "João Silva",
        avatar: "https://i.pravatar.cc/150?img=1",
      },
      status: "pendente",
    },
    {
      id: 2,
      produto: "Cerveja Especial",
      preco: 29.9,
      responsavel: {
        id: 2,
        nome: "Maria Oliveira",
        avatar: "https://i.pravatar.cc/150?img=5",
      },
      status: "confirmado",
      comprovante: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      produto: "Carvão Premium",
      preco: 19.9,
      responsavel: {
        id: 4,
        nome: "Você",
        avatar: "https://i.pravatar.cc/150?img=8",
        isYou: true,
      },
      status: "pendente",
    },
  ]

  return (
    <div className="d-flex flex-column min-vh-100 bg-light-subtle">
      <Header />
      <main className="flex-grow-1 py-4 pb-5">
        <Container>
          <div className="mb-4">
            <Link href="/escolher-produtos" passHref>
              <Button variant="link" className="text-danger text-decoration-none">
                <ArrowLeft size={16} className="me-2" />
                Voltar
              </Button>
            </Link>
          </div>

          <Row className="justify-content-between align-items-start mb-4 g-4">
            <Col md="auto">
              <div className="d-flex align-items-center">
                <ShoppingBag size={24} className="text-danger me-2" />
                <div>
                  <h1 className="fs-2 fw-bold text-danger">Registrar Compras</h1>
                  <p className="text-muted">Confirme suas compras para o churras</p>
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
            {compras.map((compra) => (
              <Col key={compra.id} md={6} lg={4}>
                <Card className="border-danger-subtle shadow-sm h-100">
                  <Card.Header
                    className={`bg-gradient ${compra.status === "confirmado" ? "bg-success" : "bg-danger"} text-white`}
                  >
                    <Card.Title as="h3" className="fs-6 d-flex align-items-center justify-content-between">
                      <span className="d-flex align-items-center">
                        {compra.status === "confirmado" ? (
                          <CheckCircle size={20} className="me-2" />
                        ) : (
                          <ShoppingBag size={20} className="me-2" />
                        )}
                        {compra.produto}
                      </span>
                      <Badge
                        bg={compra.status === "confirmado" ? "success-subtle" : "danger-subtle"}
                        text={compra.status === "confirmado" ? "success-emphasis" : "danger-emphasis"}
                      >
                        {compra.status === "confirmado" ? "Confirmado" : "Pendente"}
                      </Badge>
                    </Card.Title>
                  </Card.Header>
                  <Card.Body className="d-flex flex-column">
                    <div className="d-flex align-items-center mb-3">
                      <Image src={compra.responsavel.avatar || "/placeholder.svg"} roundedCircle style={{ width: '40px', height: '40px' }} className="me-3" />
                      <div>
                        <p className="fw-medium text-dark mb-0">
                          {compra.responsavel.isYou ? "Você" : compra.responsavel.nome}
                        </p>
                        <p className="small text-muted mb-0">Responsável pela compra</p>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="text-muted">Valor:</span>
                      <span className="fw-bold text-danger fs-5">R$ {compra.preco.toFixed(2).replace(".", ",")}</span>
                    </div>

                    <div className="mt-auto">
                      {compra.status === "confirmado" ? (
                        <div>
                          <p className="small text-muted mb-2">Comprovante:</p>
                          <div className="bg-light rounded-lg p-2 d-flex justify-content-center">
                            <Image
                              src={compra.comprovante || "/placeholder.svg"}
                              alt="Comprovante"
                              fluid
                              rounded
                              className="border"
                              style={{ maxHeight: '100px' }}
                            />
                          </div>
                        </div>
                      ) : compra.responsavel.isYou ? (
                        <div className="d-grid gap-3">
                          <p className="small text-muted mb-0">Anexe o comprovante da sua compra:</p>
                          <div className="border-2 border-dashed border-danger-subtle rounded-lg p-4 text-center">
                            <Upload size={32} className="text-danger-light mx-auto mb-2" />
                            <p className="small text-muted mb-0">Clique para enviar ou arraste o arquivo</p>
                          </div>
                          <Form.Control
                            type="text"
                            placeholder="Número do CPF na nota"
                          />
                          <Button variant="danger" className="w-100">
                            Confirmar Compra
                            <CheckCircle size={16} className="ms-2" />
                          </Button>
                        </div>
                      ) : (
                        <div className="bg-danger-subtle rounded-lg p-3 text-center">
                          <p className="small text-danger-emphasis mb-0">Aguardando confirmação de {compra.responsavel.nome}</p>
                        </div>
                      )}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="mt-4 d-flex justify-content-end">
            <Link href="/registrar-evento" passHref>
              <Button variant="danger">
                Próximo: Registrar Evento
                <ArrowRight size={16} className="ms-2" />
              </Button>
            </Link>
          </div>
        </Container>
      </main>
      <Navigation />
    </div>
  )
}