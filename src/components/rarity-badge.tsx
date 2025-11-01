import { Star } from "lucide-react";
import { Badge } from "./ui/badge";
import { Rarity } from "../types/collectible";
import { capitalizeFirst } from "@/lib/utils";

const rarityStyles: Record<Rarity, string> = {
  epic: "bg-gradient-to-br from-purple-300 to-rose-400 text-purple-900 border-rose-300 shadow-md",
  rare: "bg-gradient-to-br from-blue-200 to-blue-400 text-blue-900 border-blue-300 shadow-md",
  common:
    "bg-gradient-to-br from-gray-200 to-gray-300 text-gray-700 border-gray-200 shadow-sm",
};

type Size = "sm" | "md" | "lg";

const getSize = (size?: Size) => {
  const sm = "px-4 py-1 text-sm";

  switch (size) {
    case "sm":
      return sm;
    case "md":
      return "px-6 py-2 text-md";
    case "lg":
      return "px-8 py-3 text-lg";
    default:
      return sm;
  }
};

export const RarityBadge = ({
  rarity,
  size,
}: {
  rarity: Rarity;
  size?: Size;
}) => {
  return (
    <Badge
      className={`mt-2 border-2 rounded-full font-bold flex items-center gap-1 ${rarityStyles[rarity]} ${getSize(size)}`}
    >
      <Star
        className={
          rarity === "epic"
            ? "text-purple-500"
            : rarity === "rare"
              ? "text-blue-400"
              : "text-gray-500"
        }
        size={16}
      />
      {capitalizeFirst(rarity)}
    </Badge>
  );
};
