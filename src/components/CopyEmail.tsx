"use client";

import { useState } from "react";
import { Envelope, Copy, Check } from "@phosphor-icons/react";

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-8 pt-6" style={{ borderTop: "1px solid var(--color-sand)" }}>
    <div className="flex items-start gap-4">
      <Envelope size={20} weight="duotone" className="shrink-0 mt-0.5" style={{ color: "hsl(249, 80%, 60%)" }} />
      <div className="flex items-center gap-3">
        <a
          href={`mailto:${email}`}
          className="text-base font-bold text-charcoal hover:text-muted transition-colors"
        >
          {email}
        </a>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full transition-all cursor-pointer"
          style={{
            backgroundColor: copied ? "hsl(249, 80%, 60%)" : "hsl(249, 80%, 96%)",
            color: copied ? "#ffffff" : "hsl(249, 60%, 45%)",
          }}
        >
          {copied ? (
            <>
              <Check size={14} weight="bold" />
              Copied
            </>
          ) : (
            <>
              <Copy size={14} weight="duotone" />
              Copy
            </>
          )}
        </button>
      </div>
    </div>
    </div>
  );
}
