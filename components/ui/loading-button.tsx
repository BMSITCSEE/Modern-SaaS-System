// Create components/ui/loading-button.tsx
"use client"

import * as React from "react"
import { Button, ButtonProps } from "./button"
import { Loader2 } from "lucide-react"

interface LoadingButtonProps extends ButtonProps {
  loading?: boolean
}

export function LoadingButton({ 
  children, 
  loading, 
  disabled,
  ...props 
}: LoadingButtonProps) {
  return (
    <Button disabled={loading || disabled} {...props}>
      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Button>
  )
}