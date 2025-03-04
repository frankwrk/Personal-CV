"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LinkedInLogoIcon,
  InstagramLogoIcon,
  GitHubLogoIcon,
  GlobeIcon,
  MobileIcon,
  EnvelopeClosedIcon,
  HamburgerMenuIcon,
} from "@radix-ui/react-icons";
import ContactFormModal from "@/components/ContactFormModal";
import ProjectModal from "@/components/ProjectModal";
import ThemeToggle from "@/components/ThemeToggle";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import MobileMenu from "@/components/MobileMenu";
import { useTheme } from "@/contexts/ThemeContext";
import GitHubAvatar from "@/components/GitHubAvatar";
import { useGitHubAvatar } from "@/hooks/useGitHubAvatar";
import "./github-avatar.css";
import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "@/components/animated-grid-pattern";

// Update the projects data to include more details
const projects = [
  {
    id: 1,
    title: "E-commerce Redesign",
    category: "Web Design",
    image: "/placeholder.svg?height=600&width=600&text=E-commerce+Redesign",
    description:
      "A complete overhaul of an online store, focusing on user experience and conversion optimization.",
    challenge:
      "The existing e-commerce platform had a high cart abandonment rate and poor mobile experience.",
    solution:
      "Implemented a responsive design with a streamlined checkout process and improved product discovery.",
    process:
      "Conducted user research, created wireframes and prototypes, and performed iterative user testing.",
    outcome:
      "Increased mobile conversions by 35% and reduced cart abandonment rate by 25%.",
  },
  {
    id: 2,
    title: "HealthTrack App",
    category: "Mobile App",
    image: "/placeholder.svg?height=600&width=600&text=HealthTrack+App",
    description:
      "A comprehensive health and fitness tracking application for iOS and Android platforms.",
    challenge:
      "Users found it difficult to maintain consistent health tracking habits and understand their progress.",
    solution:
      "Developed an intuitive interface with personalized insights and gamification elements to encourage regular use.",
    process:
      "Conducted competitor analysis, user interviews, and created user personas to inform the design process.",
    outcome:
      "Achieved a 40% increase in daily active users and a 4.8-star rating on app stores.",
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
    process:
      "Researched sustainable materials, created multiple design concepts, and conducted focus group testing.",
    outcome:
      "Reduced packaging waste by 50% and increased brand perception scores for sustainability by 30%.",
  },
  {
    id: 4,
    title: "Smart Home Interface",
    category: "UI/UX Design",
    image: "/placeholder.svg?height=600&width=600&text=Smart+Home+Interface",
    description:
      "An intuitive interface for controlling smart home devices, designed for ease of use and accessibility.",
    challenge:
      "Simplify the control of multiple smart home devices through a single, user-friendly interface.",
    solution:
      "Created a customizable dashboard with voice control and adaptive learning capabilities.",
    process:
      "Conducted usability studies, created user flow diagrams, and developed high-fidelity prototypes.",
    outcome:
      "Reduced the average time to complete common tasks by 60% and increased user satisfaction ratings by 45%.",
  },
  {
    id: 5,
    title: "Financial Dashboard",
    category: "Data Visualization",
    image: "/placeholder.svg?height=600&width=600&text=Financial+Dashboard",
    description:
      "A comprehensive financial dashboard for tracking investments, expenses, and financial goals.",
    challenge:
      "Present complex financial data in an easily understandable and actionable format for users.",
    solution:
      "Designed an interactive dashboard with customizable widgets and clear data visualizations.",
    process:
      "Analyzed user needs, created information architecture, and conducted iterative design sprints.",
    outcome:
      "Improved user engagement with financial planning tools by 70% and received positive feedback for ease of use.",
  },
];

