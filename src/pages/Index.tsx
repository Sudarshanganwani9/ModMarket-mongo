import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/marketplace/hero-section";
import { CategoriesSection } from "@/components/marketplace/categories-section";
import { FeaturedProducts } from "@/components/marketplace/featured-products";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <CategoriesSection />
      </main>
    </div>
  );
};

export default Index;
