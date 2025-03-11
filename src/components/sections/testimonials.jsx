import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Testimonials() {
  const testimonials = [
    {
      name: "Alex Thompson",
      role: "Frontend Developer",
      content: "The templates and components have significantly improved my development workflow. Highly recommended!",
      avatar: "AT"
    },
    {
      name: "Sarah Chen",
      role: "Product Designer",
      content: "Beautiful, responsive, and easy to customize. The attention to detail in these components is outstanding.",
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      role: "Full Stack Developer",
      content: "The best UI component library I've used. The documentation is clear and the components are well-designed.",
      avatar: "MR"
    }
  ]

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">What Our Users Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Don't just take our word for it. Here's what developers and designers think about our platform.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center mb-4">
                <Avatar className="h-10 w-10 mr-4">
                  <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground">{testimonial.content}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}