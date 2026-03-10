"use client";

import {
  CalendarDots,
  Compass,
  Strategy,
} from "@phosphor-icons/react";

export default function TraitPills({ traits }: { traits: string[] }) {
  return (
    <div className="flex justify-center mt-20">
      <div className="flex items-stretch w-full bg-white/80 backdrop-blur-sm border-2 rounded-full overflow-hidden" style={{ borderColor: "hsl(249, 60%, 80%)" }}>
        {traits.map((trait, i) => (
          <div
            key={trait}
            className="flex flex-1 items-center justify-center gap-2.5 text-base text-muted px-6 py-3.5"
            style={{
              borderLeft: i > 0 ? "2px solid hsl(249, 60%, 80%)" : undefined,
            }}
          >
            {trait.includes("years") && (
              <CalendarDots size={16} weight="duotone" style={{ color: "hsl(249, 80%, 60%)" }} />
            )}
            {trait.includes("commerce") && (
              <Compass size={16} weight="duotone" style={{ color: "hsl(249, 80%, 60%)" }} />
            )}
            {(trait.includes("Strategy") || trait.includes("B2B") || trait.includes("SaaS")) && (
              <Strategy size={16} weight="duotone" style={{ color: "hsl(249, 80%, 60%)" }} />
            )}
            <span className="font-bold">{trait}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
