import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Home, User } from "lucide-react"
import Link from "next/link"

export default function ConfirmacaoCadastro() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-4 pb-20 flex items-center justify-center">
        <div className="max-w-md w-full">
          <Card className="border-green-100 shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-teal-500 h-2"></div>
            <CardContent className="pt-8 pb-6 px-6 text-center">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-10 w-10 text-green-500" />
              </div>
              <h1 className="text-2xl font-bold text-green-600 mb-2">Cadastro Realizado!</h1>
              <p className="text-gray-600 mb-6">
                Seu cadastro no Swift Fidelidade foi realizado com sucesso. Você já pode começar a acumular pontos!
              </p>

              <div className="space-y-3">
                <Link href="/fidelidade/dashboard">
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                    <User className="mr-2 h-4 w-4" />
                    Acessar Minha Conta
                  </Button>
                </Link>
                <Link href="/">
                  <Button variant="outline" className="w-full border-gray-300 text-gray-700 bg-transparent">
                    <Home className="mr-2 h-4 w-4" />
                    Voltar para Início
                  </Button>
                </Link>
              </div>

              <div className="mt-8 bg-amber-50 rounded-lg p-4 text-left">
                <h3 className="font-medium text-amber-700 mb-2 text-sm">Bônus de boas-vindas!</h3>
                <p className="text-sm text-gray-600">
                  Você ganhou <span className="font-bold text-amber-600">500 pontos</span> por se cadastrar no Swift
                  Fidelidade. Continue acumulando pontos publicando receitas e organizando churrascos!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Navigation />
    </div>
  )
}
