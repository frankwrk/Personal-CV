"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Linkedin, Instagram, Github, Globe, Phone, Mail, MessageCircle, Menu } from "lucide-react"
import ContactFormModal from "@/components/ContactFormModal"
import ProjectModal from "@/components/ProjectModal"
import ThemeToggle from "@/components/ThemeToggle"
import TestimonialCarousel from "@/components/TestimonialCarousel"
import MobileMenu from "@/components/MobileMenu"
import { useTheme } from "@/contexts/ThemeContext"

// Update the projects data to include more details
const projects = [
  {
    id: 1,
    title: "E-commerce Redesign",
    category: "Web Design",
    image: "/placeholder.svg?height=600&width=600&text=E-commerce+Redesign",
    description: "A complete overhaul of an online store, focusing on user experience and conversion optimization.",
    challenge: "The existing e-commerce platform had a high cart abandonment rate and poor mobile experience.",
    solution: "Implemented a responsive design with a streamlined checkout process and improved product discovery.",
    process: "Conducted user research, created wireframes and prototypes, and performed iterative user testing.",
    outcome: "Increased mobile conversions by 35% and reduced cart abandonment rate by 25%.",
  },
  {
    id: 2,
    title: "HealthTrack App",
    category: "Mobile App",
    image: "/placeholder.svg?height=600&width=600&text=HealthTrack+App",
    description: "A comprehensive health and fitness tracking application for iOS and Android platforms.",
    challenge: "Users found it difficult to maintain consistent health tracking habits and understand their progress.",
    solution:
      "Developed an intuitive interface with personalized insights and gamification elements to encourage regular use.",
    process: "Conducted competitor analysis, user interviews, and created user personas to inform the design process.",
    outcome: "Achieved a 40% increase in daily active users and a 4.8-star rating on app stores.",
  },
  {
    id: 3,
    title: "Eco-Friendly Packaging",
    category: "Branding",
    image: "/placeholder.svg?height=600&width=600&text=Eco-Friendly+Packaging",
    description:
      "Sustainable packaging design for a line of organic beauty products, emphasizing environmental responsibility.",
    challenge:
      "Create packaging that aligns with the brand's eco-friendly values while maintaining product visibility and appeal.",
    solution:
      "Designed minimalist packaging using recycled and biodegradable materials with clear product information.",
    process: "Researched sustainable materials, created multiple design concepts, and conducted focus group testing.",
    outcome: "Reduced packaging waste by 50% and increased brand perception scores for sustainability by 30%.",
  },
  {
    id: 4,
    title: "Smart Home Interface",
    category: "UI/UX Design",
    image: "/placeholder.svg?height=600&width=600&text=Smart+Home+Interface",
    description:
      "An intuitive interface for controlling smart home devices, designed for ease of use and accessibility.",
    challenge: "Simplify the control of multiple smart home devices through a single, user-friendly interface.",
    solution: "Created a customizable dashboard with voice control and adaptive learning capabilities.",
    process: "Conducted usability studies, created user flow diagrams, and developed high-fidelity prototypes.",
    outcome: "Reduced the average time to complete common tasks by 60% and increased user satisfaction ratings by 45%.",
  },
  {
    id: 5,
    title: "Financial Dashboard",
    category: "Data Visualization",
    image: "/placeholder.svg?height=600&width=600&text=Financial+Dashboard",
    description: "A comprehensive financial dashboard for tracking investments, expenses, and financial goals.",
    challenge: "Present complex financial data in an easily understandable and actionable format for users.",
    solution: "Designed an interactive dashboard with customizable widgets and clear data visualizations.",
    process: "Analyzed user needs, created information architecture, and conducted iterative design sprints.",
    outcome:
      "Improved user engagement with financial planning tools by 70% and received positive feedback for ease of use.",
  },
]

const workExperiences = [
  {
    id: 1,
    company: "TechCorp",
    position: "Senior UX Designer",
    period: "2020 - Present",
    description: "Led the redesign of the company's flagship product, resulting in a 40% increase in user engagement.",
  },
  {
    id: 2,
    company: "DesignStudio",
    position: "UI/UX Designer",
    period: "2018 - 2020",
    description:
      "Collaborated with cross-functional teams to deliver user-centered designs for various client projects.",
  },
  {
    id: 3,
    company: "StartupX",
    position: "Product Designer",
    period: "2016 - 2018",
    description: "Developed the initial design system and user interface for the company's mobile application.",
  },
]

