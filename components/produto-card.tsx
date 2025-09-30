"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Minus, Plus, Users } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"

interface Produto {
  id: number
  nome: string
  preco: number
  imagem: string
  descricao: string
}

interface Amigo {
  id: number
  nome: string
  avatar: string
  isYou?: boolean
}

interface ProdutoCardProps {
  produto: Produto
  amigos: Amigo[]
}

export function ProdutoCard({ produto, amigos }: ProdutoCardProps) {
  const [quantidade, setQuantidade] = useState(0)
  const [selecionado, setSelecionado] = useState(false)

  const aumentarQuantidade = () => {
    setQuantidade(quantidade + 1)
    if (quantidade === 0) {
      setSelecionado(true)
    }
  }

  const diminuirQuantidade = () => {
    if (quantidade > 0) {
      setQuantidade(quantidade - 1)
      if (quantidade === 1) {
        setSelecionado(false)
      }
    }
  }

  return (
    <Card
      className={`border-red-100 shadow-md overflow-hidden transition-all ${selecionado ? "ring-2 ring-red-400" : ""}`}
    >
      <div className="relative">
        <img src={produto.imagem || "/placeholder.svg"} alt={produto.nome} className="w-full h-48 object-cover" />
        {selecionado && (
          <Badge className="absolute top-2 right-2 bg-red-500">
            {quantidade} {quantidade > 1 ? "unidades" : "unidade"}
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg text-red-600 mb-1">{produto.nome}</h3>
        <p className="text-gray-600 text-sm mb-2">{produto.descricao}</p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-red-600">R$ {produto.preco.toFixed(2).replace(".", ",")}</span>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full border-red-300"
              onClick={diminuirQuantidade}
              disabled={quantidade === 0}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="w-6 text-center">{quantidade}</span>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full border-red-300 bg-red-50"
              onClick={aumentarQuantidade}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-red-50 p-3 flex justify-between items-center">
        {selecionado ? (
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="sm" className="text-red-700 hover:text-red-800 hover:bg-red-100">
                <Users className="h-4 w-4 mr-1" />
                Dividir
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-white">
              <DialogHeader>
                <DialogTitle>Dividir {produto.nome}</DialogTitle>
                <DialogDescription>Selecione quem vai contribuir com este item</DialogDescription>
              </DialogHeader>
              <div className="space-y-3 mt-4">
                {amigos.map((amigo) => (
                  <div key={amigo.id} className="flex items-center space-x-3">
                    <Checkbox id={`amigo-${amigo.id}`} defaultChecked={amigo.isYou} />
                    <label
                      htmlFor={`amigo-${amigo.id}`}
                      className="flex items-center space-x-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={amigo.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{amigo.nome.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span>{amigo.isYou ? "Você" : amigo.nome}</span>
                    </label>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t border-gray-200">
                <div className="flex justify-between text-sm mb-1">
                  <span>Valor total:</span>
                  <span className="font-medium">R$ {(produto.preco * quantidade).toFixed(2).replace(".", ",")}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Valor por pessoa:</span>
                  <span>R$ {((produto.preco * quantidade) / 2).toFixed(2).replace(".", ",")}</span>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ) : (
          <span className="text-xs text-gray-500">Adicione para dividir</span>
        )}
        <span className="text-xs text-gray-500">
          Total: R$ {(produto.preco * quantidade).toFixed(2).replace(".", ",")}
        </span>
      </CardFooter>
    </Card>
  )
}
