import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  className?: string;
  variant?: "rosso" | "gold" | "verde" | "outline";
  children: React.ReactNode;
}

export default function Badge({
  className,
  variant = "rosso",
  children,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 border rounded-sm",
        variant === "rosso" && "bg-rosso/10 text-rosso border-rosso/20",
        variant === "gold" && "bg-oro/10 text-oro border-oro/20",
        variant === "verde" && "bg-verde/10 text-verde border-verde/20",
        variant === "outline" && "bg-transparent text-muted border-border",
        className
      )}
    >
      {children}
    </span>
  );
}
