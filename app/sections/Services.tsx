"use client"

import { motion } from "framer-motion"
import {  Database, FastForward, GitFork, KeyRound, Settings, TabletSmartphone } from "lucide-react"

export default function Services() {
  const services = [
    {
      name: "Responsive Design",
      description: "Your website will work perfectly to all screen sizes mobile, tablet, and desktop ensuring visitors can access it from anywhere and enjoy a polished UI/UX experience on any device.",
      icon: TabletSmartphone,
      link_to: "/contact"
    },
    {
      name: "Optimized Performance",
      description: "If a website takes more than 2–3 seconds to load, you risk losing potential clients. I optimize your site to load in around 1 second for maximum results.",
      icon: FastForward,
      link_to: "/contact"
    },
    {
      name: "Maintenance & Support",
      description: "After your website goes live, it needs regular updates and care. I provide maintenance and support for your site based on our contract.",
      icon: Settings,
      link_to: "/contact"
    },
    {
      name: "Security Implementation",
      description: "I implement authentication, role-based access control, secure data validation, and encryption standards to ensure your system stay protected and secure.",
      icon: KeyRound,
      link_to: "/contact"
    },
    {
      name: "Database Design",
      description: "I design and create normalized, efficient database structures and optimize queries to ensure fast performance and accurate data handling.",
      icon: Database,
      link_to: "/contact"
    },
    {
      name: "API Development",
      description: "I develop secure and scalable APIs that connects between systems that allow them to comunicate effeciently and seamlessly.",
      icon: GitFork,
      link_to: "/contact"
    }
  ]

  return (
    <section id="services" className="relative bg-black-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-6 py-20 lg:py-30 z-10">
        {/* <WavyBackground
          backgroundFill="#0a0a0af1"
          waveWidth={1}

          blur={0}
          waveOpacity={0}
        > */}
        <div className="text-left flex flex-col">
          {/* Section Header */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-4 text-4xl text-center leading-tight font-extrabold text-gray-300"
          >
            What I <span className="text-blue-primary/70">Do</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-gray-400 mb-12 text-center"
          >
            Things that I do, not only to improve your brand.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isLastAndOdd = i === services.length - 1 && services.length % 2 !== 0;

            return (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                key={i}
                className={`
                  bg-gray-900/90 hover:bg-gray-900 group border border-gray-700 
                  hover:border-blue-primary hover:shadow-blue-primary/20 
                  hover:-translate-y-2 transform shadow-lg rounded-lg h-full w-full p-2 z-10 
                  transition-all duration-300
                  ${isLastAndOdd ? "lg:col-span-1 md:col-span-2" : "col-span-1"}
                `}
              >
                <div className="flex flex-col gap-4 border border-gray-700 rounded-lg h-full w-full p-8">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-primary/50 rounded-md p-2">
                      <Icon size={24} />
                    </div>
                    <h2 className="text-xl font-bold">{service.name}</h2>
                  </div>
                  <p className="text-gray-300">
                    {service.description}
                  </p>
                  <a href={service.link_to} className="mt-auto underline hover:decoration-transparent underline-offset-3 text-sm font-semibold hover:bg-blue-primary/50 rounded-sm p-1 px-2 w-fit transition-all duration-200">
                    Get Started
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
        {/* </WavyBackground> */}
      </div>

    </section >
  )
}