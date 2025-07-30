"use client"

import { motion } from "framer-motion"
import { useMemo } from "react"

export function ParticlesBackground() {
  // Memoize particles to prevent hydration mismatch
  const particles = useMemo(() => 
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: (i * 3.33) % 100, // Deterministic positioning
      y: ((i * 7.77) + 20) % 100,
      size: (i % 4) + 1,
      duration: 5 + (i % 5),
      delay: (i % 5) * 0.5,
    })), []
  )

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/10"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  )
}