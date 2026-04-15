"use client";

import { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom"; // 1. Import createPortal
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
  const [mounted, setMounted] = useState(false); // 2. Track mounting for SSR safety

  const prev = useCallback(() =>
    setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);

  const next = useCallback(() =>
    setCurrent((c) => (c + 1) % images.length), [images.length]);

  useEffect(() => {
    setMounted(true); // 3. Set mounted to true on client
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, prev, next]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  // 4. Wrap your JSX in a variable
  const content = (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[9999] flex items-stretch bg-black/95 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Left: Image viewer */}
        <div
          className="relative flex-1 flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          {images.length > 1 && (
            <button
              onClick={prev}
              className="absolute left-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20
                         flex items-center justify-center border border-white/10 transition-all duration-200"
            >
              <ChevronLeft size={20} className="text-white" />
            </button>
          )}

          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full h-full max-w-4xl max-h-[85vh] mx-16"
          >
            <Image
              src={images[current].startsWith('http') ? images[current] : `/${images[current]}`}
              alt={`${title} - image ${current + 1}`}
              fill
              quality={90}
              className="object-contain"
            />
          </motion.div>

          {images.length > 1 && (
            <button
              onClick={next}
              className="absolute right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20
                         flex items-center justify-center border border-white/10 transition-all duration-200"
            >
              <ChevronRight size={20} className="text-white" />
            </button>
          )}

          {images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full
                            bg-white/10 border border-white/10 text-white/60 text-xs">
              {current + 1} / {images.length}
            </div>
          )}
        </div>

        {/* Right: Thumbnail strip */}
        {images.length > 1 && (
          <div
            className="w-[200px] border-l border-white/10 flex flex-col gap-2 p-3 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1 px-1">
              Screenshots
            </p>
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`relative aspect-video w-full rounded-md overflow-hidden border-2 transition-all duration-200
                  ${i === current
                    ? "border-blue-500 opacity-100"
                    : "border-transparent opacity-50 hover:opacity-80"
                  }`}
              >
                <Image
                  src={img.startsWith('http') ? img : `/${img}`}
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
          className="absolute top-4 left-4 z-20 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20
                     flex items-center justify-center border border-white/10 transition-all duration-200"
        >
          <X size={16} className="text-white" />
        </button>
      </motion.div>
    </AnimatePresence>
  );

  // 5. Use createPortal to teleport the component to document.body
  if (!mounted) return null;
  return createPortal(content, document.body);
}