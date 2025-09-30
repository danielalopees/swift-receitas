"use client"

import { Button } from "@/components/ui/button"
import { HelpCircle, Flame, Clock } from "lucide-react"
import { useState } from "react"

export function PopularQuestions() {
  const [activeCategory, setActiveCategory] = useState<string>("populares")

  const categories = [
    { id: "populares", name: "Populares", icon: <HelpCircle className="h-3 w-3 mr-1" /> },
    { id: "preparo", name: "Preparo", icon: <Flame className="h-3 w-3 mr-1" /> },
    { id: "tempo", name: "Tempo", icon: <Clock className="h-3 w-3 mr-1" /> },
  ]

  const questions = {
    populares: ["Qual o melhor ponto para picanha?", "Receita fácil com alcatra?", "Precisa marinar carne de panela?"],
    preparo: ["Como fazer churrasco perfeito?", "Dicas para carne macia no forno?", "Temperos para costela?"],
    tempo: ["Quanto tempo para assar maminha?", "Tempo de preparo para cupim?", "Carne rápida para dia a dia?"],
  }

  return (
    <div className="mt-3">
      <div className="flex gap-2 mb-2 overflow-x-auto pb-1 scrollbar-hide">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant="outline"
            size="sm"
            className={`flex items-center whitespace-nowrap ${
              activeCategory === category.id ? "bg-red-50 text-red-600 border-red-200" : "text-gray-600 border-gray-200"
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.icon}
            {category.name}
          </Button>
        ))}
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {questions[activeCategory as keyof typeof questions].map((question, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            className="bg-gray-50 text-gray-700 border-gray-200 whitespace-nowrap"
          >
            {question}
          </Button>
        ))}
      </div>
    </div>
  )
}
