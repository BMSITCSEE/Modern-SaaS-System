"use client"

import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { GlassBox } from "./GlassBox"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  delay?: number
}

export function FeatureCard({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <GlassBox className="h-full hover:shadow-2xl transition-all duration-300">
        <motion.div 
          className="flex flex-col items-center text-center space-y-4"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div 
            className="p-3 rounded-full bg-primary/10"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Icon className="h-8 w-8 text-primary" />
          </motion.div>
          <h3 className="text-xl font-semibold font-display">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </motion.div>
      </GlassBox>
    </motion.div>
  )
}