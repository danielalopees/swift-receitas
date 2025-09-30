import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface UserMessageProps {
  message: string
}

export function UserMessage({ message }: UserMessageProps) {
  return (
    <div className="flex items-start justify-end">
      <div className="bg-red-600 text-white rounded-lg p-3 shadow-sm max-w-[85%]">
        <p>{message}</p>
      </div>
      <Avatar className="h-8 w-8 ml-2">
        <AvatarImage src="https://i.pravatar.cc/150?img=5" />
        <AvatarFallback>MS</AvatarFallback>
      </Avatar>
    </div>
  )
}
