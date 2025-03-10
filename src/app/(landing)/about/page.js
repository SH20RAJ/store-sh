/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">About Store SH</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your trusted marketplace for premium digital assets and solutions.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="text-muted-foreground">
              At Store SH, we're dedicated to providing developers and businesses with high-quality digital assets that accelerate their development process and enhance their projects.
            </p>
            <Button size="lg">Join Our Community</Button>
          </div>
          <div className="bg-muted rounded-lg aspect-video"></div>
        </div>

        {/* Values Section */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality First",
                description: "We ensure all assets meet the highest standards of quality and performance."
              },
              {
                title: "Community Driven",
                description: "Our community of creators and users drives our marketplace forward."
              },
              {
                title: "Innovation",
                description: "We constantly evolve to bring you the latest in digital solutions."
              }
            ].map((value, index) => (
              <div key={index} className="p-6 border rounded-lg bg-card hover:shadow-lg transition-all duration-200">
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Our Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                name: "John Doe",
                role: "CEO & Founder",
                image: "https://picsum.photos/200?random=1"
              },
              {
                name: "Jane Smith",
                role: "Head of Product",
                image: "https://picsum.photos/200?random=2"
              },
              {
                name: "Mike Johnson",
                role: "Lead Developer",
                image: "https://picsum.photos/200?random=3"
              },
              {
                name: "Sarah Wilson",
                role: "Community Manager",
                image: "https://picsum.photos/200?random=4"
              }
            ].map((member, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="aspect-square rounded-full overflow-hidden bg-muted">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}