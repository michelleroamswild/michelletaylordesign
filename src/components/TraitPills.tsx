"use client";

import {
  CalendarDots,
  Compass,
  Strategy,
} from "@phosphor-icons/react";

export default function TraitPills({ traits }: { traits: string[] }) {
  return (
    <div className="flex justify-center mt-20">
      <div className="flex items-stretch w-full bg-white/80 backdrop-blur-sm border-2 rounded-full overflow-hidden" style={{ borderColor: "hsl(152, 40%, 75%)" }}>
        {traits.map((trait, i) => (
          <div
            key={trait}
            className="flex flex-1 items-center justify-center gap-2.5 text-base text-muted px-6 py-3.5"
            style={{
              borderLeft: i > 0 ? "2px solid hsl(152, 40%, 75%)" : undefined,
            }}
          >
            {trait.includes("years") && (
              <CalendarDots size={16} weight="duotone" style={{ color: "hsl(152, 56%, 37%)" }} />
            )}
            {trait.includes("commerce") && (
              <Compass size={16} weight="duotone" style={{ color: "hsl(152, 56%, 37%)" }} />
            )}
            {(trait.includes("Strategy") || trait.includes("B2B") || trait.includes("SaaS")) && (
              <Strategy size={16} weight="duotone" style={{ color: "hsl(152, 56%, 37%)" }} />
            )}
            <span className="font-bold">{trait}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
