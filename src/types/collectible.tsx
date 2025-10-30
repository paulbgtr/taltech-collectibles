type Rarity = "Rare" | "Uncommon" | "Common";

export type Collectible = {
  id: string;
  name: string;
  description: string;
  rarity: Rarity;
};
