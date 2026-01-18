"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Resume() {
  const exprience = [
    {
      company: "Arvo",
      date: "September 2025",
      location: "Philippines, Antipolo City",
      description: "At Arvo, I focus on developing high-quality landing pages and crafting intuitive UI/UX experiences. My role combines frontend development with user-centered design, ensuring every interface is both visually engaging and functionally smooth. I collaborate closely with backend developers and our team lead to align design decisions with technical requirements, maintain consistency, and deliver polished, production-ready features.",
      techstack: [
        { stack: "nextjs", icon: "nextjs-original.svg" },
        { stack: "tailwindcss", icon: "tailwindcss-original.svg" },
      ],
    },
    // {
    //   company: "Internship | Jerry",
    //   date: "March 2025",
    //   location: "Philippines, Antipolo City",
    //   description: "At Arvo, I focus on developing high-quality landing pages and crafting intuitive UI/UX experiences. My role combines frontend development with user-centered design, ensuring every interface is both visually engaging and functionally smooth. I collaborate closely with backend developers and our team lead to align design decisions with technical requirements, maintain consistency, and deliver polished, production-ready features.",
    //   techstack: [
    //     { stack: "vuejs", icon: "vuejs-original.svg" },
    //     { stack: "css5", icon: "css5-original.svg" },
    //   ],
    // },
    {
      company: "Freelance Developer | Self-Employed",
      date: "May 2025 - Present",
      location: "Philippines, Antipolo City",
      description: "Communicate with clients to understand their design requirements and desired changes. Develop simple portfolios and custom pages based on client specifications. Implement requested modifications within agreed timeframes to ensure timely delivery. Offer assistance to students and individuals in creating functional web pages for their needs. ",
      techstack: [
        { stack: "react", icon: "react-original.svg" },
        { stack: "vuejs", icon: "vuejs-original.svg" },
        { stack: "nextjs", icon: "nextjs-original.svg" },
        { stack: "tailwindcss", icon: "tailwindcss-original.svg" },
      ],
    },
  ]

  return (
    <section id="resume" className="relative bg-black-primary overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 md:px-6 py-20 lg:py-30 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-4 text-4xl leading-tight font-extrabold text-white"
        >
          Professional <span className="text-blue-primary">Exprience</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-gray-400 mb-12"
        >
          I build efficient, scalable digital solutions using modern and dependable technologies.
        </motion.p>

        <div className="relative w-full mx-auto space-y-8">
          <div className="absolute top-0 bottom-0 w-[0.5px] bg-gray-700"></div>

          {exprience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`w-full flex justify-start`}>

              <div className={`w-full pl-10`}>
                <div className="relative bg-linear-to-t from-blue-primary/20 via-gray-900 to-gray-900 border border-gray-700 rounded-md md:p-6 p-3 shadow-md">
                  <div className={`absolute left-[-10px] top-5 h-5 w-5 rounded-full bg-gray-900 border border-gray-700`} />
                  <h1 className="text-2xl font-semibold text-white">{exp.company}</h1>
                  <span className="text-sm text-gray-400">
                    {exp.location} — {exp.date}
                  </span>

                  <p className="mt-4 text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.techstack.map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-xs rounded-md bg-gray-800 border border-gray-700 text-gray-300">
                        <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.stack}/${tech.icon}`} className="h-6 w-fit" />
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex mt-10 gap-6">
          {/*<button className="cursor-pointer px-6 py-2 rounded-md bg-blue-primary text-black font-semibold shadow-[0_0_10px_#0095ff] hover:shadow-[0_0_40px_#0095ff] transition-all duration-300">
            <i className="fa-solid fa-download mr-2"></i>Resume
          </button>*/}

          <Link href="/resume" className="cursor-pointer px-6 py-2 bg-blue-primary/5 rounded-md border border-blue-primary text-blue-primary hover:bg-blue-primary hover:text-black transition-all duration-300">
            <i className="fa-solid fa-eye mr-2"></i>View Full
          </Link>
        </div>

      </div>
      <div className="absolute z-1 top-0 h-full w-full bg-linear-to-t from-transparent via-darkblue-primary/50 to-transparent"></div>
    </section>
  )
}