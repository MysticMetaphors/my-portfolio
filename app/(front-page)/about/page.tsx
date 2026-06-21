"use client";

import { motion } from "framer-motion";
import { AudioLines, Briefcase, Calendar, Cctv, Clock, Cpu, Flame, Gamepad2, Github, GithubIcon, Globe, Layers, Lightbulb, Linkedin, Mail, MapPin, MonitorSmartphone, Palette, Phone, Play, Rocket, Sparkles, Users } from "lucide-react";
import { GridBackground } from "../../components/ui/background-grid";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import ContributionGrid from "@/app/components/ui/Contribution";

const workItems = [
  {
    icon: <Cpu className="size-7 text-white" />,
    title: "Performance-first mindset",
    description:
      "A beautiful website is useless if it’s slow. I optimize every project for fast load times and smooth render cycles, ensuring your users don't leave before the page even loads.",
  },
  {
    icon: <Layers className="size-7 text-white" />,
    title: "Design Engineering",
    description:
      "I don't just write code, I think through the usability of every layout. I bridge the gap between design and development to ensure the final product actually feels good to use.",
  },
  {
    icon: <MonitorSmartphone className="size-7 text-white" />,
    title: "Full ownership",
    description:
      "I handle your project from the initial UI concept to the final deployment. You get a complete, end-to-end solution without needing to manage a large team to get the job done.",
  },
  {
    icon: <Lightbulb className="size-7 text-white" />,
    title: "Always learning",
    description:
      "The tech landscape moves fast, and so do I. I am constantly refining my skills and picking up new tools to ensure the solutions I build for you stay modern and effective.",
  },
  {
    icon: <Palette className="size-7 text-white" />,
    title: "Native Implementation",
    description:
      "I design directly in the codebase instead of using Figma. This removes the traditional handoff gap, allowing me to build and ship production-ready interfaces much faster.",
  },
  {
    icon: <Cctv className="size-7 text-white" />,
    title: "Transparency",
    description:
      "I value honesty and clear communication in every partnership. I ensure our work is always transparent and bound by a contract that protects your interests and guarantees results.",
  },
];

const workWithItems = [
  {
    icon: <Rocket className="size-7 text-white" />,
    label: "Startups & small businesses",
    description: "For teams that move fast and need a developer who can keep up, execute quickly, and provide honest feedback to improve the product.",
  },
  {
    icon: <Users className="size-7 text-white" />,
    label: "Solo clients & freelancers",
    description: "For individuals with a clear vision who need a collaborator to turn their ideas into a functional, high-performance reality.",
  },
  {
    icon: <Globe className="size-7 text-white" />,
    label: "Anyone building something real",
    description: "If you value quality and care about the end-user experience, we’ll get along just fine. I work best with people who take their projects seriously.",
  },
];

const experienceItems = [
  {
    role: "Frontend Developer & UI/UX Designer",
    company: "AR.VO IT Services",
    location: "Antipolo City, Philippines",
    period: "Sep 2025 – May 2026",
    stack: [
      { name: "Next.js", img: "nextjs-original.svg" },
      { name: "Vue.js", img: "vuejs-original.svg" },
      { name: "React.js", img: "react-original.svg" },
      { name: "Tailwind", img: "tailwindcss-original.svg" },
      { name: "Figma", img: "figma-original.svg" },
    ],
    points: [
      "Communicated directly with clients to understand their design requirements and desired changes.",
      "Ensured websites were not only appealing but performance efficient.",
      "Aligned closely with backend developers and lead developers to ship cohesive features.",
      "Handled code-level designing to close the gap between design and code, and maintained live websites.",
    ],
  },
  {
    role: "Freelance Developer",
    company: "Self-Employed",
    location: "Antipolo City, Philippines",
    period: "May 2025 – Present",
    stack: [
      { name: "React.js", img: "react-original.svg" },
      { name: "Vue.js", img: "vuejs-original.svg" },
      { name: "Next.js", img: "nextjs-original.svg" },
      { name: "Laravel", img: "laravel-original.svg" },
      { name: "MySQL", img: "mysql-original-wordmark.svg" },
      { name: "Figma", img: "figma-original.svg" },
    ],
    points: [
      "Communicated with clients to understand their design and functional requirements.",
      "Offered custom systems tailored to fit their business operations.",
      "Implemented requested modifications within agreed timeframes to ensure timely delivery.",
    ],
  },
];

