"use client"

import { useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import gsap from "gsap"

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })
  const bubbleRef = useRef<HTMLDivElement>(null)

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
  }, [])

  return (
    <section id="about" ref={sectionRef} className="section gradient-bg dot-pattern">
      <div className="max-w-6xl mx-auto w-full relative">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col"
        >
          <h2 className="section-title flex items-center">
            About
            <br />
            me
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <ArrowRight size={60} className="ml-8 text-pink" />
            </motion.div>
          </h2>

          <div className="flex flex-col md:flex-row gap-12 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="w-40 md:w-40 relative overflow-hidden rounded-full aspect-square" // Fixed width for smaller circle
            >
              <Image
                src="/WhatsApp Image 2025-03-22 at 17.47.31.jpeg" // Your image path
                alt="My profile picture"
                width={160} // Reduced size for smaller circle
                height={160} // Match width to maintain square ratio
                className="w-40 md:w-40 relative overflow-hidden rounded-full aspect-square self-center"
              />
              <div ref={bubbleRef} className="bubble bubble-3"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="w-full md:w-1/2"
            >
              <p className="text-white text-lg leading-relaxed">
                I am a Computer Science undergraduate with a strong foundation in software development and a keen interest
                in emerging technologies. My academic journey has equipped me with problem-solving, critical thinking, and
                full-stack development skills. Beyond academics, I actively participate in extracurricular activities, enhancing
                my leadership, teamwork, and communication abilities. I am eager to apply my knowledge, hands-on
                experience, and passion for innovation to contribute effectively to projects and make a meaningful impact in
                the tech industry.
              </p>

              <Button
                className="mt-8 rounded-full bg-pink hover:bg-purple text-white px-6 py-6"
                onClick={() => {
                  const contactSection = document.getElementById("contact")
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                Contact Me
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection