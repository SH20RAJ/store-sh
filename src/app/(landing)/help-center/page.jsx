"use client"

import { HelpCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HelpCenterPage() {
  const categories = [
    {
      title: "Getting Started",
      description: "Learn the basics of using Store SH",
      links: [
        { title: "Account Setup", href: "#" },
        { title: "Platform Overview", href: "#" },
        { title: "Making Your First Purchase", href: "#" },
      ]
    },
    {
      title: "Buying & Downloads",
      description: "Everything about purchasing and accessing digital assets",
      links: [
        { title: "Payment Methods", href: "#" },
        { title: "Download Instructions", href: "#" },
        { title: "License Information", href: "#" },
      ]
    },
    {
      title: "Technical Support",
      description: "Technical issues and troubleshooting",
      links: [
        { title: "Common Issues", href: "#" },
        { title: "System Requirements", href: "#" },
        { title: "Error Messages", href: "#" },
      ]
    },
    {
      title: "Account & Security",
      description: "Manage your account and security settings",
      links: [
        { title: "Account Settings", href: "#" },
        { title: "Password Reset", href: "#" },
        { title: "Two-Factor Authentication", href: "#" },
      ]
    }
  ]

  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Help Center</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Find answers to common questions and learn how to make the most of Store SH
        </p>
      </div>

      <div className="bg-primary/10 border-primary/20 border rounded-lg p-6 mb-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <HelpCircle className="h-6 w-6 text-primary" />
            <h2 className="text-lg font-semibold">Need immediate assistance?</h2>
          </div>
          <Link href="/contact">
            <Button>Contact Support</Button>
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {categories.map((category, index) => (
          <div key={index} className="border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-2">{category.title}</h2>
            <p className="text-muted-foreground mb-4">{category.description}</p>
            <ul className="space-y-2">
              {category.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link 
                    href={link.href}
                    className="text-primary hover:underline"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
        <p className="text-muted-foreground mb-8">
          Our support team is available 24/7 to assist you with any questions or concerns.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/documentation">
            <Button variant="outline">View Documentation</Button>
          </Link>
          <Link href="/community">
            <Button variant="outline">Join Community</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}