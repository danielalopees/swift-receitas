'use client'

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, Row, Col, Badge } from "react-bootstrap"
import { Heart } from "lucide-react"

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

interface RankingListProps {
  recipes: Recipe[]
}

// Sub-component for each item in the list
function RecipeListItem({ recipe }: { recipe: Recipe }) {
  const [imgSrc, setImgSrc] = useState(recipe.image || "/placeholder.svg")

  return (
    <Card className="shadow-sm h-100">
      <Card.Body>
        <Row className="align-items-center">
          <Col xs={3} className="pe-0">
            <Link href={`/receita/${recipe.id}`}>
              <div className="position-relative">
                <div className="ratio ratio-1x1">
                  <Image
                    src={imgSrc}
                    alt={recipe.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded"
                    onError={() => setImgSrc("/placeholder.svg")}
                  />
                </div>
                <Badge pill bg="danger" className="position-absolute top-0 start-0 translate-middle">
                  {recipe.position}
                </Badge>
              </div>
            </Link>
          </Col>
          <Col xs={9}>
            <Link href={`/receita/${recipe.id}`} className="text-decoration-none text-dark">
              <h3 className="fw-bold small text-truncate mb-1">{recipe.name}</h3>
            </Link>
            <Link href={`/perfil/${recipe.author.replace(/\s+/g, "-").toLowerCase()}`} className="text-decoration-none text-muted">
              <div className="d-flex align-items-center">
                <img 
                  src={recipe.authorAvatar || "/placeholder-user.jpg"} 
                  alt={recipe.author} 
                  className="rounded-circle me-2" 
                  style={{ width: '16px', height: '16px', objectFit: 'cover' }}
                />
                <span className="small text-truncate">{recipe.author}</span>
              </div>
            </Link>
            <div className="d-flex align-items-center mt-1 text-primary">
              <Heart className="me-1" size={12} fill="currentColor" />
              <span className="small fw-medium">{recipe.likes.toLocaleString()}</span>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

// Main component, now using a Bootstrap gap utility
export function RankingList({ recipes }: RankingListProps) {
  return (
    <div className="d-grid gap-3">
      {recipes.map((recipe) => (
        <RecipeListItem key={recipe.id} recipe={recipe} />
      ))}
    </div>
  )
}
