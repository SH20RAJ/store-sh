import { Button } from "@/components/ui/button"

export default function PricingPage() {
  const plans = [
    {
      name: "Basic",
      price: "$19",
      description: "Perfect for individuals and small projects",
      features: [
        "5 downloads per month",
        "Basic support",
        "Access to basic assets",
        "Community access"
      ],
      cta: "Get Started"
    },
    {
      name: "Pro",
      price: "$49",
      description: "Ideal for professionals and growing businesses",
      features: [
        "25 downloads per month",
        "Priority support",
        "Access to premium assets",
        "API access",
        "Custom licensing"
      ],
      cta: "Go Pro",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      description: "For large teams and organizations",
      features: [
        "Unlimited downloads",
        "24/7 dedicated support",
        "Access to all assets",
        "Custom solutions",
        "Team management",
        "Advanced analytics"
      ],
      cta: "Contact Sales"
    }
  ]

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Simple, Transparent Pricing</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your needs. No hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`p-8 border rounded-lg bg-card hover:shadow-lg transition-all duration-200 ${plan.popular ? 'ring-2 ring-primary' : ''}`}
            >
              {plan.popular && (
                <div className="text-sm font-medium text-primary mb-4">Most Popular</div>
              )}
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="ml-2 text-muted-foreground">/month</span>
              </div>
              <p className="mt-4 text-muted-foreground">{plan.description}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
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
                    <span className="ml-3 text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="mt-8 w-full"
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-16 space-y-8">
          <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "Can I switch plans later?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and bank transfers for enterprise customers."
              },
              {
                question: "Do you offer refunds?",
                answer: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service."
              },
              {
                question: "Is there a contract or commitment?",
                answer: "No, all our plans are month-to-month with no long-term commitments. You can cancel anytime."
              }
            ].map((faq, index) => (
              <div key={index} className="p-6 border rounded-lg bg-card hover:shadow-lg transition-all duration-200">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}