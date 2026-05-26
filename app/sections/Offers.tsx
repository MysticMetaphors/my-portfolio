import { Check } from "lucide-react";
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
                  <div className="flex items-center gap-2 mb-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-700/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-700/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-700/50" />
                  </div>

                  <div className="flex flex-col gap-6 w-full max-w-[85%] mx-auto mt-auto mb-auto">
                    <div className="in-view-up w-full h-34 rounded-lg border border-gray-800/60 bg-gradient-to-br from-gray-800/30 to-transparent relative overflow-hidden">
                      <div className="animate-sweep absolute top-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
                    </div>

                    <div className="space-y-3">
                      <div
                        className="in-view-grow-x h-1.5 w-3/4 bg-gray-800 rounded-full"
                        style={{ animationDelay: "0.2s" }}
                      />
                      <div
                        className="in-view-grow-x h-1.5 w-1/2 bg-gray-800 rounded-full"
                        style={{ animationDelay: "0.3s" }}
                      />
                      <div
                        className="in-view-grow-x h-1.5 w-5/6 bg-gray-800 rounded-full"
                        style={{ animationDelay: "0.4s" }}
                      />
                    </div>

                    <div className="flex gap-3 mt-4">
                      <div
                        className="in-view-scale w-8 h-8 rounded-md bg-blue-500/20 border border-blue-500/30"
                        style={{ animationDelay: "0.5s" }}
                      />
                      <div
                        className="in-view-scale w-8 h-8 rounded-md bg-gray-800/50 border border-gray-800"
                        style={{ animationDelay: "0.6s" }}
                      />
                      <div
                        className="in-view-scale w-8 h-8 rounded-md bg-gray-800/50 border border-gray-800"
                        style={{ animationDelay: "0.7s" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-3 md:order-2 order-1 z-10">
            <div>
              <h1 className="in-view-up mb-4 text-4xl leading-tight font-extrabold text-white">
                What I <span className="text-blue-primary">Offer</span>
              </h1>
              <p
                className="in-view-up text-gray-400 md:text-lg text-md text-justify mb-8"
                style={{ animationDelay: "0.1s" }}
              >
                I offer a wide range of services, from web development to UI/UX design, and I am always
                eager to take on new challenges. Whether you need a simple website or a complex web application,
                I have the skills to deliver high-quality results.
              </p>

              <div className="gap-4 py-8 grid lg:grid-row-2 grid-cols-1">
                <div
                  className="in-view-right mb-4 flex items-start gap-4"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="bg-blue-primary/60 rounded-full p-1">
                    <Check size={18} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      Web Design & Development
                    </h2>
                    <p className="text-gray-400 text-justify">
                      I design and develop modern, responsive websites tailored to your brand 
                      from landing pages and portfolio sites to business websites and web platforms. 
                      Whether you need a simple front-facing website or a more dynamic experience, 
                      I create solutions focused on performance, usability, and clean design.
                    </p>
                  </div>
                </div>
                <div
                  className="in-view-right mb-4 flex items-start gap-4"
                  style={{ animationDelay: "0.35s" }}
                >
                  <div className="bg-blue-primary/60 rounded-full p-1">
                    <Check size={18} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      Development Support & Collaboration
                    </h2>
                    <p className="text-gray-400 text-justify">
                      Need an additional developer on your team? I can collaborate with existing
                      teams to help build features, improve frontend experiences, develop full-stack 
                      functionality, fix issues, and accelerate ongoing projects while maintaining 
                      clean and maintainable code.
                    </p>
                  </div>
                </div>
                <div
                  className="in-view-right mb-4 flex items-start gap-4"
                  style={{ animationDelay: "0.5s" }}
                >
                  <div className="bg-blue-primary/60 rounded-full p-1">
                    <Check size={18} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      Custom System Development
                    </h2>
                    <p className="text-gray-400 text-justify">
                      I develop custom web applications and business systems built around your 
                      specific operational needs. Whether it’s dashboards, management systems, 
                      client portals, or internal tools, I create scalable solutions that help 
                      businesses operate more effectively and grow efficiently.
                    </p>
                  </div>
                </div>
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
