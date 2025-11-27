import Link from "next/link";
import Image from "next/image";

import ModelViewer from "@/components/model-viewer";
import { RarityBadge } from "@/components/rarity-badge";
import { Rarity } from "@/types/collectible";
import { Separator } from "@/components/ui/separator";
import { collectibles } from "@/data/collectibles";

import { Details } from "@/components/collectible/details";

const getModelUrl = (id: string) => {
  if (id === "juulius") {
    return `/models/library.glb`;
  }
  return `/models/${id}.glb`;
};

const getImageUrl = (id: string) => {
  return `/collectibles/${id}.jpg`;
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const collectible = collectibles.find((c) => c.id === id);

  if (!collectible) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-10">
        <div className="text-sm uppercase tracking-[0.18em] text-muted-foreground mb-2">
          404
        </div>
        <div className="text-xl font-semibold">Collectible not found.</div>
        <Link
          href="/"
          className="mt-4 text-sm text-muted-foreground hover:text-foreground underline underline-offset-4"
        >
          Back to homepage
        </Link>
      </div>
    );
  }

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-background via-background to-muted/40">
        <div className="max-w-6xl mx-auto px-4 py-8 md:py-12 lg:py-14">
          {/* Breadcrumb / back link */}
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

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] items-center">
            {/* Left: meta */}
            <div className="space-y-6 text-center lg:text-left">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  TalTech collectible
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-black tracking-tight">
                  {collectible.name}
                </h1>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <RarityBadge size="sm" rarity={collectible.rarity as Rarity} />
              </div>

              <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
                {collectible.description}
              </p>
            </div>

            {/* Right: model viewer */}
            <div className="w-full max-w-3xl mx-auto">
              <div className="w-full rounded-2xl border border-border/70 bg-muted/40 p-2 sm:p-3 shadow-sm">
                <div className="mb-2 flex items-center justify-between text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
                  <span>3D preview</span>
                  <span className="text-muted-foreground/70">
                    Rotate &amp; inspect
                  </span>
                </div>
                <ModelViewer modelUrl={getModelUrl(id)} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details & History */}
      <section className="px-4 py-10 md:py-12 lg:py-14">
        <div className="max-w-6xl mx-auto space-y-10">
          {/* About + meta */}
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.5fr)_minmax(0,0.9fr)] items-start">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                About this piece
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                {collectible.description}
              </p>
            </div>

            <Details rarity={collectible.rarity} id={collectible.id} />
          </div>

          <Separator className="my-4" />

          {/* History */}
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.1fr)] items-start">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                History & context
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                {collectible.history}
              </p>
            </div>

            <div className="relative aspect-video sm:aspect-[4/3] md:aspect-[16/10] w-full overflow-hidden rounded-2xl bg-muted border border-border/70">
              <Image
                src={getImageUrl(id)}
                alt={`Historical image of ${collectible.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
