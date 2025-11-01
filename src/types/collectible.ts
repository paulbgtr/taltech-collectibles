export type Rarity = "epic" | "rare" | "common";

export type Collectible = {
  id: string;
  name: string;
  description: string;
  rarity: Rarity;
  history: string;
};
