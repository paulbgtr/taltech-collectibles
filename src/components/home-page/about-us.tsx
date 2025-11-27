import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Sparkles, Leaf, Gift, Users } from "lucide-react";

const Tag = ({ children }: { children: React.ReactNode }) => (
  <Badge
    variant="outline"
    className="rounded-full px-3 py-1 text-[0.7rem] tracking-[0.18em] uppercase text-muted-foreground"
  >
    {children}
  </Badge>
);

export const AboutUs = () => {
  return (
    <section
      aria-labelledby="about-title"
      className="w-full px-4 py-16 md:py-20 max-w-6xl mx-auto"
    >
      {/* Header */}
      <div className="w-full flex flex-col gap-4 mb-10 md:mb-12 text-center md:text-left">
        <h2
          id="about-title"
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
        >
          About the project
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0">
          A small, student-built experiment in physical collectibles with a
          digital layer, designed at TalTech and grounded in real places on
          campus.
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-12">
        <Tag>Student-led</Tag>
        <Tag>TalTech Heritage</Tag>
        <Tag>Sustainable Materials</Tag>
        <Tag>Open Source</Tag>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full mb-14">
        <Card className="p-6 md:p-7 flex flex-col items-start text-left gap-3 border-border/60 bg-card/85 backdrop-blur-sm hover:bg-accent/40 transition-colors">
          <div className="p-2.5 rounded-full bg-primary/10 border border-border/60">
            <Gift className="h-5 w-5 text-primary" />
          </div>
          <h3 className="font-semibold text-base md:text-lg">
            Objects with stories
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Each keychain is mapped to a specific place, moment, or symbol at
            TalTech, with context you unlock digitally.
          </p>
        </Card>

        <Card className="p-6 md:p-7 flex flex-col items-start text-left gap-3 border-border/60 bg-card/85 backdrop-blur-sm hover:bg-accent/40 transition-colors">
          <div className="p-2.5 rounded-full bg-emerald-600/10 border border-border/60">
            <Leaf className="h-5 w-5 text-emerald-600" />
          </div>
          <h3 className="font-semibold text-base md:text-lg">
            Materials & packaging
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We experiment with more sustainable materials and keep the physical
            footprint small while the digital part does the heavy lifting.
          </p>
        </Card>

        <Card className="p-6 md:p-7 flex flex-col items-start text-left gap-3 border-border/60 bg-card/85 backdrop-blur-sm hover:bg-accent/40 transition-colors">
          <div className="p-2.5 rounded-full bg-primary/10 border border-border/60">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <h3 className="font-semibold text-base md:text-lg">Digital layer</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Scan to see 3D models, history, and small details that don&apos;t
            fit on a keychain. Physical object first, museum-in-your-pocket
            second.
          </p>
        </Card>
      </div>

      {/* Team Section */}
      <div className="border-t border-border/60 pt-8 md:pt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Users className="h-5 w-5" />
          <span className="text-sm font-medium">
            Built at TalTech by a small team of students.
          </span>
        </div>
        <div className="flex flex-wrap justify-center md:justify-end gap-2">
          <Badge variant="outline" className="px-3 py-1 text-sm">
            Pavel
          </Badge>
          <Badge variant="outline" className="px-3 py-1 text-sm">
            Arseni
          </Badge>
          <Badge variant="outline" className="px-3 py-1 text-sm">
            Alexander
          </Badge>
          <Badge variant="outline" className="px-3 py-1 text-sm">
            Tristan
          </Badge>
        </div>
      </div>
    </section>
  );
};
