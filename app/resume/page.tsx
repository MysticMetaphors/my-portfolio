"use client"

import { motion } from "framer-motion"
import { WavyBackground } from "../components/ui/wavy-background"
import Image from "next/image"
import { downloadResume } from "@/lib/utils"

export default function resume() {
  const exprience = [
    {
      company: "AR.VO IT Services | Frontend Developer & UI/UX Designer",
      date: "September 2025",
      location: "Philippines, Antipolo City",
      description: [
        "Communicate directly with clients to understand their design requirements and desired changes.",
        "Ensure that websites are not only appealing but performance efficient.",
        "Communicate and Align with Backend Developers and Lead Developers",
        "Maintain websites",
        "Code level designing to close gap from design to code",
        "Implement requested modifications within agreed timeframes to ensure timely delivery.",
      ],
      techstack: [
        { stack: "nextjs", icon: "nextjs-original.svg" },
        { stack: "react", icon: "react-original.svg" },
        { stack: "vuejs", icon: "vuejs-original.svg" },
        { stack: "tailwindcss", icon: "tailwindcss-original.svg" },
        { stack: "typescript", icon: "typescript-original.svg" },
        { stack: "javascript", icon: "javascript-original.svg" },
        { stack: "html5", icon: "html5-original.svg" },
      ],
    },
    {
      company: "Freelance Developer | Self-Employed",
      date: "May 2025 - Present",
      location: "Philippines, Antipolo City",
      description: [
        "Communicate with clients to understand their design requirements and desired changes.",
        "Develop simple portfolios and custom pages based on client specifications.",
        "Implement requested modifications within agreed timeframes to ensure timely delivery.",
        "Offer assistance to students and individuals in creating functional web pages for their needs.",
      ],
      techstack: [
        { stack: "react", icon: "react-original.svg" },
        { stack: "vuejs", icon: "vuejs-original.svg" },
        { stack: "nextjs", icon: "nextjs-original.svg" },
        { stack: "tailwindcss", icon: "tailwindcss-original.svg" },
      ],
    },
  ]

  const techstack = [
    { name: "React.js", icon: "react", img: "react-original.svg" },
    { name: "Vue.js", icon: "vuejs", img: "vuejs-original.svg" },
    { name: "Next.js", icon: "nextjs", img: "nextjs-original.svg" },
    { name: "Tailwind", icon: "tailwindcss", img: "tailwindcss-original.svg" },
    { name: "Laravel", icon: "laravel", img: "laravel-original.svg" },
    { name: "Supabase", icon: "supabase", img: "supabase-original.svg" },
    { name: "HTML5", icon: "html5", img: "html5-original.svg" },
    { name: "CSS", icon: "css3", img: "css3-original.svg" },
    { name: "Javascript", icon: "javascript", img: "javascript-original.svg" },
    { name: "Typescript", icon: "typescript", img: "typescript-original.svg" },
    { name: "CodeIgniter", icon: "codeigniter", img: "codeigniter-plain.svg" },
    { name: "PHP", icon: "php", img: "php-original.svg" },
    { name: "Git", icon: "git", img: "git-original.svg" }
  ]

  return (
    <>
      <section id="projects" className="relative bg-black-primary overflow-hidden sm:p-0 pt-25">
        {/* <div className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3/4 w-full bg-gradient-to-t from-transparent via-darkblue-primary/35 to-transparent pointer-events-none"></div> */}

        <div className="absolute top-0 h-screen w-full z-9">
          <WavyBackground
            backgroundFill="#0a0a0af1"
            waveWidth={1}
            blur={0}
            waveOpacity={0}
            containerClassName="w-full h-full"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-6 py-20 lg:py-30 z-10 relative">
          <div className="text-left flex flex-col">
            {/* Section Header */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-4 text-4xl leading-tight font-extrabold text-gray-300"
            >
              The <span className="text-blue-primary/70">Work</span> Behind My Growth
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-gray-400 mb-12"
            >
              look at the skills and experiences that define me
            </motion.p>
          </div>
          <div className="relative w-full mx-auto space-y-8">

            <div className="grid grid-cols-1 gap-8">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="h-full relative bg-linear-to-t from-blue-primary/20 via-gray-900 to-gray-900 border border-gray-700 rounded-md md:p-6 p-3 shadow-md mb-6">
                <h1 className="text-lg font-bold mb-3">Von Bryan S. Bañal</h1>
                <span className="text-sm text-gray-400">Frontend Developer & UI/UX Designer</span>
                <p className="mt-3">
                  I build modern, responsive, and user-focused web interfaces using the latest frontend technologies.
                  My work includes designing intuitive layouts, implementing smooth interactions, and ensuring seamless
                  performance across all devices. I specialize in creating clean, scalable, and maintainable frontend
                  solutions tailored to meet specific project requirements. I can also work with simple backend systems
                  with Laravel and Supabase.
                </p>
              </motion.div>
            </div>

            <div className="relative w-full mx-auto space-y-8">
              <div className="absolute top-0 bottom-0 w-[0.5px] bg-gray-700"></div>

              {exprience.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}

                  className={`w-full flex justify-start`}>

                  <div className={`w-full pl-10`}>
                    <div className="relative bg-linear-to-t from-blue-primary/20 via-gray-900 to-gray-900 border border-gray-700 rounded-md md:p-6 p-4 shadow-md">
                      <div className={`absolute left-[-10px] top-5 h-5 w-5 rounded-full bg-gray-900 border border-gray-700`} />
                      <h1 className="md:text-2xl text-lg font-semibold text-white">{exp.company}</h1>
                      <span className="text-sm text-gray-400">
                        {exp.location} — {exp.date}
                      </span>

                      <ul className="mt-4 text-gray-300 leading-relaxed">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="mb-2 flex flex-row items-start gap-2">
                            <span className="text-white">•</span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>

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
            <div className="text-left flex flex-col">
              {/* Section Header */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mb-4 text-4xl leading-tight font-extrabold text-gray-300"
              >
                My <span className="text-blue-primary/70">Tech Stack</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="text-gray-400 mb-12"
              >
                These are the technologies I have experience with and use in my projects.
              </motion.p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="grid lg:grid-cols-8 md:grid-cols-4 grid-cols-2 gap-8">
                {techstack.map((stack, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="flex flex-col hover:border-blue-primary items-center justify-center shadow-md p-6 w-32 h-32 rounded-xl transition-all duration-500 border border-gray-200 text-black bg-gray-800/[0.50] border-white/10 text-gray-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-lg"
                  >
                    <img
                      alt={stack.name}
                      width={400}
                      height={400}
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${stack.icon}/${stack.img}`}
                      className={`w-13 mb-3 ${stack.name === "WordPress" ? "invert-100 brightness-0" : ""}`} // if wordpress turn the logo white
                    />
                    <span className="text-sm font-medium">{stack.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <button onClick={downloadResume} className="fixed z-50 bottom-5 left-5 cursor-pointer px-6 py-2 rounded-md bg-blue-primary text-gray-900 font-semibold shadow-[0_0_10px_#0095ff] hover:shadow-[0_0_40px_#0095ff] transition-all duration-300">
              <i className="fa-solid fa-download mr-2"></i>Resume
            </button>
          </div>
        </div>
        {/* </WavyBackground> */}
      </section>
    </>
  )
}