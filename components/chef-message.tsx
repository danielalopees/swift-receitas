import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ChefHat } from "lucide-react"

interface ChefMessageProps {
  message: string
  isIntro?: boolean
}

export function ChefMessage({ message, isIntro = false }: ChefMessageProps) {
  return (
    <div className="flex items-start">
      <Avatar className="h-8 w-8 mr-2 bg-gradient-to-r from-red-500 to-red-600">
        <AvatarFallback className="bg-gradient-to-r from-red-500 to-red-600 text-white">
          <ChefHat className="h-5 w-5" />
        </AvatarFallback>
      </Avatar>
      <div className={`bg-white rounded-lg p-3 shadow-sm max-w-[85%] ${isIntro ? "bg-red-50" : ""}`}>
        <p className="text-gray-800">{message}</p>
      </div>
    </div>
  )
}
