"use client"

import type React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useTheme } from "@/contexts/ThemeContext"

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    id: number
    title: string
    category: string
    image: string
    description: string
    challenge?: string
    solution?: string
    process?: string
    outcome?: string
  }
  onNextProject: () => void
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project, onNextProject }) => {
  const { theme } = useTheme()

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="w-full max-w-4xl"
          onClick={(e) => e.stopPropagation()}
        >
          <Card className={theme === "light" ? "bg-white" : "bg-zinc-900 border-zinc-800"}>
            <CardContent className="p-0">
              <div className="relative h-64 md:h-96">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
                  <p className={theme === "light" ? "text-zinc-600" : "text-zinc-400"}>{project.category}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Overview</h3>
                  <p className={theme === "light" ? "text-zinc-700" : "text-zinc-300"}>{project.description}</p>
                </div>
                {project.challenge && (
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Challenge</h3>
                    <p className={theme === "light" ? "text-zinc-700" : "text-zinc-300"}>{project.challenge}</p>
                  </div>
                )}
                {project.solution && (
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Solution</h3>
                    <p className={theme === "light" ? "text-zinc-700" : "text-zinc-300"}>{project.solution}</p>
                  </div>
                )}
                {project.process && (
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Process</h3>
                    <p className={theme === "light" ? "text-zinc-700" : "text-zinc-300"}>{project.process}</p>
                  </div>
                )}
                {project.outcome && (
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Outcome</h3>
                    <p className={theme === "light" ? "text-zinc-700" : "text-zinc-300"}>{project.outcome}</p>
                  </div>
                )}
                <div className={`pt-4 border-t ${theme === "light" ? "border-zinc-200" : "border-zinc-800"}`}>
                  <button
                    onClick={onNextProject}
                    className={`flex items-center ${
                      theme === "light" ? "text-zinc-700 hover:text-black" : "text-zinc-300 hover:text-white"
                    } transition-colors`}
                  >
                    Next Project
                    <ArrowRight size={20} className="ml-2" />
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ProjectModal

