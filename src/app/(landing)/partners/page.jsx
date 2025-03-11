"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function PartnersPage() {
  const benefits = [
    "Access to exclusive partner resources and support",
    "Early access to new features and products",
    "Co-marketing opportunities",
    "Partner success manager",
    "Revenue share opportunities",
    "Partner directory listing"
  ]

  const partnerTypes = [
    {
      title: "Technology Partners",
      description: "Integrate with our platform to create powerful solutions for creators.",
      features: [
        "API access",
        "Technical documentation",
        "Integration support",
        "Joint marketing opportunities"
      ]
    },
    {
      title: "Agency Partners",
      description: "Help your clients succeed with digital asset creation and distribution.",
      features: [
        "Client management tools",
        "Agency dashboard",
        "Priority support",
        "Training resources"
      ]
    },
    {
      title: "Reseller Partners",
      description: "Grow your business by reselling our platform to your customers.",
      features: [
        "Competitive margins",
        "Sales enablement",
        "White-label options",
        "Partner portal access"
      ]
    }
  ]

  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Partner with Vaultora</h1>
        <p className="text-xl text-muted-foreground">
          Join our partner ecosystem and help shape the future of digital asset marketplace.
        </p>
        <Button className="mt-8">Become a Partner</Button>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
        {partnerTypes.map((type, index) => (
          <div key={index} className="border rounded-lg p-6 bg-card hover:border-primary transition-colors">
            <h3 className="text-xl font-semibold mb-3">{type.title}</h3>
            <p className="text-muted-foreground mb-6">{type.description}</p>
            <ul className="space-y-3">
              {type.features.map((feature, i) => (
                <li key={i} className="flex items-center text-sm">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border rounded-lg p-8 bg-card mb-16">
        <h2 className="text-2xl font-bold mb-8">Partner Benefits</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center">
              <CheckCircle className="h-5 w-5 text-primary mr-2" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Ready to Partner?</h2>
        <p className="text-muted-foreground mb-8">
          Fill out our partner application form and our team will get back to you within 48 hours.
        </p>
        <Button size="lg">Apply Now</Button>
      </div>
    </div>
  )
}