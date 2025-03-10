import { Filter, Grid3x3, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProductsPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Products</h1>
        <Button variant="outline" className="lg:hidden">
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className="hidden lg:block w-64 space-y-6">
          <div className="border rounded-lg p-4 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold">Filters</h2>
              <SlidersHorizontal className="h-4 w-4" />
            </div>
            
            {/* Price Range */}
            <div>
              <h3 className="text-sm font-medium mb-2">Price Range</h3>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  className="w-full px-3 py-1 border rounded-md text-sm"
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="w-full px-3 py-1 border rounded-md text-sm"
                />
              </div>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-sm font-medium mb-2">Categories</h3>
              <div className="space-y-2">
                {['All', 'Electronics', 'Clothing', 'Books', 'Home & Garden'].map((category) => (
                  <label key={category} className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span className="text-sm">{category}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Ratings */}
            <div>
              <h3 className="text-sm font-medium mb-2">Rating</h3>
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <label key={rating} className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span className="text-sm">{rating}+ Stars</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <main className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <Grid3x3 className="h-4 w-4" />
              </Button>
              <span className="text-sm text-muted-foreground">24 products</span>
            </div>
            <select className="border rounded-md px-3 py-1.5 text-sm">
              <option>Most Popular</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Product Cards */}
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="group border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-square bg-gray-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    Product Image
                  </div>
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="font-medium group-hover:text-primary transition-colors duration-200">
                    Product Name {i + 1}
                  </h3>
                  <p className="text-sm text-muted-foreground">Category</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">$99.99</span>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-sm">4.5</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex items-center justify-center space-x-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            {[1, 2, 3].map((page) => (
              <Button
                key={page}
                variant={page === 1 ? "default" : "outline"}
                size="sm"
              >
                {page}
              </Button>
            ))}
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
}