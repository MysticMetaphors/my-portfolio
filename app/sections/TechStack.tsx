"use client"

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
    { name: "HTML5", icon: "html5", img: "html5-original.svg" },
    { name: "CSS", icon: "css3", img: "css3-original.svg" },
    { name: "Javascript", icon: "javascript", img: "javascript-original.svg" },
    { name: "Typescript", icon: "typescript", img: "typescript-original.svg" },
    { name: "CodeIgniter", icon: "codeigniter", img: "codeigniter-plain.svg" },
    { name: "PHP", icon: "php", img: "php-original.svg" },
    { name: "Git", icon: "git", img: "git-original.svg" }
  ];

  return (
    <section id="techStack" className="py-20 bg-black-primary text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-jersey font-semibold tracking-wide uppercase in-view-up text-5xl md:text-6xl leading-tight font-extrabold text-white">
          My <span className="text-blue-primary">Tech Stack</span>
        </h2>

        <p
          className="in-view-up text-gray-400 max-w-2xl mx-auto mb-12"
          style={{ animationDelay: "0.1s" }}
        >
          I build efficient, scalable digital solutions using modern and dependable technologies.
        </p>

        <div className="flex justify-center">
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-2 w-fit">
            <div className="overflow-hidden relative bg-gray-900 border border-gray-700 rounded-xl p-6 max-w-7xl w-full">
              <div className="relative z-40 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-8 justify-items-center">
                {stacks.map((stack, i) => (
                  <div
                    key={i}
                    style={{ animationDelay: `${0.2 + i * 0.05}s` }}
                    className="in-view-scale flex flex-col items-center justify-center rounded-xl p-6 w-32 h-32"
                  >
                    <Image alt={stack.icon} height={100} width={100} quality={50} src={`/techstack/${stack.img}`} className="h-10 md:h-14 w-fit mb-3" />
                    <span className="text-gray-300 text-sm font-medium">{stack.name}</span>
                  </div>
                ))}
              </div>

              <GridBackground reverse={false} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
