"use client";

import { useState } from "react";
import { Menu, X, Key } from "lucide-react"; // Hamburger menu icon, close icon
import Link from "next/link";

import { Button } from "@/components/ui/button"; // shadcn button

type Link = {
  name: string;
  href: string;
};

const links: Link[] = [
  { name: "Github", href: "https://github.com/paulbgtr/taltech-collectibles" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full backdrop-blur border-b">
      <nav className="max-w-5xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo and Title */}
        <Link href="/">
          <div className="flex items-center gap-2">
            <Key className="h-6 w-6" />
            <span className="hidden font-extrabold text-lg sm:inline-block tracking-tight">
              TalTech Collectibles
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-6">
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="font-medium transition-colors">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Call to action */}
        <div className="hidden md:flex">
          <Button className="rounded-full px-5">Explore Our Collection</Button>
        </div>

        {/* Mobile menu button */}
        <Button
          className="md:hidden"
          variant="ghost"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden border-b shadow p-4 space-y-2">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block py-2 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button className="w-full mt-2 rounded-full">
            Explore Our Collection
          </Button>
        </div>
      )}
    </header>
  );
}
