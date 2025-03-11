import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Star, SlidersHorizontal, Heart } from "lucide-react"
import { categoryInfo, phpCategories } from "@/constants/products"

export default function SearchPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col space-y-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">Search Results</h1>
            <p className="text-muted-foreground mt-1">45 PHP scripts and snippets from $14 sorted by best sellers</p>
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <div className="relative flex-1 md:w-[300px]">
              <Input 
                type="search"
                placeholder="Search scripts and components..."
                className="w-full pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
            <Button variant="outline" size="icon">
              <SlidersHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Category Filters */}
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

        {/* Sort Options */}
        <div className="flex flex-wrap gap-4">
          {[
            { name: "Best sellers", active: true },
            { name: "Newest", active: false },
            { name: "Best rated", active: false },
            { name: "Trending", active: false },
            { name: "Price", active: false }
          ].map((option) => (
            <Button
              key={option.name}
              variant={option.active ? "default" : "ghost"}
              className="text-sm"
            >
              {option.name}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryInfo["php-scripts"]?.products.map((product, i) => (
            <div key={i} className="group border rounded-lg overflow-hidden bg-card hover:shadow-lg transition-all duration-200">
              <div className="aspect-[4/3] bg-muted relative">
                <img 
                  src={product.image}
                  alt={product.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button variant="secondary" size="sm">Live Preview</Button>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 bg-white/80 hover:bg-white transition-colors"
                >
                  <Heart className="h-5 w-5 text-muted-foreground hover:text-red-500 transition-colors" />
                </Button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-1">{product.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">by {product.author}</p>
                <div className="mt-2 flex items-center text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                  <span className="text-xs text-muted-foreground ml-2">({product.reviews})</span>
                </div>
                <div className="mt-2 text-xs text-muted-foreground">
                  <div>Software Version: PHP 7.x - 8.x, MySQL 5.x - 8.x</div>
                  <div>Framework: CodeIgniter</div>
                  <div>File Types: JavaScript, HTML, XML, CSS, PHP, SQL</div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold">${product.price}</span>
                  <div className="text-xs text-muted-foreground">{product.sales}+ Sales</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}