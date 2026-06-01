import React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  className?: string;
}

export default function Marquee({ items, className }: MarqueeProps) {
  // Duplichiamo la lista degli elementi per un loop continuo visivamente perfetto
  const marqueeItems = [...items, ...items, ...items, ...items];

  return (
    <div className={cn("relative w-full overflow-hidden border-y border-border/40 py-4 bg-parchment/30", className)}>
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />
      
      <div className="flex w-max animate-marquee">
        {marqueeItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center text-ink/70 font-mono text-xs uppercase tracking-widest px-8 select-none"
          >
            <span>{item}</span>
            <span className="ml-8 text-oro">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
