"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { X, Send, ChefHat, ThumbsUp, ThumbsDown, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ProductRecommendation } from "@/components/product-recommendation"
import { useCart } from "@/hooks/use-cart"
import { Badge } from "@/components/ui/badge"
import { products } from "@/data/products"
import { useMediaQuery } from "@/hooks/use-media-query"

interface ChefAssistantChatProps {
  onClose: () => void
}

interface Message {
  id: string
  content: string
  sender: "user" | "assistant"
  timestamp: Date
  recommendations?: number[] // IDs dos produtos recomendados
}

export function ChefAssistantChat({ onClose }: ChefAssistantChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Olá! Sou o Swift Chef IA. Posso recomendar produtos e dar dicas de preparo. Como posso ajudar hoje?",
      sender: "assistant",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const { addToCart, items } = useCart()
  const isMobile = useMediaQuery("(max-width: 640px)")

  // Sugestões de perguntas rápidas
  const quickQuestions = [
    "O que dá pra fazer com fraldinha?",
    "Me indica algo pra fazer na churrasqueira com até R$50",
    "Quero carne pra 5 pessoas e cerveja também",
    "Qual a melhor picanha da Swift?",
  ]

  // Rolar para a mensagem mais recente quando novas mensagens são adicionadas
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Focar no input quando o chat é aberto
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return

    // Adicionar mensagem do usuário
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    // Simular digitação do assistente
    setIsTyping(true)

    // Simular resposta do assistente após um pequeno delay
    setTimeout(() => {
      const { response, productIds } = generateResponse(inputValue)
      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        content: response,
        sender: "assistant",
        timestamp: new Date(),
        recommendations: productIds,
      }
      setMessages((prev) => [...prev, assistantMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleQuickQuestion = (question: string) => {
    setInputValue(question)
    // Opcional: enviar a pergunta automaticamente
    setTimeout(() => {
      handleSendMessage()
    }, 100)
  }

  // Função para gerar respostas baseadas em palavras-chave e recomendar produtos
  const generateResponse = (query: string): { response: string; productIds: number[] } => {
    const lowerQuery = query.toLowerCase()
    let productIds: number[] = []

    // Verificar se a pergunta menciona orçamento
    const budgetMatch = lowerQuery.match(/r\$\s*(\d+)/i) || lowerQuery.match(/(\d+)\s*reais/i)
    const budget = budgetMatch ? Number.parseInt(budgetMatch[1]) : null

    // Verificar se a pergunta menciona número de pessoas
    const peopleMatch = lowerQuery.match(/(\d+)\s*pessoas/i) || lowerQuery.match(/para\s*(\d+)/i)
    const peopleCount = peopleMatch ? Number.parseInt(peopleMatch[1]) : null

    // Verificar tipos de carne mencionados
    const hasPicanha = lowerQuery.includes("picanha")
    const hasFraldinha = lowerQuery.includes("fraldinha")
    const hasCostela = lowerQuery.includes("costela")
    const hasChurrasqueira = lowerQuery.includes("churrasqueira") || lowerQuery.includes("churrasco")
    const hasCerveja = lowerQuery.includes("cerveja") || lowerQuery.includes("bebida")

    // Lógica para recomendar produtos baseados na pergunta
    if (hasFraldinha) {
      productIds.push(2) // ID da fraldinha

      if (hasChurrasqueira) {
        productIds.push(7) // Carvão
      }

      if (hasCerveja) {
        productIds.push(8) // Cerveja
      }

      const response = `A fraldinha é um corte versátil e saboroso! Você pode preparar na churrasqueira (7-8 minutos de cada lado para ponto médio) ou no forno (40 minutos a 180°C). 

Tempere com sal grosso, alho, pimenta e um fio de azeite. Deixe descansar por 5 minutos antes de fatiar contra as fibras para garantir maciez.

Selecionei os melhores produtos para você:`

      return { response, productIds }
    } else if (hasPicanha) {
      productIds.push(1) // ID da picanha

      if (hasChurrasqueira) {
        productIds.push(7) // Carvão
      }

      if (hasCerveja) {
        productIds.push(8) // Cerveja
      }

      const response = `A picanha é o corte nobre por excelência! Para um preparo perfeito, tempere apenas com sal grosso e leve à churrasqueira com a gordura para cima. 

Asse em fogo médio por cerca de 15 minutos de cada lado para ponto médio. Deixe descansar por 5 minutos antes de fatiar contra as fibras.

Selecionei a melhor picanha da Swift para você:`

      return { response, productIds }
    } else if (hasCostela) {
      productIds.push(3) // ID da costela

      if (hasChurrasqueira) {
        productIds.push(7) // Carvão
      }

      const response = `Costelas ficam maravilhosas quando cozidas lentamente. Para churrasco, asse por 4-5 horas em fogo baixo. No forno, cubra com papel alumínio e asse a 160°C por 3 horas, depois retire o papel e asse por mais 30 minutos para dourar.

Temperos recomendados: sal, pimenta, alho e ervas como alecrim.

Selecionei este produto para você:`

      return { response, productIds }
    } else if (hasChurrasqueira && budget) {
      // Recomendar produtos para churrasco dentro do orçamento
      let totalBudget = budget
      let response = `Para um churrasco com orçamento de R$${budget}, recomendo:`

      // Adicionar carne principal
      if (totalBudget >= 50) {
        productIds.push(1) // Picanha
        totalBudget -= products.find((p) => p.id === 1)?.price || 0
        response += "\n\n- Uma picanha de primeira qualidade"
      } else {
        productIds.push(2) // Fraldinha (mais barata)
        totalBudget -= products.find((p) => p.id === 2)?.price || 0
        response += "\n\n- Fraldinha (excelente custo-benefício)"
      }

      // Adicionar carvão se ainda tiver orçamento
      if (totalBudget >= 20) {
        productIds.push(7) // Carvão
        totalBudget -= products.find((p) => p.id === 7)?.price || 0
        response += "\n- Carvão para churrasqueira"
      }

      // Adicionar cerveja se ainda tiver orçamento
      if (totalBudget >= 15) {
        productIds.push(8) // Cerveja
        response += "\n- Cerveja para acompanhar"
      }

      response += "\n\nSelecionei os produtos dentro do seu orçamento:"

      return { response, productIds }
    } else if (peopleCount) {
      // Recomendar produtos baseados no número de pessoas
      let response = `Para um churrasco com ${peopleCount} pessoas, recomendo:`

      // Calcular quantidade de carne (aproximadamente 400g por pessoa)
      const totalMeat = peopleCount * 0.4 // em kg

      if (totalMeat <= 1) {
        productIds.push(2) // Fraldinha
        response += "\n\n- Uma peça de fraldinha (aproximadamente 1kg)"
      } else if (totalMeat <= 2) {
        productIds.push(1) // Picanha
        response += "\n\n- Uma picanha premium (aproximadamente 1.2kg)"

        if (totalMeat > 1.2) {
          productIds.push(4) // Linguiça
          response += "\n- Linguiça para complementar"
        }
      } else {
        productIds.push(1) // Picanha
        productIds.push(2) // Fraldinha
        response += "\n\n- Uma picanha premium (aproximadamente 1.2kg)"
        response += "\n- Uma fraldinha (aproximadamente 1kg)"

        if (totalMeat > 2.2) {
          productIds.push(4) // Linguiça
          response += "\n- Linguiça para complementar"
        }
      }

      // Adicionar carvão
      productIds.push(7) // Carvão
      response += "\n- Carvão para churrasqueira"

      // Adicionar cerveja se mencionado
      if (hasCerveja) {
        // Calcular quantidade de cerveja (aproximadamente 2 por pessoa)
        const beerPacks = Math.ceil(peopleCount / 3) // Cada pack serve 3 pessoas
        for (let i = 0; i < beerPacks; i++) {
          productIds.push(8) // Cerveja
        }
        response += `\n- ${beerPacks} pack${beerPacks > 1 ? "s" : ""} de cerveja (2 por pessoa)`
      }

      response += "\n\nSelecionei os melhores produtos para seu grupo:"

      return { response, productIds }
    } else {
      // Resposta genérica com recomendações básicas
      productIds = [1, 7, 8] // Picanha, carvão e cerveja

      const response = `Para um churrasco perfeito, recomendo começar com uma boa picanha, que é um corte nobre e versátil. Tempere apenas com sal grosso para valorizar o sabor natural da carne.

Não se esqueça do carvão de qualidade para garantir temperatura constante e um pack de cerveja gelada para acompanhar!

Selecionei alguns produtos essenciais para você:`

      return { response, productIds }
    }
  }

  return (
    <motion.div
      initial={{ x: isMobile ? 0 : "100%", y: isMobile ? "100%" : 0 }}
      animate={{ x: 0, y: 0 }}
      exit={{ x: isMobile ? 0 : "100%", y: isMobile ? "100%" : 0 }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
      className={`fixed ${
        isMobile ? "inset-0" : "top-0 right-0 w-full sm:w-96 h-full"
      } bg-white shadow-xl flex flex-col z-50`}
    >
      {/* Cabeçalho */}
      <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div className="flex items-center">
          <div className="bg-white/20 p-2 rounded-full mr-3">
            <ChefHat className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-bold">Swift Chef IA</h3>
            <p className="text-xs opacity-90">Seu assistente de compras</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-2 relative">
            <ShoppingCart className="h-5 w-5" />
            {items.length > 0 && (
              <Badge className="absolute -top-2 -right-2 h-4 w-4 p-0 flex items-center justify-center bg-amber-500">
                {items.length}
              </Badge>
            )}
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-white hover:bg-white/20 rounded-full h-10 w-10 flex items-center justify-center"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Área de mensagens */}
      <ScrollArea className="flex-1 p-4 bg-amber-50/30">
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className="space-y-2">
              <div className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                {message.sender === "assistant" && (
                  <Avatar className="h-8 w-8 mr-2 bg-gradient-to-r from-red-500 to-red-600">
                    <AvatarFallback className="bg-gradient-to-r from-red-500 to-red-600 text-white">
                      <ChefHat className="h-5 w-5" />
                    </AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={`max-w-[85%] p-3 rounded-lg ${
                    message.sender === "user" ? "bg-red-600 text-white" : "bg-white shadow-sm border border-gray-100"
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.content}</p>
                  {message.sender === "assistant" && (
                    <div className="flex justify-end mt-2 space-x-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full hover:bg-gray-100 touch-manipulation"
                      >
                        <ThumbsUp className="h-4 w-4 text-gray-400" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full hover:bg-gray-100 touch-manipulation"
                      >
                        <ThumbsDown className="h-4 w-4 text-gray-400" />
                      </Button>
                    </div>
                  )}
                </div>
              </div>

              {/* Recomendações de produtos */}
              {message.recommendations && message.recommendations.length > 0 && (
                <div className="ml-10 space-y-2">
                  {message.recommendations.map((productId) => {
                    const product = products.find((p) => p.id === productId)
                    if (!product) return null
                    return (
                      <ProductRecommendation
                        key={`${message.id}-${productId}`}
                        product={product}
                        onAddToCart={() => addToCart(product)}
                      />
                    )
                  })}
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <Avatar className="h-8 w-8 mr-2 bg-gradient-to-r from-red-500 to-red-600">
                <AvatarFallback className="bg-gradient-to-r from-red-500 to-red-600 text-white">
                  <ChefHat className="h-5 w-5" />
                </AvatarFallback>
              </Avatar>
              <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-150"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-300"></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </ScrollArea>

      {/* Sugestões de perguntas rápidas */}
      <div className="p-3 border-t border-gray-100 bg-white">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {quickQuestions.map((question, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              onClick={() => handleQuickQuestion(question)}
              className="whitespace-nowrap text-xs border-red-200 text-red-600 hover:bg-red-50 touch-manipulation min-h-[40px]"
            >
              {question}
            </Button>
          ))}
        </div>
      </div>

      {/* Campo de entrada */}
      <div className="p-3 border-t border-gray-200 bg-white">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSendMessage()
          }}
          className="flex gap-2"
        >
          <Input
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Pergunte sobre produtos ou receitas..."
            className="border-red-200 focus:border-red-500 focus:ring-red-500 min-h-[44px]"
          />
          <Button
            type="submit"
            className="bg-red-600 hover:bg-red-700 px-3 min-h-[44px] min-w-[44px] touch-manipulation"
            disabled={inputValue.trim() === ""}
          >
            <Send className="h-5 w-5" />
          </Button>
        </form>
      </div>
    </motion.div>
  )
}
