"use client"

import { SectionContainer } from "@/components/shared/SectionContainer"
import { PricingCard } from "@/components/shared/PricingCard"

const pricingPlans = [
  {
    name: "Basic",
    price: "$29",
    description: "Perfect for small businesses and startups",
    features: [
      "Up to 5 team members",
      "50 AI content generations/month",
      "Basic analytics dashboard",
      "Email support",
      "1 brand voice profile",
      "Social media integrations"
    ]
  },
  {
    name: "Pro",
    price: "$99",
    description: "Ideal for growing marketing teams",
    features: [
      "Up to 20 team members",
      "Unlimited AI content generations",
      "Advanced analytics & insights",
      "Priority email & chat support",
      "5 brand voice profiles",
      "All integrations included",
      "Custom workflows",
      "A/B testing tools"
    ],
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "$299",
    description: "For large organizations with custom needs",
    features: [
      "Unlimited team members",
      "Unlimited everything",
      "Custom AI model training",
      "Dedicated account manager",
      "Unlimited brand voices",
      "API access",
      "Custom integrations",
      "SLA guarantee"
    ]
  }
]

export function Pricing() {
  return (
    <SectionContainer id="pricing">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Choose the perfect plan for your team. No hidden fees, cancel anytime.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <PricingCard
            key={plan.name}
            {...plan}
            delay={index * 0.1}
          />
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-muted-foreground">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </SectionContainer>
  )
}