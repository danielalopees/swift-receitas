"use client"

import { Heart, Share2, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import Link from "next/link"

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
    if (isLiked) {
      setLikes(likes - 1)
    } else {
      setLikes(likes + 1)
    }
    setIsLiked(!isLiked)
  }

  return (
    <Card className="overflow-hidden border-red-100 shadow-md">
      <Link href={`/receita/${recipe.id}`}>
        <div className="relative">
          <img
            src={recipe.image || "/placeholder.svg"}
            alt={recipe.name}
            className="w-full h-48 sm:h-64 object-cover"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
            <h3 className="text-white font-bold text-lg">{recipe.name}</h3>
          </div>
        </div>
      </Link>
      <CardContent className="p-3">
        <div className="flex items-center mb-3">
          <Link href={`/perfil/${recipe.author.replace(/\s+/g, "-").toLowerCase()}`}>
            <div className="flex items-center">
              <Avatar className="h-6 w-6 mr-2">
                <AvatarImage src={recipe.authorAvatar || "/placeholder.svg?height=24&width=24"} />
                <AvatarFallback>{recipe.author.charAt(0)}</AvatarFallback>
              </Avatar>
              <span className="text-sm text-gray-600">{recipe.author}</span>
            </div>
          </Link>
        </div>
        <div className="flex flex-wrap gap-1 mb-2">
          {recipe.swiftProducts.map((product, index) => (
            <Badge
              key={index}
              variant="outline"
              className="flex items-center gap-1 bg-red-50 text-red-600 border-red-200"
            >
              <Tag className="h-3 w-3" />
              {product}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-3 pt-0 flex justify-between">
        <Button
          variant="ghost"
          size="sm"
          className={`flex items-center gap-1 min-h-[40px] touch-manipulation ${isLiked ? "text-red-500" : "text-gray-600"}`}
          onClick={handleLike}
        >
          <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
          {likes}
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center gap-1 text-gray-600 min-h-[40px] touch-manipulation"
        >
          <Share2 className="h-4 w-4" />
          Compartilhar
        </Button>
      </CardFooter>
    </Card>
  )
}
