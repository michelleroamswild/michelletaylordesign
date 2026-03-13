"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "@phosphor-icons/react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  if (!mounted) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full px-4 py-2.5 shadow-lg backdrop-blur-md"
      style={{
        backgroundColor: dark ? "rgba(30, 30, 30, 0.9)" : "rgba(255, 255, 255, 0.9)",
        border: dark ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.08)",
      }}
    >
      <span
        className="text-xs font-semibold uppercase tracking-wider select-none"
        style={{ color: dark ? "#aaaaaa" : "#888888" }}
      >
        {dark ? "Dark" : "Light"}
      </span>
      <button
        onClick={toggle}
        aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
        className="relative w-14 h-8 rounded-full cursor-pointer transition-colors duration-300"
        style={{
          backgroundColor: dark ? "hsl(152, 56%, 37%)" : "#d1d5db",
        }}
      >
        <span
          className="absolute top-1 left-1 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 shadow-sm"
          style={{
            backgroundColor: "#ffffff",
            transform: dark ? "translateX(24px)" : "translateX(0)",
          }}
        >
          {dark ? (
            <Moon size={14} weight="bold" style={{ color: "hsl(152, 56%, 37%)" }} />
          ) : (
            <Sun size={14} weight="bold" style={{ color: "#f59e0b" }} />
          )}
        </span>
      </button>
    </div>
  );
}
