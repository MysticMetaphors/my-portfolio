"use client";

import { motion } from "framer-motion";
import { FlipWords } from "../components/ui/flip-words";

export default function Hero() {
  return (
    <section className="relative flex flex-col bg-black-primary items-center justify-center min-h-screen text-center overflow-hidden md:pt-0 pt-25 bg-black">
      {/* <div
        className="absolute top-0 left-0 w-full pointer-events-none z-[1]"
        style={{
          height: "80%",
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          backgroundColor: "#0a0f14",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, transparent 100%)",
        }}
      /> */}
      <div className="flex flex-col items-center justify-center min-h-screen w-screen px-6 sm:p-0">
        <div className="relative z-20 max-w-4xl">
          {/* <StorageToast /> */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex-wrap items-center justify-center md:flex hidden gap-4 mb-3"
          >
            <span className="bg-white/5 rounded-full border border-white/10 py-1 px-3 flex font-semibold items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-primary/80 shadow-[0_0_5px_#0095ff]" />
              Custom Design
            </span>
            <span className="bg-white/5 rounded-full border border-white/10 py-1 px-3 flex font-semibold items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-primary/80 shadow-[0_0_5px_#0095ff]" />
              Open for Hire
            </span>
          </motion.div>
          <motion.h1 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2}}
          className="relative text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight"
          >
            Let’s Build Something
            <span className="relative inline-block border-b-5 border-blue-primary pb-1 text-blue-primary">
              <FlipWords words={["Meaningful", "Powerful", "Beautiful", "Functional"]} duration={1000} />
            </span>
            Together
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-6 text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
          >
            I offer <span className="font-bold">100% custom websites</span>, designed and coded from the ground up to reflect your brand & support your business goals.
            You can also have access to <span className="font-bold">Reliable Maintenance</span> and {" "}
            <span className="font-bold">Technical Support</span> of your site
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#projects" className="px-6 py-2 rounded-full bg-blue-primary shadow-[0_0_5px_#0095ff] hover:bg-blue-primary text-black font-semibold hover:shadow-[0_0_40px_#0095ff] transition-all duration-300">
              Projects
            </a>
            <a href="#contact" className="px-6 py-2 bg-blue-primary/5 rounded-full border border-blue-primary text-blue-primary hover:bg-blue-primary hover:text-black transition-all duration-300">
              Contact
            </a>
          </motion.div>
        </div>
      </div>
      {/* <div className="absolute bottom-0 left-0 z-40 w-full h-14 bg-linear-to-t from-black-primary to-transparent"></div> */}
    </section>
  );
}