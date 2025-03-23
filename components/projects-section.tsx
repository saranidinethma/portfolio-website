"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, ExternalLink, Github, Calendar } from "lucide-react"

interface Project {
  id: number
  title: string
  date: string
  image: string
  description: string
  tags?: string[] // Added tags for technologies used
  liveUrl?: string
  sourceUrl?: string
}

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
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

  const projects: Project[] = [
    {
      id: 1,
      title: "Flickco",
      date: "January 2023",
      image: "/Screenshot 2025-03-22 at 16.53.01.png",
      description:
        "A modern, responsive React-based website for Flickco, offering innovative design and development solutions. Built with React, Styled Components, and Framer Motion for smooth animations.",
      tags: ["React", "Styled Components", "Framer Motion"],
      liveUrl: "https://www.flickco.info/",
      sourceUrl: "https://github.com/saranidinethma/Flickco"
    },
    {
      id: 2,
      title: "We Neighbour",
      date: "March 2023",
      image: "/Screenshot 2025-03-23 at 01.41.35.png",
      description:
        "Modern urban living comes with unique challenges: poor communication, lack of security, and limited interaction among residents. We Neighbour bridges these gaps with a feature-rich mobile app, helping residents and management streamline their operations and connect better.",
      tags: ["React Native", "Firebase", "Node.js"],
      liveUrl: "https://www.weneighbour.live/",
      sourceUrl: "https://github.com/alwaysPasindu/we_neighbour_project"
    },
    {
      id: 3,
      title: "Social Dashboard",
      date: "June 2023",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "A social media dashboard that aggregates content from multiple platforms. Features include content scheduling, analytics, and custom reporting.",
      tags: ["Vue.js", "Express", "MongoDB"],
      liveUrl: "https://project3.example.com",
    },
    {
      id: 4,
      title: "Real-Time Ticketing System",
      date: "September 2023",
      image: "/K0pPRLN5unoLQOkO-generated_image.jpg",
      description:
        "The Real-Time Ticketing System is a Spring Boot and React application designed to simulate a ticket sales process. It allows vendors to release tickets into a shared pool while customers attempt to purchase them concurrently. This system demonstrates the use of multi-threading, synchronization, and RESTful services in Java.",
      tags: ["Spring Boot", "React", "Java", "RESTful API"],
      liveUrl: "https://project4.example.com",
      sourceUrl: "https://github.com/saranidinethma/Plane-Management"
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
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

  // Function to handle opening URLs in new tab
  const openUrl = (url?: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <section id="projects" ref={sectionRef} className="section py-24 gradient-bg dot-pattern">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={titleVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-pink mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">A showcase of my recent work and passion projects</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="project-card bg-dark/40 backdrop-blur-sm rounded-2xl overflow-hidden cursor-pointer border border-gray-700/50 hover:border-pink/50 transition-all duration-300 shadow-xl hover:shadow-pink/20"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-52 md:h-56 overflow-hidden">
                <Image 
                  src={project.image || "/placeholder.svg"} 
                  alt={project.title} 
                  fill 
                  className="object-cover transition-transform duration-500 hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-white text-xl font-bold group-hover:text-pink transition-colors">{project.title}</h3>
                  {project.date && (
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar size={14} className="mr-1" />
                      {project.date}
                    </div>
                  )}
                </div>
                
                <p className="text-gray-300 text-sm line-clamp-2 mb-4">{project.description}</p>
                
                {project.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="bg-purple/20 text-pink text-xs px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-pink text-sm">View details →</span>
                  <div className="flex space-x-2">
                    {project.liveUrl && (
                      <button 
                        onClick={(e) => openUrl(project.liveUrl, e)}
                        className="p-2 text-white hover:text-pink transition-colors"
                        aria-label="View live project"
                      >
                        <ExternalLink size={18} />
                      </button>
                    )}
                    {project.sourceUrl && (
                      <button 
                        onClick={(e) => openUrl(project.sourceUrl, e)}
                        className="p-2 text-white hover:text-pink transition-colors"
                        aria-label="View source code"
                      >
                        <Github size={18} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-dark border border-gray-700 rounded-2xl overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 bg-black/70 rounded-full p-2 text-white hover:bg-pink hover:text-white transition-colors"
                  aria-label="Close details"
                >
                  <X size={20} />
                </button>

                <div className="relative h-64 md:h-80">
                  <Image
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent"></div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6">
                    <h3 className="text-white text-2xl md:text-3xl font-bold">{selectedProject.title}</h3>
                    {selectedProject.date && (
                      <div className="flex items-center text-gray-400">
                        <Calendar size={16} className="mr-2" />
                        {selectedProject.date}
                      </div>
                    )}
                  </div>
                  
                  {selectedProject.tags && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.tags.map((tag, index) => (
                        <span key={index} className="bg-purple/20 text-pink text-sm px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <p className="text-gray-200 leading-relaxed mb-8">{selectedProject.description}</p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    {selectedProject.liveUrl ? (
                      <button
                        onClick={() => openUrl(selectedProject.liveUrl)}
                        className="flex items-center justify-center gap-2 bg-pink hover:bg-purple text-white px-6 py-3 rounded-lg transition-colors font-medium"
                      >
                        <ExternalLink size={18} />
                        View Live Project
                      </button>
                    ) : (
                      <button
                        disabled
                        className="flex items-center justify-center gap-2 bg-gray-700 text-gray-300 px-6 py-3 rounded-lg cursor-not-allowed font-medium"
                      >
                        <ExternalLink size={18} />
                        Live Demo Unavailable
                      </button>
                    )}
                    {selectedProject.sourceUrl ? (
                      <button
                        onClick={() => openUrl(selectedProject.sourceUrl)}
                        className="flex items-center justify-center gap-2 border border-pink text-white px-6 py-3 rounded-lg hover:bg-pink/20 transition-colors font-medium"
                      >
                        <Github size={18} />
                        Source Code
                      </button>
                    ) : (
                      <button
                        disabled
                        className="flex items-center justify-center gap-2 border border-gray-600 text-gray-400 px-6 py-3 rounded-lg cursor-not-allowed font-medium"
                      >
                        <Github size={18} />
                        Private Repository
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default ProjectsSection