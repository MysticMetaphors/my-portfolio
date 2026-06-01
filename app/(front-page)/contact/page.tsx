"use client";

import { motion } from "framer-motion";
// import { useState } from "react";
// import { appendToast } from "@/lib/global";
// import { WavyBackground } from "../components/ui/wavy-background";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { sileo } from "sileo";
import { Bug, Loader2, MailWarning, Rocket } from "lucide-react";
import { useSearchParams } from "next/navigation";
// import { sub } from "framer-motion/client";

type ContactProp = {
  onView?: boolean,
}

export default function Contact({ onView }: ContactProp) {
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const formRef = useRef<HTMLFormElement>(null);

  const demoParam = searchParams.get("demo");
  const defaultMessage = demoParam ? `I want to request a demo for "${demoParam}" Project` : "";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const number = formData.get("number");

    //require all fields Name, Email, Message
    if (!name || !email || !message || !number) {
      const missing = [
        !name && "Name",
        !email && "Email",
        !message && "Message",
        !number && "number",
      ].filter(Boolean).join(", ");

      sileo.error({
        title: "Please fill the following fields!",
        icon: <MailWarning className="size-3.5" />,
        description: (
          <div className="flex gap-1 flex-wrap mt-0.5">
            {[!name && "Name", !email && "Email", !message && "Message", !number && "Number"]
              .filter(Boolean)
              .map((field) => (
                <span key={field as string} className="text-xs bg-red-500/20 text-red-400 px-1.5 py-0.5 rounded-sm">
                  {field}
                </span>
              ))}
          </div>
        )
      })
      return setLoading(false);
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
      // appendToast("append-toast", "success", "Thanks for reaching out!");
      sileo.success({
        title: "Thanks for reaching out!",
        icon: <Rocket className="size-3.5" />,
        description: "I'll get back to you within 24 hours."
      })
      resetForm();
      return setLoading(false)
    } else {
      sileo.error({
        title: "Unexpected Error Occured!",
        description: "Oops there could be problem in the system",
        icon: <Bug className="size-3.5" />
      })
      return setLoading(false)
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
    <section id="contact" className="relative overflow-hidden bg-black-primary sm:pt-0 sm:pt-10 pt-25">
      {/* <div className="absolute z-11 top-0 left-0 h-full w-full bg-linear-to-t from-blue-primary/20 from-5% via-transparent via-50% to-transparent"></div> */}

      <div className="z-12 mx-auto px-6 py-10 md:py-30 max-w-7xl">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-2 gap-7">

          <div className="col-span-2 z-10">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                {...animationY}
                transition={{ duration: 0.5, delay: 0 * 0.1, ease: "easeOut" }}
                className="text-5xl md:text-6xl leading-tight font-extrabold text-white font-jersey font-semibold tracking-wide uppercase">
                Let's <span className="text-blue-primary">Connect</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                {...animationY}
                transition={{ duration: 0.5, delay: 0 * 0.1, ease: "easeOut" }}
                className="text-gray-400 md:text-lg text-md text-justify mb-8">
                Send email to me with all the details you want for your new website, and I'll get back to you within 24 hours.
                Prefer to talk? Give me a call to connect right away. If I can't answer right away, I'll return your call the same day.
              </motion.p>

              <div className="space-y-8 md:p-8">
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  {...animationX}
                  transition={{ duration: 0.5, delay: 0 * 0.1, ease: "easeOut" }}
                  className="flex gap-4 items-center">
                  <FontAwesomeIcon icon={faEnvelope} className="text-xl p-1.5 rounded-sm bg-blue-primary/30" />
                  <a href="mailto:vonbanalbryan18v@gmail.com" className="text-md underline underline-offset-5">vonbanalbryan18v@gmail.com</a>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  {...animationX}
                  transition={{ duration: 0.5, delay: 1 * 0.1, ease: "easeOut" }}
                  className="flex gap-4 items-center">
                  <FontAwesomeIcon icon={faPhone} className="text-xl p-1.5 rounded-sm bg-blue-primary/30" />
                  <a href="tel:+639606874147" className="text-md underline underline-offset-5"><span className="font-bold">(+63)</span>-960-687-4147</a>
                </motion.div>
                <motion.a
                  initial={{ opacity: 0, x: -40 }}
                  {...animationX}
                  target="_blank"
                  transition={{ duration: 0.5, delay: 2 * 0.1, ease: "easeOut" }}
                  href="https://www.linkedin.com/in/von-bryan-ba%C3%B1al-1a1188314/"
                  className="flex gap-4 items-center">
                  <FontAwesomeIcon icon={faLinkedinIn} className="bg-blue-primary/70 text-xl p-1.5 rounded" />
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
                    placeholder="Your name"
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
                      placeholder="example@gmail.com"
                      className="w-full p-3 py-2 rounded-sm bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="number" className="block text-white mb-2">Number</label>
                    <input
                      type="tel"
                      id="number"
                      name="number"
                      placeholder="+1-800-123-4567"
                      className="w-full p-3 py-2 rounded-sm bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-primary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    defaultValue={defaultMessage}
                    placeholder="Describe your project idea..."
                    rows={5}
                    className="w-full p-3 py-2 rounded-sm bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-primary"
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 mt-5 w-full">
                  {/* Primary Action: Send Message Form Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto font-jersey font-semibold tracking-wide uppercase text-xl bg-blue-400/70 hover:shadow-[0_0_40px_#0095ff] transition-all duration-300 shadow-[0_0_5px_#0095ff] hover:bg-blue-primary text-black py-3 px-6 rounded-md disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>

                  {/* Secondary Action: Book a Call Link (Styled as a Button) */}
                  <a
                    href="https://cal.com/von-bryan-banal-icmjdv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto hover:bg-blue-primary hover:text-black font-jersey font-semibold tracking-wide uppercase text-xl bg-blue-primary/5 border border-blue-primary hover:border-blue-primary text-blue-primary transition-all duration-300 py-3 px-6 rounded-md flex items-center justify-center gap-2"
                  >
                    Book a Call
                  </a>
                </div>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  )
}