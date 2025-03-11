import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? We&apos;re here to help. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>

        {/* Contact Form and Info */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Send us a message</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="text-sm font-medium">
                    First name
                  </label>
                  <Input id="first-name" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last-name" className="text-sm font-medium">
                    Last name
                  </label>
                  <Input id="last-name" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="How can we help?" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Tell us how we can help..."
                />
              </div>
              <Button className="w-full">Send Message</Button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">Get in touch</h2>
            <div className="space-y-6">
              {[
                {
                  title: "Email",
                  content: "support@storesh.com",
                  description: "Our friendly team is here to help."
                },
                {
                  title: "Office",
                  content: "123 Market St, San Francisco, CA 94105",
                  description: "Come say hello at our office HQ."
                },
                {
                  title: "Phone",
                  content: "+1 (555) 123-4567",
                  description: "Mon-Fri from 8am to 5pm."
                }
              ].map((item) => (
                <div key={item.title} className="space-y-2">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-lg">{item.content}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="font-semibold">Follow us</h3>
              <div className="flex space-x-4">
                {[
                  { name: "Twitter", href: "#" },
                  { name: "LinkedIn", href: "#" },
                  { name: "GitHub", href: "#" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}