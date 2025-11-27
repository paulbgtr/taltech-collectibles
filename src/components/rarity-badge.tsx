import { Badge } from "./ui/badge";
import { Rarity } from "../types/collectible";
import { cn } from "@/lib/utils";

type Size = "sm" | "md" | "lg";

const rarityStyles: Record<
  Rarity,
  {
    badge: string;
    dot: string;
    label: string;
  }
> = {
  epic: {
    badge: "border-purple-500/50 text-purple-600 bg-purple-500/5",
    dot: "bg-purple-500",
    label: "Epic",
  },
  rare: {
    badge: "border-sky-500/50 text-sky-600 bg-sky-500/5",
    dot: "bg-sky-500",
    label: "Rare",
  },
  common: {
    badge: "border-muted-foreground/30 text-muted-foreground bg-muted/40",
    dot: "bg-muted-foreground/70",
    label: "Common",
  },
};

const sizeStyles: Record<Size, string> = {
  sm: "px-2.5 py-0.5 text-[0.65rem]",
  md: "px-3 py-0.5 text-xs",
  lg: "px-3.5 py-1 text-sm",
};

export const RarityBadge = ({
  rarity,
  size = "sm",
}: {
  rarity: Rarity;
  size?: Size;
}) => {
  const config = rarityStyles[rarity];

  return (
    <Badge
      variant="outline"
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border font-medium",
        "uppercase tracking-[0.16em] bg-background/80 backdrop-blur-sm",
        sizeStyles[size],
        config.badge,
      )}
    >
      <span
        className={cn("h-1.5 w-1.5 rounded-full", config.dot)}
        aria-hidden="true"
      />
      <span>{config.label}</span>
    </Badge>
  );
};
