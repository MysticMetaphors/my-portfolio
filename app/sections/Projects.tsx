import Link from "next/link";
import MyCard from "../components/ui/MyCard";

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
    {
      title: "Arvo",
      description: "Arvo is a creative web-solutions studio that crafts smart, high-performance digital experiences.",
      image: "projects/arvo.png",
      url: "https://arvo-alpha.vercel.app/",
      design: true,
      icons: ["nextjs", "tailwindcss", "typescript", "html5"],
      type: "Landing Page",
      contribution: "I designed and developed the Arvo website, co;;aborating closely with the Arvo team & stakeholders to reflect the brand identity and values."
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
  ];

  return (
    <section id="projects" className="relative bg-black-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-6 py-20 lg:py-30 z-10">
        <div className="text-left flex flex-col">
          <h2 className="in-view-up mb-4 text-6xl text-center font-jersey font-semibold tracking-wide uppercase leading-tight font-extrabold text-gray-300">
            What I’ve <span className="text-blue-primary/70">Worked</span> On
          </h2>

          <p
            className="in-view-up text-gray-400 md:mb-0 mb-12 text-center"
            style={{ animationDelay: "0.1s" }}
          >
            Just a few things I’ve built along the way.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 lg:py-12 md:p-2 sm:p-6">
          {projects.map((project, i) => (
            <MyCard
              onView={true}
              key={i}
              index={i}
              {...project}
            />
          ))}
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
