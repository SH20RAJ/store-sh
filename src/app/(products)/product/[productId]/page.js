/* @next-codemod-ignore */

import { Button } from "@/components/ui/button";
import { Star, Heart } from "lucide-react";
import { RecommendedProducts } from "@/components/sections/recommended-products";
import { categoryInfo } from "@/constants/products";

export default async function ProductPage({ params }) {
  // Properly await the dynamic route parameter
  const params2 = await params;
  const productId = params2.productId

  // In a real app, fetch product data based on productId
  // For now, we'll use sample data
  const product = {
    id: productId,
    title: "Premium E-commerce Template",
    description: "A fully-featured e-commerce template with modern design and advanced functionality. Built with Next.js and Tailwind CSS, this template offers seamless integration, responsive design, and optimized performance.",
    price: 49.99,
    author: "DigitalTeam",
    reviews: 312,
    rating: 4.5,
    sales: 1000,
    image: "https://picsum.photos/800/600",
    features: [
      "Responsive Design",
      "SEO Optimized",
      "Performance Focused",
      "Regular Updates",
      "6 Months Support",
      "Documentation Included"
    ],
    techStack: [
      "Next.js 13+",
      "React 18",
      "Tailwind CSS",
      "TypeScript",
      "Node.js"
    ]
  };

  // Get recommended products from the same category
  const recommendedProducts = categoryInfo["php-scripts"]?.products || [];

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image Section */}
        <div className="relative">
          <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="object-cover w-full h-full"
            />
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 bg-white/80 hover:bg-white transition-colors"
          >
            <Heart className="h-5 w-5 text-muted-foreground hover:text-red-500 transition-colors" />
          </Button>
        </div>

        {/* Product Info Section */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-muted-foreground mt-2">{product.description}</p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
              <span className="text-sm text-muted-foreground ml-2">({product.reviews} reviews)</span>
            </div>
            <div className="text-sm text-muted-foreground">{product.sales}+ sales</div>
          </div>

          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-bold">${product.price}</span>
            <span className="text-muted-foreground">One-time purchase</span>
          </div>

          <Button className="w-full py-6 text-lg">Buy Now</Button>

          {/* Features Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Features</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-center space-x-2">
                  <svg
                    className="h-5 w-5 text-primary flex-shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {product.techStack.map((tech) => (
                <div
                  key={tech}
                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Products Section */}
      <RecommendedProducts products={recommendedProducts} />
    </div>
  );
}