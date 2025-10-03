'use client'
import { useState, useRef, useEffect } from "react";
import { Header } from "@/components/header";
import { Navigation } from "@/components/navigation";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { ChefHat, Send } from "lucide-react";
import { ChefMessage } from "@/components/chef-message";
import { UserMessage } from "@/components/user-message";
import { ProductRecommendation } from "@/components/product-recommendation";
import { useCart } from "@/hooks/use-cart";
import { products } from "@/data/products";
import type { Product } from "@/types/product";

// Tipos para as mensagens
interface Message {
  sender: 'user' | 'chef';
  text: string;
  product?: Product;
}

export default function ChefIA() {
  const { addToCart } = useCart();
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "chef",
      text: "Olá! Sou seu assistente de churrasco. Peça uma recomendação e eu te ajudo a escolher a melhor carne para seu evento!",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === "" || isLoading) return;

    const userMessage: Message = { sender: "user", text: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Simula a resposta do Chef IA com um produto
    setTimeout(() => {
      // Pega um produto aleatório que seja uma carne
      const meatProducts = products.filter(p => p.category === 'Carnes');
      const randomProduct = meatProducts[Math.floor(Math.random() * meatProducts.length)];

      const chefResponse: Message = {
        sender: "chef",
        text: `Para sua busca por "${inputValue}", encontrei uma ótima opção para você. Que tal esta?`,
        product: randomProduct,
      };
      setMessages((prev) => [...prev, chefResponse]);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="d-flex flex-column vh-100">
      <Header />
      <main className="flex-grow-1 d-flex flex-column bg-light-subtle">
        <Container className="py-4 d-flex flex-column flex-grow-1">
          <div className="d-flex align-items-center mb-4">
            <div className="bg-danger bg-gradient p-3 rounded-circle me-3">
              <ChefHat className="text-white" size={24} />
            </div>
            <div>
              <h1 className="h4 fw-bold text-dark">Swift Chef IA</h1>
              <p className="text-muted mb-0">Seu assistente culinário para carnes</p>
            </div>
          </div>

          <Card className="flex-grow-1 border-danger-subtle shadow-sm d-flex flex-column">
            <Card.Body className="flex-grow-1 p-4 overflow-auto">
              <div className="d-flex flex-column gap-3">
                {messages.map((msg, index) => {
                  if (msg.sender === 'user') {
                    return <UserMessage key={index} message={msg.text} />;
                  }
                  // Mensagem do Chef
                  return (
                    <div key={index}>
                      <ChefMessage message={msg.text} />
                      {msg.product && (
                        <div className="mt-2 ms-5">
                           <ProductRecommendation product={msg.product} onAddToCart={() => addToCart(msg.product!)} />
                        </div>
                      )}
                    </div>
                  );
                })}
                {isLoading && (
                  <div className="d-flex align-items-center gap-2" style={{ marginLeft: '48px' }}>
                    <span className="spinner-grow spinner-grow-sm bg-danger"></span>
                    <span className="text-muted small">Swift Chef está digitando...</span>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>
            </Card.Body>

            <Card.Footer className="p-3 bg-white border-top">
              <Form onSubmit={handleSendMessage} className="d-flex gap-2">
                <Form.Control
                  type="text"
                  placeholder="Ex: Quero uma carne macia para a grelha"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  disabled={isLoading}
                  className="border-danger-subtle"
                />
                <Button variant="danger" type="submit" disabled={isLoading}>
                  <Send size={20} />
                </Button>
              </Form>
            </Card.Footer>
          </Card>
        </Container>
      </main>
      <Navigation />
    </div>
  );
}