export type Rarity = "epic" | "rare" | "common";

export type CollectibleMeta = {
  introduced?: number;
  designedBy?: string;
  role?: string;
  material?: string;
} & Record<string, string | number | undefined>;

export type Collectible = {
  id: string;
  name: string;
  rarity: Rarity;
  tagline: string;
  blurb: string;
  meta: CollectibleMeta;
  story: string[];
};
