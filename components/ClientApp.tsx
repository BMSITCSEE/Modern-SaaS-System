"use client"

import { Navbar } from "@/components/shared/Navbar"
import { Hero } from "@/components/sections/Hero"
import { Features } from "@/components/sections/Features"
import { Pricing } from "@/components/sections/Pricing"
import { Testimonials } from "@/components/sections/Testimonials"
import { FAQ } from "@/components/sections/FAQ"
import { Contact } from "@/components/sections/Contact"
import { Footer } from "@/components/sections/Footer"
import { ScrollProgress } from "@/components/shared/ScrollProgress"
import { FloatingActionButton } from "@/components/shared/FloatingActionButton"

export default function ClientApp() {
  return (
    <>
      <ScrollProgress />
      <main className="relative">
        <Navbar />
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
        <FloatingActionButton />
      </main>
    </>
  )
}