import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Sparkles, Leaf, Gift, Users } from "lucide-react";

export const AboutUs = () => {
  return (
    <section
      aria-labelledby="about-title"
      className="w-full flex flex-col items-center px-6 py-20 max-w-6xl mx-auto"
    >
      {/* Header Section */}
      <div className="text-center space-y-4 mb-12">
        <h2 id="about-title" className="text-5xl font-extrabold tracking-tight">
          About Us
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Experience TalTech's legacy—playful, sustainable, and collectible!
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 justify-center mb-16">
        <Badge variant="secondary" className="px-4 py-1.5">
          TalTech Heritage
        </Badge>
        <Badge variant="secondary" className="px-4 py-1.5">
          Eco-Friendly
        </Badge>
        <Badge variant="secondary" className="px-4 py-1.5">
          Collectible Fun
        </Badge>
        <Badge variant="secondary" className="px-4 py-1.5">
          Digital Twist
        </Badge>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-16">
        <Card className="p-8 flex flex-col items-center text-center space-y-3 border-border/50 hover:border-primary/50 transition-colors">
          <div className="p-3 rounded-full bg-primary/10">
            <Gift className="h-7 w-7 text-primary" />
          </div>
          <h3 className="font-bold text-lg">Unbox &amp; Collect</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Pocket-size TalTech stories waiting to be discovered
          </p>
        </Card>

        <Card className="p-8 flex flex-col items-center text-center space-y-3 border-border/50 hover:border-green-600/50 transition-colors">
          <div className="p-3 rounded-full bg-green-600/10">
            <Leaf className="h-7 w-7 text-green-600" />
          </div>
          <h3 className="font-bold text-lg">Eco Packaging</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Biodegradable materials with QR-powered experiences
          </p>
        </Card>

        <Card className="p-8 flex flex-col items-center text-center space-y-3 border-border/50 hover:border-primary/50 transition-colors">
          <div className="p-3 rounded-full bg-primary/10">
            <Sparkles className="h-7 w-7 text-primary" />
          </div>
          <h3 className="font-bold text-lg">Digital Museum</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Unlock interactive stories and exclusive content
          </p>
        </Card>
      </div>

      {/* Team Section */}
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Users className="h-5 w-5" />
          <span className="font-semibold text-foreground">Created by</span>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="outline" className="px-4 py-1.5">
            Pavel
          </Badge>
          <Badge variant="outline" className="px-4 py-1.5">
            Arseni
          </Badge>
          <Badge variant="outline" className="px-4 py-1.5">
            Alexander
          </Badge>
          <Badge variant="outline" className="px-4 py-1.5">
            Tristan
          </Badge>
        </div>
      </div>
    </section>
  );
};
