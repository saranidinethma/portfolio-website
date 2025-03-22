"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Download, Github, Instagram, Linkedin, Dribbble } from "lucide-react"
import { Button } from "@/components/ui/button"
import gsap from "gsap"

const HomeSection = () => {
  const bubbleRef1 = useRef<HTMLDivElement>(null)
  const bubbleRef2 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (bubbleRef1.current && bubbleRef2.current) {
      gsap.to(bubbleRef1.current, {
        y: 20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      })

      gsap.to(bubbleRef2.current, {
        y: -15,
        x: 10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 0.5,
      })
    }
  }, [])

  return (
    <section id="home" className="section gradient-bg dot-pattern">
      <div className="max-w-6xl mx-auto w-full relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col"
        >
          <h1 className="text-7xl md:text-8xl font-bold text-white mb-4">
            Sarani
            <br />
            Liyanage
          </h1>

          <div className="w-1/2 border-l-2 border-pink pl-4 my-6">
            <p className="text-gray-300 text-lg">I&apos;m a full-stack web developer </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8"
          >
            <Button className="rounded-full bg-pink hover:bg-purple text-white flex items-center gap-2 px-6 py-6">
              <Download size={20} />
              <span className="text-lg">CV</span>
            </Button>
          </motion.div>
        </motion.div>

        <div ref={bubbleRef1} className="bubble bubble-1"></div>
        <div ref={bubbleRef2} className="bubble bubble-2"></div>
        


        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-6"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink transition-colors"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink transition-colors"
          >
            <Dribbble size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default HomeSection

