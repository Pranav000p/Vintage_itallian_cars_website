"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Inizializza Lenis per scorrimento fluido di lusso
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
