"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reduceMotion = useReducedMotion();

  const currentWord = words[index];
  const letters = useMemo(() => currentWord.split(""), [currentWord]);

  useEffect(() => {
    if (isAnimating) return;
    timeoutRef.current = setTimeout(() => {
      setIndex((i) => (i + 1) % words.length);
      setIsAnimating(true);
    }, duration);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isAnimating, duration, words.length]);

  return (
    <AnimatePresence
      initial={false}
      onExitComplete={() => setIsAnimating(false)}
    >
      <motion.span
        key={currentWord}
        initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{
          opacity: 0,
          y: -40,
          filter: "blur(8px)",
          position: "absolute",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={cn(
          "z-10 relative text-left px-2 inline-block whitespace-nowrap",
          className
        )}
      >
        {reduceMotion
          ? currentWord
          : letters.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1 + i * 0.04,
                  duration: 0.2,
                  ease: "easeOut",
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
      </motion.span>
    </AnimatePresence>
  );
};
