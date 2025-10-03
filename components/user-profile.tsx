'use client'

import { Card, Image } from "react-bootstrap"

interface User {
  id: number
  name: string
  username: string
  avatar: string
  bio: string
}

interface UserProfileProps {
  user: User
}

export function UserProfile({ user }: UserProfileProps) {
  return (
    <Card className="text-center shadow-sm">
      <div className="bg-gradient bg-primary" style={{ height: '96px' }}></div>
      <Card.Body className="px-3">
        <Image
          src={user.avatar || "/placeholder-user.jpg"}
          alt={user.name}
          roundedCircle
          className="border border-4 border-white mx-auto d-block"
          style={{ width: '96px', height: '96px', marginTop: '-48px', objectFit: 'cover' }}
        />
        <Card.Title as="h3" className="fs-4 fw-bold mt-2">{user.name}</Card.Title>
        <Card.Text className="small text-muted">{user.username}</Card.Text>
        <Card.Text className="small text-secondary mt-2 mx-auto" style={{ maxWidth: '320px' }}>
          {user.bio}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}