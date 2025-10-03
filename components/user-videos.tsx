"use client"

import { Card, Button } from "react-bootstrap"
import { Play, Eye, Share2, Calendar } from "lucide-react"
import { useState } from "react"

interface Video {
  id: number
  title: string
  thumbnail: string
  duration: string
  date: string
  views: number
}

interface UserVideosProps {
  videos: Video[]
}

export function UserVideos({ videos }: UserVideosProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-md font-medium text-gray-700">Meus Vídeos</h3>
        <Button variant="outline-danger" size="sm" className="bg-red-50">
          Adicionar Vídeo
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  )
}

interface VideoCardProps {
  video: Video
}

function VideoCard({ video }: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    setIsPlaying(!isPlaying)
    // Aqui você implementaria a lógica para reproduzir o vídeo
  }

  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <Card.Img variant="top" src={video.thumbnail || "/placeholder.svg"} alt={video.title} className="h-48 object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Button
            variant="link"
            className="h-12 w-12 rounded-full bg-danger bg-opacity-75 text-white hover:bg-danger hover:scale-105 transition-all"
            onClick={handlePlay}
          >
            <Play className="h-6 w-6 fill-current" />
          </Button>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </div>
      </div>
      <Card.Body className="p-3">
        <h3 className="font-bold text-sm line-clamp-2 mb-1">{video.title}</h3>
        <div className="flex items-center text-xs text-gray-500">
          <Calendar className="h-3 w-3 mr-1" />
          {video.date}
        </div>
      </Card.Body>
      <Card.Footer className="p-2 pt-0 flex justify-between">
        <div className="flex items-center text-xs text-gray-600">
          <Eye className="h-3 w-3 mr-1" />
          {video.views} visualizações
        </div>
        <Button variant="link" size="sm" className="flex items-center gap-1 p-1 text-secondary text-decoration-none">
          <Share2 className="h-4 w-4" />
        </Button>
      </Card.Footer>
    </Card>
  )
}
