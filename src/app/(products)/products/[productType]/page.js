export const runtime = 'edge';


import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, SlidersHorizontal } from "lucide-react"
import { categoryInfo } from "@/constants/products"
import Link from "next/link"
import { ProductCard } from "@/components/ui/product-card"

export default async function ProductTypePage({ params }) {
  // Get the product type from the URL parameters
  const productType = await params.productType

  // Convert URL format to display format (e.g., "landing-pages" to "Landing Pages")
  const displayName = productType
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  // Get category information from constants
  const info = categoryInfo[productType] || {
    description: `Explore our collection of ${displayName}`,
    count: 1000
  }

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col space-y-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">{displayName}</h1>
            <p className="text-muted-foreground mt-1">{info.description}</p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <div className="relative flex-1 md:w-[300px]">
              <Input 
                type="search"
                placeholder={`Search ${displayName.toLowerCase()}...`}
                className="w-full pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
            <Button variant="outline" size="icon">
              <SlidersHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Filters Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { name: "Newest", count: 45 },
            { name: "Popular", count: 32 },
            { name: "Top Rated", count: 28 },
            { name: "Price: Low to High", count: 24 },
            { name: "Price: High to Low", count: 20 },
            { name: "Featured", count: 18 }
          ].map((filter) => (
            <Button
              key={filter.name}
              variant="outline"
              className="w-full justify-between text-sm font-medium"
            >
              <span>{filter.name}</span>
              <span className="text-xs text-muted-foreground">{filter.count}</span>
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {(categoryInfo[productType]?.products || Array.from({ length: 8 }, (_, i) => ({
            id: `${productType}-${i + 1}`,
            title: `${displayName} Template ${i + 1}`,
            description: `High-quality ${displayName} solution`,
            author: 'DigitalTeam',
            rating: 4.5,
            reviews: 312,
            price: 49.99,
            sales: 1000,
            image: `https://picsum.photos/400/300?random=${i}`
          }))).map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}