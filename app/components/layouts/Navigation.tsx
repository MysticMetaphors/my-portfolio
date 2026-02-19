"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="z-100 absolute z-10 top-5 left-1/2 transform -translate-x-1/2 max-w-7xl  w-full px-6 py-4 bg-transparent flex items-center justify-between rounded-full">
      <div className="flex gap-3 items-center z-110">
        <Image height={800} width={800} src="/bryan.png" alt="Arvo Logo" className="h-10 w-fit rounded-full" />
        <div className="ml-2">
          <h1 className="font-semibold text-white">Von Bryan S. Bañal</h1>
          <p className="text-gray-300 text-sm font-light">Frontend Developer & UI/UX Designer</p>
        </div>
      </div>

      <div className="hidden md:flex gap-2 text-white">
        <Link
          href="/"
          className="cursor-pointer hover:bg-blue-primary/20 px-3 rounded-sm transition-all">
          Home
        </Link>
        <Link
          href="/projects"
          className="cursor-pointer hover:bg-blue-primary/20 px-3 rounded-sm transition-all">
          Projects
        </Link>
        {/* <Link
          href="/blog"
          className="cursor-pointer hover:bg-blue-primary/20 px-3 rounded-sm transition-all">
          Blog
        </Link> */}
        <Link
          href="/resume"
          className="cursor-pointer hover:bg-blue-primary/20 px-3 rounded-sm transition-all">
          Resume
        </Link>
        <Link
          href="/contact"
          className="cursor-pointer hover:bg-blue-primary/20 px-3 rounded-sm transition-all">
          Contact
        </Link>
      </div>

      <button
        className="md:hidden z-110 text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"} text-2xl`}></i>
      </button>

      {isOpen && (
        <div className="absolute border border-blue-primary pt-30 -top-10 left-0 w-full bg-gray-900/90 backdrop-blur-md mt-3 py-5 rounded-lg flex flex-col items-center gap-4 text-white md:hidden">
          <Link
            href="/"
            className="cursor-pointer hover:text-blue-primary transition-all"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="cursor-pointer hover:text-blue-primary transition-all"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>

          {/* <Link
            href="/blog"
            className="cursor-pointer hover:text-blue-primary transition-all"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link> */}
          <Link
            href="/resume"
            className="cursor-pointer hover:text-blue-primary transition-all"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </Link>
          <Link
            href="/contact"
            className="cursor-pointer hover:text-blue-primary transition-all"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

