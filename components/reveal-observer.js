"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// One observer for the whole site: any element marked `data-reveal` animates in the first
// time it scrolls into view. Re-scans after each client-side navigation.
export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    const frame = requestAnimationFrame(() => {
      document.querySelectorAll("[data-reveal]:not([data-revealed])").forEach((el) => observer.observe(el));
    });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
