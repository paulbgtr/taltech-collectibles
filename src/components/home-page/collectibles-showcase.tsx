import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Collectible } from "@/types/collectible";
import { Star } from "lucide-react";

const collectibles: Collectible[] = [
  {
    name: "Juulius Mascot",
    description:
      "TalTech’s beloved mascot as a pocket-sized companion—each tells a piece of campus lore.",
    rarity: "Rare",
  },
  {
    name: "Library Building",
    description:
      "A stylized miniature of the iconic library, referencing its cosmic architecture.",
    rarity: "Uncommon",
  },
  {
    name: "TalTech Logo",
    description:
      "Classic circular logo—timeless, minimal, and highly collectible.",
    rarity: "Common",
  },
];

export const CollectiblesShowcase = () => {
  return (
    <section className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
      {collectibles.map((item) => (
        <Card
          key={item.name}
          className="rounded-3xl shadow-lg hover:shadow-2xl transition"
        >
          <CardHeader className="flex flex-col items-center">
            {/* Placeholder for now; replace with <img> for real assets */}
            <div className="h-28 w-28 rounded-full flex items-center justify-center mb-4">
              <span className="text-5xl" role="img" aria-label={item.name}>
                {item.name === "Juulius Mascot"
                  ? "🦊"
                  : item.name === "Library Building"
                    ? "🏛️"
                    : "🟣"}
              </span>
            </div>
            <CardTitle className="text-2xl font-semibold">
              {item.name}
            </CardTitle>
            <Badge
              className={`mt-2 ${
                item.rarity === "Rare"
                  ? "bg-yellow-200 text-yellow-800"
                  : item.rarity === "Uncommon"
                    ? "bg-blue-200 text-blue-900"
                    : "bg-gray-200 text-gray-600"
              }`}
            >
              <Star className="inline-block mr-1 h-4 w-4 -mt-1" /> {item.rarity}
            </Badge>
          </CardHeader>
          <CardContent>
            <p className="text-base text-center">{item.description}</p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
