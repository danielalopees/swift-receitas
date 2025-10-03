'use client'

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, Container, Row, Col } from "react-bootstrap"
import { Heart, Trophy } from "lucide-react"

// Interfaces remain the same
interface Recipe {
  id: number
  position: number
  name: string
  image: string
  author: string
  authorAvatar?: string
  likes: number
}

interface RankingPodiumProps {
  recipes: Recipe[]
}

// Main component updated to use Bootstrap grid system
export function RankingPodium({ recipes }: RankingPodiumProps) {
  const sortedRecipes = [...recipes].sort((a, b) => a.position - b.position)

  const first = sortedRecipes[0]
  const second = sortedRecipes[1]
  const third = sortedRecipes[2]

  if (!first || !second || !third) {
    return null
  }

  return (
    <Container as="section" className="mb-5">
      <Row className="justify-content-center align-items-end text-center">
        {/* Second Place */}
        <Col md={4} className="mb-3 mb-md-0">
          <PodiumItem recipe={second} trophyColor="silver" />
          <div style={{ height: '5rem' }} className="bg-secondary bg-gradient rounded-top-lg shadow-lg position-relative d-flex align-items-center justify-content-center border-top border-4 border-light">
            <span className="fs-1 fw-bolder text-white text-opacity-25">2</span>
          </div>
        </Col>

        {/* First Place */}
        <Col md={4} className="mb-3 mb-md-0">
          <PodiumItem recipe={first} trophyColor="gold" isWinner />
          <div style={{ height: '7rem' }} className="bg-primary bg-gradient rounded-top-lg shadow-lg position-relative d-flex align-items-center justify-content-center border-top border-4 border-danger-subtle">
            <span className="fs-1 fw-bolder text-white text-opacity-25">1</span>
          </div>
        </Col>

        {/* Third Place */}
        <Col md={4} className="mb-3 mb-md-0">
          <PodiumItem recipe={third} trophyColor="bronze" />
          <div style={{ height: '4rem' }} className="bg-warning bg-gradient rounded-top-lg shadow-lg position-relative d-flex align-items-center justify-content-center border-top border-4 border-warning-subtle">
            <span className="fs-1 fw-bolder text-white text-opacity-25">3</span>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

interface PodiumItemProps {
  recipe: Recipe
  trophyColor: "gold" | "silver" | "bronze"
  isWinner?: boolean
}

// PodiumItem sub-component updated to use React Bootstrap
function PodiumItem({ recipe, trophyColor, isWinner = false }: PodiumItemProps) {
  const [imgSrc, setImgSrc] = useState(recipe.image || "/placeholder.svg")

  const trophyColors = {
    gold: "text-warning",
    silver: "text-secondary",
    bronze: "text-warning", // Using warning for bronze as well
  }

  return (
    <Card className={`overflow-hidden border-2 ${isWinner ? "border-primary shadow-lg" : "border-0"}`}>
      <Link href={`/receita/${recipe.id}`} className="text-decoration-none">
        <div className="position-relative">
          <div className="ratio ratio-1x1">
            <Image
              src={imgSrc}
              alt={recipe.name}
              fill
              style={{ objectFit: 'cover' }}
              className="w-100"
              onError={() => {
                setImgSrc("/placeholder.svg")
              }}
            />
          </div>
          <div className={`position-absolute top-0 end-0 m-2 bg-light rounded-circle p-1 shadow-sm z-1`}>
            <Trophy className={`h-5 w-5 ${trophyColors[trophyColor]}`} />
          </div>
          {isWinner && (
            <div className="position-absolute top-0 start-0 w-100 bg-primary text-white small fw-bold text-center py-1 z-1">
              1º LUGAR
            </div>
          )}
        </div>
      </Link>
      <Card.Body>
        <Link href={`/receita/${recipe.id}`} className="text-decoration-none text-dark">
          <h3 className="fw-bold small text-truncate">{recipe.name}</h3>
        </Link>
        <Link href={`/perfil/${recipe.author.replace(/\s+/g, "-").toLowerCase()}`} className="text-decoration-none text-muted">
          <div className="d-flex align-items-center mt-2">
            <img 
              src={recipe.authorAvatar || "/placeholder-user.jpg"} 
              alt={recipe.author} 
              className="rounded-circle me-2" 
              style={{ width: '20px', height: '20px', objectFit: 'cover' }}
            />
            <span className="small text-truncate">{recipe.author}</span>
          </div>
        </Link>
        <div className="d-flex align-items-center mt-2 text-primary">
          <Heart className="me-1" size={12} fill="currentColor" />
          <span className="small fw-medium">{recipe.likes.toLocaleString()}</span>
        </div>
      </Card.Body>
    </Card>
  )
}
