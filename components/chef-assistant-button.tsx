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
        className="fixed bottom-20 left-4 z-50 flex items-center justify-center w-12 h-12 rounded bg-white border border-gray-300 text-gray-800 shadow hover:shadow-md transition-all"
      >
        <ChefHat className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>{isOpen && <ChefAssistantChat onClose={() => setIsOpen(false)} />}</AnimatePresence>
    </>
  )
}
