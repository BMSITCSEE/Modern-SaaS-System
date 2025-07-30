"use client"

import * as React from "react"
import dynamic from "next/dynamic"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"


function ThemeProviderComponent({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

// Export a dynamic component that only renders on client side
export const ThemeProvider = dynamic(() => Promise.resolve(ThemeProviderComponent), {
  ssr: false,
})
