"use client"

import * as React from "react"

interface ToastProps {
  message: string
  type?: "success" | "error" | "info"
}

export function showToast({ message, type = "info" }: ToastProps) {
  const toastElement = document.createElement("div")
  toastElement.className = `fixed bottom-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg transition-all transform translate-y-0 ${
    type === "success" ? "bg-green-500 text-white" : 
    type === "error" ? "bg-red-500 text-white" : 
    "bg-primary text-primary-foreground"
  }`
  toastElement.textContent = message
  
  document.body.appendChild(toastElement)
  
  setTimeout(() => {
    toastElement.style.transform = "translateY(100px)"
    toastElement.style.opacity = "0"
    setTimeout(() => document.body.removeChild(toastElement), 300)
  }, 3000)
}