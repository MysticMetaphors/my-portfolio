"use client"

import Link from "next/link";
import MyCard from "../components/ui/MyCard";
import { motion } from "framer-motion";
import { WavyBackground } from "../components/ui/wavy-background";

export default function Projects() {
  const projects = [
    {
      title: "Fluxo",
      description: "Fluxo is a showcase of clean and modern web design, featuring responsive layouts, elegant UI components.",
      image: "projects/fluxos.png",
      url: "https://fluxo-alpha.vercel.app/",
      design: true,
      icons: ["react", "tailwindcss", "javascript"]
    },
    {
      title: "Arvo",
      description: "Arvo is a creative web-solutions studio that crafts smart, high-performance digital experiences.",
      image: "projects/arvo.png",
      url: "https://arvo-alpha.vercel.app/",
      design: true,
      icons: ["nextjs", "tailwindcss", "typescript"]
    },
    {
      title: "PixelForge",
      description: "PixelForge offers free pixel art and AI resources to support developers and artists in creating their games.",
      image: "projects/pixelforge.png",
      url: "https://pixel-forge-omega.vercel.app/",
      design: true,
      icons: ["react", "tailwindcss", "supabase", "javascript"]
    },
  ];

  return (
    <>
      <section id="projects" className="relative bg-black-primary overflow-hidden">
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
              What I’ve <span className="text-blue-primary/70">Worked</span> On
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
          <div className="flex w-full justify-center mt-10">
            <Link href="projects" className="cursor-pointer px-6 py-2 rounded-md bg-blue-primary text-black font-semibold shadow-[0_0_10px_#0095ff] hover:shadow-[0_0_40px_#0095ff] transition-all duration-300">
              View All
            </Link>
          </div>
        </div>
       </WavyBackground>
      </section>
    </>
  )
}