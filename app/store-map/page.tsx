import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { Button, Card, Container } from "react-bootstrap"
import { ArrowLeft, MapPin } from "lucide-react"
import Link from "next/link"
import { StoreMap } from "@/components/store-map"

export default function StoreMapPage({ searchParams }: { searchParams: { productId?: string } }) {
  const productId = searchParams.productId ? Number.parseInt(searchParams.productId) : undefined

  return (
    <div className="d-flex flex-column min-vh-100 bg-light-subtle">
      <Header />
      <main className="flex-grow-1 py-4 pb-5">
        <Container>
          <div className="mb-4">
            <Link href="/" passHref>
              <Button variant="link" className="text-danger text-decoration-none">
                <ArrowLeft size={16} className="me-2" />
                Voltar
              </Button>
            </Link>
          </div>

          <h1 className="fs-2 fw-bold text-danger mb-4 d-flex align-items-center">
            <MapPin size={24} className="text-danger me-2" />
            Lojas Swift
          </h1>

          <Card className="border-danger-subtle shadow-sm">
            <Card.Header className="bg-danger-subtle">
              <Card.Title as="h2" className="fs-5 text-danger-emphasis">
                {productId ? "Disponibilidade do Produto nas Lojas" : "Encontre a Loja Swift Mais Próxima"}
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-0" style={{ height: '60vh' }}>
              <StoreMap productId={productId} />
            </Card.Body>
          </Card>
        </Container>
      </main>
      <Navigation />
    </div>
  )
}
