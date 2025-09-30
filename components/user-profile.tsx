import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

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
    <Card className="overflow-hidden">
      <div className="h-24 bg-gradient-to-r from-red-500 to-red-600"></div>
      <CardContent className="pt-0">
        <div className="flex flex-col items-center -mt-12">
          <Avatar className="h-24 w-24 border-4 border-white">
            <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <h3 className="text-xl font-bold mt-2">{user.name}</h3>
          <p className="text-sm text-gray-500">{user.username}</p>
          <p className="text-sm text-gray-700 text-center mt-2 max-w-xs">{user.bio}</p>
        </div>
      </CardContent>
    </Card>
  )
}
