"use client"

import Link from "next/link";
import MyCard from "../components/ui/MyCard";
import { motion } from "framer-motion";
// import { WavyBackground } from "../components/ui/wavy-background";

export default function Projects() {
  const projects = [
    {
      title: "Student Information System",
      description: "The Student Information System (SIS) is a centralized web-based platform designed to manage and streamline school operations from Grade 1 to Grade 12. It supports multiple user roles and handles the full student lifecycle—from initial inquiry to enrollment and academic management.",
      images: [
        'projects/SIS/image_1.png',
        'projects/SIS/image_2.png',
        'projects/SIS/image_3.png',
        'projects/SIS/image_4.png',
        'projects/SIS/image_5.png',
        'projects/SIS/image_6.png',
        'projects/SIS/image_7.png',
        'projects/SIS/image_8.png',
        'projects/SIS/image_9.png',
      ],
      collaborators: [
        {
          name: 'Von Bryan',
          avatar: 'bryan.png',
          linkedin: 'https://www.linkedin.com/in/von-bryan-ba%C3%B1al-1a1188314/'
        },
        {
          name: 'Darhyl Borcelis',
          avatar: 'collaborators/darhyl.png',
          linkedin: 'https://www.linkedin.com/in/darhyl-borcelis-159640403/'
        }
      ],
      icons: ["nextjs", "tailwindcss", "typescript", "laravel"],
      featured: true,
      type: "Engineered Solution",
      contribution: "I led the development of the Student Information System (SIS) as the lead developer, overseeing the entire project lifecycle from design to deployment. I collaborated closely with a team of developers and stakeholders to create a robust, user-friendly platform that streamlined school operations and enhanced the student experience."
    },
    {
      title: "Seinna Brews",
      description: "A cozy café experience focused on comfort, calm moments, and a warm escape from everyday life.",
      image: "projects/seinna_brews.png",
      url: "https://sienna-brews.vercel.app/",
      design: true,
      icons: ["nextjs", "tailwindcss", "typescript", "html5"],
      type: "Landing Page",
      contribution: "I designed and developed the Seinna Brews website, creating a cozy and inviting online presence that reflects the café's focus on comfort and calm moments. I implemented a user-friendly interface and responsive design to ensure an enjoyable browsing experience for visitors."
    },
    {
      title: "Solara Grand",
      description: "A premium luxury resort experience that blends refined comfort with unforgettable adventures and immersive moments.",
      image: "projects/solara_grand.png",
      url: "https://solara-grand.vercel.app/",
      design: true,
      icons: ["nextjs", "tailwindcss", "typescript", "html5"],
      type: "Landing Page",
      contribution: "I designed and developed the Solara Grand website, creating a luxurious and immersive online presence that reflects the resort's blend of refined comfort and unforgettable adventures. I implemented a visually stunning design and responsive layout to provide an engaging browsing experience for potential guests."
    },
    {
      title: "Outpost",
      description: "A premier indie game studio that builds atmospheric digital worlds through clean code and immersive design",
      image: "projects/outpost.png",
      url: "https://indie-web-ikp3.vercel.app/",
      design: true,
      icons: ["nextjs", "tailwindcss", "typescript", "html5"],
      type: "Landing Page",
      contribution: "I designed and developed the Outpost website, creating a visually appealing and immersive online presence that reflects the indie game studio's focus on atmospheric digital worlds. I implemented a user-friendly interface and responsive design to ensure an engaging browsing experience for visitors."
    },
  ];

  return (
    <>
      <section id="projects" className="relative bg-black-primary overflow-hidden">
        {/* <div className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3/4 w-full bg-gradient-to-t from-transparent via-darkblue-primary/35 to-transparent pointer-events-none"></div> */}

        {/* <WavyBackground
          backgroundFill="#0a0a0af1"
          waveWidth={1}
          blur={0}
          waveOpacity={0}
          sizeOveride={'mt-50 h-250 w-[calc(100% + 20)]'}
        /> */}
          <div className="max-w-7xl mx-auto px-6 md:px-6 py-20 lg:py-30 z-10">
            <div className="text-left flex flex-col">
              {/* Section Header */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="mb-4 text-4xl text-center leading-tight font-extrabold text-gray-300"
              >
                What I’ve <span className="text-blue-primary/70">Worked</span> On
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-gray-400 md:mb-0 mb-12 text-center"
              >
                Just a few things I’ve built along the way.
              </motion.p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 lg:py-12 md:p-2 sm:p-6">
              {projects.map((project, i) => (
                <MyCard
                  onView={true}
                  key={i}
                  index={i}
                  {...project}
                />
              ))}
            </div>
            <div className="flex w-full justify-center mt-10 gap-4">
              <Link href="projects" className="cursor-pointer px-6 py-2 rounded-md bg-blue-primary text-black font-semibold shadow-[0_0_10px_#0095ff] hover:shadow-[0_0_40px_#0095ff] transition-all duration-300">
                View All
              </Link>
              {/* <Link href="resume" className="cursor-pointer px-6 py-2 rounded-md bg-blue-primary/5 hover:bg-blue-primary hover:text-black text-blue-primary border border-blue-primary font-semibold transition-all duration-300">
                Resume
              </Link> */}
            </div>
          </div>
        {/* </WavyBackground> */}
      </section>
    </>
  )
}