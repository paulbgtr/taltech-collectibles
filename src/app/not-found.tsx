import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center space-y-8">
      <div className="space-y-3">
        <span className="inline-flex items-center gap-2 text-4xl font-extrabold text-primary">
          <Sparkles className="h-8 w-8 animate-pulse" />
          404
        </span>
        <h2 className="text-3xl md:text-4xl font-bold">Page Not Found</h2>
        <p className="md:text-lg text-muted-foreground max-w-xl mx-auto">
          Uh oh! Looks like this TalTech collectible{" "}
          <strong>doesn&apos;t exist</strong>—or maybe it’s waiting to be
          discovered.
        </p>
      </div>
      <Button asChild className="mt-6 px-8 py-3 text-base font-semibold">
        <Link href="/">Go back home</Link>
      </Button>
      <div className="opacity-80 text-[72px] pointer-events-none select-none">
        🦊
      </div>
    </main>
  );
}
