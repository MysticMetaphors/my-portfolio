'use client'

import { motion } from "framer-motion";
import { WavyBackground } from "../components/ui/wavy-background";
import DefaultLayout from "../components/layouts/DefaultLayout";

export default function LoginPage() {
  // Animation helper from your snippet
  const animationY = {
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  };

  return (
    <DefaultLayout>
      <div className="min-h-screen">
        <WavyBackground
          backgroundFill="#0a0a0af1"
          waveWidth={1}
          blur={0}
          waveOpacity={0}
          containerClassName="w-full flex items-center justify-center h-screen"
        >
          <div className="max-w-xl w-full z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              {...animationY}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-gray-900 border border-gray-700 rounded-lg p-2"
            >
              <div className="flex flex-col gap-5 border border-gray-700 rounded-lg p-6 md:p-8 text-center">
                <div className="mb-4">
                  <h1 className="text-3xl font-bold text-white mb-2">Admin Access</h1>
                  <p className="text-gray-400 text-sm">
                    This area is restricted. Please sign in to access my tools and components.
                  </p>
                </div>

                <hr className="border-gray-800" />

                {/* Auth0 Login Link 
                In the new SDK, /auth/login is the default endpoint.
            */}
                <a
                  href="/auth/login"
                  className="mt-5 bg-blue-400/70 font-semibold text-center hover:shadow-[0_0_40px_#0095ff] transition-all duration-300 shadow-[0_0_5px_#0095ff] hover:bg-blue-600 text-black py-4 px-6 rounded-md no-underline"
                >
                  Secure Sign In
                </a>

                <p className="text-[10px] text-gray-600 uppercase tracking-widest mt-4">
                  Protected by Auth0 Stateless Authentication
                </p>
              </div>
            </motion.div>
          </div>
        </WavyBackground>
      </div>
    </DefaultLayout>
  );
}