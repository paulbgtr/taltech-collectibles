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
    <div className="flex flex-col items-center md:py-20 min-h-[80vh] px-4 py-10">
      {/* Main Info and Model */}
      <section className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 mb-26">
        {/* Info Column */}
        <div className="flex flex-col justify-center gap-6">
          <h2 className="text-7xl md:text-8xl font-black tracking-tight">
            {collectible.name}
          </h2>
          <RarityBadge size="md" rarity={collectible.rarity as Rarity} />
          <p className="text-lg">{collectible.description}</p>
        </div>

        <div className="flex justify-center items-center">
          <ModelViewer modelUrl={getModelUrl(id)} />
        </div>

        <Separator />
      </section>

      <section className="w-full max-w-4xl space-y-12">
        <div>
          <h2 className="text-5xl font-black mb-4">A Bit of History</h2>
          <p className="text-lg leading-relaxed text-foreground">
            {collectible.history}
          </p>
        </div>

        <Image
          src={getImageUrl(id)}
          alt={collectible.name}
          className="rounded-lg"
          width={1000}
          height={1000}
        />
      </section>
    </div>
  );
}
