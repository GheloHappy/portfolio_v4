"use client";

import { useEffect, useState } from "react";

const darkVars = {
  "--background": "#09090B",
  "--foreground": "#171717",
  "--surface": "#111113",
  "--border": "#27272A",
  "--text": "#FAFAFA",
  "--muted": "#A1A1AA",
  "--primary": "#8B5CF6",
  "--primary-hover": "#7C3AED",
  "--blue": "#3B82F6",
  "--success": "#22C55E",
} as const;

const lightVars = {
  "--background": "#FFFFFF",
  "--foreground": "#18181B",
  "--surface": "#F4F4F5",
  "--border": "#E4E4E7",
  "--text": "#09090B",
  "--muted": "#71717A",
  "--primary": "#8B5CF6",
  "--primary-hover": "#7C3AED",
  "--blue": "#3B82F6",
  "--success": "#22C55E",
} as const;

function applyTheme(vars: Record<string, string>) {
  const root = document.documentElement;
  for (const [key, value] of Object.entries(vars)) {
    root.style.setProperty(key, value);
  }
}

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(
    () =>
      typeof window !== "undefined" &&
      localStorage.getItem("theme") === "light",
  );

  useEffect(() => {
    applyTheme(isLight ? lightVars : darkVars);
  }, []);

  const toggle = () => {
    const next = !isLight;
    setIsLight(next);
    if (next) {
      applyTheme(lightVars);
      localStorage.setItem("theme", "light");
    } else {
      applyTheme(darkVars);
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <button
      onClick={toggle}
      className="rounded-lg p-2.5 text-muted transition-colors hover:bg-surface hover:text-text"
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
    >
      {isLight ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      )}
    </button>
  );
}
