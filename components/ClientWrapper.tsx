"use client"

import dynamic from 'next/dynamic'

const ClientApp = dynamic(() => import('./ClientApp'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
    </div>
  )
})

export function ClientWrapper() {
  return <ClientApp />
}