import { Badge } from "../ui/badge";
import { Sparkles } from "lucide-react";

export const Introduction = () => {
  return (
    <section className="w-full max-w-2xl mx-auto py-20 md:py-28 flex flex-col items-center gap-8">
      <Badge className="rounded-full px-4 py-2 bg-primary/10 text-primary shadow-sm flex items-center gap-2 mb-2 text-base uppercase tracking-wide">
        <Sparkles className="h-5 w-5 animate-pulse" />
        Museum in Your Pocket
      </Badge>

      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-md">
        TalTech Collectible Keychains
      </h1>

      <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-xl">
        Discover <span className="font-bold text-foreground">playful</span>,{" "}
        <span className="font-bold text-green-600">sustainable</span>{" "}
        keychains—each linking to a unique digital story.
      </p>
    </section>
  );
};
