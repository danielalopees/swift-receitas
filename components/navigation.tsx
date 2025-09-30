"use client"

import { Home, Search, PlusCircle, Award, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <nav className="sticky bottom-0 z-50 bg-white border-t border-gray-200 shadow-lg w-full">
      <div className="container mx-auto px-2 py-2">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex-1">
            <Button
              variant="ghost"
              size="icon"
              className={`w-full flex flex-col items-center ${isActive("/") ? "text-red-500" : "text-gray-600"}`}
            >
              <Home className="h-5 w-5" />
              <span className="text-xs mt-1">Início</span>
            </Button>
          </Link>

          <Link href="/busca" className="flex-1">
            <Button
              variant="ghost"
              size="icon"
              className={`w-full flex flex-col items-center ${isActive("/busca") ? "text-red-500" : "text-gray-600"}`}
            >
              <Search className="h-5 w-5" />
              <span className="text-xs mt-1">Buscar</span>
            </Button>
          </Link>

          <Link href="/nova-receita" className="flex-1 flex justify-center">
            <Button
              variant="default"
              size="icon"
              className="flex flex-col items-center bg-red-500 hover:bg-red-600 rounded-full h-12 w-12"
            >
              <PlusCircle className="h-6 w-6" />
            </Button>
          </Link>

          <Link href="/ranking" className="flex-1">
            <Button
              variant="ghost"
              size="icon"
              className={`w-full flex flex-col items-center ${isActive("/ranking") ? "text-red-500" : "text-gray-600"}`}
            >
              <Award className="h-5 w-5" />
              <span className="text-xs mt-1">Ranking</span>
            </Button>
          </Link>

          <Link href="/perfil" className="flex-1">
            <Button
              variant="ghost"
              size="icon"
              className={`w-full flex flex-col items-center ${isActive("/perfil") ? "text-red-500" : "text-gray-600"}`}
            >
              <User className="h-5 w-5" />
              <span className="text-xs mt-1">Perfil</span>
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
