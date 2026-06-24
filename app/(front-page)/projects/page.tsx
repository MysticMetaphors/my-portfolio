"use client"

import MyCard from "../../components/ui/MyCard";
import { motion } from "framer-motion";
import { useState } from "react";

export default function projects() {
  const projects = [
    {
      title: "Athrox (Still in development)",
      description: "Send emails, manage contacts, and see exactly how people interact with your messages—all in one place. With this platform, you can track important email activity such as whether an email was delivered, opened, or clicked. You can also see how engaged people are with your emails and easily manage unsubscribes for compliance. You can organize your contacts into different groups, run email campaigns, and view simple reports to see what's working and what needs improvement. We're also planning to add support for multiple sending domains, reusable email templates, and sender health monitoring to help improve email deliverability and reputation.",
      images: [
        'projects/athrox/image_1.png',
        'projects/athrox/image_4.png',
        'projects/athrox/image_3.png',
        'projects/athrox/image_2.png',
      ],
      featured: true,
      icons: ["nextjs", "tailwindcss", "typescript", "laravel", "php"],
      type: "Engineered Solution",
      contribution: "I designed and developed the Athrox platform, creating a user-friendly interface that allows users to send emails, manage contacts, and track email interactions. I implemented features such as email activity tracking, contact management, email campaigns, and reporting to provide users with insights into their email performance. Additionally, I am working on adding support for multiple sending domains, reusable email templates, and sender health monitoring to enhance the platform's functionality and improve email deliverability."
    },
    {
      title: "Seinna Brews",
      description: "A cozy café experience focused on comfort, calm moments, and a warm escape from everyday life.",
      image: "projects/seinna_brews.png",
      url: "https://sienna-brews.vercel.app/",
      design: true,
      icons: ["nextjs", "tailwindcss", "typescript", "html5"],
      type: "Landing Page",
      contribution: "I designed and developed the Seinna Brews website, creating a cozy and inviting online presence that reflects the café's focus on comfort and calm moments. I implemented a user-friendly interface and responsive design to ensure an enjoyable browsing experience for visitors."
    },
    {
      title: "Solara Grand",
      description: "A premium luxury resort experience that blends refined comfort with unforgettable adventures and immersive moments.",
      image: "projects/solara_grand.png",
      url: "https://solara-grand.vercel.app/",
      design: true,
      icons: ["nextjs", "tailwindcss", "typescript", "html5"],
      type: "Landing Page",
      contribution: "I designed and developed the Solara Grand website, creating a luxurious and immersive online presence that reflects the resort's blend of refined comfort and unforgettable adventures. I implemented a visually stunning design and responsive layout to provide an engaging browsing experience for potential guests."
    },
    {
      title: "Outpost",
      description: "A premier indie game studio that builds atmospheric digital worlds through clean code and immersive design",
      image: "projects/outpost.png",
      url: "https://indie-web-ikp3.vercel.app/",
      design: true,
      icons: ["nextjs", "tailwindcss", "typescript", "html5"],
      type: "Landing Page",
      contribution: "I designed and developed the Outpost website, creating a visually appealing and immersive online presence that reflects the indie game studio's focus on atmospheric digital worlds. I implemented a user-friendly interface and responsive design to ensure an engaging browsing experience for visitors."
    },
    {
      title: "Slice",
      description: "A premium cake shop Demo website that offers a delightful selection of cakes for every occasion",
      image: "projects/cake2go.png",
      url: "https://cake2go.vercel.app/",
      design: true,
      icons: ["nextjs", "tailwindcss", "typescript", "html5"],
      type: "Landing Page",
      contribution: "I designed and developed the Slice website, creating a visually appealing and user-friendly online presence that reflects the cake shop's focus on delivering delightful treats for every occasion. I implemented a responsive design to ensure an enjoyable browsing experience for visitors."
    },
    // {
    //   title: "Fluxo",
    //   description: "Fluxo is a showcase of clean and modern web design, featuring responsive layouts, elegant UI components.",
    //   image: "projects/fluxos.png",
    //   url: "https://fluxo-alpha.vercel.app/",
    //   design: true,
    //   icons: ["react", "tailwindcss", "javascript", "html5"]
    // },
    {
      title: "Arvo",
      description: "Arvo is a creative web-solutions studio that crafts smart, high-performance digital experiences.",
      image: "projects/arvo.png",
      url: "https://arvo-alpha.vercel.app/",
      design: true,
      icons: ["nextjs", "tailwindcss", "typescript", "html5"],
      type: "Landing Page",
      contribution: "I designed and developed the Arvo website, collaborating closely with the Arvo team & stakeholders to reflect the brand identity and values."
    },
    {
      title: "PixelForge",
      description: "PixelForge offers free pixel art and AI resources to support developers and artists in creating their games.",
      image: "projects/pixelforge.png",
      url: "https://pixel-forge-omega.vercel.app/",
      design: true,
      icons: ["react", "tailwindcss", "supabase", "javascript", "html5"],
      type: "Landing Page",
      contribution: "I designed and developed the PixelForge website, creating a visually appealing and user-friendly online presence that reflects the platform's focus on providing free pixel art and AI resources for developers and artists. I implemented a responsive design to ensure an enjoyable browsing experience for visitors."
    },
    {
      title: "The Potatophile",
      description: "A conversion-driven landing page redesign for The Potatophile franchising, engineered to elevate the brand's digital presence through optimized UI/UX, strategic user flows, and a premium visual aesthetic.",
      images: [
        'projects/potatophile/mockup.png',
        'projects/potatophile/image_1.png',
        'projects/potatophile/image_6.png',
        'projects/potatophile/image_2.png',
        'projects/potatophile/image_3.png',
        'projects/potatophile/image_4.png',
        'projects/potatophile/image_5.png',
        'projects/potatophile/image_7.png',
      ],
      // featured: true,
      url: "https://www.figma.com/proto/4VE6tWzRSM8YvEmfQHO98u/The-Potatophile?node-id=1002-129&t=DSNMZ2FZtVMMt24U-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
      icons: ["figma"],
      type: "Landing Page",
      contribution: "Spearheaded the end-to-end UI/UX engineering, defining the structural layout, user flows, and custom interactive elements to ensure a premium, friction-free experience."
    },
    {
      title: "Student Information System",
      description: "The Student Information System (SIS) is a centralized web-based platform designed to manage and streamline school operations from Grade 1 to Grade 12. It supports multiple user roles and handles the full student lifecycle—from initial inquiry to enrollment and academic management.",
      images: [
        'projects/SIS/image_1.png',
        'projects/SIS/image_2.png',
        'projects/SIS/image_3.png',
        'projects/SIS/image_4.png',
        'projects/SIS/image_5.png',
        'projects/SIS/image_6.png',
        // 'projects/SIS/image_7.png',
        // 'projects/SIS/image_8.png',
        // 'projects/SIS/image_9.png',
      ],
      collaborators: [
        {
          name: 'Von Bryan',
          avatar: 'about-profile.png',
          linkedin: 'https://www.linkedin.com/in/von-bryan-ba%C3%B1al-1a1188314/'
        },
        {
          name: 'Darhyl Borcelis',
          avatar: 'collaborators/darhyl.png',
          linkedin: 'https://www.linkedin.com/in/darhyl-borcelis-159640403/'
        }
      ],
      icons: ["nextjs", "tailwindcss", "typescript", "laravel"],
      featured: true,
      type: "Engineered Solution",
      contribution: "I led the development of the Student Information System (SIS) as the lead developer, overseeing the entire project lifecycle from design to deployment. I collaborated closely with a team of developers and stakeholders to create a robust, user-friendly platform that streamlined school operations and enhanced the student experience."
    },
    {
      title: "Budgeting App",
      description: "A simple budgeting app that allow you to track & manage your expenses and income. The project allow you to capture your physical receipt and automatically scan it by utilizing AI.",
      images: [
        'projects/verge/image_1.jpg',
        'projects/verge/image_2.jpg',
        'projects/verge/image_3.jpg',
        'projects/verge/image_4.jpg',
        'projects/verge/image_5.jpg',
        'projects/verge/image_6.jpg',
        'projects/verge/image_7.jpg',
      ],
      icons: ["nextjs", "tailwindcss", "typescript", "supabase"],
      type: "Engineered Solution",
      contribution: "I designed and developed the Budgeting App, creating a user-friendly platform that allows users to track and manage their expenses and income. my primary users now is my family & friends"
    },
  ];
  const ChipsTypes = ["All Projects", "Engineered Solution", "Landing Page"]
  const [activeChip, setActiveChip] = useState("All Projects");

  const filteredProjects = activeChip === "All Projects"
    ? projects
    : projects.filter((p) => p.type === activeChip);

  return (
    <section id="projects" className="relative bg-black-primary overflow-hidden sm:p-0 pt-25">
      {/* <div className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3/4 w-full bg-gradient-to-t from-transparent via-darkblue-primary/35 to-transparent pointer-events-none"></div> */}
      {/* <WavyBackground
          backgroundFill="#0a0a0af1"
          waveWidth={1}
          blur={0}
          waveOpacity={0}
          sizeOveride={'mt-50 h-250 w-[calc(100% + 20)]'}
        /> */}
      <div className="max-w-7xl mx-auto px-6 md:px-6 py-20 lg:py-30 mt-10 relative z-10">
        <div className="text-left flex flex-col">
          {/* Section Header */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-5xl md:text-6xl font-jersey font-semibold tracking-wide uppercase leading-tight font-extrabold text-gray-300"
          >
            Things I’ve <span className="text-blue-primary/70">Built</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-gray-400 mb-12"
          >
            Just a few things I’ve built along the way.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex gap-2 flex-wrap mb-8"
          >
            {ChipsTypes.map((chip) => (
              <button
                key={chip}
                onClick={() => setActiveChip(chip)}
                className={`px-4 py-1.5 text-md font-jersey tracking-[0.05em] uppercase rounded-full text-sm font-medium border transition-all duration-300 cursor-pointer
                  ${activeChip === chip
                    ? "bg-blue-primary/20 border-blue-primary text-blue-primary"
                    : "bg-transparent border-gray-700 text-gray-400 hover:border-gray-500 hover:text-gray-300"
                  }`}
              >
                {chip}
              </button>
            ))}
          </motion.div>

          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 lg:py-12 md:p-2 sm:p-6">
          {filteredProjects.map((project, i) => (
            <MyCard
              onView={true}
              key={i}
              index={i}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  )
}