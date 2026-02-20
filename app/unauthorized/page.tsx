'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import DefaultLayout from "../components/layouts/DefaultLayout";

export default function UnauthorizedPage() {
  return (
    <DefaultLayout>
      <div className="flex items-center justify-center min-h-screen bg-black p-4">
        <div className="max-w-xl w-full z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-900 border border-red-900/50 rounded-lg p-2"
          >
            <div className="flex flex-col gap-5 border border-gray-700 rounded-lg p-6 md:p-8 text-center">
              <div className="mb-4">
                <div className="text-red-500 text-5xl mb-4">✕</div>
                <h1 className="text-3xl font-bold text-white mb-2">Access Denied</h1>
                <p className="text-gray-400 text-sm">
                  Your account is authenticated, but you are not on the authorized guest list for this dashboard.
                </p>
              </div>

              <hr className="border-gray-800" />

              <Link
                href="/"
                className="mt-5 bg-gray-800 font-semibold text-white hover:bg-gray-700 transition-all py-3 px-6 rounded-md no-underline"
              >
                Return Home
              </Link>

              <p className="text-[10px] text-gray-600 uppercase tracking-widest mt-4">
                Security Protocol Error: USER_NOT_IN_ALLOWLIST
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </DefaultLayout>
  );
}