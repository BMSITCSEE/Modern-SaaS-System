import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface GlassBoxProps {
  children: React.ReactNode
  className?: string
  animate?: boolean
}

export function GlassBox({ children, className, animate = false }: GlassBoxProps) {
  const Component = animate ? motion.div : "div"
  
  return (
    <Component
      className={cn(
        "relative rounded-2xl p-8",
        "bg-white/10 backdrop-blur-lg",
        "border border-white/20",
        "shadow-xl",
        className
      )}
      {...(animate && {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
      })}
    >
      {children}
    </Component>
  )
}