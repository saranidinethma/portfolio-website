"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface Skill {
  name: string
  level: number
}

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })

  const leftSkills: Skill[] = [
    { name: "CSS", level: 7 },
    { name: "Bootstrap", level: 7 },
    { name: "Javascript", level: 6 },
    { name: "React", level: 7 },
  ]

  const rightSkills: Skill[] = [
    { name: "Figma", level: 7 },
    { name: "Tailwind", level: 8 },
    { name: "Node.js", level: 8 },
    { name: "Node.js", level: 8 }, // Duplicated as per the design
  ]

  const renderSkillDots = (level: number) => {
    return Array.from({ length: 8 }).map((_, index) => (
      <span key={index} className={`skill-dot ${index < level ? "active" : "inactive"}`}></span>
    ))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="skills" ref={sectionRef} className="section gradient-bg dot-pattern">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
          className="section-title text-center mb-16"
        >
          My Skills
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <div className="space-y-8">
            {leftSkills.map((skill, index) => (
              <motion.div key={index} variants={itemVariants} className="flex items-center justify-between">
                <span className="text-white text-xl w-32">{skill.name}</span>
                <div className="flex">{renderSkillDots(skill.level)}</div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-8">
            {rightSkills.map((skill, index) => (
              <motion.div key={index} variants={itemVariants} className="flex items-center justify-between">
                <span className="text-white text-xl w-32">{skill.name}</span>
                <div className="flex">{renderSkillDots(skill.level)}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection

