"use client";

import { motion } from "framer-motion";
// import { useState } from "react";
import { appendToast } from "@/lib/global";
import { WavyBackground } from "../components/ui/wavy-background";
import { useRef } from "react";
// import { sub } from "framer-motion/client";

type ContactProp = {
  onView?: boolean,
}

export default function Contact({ onView }: ContactProp) {
  // const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    //require all fields Name, Email, Message
    if (!name || !email || !message) {
      appendToast("append-toast", "error", "Please fill all fields!");
      return;
    }

    const data = Object.fromEntries(formData.entries());
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_ACCESS_KEY,
        ...data,
      }),
    });
    if (response.ok) {
      appendToast("append-toast", "success", "Thanks for reaching out!");
      resetForm();
    } else {
      console.log(response);
      appendToast("append-toast", "error", "Unexpected Error Occured!");
    }
  };

  const resetForm = () => {
    formRef.current?.reset();
  };

  const animationY = onView
    ? {
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
    }
    : {
      animate: { opacity: 1, y: 0 },
    };

  const animationX = onView
    ? {
      whileInView: { opacity: 1, x: 0 },
      viewport: { once: true },
    }
    : {
      animate: { opacity: 1, x: 0 },
    };

  return (
    <section id="contact" className="relative overflow-hidden">
      {/* <div className="absolute z-11 top-0 left-0 h-full w-full bg-linear-to-t from-blue-primary/20 from-5% via-transparent via-50% to-transparent"></div> */}
      <WavyBackground
        backgroundFill="#0a0a0af1"
        waveWidth={1}
        blur={0}
        waveOpacity={0}
        containerClassName="w-full"
      >
        <div className="z-12 mx-auto px-6 py-10 md:py-30 max-w-7xl">
          <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-2 gap-7">

            <div className="col-span-2 z-10">
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 40 }}
                  {...animationY}
                  transition={{ duration: 0.5, delay: 0 * 0.1, ease: "easeOut" }}
                  className="mb-4 text-4xl leading-tight font-extrabold text-white">
                  Let’s <span className="text-blue-primary">Connect</span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  {...animationY}
                  transition={{ duration: 0.5, delay: 0 * 0.1, ease: "easeOut" }}
                  className="text-gray-400 text-lg text-justify mb-8">
                  Let’s build something meaningful together. If you have questions, need guidance,
                  or want to start a project, I’m ready to support you every step of the way.
                </motion.p>

                <div className="space-y-8 p-8">
                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    {...animationX}
                    transition={{ duration: 0.5, delay: 0 * 0.1, ease: "easeOut" }}
                    className="flex gap-4 items-center">
                    <li className="fa-solid fa-envelope text-lg p-2 rounded-sm bg-blue-primary/30"></li>
                    <p className="text-md">vonbanalbryan18v@gmail.com</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    {...animationX}
                    transition={{ duration: 0.5, delay: 1 * 0.1, ease: "easeOut" }}
                    className="flex gap-4 items-center">
                    <li className="fa-solid fa-phone text-lg p-2 rounded-sm bg-blue-primary/30"></li>
                    <p className="text-md">+63 960 687 4147</p>
                  </motion.div>
                  <motion.a
                    initial={{ opacity: 0, x: -40 }}
                    {...animationX}
                    transition={{ duration: 0.5, delay: 2 * 0.1, ease: "easeOut" }}
                    href="https://www.linkedin.com/in/von-bryan-ba%C3%B1al-1a1188314/"
                    className="flex gap-4 items-center">
                    <li className="fa-brands fa-linkedin-in bg-blue-primary/70 px-2 text-xl p-1.5 rounded"></li>
                    <p className="text-md underline underline-offset-5">Von Bryan</p>
                  </motion.a>
                </div>
              </div>
            </div>

            <div className="col-span-3 z-10 pl-0 lg:pl-20">
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 40 }}
                {...animationY}
                transition={{ duration: 0.5, delay: 0 * 0.1, ease: "easeOut" }}
                ref={formRef}
                action="" className="bg-gray-900 border border-gray-700 rounded-lg h-full w-full p-2 z-10">
                <div className="flex flex-col gap-5 border border-gray-700 rounded-lg h-full w-full p-6 md:p-8">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      className="w-full p-3 py-2 rounded-sm bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-primary"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-white mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        className="w-full p-3 py-2 rounded-sm bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="number" className="block text-white mb-2">Number</label>
                      <input
                        type="tel"
                        id="number"
                        name="number"
                        placeholder="Enter your phone number"
                        className="w-full p-3 py-2 rounded-sm bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Write your message here..."
                      rows={5}
                      className="w-full p-3 py-2 rounded-sm bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-primary"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="mt-5 bg-blue-400/70 font-semibold hover:shadow-[0_0_40px_#0095ff] transition-all duration-300 shadow-[0_0_5px_#0095ff] hover:bg-blue-primary text-black py-3 px-6 rounded-md"
                  >
                    Submit
                  </button>
                </div>
              </motion.form>
            </div>
          </div>
        </div>
      </WavyBackground>
      {/* toast append */}
      <div id="append-toast" className="w-fit space-y-3 fixed top-5 left-10 md:left-15 z-100 flex flex-col">

      </div>
    </section>
  )
}