const workExperiences = [
  {
    id: 1,
    company: "SYNQ Group LLC",
    position: "Founder and UX/UI Designer",
    location: "Boston, MA",
    period: "2020 - Present",
    description:
      "Product Designer with extensive experience creating user-centered interfaces for educational research projects. Increased user engagement by 40% through responsive design implementation and cross-functional collaboration. Skilled in wireframing, prototyping, and visual design using Figma and WordPress. Conducted user research to validate solutions and facilitated stakeholder workshops to define project goals. Maintained brand consistency across digital products while ensuring seamless experiences across all devices. Notable projects include noveleco.eu, geoformations.eu, lessonplans.ie, hmvengineering.com, and dublinbonders.com",
  },
  {
    id: 2,
    company: "Independent Freelancer",
    position: "Digital Experience Designer",
    location: "Dublin, Ireland",
    period: "2016 - 2020",
    description:
      "Product and Web Designer with a track record of creating user-centered interfaces for 60+ clients across multiple industries. Improved conversion rates by 25% through strategic information architecture and user journey mapping. Implemented iterative design processes incorporating usability testing and A/B testing to validate decisions and optimize experiences. Delivered responsive designs that enhanced mobile engagement while transforming complex business requirements into intuitive interfaces. Collaborated closely with clients to identify pain points and design opportunities, creating visual elements and UI components that effectively balanced aesthetics with usability.",
  },
  {
    id: 3,
    company: "Suntico Holdings",
    position: "Technical Lead",
    location: "Dublin, Ireland",
    period: "2014 - 2017",
    description:
      "Led the website redesign initiatives for Suntico Holdings, which enhanced user experience for business applications through a collaborative, user-centered approach. Created wireframes and interactive prototypes to effectively visualize concepts and gather stakeholder feedback. Collaborated closely with product managers to ensure design solutions aligned with business objectives while adhering to brand guidelines. Regularly presented design concepts to stakeholders across organizational levels and contributed to the development of company-wide design standards, establishing consistent visual language and design practices.",
  },
];

