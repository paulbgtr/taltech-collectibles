import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { RarityBadge } from "../rarity-badge";
import { Rarity } from "@/types/collectible";

const collectibles = [
  {
    id: "juulius",
    name: "Juulius Mascot",
    description:
      "TalTech’s beloved mascot as a pocket-sized companion—each tells a piece of campus lore.",
    rarity: "epic",
  },
  {
    id: "library",
    name: "Library Building",
    description:
      "A stylized miniature of the iconic library, referencing its cosmic architecture.",
    rarity: "rare",
  },
  {
    id: "logo",
    name: "TalTech Logo",
    description:
      "Classic circular logo—timeless, minimal, and highly collectible.",
    rarity: "common",
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
              <RarityBadge rarity={item.rarity as Rarity} />
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
