'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Trexx Ai
          </Link>
          <div className="hidden md:flex space-x-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/portfolio">Portfolio</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 space-y-2"
          >
            <NavLink href="/" mobile>Home</NavLink>
            <NavLink href="/services" mobile>Services</NavLink>
            <NavLink href="/about" mobile>About</NavLink>
            <NavLink href="/portfolio" mobile>Portfolio</NavLink>
            <NavLink href="/contact" mobile>Contact</NavLink>
          </motion.div>
        )}
      </nav>
    </header>
  )
}

const NavLink = ({ href, children, mobile = false }: { href: string; children: React.ReactNode; mobile?: boolean }) => (
  <Link href={href} className={`${mobile ? 'block' : ''} text-gray-700 hover:text-blue-600 transition duration-300`}>
    {children}
  </Link>
)

export default Header

