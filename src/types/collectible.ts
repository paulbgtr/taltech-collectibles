export type Rarity = "rare" | "uncommon" | "common";

export type Collectible = {
  id: string;
  name: string;
  description: string;
  rarity: Rarity;
};
