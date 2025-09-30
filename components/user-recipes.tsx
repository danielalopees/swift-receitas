"use client"

import { Card, CardFooter } from "@/components/ui/card"
import { Heart, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"

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

export function UserRecipes({ recipes }: UserRecipesProps) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  )
}

interface RecipeCardProps {
  recipe: Recipe
}

function RecipeCard({ recipe }: RecipeCardProps) {
  const [isLiked, setIsLiked] = useState(recipe.isLiked)
  const [likes, setLikes] = useState(recipe.likes)

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1)
    } else {
      setLikes(likes + 1)
    }
    setIsLiked(!isLiked)
  }

  return (
    <Card className="overflow-hidden">
      <Link href={`/receita/${recipe.id}`}>
        <div className="relative">
          <img src={recipe.image || "/placeholder.svg"} alt={recipe.name} className="w-full h-32 object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
            <h3 className="text-white font-bold text-sm line-clamp-1">{recipe.name}</h3>
          </div>
        </div>
      </Link>
      <CardFooter className="p-2 flex justify-between">
        <Button
          variant="ghost"
          size="sm"
          className={`flex items-center gap-1 p-1 ${isLiked ? "text-red-500" : "text-gray-600"}`}
          onClick={handleLike}
        >
          <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
          {likes}
        </Button>
        <Button variant="ghost" size="sm" className="flex items-center gap-1 p-1 text-gray-600">
          <Share2 className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}
