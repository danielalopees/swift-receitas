'use client'

import { useState } from "react"
import Link from "next/link"
import { Row, Col, Card, Button } from "react-bootstrap"
import { Heart, Share2 } from "lucide-react"

// Interfaces remain the same
interface Recipe {
  id: number
  name: string
  image: string
  likes: number
  isLiked: boolean
}

interface UserRecipesProps {
  recipes: Recipe[]
}

// Main component now uses Bootstrap grid
export function UserRecipes({ recipes }: UserRecipesProps) {
  return (
    <Row className="g-3">
      {recipes.map((recipe) => (
        <Col key={recipe.id} xs={6} md={4} lg={3}>
          <RecipeCard recipe={recipe} />
        </Col>
      ))}
    </Row>
  )
}

// Local RecipeCard component converted to Bootstrap
interface RecipeCardProps {
  recipe: Recipe
}

function RecipeCard({ recipe }: RecipeCardProps) {
  const [isLiked, setIsLiked] = useState(recipe.isLiked)
  const [likes, setLikes] = useState(recipe.likes)

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikes(isLiked ? likes - 1 : likes + 1)
  }

  return (
    <Card className="h-100 shadow-sm overflow-hidden">
      <Link href={`/receita/${recipe.id}`} className="text-decoration-none">
        <div className="position-relative">
            <Card.Img 
                variant="top" 
                src={recipe.image || "/placeholder.svg"} 
                alt={recipe.name} 
                style={{ height: '128px', objectFit: 'cover' }}
            />
            <div 
                className="position-absolute bottom-0 start-0 end-0 p-2 text-white"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}
            >
                <h3 className="fw-bold small text-truncate mb-0">{recipe.name}</h3>
            </div>
        </div>
      </Link>
      <Card.Footer className="p-2 d-flex justify-content-between align-items-center">
        <Button
          variant="link"
          size="sm"
          className={`text-decoration-none d-flex align-items-center p-1 ${isLiked ? "text-primary" : "text-secondary"}`}
          onClick={handleLike}
        >
          <Heart size={16} fill={isLiked ? "currentColor" : "none"} />
          <span className="small ms-1">{likes}</span>
        </Button>
        <Button variant="link" size="sm" className="text-secondary p-1">
          <Share2 size={16} />
        </Button>
      </Card.Footer>
    </Card>
  )
}