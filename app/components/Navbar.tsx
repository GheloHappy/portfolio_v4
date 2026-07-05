"use client";

import { useCallback, useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import profile from "../../data/profile";

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#projects", label: "Projects" },
  { href: "/#tech-stack", label: "Stack" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  /* ── Track which section is in view ── */
  useEffect(() => {
    const ids = ["home", "projects", "tech-stack", "about", "contact"];
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* ── Smooth-scroll to section ── */
  const NAVBAR_HEIGHT = 80;

  const smoothScrollTo = useCallback((targetY: number) => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    const duration = 800;
    const startTime = performance.now();

    function easeInOutCubic(time: number) {
      return time < 0.5
        ? 4 * time * time * time
        : 1 - Math.pow(-2 * time + 2, 3) / 2;
    }

    function step(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);
      window.scrollTo(0, startY + distance * eased);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }, []);

  const scrollTo = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (!href.startsWith("/#")) return;

      e.preventDefault();
      const id = href.replace("/#", "");
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        const targetY = window.scrollY + rect.top - NAVBAR_HEIGHT;
        smoothScrollTo(targetY);
        setActiveSection(id);
      } else {
        // Element not on this page — navigate to home
        window.location.href = href;
      }
      closeMobile();
    },
    [smoothScrollTo],
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center px-2">
        {/* Left: Logo */}
        <div className="flex flex-1 justify-start">
          <a
            href="/#home"
            onClick={(e) => scrollTo(e, "/#home")}
            className="flex items-center gap-2 text-xl font-bold tracking-tight text-text transition-colors hover:text-primary sm:text-2xl"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-primary text-xl font-bold text-primary sm:h-12 sm:w-12 sm:text-2xl">
              G
            </span>
            <span className="hidden sm:inline">Ghelonico Maligaya</span>
          </a>
        </div>

        {/* Center: Desktop Navigation */}
        <ul className="hidden items-center gap-2 sm:flex">
          {navLinks.map(({ href, label }) => {
            const id = href.replace("/#", "");
            const isActive = activeSection === id;

            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => scrollTo(e, href)}
                  className={`rounded-lg px-4 py-2.5 font-mono text-base font-medium tracking-tight transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-muted hover:bg-surface hover:text-text"
                  }`}
                >
                  <span className="relative">
                    {label}
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-primary" />
                    )}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right: Actions */}
        <div className="flex flex-1 items-center justify-end gap-3">
          {/* Desktop-only separator + actions */}
          <div className="hidden items-center gap-3 sm:flex">
            <span className="h-6 w-px bg-border" />
            <ThemeToggle />
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Resume
            </a>
          </div>

          {/* Mobile actions */}
          <div className="flex items-center gap-2 sm:hidden">
            <ThemeToggle />
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3.5 w-3.5"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Resume
            </a>
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="flex flex-col items-center justify-center gap-1 rounded-lg p-2.5 text-muted transition-colors hover:bg-surface hover:text-text"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <span
                className={`h-0.5 w-6 rounded bg-current transition-all ${
                  mobileOpen ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-6 rounded bg-current transition-all ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-6 rounded bg-current transition-all ${
                  mobileOpen ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="border-t border-border bg-background sm:hidden">
          <ul className="flex flex-col gap-1 px-6 pb-6 pt-3">
            {navLinks.map(({ href, label }) => {
              const id = href.replace("/#", "");
              const isActive = activeSection === id;

              return (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => scrollTo(e, href)}
                    className={`block rounded-lg px-4 py-3 font-mono text-base font-medium tracking-tight transition-colors ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-muted hover:bg-surface hover:text-text"
                    }`}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
