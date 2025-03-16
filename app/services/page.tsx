'use client'

import { motion } from 'framer-motion'

const services = [
  {
    title: 'Cloud Computing',
    description: 'We offer scalable and secure cloud solutions that help businesses optimize their operations, reduce infrastructure costs, and ensure seamless access to data. Whether migrating to the cloud or building cloud-native applications, our team provides customized cloud architectures, management, and security protocols to meet your unique needs.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: 'Cybersecurity',
    description: 'With the growing number of cyber threats, we provide comprehensive security solutions to safeguard your digital assets, infrastructure, and sensitive information. From risk assessments and security audits to implementing advanced threat detection and response strategies, we ensure that your business stays safe in an ever-evolving security landscape.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: 'Software Development',
    description: 'We develop custom software solutions tailored to your specific business needs. Our development process focuses on creating intuitive, scalable, and high-performing applications that align with your goals. Whether its a mobile app, web application, or enterprise-level solution, we ensure seamless integration and a user-friendly experience.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'IT Consulting',
    description: 'Our IT consulting services focus on helping businesses align their technology strategy with their business goals. We provide expert advice on technology adoption, infrastructure optimization, digital transformation, and IT project management to ensure your IT systems enable business growth and operational efficiency.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    title: 'Network Infrastructure',
    description: 'We design and implement robust network infrastructures that ensure high availability, scalability, and security. From local area networks (LANs) to wide area networks (WANs), we provide solutions that ensure your business operates smoothly and without interruptions. Our network experts create solutions that guarantee fast and reliable connectivity for your entire organization.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    title: 'Data Analytics',
    description: 'We turn your data into actionable insights that empower better business decisions. Our data analytics services include data collection, processing, visualization, and advanced analytics, helping you make sense of large datasets and drive strategic decision-making. With the power of data, we help uncover trends, optimize processes, and predict future outcomes to improve your bottom line.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <div className="container mx-auto px-6 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Our Services
      </motion.h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="text-blue-600 mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
