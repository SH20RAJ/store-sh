import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, FileCode, Bot, Database,  Component, Box } from "lucide-react"

const features = [
  {
    title: "Landing Pages",
    description: "Professional, conversion-optimized landing page templates",
    icon: Globe
  },
  {
    title: "SaaS Solutions",
    description: "Ready-to-deploy software as a service applications",
    icon: FileCode
  },
  {
    title: "Telegram Bots",
    description: "Automated bot solutions for Telegram platform",
    icon: Bot
  },
  {
    title: "Fullstack Apps",
    description: "Complete web applications with frontend and backend",
    icon: Database
  },
  {
    title: "3D Models",
    description: "High-quality 3D assets and models",
    icon: Box
  },
  {
    title: "UI Components",
    description: "Reusable software components and libraries",
    icon: Component
  }
]

export function Features() {
  return (
    <section className="py-24 px-6 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Browse Categories</h2>
          <p className="text-xl text-muted-foreground">Explore our wide range of digital assets</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon className="w-8 h-8 mb-2 text-primary" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}