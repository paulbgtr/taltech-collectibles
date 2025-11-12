import ModelViewer from "@/components/model-viewer";
import { RarityBadge } from "@/components/rarity-badge";
import { Rarity } from "@/types/collectible";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { collectibles } from "@/data/collectibles";

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
      <div className="flex flex-col items-center min-h-[80vh] px-4 py-10">
        <div className="text-xl font-semibold">Collectible not found.</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Mobile First */}
      <section className="relative bg-gradient-to-b from-background to-muted/20 px-4 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          {/* Title and Badge - Compact for mobile */}
          <div className="text-center mb-6 space-y-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
              {collectible.name}
            </h1>
            <div className="flex justify-center">
              <RarityBadge size="sm" rarity={collectible.rarity as Rarity} />
            </div>
          </div>

          {/* 3D Model Viewer - Full width on mobile */}
          <div className="w-full max-w-2xl mx-auto">
            <ModelViewer modelUrl={getModelUrl(id)} />
          </div>
        </div>
      </section>

      {/* Description Section - Clean and readable */}
      <section className="px-4 py-8 md:py-12">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold">About</h2>
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
              {collectible.description}
            </p>
          </div>

          <Separator className="my-8" />

          {/* History Section with Image */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold">History</h2>

            {/* Image - Responsive and accessible */}
            <div className="relative aspect-video sm:aspect-[4/3] md:aspect-[16/10] w-full overflow-hidden rounded-xl bg-muted">
              <Image
                src={getImageUrl(id)}
                alt={`Historical image of ${collectible.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>

            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
              {collectible.history}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
