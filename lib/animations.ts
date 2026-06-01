// lib/animations.ts

export const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
  },
  exit: { 
    opacity: 0, 
    y: 20,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
  },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -40 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }
  },
  exit: { 
    opacity: 0, 
    x: -20,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }
  },
};

export const fadeInRight = {
  initial: { opacity: 0, x: 40 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }
  },
  exit: { 
    opacity: 0, 
    x: 20,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }
  },
};

export const scaleReveal = {
  initial: { opacity: 0, scale: 0.92 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] as const }
  },
  exit: { 
    opacity: 0, 
    scale: 0.95,
    transition: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] as const }
  },
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

export const hoverScale = {
  initial: { scale: 1, y: 0 },
  whileHover: { 
    scale: 1.03, 
    y: -4,
    transition: { duration: 0.3, ease: [0.25, 1, 0.5, 1] as const }
  },
};

export const buttonHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};
