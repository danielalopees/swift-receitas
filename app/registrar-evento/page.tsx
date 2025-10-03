'use client'

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ArrowLeft, ArrowRight, Camera, Hash, Users, MessageSquare } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"

export default function RegistrarEvento() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light-subtle">
      <Header />
      <main className="flex-grow-1 py-4 pb-5">
        <Container>
          <div className="mb-4">
            <Link href="/registrar-compras" passHref>
              <Button variant="link" className="text-danger text-decoration-none">
                <ArrowLeft size={16} className="me-2" />
                Voltar
              </Button>
            </Link>
          </div>

          <Row className="justify-content-between align-items-start mb-4 g-4">
            <Col md="auto">
              <div className="d-flex align-items-center">
                <Camera size={24} className="text-danger me-2" />
                <div>
                  <h1 className="fs-2 fw-bold text-danger">Registrar Evento</h1>
                  <p className="text-muted">Compartilhe fotos do seu churras e ganhe pontos!</p>
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
            <Col md={6}>
              <Card className="border-danger-subtle shadow-sm h-100">
                <Card.Header className="bg-gradient bg-danger text-white">
                  <Card.Title as="h2" className="fs-5">Compartilhe seu Churras</Card.Title>
                </Card.Header>
                <Card.Body>
                  <div className="d-grid gap-3">
                    <div className="border-2 border-dashed border-danger-subtle rounded-lg p-4 text-center">
                      <Camera size={48} className="text-danger-light mx-auto mb-3" />
                      <p className="text-muted mb-3">Envie fotos do seu churras</p>
                      <Button variant="danger">Selecionar Fotos</Button>
                    </div>

                    <Form.Group>
                      <Form.Label htmlFor="legenda">Legenda</Form.Label>
                      <Form.Control
                        as="textarea"
                        id="legenda"
                        placeholder="Conte como foi o churras..."
                        rows={3}
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label htmlFor="hashtag">Hashtag</Form.Label>
                      <div className="position-relative">
                        <Hash className="position-absolute top-50 start-0 translate-middle-y ms-3 text-danger" size={16} />
                        <Form.Control
                          id="hashtag"
                          defaultValue="ChurrasSwift"
                          className="ps-5"
                        />
                      </div>
                    </Form.Group>

                    <div className="pt-3">
                      <Button variant="danger" className="w-100">
                        Publicar e Ganhar Pontos
                        <ArrowRight size={16} className="ms-2" />
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <div className="d-grid gap-4">
                <Card className="border-danger-subtle shadow-sm">
                  <Card.Header className="bg-gradient bg-warning text-white">
                    <Card.Title as="h2" className="fs-5">Benefícios</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <ul className="list-unstyled d-grid gap-3">
                      <li className="d-flex align-items-start">
                        <div className="bg-danger-subtle rounded-circle p-1 me-3 mt-1">
                          <div className="bg-danger rounded-circle" style={{ width: '12px', height: '12px' }}></div>
                        </div>
                        <div>
                          <p className="fw-medium text-dark mb-0">Ganhe 500 pontos</p>
                          <p className="small text-muted">Ao registrar seu churras com fotos</p>
                        </div>
                      </li>
                      <li className="d-flex align-items-start">
                        <div className="bg-danger-subtle rounded-circle p-1 me-3 mt-1">
                          <div className="bg-danger rounded-circle" style={{ width: '12px', height: '12px' }}></div>
                        </div>
                        <div>
                          <p className="fw-medium text-dark mb-0">+200 pontos por pessoa</p>
                          <p className="small text-muted">Para cada amigo no seu grupo</p>
                        </div>
                      </li>
                      <li className="d-flex align-items-start">
                        <div className="bg-danger-subtle rounded-circle p-1 me-3 mt-1">
                          <div className="bg-danger rounded-circle" style={{ width: '12px', height: '12px' }}></div>
                        </div>
                        <div>
                          <p className="fw-medium text-dark mb-0">Bônus de 300 pontos</p>
                          <p className="small text-muted">Se todas as compras forem confirmadas</p>
                        </div>
                      </li>
                    </ul>
                  </Card.Body>
                </Card>
                <Card className="border-danger-subtle shadow-sm">
                  <Card.Header className="bg-gradient bg-danger text-white py-2">
                    <Card.Title as="h3" className="fs-6 d-flex align-items-center">
                      <MessageSquare size={20} className="me-2" />
                      Comentários do Grupo
                    </Card.Title>
                  </Card.Header>
                  <Card.Body className="p-0">
                    <div className="divide-y divide-danger-subtle">
                      <div className="p-3 d-flex">
                        <Image src="https://i.pravatar.cc/150?img=1" roundedCircle style={{ width: '32px', height: '32px' }} className="me-3" />
                        <div>
                          <p className="small fw-medium text-dark mb-0">João Silva</p>
                          <p className="small text-muted mb-0">Vou levar mais cerveja! 🍺</p>
                        </div>
                      </div>
                      <div className="p-3 d-flex">
                        <Image src="https://i.pravatar.cc/150?img=5" roundedCircle style={{ width: '32px', height: '32px' }} className="me-3" />
                        <div>
                          <p className="small fw-medium text-dark mb-0">Maria Oliveira</p>
                          <p className="small text-muted mb-0">Alguém vai trazer farofa?</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 bg-light">
                      <div className="d-flex">
                        <Form.Control
                          placeholder="Escreva um comentário..."
                        />
                        <Button variant="danger" className="ms-2">Enviar</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>

          <div className="mt-4 d-flex justify-content-end">
            <Link href="/recompensas" passHref>
              <Button variant="danger">
                Próximo: Ver Recompensas
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