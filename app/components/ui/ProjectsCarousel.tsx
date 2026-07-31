"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

// ─── Types ──────────────────────────────────────────────────────────────────
type MediaItem = { src: string; type?: "image" | "video"; caption?: string };

type Project = {
  title: string;
  description: string;
  url?: string;
  image?: string;
  images?: (string | MediaItem)[];
  icons?: string[];
  type?: string;
};

const AUTOPLAY_DELAY = 5000; // change card every 5s
const SIDE_PEEK = 180; // px of neighbouring cards peeking on desktop
const GAP = 16;
const ACCENT = "#0095ff"; // site blue-primary

function resolveImage(p: Project): string {
  const first = p.images && p.images.length > 0 ? p.images[0] : p.image;
  const src = typeof first === "string" ? first : first?.src;
  if (!src) return "";
  return src.startsWith("http") ? src : `/${src}`;
}

function ChevronLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── Reusable action buttons ─────────────────────────────────────────────────
function CardButtons({ project }: { project: Project }) {
  return (
    <div className="flex gap-3 shrink-0">
      {project.url ? (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-jersey text-sm tracking-[0.2em] uppercase bg-blue-primary hover:bg-blue-400 text-black px-6 py-2.5 rounded-sm transition-all duration-300"
        >
          View
        </a>
      ) : (
        <Link
          href={`/contact?demo=${encodeURIComponent(project.title)}`}
          className="font-jersey text-sm tracking-[0.2em] uppercase bg-blue-primary hover:bg-blue-400 text-black px-6 py-2.5 rounded-sm transition-all duration-300"
        >
          Contact
        </Link>
      )}
      <Link
        href="/projects"
        className="font-jersey text-sm tracking-[0.2em] uppercase text-white border border-white/30 hover:border-blue-primary hover:text-blue-primary px-6 py-2.5 rounded-sm transition-all duration-300 backdrop-blur-sm bg-white/5"
      >
        LEARN MORE →
      </Link>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function ProjectsCarousel({ projects }: { projects: Project[] }) {
  const [current, setCurrent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const total = projects.length;

  const goTo = useCallback(
    (index: number) => {
      setCurrent((index + total) % total);
    },
    [total]
  );

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (total <= 1) return;
    timerRef.current = setTimeout(() => {
      setCurrent((c) => (c + 1) % total);
    }, AUTOPLAY_DELAY);
  }, [total]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, resetTimer]);

  const onDragStart = (clientX: number) => {
    setIsDragging(true);
    dragStartX.current = clientX;
  };

  const onDragEnd = (clientX: number) => {
    if (!isDragging) return;
    setIsDragging(false);
    const delta = dragStartX.current - clientX;
    if (Math.abs(delta) > 40) {
      goTo(delta > 0 ? current + 1 : current - 1);
    }
  };

  const project = projects[current];

  const MetaTags = ({ p }: { p: Project }) => (
    <div className="flex items-center gap-2 mb-2">
      {p.type && (
        <span className="text-xs tracking-widest uppercase text-slate-400">{p.type}</span>
      )}
      {p.type && (
        <span className="w-1 h-1 rounded-full bg-slate-600" />
      )}
      <span className="text-xs tracking-widest uppercase text-slate-400">
        {p.url ? "Live Preview" : "Case Study"}
      </span>
    </div>
  );

  return (
    <div className="relative">
      {/* ── MOBILE: single card + arrow buttons ── */}
      <div className="block md:hidden px-4">
        <div className="relative">
          <div
            className="relative rounded-xl overflow-hidden w-full"
            style={{ height: "480px" }}
            onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
            onTouchEnd={(e) => onDragEnd(e.changedTouches[0].clientX)}
          >
            <Image
              src={resolveImage(project)}
              alt={project.title}
              fill
              className="object-cover"
              sizes="100vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div
              className="absolute inset-x-0 bottom-0 h-1/3 opacity-50"
              style={{ background: `linear-gradient(to top, ${ACCENT}66, transparent)` }}
            />

            <div className="relative z-10 h-full flex flex-col p-6">
              <div className="flex-1 flex items-center justify-center">
                <h3 className="font-jersey text-5xl text-white leading-none text-center drop-shadow-2xl uppercase tracking-wide">
                  {project.title}
                </h3>
              </div>
              <div>
                <MetaTags p={project} />
                <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3">{project.description}</p>
                <CardButtons project={project} />
              </div>
            </div>

            <div
              className="absolute bottom-0 left-0 right-0 h-px"
              style={{ background: `linear-gradient(90deg, transparent, ${ACCENT}, transparent)` }}
            />
          </div>

          <button
            onClick={() => goTo(current - 1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-10 h-10 rounded-full bg-black border border-white/20 hover:border-blue-primary text-white hover:text-blue-primary flex items-center justify-center transition-all duration-300"
            aria-label="Previous project"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => goTo(current + 1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 w-10 h-10 rounded-full bg-black border border-white/20 hover:border-blue-primary text-white hover:text-blue-primary flex items-center justify-center transition-all duration-300"
            aria-label="Next project"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* ── DESKTOP: peek carousel ── */}
      <div
        className="relative overflow-hidden hidden md:block"
        style={{ padding: `0 ${SIDE_PEEK}px` }}
        onMouseDown={(e) => onDragStart(e.clientX)}
        onMouseUp={(e) => onDragEnd(e.clientX)}
        onMouseLeave={(e) => isDragging && onDragEnd(e.clientX)}
        onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
        onTouchEnd={(e) => onDragEnd(e.changedTouches[0].clientX)}
      >
        <div
          ref={trackRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            gap: `${GAP}px`,
            transform: `translateX(calc(-${current * 100}% - ${current * GAP}px))`,
          }}
        >
          {projects.map((p, i) => {
            const isActive = i === current;
            return (
              <div
                key={i}
                onClick={() => !isActive && goTo(i)}
                className={`relative rounded-xl overflow-hidden shrink-0 transition-all duration-500 ${isActive ? "cursor-default" : "cursor-pointer"}`}
                style={{
                  width: "100%",
                  height: "520px",
                  opacity: isActive ? 1 : 0.5,
                  scale: isActive ? "1" : "0.96",
                }}
              >
                <Image
                  src={resolveImage(p)}
                  alt={p.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div
                  className="absolute inset-x-0 bottom-0 h-1/3 opacity-50"
                  style={{ background: `linear-gradient(to top, ${ACCENT}66, transparent)` }}
                />

                <div className="relative z-10 h-full flex flex-col p-8 md:p-10">
                  <div className="flex-1 flex items-center justify-center">
                    <h3
                      className="font-jersey text-6xl md:text-8xl text-white leading-none text-center drop-shadow-2xl transition-opacity duration-300 uppercase tracking-wide"
                      style={{ opacity: isActive ? 1 : 0 }}
                    >
                      {p.title}
                    </h3>
                  </div>
                  <div
                    className="flex items-end justify-between gap-6 transition-opacity duration-300"
                    style={{ opacity: isActive ? 1 : 0 }}
                  >
                    <div>
                      <MetaTags p={p} />
                      <p className="text-slate-300 text-sm leading-relaxed max-w-sm line-clamp-3">{p.description}</p>
                    </div>
                    <CardButtons project={p} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-black-primary to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-black-primary to-transparent pointer-events-none z-10" />
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full h-2 bg-blue-primary transition-all duration-300 origin-left ${i === current ? "w-6 opacity-100" : "w-2 opacity-30"}`}
          />
        ))}
      </div>
    </div>
  );
}
