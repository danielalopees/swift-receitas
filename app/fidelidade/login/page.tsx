import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowLeft, User, ShieldCheck } from "lucide-react"
import Link from "next/link"

export default function LoginFidelidade() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-4 pb-20">
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
            Login Swift Fidelidade
          </h1>

          <Card className="border-amber-100 shadow-md">
            <CardHeader className="bg-gradient-to-r from-red-500 to-amber-500 text-white rounded-t-lg">
              <CardTitle className="text-xl">Acesse sua Conta</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="cpf" className="block text-sm font-medium text-gray-700 mb-1">
                    CPF ou E-mail
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      id="cpf"
                      placeholder="000.000.000-00 ou seu@email.com"
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
                  <div className="text-right mt-1">
                    <Link href="#" className="text-sm text-amber-600 hover:underline">
                      Esqueceu a senha?
                    </Link>
                  </div>
                </div>

                <div className="pt-4">
                  <Link href="/fidelidade/dashboard">
                    <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">Entrar</Button>
                  </Link>
                </div>

                <div className="text-center text-sm text-gray-500 pt-2">
                  Ainda não tem cadastro?{" "}
                  <Link href="/fidelidade/cadastro" className="text-amber-600 hover:underline">
                    Cadastre-se
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Navigation />
    </div>
  )
}
