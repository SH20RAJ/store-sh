"use client"

import { AlertTriangle } from "lucide-react"

export default function RefundPolicyPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Refund Policy</h1>
        <p className="text-xl text-muted-foreground">
          Our strict no-refund policy for digital products
        </p>
      </div>

      <div className="bg-destructive/10 border-destructive/20 border rounded-lg p-6 mb-12 flex items-start">
        <AlertTriangle className="h-6 w-6 text-destructive mr-4 mt-1 flex-shrink-0" />
        <div>
          <h2 className="text-lg font-semibold mb-2 text-destructive">No Refunds on Digital Products</h2>
          <p className="text-muted-foreground">
            Due to the nature of digital products and to protect our creators' intellectual property, all sales are final. We do not offer refunds on any digital products purchased through Store SH.
          </p>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Why We Don't Offer Refunds</h2>
          <ul className="space-y-4 text-muted-foreground">
            <li>Digital products are immediately available for download or access upon purchase</li>
            <li>Digital assets cannot be "returned" once they have been downloaded or accessed</li>
            <li>This policy protects our creators from unauthorized copying and distribution</li>
            <li>We provide detailed product descriptions, previews, and documentation to help you make informed decisions</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Before You Purchase</h2>
          <p className="text-muted-foreground mb-4">
            We encourage all customers to:
          </p>
          <ul className="space-y-4 text-muted-foreground">
            <li>Carefully review product descriptions, specifications, and requirements</li>
            <li>Check compatibility with your systems or intended use</li>
            <li>View all available previews and demonstrations</li>
            <li>Read user reviews and ratings</li>
            <li>Contact our support team with any pre-purchase questions</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Technical Support</h2>
          <p className="text-muted-foreground mb-4">
            While we don't offer refunds, we are committed to ensuring you can successfully use our products:
          </p>
          <ul className="space-y-4 text-muted-foreground">
            <li>Access to comprehensive product documentation</li>
            <li>Technical support for installation and usage issues</li>
            <li>Bug fixes and updates as applicable</li>
            <li>Community forums for additional assistance</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Exceptions</h2>
          <p className="text-muted-foreground mb-4">
            In extremely rare cases, exceptions may be considered:
          </p>
          <ul className="space-y-4 text-muted-foreground">
            <li>Technical issues preventing access to the product (verified by our support team)</li>
            <li>Product substantially different from description (must be reported within 24 hours of purchase)</li>
            <li>Fraudulent transactions (subject to investigation)</li>
          </ul>
        </section>

        <div className="border-t pt-8 mt-8">
          <p className="text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            For any questions about this policy, please contact our support team at support@storesh.com
          </p>
        </div>
      </div>
    </div>
  )
}