import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"

import { Stats } from "@/components/sections/stats"
import { Testimonials } from "@/components/sections/testimonials"
import Link from "next/link"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex flex-col items-center justify-center py-24 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">Build Better Apps Faster</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">A modern marketplace for high-quality digital assets, templates, and components.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-8 py-3 text-sm font-medium shadow transition-colors hover:bg-primary/90">Browse Products</Link>
            <Link href="/about" className="inline-flex items-center justify-center rounded-md border border-input bg-background text-foreground px-8 py-3 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground">Learn More</Link>
          </div>

        </div>
      </div>
      <Features />
      <Stats />
      <Testimonials />
    </main>
  )
}
