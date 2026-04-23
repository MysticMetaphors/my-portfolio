"use client";

import { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type ImageInspectorProps = {
  images: string[];
  initialIndex?: number;
  title?: string;
  onClose: () => void;
};

export default function ImageInspector({
  images,
  initialIndex = 0,
  title = "",
  onClose,
}: ImageInspectorProps) {
  const [current, setCurrent] = useState(initialIndex);
  const [mounted, setMounted] = useState(false);

  const prev = useCallback(() =>
    setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);

  const next = useCallback(() =>
    setCurrent((c) => (c + 1) % images.length), [images.length]);

  useEffect(() => {
    setMounted(true);
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, prev, next]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const imgSrc = (src: string) => src.startsWith("http") ? src : `/${src}`;

  const content = (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[9999] flex flex-col md:flex-row items-stretch bg-black/95 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Main image viewer */}
        <div
          className="relative flex-1 flex items-center justify-center min-h-0"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Prev button */}
          {images.length > 1 && (
            <button
              onClick={prev}
              className="absolute left-3 md:left-4 z-10 w-9 h-9 md:w-10 md:h-10 rounded-full
                         bg-white/10 hover:bg-white/20 flex items-center justify-center
                         border border-white/10 transition-all duration-200"
            >
              <ChevronLeft size={18} className="text-white" />
            </button>
          )}

          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full h-full mx-12 md:mx-16"
            style={{ maxHeight: "calc(100vh - 140px)" }}
          >
            <Image
              src={imgSrc(images[current])}
              alt={`${title} - image ${current + 1}`}
              fill
              quality={90}
              className="object-contain"
            />
          </motion.div>

          {/* Next button */}
          {images.length > 1 && (
            <button
              onClick={next}
              className="absolute right-3 md:right-4 z-10 w-9 h-9 md:w-10 md:h-10 rounded-full
                         bg-white/10 hover:bg-white/20 flex items-center justify-center
                         border border-white/10 transition-all duration-200"
            >
              <ChevronRight size={18} className="text-white" />
            </button>
          )}

          {/* Counter */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full
                            bg-white/10 border border-white/10 text-white/60 text-xs">
              {current + 1} / {images.length}
            </div>
          )}
        </div>

        {/* Thumbnail strip — horizontal on mobile, vertical on desktop */}
        {images.length > 1 && (
          <div
            className="
              flex flex-row md:flex-col gap-2 p-3 overflow-x-auto overflow-y-hidden md:overflow-x-hidden
              md:overflow-y-auto border-t md:border-t-0 md:border-l border-white/10
              h-[110px] md:h-auto md:w-[180px] shrink-0
            "
            onClick={(e) => e.stopPropagation()}
          >
            <p className="hidden md:block text-white/40 text-[10px] uppercase tracking-widest mb-1 px-1 shrink-0">
              Screenshots
            </p>
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`relative shrink-0 rounded-md overflow-hidden border-2 transition-all duration-200
                  aspect-video h-[72px] md:h-auto md:w-full
                  ${i === current
                    ? "border-blue-500 opacity-100"
                    : "border-transparent opacity-50 hover:opacity-80"
                  }`}
              >
                <Image
                  src={imgSrc(img)}
                  alt={`Thumbnail ${i + 1}`}
                  fill
                  quality={40}
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 left-3 md:top-4 md:left-4 z-20 w-9 h-9 rounded-full
                     bg-white/10 hover:bg-white/20 flex items-center justify-center
                     border border-white/10 transition-all duration-200"
        >
          <X size={16} className="text-white" />
        </button>
      </motion.div>
    </AnimatePresence>
  );

  if (!mounted) return null;
  return createPortal(content, document.body);
}