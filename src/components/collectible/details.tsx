"use client";

import { Rarity, CollectibleMeta } from "@/types/collectible";

type DetailsProps = {
  id: string;
  rarity: Rarity;
  meta: CollectibleMeta;
  creatorCode: string | null;
};

const LABELS: Record<keyof CollectibleMeta, string> = {
  introduced: "Introduced",
  designedBy: "Designed by",
  role: "Role",
  material: "Material",
};

const META_ORDER: (keyof CollectibleMeta)[] = [
  "role",
  "introduced",
  "designedBy",
  "material",
];

export const Details = ({ id, rarity, meta, creatorCode }: DetailsProps) => {
  const hasCreatorCode = !!creatorCode;

  const orderedMetaEntries = META_ORDER.map((key) =>
    meta[key] != null ? ([key, meta[key]] as const) : null,
  ).filter(Boolean) as [keyof CollectibleMeta, string | number][];

  return (
    <div className="rounded-2xl border border-border/70 bg-muted/40 p-5 space-y-4 text-sm">
      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        Details
      </h3>

      <dl className="space-y-3">
        {/* ID */}
        <div className="flex items-center justify-between gap-4">
          <dt className="text-xs text-muted-foreground uppercase tracking-[0.16em]">
            ID
          </dt>
          <dd className="font-mono text-xs text-foreground">{id}</dd>
        </div>

        {/* Rarity */}
        <div className="flex items-center justify-between gap-4">
          <dt className="text-xs text-muted-foreground uppercase tracking-[0.16em]">
            Rarity
          </dt>
          <dd className="text-xs capitalize font-mono">{rarity}</dd>
        </div>

        {/* Meta entries */}
        {orderedMetaEntries.map(([key, value]) => (
          <div key={key} className="flex items-center justify-between gap-4">
            <dt className="text-xs text-muted-foreground uppercase tracking-[0.16em]">
              {LABELS[key] ?? key}
            </dt>
            <dd className="text-xs text-foreground text-right">
              {typeof value === "number" ? value : value}
            </dd>
          </div>
        ))}

        {/* Creator code */}
        <div className="flex items-center justify-between gap-4 pt-2">
          <dt className="text-xs text-muted-foreground uppercase tracking-[0.16em]">
            Creator code
          </dt>
          <dd className="flex items-center gap-2 justify-end">
            {hasCreatorCode ? (
              <>
                <span className="hidden sm:inline text-[0.7rem] font-mono text-muted-foreground">
                  {creatorCode}
                </span>
              </>
            ) : (
              <span className="text-right text-[0.7rem] text-muted-foreground">
                Scan the keychain to view the creator code
              </span>
            )}
          </dd>
        </div>
      </dl>
    </div>
  );
};
