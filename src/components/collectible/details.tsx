"use client";

import { useSearchParams } from "next/navigation";

import { CodeIcon } from "./code-icon";
import { Rarity } from "@/types/collectible";
import { parseCreatorCode } from "@/lib/utils";

export const Details = ({ rarity, id }: { rarity: Rarity; id: string }) => {
  const searchParams = useSearchParams();
  const rawCode = searchParams.get("code");

  const creatorCode = parseCreatorCode(rawCode);
  const hasCreatorCode = !!creatorCode;

  return (
    <div className="rounded-2xl border border-border/70 bg-muted/40 p-5 space-y-4 text-sm">
      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        Details
      </h3>
      <dl className="space-y-3">
        <div className="flex items-center justify-between gap-4">
          <dt className="text-xs text-muted-foreground uppercase tracking-[0.16em]">
            ID
          </dt>
          <dd className="font-mono text-xs text-foreground">{id}</dd>
        </div>

        <div className="flex items-center justify-between gap-4">
          <dt className="text-xs text-muted-foreground uppercase tracking-[0.16em]">
            Rarity
          </dt>
          <dd className="font-mono text-xs capitalize">{rarity}</dd>
        </div>

        <div className="flex items-center justify-between gap-4">
          <dt className="text-xs text-muted-foreground uppercase tracking-[0.16em]">
            Creator code
          </dt>
          <dd className="flex items-center gap-2">
            {hasCreatorCode ? (
              <>
                <CodeIcon code={creatorCode!} size={28} />
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
