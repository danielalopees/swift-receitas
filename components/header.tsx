'use client';

import { useState } from "react"
import Link from "next/link"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Dropdown from "react-bootstrap/Dropdown";
import Badge from "react-bootstrap/Badge";
import { Search, Bell, Menu, ShoppingCart, User, Home, Award, ChefHat } from "lucide-react"
import { useCart } from "@/hooks/use-cart"

export function Header() {
  const [showMenu, setShowMenu] = useState(false)

  const handleMenuClose = () => setShowMenu(false)
  const handleMenuShow = () => setShowMenu(true)

  return (
    <Navbar sticky="top" bg="light" className="shadow-sm border-bottom" expand="md">
      <Container>
        {/* Mobile Menu Toggle */}
        <Button variant="link" className="d-md-none text-secondary" onClick={handleMenuShow}>
          <Menu size={20} />
        </Button>

        {/* Brand Logo */}
        <Navbar.Brand as={Link} href="/" className="d-flex align-items-center">
          <span className="fw-semibold text-dark fs-5">
            <span className="text-primary">R</span>eceitas
          </span>
          <img src="/images/swift-logo.svg" alt="Swift" style={{ height: '24px' }} className="ms-2" />
        </Navbar.Brand>

        {/* Desktop Navigation (collapses on mobile) */}
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="me-auto d-none d-md-flex">
            <Nav.Link as={Link} href="/">Início</Nav.Link>
            <Nav.Link as={Link} href="/busca">Buscar</Nav.Link>
            <Nav.Link as={Link} href="/ranking">Ranking</Nav.Link>
            <Nav.Link as={Link} href="/chef-ia">Chef IA</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* Right-side Icons */}
        <Nav className="flex-row align-items-center ms-auto ms-md-0">
          <Nav.Link as={Link} href="/busca" className="d-none d-md-block text-secondary">
            <Search size={20} />
          </Nav.Link>
          <Nav.Link href="#" className="text-secondary">
            <Bell size={20} />
          </Nav.Link>
          <MobileCartButton />
        </Nav>

        {/* Mobile Offcanvas Menu */}
        <Offcanvas show={showMenu} onHide={handleMenuClose} placement="start">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column fs-5">
              <Nav.Link as={Link} href="/" onClick={handleMenuClose}><Home className="me-3" size={20}/>Início</Nav.Link>
              <Nav.Link as={Link} href="/busca" onClick={handleMenuClose}><Search className="me-3" size={20}/>Buscar</Nav.Link>
              <Nav.Link as={Link} href="/ranking" onClick={handleMenuClose}><Award className="me-3" size={20}/>Ranking</Nav.Link>
              <Nav.Link as={Link} href="/chef-ia" onClick={handleMenuClose}><ChefHat className="me-3" size={20}/>Chef IA</Nav.Link>
              <Nav.Link as={Link} href="/perfil" onClick={handleMenuClose}><User className="me-3" size={20}/>Perfil</Nav.Link>
            </Nav>
            <div className="mt-auto pt-4 border-top">
                <Link href="/fidelidade/login">
                  <Button variant="outline-primary" className="w-100">Entrar</Button>
                </Link>
                <p className="text-muted small mt-3">Versão 1.0.0</p>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  )
}

function MobileCartButton() {
  const { items, getTotalPrice } = useCart()

  return (
    <Dropdown align="end">
      <Dropdown.Toggle as="div" bsPrefix="p-0" className="position-relative">
        <Button variant="link" className="text-secondary">
          <ShoppingCart size={20} />
          {items.length > 0 && (
            <Badge pill bg="primary" className="position-absolute top-0 start-100 translate-middle">
              {items.length}
            </Badge>
          )}
        </Button>
      </Dropdown.Toggle>

      <Dropdown.Menu style={{ width: '300px' }}>
        <div className="p-2">
            <h3 className="fw-medium fs-6">Seu Carrinho</h3>
        </div>
        <Dropdown.Divider />
        <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
          {items.length > 0 ? items.map((item: any) => (
            <div key={item.id} className="d-flex align-items-center p-2">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                className="rounded me-2"
                style={{ width: '48px', height: '48px', objectFit: 'cover' }}
              />
              <div className="flex-grow-1 text-truncate">
                <p className="fw-medium small text-truncate mb-0">{item.name}</p>
                <p className="text-primary small mb-0">R$ {item.price.toFixed(2).replace(".", ",")}</p>
              </div>
            </div>
          )) : (
            <p className="text-muted text-center p-3">Seu carrinho está vazio.</p>
          )}
        </div>
        {items.length > 0 && (
          <>
            <Dropdown.Divider />
            <div className="p-2">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <span className="text-muted">Total:</span>
                <span className="fw-bold text-primary">R$ {getTotalPrice().toFixed(2).replace(".", ",")}</span>
              </div>
              <Button variant="primary" className="w-100">Ver Carrinho</Button>
            </div>
          </>
        )}
      </Dropdown.Menu>
    </Dropdown>
  )
}