"use client"

import { Shield } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Privacy Policy</h1>
        <p className="text-xl text-muted-foreground">
          How we collect, use, and protect your information
        </p>
      </div>

      <div className="bg-primary/10 border-primary/20 border rounded-lg p-6 mb-12 flex items-start">
        <Shield className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
        <div>
          <h2 className="text-lg font-semibold mb-2">Your Privacy Matters</h2>
          <p className="text-muted-foreground">
            We are committed to protecting your personal information and being transparent about how we use it. This policy explains how we collect, use, and safeguard your data.
          </p>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
          <p className="text-muted-foreground mb-4">
            We collect information that you provide directly to us:
          </p>
          <ul className="space-y-4 text-muted-foreground">
            <li>Account information (name, email, password)</li>
            <li>Profile information (avatar, bio)</li>
            <li>Payment information (processed securely through our payment providers)</li>
            <li>Communication preferences</li>
            <li>Usage data and analytics</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
          <ul className="space-y-4 text-muted-foreground">
            <li>To provide and maintain our services</li>
            <li>To process your transactions</li>
            <li>To send important service updates</li>
            <li>To improve our platform and user experience</li>
            <li>To provide customer support</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Data Security</h2>
          <p className="text-muted-foreground mb-4">
            We implement appropriate security measures to protect your personal information:
          </p>
          <ul className="space-y-4 text-muted-foreground">
            <li>Encryption of sensitive data</li>
            <li>Regular security assessments</li>
            <li>Secure data storage practices</li>
            <li>Limited access to personal information</li>
            <li>Regular security updates and monitoring</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
          <p className="text-muted-foreground mb-4">
            You have the following rights regarding your personal information:
          </p>
          <ul className="space-y-4 text-muted-foreground">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to data processing</li>
            <li>Data portability</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Cookie Policy</h2>
          <p className="text-muted-foreground mb-4">
            We use cookies and similar technologies to:
          </p>
          <ul className="space-y-4 text-muted-foreground">
            <li>Remember your preferences</li>
            <li>Understand how you use our platform</li>
            <li>Provide personalized content</li>
            <li>Improve our services</li>
          </ul>
        </section>

        <div className="border-t pt-8 mt-8">
          <p className="text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            For any privacy-related questions, please contact our privacy team at privacy@storesh.com
          </p>
        </div>
      </div>
    </div>
  )
}