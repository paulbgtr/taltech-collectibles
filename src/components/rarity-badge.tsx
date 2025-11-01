import { Star } from "lucide-react";
import { Badge } from "./ui/badge";
import { Rarity } from "../types/collectible";
import { capitalizeFirst } from "@/lib/utils";

const rarityStyles: Record<Rarity, string> = {
  rare: "bg-gradient-to-br from-yellow-300 to-amber-400 text-yellow-900 border-yellow-300 shadow-md",
  uncommon:
    "bg-gradient-to-br from-blue-200 to-blue-400 text-blue-900 border-blue-300 shadow-md",
  common:
    "bg-gradient-to-br from-gray-200 to-gray-300 text-gray-700 border-gray-200 shadow-sm",
};

export const RarityBadge = ({ rarity }: { rarity: Rarity }) => {
  return (
    <Badge
      className={`mt-2 px-4 py-1 border-2 font-semibold text-sm flex items-center gap-1 ${rarityStyles[rarity]}`}
    >
      <Star
        className={
          rarity === "rare"
            ? "text-yellow-500"
            : rarity === "uncommon"
              ? "text-blue-400"
              : "text-gray-500"
        }
        size={16}
      />
      {capitalizeFirst(rarity)}
    </Badge>
  );
};
