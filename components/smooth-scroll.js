"use client";

import { useEffect } from "react";
import Lenis from "lenis";

// Inertial smooth scrolling for wheel and trackpad input. Touch devices keep native scrolling,
// and visitors who prefer reduced motion get the browser default.
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.11,
      wheelMultiplier: 0.95,
      anchors: { offset: -96 },
      stopInertiaOnNavigate: true,
      // Let scrollable regions such as the mobile menu scroll on their own.
      prevent: (node) => node.closest?.("[data-lenis-prevent]") != null,
    });
    window.__lenis = lenis;

    return () => {
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return null;
}
