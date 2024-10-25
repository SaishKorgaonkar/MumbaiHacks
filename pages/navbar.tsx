'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"

const navItems = [
  {
    name: 'Home',
    href: '/',
    dropdownItems: []
  },
  {
    name: 'Features',
    href: '/features',
    dropdownItems: [
      { name: 'AI-Powered Analytics', href: '/features/analytics' },
      { name: 'Personalized Campaigns', href: '/features/personalization' },
      { name: 'Multi-language Support', href: '/features/languages' }
    ]
  },
  {
    name: 'Services',
    href: '/services',
    dropdownItems: [
      { name: 'Market Research', href: '/services/research' },
      { name: 'Campaign Management', href: '/services/campaigns' },
      { name: 'Performance Tracking', href: '/services/tracking' }
    ]
  },
  {
    name: 'Pricing',
    href: '/pricing',
    dropdownItems: []
  },
  {
    name: 'Contact Us',
    href: '/contact',
    dropdownItems: []
  }
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  return (
    <nav className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="font-bold text-xl">IndiaMarket AI</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-600 hover:text-white transition duration-150 ease-in-out flex items-center"
                  >
                    {item.name}
                    {item.dropdownItems.length > 0 && (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    )}
                  </button>
                  {item.dropdownItems.length > 0 && (
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute z-10 left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                        >
                          <div className="py-1">
                            {item.dropdownItems.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-100 hover:text-purple-900"
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Login / Sign Up
            </Button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-purple-600 hover:text-white w-full text-left"
                  >
                    {item.name}
                    {item.dropdownItems.length > 0 && (
                      <ChevronDown className="ml-1 h-4 w-4 inline" />
                    )}
                  </button>
                  {activeDropdown === item.name && item.dropdownItems.length > 0 && (
                    <div className="pl-4">
                      {item.dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-purple-600 hover:text-white"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-4">
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  Login / Sign Up
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}