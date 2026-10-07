"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Fades section content up as it scrolls into view. Classes are added from JS only,
// so content stays visible without JS, and blocks already on screen are left alone (no flash).
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.classList.add("x-in");
          observer.unobserve(el);
          // Hand the element back to its own styles (hover transitions etc.) once revealed.
          const done = (e: TransitionEvent) => {
            if (e.target !== el) return;
            el.removeEventListener("transitionend", done);
            el.classList.remove("x-reveal", "x-in");
            el.style.transitionDelay = "";
          };
          el.addEventListener("transitionend", done);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    const containers = document.querySelectorAll(".c1 > section:not(:first-of-type) > div");
    containers.forEach((container) => {
      Array.from(container.children).forEach((el, i) => {
        if (!(el instanceof HTMLElement) || el.getBoundingClientRect().top < window.innerHeight) return;
        el.classList.add("x-reveal");
        el.style.transitionDelay = `${Math.min(i, 4) * 90}ms`;
        observer.observe(el);
      });
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
