'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Home, Search, PlusCircle, Award, User } from "lucide-react"

export function Navigation() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    // Handle special case for root path to avoid matching all paths
    if (path === "/") return pathname === path
    return pathname.startsWith(path)
  }

  const navItems = [
    { href: "/", label: "Início", icon: Home },
    { href: "/busca", label: "Buscar", icon: Search },
    { href: "/ranking", label: "Ranking", icon: Award },
    { href: "/perfil", label: "Perfil", icon: User },
  ]

  return (
    <nav className="fixed-bottom bg-light border-top shadow-lg d-block d-md-none">
      <Container>
        <Nav className="justify-content-around w-100 align-items-center">
          {navItems.slice(0, 2).map(item => (
            <Nav.Link 
              key={item.href} 
              as={Link} 
              href={item.href} 
              className={`d-flex flex-column align-items-center p-2 ${isActive(item.href) ? "text-primary" : "text-secondary"}`}
            >
              <item.icon size={20} />
              <span className="small mt-1" style={{fontSize: '0.7rem'}}>{item.label}</span>
            </Nav.Link>
          ))}

          <Link href="/nova-receita" className="text-decoration-none">
            <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{width: '56px', height: '56px', marginTop: '-15px'}}>
                <PlusCircle size={28} />
            </div>
          </Link>

          {navItems.slice(2, 4).map(item => (
            <Nav.Link 
              key={item.href} 
              as={Link} 
              href={item.href} 
              className={`d-flex flex-column align-items-center p-2 ${isActive(item.href) ? "text-primary" : "text-secondary"}`}
            >
              <item.icon size={20} />
              <span className="small mt-1" style={{fontSize: '0.7rem'}}>{item.label}</span>
            </Nav.Link>
          ))}
        </Nav>
      </Container>
    </nav>
  )
}