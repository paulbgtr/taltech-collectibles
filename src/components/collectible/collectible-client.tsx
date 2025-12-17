"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { RarityBadge } from "@/components/rarity-badge";
import { Rarity } from "@/types/collectible";
import { Separator } from "@/components/ui/separator";
import { Details } from "@/components/collectible/details";
import Image from "next/image";
import { parseCreatorCode } from "@/lib/utils";
import { ModelSection } from "./model-section";

import { Collectible } from "@/types/collectible";

const getImageUrl = (id: string) => `/collectibles/${id}.jpg`;
const getModelUrl = (id: string) => `/models/${id}.glb`;

type Props = {
  collectible: Collectible;
};

export const CollectibleClient = ({ collectible }: Props) => {
  const searchParams = useSearchParams();
  const rawCode = searchParams.get("code");
  const creatorCode = parseCreatorCode(rawCode);

  const modelUrl = getModelUrl(collectible.id);

  return (
    <>
      <section className="border-b bg-gradient-to-b from-background via-background to-muted/40">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
          <div className="mb-6 text-xs">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-base leading-none">←</span>
              <span className="uppercase tracking-[0.18em]">
                Back to collection
              </span>
            </Link>
          </div>

          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center">
            {/* LEFT SIDE */}
            <div className="space-y-6 text-center lg:text-left max-w-xl">
              {/* Tagline */}
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {collectible.tagline}
              </p>

              {/* Name */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight">
                {collectible.name}
              </h1>

              {/* Badge */}
              <div className="flex justify-center lg:justify-start">
                <RarityBadge size="sm" rarity={collectible.rarity as Rarity} />
              </div>

              {/* Blurb */}
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {collectible.blurb}
              </p>
            </div>

            <ModelSection creatorCode={creatorCode} modelUrl={modelUrl} />
          </div>
        </div>
      </section>

      {/* DETAILS + STORY */}
      <section className="px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* About + Meta */}
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
            {/* STORY POINTS */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                Story & background
              </h2>

              <ul className="space-y-3 text-muted-foreground">
                {collectible.story.map((point, i) => (
                  <li key={i} className="flex gap-3 text-base leading-relaxed">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-primary/70 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* META CARD */}
            <Details
              rarity={collectible.rarity}
              id={collectible.id}
              meta={collectible.meta}
              creatorCode={creatorCode}
            />
          </div>

          <Separator />

          {/* IMAGE SECTION */}
          <div className="grid gap-8 max-w-3xl mx-auto items-start">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                Visual reference
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                A visual look at the real-world object or place related to the
                collectible.
              </p>
            </div>

            <div className="relative aspect-video sm:aspect-[4/3] md:aspect-[16/10] w-full overflow-hidden rounded-2xl bg-muted border border-border/70">
              <Image
                src={getImageUrl(collectible.id)}
                alt={collectible.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
