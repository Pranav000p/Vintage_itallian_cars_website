import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "ivory" | "parchment" | "clean";
  children: React.ReactNode;
  border?: boolean;
}

export default function Card({
  className,
  variant = "ivory",
  border = true,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "relative rounded-sm transition-all duration-300 p-6 overflow-hidden",
        variant === "ivory" && "bg-ivory shadow-lg shadow-[#1c1409]/5",
        variant === "parchment" && "bg-parchment/60 shadow-md",
        variant === "clean" && "bg-transparent",
        border && "border border-border",
        className
      )}
      {...props}
    >
      {/* Texture decorativa pergamena */}
      {variant !== "clean" && (
        <div className="absolute inset-0 bg-perg-pattern pointer-events-none opacity-[0.03]" />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
