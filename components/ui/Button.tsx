"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "flat";
  href?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseClasses = cn(
    "relative inline-flex items-center justify-center font-mono text-xs uppercase tracking-widest transition-all duration-300 py-3 px-6 overflow-hidden border group",
    variant === "primary" && "bg-rosso text-cream border-rosso hover:bg-cream hover:text-rosso hover:border-rosso",
    variant === "outline" && "bg-transparent text-ink border-border hover:border-rosso hover:text-rosso",
    variant === "flat" && "bg-transparent border-transparent text-ink hover:text-rosso p-0 font-semibold"
  );

  const ArrowElement = () => (
    <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
      <ArrowUpRight className="h-3.5 w-3.5" />
    </span>
  );

  const content = (
    <>
      <span className="relative z-10 flex items-center">
        {children}
        {variant !== "flat" && <ArrowElement />}
      </span>
      {/* Elegante effetto sfondo hover */}
      {variant !== "flat" && (
        <span className={cn(
          "absolute inset-0 w-full h-full transition-transform duration-300 transform scale-x-0 origin-left z-0",
          variant === "primary" ? "bg-cream group-hover:scale-x-100" : "bg-rosso/5 group-hover:scale-x-100"
        )} />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn(baseClasses, "cursor-pointer", className)}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={cn(baseClasses, "active:scale-95 transform transition-transform duration-100", className)}
      {...props}
    >
      {content}
    </button>
  );
}
