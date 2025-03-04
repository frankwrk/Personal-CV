"use client"

import type React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useTheme } from "@/contexts/ThemeContext"

interface ContactFormModalProps {
  isOpen: boolean
  onClose: () => void
}

const ContactFormModal: React.FC<ContactFormModalProps> = ({ isOpen, onClose }) => {
  const { theme } = useTheme()

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <Card className={theme === "light" ? "bg-white" : "bg-zinc-900 border-zinc-800"}>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">Contact Me</h2>
                  <button
                    onClick={onClose}
                    className={`${theme === "light" ? "text-zinc-600" : "text-zinc-400"} hover:text-black dark:hover:text-white`}
                  >
                    <X size={24} />
                  </button>
                </div>
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className={`block text-sm font-medium mb-1 ${theme === "light" ? "text-zinc-700" : "text-zinc-300"}`}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={`w-full px-3 py-2 rounded-md ${
                        theme === "light"
                          ? "bg-zinc-100 border-zinc-300 text-black"
                          : "bg-zinc-800 border-zinc-700 text-white"
                      }`}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className={`block text-sm font-medium mb-1 ${theme === "light" ? "text-zinc-700" : "text-zinc-300"}`}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`w-full px-3 py-2 rounded-md ${
                        theme === "light"
                          ? "bg-zinc-100 border-zinc-300 text-black"
                          : "bg-zinc-800 border-zinc-700 text-white"
                      }`}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className={`block text-sm font-medium mb-1 ${theme === "light" ? "text-zinc-700" : "text-zinc-300"}`}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className={`w-full px-3 py-2 rounded-md ${
                        theme === "light"
                          ? "bg-zinc-100 border-zinc-300 text-black"
                          : "bg-zinc-800 border-zinc-700 text-white"
                      }`}
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className={`w-full font-medium py-2 px-4 rounded-md transition-colors ${
                      theme === "light"
                        ? "bg-black text-white hover:bg-zinc-800"
                        : "bg-white text-black hover:bg-zinc-200"
                    }`}
                  >
                    Send Message
                  </button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ContactFormModal

