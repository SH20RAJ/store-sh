"use client"

import { Users } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CommunityPage() {
  const features = [
    {
      title: "Discussion Forums",
      description: "Engage in discussions about digital assets, development, and design"
    },
    {
      title: "Creator Showcase",
      description: "Share your work and get feedback from fellow creators"
    },
    {
      title: "Resource Sharing",
      description: "Access shared resources, tutorials, and best practices"
    },
    {
      title: "Events & Workshops",
      description: "Participate in online events, workshops, and learning sessions"
    }
  ]

  const guidelines = [
    "Be respectful and professional",
    "Share knowledge and help others",
    "Give credit where it's due",
    "No spam or self-promotion",
    "Follow our code of conduct"
  ]

  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Community</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Join our vibrant community of creators, developers, and digital asset enthusiasts
        </p>
      </div>

      <div className="bg-primary/10 border-primary/20 border rounded-lg p-6 mb-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Users className="h-6 w-6 text-primary" />
            <h2 className="text-lg font-semibold">Join the Conversation</h2>
          </div>
          <Link href="#">
            <Button>Join Discord</Button>
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {features.map((feature, index) => (
          <div key={index} className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Community Guidelines</h2>
        <div className="max-w-2xl mx-auto">
          <ul className="space-y-4">
            {guidelines.map((guideline, index) => (
              <li key={index} className="flex items-center space-x-3">
                <div className="h-2 w-2 bg-primary rounded-full" />
                <span className="text-muted-foreground">{guideline}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-muted-foreground mb-8">
          Join our community and start collaborating with fellow creators.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/signup">
            <Button>Create Account</Button>
          </Link>
          <Link href="/help-center">
            <Button variant="outline">Learn More</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}