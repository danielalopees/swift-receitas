"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, Trophy } from "lucide-react"

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

export function RankingPodium({ recipes }: RankingPodiumProps) {
  const sortedRecipes = [...recipes].sort((a, b) => a.position - b.position)

  const first = sortedRecipes[0]
  const second = sortedRecipes[1]
  const third = sortedRecipes[2]

  if (!first || !second || !third) {
    return null
  }

  return (
    <div className="flex justify-center items-end gap-2 sm:gap-4 text-center mb-12 sm:mb-16">
      {/* Second Place */}
      <div className="w-1/3">
        <PodiumItem recipe={second} trophyColor="silver" />
        <div className="h-20 bg-gradient-to-b from-slate-300 to-slate-500 rounded-t-lg shadow-lg relative flex items-center justify-center border-t-4 border-slate-200">
          <span className="text-5xl font-black text-white opacity-20">2</span>
        </div>
      </div>

      {/* First Place */}
      <div className="w-1/3">
        <PodiumItem recipe={first} trophyColor="gold" isWinner />
        <div className="h-28 bg-gradient-to-b from-red-500 to-red-700 rounded-t-lg shadow-lg relative flex items-center justify-center border-t-4 border-red-400">
          <span className="text-5xl font-black text-white opacity-20">1</span>
        </div>
      </div>

      {/* Third Place */}
      <div className="w-1/3">
        <PodiumItem recipe={third} trophyColor="bronze" />
        <div className="h-16 bg-gradient-to-b from-amber-600 to-amber-800 rounded-t-lg shadow-lg relative flex items-center justify-center border-t-4 border-amber-500">
          <span className="text-5xl font-black text-white opacity-20">3</span>
        </div>
      </div>
    </div>
  )
}

interface PodiumItemProps {
  recipe: Recipe
  trophyColor: "gold" | "silver" | "bronze"
  isWinner?: boolean
}

function PodiumItem({ recipe, trophyColor, isWinner = false }: PodiumItemProps) {
  const [imgSrc, setImgSrc] = useState(recipe.image || "/placeholder.svg")

  const trophyColors = {
    gold: "text-yellow-500",
    silver: "text-gray-400",
    bronze: "text-amber-700",
  }

  const trophyBg = {
    gold: "bg-yellow-100",
    silver: "bg-gray-100",
    bronze: "bg-amber-100",
  }

  return (
    <Card className={`overflow-hidden ${isWinner ? "border-red-400 shadow-lg" : ""}`}>
      <Link href={`/receita/${recipe.id}`}>
        <div className="relative">
          <Image
            src={imgSrc}
            alt={recipe.name}
            width={200}
            height={200}
            className="w-full aspect-square object-cover"
            onError={() => {
              setImgSrc("/placeholder.svg")
            }}
          />
          <div className={`absolute top-2 right-2 ${trophyBg[trophyColor]} rounded-full p-1 shadow-md z-10`}>
            <Trophy className={`h-5 w-5 ${trophyColors[trophyColor]}`} />
          </div>
          {isWinner && (
            <div className="absolute top-0 left-0 w-full bg-red-500 text-white text-xs font-bold text-center py-1 z-10">
              1º LUGAR
            </div>
          )}
        </div>
      </Link>
      <CardContent className="p-3">
        <Link href={`/receita/${recipe.id}`}>
          <h3 className="font-bold text-sm line-clamp-1">{recipe.name}</h3>
        </Link>
        <Link href={`/perfil/${recipe.author.replace(/\s+/g, "-").toLowerCase()}`}>
          <div className="flex items-center mt-2">
            <Avatar className="h-5 w-5 mr-1">
              <AvatarImage src={recipe.authorAvatar || "/placeholder.svg?height=16&width=16"} />
              <AvatarFallback>{recipe.author.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="text-xs text-gray-600 line-clamp-1">{recipe.author}</span>
          </div>
        </Link>
        <div className="flex items-center mt-2 text-red-500">
          <Heart className="h-3 w-3 fill-current mr-1" />
          <span className="text-xs font-medium">{recipe.likes.toLocaleString()}</span>
        </div>
      </CardContent>
    </Card>
  )
}