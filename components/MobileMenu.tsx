"use client"

import type React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Linkedin, Instagram, Github, Globe, Phone, Mail } from "lucide-react"
import { useTheme } from "@/contexts/ThemeContext"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { theme } = useTheme()

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          className={`fixed inset-y-0 right-0 w-64 ${
            theme === "light" ? "bg-white" : "bg-zinc-900"
          } p-6 shadow-lg z-50`}
        >
          <button
            onClick={onClose}
            className={`absolute top-4 right-4 ${
              theme === "light" ? "text-zinc-600" : "text-zinc-400"
            } hover:text-black dark:hover:text-white`}
          >
            <X size={24} />
          </button>
          <nav className="mt-8">
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:your.email@example.com"
                  className={`flex items-center space-x-2 ${
                    theme === "light" ? "text-zinc-600" : "text-zinc-400"
                  } hover:text-black dark:hover:text-white transition-colors`}
                >
                  <Mail size={20} />
                  <span>Email</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+11234567890"
                  className={`flex items-center space-x-2 ${
                    theme === "light" ? "text-zinc-600" : "text-zinc-400"
                  } hover:text-black dark:hover:text-white transition-colors`}
                >
                  <Phone size={20} />
                  <span>Phone</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2 ${
                    theme === "light" ? "text-zinc-600" : "text-zinc-400"
                  } hover:text-black dark:hover:text-white transition-colors`}
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2 ${
                    theme === "light" ? "text-zinc-600" : "text-zinc-400"
                  } hover:text-black dark:hover:text-white transition-colors`}
                >
                  <Instagram size={20} />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2 ${
                    theme === "light" ? "text-zinc-600" : "text-zinc-400"
                  } hover:text-black dark:hover:text-white transition-colors`}
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.yourbusinesswebsite.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2 ${
                    theme === "light" ? "text-zinc-600" : "text-zinc-400"
                  } hover:text-black dark:hover:text-white transition-colors`}
                >
                  <Globe size={20} />
                  <span>Website</span>
                </a>
              </li>
            </ul>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MobileMenu

