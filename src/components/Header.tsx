"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
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

const calendarIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M3 9h18" /><path d="M8 2v4" /><path d="M16 2v4" /></svg>
);

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  // Close the mobile menu whenever the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  return (
    <header className="c2">
      <div className="c3">
        <Link className="c4" href="/" aria-label="YouTube Automation Lab home">
          <span className="c5">
            <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5z" fill="#FFFFFF" /></svg>
          </span>
          <span className="c6">
            <span className="c7">YouTube Automation</span>
            <span className="c8">LAB</span>
          </span>
        </Link>
        <button
          className="x-burger"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
        <nav id="main-nav" className={open ? "c9 x-open" : "c9"} aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              className={pathname === link.href ? "c217" : "c10"}
              href={link.href}
              {...(pathname === link.href ? { "aria-current": "page" as const } : {})}
            >
              {link.label}
            </Link>
          ))}
          <a className="c11 x-menu-cta" href={SITE.booking}>
            Book Strategy Call
            {calendarIcon}
          </a>
        </nav>
        <a className="c11" href={SITE.booking}>
          Book Strategy Call
          {calendarIcon}
        </a>
      </div>
    </header>
  );
}
