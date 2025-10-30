"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function NavBar() {
  const pathname = usePathname() || "/";
  // Initialize to a stable value for SSR to avoid hydration mismatches.
  const [currentHash, setCurrentHash] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setMounted(true);
    const update = () => setCurrentHash(window.location.hash || "");
    // read initial hash on mount
    update();
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);

  const links = [
    { href: "/#projects", label: "Projects", id: "projects" },
    { href: "/about", label: "About" }
  ];

  const base = "site-nav";

  // Handle clicks on anchors: if we're already on the home route, prevent navigation
  // and smoothly scroll to the section; otherwise allow Next/Link to navigate.
  const handleHashClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (typeof window === "undefined") return;
    const currentPath = window.location.pathname || "/";
    if (currentPath === "/") {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        // read CSS variable for nav height if available
        const root = getComputedStyle(document.documentElement);
        const navH = root.getPropertyValue('--site-nav-height') || '56px';
        const navHeight = parseFloat(navH) || 56;
        const y = el.getBoundingClientRect().top + window.scrollY - navHeight - 8; // small extra gap
        window.scrollTo({ top: y, behavior: "smooth" });
        // Update the hash in the URL without causing a navigation
        try {
          window.history.replaceState(null, "", `#${id}`);
        } catch (err) {
          // some environments may restrict history modifications; ignore
        }
        setCurrentHash(`#${id}`);
      }
    }
  }, [setCurrentHash]);

  return (
    <nav className={base} aria-label="Primary navigation">
      <div className="nav-inner">
        <div className="nav-brand">
          <Link href="/" className={mounted && pathname === "/" ? "nav-link brand active" : "nav-link brand"}>
            Angeleen Duong
          </Link>
        </div>
        <ul className="nav-list">
          {links.map((l) => {
            // If link has an 'id' it's an in-page anchor we treat as active when on the home path with matching hash
            const isAnchor = Boolean((l as any).id);
            let isActive = false;
            if (isAnchor) {
              isActive = mounted && pathname === "/" && currentHash === `#${(l as any).id}`;
            } else {
              // For normal page links, mark active when pathname exactly matches link href
              isActive = mounted && pathname === l.href;
            }

            return (
              <li key={l.href}>
                {/* Only attach hash-scroll handler for anchors */}
                {isAnchor ? (
                  <Link href={l.href} className={isActive ? "nav-link active" : "nav-link"} onClick={(e) => handleHashClick(e as any, (l as any).id)}>
                    {l.label}
                  </Link>
                ) : (
                  <Link href={l.href} className={isActive ? "nav-link active" : "nav-link"}>
                    {l.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
