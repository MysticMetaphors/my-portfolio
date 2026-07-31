import Link from "next/link";
import ProjectsCarousel from "../components/ui/ProjectsCarousel";

export default function Projects() {
  const projects = [
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
      url: "https://www.figma.com/proto/4VE6tWzRSM8YvEmfQHO98u/The-Potatophile?node-id=1002-129&t=DSNMZ2FZtVMMt24U-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
      icons: ["figma"],
      type: "Landing Page",
      contribution: "Spearheaded the end-to-end UI/UX engineering, defining the structural layout, user flows, and custom interactive elements to ensure a premium, friction-free experience."
    },
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
  ];

  return (
    <section id="projects" className="relative bg-black-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-6 py-20 lg:py-30 z-10">
        <div className="text-left flex flex-col">
          <h2 className="in-view-up text-5xl md:text-6xl md:text-center font-jersey font-semibold tracking-wide uppercase leading-tight font-extrabold text-gray-300">
            Things I’ve <span className="text-blue-primary/70">Built</span>
          </h2>

          <p
            className="in-view-up text-gray-400 md:mb-0 mb-12 md:text-center"
            style={{ animationDelay: "0.1s" }}
          >
            Just a few things I’ve built along the way.
          </p>
        </div>
        <div className="lg:py-12 md:py-8 py-6">
          <ProjectsCarousel projects={projects} />
        </div>
        <div className="flex w-full justify-center mt-10 gap-4">
          <Link href="projects" className="text-xl font-jersey font-semibold tracking-wide uppercase cursor-pointer px-6 py-2 rounded-md bg-blue-primary text-black font-semibold shadow-[0_0_10px_#0095ff] hover:shadow-[0_0_40px_#0095ff] transition-all duration-300">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
