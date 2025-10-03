'use client'

import { useState } from "react"
import Link from "next/link"
import { Card, Badge, Button } from "react-bootstrap"
import { Heart, Share2, Tag } from "lucide-react"

interface RecipeCardProps {
  recipe: {
    id: number
    name: string
    image: string
    author: string
    authorAvatar?: string
    swiftProducts: string[]
    likes: number
    isLiked: boolean
  }
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  const [isLiked, setIsLiked] = useState(recipe.isLiked)
  const [likes, setLikes] = useState(recipe.likes)

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikes(isLiked ? likes - 1 : likes + 1)
  }

  return (
    <Card className="h-100 shadow-sm border-primary-subtle">
      <div className="position-relative">
        <Link href={`/receita/${recipe.id}`}>
          <Card.Img 
            variant="top" 
            src={recipe.image || "/placeholder.svg"} 
            alt={recipe.name} 
            loading="lazy"
            style={{ height: '220px', objectFit: 'cover' }}
          />
          <div 
            className="position-absolute bottom-0 start-0 end-0 p-3 text-white"
            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }}
          >
            <Card.Title as="h3" className="fs-5 fw-bold">{recipe.name}</Card.Title>
          </div>
        </Link>
      </div>
      <Card.Body className="p-3">
        <div className="d-flex align-items-center mb-3">
          <Link href={`/perfil/${recipe.author.replace(/\s+/g, "-").toLowerCase()}`} className="d-flex align-items-center text-decoration-none text-muted">
            <img
              src={recipe.authorAvatar || "/placeholder-user.jpg"}
              alt={recipe.author}
              className="rounded-circle me-2"
              style={{ width: '24px', height: '24px', objectFit: 'cover' }}
            />
            <span className="small">{recipe.author}</span>
          </Link>
        </div>
        <div className="d-flex flex-wrap gap-1 mb-2">
          {recipe.swiftProducts.map((product, index) => (
            <Badge key={index} pill bg="primary-subtle" text="primary-emphasis" className="d-flex align-items-center gap-1 fw-normal">
              <Tag size={12} />
              {product}
            </Badge>
          ))}
        </div>
      </Card.Body>
      <Card.Footer className="p-3 pt-0 bg-transparent border-top-0 d-flex justify-content-between">
        <Button
          variant="link"
          size="sm"
          className={`text-decoration-none d-flex align-items-center gap-1 ${isLiked ? "text-primary" : "text-secondary"}`}
          onClick={handleLike}
        >
          <Heart size={16} fill={isLiked ? "currentColor" : "none"} />
          {likes}
        </Button>
        <Button
          variant="link"
          size="sm"
          className="text-decoration-none text-secondary d-flex align-items-center gap-1"
        >
          <Share2 size={16} />
          Compartilhar
        </Button>
      </Card.Footer>
    </Card>
  )
}