"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface NavbarProps {
  activeSection: string
}

const Navbar = ({ activeSection }: NavbarProps) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { id: "home", label: "HOME" },
    { id: "projects", label: "PROJECTS" },
    { id: "about", label: "ABOUT" },
    { id: "contact", label: "CONTACT" },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!mounted) return null

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 right-0 z-50 flex items-center justify-between px-8 py-4 w-full glass-effect"
    >
      <div className="text-white text-xl font-bold">Rohan Patil</div>

      <div className="flex items-center space-x-8">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`text-sm font-medium transition-colors relative ${
              activeSection === item.id ? "text-white" : "text-gray-400"
            }`}
          >
            {item.label}
            {activeSection === item.id && (
              <motion.div
                layoutId="activeSection"
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-pink"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </button>
        ))}

        <Button
          onClick={() => scrollToSection("contact")}
          className="bg-gradient-to-r from-purple to-pink text-white rounded-full px-6 py-2 text-sm"
        >
          Contact Me
        </Button>
      </div>
    </motion.nav>
  )
}

export default Navbar

