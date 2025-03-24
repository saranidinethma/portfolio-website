"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight } from "lucide-react"

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", formData)
    alert("Message sent successfully!")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" ref={sectionRef} className="section gradient-bg dot-pattern">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
          className="section-title text-center mb-16"
        >
          Contact Me
        </motion.h2>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
            className="max-w-md mx-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">
                  Name :
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name here..."
                  className="bg-black/30 border-none text-white placeholder:text-gray-500 flex h-10 w-full rounded-md px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2">
                  Email :
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email here..."
                  className="bg-black/30 border-none text-white placeholder:text-gray-500 flex h-10 w-full rounded-md px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2">
                  Message...
                </label>
                <div className="relative">
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter the message Here..."
                    className="bg-black/30 border-none text-white placeholder:text-gray-500 min-h-32 flex w-full rounded-md px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink"
                    required
                  />
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    <ArrowRight size={30} className="text-pink" />
                  </motion.div>
                </div>
              </div>

              <div className="text-center">
                <Button type="submit" className="bg-pink hover:bg-purple text-white px-8 py-6 rounded-full">
                  Contact Me
                </Button>
              </div>
            </form>
          </motion.div>
        </div>

        
      </div>
    </section>
  )
}

export default ContactSection

