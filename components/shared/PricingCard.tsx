"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { showToast } from "@/components/ui/toast"

interface PricingCardProps {
  name: string
  price: string
  description: string
  features: string[]
  highlighted?: boolean
  delay?: number
}

export function PricingCard({ 
  name, 
  price, 
  description, 
  features, 
  highlighted = false,
  delay = 0 
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={cn(
        "relative rounded-2xl p-8",
        highlighted 
          ? "bg-primary text-primary-foreground shadow-2xl scale-105" 
          : "glass"
      )}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-sm font-bold px-4 py-1 rounded-full">
            MOST POPULAR
          </span>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className={cn(
          "text-sm mb-4",
          highlighted ? "text-primary-foreground/80" : "text-muted-foreground"
        )}>
          {description}
        </p>
        <div className="flex items-baseline justify-center">
          <span className="text-5xl font-bold">{price}</span>
          <span className="ml-2">/month</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-start">
            <Check className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <Button 
        className="w-full" 
        variant={highlighted ? "secondary" : "default"}
        onClick={() => showToast({ 
          message: `You selected the ${name} plan! Redirecting to checkout...`, 
          type: "success" 
        })}
      >
        Get Started
      </Button>
    </motion.div>
  )
}