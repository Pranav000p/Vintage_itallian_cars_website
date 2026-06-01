"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface RevealTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  delay?: number;
}

export default function RevealText({
  text,
  className,
  as = "h2",
  delay = 0,
}: RevealTextProps) {
  const words = text.split(" ");
  const Component = as;
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, delay * 1000 + 100);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Component className={cn("overflow-hidden flex flex-wrap gap-x-[0.25em]", className)}>
      <span className="inline-flex flex-wrap">
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden py-1">
            <span
              className={cn(
                "inline-block transition-all duration-700 ease-out transform",
                isRevealed ? "translate-y-0 opacity-100" : "translate-y-[40%] opacity-0"
              )}
              style={{
                transitionDelay: `${i * 30}ms`,
              }}
            >
              {word}
            </span>
          </span>
        ))}
      </span>
    </Component>
  );
}
