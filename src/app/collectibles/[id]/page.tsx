import Juulius from "@/markdown/collectibles/juulius.md";
import Library from "@/markdown/collectibles/library.md";
import Logo from "@/markdown/collectibles/logo.md";
import { MDXComponents } from "mdx/types";
import ModelViewer from "@/components/model-viewer";

const CustomH2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-4xl font-bold mb-4">{children}</h2>
);

const overrideComponents = {
  h2: CustomH2,
};

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

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const SelectedComponent = componentMap[id];

  return (
    <div className="px-4 py-10 flex flex-col items-center min-h-[80vh]">
      <section className="grid items-center gap-10 lg:grid-cols-2 max-w-6xl">
        <div>
          {SelectedComponent ? (
            <SelectedComponent components={overrideComponents} />
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
