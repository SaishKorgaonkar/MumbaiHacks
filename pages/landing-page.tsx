'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { MapPin, Image, MessageSquare, Mail, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  const [isHovered, setIsHovered] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 })
  }, [controls])

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const scaleOnHover = {
    scale: isHovered ? 1.05 : 1,
    transition: { duration: 0.3 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-purple-100 overflow-hidden">
      <div className="floating-shapes">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="shape"></div>
        ))}
      </div>

      <header className="container mx-auto px-4 py-8 relative">
        <nav className="flex justify-between items-center">
          <motion.div 
            className="text-2xl font-bold text-purple-800"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            IndiaMarket AI
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button variant="outline" className="text-purple-800 border-purple-800 hover:bg-purple-100">
              Log In
            </Button>
          </motion.div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12 relative">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-center text-purple-900 mb-8"
          {...fadeIn}
        >
          Unlock the Power of Indian Consumer Insights
        </motion.h1>

        <motion.p 
          className="text-xl text-center text-purple-700 mb-12"
          {...fadeIn}
        >
          AI-Driven Marketing Solutions Tailored for India's Diverse Markets
        </motion.p>

        <motion.div 
          className="flex justify-center mb-16"
          {...fadeIn}
        >
          <Button 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white relative overflow-hidden group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div className="flex items-center relative z-10" animate={scaleOnHover}>
              Get Started
              <ArrowRight className="ml-2" />
            </motion.div>
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-orange-400 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </Button>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          {...fadeIn}
        >
          <div className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
            <img 
              src="/placeholder.svg?height=300&width=400" 
              alt="Diverse Indian consumers" 
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
            <img 
              src="/placeholder.svg?height=300&width=400" 
              alt="AI-powered marketing" 
              className="w-full h-64 object-cover"
            />
          </div>
        </motion.div>

        <motion.h2 
          className="text-3xl font-bold text-center text-purple-800 mb-12"
          {...fadeIn}
        >
          Features That Drive Results
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          initial="hidden"
          animate="show"
        >
          {[
            { icon: <MapPin size={40} />, title: "Location-Based Marketing", description: "Target customers based on regional preferences and behaviors" },
            { icon: <Image size={40} />, title: "Prompt-to-Image Generation", description: "Create culturally relevant visuals with AI" },
            { icon: <MessageSquare size={40} />, title: "AI-Powered Tweet Generation", description: "Craft engaging tweets that resonate with Indian audiences" },
            { icon: <Mail size={40} />, title: "Personalized Email Campaigns", description: "Tailor your message to diverse Indian consumer segments" }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform duration-300 feature-card"
              variants={fadeIn}
            >
              <div className="text-orange-500 mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-purple-800 mb-2">{feature.title}</h3>
              <p className="text-purple-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </main>

      <footer className="bg-purple-900 text-white py-8 mt-16 relative">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 IndiaMarket AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}