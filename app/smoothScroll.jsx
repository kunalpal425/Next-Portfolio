"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      direction: "vertical",
      gestureDirection: "vertical",
      normalizeWheel: true,
      smoothTouch: false,
      wheelMultiplier: 1,
      touchMultiplier: 1,
    });

    const anchorLinks = Array.from(document.querySelectorAll('a[href^="#"]'));

    const handleAnchorClick = (event) => {
      const anchor = event.currentTarget;
      const href = anchor.getAttribute("href");
      if (!href?.startsWith("#")) return;

      const targetId = href.slice(1);
      const targetElement = document.getElementById(targetId);
      if (!targetElement) return;

      event.preventDefault();
      lenis.scrollTo(targetElement, {
        offset: 0,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    };

    anchorLinks.forEach((link) => {
      link.addEventListener("click", handleAnchorClick);
    });

    let frameId;
    const tick = (time) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);

    return () => {
      anchorLinks.forEach((link) => {
        link.removeEventListener("click", handleAnchorClick);
      });
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}