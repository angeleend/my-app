"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname() || "/";

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
  ];

  const base = "site-nav";

  return (
    <nav className={base} aria-label="Primary navigation">
      <ul>
        {links.map((l) => {
          const isActive = pathname === l.href;
          return (
            <li key={l.href}>
              <Link href={l.href} className={isActive ? "nav-link active" : "nav-link"}>
                {l.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
