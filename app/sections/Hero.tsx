import { FlipWords } from "../components/ui/flip-words";

export default function Hero() {
  const WORDS = ["Functional", "Meaningful", "Powerful", "Beautiful"]
  return (
    <section className="relative flex flex-col bg-black-primary items-center justify-center min-h-screen text-center overflow-hidden md:pt-0 pt-25 bg-black">
      <div className="flex flex-col items-center justify-center min-h-screen w-screen px-6 sm:p-0">
        <div className="relative z-20 max-w-4xl">
          {/* <div className="animate-slide-up-fade flex-wrap items-center justify-center md:flex hidden gap-4 mb-3">
            <span className="bg-white/5 rounded-full border border-white/10 py-1 px-3 flex font-semibold items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-primary/80 shadow-[0_0_5px_#0095ff]" />
              Custom Design
            </span>
            <span className="bg-white/5 rounded-full border border-white/10 py-1 px-3 flex font-semibold items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-primary/80 shadow-[0_0_5px_#0095ff]" />
              Open for Hire
            </span>
          </div> */}

          <span className="font-jersey text-blue-primary text-md md:text-xl tracking-[0.2em] uppercase block mb-2 drop-shadow-sm">
            {'------<<'} Web Developer {'>>------'}
          </span>

          <h1
            className="font-jersey animate-slide-up-fade relative text-5xl mx-auto max-w-3xl md:text-7xl font-semibold tracking-wide uppercase text-white  leading-tight"
            style={{ animationDelay: "0.2s" }}
          >
            Let’s Build Something
            <span className="relative inline-block border-b-5 border-blue-primary pb-1 text-blue-primary">
              <FlipWords words={WORDS} duration={2500} />
            </span>
            Together
          </h1>

          <p
            className="animate-slide-up-fade mt-6 text-gray-300 text-lg md:text-xl max-w-3xl mx-auto"
            style={{ animationDelay: "0.4s" }}
          >
            I develop <span className="font-bold">100% custom websites, web applications, and business systems</span> {" "}
            designed to improve user experience, streamline operations, and support your business goals, from
            landing pages to scalable internal platforms.
          </p>

          <div
            className="animate-slide-up-fade mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
            style={{ animationDelay: "0.6s" }}
          >
            {/* Projects Button */}
            <a href="#projects" className="text-lg font-jersey font-semibold tracking-wide uppercase px-6 py-2 rounded-full bg-blue-primary shadow-[0_0_5px_#0095ff] text-black hover:shadow-[0_0_40px_#0095ff] transition-all duration-300">
              Projects
            </a>

            <div className="flex items-center bg-blue-primary/5 border border-blue-primary rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_#0095ff]/30">
              <a href="#contact" className="text-lg font-jersey font-semibold tracking-wide uppercase px-5 py-2 text-blue-primary hover:bg-blue-primary hover:text-black transition-all duration-300">
                Contact Me
              </a>
              <span className="h-11 w-[1px] bg-blue-primary" />
              <a href="https://cal.com/von-bryan-banal-icmjdv" target="_blank" rel="noopener noreferrer" className="text-lg font-jersey font-semibold tracking-wide uppercase px-5 py-2 text-blue-primary hover:bg-blue-primary hover:text-black transition-all duration-300">
                Book a Meet
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
