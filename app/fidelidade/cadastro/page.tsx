import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowLeft, User, Mail, Phone, ShieldCheck } from "lucide-react"
import Link from "next/link"

export default function CadastroFidelidade() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-4 pb-16">
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" className="text-amber-600 hover:text-amber-700 hover:bg-amber-50 -ml-3">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
          </Link>
        </div>

        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold text-amber-600 mb-6 flex items-center">
            <User className="mr-2 h-6 w-6 text-amber-500" />
            Cadastro Swift Fidelidade
          </h1>

          <Card className="border-amber-100 shadow-md">
            <CardHeader className="bg-gradient-to-r from-red-500 to-amber-500 text-white rounded-t-lg">
              <CardTitle className="text-xl">Seus Dados</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="cpf" className="block text-sm font-medium text-gray-700 mb-1">
                    CPF
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      id="cpf"
                      placeholder="000.000.000-00"
                      className="pl-10 border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      id="telefone"
                      placeholder="(00) 00000-0000"
                      className="pl-10 border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      className="pl-10 border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="senha" className="block text-sm font-medium text-gray-700 mb-1">
                    Senha
                  </label>
                  <div className="relative">
                    <ShieldCheck className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      id="senha"
                      type="password"
                      placeholder="********"
                      className="pl-10 border-amber-200 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <Link href="/fidelidade/confirmacao-cadastro">
                    <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">Cadastrar</Button>
                  </Link>
                </div>

                <div className="text-center text-sm text-gray-500 pt-2">
                  Já tem cadastro?{" "}
                  <Link href="/fidelidade/login" className="text-amber-600 hover:underline">
                    Faça login
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 bg-amber-50 rounded-lg p-4 border border-amber-100">
            <h3 className="font-medium text-amber-700 mb-2">Como funciona o Swift Fidelidade?</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <div className="bg-amber-100 rounded-full p-1 mr-2 mt-0.5 flex-shrink-0">
                  <div className="bg-amber-500 rounded-full w-2 h-2"></div>
                </div>
                <span className="flex-1">Ganhe 10 pontos a cada R$1 gasto nas lojas Swift</span>
              </li>
              <li className="flex items-start">
                <div className="bg-amber-100 rounded-full p-1 mr-2 mt-0.5">
                  <div className="bg-amber-500 rounded-full w-2 h-2"></div>
                </div>
                <span>Ganhe 500 pontos ao publicar uma receita no app</span>
              </li>
              <li className="flex items-start">
                <div className="bg-amber-100 rounded-full p-1 mr-2 mt-0.5">
                  <div className="bg-amber-500 rounded-full w-2 h-2"></div>
                </div>
                <span>Ganhe 1000 pontos ao organizar um churras com amigos</span>
              </li>
              <li className="flex items-start">
                <div className="bg-amber-100 rounded-full p-1 mr-2 mt-0.5">
                  <div className="bg-amber-500 rounded-full w-2 h-2"></div>
                </div>
                <span>Troque seus pontos por descontos nas lojas físicas Swift</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Navigation />
    </div>
  )
}
