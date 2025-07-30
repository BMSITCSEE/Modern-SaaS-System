"use client"

import { SectionContainer } from "@/components/shared/SectionContainer"
import { FeatureCard } from "@/components/shared/FeatureCard"
import { 
  Brain, 
  Zap, 
  BarChart3, 
  Users, 
  Shield, 
  Palette,
  Target,
  TrendingUp,
  MessageSquare
} from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI Content Generation",
    description: "Create compelling marketing copy, social posts, and blog articles in seconds with our advanced AI engine."
  },
  {
    icon: Target,
    title: "Smart Targeting",
    description: "Reach the right audience with AI-powered segmentation and personalization strategies."
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Track performance metrics and gain actionable insights with comprehensive dashboards."
  },
  {
    icon: Palette,
    title: "Brand Voice AI",
    description: "Maintain consistent brand messaging across all channels with our voice recognition technology."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work seamlessly with your team with built-in collaboration tools and workflow management."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security ensures your data and campaigns are always protected."
  }
]

export function Features() {
  return (
    <SectionContainer id="features" className="bg-gradient-to-b from-background to-secondary/20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
          Powerful Features for Modern Marketers
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Everything you need to create, manage, and scale your marketing campaigns with AI
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            {...feature}
            delay={index * 0.1}
          />
        ))}
      </div>
    </SectionContainer>
  )
}