'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A scalable e-commerce solution for a global retail brand.',
    image: '/placeholder.svg?height=300&width=400',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Healthcare Management System',
    description: 'An integrated system for managing patient records and hospital operations.',
    image: '/placeholder.svg?height=300&width=400',
    tags: ['Angular', 'Python', 'PostgreSQL'],
  },
  {
    title: 'Financial Analytics Dashboard',
    description: 'Real-time financial data visualization for a leading investment firm.',
    image: '/placeholder.svg?height=300&width=400',
    tags: ['Vue.js', 'D3.js', 'AWS'],
  },
  {
    title: 'Smart City Infrastructure',
    description: 'IoT-based solution for monitoring and managing city resources.',
    image: '/placeholder.svg?height=300&width=400',
    tags: ['IoT', 'Machine Learning', 'Big Data'],
  },
]

export default function Portfolio() {
  return (
    <div className="container mx-auto px-6 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Our Portfolio
      </motion.h1>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

