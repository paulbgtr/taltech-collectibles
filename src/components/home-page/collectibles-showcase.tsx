import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Collectible } from "@/types/collectible";
import { Star } from "lucide-react";
import Link from "next/link";

const rarityStyles = {
  Rare: "bg-gradient-to-br from-yellow-300 to-amber-400 text-yellow-900 border-yellow-300 shadow-md",
  Uncommon:
    "bg-gradient-to-br from-blue-200 to-blue-400 text-blue-900 border-blue-300 shadow-md",
  Common:
    "bg-gradient-to-br from-gray-200 to-gray-300 text-gray-700 border-gray-200 shadow-sm",
};

const collectibles: Collectible[] = [
  {
    id: "juulius",
    name: "Juulius Mascot",
    description:
      "TalTech’s beloved mascot as a pocket-sized companion—each tells a piece of campus lore.",
    rarity: "Rare",
  },
  {
    id: "library",
    name: "Library Building",
    description:
      "A stylized miniature of the iconic library, referencing its cosmic architecture.",
    rarity: "Uncommon",
  },
  {
    id: "logo",
    name: "TalTech Logo",
    description:
      "Classic circular logo—timeless, minimal, and highly collectible.",
    rarity: "Common",
  },
];

export const CollectiblesShowcase = () => {
  return (
    <section className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {collectibles.map((item) => (
        <Link
          key={item.name}
          href={`/collectibles/${item.id}`}
          className="transition duration-300 hover:opacity-80 hover:scale-105"
        >
          <Card className="h-full border-none transition-all duration-300 backdrop-blur-md group">
            <CardHeader className="flex flex-col items-center pb-0">
              <div className="h-28 w-28 rounded-2xl bg-gradient-to-b from-primary/30 to-muted flex items-center justify-center mb-4 shadow transition-transform text-6xl">
                <span role="img" aria-label={item.name}>
                  {item.name === "Juulius Mascot"
                    ? "🦊"
                    : item.name === "Library Building"
                      ? "🏛️"
                      : "🟣"}
                </span>
              </div>
              <CardTitle className="text-2xl font-bold text-center">
                {item.name}
              </CardTitle>
              <Badge
                className={`mt-2 px-4 py-1 border-2 font-semibold text-sm flex items-center gap-1 ${rarityStyles[item.rarity]}`}
              >
                <Star
                  className={
                    item.rarity === "Rare"
                      ? "text-yellow-500"
                      : item.rarity === "Uncommon"
                        ? "text-blue-400"
                        : "text-gray-500"
                  }
                  size={16}
                />
                {item.rarity}
              </Badge>
            </CardHeader>
            <CardContent>
              <p className="text-base text-center text-muted-foreground mt-2">
                {item.description}
              </p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </section>
  );
};
