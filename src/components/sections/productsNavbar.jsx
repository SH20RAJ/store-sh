import Link from "next/link"
import { Menu } from "lucide-react"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { Button } from "@/components/ui/button"
 
export function ProductsNavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">Store SH</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/products" className="text-sm font-medium hover:text-primary">Products</Link>
          <Link href="/pricing" className="text-sm font-medium hover:text-primary">Pricing</Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary">About</Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary">Contact</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <ThemeSwitcher />
          <Link href="/login" className="text-sm font-medium hover:text-primary transition-colors hidden md:block">Login</Link>
          <Link href="/signup" className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:scale-105 hidden md:block">Sign Up</Link>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  )
}