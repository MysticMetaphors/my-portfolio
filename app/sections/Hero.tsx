"use client";

import { motion } from "framer-motion";
import { FlipWords } from "../components/ui/flip-words";

export default function Hero() {
  return (
    <section className="relative flex flex-col inset-shadow- items-center justify-center min-h-screen text-center overflow-hidden px-6 sm:p-0 pt-25 bg-darkblue-primary">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,153,0.08)_0%,transparent_70%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,#0a0a0a_100%)] pointer-events-none"></div>
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100\\' height=\\'100\\'><rect width=\\'100\\' height=\\'100\\' fill=\\'none\\' stroke=\\'%2300FF99\\' stroke-width=\\'0.5\\'/></svg>')]"></div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-4xl"
      >
        {/* <StorageToast /> */}
        <div className="flex-wrap items-center justify-center md:flex hidden gap-4 mb-3">
          <span className="bg-white/5 rounded-full border border-white/10 py-1 px-3 flex font-semibold items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-primary/80 shadow-[0_0_5px_#0095ff]" />
            Custom Design
          </span>
          <span className="bg-white/5 rounded-full border border-white/10 py-1 px-3 flex font-semibold items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-primary/80 shadow-[0_0_5px_#0095ff]" />
            Open for Hire
          </span>
          {/* <span className="bg-white/5 rounded-full border border-white/10 py-1 px-3 flex font-semibold items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-primary/80 shadow-[0_0_5px_#0095ff]" />
            Fast Development
          </span> */}
        </div>
        <h1 className="relative text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
          Let’s Build Something
          <span className="relative inline-block border-b-5 border-blue-primary/50 pb-1 text-blue-primary">
            <FlipWords words={["Meaningful", "Powerful", "Beautiful", "Functional"]} duration={1000} />
          </span>
          Together
        </h1>

        <p className="mt-6 text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
          I offer <span className="font-bold">100% custom websites</span>, designed and coded from the ground up to reflect your brand.
          You can also have access to <span className="font-bold">Reliable Maintenance</span> and {" "}
          <span className="font-bold">Technical Support</span> of your site
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" className="px-6 py-2 rounded-full bg-blue-primary shadow-[0_0_5px_#0095ff] hover:bg-blue-primary text-black font-semibold hover:shadow-[0_0_40px_#0095ff] transition-all duration-300">
            Projects
          </a>
          <a href="#contact" className="px-6 py-2 bg-blue-primary/5 rounded-full border border-blue-primary text-blue-primary hover:bg-blue-primary hover:text-black transition-all duration-300">
            Contact
          </a>
        </div>
      </motion.div>
      {/* <div className="absolute bottom-0 left-0 z-40 w-full h-14 bg-linear-to-t from-black-primary to-transparent"></div> */}
    </section>
  );
}
// const StorageToast = () => {
//   return (
//     <div className="flex items-start gap-3 font-sans w-full max-w-lg p-8">
//       {/* Main Toast Container */}
//       <div className="flex flex-col w-[400px]">
        
//         {/* Top Header Section (Aligned Right) */}
//         <div className="relative self-end bg-[#1e1e1e] px-4 py-2.5 rounded-t-[20px] flex items-center gap-2 z-10">
          
//           {/* Magic Inverted Corner */}
//           <div className="absolute -left-5 bottom-0 w-5 h-5 bg-transparent rounded-br-[20px] shadow-[10px_10px_0_10px_#1e1e1e]" />

//           {/* Warning Circle Icon */}
//           <div className="flex items-center justify-center w-5 h-5 rounded-full border border-yellow-600 bg-[#3f2e04]">
//             <svg 
//               width="12" 
//               height="12" 
//               viewBox="0 0 24 24" 
//               fill="none" 
//               stroke="#facc15" 
//               strokeWidth="3" 
//               strokeLinecap="round" 
//               strokeLinejoin="round"
//             >
//               <line x1="12" y1="8" x2="12" y2="12"></line>
//               <line x1="12" y1="16" x2="12.01" y2="16"></line>
//             </svg>
//           </div>

//           {/* Header Text */}
//           <span className="text-[#facc15] font-semibold text-sm tracking-wide">
//             Storage Almost Full
//           </span>
//         </div>

//         {/* Bottom Body Section (Full Width) */}
//         <div className="relative bg-[#1e1e1e] px-5 py-4 rounded-b-[20px] rounded-tl-[20px] text-[#9ca3af] text-[15px] leading-relaxed">
//           You've used 95% of your available storage. Please upgrade your plan to continue.
//         </div>
        
//       </div>
//     </div>
//   );
// };