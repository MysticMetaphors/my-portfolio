"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/hook/useAuth";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
  const pathname = usePathname();
  const { isAuthenticated } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const navigations = [
    {
      label: "Home",
      link: "/"
    },
    {
      label: "Projects",
      link: "/projects"
    },
    {
      label: "Resume",
      link: "/resume"
    },
    {
      label: "Contact",
      link: "/contact"
    },
  ]

  return (
    <nav className="absolute z-20 top-5 left-1/2 transform -translate-x-1/2 max-w-7xl  w-full px-6 py-4 bg-transparent flex items-center justify-between rounded-full">
      <div className="flex gap-3 items-center z-110">
        <Image height={10} width={10} quality={75} src="/bryan.png" alt="Von Bryan Profile" className="h-10 w-fit rounded-full" />
        <div className="md:mr-2 mr-5">
          <h1 className="font-semibold text-white">Von Bryan</h1>
          <p className="text-gray-300 text-sm font-normal">Frontend Developer & UI/UX Designer</p>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-2 text-white">
        {navigations.map((nav, i) => (
          <Link
            key={i}
            href={nav.link}
            className={`cursor-pointer hover:bg-blue-primary/20 px-3 rounded-sm transition-all ${pathname == nav.link ? 'bg-blue-primary/20' : ''}`}>
            {nav.label}
          </Link>
        ))}
        {
          isAuthenticated && (
            <Link
              href="/dashboard"
              className="cursor-pointer flex items-center gap-2 bg-charleston-green border border-[#3E3E3E] text-white font-semibold px-3 py-1 rounded-sm transition-all">
              Dashboard
              <div className="w-2 h-2 rounded-full bg-blue-primary/80 shadow-[0_0_5px_#0095ff]" />
            </Link>
          )
        }
      </div>
      <button
        className="md:hidden z-110 text-white focus:outline-none"
        id="menu"
        aria-label={isOpen ? "Close menu" : "Open menu"} // This provides the accessible name
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon icon={isOpen ? faXmark : faBars} className="text-2xl" />
      </button>

      {isOpen && (
        <div className="absolute border border-blue-primary pt-30 -top-10 left-0 w-full bg-gray-900/90 backdrop-blur-md mt-3 py-5 rounded-lg flex flex-col items-center gap-4 text-white md:hidden">
          {navigations.map((nav, i) => (
            <Link
              key={i}
              href={nav.link}
              onClick={() => setIsOpen(false)}
              className={`cursor-pointer hover:bg-blue-primary/20 px-3 rounded-sm transition-all ${pathname == nav.link ? 'bg-blue-primary/20' : ''}`}>
              {nav.label}
            </Link>
          ))}
          {
            isAuthenticated && (
              <Link
                href="/dashboard"
                className="cursor-pointer flex items-center gap-2 bg-charleston-green border border-[#3E3E3E] text-white font-semibold px-3 py-1 rounded-sm transition-all">
                Dashboard
                <div className="w-2 h-2 rounded-full bg-blue-primary/80 shadow-[0_0_5px_#0095ff]" />
              </Link>
            )
          }
        </div>
      )}
    </nav>
  );
}

