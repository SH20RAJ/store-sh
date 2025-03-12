"use client";

import { Button } from "@/components/ui/button";
import { Star, Heart } from "lucide-react";
import Link from "next/link";

export function ProductCard({ product }) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="group border rounded-lg overflow-hidden bg-card hover:shadow-lg transition-all duration-200 block"
    >
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
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold">${product.price}</span>
          <div className="text-xs text-muted-foreground">{product.sales}+ Sales</div>
        </div>
      </div>
    </Link>
  );
}