
import { Brain, Github, Twitter, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="neural-gradient p-2 rounded-lg">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold bg-gradient-to-r from-consciousness-primary to-consciousness-secondary bg-clip-text text-transparent">
                ConsciousnessNet
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              The world's first open-source platform for measuring AI consciousness and emergent cognitive behaviors.
            </p>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-consciousness-primary transition-colors">Consciousness Benchmark</a></li>
              <li><a href="#" className="hover:text-consciousness-primary transition-colors">Free Will Index</a></li>
              <li><a href="#" className="hover:text-consciousness-primary transition-colors">Self-Awareness Heatmap</a></li>
              <li><a href="#" className="hover:text-consciousness-primary transition-colors">API Documentation</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Research</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-consciousness-primary transition-colors">Theory Library</a></li>
              <li><a href="#" className="hover:text-consciousness-primary transition-colors">Peer Review Process</a></li>
              <li><a href="#" className="hover:text-consciousness-primary transition-colors">Discussion Forum</a></li>
              <li><a href="#" className="hover:text-consciousness-primary transition-colors">Submit Research</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get notified about new consciousness research and platform updates.
            </p>
            <div className="flex space-x-2">
              <Input placeholder="Your email" className="text-sm" />
              <Button size="sm" className="neural-gradient">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 ConsciousnessNet.org. Open source research platform.
            </p>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-consciousness-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-consciousness-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-consciousness-primary transition-colors flex items-center gap-1">
                Ethics Guidelines
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
          <div className="text-center mt-6 pt-6 border-t">
            <p className="text-xs text-muted-foreground">
              A project by <span className="font-medium">Rahman Mohammad Ali</span> • 
              <a href="https://linkedin.com/in/rxhman" className="text-consciousness-primary hover:underline ml-1">
                linkedin.com/in/rxhman
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
