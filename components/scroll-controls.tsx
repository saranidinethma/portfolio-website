"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ScrollControlsProps {
  sections: string[]
  activeSection: string
}

const ScrollControls = ({ sections, activeSection }: ScrollControlsProps) => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-8 right-8 z-50"
          >
            <Button
              onClick={scrollToTop}
              className="rounded-full w-12 h-12 bg-pink hover:bg-purple text-white shadow-lg"
            >
              <ChevronUp size={24} />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Optional: Section indicators (remove this section if you don't want them) */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
        {sections.map((section) => (
          <motion.div
            key={section}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: activeSection === section ? 1.2 : 1,
            }}
            transition={{ duration: 0.2 }}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              activeSection === section ? "bg-pink" : "bg-white/30 hover:bg-white/50"
            }`}
            onClick={() => {
              const element = document.getElementById(section)
              element?.scrollIntoView({ behavior: "smooth" })
            }}
          />
        ))}
      </div>
    </>
  )
}

export default ScrollControls