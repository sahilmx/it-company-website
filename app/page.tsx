'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl font-bold mb-6 text-gray-800 leading-tight">
          Elevate Your Business with DeepFlow Consulting
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          We partner with businesses to transform operations through cutting-edge technology, security, and digital solutions that scale with your growth.
        </p>
        <Link href="/contact" className="bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-800 transition duration-300 ease-in-out">
          Let's Start Your Transformation
        </Link>
      </motion.section>

      {/* About Us Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">About DeepFlow Consulting</h2>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
          <div className="lg:w-1/2">
            <Image src="/about-us.png" alt="About Us" width={600} height={400} className="rounded-lg shadow-xl" />
          </div>
          <div className="lg:w-1/2 text-lg text-gray-600 leading-relaxed">
            <p>
              DeepFlow Consulting has been a trusted partner for businesses looking to navigate the complexities of technology. Our goal is simple: to provide solutions that not only meet but exceed your expectations. With years of experience, we empower your business to scale efficiently and securely in the digital era.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Services Overview */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20"
      >
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
          <Image src="/nx_mobile_app_development-600x499.jpg" alt="Cloud Computing" width={500} height={300} className="w-full h-48 object-cover rounded-lg mb-6" />
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cloud Computing</h2>
          <p className="text-gray-600 leading-relaxed">
            Unlock the power of cloud technology to increase your business agility. From cloud migration to management, we provide secure and scalable cloud infrastructure that empowers your team.
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
          <Image src="/persona_trabajando_en_la_seguridad_de_la_informacion-scaled.jpg" alt="Cybersecurity" width={500} height={300} className="w-full h-48 object-cover rounded-lg mb-6" />
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cybersecurity</h2>
          <p className="text-gray-600 leading-relaxed">
            Safeguard your business from the ever-growing threat landscape. Our expert cybersecurity solutions ensure your data, networks, and systems are protected against evolving risks.
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
          <Image src="/nx_software_development-600x400.jpg" alt="Software Development" width={500} height={300} className="w-full h-48 object-cover rounded-lg mb-6" />
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Software Development</h2>
          <p className="text-gray-600 leading-relaxed">
            Whether you're building a custom enterprise system or a customer-facing application, we create software solutions that are scalable, secure, and designed to grow with your business.
          </p>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="bg-gray-50 py-16 mb-20"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">What Our Clients Say</h2>
        <div className="flex justify-center items-center space-x-10">
          <div className="max-w-lg bg-white p-8 rounded-xl shadow-lg">
            <p className="text-lg text-gray-600 mb-4">
              "DeepFlow Consulting transformed our IT operations. Their team provided invaluable insights and built a technology strategy that scaled with our business. We couldn't have asked for a better partner."
            </p>
            <h4 className="font-semibold text-gray-800">Abhishek</h4>
            <p className="text-gray-500">CEO, Brskly</p>
          </div>
          <div className="max-w-lg bg-white p-8 rounded-xl shadow-lg">
            <p className="text-lg text-gray-600 mb-4">
              "The level of expertise and professionalism that DeepFlow brings to the table is unmatched. They helped us streamline our processes and improve our security posture in record time."
            </p>
            <h4 className="font-semibold text-gray-800">Gurdeep Singh</h4>
            <p className="text-gray-500">CEO, RideForuTransport</p>
          </div>
        </div>
      </motion.section>

      {/* Contact Us Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="bg-gray-100 py-16 text-center mb-20"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Get in Touch</h2>
        <p className="text-xl text-gray-600 mb-6">Have a project in mind? Let's discuss how we can help your business achieve its goals with the right technology solutions.</p>
        <Link href="/contact" className="bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-800 transition duration-300 ease-in-out">
          Contact Us
        </Link>
      </motion.section>

      {/* Partners Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Partners</h2>
        <div className="flex justify-center space-x-12">
          {/* Meta Logo */}
          <div className="w-32 h-32 bg-gray-200 flex justify-center items-center rounded-full">
            <Image src="/meta_logo.png" alt="Meta Logo" width={50} height={50} className="object-contain" />
          </div>

          {/* AWS Logo */}
          <div className="w-32 h-32 bg-gray-200 flex justify-center items-center rounded-full">
            <Image src="/aws_logo.webp" alt="AWS Logo" width={50} height={50} className="object-contain" />
          </div>

          {/* Google Logo */}
          <div className="w-32 h-32 bg-gray-200 flex justify-center items-center rounded-full">
            <Image src="/google_logo.webp" alt="Google Logo" width={50} height={50} className="object-contain" />
          </div>
        </div>
      </motion.section>
    </div>
  )
}
