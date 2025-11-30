import Link from "next/link";

import { collectibles } from "@/data/collectibles";
import { CollectibleClient } from "@/components/collectible/collectible-client";

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
      <CollectibleClient collectible={collectible} />
    </main>
  );
}
