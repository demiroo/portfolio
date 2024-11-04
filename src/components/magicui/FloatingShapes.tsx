"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const generateShapes = () =>
  Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 15 + 5, // Now between 5-20px (much smaller)
    x: Math.random() * 120 - 10,
    y: Math.random() * 120 - 10,
    duration: Math.random() * 15 + 15,
    delay: Math.random() * 3,
    rotation: Math.random() * 360 - 180, // Less rotation
  }));

export function FloatingShapes() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [shapes] = useState(generateShapes);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute rounded-full mix-blend-plus-lighter"
          initial={{
            width: shape.size,
            height: shape.size,
            x: `${shape.x}vw`,
            y: `${shape.y}vh`,
            scale: 0,
            rotate: shape.rotation,
          }}
          animate={{
            x: [
              `${shape.x}vw`,
              `${(shape.x + Math.random() * 15 - 7.5) % 100}vw`, // Smaller movement range
            ],
            y: [
              `${shape.y}vh`,
              `${(shape.y + Math.random() * 15 - 7.5) % 100}vh`, // Smaller movement range
            ],
            scale: [0, 0.4, 0], // Reduced max scale from 0.8 to 0.4
            rotate: [
              shape.rotation,
              shape.rotation + Math.random() * 240 - 120, // Less rotation
            ],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: shape.size,
            height: shape.size,
            background:
              theme === "dark"
                ? `radial-gradient(circle, ${
                    [
                      "rgba(139, 92, 246, 0.3)",
                      "rgba(88, 28, 135, 0.3)",
                      "rgba(67, 56, 202, 0.3)",
                      "rgba(124, 58, 237, 0.3)",
                      "rgba(192, 132, 252, 0.3)",
                      "rgba(167, 139, 250, 0.3)",
                    ][shape.id % 6]
                  } 0%, rgba(49, 46, 129, 0.1) 100%)`
                : `radial-gradient(circle, ${
                    [
                      "rgba(59, 130, 246, 0.3)",
                      "rgba(147, 197, 253, 0.3)",
                      "rgba(96, 165, 250, 0.3)",
                      "rgba(37, 99, 235, 0.3)",
                      "rgba(191, 219, 254, 0.3)",
                      "rgba(147, 197, 253, 0.3)",
                    ][shape.id % 6]
                  } 0%, rgba(219, 234, 254, 0.1) 100%)`,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-white/30 dark:bg-black/30 backdrop-blur-[80px]" />
    </div>
  );
}
