"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GridBackground } from "../components/ui/background-grid";

export default function TechStack() {
  const stacks = [
    { name: "React.js", icon: "react", img: "react-original.svg" },
    { name: "Vue.js", icon: "vuejs", img: "vuejs-original.svg" },
    { name: "Next.js", icon: "nextjs", img: "nextjs-original.svg" },
    { name: "Tailwind", icon: "tailwindcss", img: "tailwindcss-original.svg" },
    { name: "Laravel", icon: "laravel", img: "laravel-original.svg" },
    { name: "Supabase", icon: "supabase", img: "supabase-original.svg" },
    // { name: "HTML5", icon: "html5", img: "html5-original.svg" },
    // { name: "CSS", icon: "css3", img: "css3-original.svg" },
    // { name: "Javascript", icon: "javascript", img: "javascript-original.svg" },
    // { name: "Typescript", icon: "typescript", img: "typescript-original.svg" },
    
    { name: "CodeIgniter", icon: "codeigniter", img: "codeigniter-plain.svg" },
    { name: "PHP", icon: "php", img: "php-original.svg" },
    { name: "Git", icon: "git", img: "git-original.svg" }
  ];


  return (
    <section id="techStack" className="py-20 bg-black-primary text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-4 text-4xl leading-tight font-extrabold text-white"
        >
          My <span className="text-blue-primary">Tech Stack</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-2xl mx-auto mb-12"
        >
          I build efficient, scalable digital solutions using modern and dependable technologies.
        </motion.p>

        <div className="flex justify-center">
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-2 w-fit">
            <div className="overflow-hidden relative bg-gray-900 border border-gray-700 rounded-xl p-6 max-w-4xl w-full">
              <div className="relative z-100 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">


                {stacks.map((stack, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                    viewport={{ once: true }} // bg-gray-900 border border-gray-800
                    className="flex flex-col items-center justify-center rounded-xl p-6 w-32 h-32"
                  >
                    <i className={`${stack.icon} text-5xl mb-3`} />
                    <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${stack.icon}/${stack.img}`} className="h-14 w-fit mb-3" />
                    <span className="text-gray-300 text-sm font-medium">{stack.name}</span>
                  </motion.div>
                ))}
              </div>

              <GridBackground reverse={false} />
              {/* <GridBackground reverse={true} /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
