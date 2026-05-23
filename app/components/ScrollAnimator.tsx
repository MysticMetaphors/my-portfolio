"use client";

import { useEffect } from "react";

const SELECTOR = ".in-view-up, .in-view-left, .in-view-right, .in-view-scale, .in-view-grow-x";

export default function ScrollAnimator() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(SELECTOR);
    if (!targets.length) return;

    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("in-view"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
