import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Star, SlidersHorizontal } from "lucide-react"
import Link from "next/link"
import { productCategories, phpCategories, categoryInfo } from "@/constants/products"

export default function ProductsPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col space-y-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">PHP Scripts</h1>
            <p className="text-muted-foreground mt-1">Choose from over 3,100 PHP scripts. Explore items created by our global community.</p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <div className="relative flex-1 md:w-[300px]">
              <Input 
                type="search"
                placeholder="Search scripts..."
                className="w-full pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
            <Button variant="outline" size="icon">
              <SlidersHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Categories Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {phpCategories.map((category) => (
            <Button
              key={category.name}
              variant="outline"
              className="w-full justify-between text-sm font-medium"
            >
              <span>{category.name}</span>
              <span className="text-xs text-muted-foreground">{category.count}</span>
            </Button>
          ))}
        </div>

        {/* Main Categories */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Browse All Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((category) => (
              <Link 
                href={`/products/${category.slug}`} 
                key={category.slug}
                className="block group"
              >
                <div className="border rounded-lg overflow-hidden bg-card hover:shadow-lg transition-all duration-200">
                  <div className="aspect-[4/3] bg-muted relative">
                    <img 
                      src={`https://picsum.photos/400/300?random=${category.slug}`}
                      alt={category.name}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button variant="secondary" size="sm">View Products</Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold group-hover:text-primary transition-colors">{category.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{category.count}+ items</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Featured PHP Scripts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryInfo['php-scripts'].products.slice(0, 8).map((product, i) => (
            <div key={i} className="group border rounded-lg overflow-hidden bg-card hover:shadow-lg transition-all duration-200">
              <div className="aspect-[4/3] bg-muted relative">
                <img 
                  src={`https://picsum.photos/400/300?random=${i}`}
                  alt="Product preview"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button variant="secondary" size="sm">Live Preview</Button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-1">MagicAI - OpenAI Content Generator</h3>
                <p className="text-sm text-muted-foreground mt-1">by DigitalTeam</p>
                <div className="mt-2 flex items-center text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                  <span className="text-xs text-muted-foreground ml-2">(312)</span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold">${(Math.random() * 100).toFixed(2)}</span>
                  <div className="text-xs text-muted-foreground">{Math.floor(Math.random() * 5000)}+ Sales</div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  )
}