export default function Home() {
  const { theme } = useTheme()
  const [activeProject, setActiveProject] = useState(projects[0])
  const [activeExperience, setActiveExperience] = useState(workExperiences[0])
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [projectCardHeight, setProjectCardHeight] = useState("auto")

  const rightColumnRef = useRef<HTMLDivElement>(null)

  const handleNextProject = () => {
    const currentIndex = projects.findIndex((p) => p.id === activeProject.id)
    const nextIndex = (currentIndex + 1) % projects.length
    setActiveProject(projects[nextIndex])
  }

  useEffect(() => {
    const updateProjectCardHeight = () => {
      if (rightColumnRef.current) {
        const rightColumnHeight = rightColumnRef.current.offsetHeight
        setProjectCardHeight(`${rightColumnHeight}px`)
      }
    }

    updateProjectCardHeight()
    window.addEventListener("resize", updateProjectCardHeight)

    return () => {
      window.removeEventListener("resize", updateProjectCardHeight)
    }
  }, [])

  return (
    <div className={`min-h-screen flex flex-col ${theme === "light" ? "bg-white text-black" : "bg-black text-white"}`}>
      {/* Header */}
      <header className="p-4 md:p-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image src="/placeholder.svg?height=48&width=48" alt="Francisc Furdui" fill className="object-cover" />
          </div>
          <div>
            <h1 className="text-lg font-medium">Francisc Furdui</h1>
            <span className={`text-sm ${theme === "light" ? "text-zinc-600" : "text-zinc-400"}`}>
              Digital Experience Designer in Boston, MA
            </span>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="mailto:your.email@example.com"
            className={`${theme === "light" ? "text-zinc-600" : "text-zinc-400"} hover:text-black dark:hover:text-white transition-colors`}
          >
            <Mail size={20} />
          </a>
          <a
            href="tel:+11234567890"
            className={`${theme === "light" ? "text-zinc-600" : "text-zinc-400"} hover:text-black dark:hover:text-white transition-colors`}
          >
            <Phone size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className={`${theme === "light" ? "text-zinc-600" : "text-zinc-400"} hover:text-black dark:hover:text-white transition-colors`}
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className={`${theme === "light" ? "text-zinc-600" : "text-zinc-400"} hover:text-black dark:hover:text-white transition-colors`}
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className={`${theme === "light" ? "text-zinc-600" : "text-zinc-400"} hover:text-black dark:hover:text-white transition-colors`}
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.yourbusinesswebsite.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${theme === "light" ? "text-zinc-600" : "text-zinc-400"} hover:text-black dark:hover:text-white transition-colors`}
          >
            <Globe size={20} />
          </a>
          <ThemeToggle />
        </div>
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className={`${theme === "light" ? "text-zinc-600" : "text-zinc-400"} hover:text-black dark:hover:text-white`}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4 md:p-6 overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* Large Project Card */}
          <Card
            className={`col-span-1 md:col-span-8 ${
              theme === "light" ? "bg-zinc-100" : "bg-zinc-900/50"
            } border-zinc-200 dark:border-zinc-800 relative overflow-hidden`}
            style={{ height: projectCardHeight }}
          >
            {/* Project Background Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={activeProject.image || "/placeholder.svg"}
                  alt={activeProject.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>
            </AnimatePresence>

            {/* Overlay for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

            {/* Menu Card */}
            <Card className="absolute top-4 left-4 right-4 bg-black/30 backdrop-blur-md border-none">
              <CardContent className="flex justify-between items-center p-2 md:p-4 overflow-x-auto">
                {projects.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => setActiveProject(project)}
                    className={`text-xs md:text-sm font-medium whitespace-nowrap px-2 py-1 ${
                      activeProject.id === project.id ? "text-white" : "text-zinc-400"
                    } hover:text-white transition-colors`}
                  >
                    {project.title}
                  </button>
                ))}
              </CardContent>
            </Card>

            {/* Project Details */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-xl md:text-2xl font-bold mb-2 text-white">{activeProject.title}</h2>
                  <p className="mb-2 text-sm md:text-base text-zinc-300">{activeProject.category}</p>
                  <p className="mb-4 text-xs md:text-sm text-zinc-400">{activeProject.description}</p>
                  <button
                    className="px-3 py-1 md:px-4 md:py-2 rounded-md text-xs md:text-sm font-medium transition-colors bg-white text-black hover:bg-zinc-200"
                    onClick={() => setIsProjectModalOpen(true)}
                  >
                    View Details
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>
          </Card>

          {/* Right Column */}
          <div ref={rightColumnRef} className="col-span-1 md:col-span-4 grid grid-cols-1 gap-4 md:gap-6">
            {/* Profile Card */}
            <Card
              className={`${
                theme === "light" ? "bg-zinc-100" : "bg-zinc-900/50"
              } border-zinc-200 dark:border-zinc-800 p-4`}
            >
              <CardContent className="space-y-4">
                <p className={`text-sm font-light ${theme === "light" ? "text-zinc-800" : "text-zinc-100"}`}>
                  Web & Product Designer with several years of experience creating user-centered digital solutions.
                  Skilled in UI/UX design, visual design, prototyping, and user research with proven ability to
                  collaborate cross-functionally.
                </p>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Education</h3>
                  <p className={`text-sm ${theme === "light" ? "text-zinc-700" : "text-zinc-300"}`}>
                    BSc in Enterprise Computing
                  </p>
                  <p className={`text-xs ${theme === "light" ? "text-zinc-600" : "text-zinc-400"}`}>
                    Dublin City University | Ireland | 2024
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Key Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {["UI/UX Design", "Prototyping", "User Research", "Figma", "Adobe XD"].map((skill, index) => (
                      <span
                        key={index}
                        className={`px-2 py-1 rounded-full text-xs ${
                          theme === "light" ? "bg-zinc-200 text-zinc-700" : "bg-zinc-800 text-zinc-300"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Work Experience Card */}
            <Card
              className={`${
                theme === "light" ? "bg-zinc-100" : "bg-zinc-900/50"
              } border-zinc-200 dark:border-zinc-800 overflow-hidden`}
            >
              {/* Menu Card */}
              <Card className="bg-black/30 backdrop-blur-md border-none">
                <CardContent className="flex justify-between items-center p-2 md:p-4 overflow-x-auto">
                  {workExperiences.map((experience) => (
                    <button
                      key={experience.id}
                      onClick={() => setActiveExperience(experience)}
                      className={`text-xs md:text-sm font-medium whitespace-nowrap px-2 py-1 ${
                        activeExperience.id === experience.id ? "text-white" : "text-zinc-400"
                      } hover:text-white transition-colors`}
                    >
                      {experience.company}
                    </button>
                  ))}
                </CardContent>
              </Card>

              {/* Experience Details */}
              <CardContent className="p-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeExperience.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-4 last:mb-0">
                      <h4 className="text-lg font-medium">{activeExperience.position}</h4>
                      <p className="text-zinc-300 text-sm">{activeExperience.company}</p>
                      <p className="text-zinc-400 text-xs mb-2">{activeExperience.period}</p>
                      <p className="text-zinc-100 text-sm">{activeExperience.description}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </CardContent>
            </Card>

            {/* Testimonial Section */}
            <TestimonialCarousel />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={`p-4 md:p-6 text-center ${theme === "light" ? "text-zinc-600" : "text-zinc-400"}`}>
        <p>&copy; {new Date().getFullYear()} Francisc Furdui. All rights reserved.</p>
      </footer>

      {/* Floating Action Button for Contact */}
      <button
        onClick={() => setIsContactModalOpen(true)}
        className={`fixed bottom-8 right-8 rounded-full p-4 shadow-lg transition-colors ${
          theme === "light" ? "bg-black text-white hover:bg-zinc-800" : "bg-white text-black hover:bg-zinc-200"
        }`}
      >
        <MessageCircle size={24} />
      </button>

      <ContactFormModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      <ProjectModal
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
        project={activeProject}
        onNextProject={handleNextProject}
      />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </div>
  )
}

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div>
      <h5 className="text-sm font-medium mb-2 text-zinc-300">{title}</h5>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span key={index} className="px-2 py-1 bg-zinc-800 text-zinc-300 rounded-full text-xs">
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

