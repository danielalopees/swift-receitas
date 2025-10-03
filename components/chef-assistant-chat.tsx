"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { X, Send, ChefHat, ThumbsUp, ThumbsDown, ShoppingCart } from "lucide-react"
import { Button, Form, Badge } from "react-bootstrap"
import { ProductRecommendation } from "@/components/product-recommendation"
import { useCart } from "@/hooks/use-cart"
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

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    setIsTyping(true)

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
    setTimeout(() => {
      handleSendMessage()
    }, 100)
  }

  const generateResponse = (query: string): { response: string; productIds: number[] } => {
    const lowerQuery = query.toLowerCase()
    let productIds: number[] = []
    let response = "Encontrei estes produtos para você:"

    const budgetMatch = lowerQuery.match(/r\$\s*(\d+)/i) || lowerQuery.match(/(\d+)\s*reais/i)
    const budget = budgetMatch ? Number.parseInt(budgetMatch[1]) : null

    const peopleMatch = lowerQuery.match(/(\d+)\s*pessoas/i) || lowerQuery.match(/para\s*(\d+)/i)
    const peopleCount = peopleMatch ? Number.parseInt(peopleMatch[1]) : null

    const hasPicanha = lowerQuery.includes("picanha")
    const hasFraldinha = lowerQuery.includes("fraldinha")
    const hasCostela = lowerQuery.includes("costela")
    const hasChurrasqueira = lowerQuery.includes("churrasqueira") || lowerQuery.includes("churrasco")
    const hasCerveja = lowerQuery.includes("cerveja") || lowerQuery.includes("bebida")

    if (hasFraldinha) {
      productIds.push(2)
      if (hasChurrasqueira) productIds.push(7)
      if (hasCerveja) productIds.push(8)
      return { response, productIds }
    } else if (hasPicanha) {
      productIds.push(1)
      if (hasChurrasqueira) productIds.push(7)
      if (hasCerveja) productIds.push(8)
      return { response, productIds }
    } else if (hasCostela) {
      productIds.push(3)
      if (hasChurrasqueira) productIds.push(7)
      return { response, productIds }
    } else if (hasChurrasqueira && budget) {
      let totalBudget = budget
      if (totalBudget >= 50) {
        productIds.push(1)
        totalBudget -= products.find((p) => p.id === 1)?.price || 0
      } else {
        productIds.push(2)
        totalBudget -= products.find((p) => p.id === 2)?.price || 0
      }
      if (totalBudget >= 20) productIds.push(7)
      if (totalBudget >= 15) productIds.push(8)
      return { response: `Encontrei produtos para seu churrasco com orçamento de R$${budget}:`, productIds }
    } else if (peopleCount) {
      const totalMeat = peopleCount * 0.4
      if (totalMeat <= 1) {
        productIds.push(2)
      } else if (totalMeat <= 2) {
        productIds.push(1)
        if (totalMeat > 1.2) productIds.push(4)
      } else {
        productIds.push(1)
        productIds.push(2)
        if (totalMeat > 2.2) productIds.push(4)
      }
      productIds.push(7)
      if (hasCerveja) {
        const beerPacks = Math.ceil(peopleCount / 3)
        for (let i = 0; i < beerPacks; i++) productIds.push(8)
      }
      return { response: `Encontrei produtos para um churrasco de ${peopleCount} pessoas:`, productIds }
    } else {
      productIds = [1, 7, 8]
      return { response: "Aqui estão alguns produtos essenciais para um ótimo churrasco:", productIds }
    }
  }

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative bg-white shadow-xl flex flex-col z-50 rounded-lg w-full max-w-lg max-h-[90vh] overflow-hidden"
      >
        {/* Cabeçalho */}
        <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-red-500 to-red-600 text-white flex-shrink-0">
          <div className="flex items-center">
            <div className="bg-white/20 p-2 rounded-full mr-3">
              <ChefHat className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-base">Swift Chef IA</h3>
              <p className="text-xs opacity-90">Seu assistente de compras</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mr-2 relative">
              <ShoppingCart className="h-5 w-5" />
              {items.length > 0 && (
                <Badge bg="warning" className="absolute -top-2 -right-2 h-4 w-4 p-0 flex items-center justify-center">
                  {items.length}
                </Badge>
              )}
            </div>
            <Button
              variant="link"
              onClick={onClose}
              className="text-white hover:bg-white/20 rounded-full h-10 w-10 flex items-center justify-center"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Área de mensagens */}
        <div className="flex-1 p-4 bg-gray-50 overflow-y-auto">
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className="space-y-2">
                <div className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  {message.sender === "assistant" && (
                    <div className="h-8 w-8 mr-2 rounded-full flex items-center justify-center bg-gradient-to-r from-red-500 to-red-600 text-white">
                      <ChefHat className="h-5 w-5" />
                    </div>
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
                          variant="link"
                          className="h-8 w-8 rounded-full hover:bg-gray-100 touch-manipulation p-0 d-flex align-items-center justify-content-center"
                        >
                          <ThumbsUp className="h-4 w-4 text-gray-400" />
                        </Button>
                        <Button
                          variant="link"
                          className="h-8 w-8 rounded-full hover:bg-gray-100 touch-manipulation p-0 d-flex align-items-center justify-content-center"
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
                <div className="h-8 w-8 mr-2 rounded-full flex items-center justify-center bg-gradient-to-r from-red-500 to-red-600 text-white">
                  <ChefHat className="h-5 w-5" />
                </div>
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
        </div>

        {/* Sugestões de perguntas rápidas */}
        <div className="p-3 border-t border-gray-100 bg-white flex-shrink-0">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {quickQuestions.map((question, index) => (
              <Button
                key={index}
                variant="outline-danger"
                size="sm"
                onClick={() => handleQuickQuestion(question)}
                className="whitespace-nowrap text-xs hover:bg-red-50 touch-manipulation min-h-[40px]"
              >
                {question}
              </Button>
            ))}
          </div>
        </div>

        {/* Campo de entrada */}
        <div className="p-3 border-t border-gray-200 bg-white flex-shrink-0">
          <Form
            onSubmit={(e) => {
              e.preventDefault()
              handleSendMessage()
            }}
            className="flex gap-2"
          >
            <Form.Control
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Pergunte sobre produtos ou receitas..."
              className="border-red-200 focus:border-red-500 focus:ring-red-500 min-h-[44px]"
              as="input"
            />
            <Button
              type="submit"
              variant="danger"
              className="px-3 min-h-[44px] min-w-[44px] touch-manipulation flex items-center justify-center"
              disabled={inputValue.trim() === ""}
            >
              <Send className="h-5 w-5" />
            </Button>
          </Form>
        </div>
      </motion.div>
    </div>
  )
}
