'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Rideforyou Transport',
    description: 'A transportation solution with mobile apps and backend services.',
    image: '/placeholder.svg?height=300&width=400', // Replace with actual image or project screenshot
    tags: ['Flutter', 'React', 'Pocketbase', 'MongoDB', 'Firebase', 'Node.js', 'Express'],
    links: [
      'https://apps.apple.com/in/app/rideforyoutransport/id6505006863'
    ],
  },
  {
    title: 'Tyro',
    description: 'An Fitness Platform along with a fitness device called smart mirror.',
    image: '/placeholder.svg?height=300&width=400', // Replace with actual image or project screenshot
    tags: ['React', 'Android Native', 'WebFlow', 'Node.js', 'Express', 'PostgreSQL'],
  },
  
  {
    title: 'Brskly',
    description: 'A platform offering mobile app solutions for businesses and customers.',
    image: '/placeholder.svg?height=300&width=400', // Replace with actual image or project screenshot
    tags: ['Flutter', 'Android Native'],
    links: [
      'https://play.google.com/store/apps/details?id=co.brskly.cube8&pcampaignid=web_share',
      'https://play.google.com/store/apps/details?id=co.brskly.instaaoffice&pcampaignid=web_share'
    ]
  },
  {
    title: 'TenFold',
    description: 'An educational app for managing and delivering courses.',
    image: '/placeholder.svg?height=300&width=400', // Replace with actual image or project screenshot
    tags: ['Android Native'],
    links: [
      'https://play.google.com/store/apps/details?id=com.tenfold.edu&pcampaignid=web_share'
    ]
  },
  {
    title: 'Rekovar Healthcare',
    description: 'A healthcare mobile solution for better management of health-related data.',
    image: '/placeholder.svg?height=300&width=400', // Replace with actual image or project screenshot
    tags: ['Android Native'],
  },
  {
    title: 'StudyBharat',
    description: 'A mobile app to help students with educational resources and tools.',
    image: '/placeholder.svg?height=300&width=400', // Replace with actual image or project screenshot
    tags: ['Android Native'],
    links: [
      'https://play.google.com/store/apps/details?id=com.study.bharat&pcampaignid=web_share'
    ]
  },
  {
    title: 'dQuiz',
    description: 'A quiz app with real-time data handling and analytics.',
    image: '/placeholder.svg?height=300&width=400', // Replace with actual image or project screenshot
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'Genpass',
    description: 'A password generation tool with a simple, user-friendly interface.',
    image: '/placeholder.svg?height=300&width=400', // Replace with actual image or project screenshot
    tags: ['React'],
    links: [
      'https://sahilmx.github.io/generatepass/'
    ]
  },
  {
    title: 'Edutracker',
    description: 'An app for tracking educational progress and activities.',
    image: '/placeholder.svg?height=300&width=400', // Replace with actual image or project screenshot
    tags: ['Android Native'],
    links: [
      'https://play.google.com/store/apps/details?id=in.digitaldreamssystems.edutracker&pcampaignid=web_share'
    ]
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
            <div className="relative">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              {/* Optional: If you want to add links to the images */}
              {project.links && project.links.length > 0 && (
                <div className="absolute top-2 right-2 bg-blue-700 text-white text-xs rounded-lg px-2 py-1">
                  <a href={project.links[0]} target="_blank" rel="noopener noreferrer">
                    Visit App
                  </a>
                </div>
              )}
            </div>
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
              {project.links && project.links.length > 0 && (
                <div className="mt-4">
                  {project.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Visit Project {idx + 1}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
