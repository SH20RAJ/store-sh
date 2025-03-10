"use client"

import { Button } from "@/components/ui/button"

export default function BlogPage() {
  const posts = [
    {
      title: "The Future of Digital Asset Marketplaces",
      category: "Industry Insights",
      date: "March 15, 2024",
      author: "Sarah Johnson",
      excerpt: "Explore how blockchain and AI are transforming the digital asset marketplace landscape.",
      readTime: "5 min read"
    },
    {
      title: "Best Practices for Creating Sellable Digital Assets",
      category: "Tips & Tutorials",
      date: "March 12, 2024",
      author: "Michael Chen",
      excerpt: "Learn the key principles that make digital assets more attractive to potential buyers.",
      readTime: "8 min read"
    },
    {
      title: "Success Story: From Creator to Six-Figure Earnings",
      category: "Success Stories",
      date: "March 10, 2024",
      author: "Emma Davis",
      excerpt: "An inspiring journey of how one creator turned their passion into a successful business.",
      readTime: "6 min read"
    }
  ]

  const categories = [
    "All Posts",
    "Industry Insights",
    "Tips & Tutorials",
    "Success Stories",
    "Company News",
    "Product Updates"
  ]

  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Our Blog</h1>
        <p className="text-xl text-muted-foreground">
          Insights, stories, and tips from the Store SH team and community.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/4">
          <div className="space-y-8">
            {posts.map((post, index) => (
              <article key={index} className="border rounded-lg p-6 bg-card hover:border-primary transition-colors">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span>{post.category}</span>
                  <span>·</span>
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-2xl font-bold mb-3 hover:text-primary cursor-pointer">
                  {post.title}
                </h2>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm">By {post.author}</span>
                  <Button variant="outline">Read More</Button>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Button variant="outline">Load More Posts</Button>
          </div>
        </div>

        <div className="lg:w-1/4">
          <div className="sticky top-24">
            <h3 className="font-semibold mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-start text-left hover:text-primary"
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="mt-8 p-6 border rounded-lg bg-card">
              <h3 className="font-semibold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get the latest updates and insights delivered to your inbox.
              </p>
              <Button className="w-full">Subscribe Now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}