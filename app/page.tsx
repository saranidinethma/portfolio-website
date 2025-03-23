"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import HomeSection from "@/components/home-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import ContactSection from "@/components/contact-section"
import ScrollControls from "@/components/scroll-controls"
import Lenis from "@studio-freight/lenis"

// Optional: Define interface here if not in a separate file
interface NavbarProps {
  activeSection: string;
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [isLoading, setIsLoading] = useState(true)
  const sections = ["home", "about", "skills", "projects", "contact"]

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section)
    })

    const handleKeyDown = (e: KeyboardEvent) => {
      const currentIndex = sections.indexOf(activeSection)
      if (e.key === "ArrowDown" && currentIndex < sections.length - 1) {
        const nextSection = document.getElementById(sections[currentIndex + 1])
        if (nextSection) nextSection.scrollIntoView({ behavior: "smooth" })
      } else if (e.key === "ArrowUp" && currentIndex > 0) {
        const prevSection = document.getElementById(sections[currentIndex - 1])
        if (prevSection) prevSection.scrollIntoView({ behavior: "smooth" })
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
      lenis.destroy()
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [activeSection, sections])

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-dark z-50">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white"
        >
          Loading...
        </motion.div>
      </div>
    )
  }

  return (
    <main className="flex min-h-screen bg-dark relative overflow-hidden">
      <div className="flex-1 relative">
        <Navbar activeSection={activeSection} />
        <ScrollControls sections={sections} activeSection={activeSection} />
        <div className="relative">
          <HomeSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </div>
    </main>
  )
}