"use client"

import { Book, Code2, FileText, GitBranch } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function DocumentationPage() {
  const sections = [
    {
      title: "Getting Started",
      icon: Book,
      description: "Learn the fundamentals and basic concepts",
      topics: [
        { title: "Introduction", href: "#" },
        { title: "Quick Start Guide", href: "#" },
        { title: "Basic Concepts", href: "#" },
        { title: "Installation", href: "#" }
      ]
    },
    {
      title: "API Reference",
      icon: Code2,
      description: "Complete API documentation and examples",
      topics: [
        { title: "Authentication", href: "#" },
        { title: "Endpoints", href: "#" },
        { title: "Error Handling", href: "#" },
        { title: "Rate Limits", href: "#" }
      ]
    },
    {
      title: "Integration Guides",
      icon: GitBranch,
      description: "Step-by-step integration tutorials",
      topics: [
        { title: "Web Integration", href: "#" },
        { title: "Mobile Integration", href: "#" },
        { title: "Backend Integration", href: "#" },
        { title: "Webhooks", href: "#" }
      ]
    },
    {
      title: "Resources",
      icon: FileText,
      description: "Additional resources and references",
      topics: [
        { title: "Best Practices", href: "#" },
        { title: "Examples", href: "#" },
        { title: "SDKs", href: "#" },
        { title: "FAQ", href: "#" }
      ]
    }
  ]

  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Documentation</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Comprehensive guides and references for Store SH platform
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {sections.map((section, index) => {
          const Icon = section.icon
          return (
            <div key={index} className="border rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Icon className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">{section.title}</h2>
              </div>
              <p className="text-muted-foreground mb-4">{section.description}</p>
              <ul className="space-y-2">
                {section.topics.map((topic, topicIndex) => (
                  <li key={topicIndex}>
                    <Link
                      href={topic.href}
                      className="text-primary hover:underline"
                    >
                      {topic.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Need More Help?</h2>
        <p className="text-muted-foreground mb-8">
          Can't find what you're looking for? Check out our community or contact support.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/community">
            <Button variant="outline">Join Community</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline">Contact Support</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}