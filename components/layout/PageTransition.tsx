"use client";

import React, { useEffect, useState } from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Tenda dorata/pergamena di transizione in puro CSS ad alta performance */}
      <div 
        className="fixed inset-0 z-50 bg-gradient-to-b from-oro via-parchment to-cream pointer-events-none transition-transform duration-700 ease-in-out origin-top"
        style={{
          transform: isMounted ? "scaleY(0)" : "scaleY(1)",
        }}
      />
      
      {/* Contenuto della pagina con effetto fade-in integrato */}
      <div
        className="transition-all duration-700 ease-out"
        style={{
          opacity: isMounted ? 1 : 0,
          transform: isMounted ? "translateY(0)" : "translateY(12px)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
