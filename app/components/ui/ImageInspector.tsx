"use client";

import { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LazyImage from "./LazyImage";

type ImageInspectorProps = {
  images: string[];
  initialIndex?: number;
  title?: string;
  url?: string;
  contribution?: string;
  onClose: () => void;
};

export default function ImageInspector({
  images,
  initialIndex = 0,
  title = "",
  contribution,
  url,
  onClose,
}: ImageInspectorProps) {
  const [current, setCurrent] = useState(initialIndex);
  const [mounted, setMounted] = useState(false);
  const [mobileInfoOpen, setMobileInfoOpen] = useState(false);

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

          {/* Mobile info toggle */}
          {contribution && (
            <button
              onClick={() => setMobileInfoOpen((v) => !v)}
              className="md:hidden absolute top-3 right-3 z-20 flex items-center gap-1.5 px-3 h-9 rounded-full
                         bg-white/10 hover:bg-white/20 border border-white/10 text-white text-xs font-medium
                         transition-all duration-200"
            >
              <Info size={14} />
              {mobileInfoOpen ? "Hide info" : "My contribution"}
            </button>
          )}

          {/* Mobile contribution panel (overlay) */}
          <AnimatePresence>
            {contribution && mobileInfoOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="md:hidden absolute inset-x-3 top-14 z-10 max-h-[60vh] overflow-y-auto
                           rounded-lg border border-white/10 bg-black/85 backdrop-blur-md p-4"
                onClick={(e) => e.stopPropagation()}
              >
                {title && (
                  <h3 className="font-jersey font-semibold tracking-wide uppercase text-xl text-white text-base font-bold mb-1">{title}</h3>
                )}
                <p className="text-white/70 text-[10px] uppercase tracking-widest mb-2">
                  My Contribution
                </p>
                <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                  {contribution}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Side panel — info + thumbnails */}
        {(contribution || images.length > 1) && (
          <div
            className="
              hidden md:flex flex-col gap-3 p-4 overflow-y-auto
              border-l border-white/10 w-[320px] shrink-0 bg-black/40
            "
            onClick={(e) => e.stopPropagation()}
          >
            {contribution && (
              <div className="shrink-0">
                {title && (
                  <h3 className="text-white font-jersey font-semibold tracking-wide uppercase text-2xl font-bold mb-2 leading-tight">{title}</h3>
                )}
                <p className="text-white/70 text-[10px] uppercase tracking-widest mb-2">
                  My Contribution
                </p>
                <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line mb-4">
                  {contribution}
                </p>
                {url && (
                  <a href={url} target="_blank" rel="noopener noreferrer" className="font-jersey font-semibold tracking-wide uppercase text-lg font-semibold px-3 my-3 cursor-pointer flex justify-center items-center py-1 gap-1 w-fit h-fit mt-auto bg-blue-primary/5 rounded-sm border border-blue-primary/20 text-blue-primary/60 hover:bg-blue-primary hover:text-black transition-all duration-300">
                    Live Preview
                  </a>
                )}
                {images.length > 1 && (
                  <div className="h-px w-full bg-white/10 mt-4" />
                )}
              </div>
            )}

            {images.length > 1 && (
              <div className="flex flex-col gap-2 shrink-0">
                <p className="text-white/40 text-[10px] uppercase tracking-widest px-1">
                  Screenshots
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`relative shrink-0 rounded-md overflow-hidden border-2 transition-all duration-200
                        aspect-video w-full
                        ${i === current
                          ? "border-blue-500 opacity-100"
                          : "border-transparent opacity-50 hover:opacity-80"
                        }`}
                    >
                      <LazyImage
                        src={imgSrc(img)}
                        alt={`Thumbnail ${i + 1}`}
                        fill
                        quality={40}
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Mobile thumbnail strip */}
        {images.length > 1 && (
          <div
            className="
              md:hidden flex flex-row gap-2 p-3 overflow-x-auto overflow-y-hidden
              border-t border-white/10 h-[110px] shrink-0
            "
            onClick={(e) => e.stopPropagation()}
          >
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`relative shrink-0 rounded-md overflow-hidden border-2 transition-all duration-200
                  aspect-video h-[72px]
                  ${i === current
                    ? "border-blue-500 opacity-100"
                    : "border-transparent opacity-50 hover:opacity-80"
                  }`}
              >
                <LazyImage
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
