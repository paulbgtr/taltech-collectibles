import { Badge } from "../ui/badge";
import { Sparkles } from "lucide-react";

export const Introduction = () => {
  return (
    <section className="w-full max-w-2xl mb-12 text-center space-y-3">
      <Badge className="rounded-full px-3 py-1 mx-auto flex items-center gap-2">
        <Sparkles className="h-4 w-4" /> NEW: Museum in Your Pocket
      </Badge>
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
        TalTech Collectible Keychains
      </h1>
      <p className="text-lg md:text-xl">
        Discover <span className="font-bold">playful</span>,{" "}
        <span className="font-bold">sustainable</span> keychains—each linking to
        a digital story.
      </p>
    </section>
  );
};
