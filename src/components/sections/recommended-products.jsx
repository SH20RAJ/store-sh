"use client";

import { ProductCard } from "@/components/ui/product-card";

export function RecommendedProducts({ products, title = "Recommended Products" }) {
  return (
    <div className="mt-16 space-y-6">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products?.slice(0, 4).map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
    </div>
  );
}