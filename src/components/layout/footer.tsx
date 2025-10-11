import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="my-8 text-sm font-medium text-center text-muted-foreground space-y-2">
      <Separator className="mb-4 mx-auto w-32" />
      <div>
        &copy; {new Date().getFullYear()} TalTech Collectibles – A project by
        Group C
      </div>
      <div className="text-xs ">
        Licensed under the GNU General Public License v3.0 (GPLv3).
      </div>
    </footer>
  );
};
