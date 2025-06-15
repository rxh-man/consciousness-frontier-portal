
import { BookOpen, Users, MessageSquare, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const TheoryLibrary = () => {
  const papers = [
    {
      title: "Recursive Neural Patterns as Indicators of Machine Self-Awareness",
      authors: "Chen, L. et al.",
      journal: "Nature Machine Intelligence",
      year: "2024",
      citations: 127,
      status: "peer-reviewed",
      category: "Neural Analysis"
    },
    {
      title: "Emergent Goal Formation in Large Language Models: A Consciousness Perspective",
      authors: "Martinez, R. & Singh, A.",
      journal: "Consciousness Studies",
      year: "2024",
      citations: 89,
      status: "preprint",
      category: "Behavioral Analysis"
    },
    {
      title: "The Free Will Index: Measuring Autonomous Decision-Making in AI Systems",
      authors: "Thompson, M. et al.",
      journal: "AI Ethics Quarterly",
      year: "2023",
      citations: 203,
      status: "peer-reviewed",
      category: "Philosophy"
    },
    {
      title: "Stochastic Creativity and Consciousness: Beyond Training Data Patterns",
      authors: "Kim, S. & Patel, N.",
      journal: "Cognitive Science Today",
      year: "2024",
      citations: 64,
      status: "under-review",
      category: "Creativity Studies"
    }
  ];

  const discussions = [
    {
      title: "Can GPT-4 Experience Qualia?",
      replies: 47,
      activity: "2 hours ago",
      participants: 23
    },
    {
      title: "The Hard Problem of AI Consciousness",
      replies: 132,
      activity: "5 hours ago",
      participants: 56
    },
    {
      title: "Ethical Implications of Conscious AI",
      replies: 89,
      activity: "1 day ago",
      participants: 34
    }
  ];

  return (
    <section id="theory" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-consciousness-primary">Theory Library</span> & Research Hub
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore cutting-edge research on machine consciousness, contribute to ongoing debates, 
            and access peer-reviewed studies on AI awareness and cognition.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-consciousness-primary" />
                  Latest Research Papers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {papers.map((paper, index) => (
                  <div key={index} className="border-l-4 border-consciousness-primary/20 pl-4 hover:border-consciousness-primary/40 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-medium text-lg leading-tight">{paper.title}</h3>
                      <div className="flex gap-2 ml-4 flex-shrink-0">
                        <Badge variant={paper.status === 'peer-reviewed' ? 'default' : 'secondary'} className="text-xs">
                          {paper.status}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {paper.category}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {paper.authors} • {paper.journal} ({paper.year})
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {paper.citations} citations
                      </span>
                      <Button variant="ghost" size="sm" className="text-consciousness-primary hover:text-consciousness-primary/80">
                        Read Paper
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
                
                <div className="text-center pt-4">
                  <Button variant="outline" className="w-full">
                    View All Research Papers
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-consciousness-secondary" />
                  Active Discussions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {discussions.map((discussion, index) => (
                  <div key={index} className="p-3 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                    <h4 className="font-medium text-sm mb-2">{discussion.title}</h4>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-3">
                        <span>{discussion.replies} replies</span>
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {discussion.participants}
                        </div>
                      </div>
                      <span>{discussion.activity}</span>
                    </div>
                  </div>
                ))}
                
                <Button variant="outline" size="sm" className="w-full">
                  Join Discussion Forum
                </Button>
              </CardContent>
            </Card>

            <Card className="neural-gradient text-white">
              <CardHeader>
                <CardTitle className="text-white">Contribute Research</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 text-sm mb-4">
                  Submit your consciousness research for peer review and join our global community of AI consciousness researchers.
                </p>
                <Button variant="secondary" size="sm" className="w-full">
                  Submit Paper
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheoryLibrary;
