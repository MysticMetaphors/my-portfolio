"use client"

import { motion } from "framer-motion"
import { WavyBackground } from "../components/ui/wavy-background"

export default function resume() {
  const exprience = [
    {
      company: "Arvo",
      date: "September 10, 2025",
      location: "Philippines, Antipolo City",
      description: "At Arvo, I focus on developing high-quality landing pages and crafting intuitive UI/UX experiences. My role combines frontend development with user-centered design, ensuring every interface is both visually engaging and functionally smooth. I collaborate closely with backend developers and our team lead to align design decisions with technical requirements, maintain consistency, and deliver polished, production-ready features.",
      techstack: [
        { stack: "react", icon: "react-original.svg" },
        { stack: "vuejs", icon: "vuejs-original.svg" },
        { stack: "nextjs", icon: "nextjs-original.svg" },
        { stack: "tailwindcss", icon: "tailwindcss-original.svg" },
      ],
    },
    {
      company: "Arvo",
      date: "September 10, 2025",
      location: "Philippines, Antipolo City",
      description: "At Arvo, I focus on developing high-quality landing pages and crafting intuitive UI/UX experiences. My role combines frontend development with user-centered design, ensuring every interface is both visually engaging and functionally smooth. I collaborate closely with backend developers and our team lead to align design decisions with technical requirements, maintain consistency, and deliver polished, production-ready features.",
      techstack: [
        { stack: "react", icon: "react-original.svg" },
        { stack: "vuejs", icon: "vuejs-original.svg" },
        { stack: "nextjs", icon: "nextjs-original.svg" },
        { stack: "tailwindcss", icon: "tailwindcss-original.svg" },
      ],
    },
    {
      company: "Arvo",
      date: "September 10, 2025",
      location: "Philippines, Antipolo City",
      description: "At Arvo, I focus on developing high-quality landing pages and crafting intuitive UI/UX experiences. My role combines frontend development with user-centered design, ensuring every interface is both visually engaging and functionally smooth. I collaborate closely with backend developers and our team lead to align design decisions with technical requirements, maintain consistency, and deliver polished, production-ready features.",
      techstack: [
        { stack: "react", icon: "react-original.svg" },
        { stack: "vuejs", icon: "vuejs-original.svg" },
        { stack: "nextjs", icon: "nextjs-original.svg" },
        { stack: "tailwindcss", icon: "tailwindcss-original.svg" },
      ],
    }
  ]

  return (
    <>
      <section id="projects" className="relative bg-black-primary overflow-hidden sm:p-0 pt-25">
        {/* <div className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3/4 w-full bg-gradient-to-t from-transparent via-darkblue-primary/35 to-transparent pointer-events-none"></div> */}

        <WavyBackground
          backgroundFill="#0a0a0af1"
          waveWidth={1}
          blur={0}
          waveOpacity={0}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-6 py-20 lg:py-30 z-10">
            <div className="text-left flex flex-col">
              {/* Section Header */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="mb-4 text-4xl leading-tight font-extrabold text-gray-300"
              >
                My <span className="text-blue-primary/70">Story</span>, At a Glance.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-gray-400 mb-12"
              >
                Just a few things I’ve built along the way.
              </motion.p>
            </div>
            <div className="relative w-full mx-auto space-y-8">

              <div className="grid grid-cols-2 gap-8">
                <div className="h-full relative bg-gray-900 border border-gray-700 rounded-md md:p-6 p-3 shadow-md mb-6">
                  <h1 className="text-lg font-bold mb-3">Full-Stack Development | Software Engineering | Web Development </h1>
                  {/* <span className="text-sm text-gray-400">Skill Power Institute - Ongoing</span> */}
                  <p className="mt-3">Full-stack developer with experience in frontend development, live data fetching, and simple backend systems using
                    Laravel, Inertia, and Ziggy. Skilled in requirements gathering, system analysis, and planning for maintainability. Adept at
                    creating efficient designs, prototypes, and estimates while maintaining coding standards. </p>
                </div>

                <div className="h-full relative bg-gray-900 border border-gray-700 rounded-md md:p-6 p-3 shadow-md mb-6">
                  <h1 className="text-lg font-bold mb-3">Bachelor of Science in Computer Science</h1>
                  <span className="text-sm text-gray-400">Skill Power Institute - Ongoing</span>
                  <p className="mt-3">I chose BSCS to gain a deeper understanding of how computer systems work and to develop the skills needed to solve real-world problems through technology.</p>
                </div>
              </div>

              <div className="relative w-full mx-auto space-y-8">
                <div className="absolute top-0 bottom-0 w-[0.5px] bg-gray-700"></div>

                {exprience.map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                    // viewport={{ once: true }}
                    className={`w-full flex justify-start`}>

                    <div className={`w-full pl-10`}>
                      <div className="relative bg-gray-900 border border-gray-700 rounded-md md:p-6 p-3 shadow-md">
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
            </div>
          </div>
        </WavyBackground>
      </section>
    </>
  )
}