const likeItems = [
  {
    icon: <Gamepad2 className="size-7 text-white" />,
    label: "Minecraft",
    description: "Whether I'm playing or just watching, it's my go-to creative reset. It’s basically the background noise to my life and a way to unwind after a long grind.",
  },
  {
    icon: <AudioLines className="size-7 text-white" />,
    label: "Softcore & Lo-Fi",
    description: "I always have something soothing and calming playing in the background. It helps me stay focused and keeps the workflow steady while I code.",
  },
  {
    icon: <Play className="size-7 text-white" />,
    label: "Binge-watching",
    description: "Beyond Minecraft content, I’m a big fan of anime. Shows like Overlord are my favorite way to disconnect and recharge.",
  },
];

function getPhilippineTime() {
  const now = new Date();
  const ph = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Manila" }));
  const h = ph.getHours();
  const m = ph.getMinutes();
  const ampm = h >= 12 ? "PM" : "AM";
  const hh = h % 12 || 12;
  const mm = String(m).padStart(2, "0");
  return `${hh}:${mm} ${ampm}`;
}

// ── Sub-components ────────────────────────────────────────────────────────────

export default function About() {
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
    <section className="relative bg-black-primary overflow-hidden pt-25">

      {/* Grid background */}

      <div className="max-w-7xl mx-auto px-6 py-10 lg:py-20 relative z-10">

        {/* ── INTRO ── */}
        <section className="">
          <div className="max-w-7xl mx-auto space-y-6">

            {/* --- MAIN HEADER PROFILE CARD --- */}
            <div className="w-full bg-gray-900/90 hover:bg-gray-900 group border border-gray-700 rounded-lg p-2 md:p-2 flex flex-col md:flex-row gap-6 items-start relative overflow-hidden backdrop-blur-md">
              <div className="w-full border border-gray-700 rounded-lg p-4 md:p-6 flex flex-col md:flex-row md:gap-6 items-start relative overflow-hidden">
                {/* Profile Image Container */}
                <div className="relative flex-shrink-0 md:mx-0">
                  <div className="w-24 h-24 md:w-38 md:h-38 rounded-full overflow-hidden border-2 border-zinc-700 bg-zinc-800">
                    {/* Replace src with your uploaded profile picture path */}
                    <img
                      src="/about-profile.png"
                      alt="Von Bryan"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Profile Details */}
                <div className="flex-1 text-center md:text-left space-y-3 w-full">
                  <div className="flex flex-row sm:items-center justify-start gap-2 sm:gap-3">
                    <h1 className="font-jersey tracking-widest uppercase text-3xl md:text-4xl font-bold tracking-tight text-white text-left">Von Bryan</h1>
                    {/* <div className="flex items-center justify-start gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>
                        Open To Work
                      </span>
                    </div> */}
                  </div>

                  <p className="text-zinc-400 text-sm md:text-base max-w-2xl leading-relaxed text-left">
                    A <span className="text-white font-semibold">full-stack developer</span> and <span className="text-white font-semibold">UI/UX designer</span> based in the Philippines. I care deeply about how websites perform and how they feel not just how they look.
                  </p>

                  {/* Meta Row / Contact Details */}
                  <div className="pt-4 space-y-2 border-t flex items-center flex-wrap gap-0 border-zinc-600/60 text-xs md:text-sm font-mono text-zinc-400">
                    <a href="tel:+639606874147" className="flex items-center gap-2 hover:text-white transition-colors pr-3">
                      <Phone className="w-4 h-4 text-zinc-500" />
                      <span>(+63) 960-687-4147</span>
                    </a>
                    <span className="text-zinc-700 pr-3">|</span>
                    <a href="mailto:your-email@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors pr-3">
                      <Mail className="w-4 h-4 text-zinc-500" />
                      <span>vonbryan@example.com</span>
                    </a>
                    <span className="text-zinc-700 pr-3">|</span>

                    <a href="https://github.com/MysticMetaphors" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors pr-3">
                      <Github className="w-4 h-4 text-zinc-500" />
                      <span>GitHub</span>
                    </a>
                    <span className="text-zinc-700 pr-3">|</span>

                    <a href="https://www.linkedin.com/in/von-bryan-ba%C3%B1al-1a1188314" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors pr-3">
                      <Linkedin className="w-4 h-4 text-zinc-500" />
                      <span>LinkedIn</span>
                    </a>
                    <span className="text-zinc-700 pr-3">|</span>

                    <div className="flex items-center gap-2 pr-3">
                      <MapPin className="w-4 h-4 text-zinc-500" />
                      <span>Antipolo, Philippines</span>
                    </div>
                    <span className="text-zinc-700 pr-3">|</span>

                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-zinc-500" />
                      <span>{getPhilippineTime()} · GMT+8</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* --- BENTO GRID: SYSTEM ACTIVITY & CORE STACK --- */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

              {/* Left Block: System Activity (GitHub Grid Style) */}
              <ContributionGrid />

              {/* Right Block: Core Stack Badges */}
              <div className="bg-gray-900/90 hover:bg-gray-900 group border border-gray-700 rounded-lg p-2 flex flex-col justify-between">
                <div className="p-4 border border-gray-700 rounded-lg flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-jersey tracking-widest uppercase text-white mb-4">Tech_Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {stacks.map((tech) => (
                        <div
                          key={tech.name}
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-800/90 border border-gray-700 text-xs md:text-sm font-mono text-zinc-300 hover:border-zinc-700 hover:text-white transition-all cursor-default"
                        >
                          <Image alt={tech.name} src={`/techstack/${tech.img}`} height={12} width={12} />
                          <span>{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* --- DETAILED BIOGRAPHY / TEXT SECTION --- */}
            <div className="w-full bg-gray-900/90 hover:bg-gray-900 group border border-gray-700 rounded-lg p-2 space-y-6">
              <div className="w-full border border-gray-700 rounded-lg p-4 md:p-6 space-y-6">


                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  <div className="md:col-span-2 space-y-4 text-zinc-400 text-sm md:text-base leading-relaxed text-justify">
                    <div className="flex font-jersey text-md items-center gap-2 text-zinc-400 uppercase tracking-widest">
                      <span>{'-----<<'}  My Story {'>>-----'}</span>
                    </div>
                    <p>
                      My journey into this industry started with a movie I was completely fascinated by hackers on screen and couldn't stop thinking about how that world worked. That curiosity continued and, pushed further by classmates who were already building things, a first boss who gave me the room to stumble and figure things out, and professors who guided me when I needed it most.
                    </p>
                    <p>
                      It's been a mix of self-taught grind, good mentorship, and genuine obsession that got me to this level, and despite that I still striving for more and learn more from the industry.
                    </p>
                  </div>

                  {/* Quick Micro-Metrics */}
                  <div className="border-l border-zinc-800 pl-6 space-y-4 font-mono text-xs text-zinc-400">
                    <div>
                      <span className="block text-zinc-500 uppercase tracking-wider text-[12px]">FOCUS</span>
                      <span className="text-white font-medium text-sm">Performance, Usability & Clean Logic</span>
                    </div>
                    <div>
                      <span className="block text-zinc-500 uppercase tracking-wider text-[12px]">DESIGN APPROACH</span>
                      <span className="text-white font-medium text-sm">Native Code Implementation</span>
                    </div>
                    <div>
                      <span className="block text-zinc-500 uppercase tracking-wider text-[12px]">LOCATION</span>
                      <span className="text-white font-medium text-sm flex items-center gap-1.5">
                        Antipolo, PH 🇵🇭
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* --- EXPERIENCE --- */}
            <div className="w-full bg-gray-900/90 hover:bg-gray-900 group border border-gray-700 rounded-lg p-2 space-y-6">
              <div className="w-full border border-gray-700 rounded-lg p-4 md:p-6 space-y-6">

                <div className="flex font-jersey text-md items-center gap-2 text-zinc-400 uppercase tracking-widest">
                  <span>{'-----<<'}  Experience {'>>-----'}</span>
                </div>

                <div className="space-y-4">
                  {experienceItems.map((exp, i) => (
                    <div
                      key={i}
                      className="bg-gray-800/40 border border-gray-700 rounded-lg p-4 md:p-5 hover:border-blue-primary/50 transition-colors duration-300"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div>
                          <h3 className="text-lg md:text-xl font-jersey tracking-[0.05em] uppercase text-white">
                            {exp.role}
                          </h3>
                          <p className="text-blue-primary text-sm font-mono mt-0.5">{exp.company}</p>
                        </div>
                        <div className="flex flex-col sm:items-end gap-1 font-mono text-xs text-zinc-400 flex-shrink-0">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      <ul className="mt-4 space-y-2 text-zinc-400 text-sm leading-relaxed">
                        {exp.points.map((point, j) => (
                          <li key={j} className="flex gap-2.5">
                            <span className="text-blue-primary mt-1.5 w-1 h-1 rounded-full bg-blue-primary flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.stack.map((tech) => (
                          <span
                            key={tech.name}
                            className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-gray-800/90 border border-gray-700 text-xs font-mono text-zinc-300 hover:border-zinc-600 hover:text-white transition-all"
                          >
                            {tech.img && (
                              <Image alt={tech.name} src={`/techstack/${tech.img}`} height={12} width={12} />
                            )}
                            <span>{tech.name}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Divider */}
        {/* <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-28" /> */}

        {/* ── HOW I WORK ── */}
        <div className="mb-28 py-10">
          <motion.p initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
            className="text-blue-primary text-lg font-jersey font-semibold tracking-widest uppercase mb-3 text-center"
          >
            {'-----<<'}  How I Work {'>>-----'}
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-4xl font-jersey font-semibold tracking-wide uppercase text-white mb-3 text-center"
          >
            What you can expect
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-gray-400 mb-12 max-w-lg mx-auto text-center"
          >
            I don't just ship solutions I think it through. Here's what working with me actually looks like.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6">
            {workItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="bg-gray-900/90 hover:bg-gray-900 group border border-gray-700 
                  hover:border-blue-primary hover:shadow-blue-primary/20 
                  hover:-translate-y-2 transform shadow-lg rounded-lg h-full w-full p-2 z-10 
                  transition-all duration-300"
              >
                <div className="bg-gray-900 border border-gray-700 h-full w-full rounded-lg p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-primary/50 rounded-md p-2">
                      {item.icon}
                    </div>
                    <h2 className="text-2xl font-jersey tracking-[0.05em] uppercase">{item.title}</h2>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        {/* <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-28" /> */}

        {/* ── WHO I WORK WITH ── */}
        <div className="mb-28 py-10">
          <motion.p initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
            className="text-blue-primary text-xl font-jersey font-semibold uppercase tracking-widest mb-3 text-center"
          >
            {'-----<<'} Who I Work With {'>>-----'}
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-4xl font-jersey font-semibold tracking-wide uppercase text-white mb-3 text-center"
          >
            My kind of clients
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }} className="text-gray-400 mb-12 max-w-lg mx-auto text-center"
          >
            I work best with people who have a clear goal and trust the process.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6">
            {workWithItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="bg-gray-900/90 hover:bg-gray-900 group border border-gray-700 
                  hover:border-blue-primary hover:shadow-blue-primary/20 
                  hover:-translate-y-2 transform shadow-lg rounded-lg h-full w-full p-2 z-10 
                  transition-all duration-300"
              >
                <div className="bg-gray-900 border border-gray-700 h-full w-full rounded-lg p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-primary/50 rounded-md p-2">
                      {item.icon}
                    </div>
                    <h2 className="text-2xl font-jersey tracking-[0.05em] uppercase">{item.label}</h2>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        {/* <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-28" /> */}

        {/* ── WHAT I LIKE ── */}
        <div className="mb-20">
          <motion.p initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
            className="text-blue-primary text-xl font-jersey font-semibold tracking-widest uppercase mb-3 text-center"
          >
            {'-----<<'}  What I Like {'>>-----'}
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }} className="text-4xl font-jersey font-semibold tracking-wide uppercase text-white mb-3 text-center">
            Outside the code
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }} className="text-gray-400 mb-12 max-w-lg mx-auto  text-center">
            A little bit of who I am when I'm not pushing commits.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6">
            {likeItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="bg-gray-900/90 hover:bg-gray-900 group border border-gray-700 
                  hover:border-blue-primary hover:shadow-blue-primary/20 
                  hover:-translate-y-2 transform shadow-lg rounded-lg h-full w-full p-2 z-10 
                  transition-all duration-300"
              >
                <div className="bg-gray-900 border border-gray-700 h-full w-full rounded-lg p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-primary/50 rounded-md p-2">
                      {item.icon}
                    </div>
                    <h2 className="text-2xl font-jersey tracking-[0.05em] uppercase">{item.label}</h2>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="flex justify-center py-20">
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-2 w-full">
            <div className="overflow-hidden relative bg-gray-900 border border-gray-700 rounded-xl p-6 max-w-7xl h-full w-full">
              <div className="relative z-40 h-full w-full flex flex-col justify-center items-center py-10 text-center">
                <h2 className="text-5xl font-jersey font-semibold tracking-wide uppercase text-white mb-3">Want to work together?</h2>
                <p className="text-gray-400 mb-6 max-w-md mx-auto">
                  Whether you have a project in mind or just want to say hi my inbox is always open.
                </p>
                <Link href="/contact" className="font-jersey font-semibold tracking-wide uppercase text-xl cursor-pointer px-6 py-2 rounded-md bg-blue-primary text-black font-semibold shadow-[0_0_10px_#0095ff] hover:shadow-[0_0_40px_#0095ff] transition-all duration-300">
                  Contact Me
                </Link>
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