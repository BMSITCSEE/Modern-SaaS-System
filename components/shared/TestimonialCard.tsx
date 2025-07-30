"use client"

import { motion } from "framer-motion"
import { GlassBox } from "./GlassBox"
import { Star, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

interface TestimonialCardProps {
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
}

export function TestimonialCard({ 
  name, 
  role, 
  company, 
  content, 
  rating,
  avatar 
}: TestimonialCardProps) {
  return (
    <motion.div
      className="w-full"
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <GlassBox className="h-full relative overflow-hidden group">
        {/* Quote Icon */}
        <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10 group-hover:text-primary/20 transition-colors" />
        
        <div className="flex items-start space-x-4 mb-4">
          <motion.div 
            className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold relative"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            {avatar}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
          </motion.div>
          <div className="flex-1">
            <h4 className="font-semibold">{name}</h4>
            <p className="text-sm text-muted-foreground">{role} at {company}</p>
          </div>
        </div>
        
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <Star
                className={cn(
                  "h-4 w-4",
                  i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                )}
              />
            </motion.div>
          ))}
        </div>
        
        <p className="text-muted-foreground italic">"{content}"</p>
      </GlassBox>
    </motion.div>
  )
}