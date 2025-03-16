import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create sample user
  const user = await prisma.user.upsert({
    where: { email: "sh20raj@gmail.com" },
    update: {},
    create: {
      name: "Admin User",
      email: "sh20raj@gmail.com",
      image: "https://avatars.githubusercontent.com/u/1",
    },
  });

  // Create categories based on README features
  const categories = [
    { name: "Landing Pages", slug: "landing-pages" },
    { name: "SaaS Solutions", slug: "saas-solutions" },
    { name: "Telegram Bots", slug: "telegram-bots" },
    { name: "Fullstack Apps", slug: "fullstack-apps" },
    { name: "3D Models", slug: "3d-models" },
    { name: "UI Components", slug: "ui-components" },
    { name: "API Services", slug: "api-services" },
    { name: "Mobile Apps", slug: "mobile-apps" },
    { name: "WordPress Themes", slug: "wordpress-themes" },
    { name: "Email Templates", slug: "email-templates" },
    { name: "Design Systems", slug: "design-systems" },
    { name: "Analytics Tools", slug: "analytics-tools" },
    { name: "Chrome Extensions", slug: "chrome-extensions" },
    { name: "AI Models", slug: "ai-models" },
  ];

  for (const category of categories) {
    await prisma.category.upsert({
      where: { slug: category.slug },
      update: {},
      create: category,
    });
  }

  // Create sample products
  const sampleProducts = [
    {
      name: "Premium Landing Page Template",
      description: "High-converting, responsive landing page template with modern design",
      smallDescription: "Boost your conversion rates with our premium template",
      price: 99.99,
      currentPrice: 79.99,
      images: ["/products/landing-1.jpg", "/products/landing-2.jpg"],
      poster: "/products/landing-poster.jpg",
      slug: "premium-landing-template",
      purchaseLink: "https://vaultora.com/purchase/premium-landing-template",
      demoLink: "https://demo.vaultora.com/premium-landing-template",
      demoVideo: "https://vaultora.com/videos/premium-landing-demo.mp4",
      stock: 100,
      featured: true,
      categorySlug: "landing-pages",
    },
    {
      name: "Enterprise SaaS Boilerplate",
      description: "Production-ready SaaS starter with authentication, billing, and admin dashboard",
      smallDescription: "Launch your SaaS faster with our enterprise boilerplate",
      price: 299.99,
      currentPrice: 249.99,
      images: ["/products/saas-1.jpg", "/products/saas-2.jpg"],
      poster: "/products/saas-poster.jpg",
      slug: "enterprise-saas-boilerplate",
      purchaseLink: "https://vaultora.com/purchase/enterprise-saas-boilerplate",
      demoLink: "https://demo.vaultora.com/enterprise-saas",
      demoVideo: "https://vaultora.com/videos/saas-demo.mp4",
      stock: 50,
      featured: true,
      categorySlug: "saas-solutions",
    },
    {
      name: "AI Chat Assistant Bot",
      description: "Advanced Telegram bot with AI capabilities for customer support",
      smallDescription: "24/7 customer support with AI-powered chat bot",
      price: 149.99,
      currentPrice: 129.99,
      images: ["/products/bot-1.jpg", "/products/bot-2.jpg"],
      poster: "/products/bot-poster.jpg",
      slug: "ai-chat-assistant",
      purchaseLink: "https://vaultora.com/purchase/ai-chat-assistant",
      demoLink: "https://t.me/VaultoraDemo_bot",
      demoGIF: "/products/bot-demo.gif",
      stock: 200,
      featured: false,
      categorySlug: "telegram-bots",
    },
  ];

  for (const product of sampleProducts) {
    const category = await prisma.category.findUnique({
      where: { slug: product.categorySlug },
    });

    const { categorySlug, ...productData } = product;

    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {},
      create: {
        ...productData,
        userId: user.id,
        categoryId: category.id,
      },
    });
  }

  // Create sample reviews
  const reviews = [
    {
      rating: 5,
      comment: "Excellent product, saved us weeks of development time!",
      productSlug: "premium-landing-template",
    },
    {
      rating: 4,
      comment: "Great features and support. Would recommend!",
      productSlug: "enterprise-saas-boilerplate",
    },
  ];

  for (const review of reviews) {
    const product = await prisma.product.findUnique({
      where: { slug: review.productSlug },
    });

    const { productSlug, ...reviewData } = review;

    await prisma.review.create({
      data: {
        ...reviewData,
        userId: user.id,
        productId: product.id,
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });