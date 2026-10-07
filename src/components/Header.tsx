"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { SITE } from "@/lib/content";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];

const arrowIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>
);

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Close the mobile menu whenever the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  // Track scroll for the glass state and the red "video progress" bar along the bottom edge.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      headerRef.current?.style.setProperty("--x-progress", String(progress));
      setScrolled(window.scrollY > 8);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header ref={headerRef} className={`x-hd${scrolled ? " x-hd-scrolled" : ""}${open ? " x-hd-open" : ""}`}>
      <div className="x-hd-bar">
        <Link className="x-hd-logo" href="/" aria-label="YouTube Automation Lab home">
          <span className="x-hd-mark">
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5z" fill="#FFFFFF" /></svg>
          </span>
          <span className="x-hd-word">
            <span className="x-hd-name">YouTube Automation</span>
            <span className="x-hd-tag">LAB</span>
          </span>
        </Link>

        <nav id="main-nav" className="x-hd-nav" aria-label="Main">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              className={isActive(link.href) ? "x-hd-link x-active" : "x-hd-link"}
              href={link.href}
              style={{ "--i": i } as CSSProperties}
              {...(isActive(link.href) ? { "aria-current": "page" as const } : {})}
            >
              <span className="x-hd-num" aria-hidden="true">0{i + 1}</span>
              {link.label}
            </Link>
          ))}
          <a className="x-hd-cta x-hd-cta-menu" href={SITE.booking}>
            Book Strategy Call
            {arrowIcon}
          </a>
        </nav>

        <div className="x-hd-actions">
          <a className="x-hd-cta" href={SITE.booking}>
            <span className="x-hd-live" aria-hidden="true" />
            Book Strategy Call
            {arrowIcon}
          </a>
          <button
            className="x-hd-burger"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="main-nav"
            onClick={() => setOpen(!open)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
      <span className="x-hd-progress" aria-hidden="true" />
    </header>
  );
}
