"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

// Define the props interface
interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "projects", label: "PROJECTS" },
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
      className="fixed top-0 right-0 z-50 flex items-center justify-between px-8 py-4 w-full bg-black/80 backdrop-blur-md"
    >
      <div className="text-white text-xl font-bold">Sarani Liyanage</div>

      <div className="flex items-center space-x-8">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`text-sm font-medium transition-colors ${
              activeSection === item.id 
                ? "text-white" 
                : "text-gray-400 hover:text-white"
            }`}
          >
            {item.label}
          </button>
        ))}
        <Button
          onClick={() => scrollToSection("contact")}
          className="bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full px-6 py-2 text-sm hover:from-purple-700 hover:to-pink-600"
        >
          {/* Added text since the original was empty */}
        </Button>
      </div>
    </motion.nav>
  )
}

export default Navbar