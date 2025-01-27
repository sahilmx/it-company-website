'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-12">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to TechNova Solutions</h1>
        <p className="text-xl text-gray-600 mb-8">Empowering businesses through innovative IT solutions</p>
        <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
          Get Started
        </Link>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="grid md:grid-cols-3 gap-8 mb-16"
      >
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Innovative Solutions</h2>
          <p className="text-gray-600">Cutting-edge technology tailored to your business needs</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Expert Team</h2>
          <p className="text-gray-600">Skilled professionals with years of industry experience</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">24/7 Support</h2>
          <p className="text-gray-600">Round-the-clock assistance for your IT infrastructure</p>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Our Expertise</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Cloud Computing</h3>
              <p className="text-gray-600">Scalable and secure cloud solutions</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364C4 6.49 7.582 3 12 3c4.418 0 8 3.49 8 8 0 2.473-.345 4.866-.99 7.132" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Cybersecurity</h3>
              <p className="text-gray-600">Robust protection against cyber threats</p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-8">Trusted by Industry Leaders</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <Image src="/placeholder.svg?height=60&width=120" alt="Client Logo 1" width={120} height={60} />
          <Image src="/placeholder.svg?height=60&width=120" alt="Client Logo 2" width={120} height={60} />
          <Image src="/placeholder.svg?height=60&width=120" alt="Client Logo 3" width={120} height={60} />
          <Image src="/placeholder.svg?height=60&width=120" alt="Client Logo 4" width={120} height={60} />
        </div>
      </motion.section>
    </div>
  )
}

