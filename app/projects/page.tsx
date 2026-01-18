"use client"

import Link from "next/link";
import MyCard from "../components/ui/MyCard";
import { motion } from "framer-motion";
import { WavyBackground } from "../components/ui/wavy-background";

export default function projects() {
  const projects = [
    {
      title: "Seinna Brews",
      description: "A cozy café experience focused on comfort, calm moments, and a warm escape from everyday life.",
      image: "projects/seinna_brews.png",
      url: "https://sienna-brews.vercel.app/",
      design: true,
      icons: ["nextjs", "tailwindcss"]
    },
    {
      title: "Solara Grand",
      description: "A premium luxury resort experience that blends refined comfort with unforgettable adventures and immersive moments.",
      image: "projects/solara_grand.png",
      url: "https://solara-grand.vercel.app/",
      design: true,
      icons: ["nextjs", "tailwindcss"]
    },
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
      title: "Arvo",
      description: "Arvo is a creative web-solutions studio that crafts smart, high-performance digital experiences.",
      image: "projects/pixelforge.png",
      url: "https://arvo-alpha.vercel.app/",
      design: true,
      icons: ["react", "tailwindcss", "supabase", "javascript"]
    },

  ];

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
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mb-4 text-4xl leading-tight font-extrabold text-gray-300"
              >
                What I’ve <span className="text-blue-primary/70">Worked</span> On
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
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
          </div>
        </WavyBackground>
      </section>
    </>
  )
}