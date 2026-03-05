"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/experience", label: "Expérience" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/formations", label: "Formations" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/35 backdrop-blur">
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3">

        {/* Logo / Nom */}
        <Link href="/" className="font-semibold">
          Yassine Larbi
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-1">
          {links.map((l) => {
            const active = pathname === l.href;

            return (
              <Link
                key={l.href}
                href={l.href}
                className={[
                  "rounded-md px-3 py-2 text-sm transition",
                  active
                    ? "bg-white/12 border border-white/15"
                    : "hover:bg-white/10",
                ].join(" ")}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

      </nav>
    </header>
  );
}