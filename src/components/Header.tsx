"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LinkedinLogo, List, X } from "@phosphor-icons/react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/#work", label: "Work", isActive: pathname === "/" },
    { href: "/about", label: "About", isActive: pathname === "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md">
      <div className="container-site flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/logos/LogoMark.png"
            alt="Michelle Taylor"
            width={9}
            height={9}
          />
          <span className="text-sm font-extrabold uppercase tracking-[0.15em] text-charcoal">
            Michelle Taylor
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-wider transition-colors"
              style={link.isActive ? {
                color: "var(--color-purple)",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                textDecorationThickness: "2px",
              } : {
                color: "var(--color-charcoal)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://www.linkedin.com/in/michelletaylor/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-charcoal hover:text-muted transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinLogo size={18} weight="bold" />
          </a>
          <a
            href="/michelletaylorresume2026.pdf"
            target="_blank"
            className="btn-primary transition-all hover:opacity-85 hover:-translate-y-0.5"
            style={{ backgroundColor: "var(--color-purple)" }}
          >
            Download Resum&eacute;
          </a>
        </nav>

        <button
          className="md:hidden p-2 text-charcoal"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <List size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block text-xs font-semibold uppercase tracking-wider"
              style={link.isActive ? {
                color: "var(--color-purple)",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                textDecorationThickness: "2px",
              } : {
                color: "var(--color-charcoal)",
              }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://www.linkedin.com/in/michelletaylor/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-charcoal"
          >
            <LinkedinLogo size={18} weight="bold" />
            LinkedIn
          </a>
          <a
            href="/michelletaylorresume2026.pdf"
            target="_blank"
            className="inline-flex items-center px-4 py-2 text-white text-xs font-medium rounded-full"
            style={{ backgroundColor: "var(--color-purple)" }}
          >
            Download Resum&eacute;
          </a>
        </div>
      )}
    </header>
  );
}
