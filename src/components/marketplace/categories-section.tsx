import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Smartphone, 
  Code, 
  Gamepad2, 
  Palette, 
  Database, 
  Globe, 
  Shield,
  Zap
} from "lucide-react";

interface Category {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  count: number;
  color: string;
}

const categories: Category[] = [
  {
    id: "android-apps",
    name: "Android Apps",
    description: "Modified and educational APKs",
    icon: <Smartphone className="h-6 w-6" />,
    count: 1247,
    color: "bg-green-500/20 text-green-400 border-green-500/30"
  },
  {
    id: "source-code",
    name: "Source Code",
    description: "Complete project repositories",
    icon: <Code className="h-6 w-6" />,
    count: 892,
    color: "bg-blue-500/20 text-blue-400 border-blue-500/30"
  },
  {
    id: "games",
    name: "Game Mods",
    description: "Game modifications and tools",
    icon: <Gamepad2 className="h-6 w-6" />,
    count: 634,
    color: "bg-purple-500/20 text-purple-400 border-purple-500/30"
  },
  {
    id: "ui-themes",
    name: "UI/UX Resources",
    description: "Themes, icons, and design assets",
    icon: <Palette className="h-6 w-6" />,
    count: 423,
    color: "bg-pink-500/20 text-pink-400 border-pink-500/30"
  },
  {
    id: "databases",
    name: "Databases",
    description: "Sample data and database schemas",
    icon: <Database className="h-6 w-6" />,
    count: 156,
    color: "bg-orange-500/20 text-orange-400 border-orange-500/30"
  },
  {
    id: "web-tools",
    name: "Web Tools",
    description: "Browser extensions and web apps",
    icon: <Globe className="h-6 w-6" />,
    count: 298,
    color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
  },
  {
    id: "security",
    name: "Security Tools",
    description: "Ethical hacking and security research",
    icon: <Shield className="h-6 w-6" />,
    count: 89,
    color: "bg-red-500/20 text-red-400 border-red-500/30"
  },
  {
    id: "automation",
    name: "Automation",
    description: "Scripts and automation tools",
    icon: <Zap className="h-6 w-6" />,
    count: 234,
    color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
  }
];

export function CategoriesSection() {
  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Explore Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our vast collection of projects, source code, and educational resources across multiple categories.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card 
              key={category.id}
              className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className={`inline-flex p-4 rounded-xl border transition-transform group-hover:scale-110 ${category.color}`}>
                  {category.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                  <Badge variant="secondary" className="bg-muted/50">
                    {category.count.toLocaleString()} items
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-border/50 hover:bg-accent">
            View All Categories
          </Button>
        </div>
      </div>
    </section>
  );
}