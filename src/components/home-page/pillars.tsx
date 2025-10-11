import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Gift } from "lucide-react";

export function Pillars() {
  return (
    <section className="flex gap-4 max-w-xl">
      <Card>
        <CardContent>
          <div className="flex-1 flex flex-col items-center">
            <Leaf className="h-8 w-8 mb-2 text-green-500" />
            <h3 className="text-lg font-bold mb-1">Sustainable Gifting</h3>
            <p className="text-center">
              Biodegradable packaging, eco materials, digital storytelling
              (minimal print, less waste).
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <div className="flex-1 flex flex-col items-center">
            <Gift className="h-8 w-8 mb-2" />
            <h3 className="text-lg font-bold mb-1">Collectible Fun</h3>
            <p className="text-center">
              Unwrap, trade, and curate your set. Every keychain is part of
              TalTech’s evolving story.
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
