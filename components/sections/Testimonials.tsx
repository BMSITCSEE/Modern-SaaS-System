"use client"

import { SectionContainer } from "@/components/shared/SectionContainer"
import { TestimonialCard } from "@/components/shared/TestimonialCard"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechStart Inc",
    content: "ADmyBRAND AI has revolutionized our content creation process. We're now producing 10x more content with better quality and consistency.",
    rating: 5,
    avatar: "SJ"
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "Growth Labs",
    content: "The AI-powered insights have helped us understand our audience better and improve our conversion rates by 45% in just 3 months.",
    rating: 5,
    avatar: "MC"
  },
  {
    name: "Emily Rodriguez",
    role: "Brand Manager",
    company: "Fashion Forward",
    content: "Managing multiple brand voices across channels was a nightmare. ADmyBRAND AI makes it effortless and ensures consistency everywhere.",
    rating: 5,
    avatar: "ER"
  },
  {
    name: "David Kim",
    role: "CMO",
    company: "E-commerce Plus",
    content: "The ROI we've seen from using ADmyBRAND AI is incredible. Our marketing efficiency has doubled while costs have decreased.",
    rating: 5,
    avatar: "DK"
  },
  {
    name: "Lisa Thompson",
    role: "Content Lead",
    company: "Media Innovations",
    content: "As a content creator, this tool is a game-changer. It doesn't replace creativity—it amplifies it.",
    rating: 5,
    avatar: "LT"
  },
  {
    name: "James Wilson",
    role: "Founder",
    company: "StartupX",
    content: "We went from spending days on marketing campaigns to hours. The time savings alone make it worth every penny.",
    rating: 5,
    avatar: "JW"
  }
]

export function Testimonials() {
  return (
    <SectionContainer id="testimonials" className="bg-gradient-to-b from-secondary/20 to-background">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
          Loved by Marketing Teams Worldwide
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Join thousands of satisfied customers who've transformed their marketing with AI
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </SectionContainer>
  )
}