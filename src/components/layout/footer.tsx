import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 bg-background/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-6 md:py-8">
        <Separator className="mb-4 w-16 opacity-60" />

        <div className="flex flex-col gap-2 text-xs sm:text-sm text-muted-foreground">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
            <span className="font-medium text-foreground">
              TalTech Collectibles
            </span>
            <span>
              &copy; {year} &middot; Built as a student project (Group C)
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 text-[0.7rem] sm:text-xs">
            <span>
              Open source under{" "}
              <Link
                href="https://www.gnu.org/licenses/gpl-3.0.en.html"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2 hover:text-foreground"
              >
                GPL-3.0
              </Link>
              .
            </span>
            <Link
              href="https://github.com/paulbgtr/taltech-collectibles"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 hover:text-foreground"
            >
              View source on GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
