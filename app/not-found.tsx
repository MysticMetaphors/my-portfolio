"use client"

import Link from "next/link"
import GlobeBG from "./components/ui/GlobeBG"

export default function NotFound() {
  return (
    <GlobeBG>
      <div className="absolute inset-0 z-[1] flex flex-col items-center justify-start pt-60 md:pt-40 text-white font-sans pointer-events-none">
        <h1 className="m-0 text-[11vw] leading-none font-extrabold drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
          404
        </h1>
        <p className="text-sm md:text-2xl mb-12 font-normal opacity-80 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
          You've drifted too far into the atmosphere.
        </p>

        <Link
          href="/"
          className="pointer-events-auto px-12 py-3 text-lg text-white bg-white/5 border border-white/20 rounded-full backdrop-blur-md transition-all duration-300 ease-in-out cursor-pointer shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:bg-white/15 hover:-translate-y-0.5"
        >
          Return
        </Link>
      </div>
    </GlobeBG>
  )
}