"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, ArrowUpRightFromSquare, ArrowUpRightSquare, Eye, Link2, Lock } from "lucide-react";
import { useState } from "react";
import ImageInspector from "./ImageInspector";
import LazyImage from "./LazyImage";
import Link from "next/link";

// ─── Types ──────────────────────────────────────────────────────────────────
type MediaItem = {
  src: string;
  type: "image" | "video";
  caption?: string;
};

type Collaborator = {
  name: string;
  avatar?: string;
  linkedin: string;
};

type ArvoCardProps = {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  images?: (string | MediaItem)[];
  icons?: string[];
  index?: number;
  onView?: boolean;
  featured?: boolean;
  collaborators?: Collaborator[];
  isPrivate?: boolean;
  isGray?: boolean;
  contribution?: string;
};

// ─── Featured Bento Grid ─────────────────────────────────────────────────────
function FeaturedBentoGrid({
  media,
  title,
  isGray,
  onClickMedia,
}: {
  media: MediaItem[];
  title: string;
  isGray?: boolean;
  onClickMedia: (index: number) => void;
}) {
  const displayLimit = 4;
  const displayImages = media.slice(0, displayLimit);
  const hiddenCount = media.length - displayLimit;

  const renderMedia = (item: MediaItem, index: number, className: string, isLast: boolean) => {
    const isVideo = item.type === "video";
    const src = item.src.startsWith("http") ? item.src : `/${item.src}`;
    const showOverlay = isLast && hiddenCount > 0;

    const isDrive = src.includes("drive.google.com");
    const isYoutube = src.includes("youtube.com") || src.includes("youtu.be");
    const isExternalVideo = isDrive || isYoutube;

    let mediaContent;

    if (isVideo) {
      if (isDrive) {
        const embedSrc = src.replace("/view", "/preview");
        mediaContent = (
          <iframe
            src={embedSrc}
            className={`absolute inset-0 w-full h-full object-contain p-2 pointer-events-none ${isGray ? "grayscale" : ""}`}
            title={title}
            loading="lazy"
            allowFullScreen
          />
        );
      } else if (isYoutube) {
        let embedSrc = src;
        if (src.includes("watch?v=")) embedSrc = src.replace("watch?v=", "embed/");
        else if (src.includes("youtu.be/")) embedSrc = src.replace("youtu.be/", "www.youtube.com/embed/");

        mediaContent = (
          <iframe
            src={`${embedSrc}?autoplay=1&mute=1&controls=0&loop=1&playlist=${embedSrc.split('/').pop()}`}
            className={`absolute inset-0 w-full h-full object-contain p-2 pointer-events-none ${isGray ? "grayscale" : ""}`}
            title={title}
            loading="lazy"
            allowFullScreen
          />
        );
      } else {
        mediaContent = (
          <video
            src={src}
            autoPlay
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02] ${isGray ? "grayscale group-hover:grayscale-0" : ""}`}
          />
        );
      }
    } else {
      mediaContent = (
        <LazyImage
          src={src}
          alt={item.caption || title}
          fill
          className={`object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02] ${isGray ? "grayscale group-hover:grayscale-0" : ""}`}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      );
    }

    return (
      <div
        key={index}
        onClick={() => onClickMedia(index)}
        className={`relative group overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 cursor-pointer ${className}`}
      >
        {!isExternalVideo && !isVideo && (
          <LazyImage src={src} alt="bg" fill className="object-cover opacity-20 blur-xl scale-110" />
        )}
        {!isExternalVideo && isVideo && (
          <video src={src} muted loop className="absolute inset-0 w-full h-full object-cover opacity-20 blur-xl scale-110" />
        )}
        {mediaContent}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/50 rounded-xl transition-colors duration-300 pointer-events-none" />
        {showOverlay && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity hover:bg-black/50">
            <div className="text-center">
              <span className="block text-4xl font-bold text-white mb-1">+{hiddenCount}</span>
              <span className="text-sm font-medium text-gray-200 uppercase tracking-wider">View All</span>
            </div>
          </div>
        )}
      </div>
    );
  };

  // 1 image: Reverted to full width aspect-video
  if (displayImages.length === 1) {
    return (
      <div className="w-full aspect-video">
        {renderMedia(displayImages[0], 0, "w-full h-full", false)}
      </div>
    );
  }

  return (
    <div className={`grid gap-4 w-full ${displayImages.length === 2 ? 'grid-cols-1 md:grid-cols-2 h-[600px] md:h-[400px]' :
      displayImages.length === 3 ? 'grid-cols-1 md:grid-cols-3 md:grid-rows-2 h-[900px] md:h-[500px]' :
        'grid-cols-1 md:grid-cols-2 md:grid-rows-2 h-[800px] md:h-[600px]'
      }`}>
      {displayImages.map((img, i) => {
        let className = "w-full h-full";
        const isLast = i === displayImages.length - 1;

        if (displayImages.length === 3) {
          if (i === 0) className = "md:col-span-2 md:row-span-2";
          else className = "md:col-span-1 md:row-span-1";
        }

        return renderMedia(img, i, className, isLast);
      })}
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function MyCard({
  title = "",
  description = "",
  url,
  image = "",
  images = [],
  icons = [],
  index = 0,
  onView,
  featured = false,
  collaborators = [],
  isPrivate = false,
  isGray = false,
  contribution,
}: ArvoCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [inspectIndex, setInspectIndex] = useState<number | null>(null);

  const animationProps = onView
    ? { whileInView: { opacity: 1, y: 0 }, viewport: { once: true } }
    : { animate: { opacity: 1, y: 0 } };

  // Normalize media for internal logic
  const allMedia: MediaItem[] = images.length > 0
    ? images.map(item => typeof item === 'string' ? { src: item, type: 'image' } : item)
    : image ? [{ src: image, type: 'image' }] : [];

  const isTruncated = description.length > 100;
  const displayedDescription = expanded
    ? (description)
    : (isTruncated ? description.slice(0, 100).trimEnd() + "…" : description);

  // ── Featured Card View ─────────────────────────────────────────────────────
  if (images.length != 0) {
    return (
      <>
        {inspectIndex !== null && (
          <ImageInspector
            images={allMedia.map(m => m.src)}
            initialIndex={inspectIndex}
            title={title}
            contribution={contribution}
            onClose={() => setInspectIndex(null)}
          />
        )}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          {...animationProps}
          transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
          className="lg:col-span-3 md:col-span-2 relative "
        >
          <div className="py-7">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
              <div className="flex-1">
               {featured && (
                 <span className="bg-white/5 w-fit rounded-full border border-white/10 py-1 px-3 flex font-semibold items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-blue-primary/80 shadow-[0_0_5px_#0095ff]" />
                  Featured Project
                </span>
               )}
                <h3 className="text-white font-jersey font-semibold tracking-wide uppercase text-4xl tracking-tight mb-4">{title}</h3>
                <p className="text-gray-400 text-md leading-relaxed">
                  {displayedDescription}
                  {isTruncated  && (
                    <button onClick={() => setExpanded(!expanded)} className="ml-1 text-blue-400 font-medium">
                      {expanded ? "show less" : "see all"}
                    </button>
                  )}
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
              {isPrivate ? (
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-700 bg-gray-900/60 text-gray-300 text-xs font-semibold">
                  <Lock size={12} /> Private Application
                </div>
              ) : (
                <>
                  <Link href={`/contact?demo=${title}`} className="font-jersey font-semibold tracking-wide uppercase text-xl group px-5 py-2.5 bg-gray-900/90 rounded-md border border-blue-primary text-blue-primary flex items-center gap-2 font-medium hover:bg-blue-primary hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,149,255,0.1)] hover:shadow-[0_0_20px_rgba(0,149,255,0.3)]">
                    <span>Contact for Demo</span>
                  </Link>
                  {url && (
                    <a href={url} target="_blank" className="font-jersey font-semibold tracking-wide uppercase text-xl px-3 py-2.5 flex items-center gap-1.5 border border-blue-900/50 bg-blue-950/20 text-blue-400 text-sm rounded-lg hover:bg-blue-900/30">
                      <ArrowUpRightFromSquare size={14} /> Live
                    </a>
                  )}
                </>
              )}
              <div className="flex gap-4">
                {icons.map((icon, i) => (
                  <div key={i} className="p-2 border border-gray-700 rounded-md bg-gray-900/90">
                    <Image width={24} height={24} alt={icon} src={`/techstack/${icon}-original.svg`} className="w-6 h-6 object-contain" />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between py-4">
              {collaborators.length > 0 && (
                <div className="flex items-center gap-3">
                  <span className="text-gray-400 text-md">Collaborators:</span>
                  <div className="flex space-x-2">
                    {collaborators.map((c, i) => (
                      <a
                        key={i}
                        href={c.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 group/collab"
                      >
                        <div className="w-7 h-7 rounded-full border-2 border-black bg-gray-800 overflow-hidden relative transition-transform group-hover/collab:scale-110">
                          {c.avatar ? (
                            <Image
                              src={`/${c.avatar}`}
                              alt={c.name}
                              fill
                              loading="lazy"
                              quality={50}
                              className="object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-[11px] font-bold text-blue-400">
                              {c.name.charAt(0)}
                            </div>
                          )}
                        </div>

                        <span className="text-gray-400 text-xs flex items-center gap-1.5 group-hover/collab:text-blue-400 transition-all duration-300 hidden md:flex">
                          {c.name}
                          <Link2
                            size={14}
                            className="opacity-0 -translate-x-1 group-hover/collab:opacity-100 group-hover/collab:translate-x-0 transition-all duration-300"
                          />
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {allMedia.length > 0 && (
              <FeaturedBentoGrid
                media={allMedia}
                title={title}
                isGray={isGray}
                onClickMedia={(i) => setInspectIndex(i)}
              />
            )}
          </div>
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
        </motion.div>
      </>
    );
  }

  // ── Normal Card View (Unchanged Design) ────────────────────────────────────
  return (
    <>
      {inspectIndex !== null && allMedia.length > 0 && (
        <ImageInspector
          images={allMedia.map(m => m.src)}
          initialIndex={inspectIndex}
          title={title}
          url={url}
          contribution={contribution}
          onClose={() => setInspectIndex(null)}
        />
      )}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        {...animationProps}
        transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="group hover:border-blue-900/60 h-fit relative border border-gray-900 rounded-md
                   bg-gradient-to-t from-blue-950/30 to-black overflow-hidden
                   transform transition-all duration-500 ease-out hover:-translate-y-2
                   hover:shadow-lg hover:shadow-blue-950/40"
      >
        {allMedia.length > 0 && (
          <div className="relative h-48 w-full overflow-hidden cursor-zoom-in" onClick={() => setInspectIndex(0)}>
            <Image
              src={`/${allMedia[0].src}`}
              alt={title}
              fill
              quality={60}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}

        <div className="p-8 py-4">
          <h3 className="text-white lg:text-3xl text-2xl font-semibold tracking-tight mb-2 font-jersey font-semibold tracking-wide uppercase">{title}</h3>
          <p className="text-gray-400 lg:text-md md:text-md mb-2">{description}</p>
          <div className="flex justify-between flex-row gap-4 mt-4">
            <div className="flex flex-wrap gap-4">
              {icons ?
                icons.map((icon, i) => (
                  <Image key={i} width={10} height={10} quality={75} alt={icon} src={`/techstack/${icon}-original.svg`} className="w-6 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-300" />
                ))
                : ''}

            </div>
            {url ?
              <div onClick={() => setInspectIndex(0)} className="font-jersey font-semibold tracking-wide uppercase text-xl px-3 cursor-pointer flex justify-center items-center py-1 gap-1 w-fit h-fit mt-auto bg-blue-primary/5 rounded-sm border border-blue-primary/20 text-blue-primary/60 hover:bg-blue-primary hover:text-black transition-all duration-300">
                View <ArrowUpRightFromSquare size={18}/>
              </div>
              : ''}
          </div>
        </div>
      </motion.div>
    </>
  );
}