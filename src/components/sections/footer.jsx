import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-transparent border-t flex justify-center items-center">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Vaultora</h3>
            <p className="text-sm text-muted-foreground">Building the future of digital assets marketplace. Join us in revolutionizing how creators share and monetize their work.</p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com/sh20raj" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com/sh20raj" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com/sh20raj" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com/company/sh20raj" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://github.com/sh20raj" className="text-muted-foreground hover:text-primary">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products/landing-pages" className="text-muted-foreground hover:text-primary">Landing Pages</Link></li>
              <li><Link href="/products/saas-solutions" className="text-muted-foreground hover:text-primary">SaaS Solutions</Link></li>
              <li><Link href="/products/telegram-bots" className="text-muted-foreground hover:text-primary">Telegram Bots</Link></li>
              <li><Link href="/products/3d-models" className="text-muted-foreground hover:text-primary">3D Models</Link></li>
              <li><Link href="/products/ui-components" className="text-muted-foreground hover:text-primary">UI Components</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/careers" className="text-muted-foreground hover:text-primary">Careers</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary">Blog</Link></li>
              <li><Link href="/press-kit" className="text-muted-foreground hover:text-primary">Press Kit</Link></li>
              <li><Link href="/partners" className="text-muted-foreground hover:text-primary">Partners</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/help-center" className="text-muted-foreground hover:text-primary">Help Center</Link></li>
              <li><Link href="/documentation" className="text-muted-foreground hover:text-primary">Documentation</Link></li>
              <li><Link href="/community" className="text-muted-foreground hover:text-primary">Community</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact Us</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
              <li><Link href="/privacy-policy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Vaultora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}