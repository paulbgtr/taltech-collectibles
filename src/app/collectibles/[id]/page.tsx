import Juulius, {
  metadata as juuliusMetadata,
} from "@/markdown/collectibles/juulius.mdx";
import Library, {
  metadata as libraryMetadata,
} from "@/markdown/collectibles/library.mdx";
import Logo, {
  metadata as logoMetadata,
} from "@/markdown/collectibles/logo.mdx";
import { MDXComponents } from "mdx/types";
import ModelViewer from "@/components/model-viewer";
import { RarityBadge } from "@/components/rarity-badge";
import { Rarity } from "@/types/collectible";
import { CollectibleMetadata } from "@/types/collectible-metadata";

const getModelUrl = (id: string) => {
  if (id === "juulius") {
    return `/models/library.glb`;
  }
  return `/models/${id}.glb`;
};

const componentMap: Record<
  string,
  React.ComponentType<{ components?: MDXComponents }>
> = {
  juulius: Juulius,
  library: Library,
  logo: Logo,
};

const collectiblesMap: Record<string, CollectibleMetadata> = {
  juulius: juuliusMetadata,
  library: libraryMetadata,
  logo: logoMetadata,
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const SelectedComponent = componentMap[id];

  return (
    <div className="flex flex-col items-center min-h-[80vh] px-4 py-10">
      <section className="grid lg:grid-cols-2 gap-10 items-stretch max-w-6xl w-full">
        <div className="flex flex-col justify-center">
          {SelectedComponent ? (
            <div className="flex flex-col gap-4">
              <h2 className="text-5xl font-bold">{collectiblesMap[id].name}</h2>
              <RarityBadge rarity={collectiblesMap[id].rarity as Rarity} />
              <SelectedComponent />
            </div>
          ) : (
            <div>Collectible not found.</div>
          )}
        </div>

        <div className="flex justify-center">
          <ModelViewer modelUrl={getModelUrl(id)} />
        </div>
      </section>
    </div>
  );
}
