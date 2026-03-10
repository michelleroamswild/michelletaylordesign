"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";

interface HighlightLink {
  match: string;
  headline: string;
  href: string;
  image: string;
  imageAlt: string;
  accent: string;
}

const highlightLinks: HighlightLink[] = [
  {
    match: "up to 13%",
    headline: "Abandoned cart redesign with direct-to-checkout links",
    href: "/bolt-abandoned-carts",
    image: "/images/abandoned-carts/ACHero.png",
    imageAlt: "Abandoned cart email redesign",
    accent: "hsl(214, 100%, 50%)",
  },
  {
    match: "70+ days to minutes,",
    headline: "Reducing merchant onboarding from weeks to minutes",
    href: "/onboarding",
    image: "/images/onboarding/OnboardingHighlight.png",
    imageAlt: "Bolt onboarding flow",
    accent: "hsl(67, 100%, 40%)",
  },
  {
    match: "eliminating weeks of manual work",
    headline: "Automating admin workflows and simplifying expense reporting",
    href: "/expense-management",
    image: "/images/expense-management/ExpenseManagementMobile.png",
    imageAlt: "Capital One expense management",
    accent: "hsl(249, 80%, 60%)",
  },
];

export default function HeroText({ description }: { description: string }) {
  const [activeHighlight, setActiveHighlight] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const highlightRefs = useRef<Record<string, HTMLSpanElement | null>>({});

  // Parse the description and split into segments
  const parts: { text: string; highlight?: HighlightLink }[] = [];
  let remaining = description;

  // Remove ** markers and find highlights
  const boldPattern = /\*\*(.*?)\*\*/g;
  let lastIndex = 0;
  let match;

  while ((match = boldPattern.exec(description)) !== null) {
    // Add text before this match
    if (match.index > lastIndex) {
      parts.push({ text: description.slice(lastIndex, match.index).replace(/\*\*/g, "") });
    }
    // Find matching highlight link
    const innerText = match[1];
    const link = highlightLinks.find((h) => h.match === innerText);
    parts.push({ text: innerText, highlight: link || undefined });
    lastIndex = match.index + match[0].length;
  }
  // Add remaining text
  if (lastIndex < description.length) {
    parts.push({ text: description.slice(lastIndex).replace(/\*\*/g, "") });
  }

  return (
    <h1
      className="heading-hero"
      style={{ fontSize: "clamp(1.85rem, 3.8vw, 3rem)", lineHeight: 1.3 }}
    >
      {parts.map((part, i) =>
        part.highlight ? (
          <span
            key={i}
            ref={(el) => { highlightRefs.current[part.highlight!.match] = el; }}
            className="hero-highlight cursor-pointer"
            onMouseEnter={(e) => {
              setMousePos({ x: e.clientX, y: e.clientY });
              setActiveHighlight(part.highlight!.match);
            }}
            onMouseLeave={() => setActiveHighlight(null)}
            style={{ position: "relative", display: "inline" }}
          >
            {part.text}
            {activeHighlight === part.highlight.match && (
              <span
                className="fixed z-50 block pl-6"
                style={{ left: mousePos.x, top: mousePos.y, transform: "translateY(-50%)" }}
                onMouseEnter={() => setActiveHighlight(part.highlight!.match)}
                onMouseLeave={() => setActiveHighlight(null)}
              >
              <div
                className="overflow-hidden shadow-lg w-[320px] transition-all duration-300 animate-fade-up"
                style={{ background: "white" }}
              >
                <div className="relative h-[140px] overflow-hidden" style={{ backgroundColor: `color-mix(in srgb, ${part.highlight.accent} 10%, white)` }}>
                  <Image
                    src={part.highlight.image}
                    alt={part.highlight.imageAlt}
                    fill
                    className="object-contain p-3"
                  />
                </div>
                <div className="p-4">
                  <p className="text-base font-bold text-charcoal leading-snug tracking-normal">
                    {part.highlight.headline}
                  </p>
                  <Link
                    href={part.highlight.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white px-4 py-2 rounded-full no-underline tracking-normal"
                    style={{ backgroundColor: part.highlight.accent, textDecoration: "none" }}
                  >
                    View Case Study <ArrowRight size={12} weight="bold" />
                  </Link>
                </div>
              </div>
              </span>
            )}
          </span>
        ) : (
          <span key={i}>{part.text}</span>
        )
      )}
    </h1>
  );
}
