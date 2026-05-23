import { FastForward, GitFork, KeyRound, Settings, TabletSmartphone } from "lucide-react";

export default function Services() {
  const services = [
    {
      name: "UI/UX Design",
      description: "Your website will be built with UI/UX principles in mind and your brands identity that enchances your users exprience.",
      icon: TabletSmartphone,
      link_to: "/contact"
    },
    {
      name: "Web Development",
      description: "Your website shouldn't just look good, it needs to be fast. I develop responsive sites optimized for high performance, ensuring your users get a smooth experience across all devices.",
      icon: TabletSmartphone,
      link_to: "/contact"
    },
    {
      name: "Solutions Engineering",
      description: "I develop solutions that is alighned to your business goal and operations custom built for your needs.",
      icon: GitFork,
      link_to: "/contact"
    },
    {
      name: "Optimized Performance",
      description: "If a website takes more than 2–3 seconds to load, you risk losing potential clients. I optimize your site to load in around 1 second for maximum results.",
      icon: FastForward,
      link_to: "/contact"
    },
    {
      name: "Maintenance & Support",
      description: "After your website goes live, it needs regular updates and care. I provide maintenance and support for your site based on our contract.",
      icon: Settings,
      link_to: "/contact"
    },
    {
      name: "Security Implementation",
      description: "I implement authentication, role-based access control, secure data validation, and encryption standards to ensure your system stay protected and secure.",
      icon: KeyRound,
      link_to: "/contact"
    },
  ];

  return (
    <section id="services" className="relative bg-black-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-6 py-20 lg:py-30 z-10">
        <div className="text-left flex flex-col">
          <h1 className="in-view-up mb-4 text-4xl text-center leading-tight font-extrabold text-gray-300">
            What I <span className="text-blue-primary/70">Do</span>
          </h1>

          <p
            className="in-view-up text-gray-400 mb-12 text-center"
            style={{ animationDelay: "0.1s" }}
          >
            Things that I do, not only to improve your brand.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isLastAndOdd = i === services.length - 1 && services.length % 2 !== 0;

            return (
              <div
                key={i}
                style={{ animationDelay: `${i * 0.1}s` }}
                className={`
                  in-view-up
                  bg-gray-900/90 hover:bg-gray-900 group border border-gray-700
                  hover:border-blue-primary hover:shadow-blue-primary/20
                  hover:-translate-y-2 transform shadow-lg rounded-lg h-full w-full p-2 z-10
                  transition-all duration-300
                  ${isLastAndOdd ? "lg:col-span-1 md:col-span-2" : "col-span-1"}
                `}
              >
                <div className="flex flex-col gap-4 border border-gray-700 rounded-lg h-full w-full p-8">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-primary/50 rounded-md p-2">
                      <Icon size={24} />
                    </div>
                    <h2 className="text-xl font-bold">{service.name}</h2>
                  </div>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}