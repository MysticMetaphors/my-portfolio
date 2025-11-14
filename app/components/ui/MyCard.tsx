"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type ArvoCardProps = {
  title?: string;
  description?: string;
  design?: boolean;
  url?: string;
  image?: string;
  icons?: string[];
  index?: number;
  onView?: boolean;
};

export default function MyCard({
  title = '',
  description = '',
  design,
  url,
  image = '',
  icons = [],
  index = 0,
  onView }
  : ArvoCardProps) {
  const animationProps = onView
    ? {
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
    }
    : {
      animate: { opacity: 1, y: 0 },
    };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      {...animationProps}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group h-fit relative border border-gray-900 rounded-lg bg-linear-to-t from-blue-primary/40 to-black overflow-hidden 
             transform transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-lg 
             hover:shadow-blue-primary/20"
    >
      {/* {design ?
        <span className="absolute top-3 right-3 z-10 shadow-[0_0_5px_#00FF99] px-3 py-1 text-sm font-medium text-gray-100 bg-green-600 rounded-md">
          Only Design
        </span> : ''
      } */}

      <Image
        src={`/${image}`}
        alt={title}
        width={800}
        height={800}
        className="h-[48%] w-full object-cover rounded-t-lg transition-opacity duration-300 group-hover:opacity-70"
      />

      {/* Overlay */}
      <div className="inset-0 flex flex-col justify-center items-center align-center bg-black/80 transition-opacity duration-300">
        <div className="p-8 py-4 w-full flex justify-center items-center">
          <div>
            <h3 className="text-white lg:text-lg mb:text-md font-semibold tracking-tight mb-2">{title}</h3>
            <p className="text-gray-400 lg:text-md md:text-md mb-2">{description}</p>
            <div className="flex justify-between sm:flex-row flex-col gap-4 mt-4">
              <div className="flex flex-wrap gap-4">
                {icons ?
                  icons.map((icon, i) => (
                    <Image key={i} width={800} height={800} alt={icon} src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}/${icon}-original.svg`} className="w-6" />
                  ))
                  : ''}

              </div>
              {url ?
                <a href={url} className="px-2 py-1 w-fit bg-blue-primary/5 rounded-sm border border-blue-primary/20 text-blue-primary/60 hover:bg-blue-primary hover:text-black transition-all duration-300">
                  <i className="fa-solid fa-arrow-up-right-from-square mr-1"></i> Live
                </a>
                : ''}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
