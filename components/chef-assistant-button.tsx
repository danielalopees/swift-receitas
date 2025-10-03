"use client"

import { useState, useEffect } from "react"
import { ChefHat } from "lucide-react"
import { ChefAssistantChat } from "@/components/chef-assistant-chat"
import { motion, AnimatePresence } from "framer-motion"

export function ChefAssistantButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [isFirstLoad, setIsFirstLoad] = useState(true)

  // Pequena animação de entrada após o carregamento inicial
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFirstLoad(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          y: isFirstLoad ? [0, -10, 0] : 0,
        }}
        transition={{
          duration: 0.5,
          y: { delay: 0.5, duration: 1.5, repeat: isFirstLoad ? 1 : 0 },
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 right-4 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg hover:shadow-xl transition-all"
      >
        <ChefHat className="h-7 w-7" />
      </motion.button>

      <AnimatePresence>{isOpen && <ChefAssistantChat onClose={() => setIsOpen(false)} />}</AnimatePresence>
    </>
  )
}
