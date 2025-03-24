"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import gsap from "gsap"

const AboutSection = () => {
  const bubbleRef = useRef(null)
  const bubble2Ref = useRef(null)

  useEffect(() => {
    if (bubbleRef.current) {
      gsap.to(bubbleRef.current, {
        y: 30,
        x: -20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      })
    }
    if (bubble2Ref.current) {
      gsap.to(bubble2Ref.current, {
        y: -20,
        x: 15,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: 0.5,
      })
    }
  }, [])

  return (
    <section id="about" className="py-20 px-4 md:px-8 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-purple-900 opacity-95 z-0"></div>
      <div className="absolute inset-0 bg-dot-pattern opacity-10 z-0"></div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 md:mb-12">
            <span className="block">About</span>
            <div className="flex items-center">
              <span>me</span>
              <ArrowRight size={48} className="ml-4 text-pink-500" />
            </div>
          </h2>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-center md:items-start">
            <div className="relative">
              <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-pink-500 shadow-lg shadow-pink-500/20">
                <Image
                  src="/WhatsApp Image 2025-03-22 at 17.47.31.jpeg"
                  alt="My profile picture"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
              <div ref={bubbleRef} className="absolute w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 opacity-20 blur-md -bottom-4 -right-2 z-0"></div>
              <div ref={bubble2Ref} className="absolute w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 opacity-20 blur-md -top-4 -left-2 z-0"></div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full md:w-3/5 mt-8 md:mt-0"
            >
              <p className="text-white/90 text-lg md:text-xl leading-relaxed">
                I am a Computer Science undergraduate with a strong foundation in software development and a keen interest in emerging technologies. My academic journey has equipped me with problem-solving, critical thinking, and full-stack development skills.
              </p>
              <p className="text-white/90 text-lg md:text-xl leading-relaxed mt-4">
                Beyond academics, I actively participate in extracurricular activities, enhancing my leadership, teamwork, and communication abilities. I am eager to apply my knowledge, hands-on experience, and passion for innovation to contribute effectively to projects and make a meaningful impact in the tech industry.
              </p>
              
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection