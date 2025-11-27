"use client";

import { useMemo, useState } from "react";
import { toSvg } from "jdenticon";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";

type CodeIconProps = {
  code: string;
  size?: number;
  className?: string;
};

export const CodeIcon = ({ code, size = 32, className }: CodeIconProps) => {
  const [copied, setCopied] = useState(false);

  const svg = useMemo(() => toSvg(code, size), [code, size]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // clipboard drama, ignore
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            type="button"
            onClick={handleCopy}
            aria-label="Creator code for this collectible"
            className={cn(
              "inline-flex items-center justify-center rounded-lg border bg-background/90 shadow-sm backdrop-blur-sm",
              "px-1.5 py-1.5 hover:border-primary/60 hover:shadow-md transition",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2",
              className,
            )}
          >
            <span
              dangerouslySetInnerHTML={{ __html: svg }}
              style={{ width: size, height: size }}
            />
          </button>
        </TooltipTrigger>

        <TooltipContent className="max-w-xs space-y-2">
          <div className="space-y-1">
            <p className="text-xs font-semibold">Creator code</p>
            <p className="text-[0.7rem] text-muted-foreground leading-snug">
              Unique code bound to this keychain. Click to copy.
            </p>
          </div>
          <p className="text-[0.7rem] font-mono break-all leading-snug">
            {code}
          </p>
          <div className="flex items-center gap-2 text-[0.7rem] text-muted-foreground">
            {copied ? (
              <>
                <Check className="h-3 w-3" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-3 w-3" />
                <span>Click to copy</span>
              </>
            )}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
