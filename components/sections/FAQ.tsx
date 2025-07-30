"use client"

import { SectionContainer } from "@/components/shared/SectionContainer"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does ADmyBRAND AI work?",
    answer: "ADmyBRAND AI uses advanced natural language processing and machine learning algorithms to understand your brand voice, analyze market trends, and generate high-quality marketing content. Simply input your requirements, and our AI will create tailored content that aligns with your brand strategy."
  },
  {
    question: "Can I customize the AI to match my brand voice?",
    answer: "Absolutely! Our Brand Voice AI feature allows you to train the system on your existing content, brand guidelines, and tone preferences. The more you use it, the better it becomes at matching your unique brand personality."
  },
  {
    question: "What types of content can I create?",
    answer: "You can create a wide variety of content including social media posts, blog articles, email campaigns, ad copy, product descriptions, landing pages, press releases, and more. Our AI supports over 50 different content types."
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we take security very seriously. All data is encrypted both in transit and at rest using bank-grade encryption. We're SOC 2 compliant and follow industry best practices for data protection. Your content and strategies remain confidential."
  },
  {
    question: "Can I collaborate with my team?",
    answer: "Yes! ADmyBRAND AI includes robust collaboration features. You can invite team members, assign roles, share projects, leave comments, and manage workflows all within the platform. Real-time collaboration ensures everyone stays aligned."
  },
  {
    question: "What's your refund policy?",
    answer: "We offer a 14-day free trial with no credit card required. If you're not satisfied within the first 30 days of your paid subscription, we'll provide a full refund. We're confident you'll love the results!"
  }
]

export function FAQ() {
  return (
    <SectionContainer id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about ADmyBRAND AI Suite
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionContainer>
  )
}