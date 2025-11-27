import { Badge } from "../ui/badge";
import { Sparkles } from "lucide-react";

export const Introduction = () => {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-16 md:py-24 lg:py-28">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-center">
        {/* Left side: copy */}
        <div className="space-y-6">
          <Badge className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-3 py-1 text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground">
            <Sparkles className="h-3 w-3" />
            <span>Museum in your pocket</span>
          </Badge>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
              TalTech collectible keychains
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl">
              Physical keychains with a{" "}
              <span className="font-semibold text-foreground">
                digital twin
              </span>
              . Scan, unlock the story, and carry a piece of{" "}
              <span className="font-semibold">campus history</span> in your
              pocket.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>Sustainable materials</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
              <span>Each linked to a unique story</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              <span>Designed at TalTech</span>
            </div>
          </div>
        </div>

        {/* Right side: supporting panel */}
        <div className="hidden lg:block">
          <div className="relative rounded-3xl border border-border/60 bg-gradient-to-b from-muted/70 via-background to-background p-6 shadow-sm">
            <div className="mb-4 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
              Collection overview
            </div>

            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1 w-6 rounded-full bg-primary/60" />
                <div>
                  <p className="font-medium text-foreground">Limited runs</p>
                  <p className="text-xs">
                    Each design is tied to a specific place, story, or moment at
                    TalTech.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1 w-6 rounded-full bg-primary/60" />
                <div>
                  <p className="font-medium text-foreground">
                    Digital-first experience
                  </p>
                  <p className="text-xs">
                    Scan to explore 3D models, history, and behind-the-scenes
                    notes.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1 w-6 rounded-full bg-primary/60" />
                <div>
                  <p className="font-medium text-foreground">
                    Built for students & alumni
                  </p>
                  <p className="text-xs">
                    A quiet flex for people who actually know where these places
                    are.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
