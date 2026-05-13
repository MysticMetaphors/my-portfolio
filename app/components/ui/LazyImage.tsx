"use client";

import Image, { ImageProps } from "next/image";
import { useEffect, useRef, useState } from "react";

type LazyImageProps = Omit<ImageProps, "onLoad"> & {
  rootMargin?: string;
  skeletonClassName?: string;
};

export default function LazyImage({
  rootMargin = "300px",
  skeletonClassName = "",
  className = "",
  ...imageProps
}: LazyImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || inView) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [inView, rootMargin]);

  return (
    <div ref={ref} className="absolute inset-0">
      {!loaded && (
        <div
          className={`absolute inset-0 animate-pulse bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 ${skeletonClassName}`}
        />
      )}
      {inView && (
        <Image
          {...imageProps}
          className={`${className} transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setLoaded(true)}
        />
      )}
    </div>
  );
}
