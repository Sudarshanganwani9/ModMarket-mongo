import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Download, Eye, Heart, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    images: string[];
    category: string;
    seller: {
      name: string;
      avatar?: string;
    };
    rating: number;
    downloadCount: number;
    isFeatured?: boolean;
    isVerified?: boolean;
  };
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const { name, description, price, images, category, seller, rating, downloadCount, isFeatured, isVerified } = product;

  return (
    <Card className={cn(
      "group overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 border-border/50 bg-card/50 backdrop-blur-sm",
      isFeatured && "ring-2 ring-primary/50",
      className
    )}>
      <CardHeader className="p-0">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={images[0] || "/placeholder.svg"}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            {isFeatured && (
              <Badge className="bg-warning/90 text-warning-foreground">Featured</Badge>
            )}
            {isVerified && (
              <Badge className="bg-success/90 text-success-foreground">
                <Shield className="h-3 w-3 mr-1" />
                Verified
              </Badge>
            )}
          </div>

          {/* Actions */}
          <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button size="icon" variant="secondary" className="h-8 w-8 bg-background/80 backdrop-blur-sm">
              <Heart className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="secondary" className="h-8 w-8 bg-background/80 backdrop-blur-sm">
              <Eye className="h-4 w-4" />
            </Button>
          </div>

          {/* Category */}
          <div className="absolute bottom-3 left-3">
            <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
              {category}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4 space-y-3">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg leading-tight line-clamp-1 group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Seller Info */}
        <div className="flex items-center gap-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src={seller.avatar} />
            <AvatarFallback className="text-xs">{seller.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="text-sm text-muted-foreground">{seller.name}</span>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1 text-warning">
            <Star className="h-4 w-4 fill-current" />
            <span className="font-medium">{rating.toFixed(1)}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Download className="h-4 w-4" />
            <span>{downloadCount.toLocaleString()}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-foreground">
            {price === 0 ? "Free" : `$${price}`}
          </span>
        </div>
        <Button 
          className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-opacity"
          size="sm"
        >
          {price === 0 ? "Download" : "Purchase"}
        </Button>
      </CardFooter>
    </Card>
  );
}