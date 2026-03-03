"use client";

import { motion } from "framer-motion";
import { Check, LayoutPanelTop } from "lucide-react";
import Link from "next/link";

export default function Offers() {
  return (
    <section id="offers" className="relative bg-black-primary overflow-hidden">
      <div className="z-12 mx-auto px-6 py-10 md:py-30 max-w-7xl">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-2 gap-7">

          <div className="md:col-span-2 col-span-3 md:order-1 order-2 z-10 pr-0 lg:pr-20">
            <div className="p-2 border border-gray-700 bg-gray-900/90 rounded-md h-full w-full">
              <div className="p-4 h-full w-full border border-gray-700 rounded-md">
                <div className="relative w-full h-full min-h-[320px] flex flex-col">
                  {/* Window Controls (Minimalist Dots) */}
                  <div className="flex items-center gap-2 mb-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-700/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-700/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-700/50" />
                  </div>

                  {/* Abstract Application Content */}
                  <div className="flex flex-col gap-6 w-full max-w-[85%] mx-auto mt-auto mb-auto">
                    {/* Hero Block with a subtle sweeping highlight */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="w-full h-34 rounded-lg border border-gray-800/60 bg-gradient-to-br from-gray-800/30 to-transparent relative overflow-hidden"
                    >
                      <motion.div
                        animate={{ x: ["-100%", "250%"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute top-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
                      />
                    </motion.div>

                    {/* Minimalist Text / Data Lines */}
                    <div className="space-y-3">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                        className="h-1.5 w-3/4 bg-gray-800 rounded-full origin-left"
                      />
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                        className="h-1.5 w-1/2 bg-gray-800 rounded-full origin-left"
                      />
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                        className="h-1.5 w-5/6 bg-gray-800 rounded-full origin-left"
                      />
                    </div>

                    {/* Bottom Action Elements */}
                    <div className="flex gap-3 mt-4">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                        className="w-8 h-8 rounded-md bg-blue-500/20 border border-blue-500/30"
                      />
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                        className="w-8 h-8 rounded-md bg-gray-800/50 border border-gray-800"
                      />
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                        className="w-8 h-8 rounded-md bg-gray-800/50 border border-gray-800"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-3 md:order-2 order-1 z-10">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.5, delay: 0 * 0.1, ease: "easeOut" }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-4 text-4xl leading-tight font-extrabold text-white">
                What I <span className="text-blue-primary">Offer</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0 * 0.1, ease: "easeOut" }}
                className="text-gray-400 md:text-lg text-md text-justify mb-8">
                I offer a wide range of services, from web development to UI/UX design, and I am always
                eager to take on new challenges. Whether you need a simple website or a complex web application,
                I have the skills to deliver high-quality results.
              </motion.p>

              <div className="gap-4 py-8 grid lg:grid-row-2 grid-cols-1">
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1 * 0.1, ease: "easeOut" }}
                  className="mb-4 flex items-start gap-4">
                  <div className="bg-blue-primary/60 rounded-full p-1">
                    <Check size={18} />
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      Strategic Multi-Page Suite
                    </h2>
                    <p className="text-gray-400 text-justify">
                      I design and develop websites (up to 5 pages) tailored to your brand.
                      If you need more pages, we can discuss custom solutions that fit your
                      needs and budget. I am flexible and committed to delivering a website
                      that meets your requirements.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1 * 0.2, ease: "easeOut" }}
                  className="mb-4 flex items-start gap-4">
                  <div className="bg-blue-primary/60 rounded-full p-1">
                    <Check size={18} />
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      Workflow Automation System
                    </h2>
                    <p className="text-gray-400 text-justify">
                      If your business struggles with repetitive tasks or slow workflows,
                      we can create simple systems and automations that save time and
                      improve efficiency, allowing you to focus on what matters most to you.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1 * 0.3, ease: "easeOut" }}
                  className="mb-4 flex items-start gap-4">
                  <div className="bg-blue-primary/60 rounded-full p-1">
                    <Check size={18} />
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      UI/UX Audits & Redesign
                    </h2>
                    <p className="text-gray-400 text-justify">
                      If your current website or application has usability issues or an outdated design,
                      I can conduct a thorough audit and provide actionable recommendations to enhance the
                      user experience and modernize your interface.
                    </p>
                  </div>
                </motion.div>
              </div>

              <Link href="/contact" className="cursor-pointer px-6 py-2 rounded-md bg-blue-primary text-black font-semibold shadow-[0_0_10px_#0095ff] hover:shadow-[0_0_40px_#0095ff] transition-all duration-300">
                Contact Me
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}