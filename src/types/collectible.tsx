type Rarity = "Rare" | "Uncommon" | "Common";

export type Collectible = {
  name: string;
  description: string;
  rarity: Rarity;
};
