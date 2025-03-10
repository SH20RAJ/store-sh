"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function PressKitPage() {
  const brandAssets = [
    {
      title: "Logo Package",
      description: "Full logo package including primary, secondary, and monochrome versions in various formats.",
      fileSize: "12.5 MB",
      format: "ZIP"
    },
    {
      title: "Brand Guidelines",
      description: "Comprehensive guide to our brand identity, including typography, colors, and usage examples.",
      fileSize: "8.2 MB",
      format: "PDF"
    },
    {
      title: "Media Kit",
      description: "Press releases, company facts, executive bios, and high-resolution images.",
      fileSize: "15.8 MB",
      format: "ZIP"
    }
  ]

  const companyFacts = [
    { label: "Founded", value: "2023" },
    { label: "Headquarters", value: "San Francisco, CA" },
    { label: "Team Size", value: "50+" },
    { label: "Active Users", value: "100,000+" },
    { label: "Products Sold", value: "25,000+" },
    { label: "Countries Reached", value: "120+" }
  ]

  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Press Kit</h1>
        <p className="text-xl text-muted-foreground">
          Everything you need to tell the Store SH story. Download official logos, screenshots, and other assets.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
        {brandAssets.map((asset, index) => (
          <div key={index} className="border rounded-lg p-6 bg-card hover:border-primary transition-colors">
            <h3 className="text-lg font-semibold mb-2">{asset.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{asset.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{asset.fileSize} · {asset.format}</span>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="border rounded-lg p-8 bg-card mb-16">
        <h2 className="text-2xl font-bold mb-8">Company Facts</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {companyFacts.map((fact, index) => (
            <div key={index} className="p-4 bg-background rounded-lg">
              <div className="text-sm text-muted-foreground mb-1">{fact.label}</div>
              <div className="text-2xl font-bold">{fact.value}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="border rounded-lg p-8 bg-card">
        <h2 className="text-2xl font-bold mb-4">Media Contact</h2>
        <p className="text-muted-foreground mb-6">
          For press inquiries, please contact our media relations team.
        </p>
        <div className="space-y-2">
          <p className="font-medium">Press Contact</p>
          <p className="text-muted-foreground">press@storesh.com</p>
          <p className="text-muted-foreground">+1 (555) 123-4567</p>
        </div>
      </div>
    </div>
  )
}