"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart } from "lucide-react"

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

function RecipeListItem({ recipe }: { recipe: Recipe }) {
  const [imgSrc, setImgSrc] = useState(recipe.image || "/placeholder.svg")

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-3">
        <div className="flex items-center">
          <div className="flex-shrink-0 mr-3">
            <Link href={`/receita/${recipe.id}`}>
              <div className="relative">
                <Image
                  src={imgSrc}
                  alt={recipe.name}
                  width={64}
                  height={64}
                  className="w-16 h-16 object-cover rounded-md"
                  onError={() => {
                    setImgSrc("/placeholder.svg")
                  }}
                />
                <div className="absolute -top-2 -left-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shadow-md">
                  {recipe.position}
                </div>
              </div>
            </Link>
          </div>
          <div className="flex-1 min-w-0">
            <Link href={`/receita/${recipe.id}`}>
              <h3 className="font-bold text-sm line-clamp-1">{recipe.name}</h3>
            </Link>
            <Link href={`/perfil/${recipe.author.replace(/\s+/g, "-").toLowerCase()}`}>
              <div className="flex items-center mt-1">
                <Avatar className="h-4 w-4 mr-1">
                  <AvatarImage src={recipe.authorAvatar || "/placeholder.svg?height=16&width=16"} />
                  <AvatarFallback>{recipe.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="text-xs text-gray-600 line-clamp-1">{recipe.author}</span>
              </div>
            </Link>
            <div className="flex items-center mt-1 text-red-500">
              <Heart className="h-3 w-3 fill-current mr-1" />
              <span className="text-xs font-medium">{recipe.likes.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function RankingList({ recipes }: RankingListProps) {
  return (
    <div className="space-y-3">
      {recipes.map((recipe) => (
        <RecipeListItem key={recipe.id} recipe={recipe} />
      ))}
    </div>
  )
}