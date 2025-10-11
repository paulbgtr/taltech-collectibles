import { Introduction } from "@/components/home-page/introduction";
import { CollectiblesShowcase } from "@/components/home-page/collectibles-showcase";
import { Pillars } from "@/components/home-page/pillars";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background to-pink-300 px-4 py-10 flex flex-col items-center">
      <Introduction />

      <CollectiblesShowcase />

      <Pillars />
    </main>
  );
}
