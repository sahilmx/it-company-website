'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const teamMembers = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    name: 'Jane Smith',
    role: 'CTO',
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    name: 'Mike Johnson',
    role: 'Lead Developer',
    image: '/placeholder.svg?height=200&width=200',
  },
  {
    name: 'Sarah Brown',
    role: 'UX Designer',
    image: '/placeholder.svg?height=200&width=200',
  },
]

export default function About() {
  return (
    <div className="container mx-auto px-6 py-12">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h1 className="text-4xl font-bold text-center mb-8">About TechNova Solutions</h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
          TechNova Solutions is a leading IT company dedicated to empowering businesses through innovative technology solutions. With our expert team and cutting-edge approaches, we help organizations thrive in the digital age.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
          Our mission is to deliver exceptional IT services and solutions that drive business growth, enhance operational efficiency, and foster innovation for our clients. We are committed to staying at the forefront of technological advancements and providing unparalleled expertise to meet the evolving needs of businesses in the digital landscape.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="text-center"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}

