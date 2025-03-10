"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Terms of Service</h1>
        <p className="text-xl text-muted-foreground">
          Please read these terms carefully before using our services.
        </p>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground mb-4">
            By accessing and using Store SH's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
          <p className="text-muted-foreground mb-4">
            Upon purchasing digital assets from our platform, you are granted a non-exclusive, non-transferable license to use the assets according to the license terms specified for each product.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Assets may not be redistributed or resold unless explicitly permitted</li>
            <li>Attribution requirements must be followed as specified</li>
            <li>Usage restrictions apply as detailed in individual product licenses</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">3. User Obligations</h2>
          <p className="text-muted-foreground mb-4">
            Users of Store SH agree to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>Provide accurate account information</li>
            <li>Maintain the security of their account</li>
            <li>Comply with all applicable laws and regulations</li>
            <li>Not engage in any unauthorized use of the platform</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
          <p className="text-muted-foreground mb-4">
            All content on Store SH, including but not limited to text, graphics, logos, and software, is the property of Store SH or its content suppliers and is protected by international copyright laws.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">5. Refund Policy</h2>
          <p className="text-muted-foreground mb-4">
            Store SH maintains a strict no-refund policy on all digital products. For detailed information, please refer to our
            <Link href="/refund-policy" className="text-primary hover:underline mx-1">Refund Policy</Link>
            page.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
          <p className="text-muted-foreground mb-4">
            Store SH shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">7. Changes to Terms</h2>
          <p className="text-muted-foreground mb-4">
            We reserve the right to modify these terms at any time. Users will be notified of any changes through the platform.
          </p>
        </section>

        <div className="border-t pt-8 mt-8">
          <p className="text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <div className="flex gap-4 mt-4">
            <Link href="/privacy-policy">
              <Button variant="outline">Privacy Policy</Button>
            </Link>
            <Link href="/refund-policy">
              <Button variant="outline">Refund Policy</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}