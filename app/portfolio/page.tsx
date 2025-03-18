'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Rideforyou Transport',
    description: 'A transportation solution with mobile apps and backend services.',
    image: 'https://image.freepik.com/free-photo/transportation-travel-vehicle-concept_11971773.htm', // Replace with actual image URL from Freepik
    tags: ['Flutter', 'React', 'Pocketbase', 'MongoDB', 'Firebase', 'Node.js', 'Express'],
    links: [
      'https://apps.apple.com/in/app/rideforyoutransport/id6505006863'
    ],
  },
  {
    title: 'Tyro',
    description: 'A Fitness Platform along with a fitness device called smart mirror.',
    image: 'https://image.freepik.com/free-photo/young-people-working-out-healthy-lifestyle_12443083.htm', // Replace with actual image URL from Freepik
    tags: ['React', 'Android Native', 'WebFlow', 'Node.js', 'Express', 'PostgreSQL'],
  },
  
  {
    title: 'Brskly',
    description: 'A platform offering mobile app solutions for businesses and customers.',
    image: 'https://image.freepik.com/free-photo/business-people-working-office_11516811.htm', // Replace with actual image URL from Freepik
    tags: ['Flutter', 'Android Native'],
    links: [
      'https://play.google.com/store/apps/details?id=co.brskly.cube8&pcampaignid=web_share',
      'https://play.google.com/store/apps/details?id=co.brskly.instaaoffice&pcampaignid=web_share'
    ]
  },
  {
    title: 'TenFold',
    description: 'An educational app for managing and delivering courses.',
    image: 'https://image.freepik.com/free-photo/student-hands-working-with-digital-tablet_8925720.htm', // Replace with actual image URL from Freepik
    tags: ['Android Native'],
    links: [
      'https://play.google.com/store/apps/details?id=com.tenfold.edu&pcampaignid=web_share'
    ]
  },
  {
    title: 'Rekovar Healthcare',
    description: 'A healthcare mobile solution for better management of health-related data.',
    image: 'https://image.freepik.com/free-photo/young-people-hands-healthcare-medical_12452089.htm', // Replace with actual image URL from Freepik
    tags: ['Android Native'],
  },
  {
    title: 'StudyBharat',
    description: 'A mobile app to help students with educational resources and tools.',
    image: 'https://image.freepik.com/free-photo/education-learn-online-concept_12471182.htm', // Replace with actual image URL from Freepik
    tags: ['Android Native'],
    links: [
      'https://play.google.com/store/apps/details?id=com.study.bharat&pcampaignid=web_share'
    ]
  },
  {
    title: 'dQuiz',
    description: 'A quiz app with real-time data handling and analytics.',
    image: 'https://image.freepik.com/free-photo/quiz-competition_12243456.htm', // Replace with actual image URL from Freepik
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
  {
    title: 'Genpass',
    description: 'A password generation tool with a simple, user-friendly interface.',
    image: 'https://image.freepik.com/free-photo/hand-keypad_11701017.htm', // Replace with actual image URL from Freepik
    tags: ['React'],
    links: [
      'https://sahilmx.github.io/generatepass/'
    ]
  },
  {
    title: 'Edutracker',
    description: 'An app for tracking educational progress and activities.',
    image: 'https://image.freepik.com/free-photo/education-concept_11150248.htm', // Replace with actual image URL from Freepik
    tags: ['Android Native'],
    links: [
      'https://play.google.com/store/apps/details?id=in.digitaldreamssystems.edutracker&pcampaignid=web_share'
    ]
  },
  {
    title: 'Construction Process Automation Platform',
    description: 'A platform that helps builders plan, deploy, track, and manage construction projects.',
    image: 'https://image.freepik.com/free-photo/construction-site_10555120.htm', // Replace with actual image URL from Freepik
    tags: ['Java', 'MySQL', 'GCP', 'AWS'],
  },
  {
    title: 'Online Learning Platform',
    description: 'An online learning platform with live classes, mock test papers, daily quizzes, and news updates for competitive exam preparation.',
    image: 'https://image.freepik.com/free-photo/online-education_10714948.htm', // Replace with actual image URL from Freepik
    tags: ['Golang', 'MongoDB'],
  },
  {
    title: 'Home Komforts',
    description: 'Offers modular furniture, home furnishings, accessories, and mattresses.',
    image: 'https://image.freepik.com/free-photo/interior-design-modern-living-room_12568592.htm', // Replace with actual image URL from Freepik
    tags: ['Golang', 'PostgreSQL', 'MongoDB'],
    links: [
      'https://www.homekomforts.com/'
    ]
  },
  {
    title: 'Kurlon',
    description: 'A company providing a wide range of mattresses and pillows.',
    image: 'https://image.freepik.com/free-photo/comfortable-mattress-bedroom_11847863.htm', // Replace with actual image URL from Freepik
    tags: ['Golang', 'MySQL'],
    links: [
      'https://kurlon.com/'
    ]
  },
  {
    title: 'The AutoParts Shop',
    description: 'Distributes auto parts across 48 states in the US, ensuring product durability and compatibility.',
    image: 'https://image.freepik.com/free-photo/car-parts-tools_10512268.htm', // Replace with actual image URL from Freepik
    tags: ['Node.js', 'Golang', 'MongoDB'],
    links: [
      'https://www.theautopartsshop.com/'
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