export default function Home() {
  const { theme } = useTheme();
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [activeExperience, setActiveExperience] = useState(workExperiences[0]);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [projectCardHeight, setProjectCardHeight] = useState("auto");
  
  // Explicitly set icon color based on current theme
  const iconColor = theme === "light" ? "#121212" : "white";

  // GitHub username - replace with your own
  const githubUsername = "frankwrk";

  // Use the hook to fetch avatar and update favicon
  const { isLoading, avatarUrl } = useGitHubAvatar(githubUsername);

  const rightColumnRef = useRef<HTMLDivElement>(null);

  const handleNextProject = () => {
    const currentIndex = projects.findIndex((p) => p.id === activeProject.id);
    const nextIndex = (currentIndex + 1) % projects.length;
    setActiveProject(projects[nextIndex]);
  };

  useEffect(() => {
    const updateProjectCardHeight = () => {
      if (rightColumnRef.current) {
        const rightColumnHeight = rightColumnRef.current.offsetHeight;
        setProjectCardHeight(`${rightColumnHeight}px`);
      }
    };

    updateProjectCardHeight();
    window.addEventListener("resize", updateProjectCardHeight);

    return () => {
      window.removeEventListener("resize", updateProjectCardHeight);
    };
  }, []);

  return (
    <>
      <div
        className="min-h-screen flex flex-col bg-white dark:bg-[#121212] text-foreground relative"
        style={{
          backgroundColor: theme === 'light' ? 'white' : '#121212'
        }}
        data-oid="wg:t-8f"
      >
        {/* Animated Grid Pattern Background */}
        <AnimatedGridPattern
          numSquares={50}
          maxOpacity={0.08}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
            "absolute inset-0 -z-10",
            "dark:fill-amber-400/5 dark:stroke-amber-400/10",
            "fill-gray-400/10 stroke-gray-400/20"
          )}
        />
      {/* Header with terminal-inspired styling */}
      <header
        className="p-4 md:p-6 flex justify-between items-center sticky top-0 z-50"
        data-oid="j0tlumk"
      >
        <div className="flex items-center space-x-4" data-oid="pfjbzku">
          <div className="relative w-12 h-12" data-oid="rq-ie.9">
            <GitHubAvatar
              username={githubUsername}
              className="h-13 w-13 avatar-glow avatar-pulse ring-2 ring-primary/30"
              fallback="FF"
              data-oid="gyap6zy"
            />
          </div>
          <div data-oid="f7axb1:">
            <h1 className="text-lg font-medium accent-element" data-oid="5hqkzn6">
              Francisc Furdui
            </h1>
            <div className="prompt inline-flex py-1 px-2 text-xs">
              <span className="text-highlight mr-1">~</span> <span className="text-primary">Digital Experience Designer in Boston, MA</span> <span className="animate-pulse">_</span>
            </div>
          </div>
        </div>
        <div
          className="hidden md:flex items-center space-x-4 glass-card py-2 px-4 rounded-full shadow-sm"
          data-oid="h_auzqi"
        >
          <a
            href="mailto:francisc.frd@gmail.com"
            className="hover:text-primary transition-colors h-7 w-7 flex items-center justify-center rounded-full hover:bg-secondary/20"
            data-oid="up_bfsq"
            title="Email"
          >
            <EnvelopeClosedIcon style={{ color: iconColor }} width={16} height={16} data-oid="wn6.6gd" />
          </a>
          <a
            href="tel:+18572009212"
            className="hover:text-primary transition-colors h-7 w-7 flex items-center justify-center rounded-full hover:bg-secondary/20"
            data-oid="jn79x62"
            title="Phone"
          >
            <MobileIcon style={{ color: iconColor }} width={16} height={16} data-oid="bak_:ix" />
          </a>
          <a
            href="https://www.linkedin.com/in/franciscfurdui"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors h-7 w-7 flex items-center justify-center rounded-full hover:bg-secondary/20"
            data-oid="ivnqn-z"
            title="LinkedIn"
          >
            <LinkedInLogoIcon style={{ color: iconColor }} width={16} height={16} data-oid="03c6t0b" />
          </a>
          <a
            href="https://www.instagram.com/francisc_frd/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors h-7 w-7 flex items-center justify-center rounded-full hover:bg-secondary/20"
            data-oid="g_x0sq1"
            title="Instagram"
          >
            <InstagramLogoIcon style={{ color: iconColor }} width={16} height={16} data-oid="5ztxz5m" />
          </a>
          <a
            href="https://github.com/frankwrk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors h-7 w-7 flex items-center justify-center rounded-full hover:bg-secondary/20"
            data-oid="8wrrwmx"
            title="GitHub"
          >
            <GitHubLogoIcon style={{ color: iconColor }} width={16} height={16} data-oid="cf_g8i8" />
          </a>
          <a
            href="https://syn-q.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors h-7 w-7 flex items-center justify-center rounded-full hover:bg-secondary/20"
            data-oid="s8lin0t"
            title="Website"
          >
            <GlobeIcon style={{ color: iconColor }} width={16} height={16} data-oid="8rrw6or" />
          </a>
          <div />
          <ThemeToggle data-oid="86kcbwe" />
        </div>
        <div
          className="md:hidden flex items-center space-x-3 glass-card py-2 px-3 rounded-full shadow-sm"
          data-oid="9y6xwhv"
        >
          <ThemeToggle data-oid="9wyklav" />
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            className="dark:text-white hover:text-primary/80 p-1 rounded-full hover:bg-secondary/20 transition-colors"
            data-oid="3.eutxs"
            aria-label="Open menu"
          >
            <HamburgerMenuIcon style={{ color: iconColor }} width={22} height={22} data-oid="cf6bcnj" />
          </button>
        </div>
      </header>

      {/* Main Content with terminal-inspired styling */}
      <main className="flex-grow p-4 md:p-6 overflow-y-auto" data-oid="c7c:a_g">
        <div
          className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 w-full"
          data-oid="c1y.c8l"
        >
          {/* Terminal-Inspired Project Card */}
          <Card
            className="col-span-1 md:col-span-8 bg-card border-border relative overflow-hidden glass-card shadow-lg"
            style={{ height: projectCardHeight }}
            data-oid="i7hd:xc"
          >
            {/* Project Background Image */}
            <AnimatePresence mode="wait" data-oid="jsdntb7">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
                data-oid="oybzapd"
              >
                <Image
                  src={activeProject.image || "/placeholder.svg"}
                  alt={activeProject.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  data-oid="_5l7io5"
                />
              </motion.div>
            </AnimatePresence>

            {/* Overlay for better text visibility */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
              data-oid="9dvo:3:"
            />

            {/* Menu Card */}
            <Card
              className="absolute top-4 left-4 right-4 bg-black/30 backdrop-blur-md border-none p-0.5"
              data-oid="xtjfhrh"
            >
              <CardContent
                className="flex items-left justify-left p-2 md:p-4 overflow-x-auto"
                style={{ alignItems: "left" }}
                data-oid="vjj01xy"
              >
                <div className="flex items-left justify-left flex-grow">
                  {projects.map((project) => (
                    <button
                      style={{
                        background: activeProject.id === project.id ? "rgba(255, 255, 255, 0.20)" : "transparent",
                        borderRadius: "0.5rem",
                        padding: "0.5rem 1rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      type="button"
                      key={project.id}
                      onClick={() => setActiveProject(project)}
                      className={`text-xs md:text-sm font-medium whitespace-nowrap ${
                        activeProject.id === project.id
                          ? "text-white"
                          : "text-zinc-200"
                      } hover:text-white transition-colors`}
                      data-oid=":ugef.r"
                    >
                      {project.title}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Project Details */}
            <div
              className="absolute bottom-0 left-0 right-0 p-4 md:p-6"
              data-oid="_m6gduk"
            >
              <AnimatePresence mode="wait" data-oid="tehuo63">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  data-oid="327uy16"
                >
                  <h2
                    className="text-xl md:text-2xl font-bold mb-2 text-white"
                    data-oid="d4o_:kh"
                  >
                    {activeProject.title}
                  </h2>
                  <p
                    className="mb-2 text-sm md:text-base text-zinc-300"
                    data-oid="8j3z7qt"
                  >
                    {activeProject.category}
                  </p>
                  <p
                    className="mb-4 text-xs md:text-sm text-zinc-400"
                    data-oid="z3xy36x"
                  >
                    {activeProject.description}
                  </p>
                  <button
                    type="button"
                    className="px-3 py-1 md:px-4 md:py-2 rounded-md text-xs md:text-sm font-medium transition-colors bg-white text-black hover:bg-zinc-200"
                    onClick={() => setIsProjectModalOpen(true)}
                    data-oid="py0t83e"
                  >
                    View Details
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>
          </Card>

          {/* Right Column */}
          <div
            ref={rightColumnRef}
            className="col-span-1 md:col-span-4 grid grid-cols-1 gap-4 md:gap-6"
            data-oid="8b7tw7."
          >
            {/* Profile Card */}
            <Card
              className={`${
                theme === "light" ? "bg-zinc-100" : "bg-zinc-900/50"
              } border-zinc-200 dark:border-zinc-800 p-4`}
              data-oid="nm-o68b"
            >
              <CardContent className="space-y-4" data-oid="6o0vydf">
                <p
                  className={`text-sm font-light ${theme === "light" ? "text-zinc-800" : "text-zinc-100"}`}
                  data-oid="lsew0j7"
                >
                  Web & Product Designer with several years of experience
                  creating user-centered digital solutions. Skilled in UI/UX
                  design, visual design, prototyping, and user research with
                  proven ability to collaborate cross-functionally.
                </p>
                <div data-oid="gq.v7-f">
                  <h3 className={`text-lg font-semibold mb-2 ${theme === "light" ? "text-black" : "text-white"}`} data-oid="vckydcv">
                    Education
                  </h3>
                  <p
                    className={`text-sm ${theme === "light" ? "text-zinc-700" : "text-zinc-300"}`}
                    data-oid="0pxa4u0"
                  >
                    BSc in Enterprise Computing
                  </p>
                  <p
                    className={`text-xs ${theme === "light" ? "text-zinc-600" : "text-zinc-400"}`}
                    data-oid="vlj21lf"
                  >
                    Dublin City University | Ireland | 2024
                  </p>
                </div>
                <div data-oid="zbgm177">
                  <h3 className={`text-lg font-semibold mb-2 ${theme === "light" ? "text-black" : "text-white"}`} data-oid="hdz6:6u">
                    Key Skills
                  </h3>
                  <div className="flex flex-wrap gap-2" data-oid="8szml5v">
                    {[
                      "UI/UX Design",
                      "Prototyping",
                      "User Research",
                      "Figma",
                      "Adobe XD",
                    ].map((skill, index) => (
                      <span
                        key={`skill-${skill}-${index}`}
                        className={`px-2 py-1 rounded-full text-xs ${
                          theme === "light"
                            ? "bg-zinc-200 text-zinc-700"
                            : "bg-zinc-800 text-zinc-300"
                        }`}
                        data-oid="cgraufg"
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
              } border-zinc-200 dark:border-zinc-800 overflow-hidden p-1 md:p-2`}
              data-oid="jx.cvbc"
            >
              {/* Menu Card */}
              <Card
                className="border-none p-0.5"
                data-oid="9ob9bd9"
              >
                <CardContent
                  className="flex justify-left items-left p-1 md:p-2 overflow-x-auto gap-2"
                  data-oid="6m:6mir"
                >
                  {workExperiences.map((experience) => (
                    <motion.button
                      type="button"
                      key={experience.id}
                      onClick={() => setActiveExperience(experience)}
                      initial={false}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`text-xs md:text-sm font-medium whitespace-nowrap px-2 py-1 rounded-md ${
                        activeExperience.id === experience.id
                          ? "bg-zinc-800 text-zinc-300"
                          : "bg-zinc-200 text-zinc-700"
                      }`}
                      data-oid="yomi5t-"
                    >
                      {experience.company}
                    </motion.button>
                  ))}
                </CardContent>
              </Card>

              {/* Experience Details */}
              <CardContent className="p-1" data-oid="uvv9lyo">
                <AnimatePresence mode="wait" data-oid=".tn86p_">
                  <motion.div
                    key={activeExperience.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    data-oid="xhv8x.w"
                  >
                    <div className="mb-4 last:mb-0" data-oid="ni4qlc9">
                      <div className="mb-2">
                        <span 
                          className={`inline-block text-xs font-medium px-2 py-0.5 rounded-md ${theme === "light" ? "bg-amber-100 text-amber-800" : "bg-amber-950/40 text-amber-400"}`}
                          data-oid="jtv1dzq"
                        >
                          {activeExperience.period}
                        </span>
                      </div>
                      <h4 className={`text-lg font-medium ${theme === "light" ? "text-black" : "text-white"}`} data-oid="svhhia9">
                        {activeExperience.position}
                      </h4>
                      <p className="text-zinc-300 text-sm" data-oid=".q82spf">
                        {activeExperience.company}
                      </p>
                      <p className="text-amber-500 dark:text-amber-400 text-xs font-medium mb-2">
                        {activeExperience.location}
                      </p>
                      <p className="text-zinc-100 text-sm" data-oid="pmuwcid">
                        {activeExperience.description}
                      </p>
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
      <footer
        className={`p-4 md:p-6 text-left ${theme === "light" ? "text-zinc-600" : "text-zinc-400"}`}
        data-oid="299pr2a"
      >
        <p data-oid="egcpvo-">
          &copy; {new Date().getFullYear()} Francisc Furdui. All rights
          reserved.
        </p>
      </footer>

      </div>

      {/* Floating Action Button for Contact */}
      <button
        type="button"
        onClick={() => setIsContactModalOpen(true)}
        style={{
          position: 'fixed',
          bottom: '32px',
          right: '32px',
          zIndex: 9999,
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          backgroundColor: theme === "light" ? '#000' : '#fff',
          color: theme === "light" ? '#fff' : '#000',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        <svg width="24" height="24" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Contact Me">
          <path d="M12.5 3L2.5 3.00002C1.67157 3.00002 1 3.6716 1 4.50002V9.50003C1 10.3285 1.67157 11 2.5 11H7.50003C7.63264 11 7.75982 11.0527 7.85358 11.1465L10 13.2929V11.5C10 11.2239 10.2239 11 10.5 11H12.5C13.3284 11 14 10.3285 14 9.50003V4.5C14 3.67157 13.3284 3 12.5 3ZM2.49999 2.00002L12.5 2C13.8807 2 15 3.11929 15 4.5V9.50003C15 10.8807 13.8807 12 12.5 12H11V14.5C11 14.7022 10.8782 14.8845 10.6913 14.9619C10.5045 15.0393 10.2894 14.9965 10.1464 14.8536L7.29292 12H2.5C1.11929 12 0 10.8807 0 9.50003V4.50002C0 3.11931 1.11928 2.00003 2.49999 2.00002Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
        </svg>
      </button>

      <ContactFormModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        data-oid="16aqep2"
      />

      <ProjectModal
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
        project={activeProject}
        onNextProject={handleNextProject}
        data-oid="v2sgt-e"
      />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        data-oid="946w1dm"
      />
    </>
  );
}

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div data-oid="0pz.c9o">
      <h5 className="text-sm font-medium mb-2 text-zinc-300" data-oid="_63iy12">
        {title}
      </h5>
      <div className="flex flex-wrap gap-2" data-oid=":rcc5nz">
        {skills.map((skill, index) => (
          <span
            key={`footerskill-${skill}-${index}`}
            className="px-2 py-1 bg-zinc-800 text-zinc-300 rounded-full text-xs"
            data-oid="v_7ku5f"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
