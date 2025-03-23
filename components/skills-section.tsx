"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Badge, Code, Figma, Layers, Server, FileCode, Palette, Star } from "lucide-react"

interface Skill {
  name: string
  level: number
  icon: JSX.Element
  color: string
}

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })
  const [activeTab, setActiveTab] = useState<string>("frontend")
  const [isMobile, setIsMobile] = useState(false)

  // Check if viewport is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const frontendSkills: Skill[] = [
    { name: "HTML/CSS", level: 8, icon: <FileCode size={20} />, color: "#38bdf8" },
    { name: "JavaScript", level: 7, icon: <Code size={20} />, color: "#facc15" },
    { name: "React", level: 7, icon: <Badge size={20} />, color: "#60a5fa" },
    { name: "Tailwind", level: 8, icon: <Palette size={20} />, color: "#2dd4bf" },
    { name: "Figma", level: 7, icon: <Figma size={20} />, color: "#f97316" },
  ]

  const backendSkills: Skill[] = [
    { name: "Node.js", level: 8, icon: <Server size={20} />, color: "#22c55e" },
    { name: "Java", level: 7, icon: <Code size={20} />, color: "#f43f5e" },
  
    { name: "SQL", level: 7, icon: <Layers size={20} />, color: "#38bdf8" },
    { name: "Flutter", level: 8, icon: <Star size={20} />, color: "#a78bfa" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.5,
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  }

  // Function to render skill bar with animation
  const renderSkillBar = (skill: Skill) => {
    const percentage = (skill.level / 10) * 100;
    
    return (
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        style={{ backgroundColor: skill.color }}
        className="h-full rounded-r-full absolute left-0 top-0"
      />
    );
  };

  return (
    <section id="skills" ref={sectionRef} className="section py-24 gradient-bg dot-pattern">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={titleVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-pink mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">A comprehensive overview of my technical expertise and proficiency levels</p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="bg-dark/30 backdrop-blur-sm p-1 rounded-full inline-flex">
            <button
              onClick={() => setActiveTab("frontend")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === "frontend"
                  ? "bg-pink text-white shadow-lg"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Frontend
            </button>
            <button
              onClick={() => setActiveTab("backend")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === "backend"
                  ? "bg-pink text-white shadow-lg"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Backend & Mobile
            </button>
          </div>
        </div>

        <div className="relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 gap-12"
            key={activeTab} // Force re-render animation on tab change
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {(activeTab === "frontend" ? frontendSkills : backendSkills).map((skill, index) => (
                <motion.div 
                  key={skill.name} 
                  variants={itemVariants}
                  className="skill-item"
                >
                  <div className="flex items-center mb-2">
                    <div 
                      className="w-8 h-8 flex items-center justify-center rounded-full mr-3" 
                      style={{ backgroundColor: `${skill.color}30` }}
                    >
                      <span style={{ color: skill.color }}>{skill.icon}</span>
                    </div>
                    <span className="text-white text-lg font-medium">{skill.name}</span>
                    <span className="ml-auto text-sm text-gray-400">{skill.level}/10</span>
                  </div>
                  
                  <div className="h-2.5 bg-dark/50 rounded-full w-full relative overflow-hidden">
                    {renderSkillBar(skill)}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

 
      </div>
    </section>
  )
}

export default SkillsSection