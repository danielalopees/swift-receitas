"use client"

import { Card, Button } from "react-bootstrap"
import { Heart, Share2, Calendar } from "lucide-react"
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
        <Button variant="outline-danger" size="sm" className="bg-red-50">
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
        <Card.Img variant="top" src={photo.image || "/placeholder.svg"} alt={photo.title} className="h-40 object-cover" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
          <h3 className="text-white font-bold text-sm line-clamp-1">{photo.title}</h3>
        </div>
      </div>
      <Card.Body className="p-2">
        <div className="flex items-center text-xs text-gray-500">
          <Calendar className="h-3 w-3 mr-1" />
          {photo.date}
        </div>
      </Card.Body>
      <Card.Footer className="p-2 flex justify-between">
        <Button
          variant="link"
          size="sm"
          className={`flex items-center gap-1 p-1 text-decoration-none ${isLiked ? "text-danger" : "text-secondary"}`}
          onClick={handleLike}
        >
          <Heart className={`h-4 w-4 ${isLiked ? "fill-current" : ""}`} />
          {likes}
        </Button>
        <Button variant="link" size="sm" className="flex items-center gap-1 p-1 text-secondary text-decoration-none">
          <Share2 className="h-4 w-4" />
        </Button>
      </Card.Footer>
    </Card>
  )
}
