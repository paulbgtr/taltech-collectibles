import Juulius from "@/markdown/collectibles/juulius.md";
import Library from "@/markdown/collectibles/library.md";
import Logo from "@/markdown/collectibles/logo.md";

const components: Record<string, React.FC> = {
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
  const SelectedComponent = components[id];

  return (
    <>
      {SelectedComponent ? (
        <SelectedComponent />
      ) : (
        <div>Collectible not found.</div>
      )}
    </>
  );
}
