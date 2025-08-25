import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Zap, Shield, Download } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-marketplace.jpg";

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Digital marketplace background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              Educational Use Only
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-br from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent leading-tight">
              Projects & ModAPKs
              <span className="block text-3xl md:text-4xl text-primary mt-2">Marketplace</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover, share, and download educational project files, source code, and legally modded APKs from talented developers worldwide.
            </p>
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search for projects, APKs, or developers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 text-lg bg-background/80 backdrop-blur-sm border-border/50 focus:border-primary transition-all"
              />
              <Button className="absolute right-2 top-2 bottom-2 px-6 bg-gradient-to-r from-primary to-primary-glow hover:opacity-90">
                Search
              </Button>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="p-3 rounded-full bg-primary/20">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-card-foreground">Fast Downloads</h3>
              <p className="text-sm text-muted-foreground">Lightning-fast download speeds with global CDN</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="p-3 rounded-full bg-success/20">
                <Shield className="h-6 w-6 text-success" />
              </div>
              <h3 className="font-semibold text-card-foreground">Secure & Scanned</h3>
              <p className="text-sm text-muted-foreground">All files are automatically scanned for security</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="p-3 rounded-full bg-warning/20">
                <Download className="h-6 w-6 text-warning" />
              </div>
              <h3 className="font-semibold text-card-foreground">Free & Premium</h3>
              <p className="text-sm text-muted-foreground">Both free downloads and premium content available</p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 text-lg px-8">
              Start Exploring
            </Button>
            <Button size="lg" variant="outline" className="border-border/50 hover:bg-accent text-lg px-8">
              Upload Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}