"use client"

import { Button } from "@/components/ui/button"

export default function CareersPage() {
  const positions = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "We're looking for a Senior Frontend Developer to help build the future of digital asset marketplace."
    },
    {
      title: "Product Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description: "Join our design team to create beautiful and intuitive user experiences for our marketplace."
    },
    {
      title: "Marketing Manager",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      description: "Lead our marketing efforts and help grow our digital asset marketplace globally."
    }
  ]

  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Join Our Team</h1>
        <p className="text-xl text-muted-foreground">
          Help us build the future of digital asset marketplace. We're looking for passionate people to join our growing team.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
        <div className="p-6 rounded-lg border bg-card">
          <h3 className="text-lg font-semibold mb-2">Mission-Driven</h3>
          <p className="text-muted-foreground">Join a team passionate about revolutionizing the digital asset marketplace.</p>
        </div>
        <div className="p-6 rounded-lg border bg-card">
          <h3 className="text-lg font-semibold mb-2">Remote-First</h3>
          <p className="text-muted-foreground">Work from anywhere in the world. We believe in flexibility and trust.</p>
        </div>
        <div className="p-6 rounded-lg border bg-card">
          <h3 className="text-lg font-semibold mb-2">Growth Opportunities</h3>
          <p className="text-muted-foreground">Continuous learning and development opportunities to advance your career.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-8">Open Positions</h2>
      <div className="space-y-6">
        {positions.map((position, index) => (
          <div key={index} className="border rounded-lg p-6 bg-card hover:border-primary transition-colors">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-lg font-semibold">{position.title}</h3>
                <p className="text-sm text-muted-foreground">{position.department} · {position.location} · {position.type}</p>
              </div>
              <Button>Apply Now</Button>
            </div>
            <p className="text-muted-foreground">{position.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-muted-foreground mb-4">Don't see a position that matches your skills?</p>
        <Button variant="outline">Send us your CV</Button>
      </div>
    </div>
  )
}