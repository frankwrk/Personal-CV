"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useTheme } from "@/contexts/ThemeContext"

interface Testimonial {
  id: number
  name: string
  company: string
  text: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jane Doe",
    company: "Tech Innovators Inc.",
    text: "Francisc's redesign of our e-commerce platform resulted in a 40% increase in conversions. His attention to detail and user-centric approach made all the difference.",
  },
  {
    id: 2,
    name: "John Smith",
    company: "HealthTech Solutions",
    text: "Working with Francisc on our health tracking app was a game-changer. His intuitive design choices led to a significant increase in user engagement and retention.",
  },
  {
    id: 3,
    name: "Emily Brown",
    company: "EcoPackage Co.",
    text: "Francisc's innovative approach to our packaging design not only aligned perfectly with our brand values but also resonated strongly with our environmentally conscious customers.",
  },
]

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { theme } = useTheme()

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <Card className={`${theme === "light" ? "bg-zinc-100" : "bg-zinc-900/50"} border-zinc-200 dark:border-zinc-800`}>
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold mb-4">Client Testimonials</h3>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <Quote className={`mx-auto mb-4 ${theme === "light" ? "text-zinc-400" : "text-zinc-600"}`} size={48} />
              <p className={`text-lg mb-4 ${theme === "light" ? "text-zinc-700" : "text-zinc-300"}`}>
                "{testimonials[currentIndex].text}"
              </p>
              <p className="font-semibold">{testimonials[currentIndex].name}</p>
              <p className={`${theme === "light" ? "text-zinc-600" : "text-zinc-400"}`}>
                {testimonials[currentIndex].company}
              </p>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevTestimonial}
            className={`absolute top-1/2 left-0 transform -translate-y-1/2 ${
              theme === "light" ? "text-zinc-400 hover:text-zinc-600" : "text-zinc-600 hover:text-zinc-400"
            }`}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className={`absolute top-1/2 right-0 transform -translate-y-1/2 ${
              theme === "light" ? "text-zinc-400 hover:text-zinc-600" : "text-zinc-600 hover:text-zinc-400"
            }`}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </CardContent>
    </Card>
  )
}

export default TestimonialCarousel

