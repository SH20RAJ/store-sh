export const categoryInfo = {
  'landing-pages': {
    description: 'Professional, conversion-optimized landing page templates',
    count: 2500,
    products: Array.from({ length: 10 }, (_, i) => ({
      id: `lp-${i + 1}`,
      title: `Premium Landing Page Template ${i + 1}`,
      description: 'Modern, responsive landing page template with conversion-optimized sections',
      author: 'DigitalTeam',
      rating: 4.5,
      reviews: 312,
      price: 49.99,
      sales: 2500,
      image: `https://picsum.photos/400/300?random=${i}`
    }))
  },
  'saas-solutions': {
    description: 'Ready-to-deploy software as a service applications',
    count: 1800,
    products: Array.from({ length: 10 }, (_, i) => ({
      id: `saas-${i + 1}`,
      title: `SaaS Application Template ${i + 1}`,
      description: 'Complete SaaS solution with user management and billing',
      author: 'SaaSExperts',
      rating: 4.7,
      reviews: 245,
      price: 149.99,
      sales: 1800,
      image: `https://picsum.photos/400/300?random=${i + 10}`
    }))
  },
  'telegram-bots': {
    description: 'Automated bot solutions for Telegram platform',
    count: 950,
    products: Array.from({ length: 10 }, (_, i) => ({
      id: `bot-${i + 1}`,
      title: `Telegram Bot Solution ${i + 1}`,
      description: 'Advanced Telegram bot with customizable features',
      author: 'BotCrafters',
      rating: 4.3,
      reviews: 156,
      price: 29.99,
      sales: 950,
      image: `https://picsum.photos/400/300?random=${i + 20}`
    }))
  },
  'php-scripts': {
    description: 'Choose from over 3,100 PHP scripts. Explore items created by our global community.',
    count: 3100,
    products: Array.from({ length: 10 }, (_, i) => ({
      id: `php-${i + 1}`,
      title: `PHP Script Bundle ${i + 1}`,
      description: 'Complete PHP solution for web applications',
      author: 'PHPMasters',
      rating: 4.6,
      reviews: 423,
      price: 39.99,
      sales: 3100,
      image: `https://picsum.photos/400/300?random=${i + 30}`
    }))
  },
  // Add more categories with their respective products...
}

export const productCategories = [
  { name: "Landing Pages", slug: "landing-pages", count: 2500 },
  { name: "SaaS Solutions", slug: "saas-solutions", count: 1800 },
  { name: "Telegram Bots", slug: "telegram-bots", count: 950 },
  { name: "PHP Scripts", slug: "php-scripts", count: 3100 },
  { name: "UI Components", slug: "ui-components", count: 2800 },
  { name: "3D Models", slug: "3d-models", count: 3000 }
]

export const phpCategories = [
  { name: "Add-ons", count: 45 },
  { name: "Project Management", count: 32 },
  { name: "Social Networking", count: 28 },
  { name: "Forms", count: 24 },
  { name: "Shopping Carts", count: 20 },
  { name: "Calendars", count: 18 }
]