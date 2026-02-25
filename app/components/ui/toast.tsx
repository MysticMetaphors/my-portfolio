"use client";

import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

type ToastProps = {
  theme?: string,
  text?: string
}

export default function Toast({ theme, text }: ToastProps) {
  const isError = theme === "error";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.1 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="relative overflow-hidden"
    >
      <div 
        className={`
          flex items-center min-w-[200px] max-w-md p-2 rounded-md border shadow-2xl backdrop-blur-md
          ${isError 
            ? "bg-white/5 border-white/10 text-red-100" 
            : "bg-emerald-950/20 border-emerald-500/50 text-emerald-200"}
        `}
      >
        {/* Status Icon with subtle glow */}
        <div className="shrink-0 mr-4">
          {isError ? (
            <XCircle className="w-6 h-6 text-red-400 drop-shadow-[0_0_8px_rgba(248,113,113,0.5)]" />
          ) : (
            <CheckCircle className="w-6 h-6 text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
          )}
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <p className="text-sm font-medium tracking-wide">
            {text || (isError ? "Something went wrong" : "Action Successful")}
          </p>
        </div>

        {/* Animated Progress Bar (Visual Timer) */}
        <motion.div
          initial={{ width: "100%" }}
          animate={{ width: "0%" }}
          transition={{ duration: 4, ease: "linear" }}
          className={`absolute bottom-0 left-0 h-[3px] ${isError ? "bg-red-500" : "bg-emerald-500"}`}
        />
      </div>
    </motion.div>
  );
};