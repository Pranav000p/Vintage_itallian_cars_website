import React from "react";
import { cn } from "@/lib/utils";

interface SectionDividerProps {
  className?: string;
  withStar?: boolean;
}

export default function SectionDivider({
  className,
  withStar = true,
}: SectionDividerProps) {
  return (
    <div className={cn("relative flex items-center justify-center py-12", className)}>
      <div className="w-full border-t border-border/60" />
      {withStar && (
        <div className="absolute px-4 bg-cream flex items-center justify-center text-oro gap-1.5 transition-colors duration-500">
          <span className="text-[8px] opacity-75">✦</span>
          <span className="text-xs animate-spin-slow inline-block origin-center">✦</span>
          <span className="text-[8px] opacity-75">✦</span>
        </div>
      )}
    </div>
  );
}
