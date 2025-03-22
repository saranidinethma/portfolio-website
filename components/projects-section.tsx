"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { X } from "lucide-react"

interface Project {
  id: number
  title: string
  date: string
  image: string
  description: string
  liveUrl?: string // Optional URL for live project
  sourceUrl?: string // Optional URL for source code
}

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "Flickco",
      date: "January 2023",
      image: "/Screenshot 2025-03-22 at 16.53.01.png",
      description:
        "A modern, responsive React-based website for Flickco, offering innovative design and development solutions. Built with React, Styled Components, and Framer Motion for smooth animations.",
      liveUrl: "https://www.flickco.info/", // Add your actual live URL
      sourceUrl: "https://github.com/saranidinethma/Flickco" // Add your actual repo URL
    },
    {
      id: 2,
      title: "Project 2",
      date: "March 2023",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "An e-commerce platform with product management, shopping cart functionality, and secure payment processing. Built with Next.js and MongoDB.",
      liveUrl: "https://project2.example.com",
      sourceUrl: "https://github.com/username/project2"
    },
    {
      id: 3,
      title: "Project 3",
      date: "June 2023",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "A social media dashboard that aggregates content from multiple platforms. Features include content scheduling, analytics, and custom reporting.",
      liveUrl: "https://project3.example.com",
      // sourceUrl omitted intentionally as an example of a missing URL
    },
    {
      id: 4,
      title: "Project 4",
      date: "September 2023",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "A portfolio website template with customizable sections, animations, and responsive design. Built with HTML, CSS, and JavaScript.",
      liveUrl: "https://project4.example.com",
      sourceUrl: "https://github.com/username/project4"
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  // Function to handle opening URLs in new tab
  const openUrl = (url?: string) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <section id="projects" ref={sectionRef} className="section gradient-bg dot-pattern">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
          className="section-title text-center mb-16"
        >
          My Projects
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="project-card glass-effect rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-white text-xl font-bold">{project.title}</h3>
                  <p className="text-gray-300 text-sm">{project.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-dark rounded-2xl overflow-hidden max-w-2xl w-full relative"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 rounded-full p-2 text-white hover:bg-pink transition-colors"
              >
                <X size={20} />
              </button>

              <div className="relative h-64">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-white text-2xl font-bold mb-2">{selectedProject.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{selectedProject.date}</p>
                <p className="text-white">{selectedProject.description}</p>

                <div className="mt-6 flex gap-4">
                  {selectedProject.liveUrl ? (
                    <button
                      onClick={() => openUrl(selectedProject.liveUrl)}
                      className="bg-pink hover:bg-purple text-white px-4 py-2 rounded-md transition-colors"
                    >
                      View Live
                    </button>
                  ) : (
                    <button
                      disabled
                      className="bg-gray-500 text-white px-4 py-2 rounded-md cursor-not-allowed"
                    >
                      View Live (N/A)
                    </button>
                  )}
                  {selectedProject.sourceUrl ? (
                    <button
                      onClick={() => openUrl(selectedProject.sourceUrl)}
                      className="border border-pink text-white px-4 py-2 rounded-md hover:bg-pink/20 transition-colors"
                    >
                      Source Code
                    </button>
                  ) : (
                    <button
                      disabled
                      className="border border-gray-500 text-gray-300 px-4 py-2 rounded-md cursor-not-allowed"
                    >
                      Source Code (N/A)
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default ProjectsSection