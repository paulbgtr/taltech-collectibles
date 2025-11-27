import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { RarityBadge } from "../rarity-badge";
import { Rarity } from "@/types/collectible";

const collectibles = [
  {
    id: "juulius",
    name: "Juulius Mascot",
    description:
      "TalTech’s mascot as a pocket-sized companion, tied to campus lore and student stories.",
    rarity: "epic",
  },
  {
    id: "library",
    name: "Library Building",
    description:
      "A miniature nod to the library’s brutalist silhouette and its role as a quiet orbit for students.",
    rarity: "rare",
  },
  {
    id: "logo",
    name: "TalTech Logo",
    description:
      "Minimal, recognizable, and designed for people who actually know where it comes from.",
    rarity: "common",
  },
];

const getCollectibleEmoji = (id: string) => {
  switch (id) {
    case "juulius":
      return "🦊";
    case "library":
      return "🏛️";
    case "logo":
      return "🟣";
    default:
      return "🔹";
  }
};

export const CollectiblesShowcase = () => {
  return (
    <section className="w-full max-w-5xl mx-auto mb-16 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {collectibles.map((item) => (
          <Link
            key={item.id}
            href={`/collectibles/${item.id}`}
            className="group block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Card className="h-full flex flex-col rounded-2xl border border-border/70 bg-card/85 backdrop-blur-sm shadow-sm transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-lg">
              <CardHeader className="flex flex-col gap-4 pb-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-16 items-center justify-center rounded-full bg-gradient-to-br from-muted to-background border border-border/60 text-xl">
                      <span aria-hidden="true">
                        {getCollectibleEmoji(item.id)}
                      </span>
                      <span className="sr-only">{item.name} icon</span>
                    </div>

                    <div className="space-y-1">
                      <CardTitle className="text-lg font-semibold tracking-tight">
                        {item.name}
                      </CardTitle>
                      <p className="text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
                        TalTech collectible
                      </p>
                    </div>
                  </div>

                  <RarityBadge rarity={item.rarity as Rarity} />
                </div>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col justify-between pt-0">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-4 flex items-center text-xs font-medium text-primary group-hover:text-primary/90">
                  <span>View collectible</span>
                  <span className="ml-1.5 translate-x-0 group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};
