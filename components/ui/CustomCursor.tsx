"use client";

import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

export default function CustomCursor() {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorLabel, setCursorLabel] = useState<string | null>(null);

  // Posizione reale del mouse
  const mouseRef = useRef({ x: 0, y: 0 });
  // Posizione interpolata del cerchio esterno (Inerzia)
  const ringRef = useRef({ x: 0, y: 0 });

  const dotElRef = useRef<HTMLDivElement>(null);
  const ringElRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Abilitiamo il cursore solo su desktop non-touch
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      
      if (!isVisible) setIsVisible(true);

      // Sposta istantaneamente il puntatore centrale
      if (dotElRef.current) {
        dotElRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Aggiunge la classe per nascondere il cursore di sistema
    document.documentElement.classList.add("custom-cursor-active");

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Animazione ad alta performance per il cerchio esterno con LERP (Linear Interpolation)
    let animationFrameId: number;
    
    const render = () => {
      const ease = 0.14; // Coefficiente di ritardo/fluidità (0.1 = molto fluido, 0.9 = immediato)
      
      const dx = mouseRef.current.x - ringRef.current.x;
      const dy = mouseRef.current.y - ringRef.current.y;
      
      ringRef.current.x += dx * ease;
      ringRef.current.y += dy * ease;
      
      if (ringElRef.current) {
        ringElRef.current.style.transform = `translate3d(${ringRef.current.x}px, ${ringRef.current.y}px, 0)`;
      }
      
      animationFrameId = requestAnimationFrame(render);
    };
    
    render();

    // Rileva hover su link, bottoni, badge o elementi con etichette personalizzate
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const hoverElement = target.closest("a, button, select, [role='button'], [data-cursor-label]");
      
      if (hoverElement) {
        setIsHovered(true);
        const label = hoverElement.getAttribute("data-cursor-label");
        setCursorLabel(label);
      } else {
        setIsHovered(false);
        setCursorLabel(null);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (!isMounted) return null;

  return (
    <div 
      className={cn(
        "fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-300 hidden md:block",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      {/* 1. Puntatore Centrale Solido */}
      <div
        ref={dotElRef}
        className="fixed top-0 left-0 h-2 w-2 rounded-full bg-oro -ml-1 -mt-1 mix-blend-difference will-change-transform"
      />

      {/* 2. Corona Esterna Fluida */}
      <div
        ref={ringElRef}
        className={cn(
          "fixed top-0 left-0 rounded-full border border-oro/70 -ml-5 -mt-5 flex items-center justify-center transition-all duration-300 ease-out will-change-transform mix-blend-difference",
          isHovered ? "h-14 w-14 -ml-7 -mt-7 bg-cream/10 border-oro" : "h-10 w-10",
          cursorLabel ? "border-dashed" : "border-solid"
        )}
      >
        {/* Micro etichetta per lo stato hover */}
        {cursorLabel && (
          <span className="font-mono text-[7px] uppercase tracking-widest text-oro font-bold animate-fade-up">
            {cursorLabel}
          </span>
        )}
      </div>
    </div>
  );
}
