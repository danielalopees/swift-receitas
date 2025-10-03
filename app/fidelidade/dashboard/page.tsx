'use client'

import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { Container, Row, Col, Card, Button, Tabs, Tab, ListGroup, Badge } from "react-bootstrap"
import { ArrowLeft, Gift, ShoppingBag, History, Ticket, CreditCard, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function DashboardFidelidade() {
  // Mock data remains the same
  const usuario = { nome: "Maria Silva", pontos: 2850, nivel: "Prata", valorDisponivel: 28.5 };
  const historicoPontos = [
    { id: 1, data: "15/04/2025", descricao: "Compra na Loja Swift Shopping Morumbi", pontos: 1200, tipo: "ganho" },
    { id: 2, data: "10/04/2025", descricao: "Publicação de receita: Picanha ao Alho", pontos: 500, tipo: "ganho" },
    { id: 3, data: "05/04/2025", descricao: "Organização de Churras entre Amigos", pontos: 1000, tipo: "ganho" },
    { id: 4, data: "01/04/2025", descricao: "Resgate de desconto na loja física", pontos: 1000, tipo: "uso" },
    { id: 5, data: "25/03/2025", descricao: "Bônus de cadastro", pontos: 500, tipo: "ganho" },
  ];
  const cuponsDisponiveis = [
    { id: 1, titulo: "10% de desconto em carnes", pontos: 1000, validade: "30/05/2025" },
    { id: 2, titulo: "15% de desconto em linguiças", pontos: 1500, validade: "30/05/2025" },
    { id: 3, titulo: "R$50 de desconto em compras acima de R$200", pontos: 2500, validade: "15/05/2025" },
  ];

  return (
    <div className="d-flex flex-column min-vh-100 bg-light-subtle">
      <Header />
      <main className="flex-grow-1">
        <Container className="py-4 pb-5">
          <div className="mb-4">
            <Link href="/" passHref><Button variant="link" className="text-decoration-none text-warning"><ArrowLeft size={16} className="me-2" />Voltar</Button></Link>
          </div>

          <Row className="justify-content-between align-items-start mb-4">
            <Col md="auto">
              <h1 className="fs-2 fw-bold text-warning d-flex align-items-center">
                <Gift size={28} className="me-2" />Swift Fidelidade
              </h1>
              <p className="text-muted">Gerencie seus pontos e descontos</p>
            </Col>
            <Col md="auto" className="d-flex align-items-center">
              <img src="https://i.pravatar.cc/150?img=5" alt="Maria Silva" className="rounded-circle me-3" style={{width: '40px', height: '40px'}}/>
              <div>
                <p className="fw-medium text-dark mb-0">{usuario.nome}</p>
                <p className="small text-muted mb-0">Nível {usuario.nivel}</p>
              </div>
            </Col>
          </Row>

          <Row className="g-3 mb-4">
            <Col md={4}><Card className="shadow-sm border-warning-subtle"><Card.Body><div className="d-flex justify-content-between align-items-center"><div><p className="small text-muted mb-0">Pontos Acumulados</p><p className="fs-4 fw-bold text-warning mb-0">{usuario.pontos}</p></div><div className="bg-warning-subtle p-3 rounded-circle"><Gift className="text-warning-emphasis" size={24}/></div></div></Card.Body></Card></Col>
            <Col md={4}><Card className="shadow-sm border-success-subtle"><Card.Body><div className="d-flex justify-content-between align-items-center"><div><p className="small text-muted mb-0">Valor Disponível</p><p className="fs-4 fw-bold text-success mb-0">R$ {usuario.valorDisponivel.toFixed(2)}</p></div><div className="bg-success-subtle p-3 rounded-circle"><CreditCard className="text-success-emphasis" size={24}/></div></div></Card.Body></Card></Col>
            <Col md={4}><Card className="shadow-sm border-warning-subtle"><Card.Body><div className="d-flex justify-content-between align-items-center"><div><p className="small text-muted mb-0">Próximo Nível</p><div className="d-flex align-items-center"><p className="fs-5 fw-bold text-warning mb-0">Ouro</p><Badge bg="warning-subtle" text="warning-emphasis" className="ms-2">+1150 pts</Badge></div></div><div className="bg-warning-subtle p-3 rounded-circle"><Ticket className="text-warning-emphasis" size={24}/></div></div></Card.Body></Card></Col>
          </Row>

          <Tabs defaultActiveKey="historico" id="fidelidade-tabs" className="mb-3" fill>
            <Tab eventKey="historico" title={<><History size={16} className="me-2"/>Histórico</>}>
              <Card className="border-warning-subtle shadow-sm"><Card.Header className="bg-warning-subtle"><Card.Title as="h3" className="fs-5 text-warning-emphasis">Histórico de Pontos</Card.Title></Card.Header><ListGroup variant="flush">{historicoPontos.map(item => (<ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center"><div><p className="fw-medium text-dark mb-0 text-truncate">{item.descricao}</p><p className="small text-muted mb-0">{item.data}</p></div><div className={`fw-bold ${item.tipo === 'ganho' ? 'text-success' : 'text-warning'}`}>{item.tipo === 'ganho' ? '+' : '-'}{item.pontos} pts</div></ListGroup.Item>))}</ListGroup></Card>
            </Tab>
            <Tab eventKey="cupons" title={<><Ticket size={16} className="me-2"/>Cupons</>}>
                <Card className="border-warning-subtle shadow-sm"><Card.Header className="bg-warning-subtle"><Card.Title as="h3" className="fs-5 text-warning-emphasis">Cupons Disponíveis</Card.Title></Card.Header><ListGroup variant="flush">{cuponsDisponiveis.map(cupom => (<ListGroup.Item key={cupom.id} className="d-flex justify-content-between align-items-center"><div><p className="fw-medium text-dark mb-0">{cupom.titulo}</p><p className="small text-muted mb-0">Válido até {cupom.validade}</p></div><div className="d-flex align-items-center"><span className="text-warning fw-medium me-3">{cupom.pontos} pts</span><Link href="/fidelidade/resgatar-cupom" passHref><Button size="sm" variant="warning">Resgatar</Button></Link></div></ListGroup.Item>))}</ListGroup></Card>
                <Card body className="mt-4 bg-warning-subtle border-warning-subtle"><h4 className="fw-semibold fs-6 text-warning-emphasis">Como usar seus cupons?</h4><p className="small text-muted mb-2">Resgate seus cupons aqui e apresente o código na loja física Swift para obter seu desconto!</p><Link href="/fidelidade/lojas" passHref><Button variant="outline-warning">Encontrar lojas próximas <ChevronRight size={16} className="ms-1"/></Button></Link></Card>
            </Tab>
            <Tab eventKey="loja" title={<><ShoppingBag size={16} className="me-2"/>Loja</>}>
              <Card className="border-warning-subtle shadow-sm"><Card.Body className="text-center py-5"><ShoppingBag size={48} className="text-warning-emphasis mx-auto mb-3"/><h3 className="fs-5 fw-medium text-dark mb-2">Compre na Loja Física</h3><p className="text-muted mb-4 mx-auto" style={{maxWidth: '400px'}}>Visite uma loja Swift e apresente seu CPF para acumular pontos ou usar seus descontos.</p><div className="d-grid gap-2 d-sm-flex justify-content-sm-center"><Link href="/fidelidade/lojas" passHref><Button variant="warning">Encontrar Lojas</Button></Link><Link href="/fidelidade/registrar-compra" passHref><Button variant="outline-warning">Registrar Compra</Button></Link></div></Card.Body></Card>
            </Tab>
          </Tabs>
        </Container>
      </main>
      <Navigation />
    </div>
  )
}