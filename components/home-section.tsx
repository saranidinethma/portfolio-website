"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Download, Github, Instagram, Linkedin, Dribbble } from "lucide-react"
import { Button } from "@/components/ui/button"
import gsap from "gsap"

const HomeSection = () => {
  const bubbleRef1 = useRef(null)
  const bubbleRef2 = useRef(null)
  const nameRef = useRef(null)

  useEffect(() => {
    if (bubbleRef1.current) {
      gsap.to(bubbleRef1.current, {
        y: 25,
        x: -10,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      })
    }
    if (bubbleRef2.current) {
      gsap.to(bubbleRef2.current, {
        y: -20,
        x: 15,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 0.5,
      })
    }
    if (nameRef.current) {
      gsap.to(nameRef.current, {
        backgroundPosition: "200% center",
        duration: 10,
        repeat: -1,
        ease: "none",
      })
    }
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center py-16 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-900 z-0"></div>
      <div className="absolute inset-0 bg-dot-pattern opacity-10 z-0"></div>
      <div ref={bubbleRef1} className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-pink-600/20 to-purple-600/20 blur-3xl -left-20 top-1/4 z-0"></div>
      <div ref={bubbleRef2} className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-blue-600/15 to-cyan-400/15 blur-3xl -right-20 top-1/3 z-0"></div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col"
            >
              <h1
                ref={nameRef}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4"
                style={{
                  background: "linear-gradient(to right, #fff, #f0f, #6366f1, #fff)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Sarani
                <br />
                Liyanage
              </h1>
              <p className="text-gray-200 text-xl md:text-2xl font-light w-full md:w-2/3 lg:w-1/2 border-l-4 border-pink-500 pl-4 my-6">
                I'm a full-stack web developer passionate about creating beautiful, functional websites and applications.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button className="rounded-full bg-pink-500 hover:bg-purple-600 text-white flex items-center gap-2 px-6 py-6">
                  <Download size={20} />
                  <span className="text-lg">Download CV</span>
                </Button>
                
              </div>
            </motion.div>
          </div>
          <div className="lg:col-span-2">
            <div className="flex lg:flex-col justify-center lg:justify-start gap-6 mt-12 lg:mt-0">
              <a href="https://github.com/saranidinethma" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-pink-500 transition-all duration-300 hover:scale-110">
                <Github size={22} />
              </a>
              <a href="https://www.linkedin.com/in/sarani-dinethma/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-pink-500 transition-all duration-300 hover:scale-110">
                <Linkedin size={22} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-pink-500 transition-all duration-300 hover:scale-110">
                <Instagram size={22} />
              </a>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeSection