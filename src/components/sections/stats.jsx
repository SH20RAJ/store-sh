"use client"

import { Card } from "@/components/ui/card"
import { Users, Download, Star, Code2 } from "lucide-react"
import { useInView } from "react-intersection-observer"
import { useState, useEffect } from "react"

function AnimatedCounter({ value, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  useEffect(() => {
    if (inView) {
      let start = 0
      const end = parseInt(value)
      const increment = end / (duration / 16)
      const timer = setInterval(() => {
        start += increment
        setCount(Math.min(Math.round(start), end))
        if (start >= end) clearInterval(timer)
      }, 16)
      return () => clearInterval(timer)
    }
  }, [inView, value, duration])

  return <span ref={ref}>{count.toLocaleString()}</span>
}

export function Stats() {
  const stats = [
    {
      icon: <Users className="h-6 w-6" />,
      value: "10000",
      label: "Active Users"
    },
    {
      icon: <Download className="h-6 w-6" />,
      value: "50000",
      label: "Downloads"
    },
    {
      icon: <Star className="h-6 w-6" />,
      value: "4000",
      label: "5 Star Ratings"
    },
    {
      icon: <Code2 className="h-6 w-6" />,
      value: "1000",
      label: "Components"
    }
  ]

  return (
    <section className="py-24 bg-primary/5">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">By the Numbers</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Our impact in numbers - see how we're making a difference in the development community.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-200">
              <div className="rounded-lg p-2 bg-primary/10 w-fit mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold mb-2">
                <AnimatedCounter value={stat.value} />
              </div>
              <p className="text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}