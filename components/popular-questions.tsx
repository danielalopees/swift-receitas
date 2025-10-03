'use client';

import Button from "react-bootstrap/Button";
import { HelpCircle, Flame, Clock } from "lucide-react";
import { useState } from "react";

interface PopularQuestionsProps {
  onQuestionClick: (question: string) => void;
}

export function PopularQuestions({ onQuestionClick }: PopularQuestionsProps) {
  const [activeCategory, setActiveCategory] = useState<string>("populares");

  const categories = [
    { id: "populares", name: "Populares", icon: <HelpCircle size={12} className="me-1" /> },
    { id: "preparo", name: "Preparo", icon: <Flame size={12} className="me-1" /> },
    { id: "tempo", name: "Tempo", icon: <Clock size={12} className="me-1" /> },
  ];

  const questions = {
    populares: ["Qual o melhor ponto para picanha?", "Receita fácil com alcatra?", "Precisa marinar carne de panela?"],
    preparo: ["Como fazer churrasco perfeito?", "Dicas para carne macia no forno?", "Temperos para costela?"],
    tempo: ["Quanto tempo para assar maminha?", "Tempo de preparo para cupim?", "Carne rápida para dia a dia?"],
  };

  return (
    <div className="mt-3">
      <div className="d-flex gap-2 mb-2 overflow-x-auto pb-1">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "danger-subtle" : "outline-secondary"}
            size="sm"
            className="d-flex align-items-center text-nowrap"
            onClick={() => setActiveCategory(category.id)}
          >
            {category.icon}
            {category.name}
          </Button>
        ))}
      </div>

      <div className="d-flex gap-2 overflow-x-auto pb-1">
        {questions[activeCategory as keyof typeof questions].map((question, index) => (
          <Button
            key={index}
            variant="light"
            size="sm"
            className="text-nowrap"
            onClick={() => onQuestionClick(question)}
          >
            {question}
          </Button>
        ))}
      </div>
    </div>
  );
}