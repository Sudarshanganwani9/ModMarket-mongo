import { ProductCard } from "./product-card";

// Mock data for featured products
const featuredProducts = [
  {
    id: "1",
    name: "Advanced Todo App with Backend",
    description: "Complete React + Node.js todo application with authentication, real-time updates, and cloud deployment.",
    price: 29.99,
    images: ["/placeholder.svg"],
    category: "Source Code",
    seller: {
      name: "DevMaster",
      avatar: "/placeholder.svg"
    },
    rating: 4.8,
    downloadCount: 1243,
    isFeatured: true,
    isVerified: true
  },
  {
    id: "2",
    name: "Social Media Manager APK",
    description: "Educational modified APK for learning social media automation techniques and API integration.",
    price: 0,
    images: ["/placeholder.svg"],
    category: "Android Apps",
    seller: {
      name: "APKEducator",
      avatar: "/placeholder.svg"
    },
    rating: 4.6,
    downloadCount: 2156,
    isFeatured: true,
    isVerified: true
  },
  {
    id: "3",
    name: "E-commerce Dashboard",
    description: "Modern admin dashboard with analytics, inventory management, and customer insights built with React.",
    price: 49.99,
    images: ["/placeholder.svg"],
    category: "UI/UX Resources",
    seller: {
      name: "UIExpert",
      avatar: "/placeholder.svg"
    },
    rating: 4.9,
    downloadCount: 876,
    isFeatured: true,
    isVerified: true
  },
  {
    id: "4",
    name: "Game Engine Starter Kit",
    description: "2D game engine with physics, animation system, and level editor. Perfect for learning game development.",
    price: 19.99,
    images: ["/placeholder.svg"],
    category: "Game Mods",
    seller: {
      name: "GameDev Pro",
      avatar: "/placeholder.svg"
    },
    rating: 4.7,
    downloadCount: 654,
    isFeatured: true,
    isVerified: false
  }
];

export function FeaturedProducts() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked premium projects and APKs from our top developers and contributors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="text-primary hover:text-primary-glow transition-colors font-medium">
            View All Featured Projects →
          </button>
        </div>
      </div>
    </section>
  );
}