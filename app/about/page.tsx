'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

// const teamMembers = [
//   {
//     name: 'Ankit Kumar',
//     role: 'Android Developer',
//     image: '/ankit.jpeg?height=200&width=200',
//   },
//   {
//     name: 'Sahil Yadav',
//     role: 'FullStack Engineer',
//     image: '/sahil.png?height=200&width=200',
//   },
//   {
//     name: 'Neeraj Kumar',
//     role: 'Backend Developer',
//     image: '/neeraj.jpeg?height=200&width=200',
//   }
// ]

export default function About() {
  return (
    <div className="container mx-auto px-6 py-12">
<motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <h1 className="text-4xl text-center font-bold mb-8">About Trexx Ai</h1>
      
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        At <strong>Trexx Ai</strong>, we are committed to helping businesses harness the power of technology to unlock new opportunities, streamline operations, and fuel innovation. As a leading tech consulting firm with <strong>8 years of experience</strong>, we specialize in providing cutting-edge solutions designed to meet the unique needs of each organization we work with. Our team of expert consultants is dedicated to guiding businesses through the complexities of modern technology, ensuring they stay competitive in today’s fast-paced digital world.
      </p>
      
      <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
        We believe that technology should empower, not overwhelm. Whether you’re looking to drive a digital transformation, secure your IT infrastructure, or optimize your business processes, our mission is to provide you with the strategic insights and solutions that enable sustainable growth.
      </p>

      <h2 className="text-2xl text-center font-semibold mt-8 mb-4">Our Expertise:</h2>
      <ul className="text-xl text-gray-600 max-w-3xl mx-auto list-inside space-y-2">
        <li><strong>Digital Transformation:</strong> Empowering your business with innovative technology solutions that enhance efficiency and unlock new growth opportunities.</li>
        <li><strong>Cloud Solutions:</strong> Seamlessly migrating, managing, and optimizing your infrastructure in the cloud for greater scalability and flexibility.</li>
        <li><strong>Cybersecurity:</strong> Building strong defenses around your data and networks, ensuring your business remains secure in an increasingly complex threat landscape.</li>
        <li><strong>Data Analytics:</strong> Transforming raw data into actionable insights that drive informed decision-making and business intelligence.</li>
        <li><strong>Custom Software Development:</strong> Creating tailored, scalable, and high-performance software solutions that address your unique challenges and goals.</li>
      </ul>

      <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
        At <strong>Trexx Ai</strong>, we don’t just solve problems; we foster lasting partnerships built on trust and results. Let us help you leverage technology to its fullest potential and drive long-term success.
      </p>

      <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
        <strong>Discover how we can help you transform your business today!</strong>
      </p>
    </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
        <p className="text-lg text-gray-600  max-w-3xl mx-auto">
          Our mission is to deliver exceptional IT services and solutions that drive business growth, enhance operational efficiency, and foster innovation for our clients. We are committed to staying at the forefront of technological advancements and providing unparalleled expertise to meet the evolving needs of businesses in the digital landscape.
        </p>
      </motion.section>

      {/* <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </motion.section> */}
    </div>
  )
}

