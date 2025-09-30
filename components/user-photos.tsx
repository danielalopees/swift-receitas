"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Heart, Share2, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface Photo {
  id: number
  title: string
  image: string
  date: string
  likes: number
}

interface UserPhotosProps {
  photos: Photo[]
}

export function UserPhotos({ photos }: UserPhotosProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-md font-medium text-gray-700">Minha Galeria de Fotos</h3>
        <Button variant="outline" size="sm" className="text-red-600 border-red-200 bg-red-50">
          Adicionar Foto
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  )
}

interface PhotoCardProps {
  photo: Photo
}

function PhotoCard({ photo }: PhotoCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [likes, setLikes] = useState(photo.likes)

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
      <div className="relative">
        <img src={photo.image || "/placeholder.svg"} alt={photo.title} className="w-full h-40 object-cover" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
          <h3 className="text-white font-bold text-sm line-clamp-1">{photo.title}</h3>
        </div>
      </div>
      <CardContent className="p-2">
        <div className="flex items-center text-xs text-gray-500">
          <Calendar className="h-3 w-3 mr-1" />
          {photo.date}
        </div>
      </CardContent>
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
