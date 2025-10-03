'use client'

import { useState } from "react"
import { Card, Button, Badge, Modal, Form } from "react-bootstrap"
import { Minus, Plus, Users } from "lucide-react"

// Interfaces remain the same
interface Produto {
  id: number
  nome: string
  preco: number
  imagem: string
  descricao: string
}

interface Amigo {
  id: number
  nome: string
  avatar: string
  isYou?: boolean
}

interface ProdutoCardProps {
  produto: Produto
  amigos: Amigo[]
}

export function ProdutoCard({ produto, amigos }: ProdutoCardProps) {
  const [quantidade, setQuantidade] = useState(0)
  const [showModal, setShowModal] = useState(false)

  const selecionado = quantidade > 0

  const handleClose = () => setShowModal(false)
  const handleShow = () => setShowModal(true)

  const aumentarQuantidade = () => setQuantidade(quantidade + 1)
  const diminuirQuantidade = () => {
    if (quantidade > 0) {
      setQuantidade(quantidade - 1)
    }
  }

  return (
    <>
      <Card className={`h-100 shadow-sm overflow-hidden transition-all ${selecionado ? "border-primary border-2" : ""}`}>
        <div className="position-relative">
          <Card.Img variant="top" src={produto.imagem || "/placeholder.svg"} alt={produto.nome} style={{ height: '192px', objectFit: 'cover' }} />
          {selecionado && (
            <Badge bg="primary" className="position-absolute top-0 end-0 m-2">
              {quantidade} {quantidade > 1 ? "unidades" : "unidade"}
            </Badge>
          )}
        </div>
        <Card.Body className="p-3">
          <h3 className="fw-bold fs-5 text-primary mb-1">{produto.nome}</h3>
          <p className="text-muted small mb-2">{produto.descricao}</p>
          <div className="d-flex justify-content-between align-items-center">
            <span className="fw-bold fs-5 text-primary">R$ {produto.preco.toFixed(2).replace(".", ",")}</span>
            <div className="d-flex align-items-center gap-2">
              <Button
                variant="outline-primary"
                className="rounded-circle p-0"
                style={{ width: '32px', height: '32px' }}
                onClick={diminuirQuantidade}
                disabled={quantidade === 0}
              >
                <Minus size={16} />
              </Button>
              <span className="text-center" style={{ minWidth: '20px' }}>{quantidade}</span>
              <Button
                variant="outline-primary"
                className="rounded-circle p-0 bg-primary-subtle"
                style={{ width: '32px', height: '32px' }}
                onClick={aumentarQuantidade}
              >
                <Plus size={16} />
              </Button>
            </div>
          </div>
        </Card.Body>
        <Card.Footer className="bg-primary-subtle p-2 d-flex justify-content-between align-items-center">
          {selecionado ? (
            <Button variant="link" size="sm" className="text-primary-emphasis text-decoration-none" onClick={handleShow}>
              <Users size={16} className="me-1" />
              Dividir
            </Button>
          ) : (
            <span className="small text-muted">Adicione para dividir</span>
          )}
          <span className="small text-muted">
            Total: R$ {(produto.preco * quantidade).toFixed(2).replace(".", ",")}
          </span>
        </Card.Footer>
      </Card>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Dividir {produto.nome}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-muted">Selecione quem vai contribuir com este item.</p>
          <div className="d-grid gap-3 mt-3">
            {amigos.map((amigo) => (
              <Form.Check key={amigo.id} type="checkbox" id={`amigo-${amigo.id}`}>
                <Form.Check.Input type="checkbox" defaultChecked={amigo.isYou} />
                <Form.Check.Label>
                  <div className="d-flex align-items-center">
                    <img 
                      src={amigo.avatar || "/placeholder-user.jpg"} 
                      alt={amigo.nome} 
                      className="rounded-circle me-2" 
                      style={{ width: '32px', height: '32px' }}
                    />
                    <span className="fw-medium">{amigo.isYou ? "Você" : amigo.nome}</span>
                  </div>
                </Form.Check.Label>
              </Form.Check>
            ))}
          </div>
          <div className="mt-4 pt-3 border-top">
            <div className="d-flex justify-content-between small mb-1">
              <span>Valor total:</span>
              <span className="fw-medium">R$ {(produto.preco * quantidade).toFixed(2).replace(".", ",")}</span>
            </div>
            <div className="d-flex justify-content-between small text-muted">
              <span>Valor por pessoa (exemplo):</span>
              <span>R$ {((produto.preco * quantidade) / 2).toFixed(2).replace(".", ",")}</span>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancelar</Button>
          <Button variant="primary" onClick={handleClose}>Salvar Divisão</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}