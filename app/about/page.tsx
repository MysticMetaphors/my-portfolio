"use client";

import { motion } from "framer-motion";
import DefaultLayout from "../components/layouts/DefaultLayout";
import { AudioLines, Briefcase, Calendar, Cctv, Cpu, Flame, Gamepad2, Globe, Layers, Lightbulb, MapPin, MonitorSmartphone, Palette, Play, Rocket, Sparkles, Users } from "lucide-react";
import { GridBackground } from "../components/ui/background-grid";
import Link from "next/link";
import Image from "next/image";

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

export default function About() {
  return (
    <DefaultLayout>
      <section className="relative bg-black-primary overflow-hidden pt-25">

        {/* Grid background */}
        <div
          className="absolute top-0 left-0 w-full pointer-events-none z-[1]"
          style={{
            height: "80vh",
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            backgroundColor: "#0a0f14",
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, transparent 100%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 py-10 lg:py-20 relative z-10">

          {/* ── INTRO ── */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-28">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
                className="text-blue-primary text-sm font-semibold tracking-widest uppercase mb-4"
              >
                About Me
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6"
              >
                Hey, I'm{" "}
                <span className="text-blue-primary">Von Bryan</span> —<br />
                I build things for the web.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="text-gray-400 text-lg leading-relaxed mb-5 text-justify"
              >
                Fullstack developer and UI/UX designer based in the Philippines. I care deeply about
                how websites perform and how they feel not just how they look.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="text-gray-400 leading-relaxed text-justify"
              >
                My journey into this industry started with a movie I was completely fascinated by
                hackers on screen and couldn't stop thinking about how that world worked. That curiosity
                snowballed, pushed further by classmates who were already building things, a first boss
                who gave me the room to stumble and figure things out, and professors who guided me when
                I needed it most. It's been a mix of self-taught grind, good mentorship, and genuine
                obsession and at this point, it's just a hobby I happen to get paid for.
              </motion.p>
            </div>

            {/* Side card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="bg-gray-900 border border-gray-700 rounded-lg p-2"
            >
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-8 space-y-6">
                {[
                  {
                    label: "Specialization",
                    value: "Fullstack Dev & UI/UX Designer",
                    icon: <Briefcase className="size-3.5" />
                  },
                  {
                    label: "Location",
                    value: "Philippines",
                    icon: <MapPin className="size-3.5" />
                  },
                  {
                    label: "Status",
                    value: "Open for Collaborations",
                    icon: <Calendar className="size-3.5" />
                  },
                  {
                    label: "Focus Areas",
                    value: "Performance, Usability & System Logic",
                    icon: <Flame className="size-3.5" />
                  },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-2 border-b border-gray-800 pb-5 last:border-none last:pb-0">
                    <div className="flex items-center gap-2 text-gray-400 uppercase tracking-widest text-[10px]">
                      {item.icon}
                      <span>{item.label}</span>
                    </div>
                    <span className="text-white font-medium flex items-center gap-1 text-sm md:text-base">
                      {item.value}
                      {item.label === "Location" && (
                        <div className="flex items-center justify-center p-1 h-5 w-7 rounded-sm shadow-sm">
                          <Image width={100} height={100} alt="ph flag" src="https://flagsapi.com/PH/flat/64.png" />
                          {/* <span className="text-xs leading-none">🇵🇭</span> */}
                        </div>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          {/* <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-28" /> */}

          {/* ── HOW I WORK ── */}
          <div className="mb-28 py-10">
            <motion.p initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
              className="text-blue-primary text-sm font-semibold tracking-widest uppercase mb-3 text-center"
            >
              How I Work
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-3xl font-extrabold text-white mb-3 text-center"
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
                      <h2 className="text-xl font-bold">{item.title}</h2>
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
              className="text-blue-primary text-sm font-semibold tracking-widest uppercase mb-3 text-center"
            >
              Who I Work With
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-3xl font-extrabold text-white mb-3 text-center"
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
                      <h2 className="text-xl font-bold">{item.label}</h2>
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
              className="text-blue-primary text-sm font-semibold tracking-widest uppercase mb-3 text-center"
            >
              What I Like
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }} className="text-3xl font-extrabold text-white mb-3 text-center">
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
                      <h2 className="text-xl font-bold">{item.label}</h2>
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
                  <h2 className="text-3xl font-extrabold text-white mb-3">Want to work together?</h2>
                  <p className="text-gray-400 mb-6 max-w-md mx-auto">
                    Whether you have a project in mind or just want to say hi my inbox is always open.
                  </p>
                  <Link href="/contact" className="cursor-pointer px-6 py-2 rounded-md bg-blue-primary text-black font-semibold shadow-[0_0_10px_#0095ff] hover:shadow-[0_0_40px_#0095ff] transition-all duration-300">
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
    </DefaultLayout >
  );
}