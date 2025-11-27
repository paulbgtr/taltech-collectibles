"use client";

import { useState } from "react";
import { Menu, X, Key } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

type NavLink = {
  name: string;
  href: string;
};

const links: NavLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/paulbgtr/taltech-collectibles",
  },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl border bg-muted">
            <Key className="h-4 w-4" />
          </span>
          <span className="hidden sm:inline text-sm font-semibold tracking-tight">
            TalTech Collectibles
          </span>
        </Link>

        {/* Desktop links */}
        <div className="flex items-center gap-4">
          <ul className="hidden md:flex items-center gap-6 text-sm">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <Button
            className="md:hidden"
            variant="ghost"
            size="icon"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-b bg-background/95 backdrop-blur px-4 py-3 space-y-2">
          <ul className="space-y-1 text-sm">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
