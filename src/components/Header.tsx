"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LinkedinLogo, List, X } from "@phosphor-icons/react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md">
      <div className="container-site flex items-center justify-between h-20">
        <Link href="/">
          <Image
            src="/images/logos/LogoMark.png"
            alt="Michelle Taylor"
            width={18}
            height={18}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-5">
          <Link
            href="/about"
            className="text-xs font-semibold uppercase tracking-wider text-charcoal hover:text-muted transition-colors"
          >
            About
          </Link>
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
            className="inline-flex items-center px-4 py-2 bg-charcoal text-white text-xs font-medium rounded-full hover:bg-charcoal-light transition-colors"
          >
            Download Resum&eacute;
          </a>
        </nav>

        <button
          className="md:hidden p-2 text-charcoal"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <List size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-4">
          <Link
            href="/about"
            className="block text-xs font-semibold uppercase tracking-wider text-charcoal"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
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
            className="inline-flex items-center px-4 py-2 bg-charcoal text-white text-xs font-medium rounded-full"
          >
            Download Resum&eacute;
          </a>
        </div>
      )}
    </header>
  );
}
