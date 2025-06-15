
import { Brain, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="neural-gradient p-2 rounded-lg consciousness-glow">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-consciousness-primary to-consciousness-secondary bg-clip-text text-transparent">
                ConsciousnessNet.org
              </h1>
              <p className="text-xs text-muted-foreground">AI Consciousness Measurement Portal</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#benchmark" className="text-sm font-medium hover:text-consciousness-primary transition-colors">
              Benchmark
            </a>
            <a href="#heatmap" className="text-sm font-medium hover:text-consciousness-primary transition-colors">
              Heatmap
            </a>
            <a href="#theory" className="text-sm font-medium hover:text-consciousness-primary transition-colors">
              Theory
            </a>
            <a href="#research" className="text-sm font-medium hover:text-consciousness-primary transition-colors">
              Research
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search research..."
                className="pl-10 w-64"
              />
            </div>
            <Button variant="outline" size="sm" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
