"use client";

import { motion } from "framer-motion";
// import { useState } from "react";
import { appendToast } from "@/lib/global";
import { WavyBackground } from "../components/ui/wavy-background";
// import { sub } from "framer-motion/client";

type ContactProp = {
  onView?: boolean,
}

export default function Contact({ onView }: ContactProp) {
  // const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // setLoading(true);

    const submitButton = e.currentTarget.querySelector('button[type="submit"]') as HTMLButtonElement;
    submitButton.disabled = true;
    submitButton.classList.add('opacity-50', 'cursor-not-allowed', 'pointer-events-none');

    const form = e.target as HTMLFormElement;

    const firstname = (form.elements.namedItem("firstname") as HTMLInputElement).value.trim();
    const lastname = (form.elements.namedItem("lastname") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const number = (form.elements.namedItem("number") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();


    if (!firstname || !lastname || !email || !number || !message) {
      appendToast('append-toast', 'error', 'Please complete the form before submitting.')
      submitButton.disabled = false;
      submitButton.classList.remove('opacity-50', 'cursor-not-allowed', 'pointer-events-none');
      return;
    }

    const subject = `📨 Message from ${firstname} ${lastname} via Portfolio Website`;

    const formData = {
      access_key: process.env.NEXT_PUBLIC_ACCESS_KEY,
      from_name: `${firstname} ${lastname}`,
      firstname,
      lastname,
      email,
      number,
      message,
      subject,
    };


    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    submitButton.disabled = false;
    submitButton.classList.remove('opacity-50', 'cursor-not-allowed', 'pointer-events-none');
    

    if (result.success) {
      appendToast('append-toast', 'success', 'Thanks for reaching out!')
      form.reset();
    } else {
      appendToast('append-toast', 'error', 'Unexpected Error Occured!')
    }
  }

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
    <div className="absolute z-11 top-0 left-0 h-full w-full bg-linear-to-t from-blue-primary/20 from-5% via-transparent via-50% to-transparent"></div>
    <WavyBackground  
        backgroundFill="#0a0a0af1"
        waveWidth={1}
        blur={0}
        waveOpacity={0}

      />
      <div className="z-12 mx-auto px-6 py-0 md:py-30 max-w-7xl">
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
                {/* <motion.a
                  initial={{ opacity: 0, x: -40 }}
                  {...animationX}
                  transition={{ duration: 0.5, delay: 3 * 0.1, ease: "easeOut" }}
                  href="https://join.slack.com/t/arvo-etb3274/shared_invite/zt-3gphlymiu-8slTUnrz6Ngktj0h3KUc0Q"
                  className="flex gap-4 items-center">
                  <div
                    className="inline-block w-8 h-8 rounded bg-gray-800"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                      <path fill="#E01E5A" d="M190.1 379.1C190.1 405 168.9 426.2 143 426.2C117.1 426.2 96 405 96 379.1C96 353.2 117.2 332 143.1 332L190.2 332L190.2 379.1zM213.8 379.1C213.8 353.2 235 332 260.9 332C286.8 332 308 353.2 308 379.1L308 496.9C308 522.8 286.8 544 260.9 544C235 544 213.8 522.8 213.8 496.9L213.8 379.1z" />
                      <path fill="#27aad2ff" d="M260.9 190.1C235 190.1 213.8 168.9 213.8 143C213.8 117.1 235 96 260.9 96C286.8 96 308 117.2 308 143.1L308 190.2L260.9 190.2zM260.9 213.8C286.8 213.8 308 235 308 260.9C308 286.8 286.8 308 260.9 308L143.1 308C117.2 308 96 286.8 96 260.9C96 235 117.2 213.8 143.1 213.8L260.9 213.8z" />
                      <path fill="#2EB67D" d="M449.9 260.9C449.9 235 471.1 213.8 497 213.8C522.9 213.8 544 235 544 260.9C544 286.8 522.8 308 496.9 308L449.8 308L449.8 260.9zM426.2 260.9C426.2 286.8 405 308 379.1 308C353.2 308 332 286.8 332 260.9L332 143.1C332 117.2 353.2 96 379.1 96C405 96 426.2 117.2 426.2 143.1L426.2 260.9z" />
                      <path fill="#ECB22E" d="M379.1 449.9C405 449.9 426.2 471.1 426.2 497C426.2 522.9 405 544 379.1 544C353.2 544 332 522.8 332 496.9L332 449.8L379.1 449.8zM379.1 426.2C353.2 426.2 332 405 332 379.1C332 353.2 353.2 332 379.1 332L496.9 332C522.8 332 544 353.2 544 379.1C544 405 522.8 426.2 496.9 426.2L379.1 426.2z" />
                    </svg>
                  </div>
                  <p className="text-md underline underline-offset-5">Arvo</p>
                </motion.a> */}
              </div>

            </div>
          </div>

          <div className="col-span-3 z-10 pl-0 lg:pl-20">{/* bg-radial-[at_100%_100%] from-blue-primary from-5% to-gray-900 to-40%  */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 40 }}
              {...animationY}
              transition={{ duration: 0.5, delay: 0 * 0.1, ease: "easeOut" }}
              action="" className="bg-gray-900 border border-gray-700 rounded-lg h-full w-full p-2 z-10">
              <div className="flex flex-col gap-5 border border-gray-700 rounded-lg h-full w-full p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstname" className="block text-white mb-2">Firstname</label>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      placeholder="Enter your firstname"
                      className="w-full p-3 py-2 rounded-sm bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastname" className="block text-white mb-2">Lastname</label>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      placeholder="Enter your lastname"
                      className="w-full p-3 py-2 rounded-sm bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-primary"
                    />
                  </div>
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

      {/* toast append */}
      <div id="append-toast" className="w-fit space-y-3 fixed top-5 left-10 md:left-15 z-100 flex flex-col">

      </div>
    </section>
  )
}