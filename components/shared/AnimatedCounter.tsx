"use client"

import { useEffect, useState } from "react"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ClientOnly } from "./ClientOnly"

interface AnimatedCounterProps {
  value: number
  suffix?: string
}

function AnimatedCounterInner({ value, suffix = "" }: AnimatedCounterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      const startTime = Date.now()
      const duration = 2000

      const updateCounter = () => {
        const now = Date.now()
        const progress = Math.min((now - startTime) / duration, 1)
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentValue = Math.floor(easeOutQuart * value)
        
        setDisplayValue(currentValue)

        if (progress < 1) {
          requestAnimationFrame(updateCounter)
        }
      }

      requestAnimationFrame(updateCounter)
    }
  }, [isInView, value])

  return (
    <span ref={ref}>
      {displayValue}{suffix}
    </span>
  )
}

export function AnimatedCounter(props: AnimatedCounterProps) {
  return (
    <ClientOnly fallback={<span>{props.value}{props.suffix}</span>}>
      <AnimatedCounterInner {...props} />
    </ClientOnly>
  )
}