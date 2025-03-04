"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface AnimatedGridPatternProps {
  numSquares?: number;
  maxOpacity?: number;
  duration?: number;
  repeatDelay?: number;
  className?: string;
}

export function AnimatedGridPattern({
  numSquares = 30,
  maxOpacity = 0.1,
  duration = 3,
  repeatDelay = 1,
  className = "",
}: AnimatedGridPatternProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const squaresRef = useRef<Array<{ x: number; y: number; size: number; id: string }>>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Define generateSquares inside useEffect to avoid dependency issues
    const generateSquares = () => {
      const container = containerRef.current;
      if (!container) return;
      
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;

      // Calculate the size of each square based on container dimensions
      const gridSize = Math.max(containerWidth, containerHeight) / Math.sqrt(numSquares);

      const squares = [];
      for (let i = 0; i < numSquares; i++) {
        const size = gridSize * (0.5 + Math.random() * 0.5); // Vary the size
        squares.push({
          x: Math.random() * containerWidth,
          y: Math.random() * containerHeight,
          size,
          id: `square-${i}-${Date.now()}` // Add unique ID for React key
        });
      }

      squaresRef.current = squares;
    };

    generateSquares();

    // Regenerate squares on resize
    const handleResize = () => {
      generateSquares();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [numSquares]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {squaresRef.current.map((square) => (
        <motion.div
          key={square.id}
          className="absolute border border-accent/10 dark:border-accent/20 bg-transparent"
          style={{
            left: square.x,
            top: square.y,
            width: square.size,
            height: square.size,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, maxOpacity, 0],
          }}
          transition={{
            duration,
            repeat: Infinity,
            repeatDelay,
            delay: Math.random() * duration, // Random delay for each square
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
