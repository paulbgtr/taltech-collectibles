import { useState } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { cn } from "@/lib/utils";
import { CodeIcon } from "./code-icon";
import ModelViewer from "../model-viewer";

type Props = {
  creatorCode: string | null;
  modelUrl: string;
};

export const ModelSection = ({ creatorCode, modelUrl }: Props) => {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative w-full rounded-2xl border bg-muted/40 p-3 shadow-sm">
        {/* Header */}
        <div className="mb-2 flex items-center justify-between text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
          <span>3D preview</span>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  disabled={!creatorCode}
                  onClick={() => creatorCode && setShowCode(true)}
                  className={cn(
                    "text-[0.65rem] uppercase tracking-[0.14em] transition-colors",
                    creatorCode
                      ? "text-primary/90 hover:text-primary"
                      : "text-muted-foreground cursor-not-allowed opacity-60",
                  )}
                >
                  Reveal code
                </button>
              </TooltipTrigger>

              {!creatorCode && (
                <TooltipContent className="max-w-xs text-[0.7rem] leading-snug">
                  Scan the keychain to reveal its creator code.
                </TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>
        </div>

        {/* Model */}
        <ModelViewer modelUrl={modelUrl} />

        {/* Overlay */}
        {creatorCode && showCode && (
          <div
            className="
              absolute inset-0 flex items-center justify-center
              bg-background/80 backdrop-blur-xl border border-border/70
              rounded-xl shadow-lg z-10
            "
          >
            <div className="flex flex-col items-center gap-3">
              <CodeIcon code={creatorCode} size={150} />
              <span className="font-mono text-xs text-muted-foreground tracking-wide">
                {creatorCode}
              </span>

              <button
                className="mt-2 text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setShowCode(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
