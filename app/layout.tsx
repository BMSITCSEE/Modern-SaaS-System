import type { Metadata } from "next"
import { ThemeProvider } from "@/components/providers/ThemeProvider"
import "./globals.css"

export const metadata: Metadata = {
  title: "ADmyBRAND AI Suite - Transform Your Marketing with AI",
  description: "Revolutionary AI-powered marketing tools to create compelling content, analyze performance, and scale your brand presence.",
  keywords: "AI marketing, content generation, brand management, marketing automation",
  openGraph: {
    title: "ADmyBRAND AI Suite",
    description: "Transform your marketing with AI-powered tools",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="min-h-screen bg-background antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}