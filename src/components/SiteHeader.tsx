import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/bonolota-logo.jpg";
import { ThemeToggle } from "@/components/theme-toggle";
import { scrollToPageTop } from "@/lib/utils";
import { nav } from "@/site";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const home = pathname === "/";
  const to = (hash: string) => (home ? hash : `/${hash}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[box-shadow,background-color,border-color] duration-300 ease-out ${
        scrolled ? "border-border bg-background shadow-md" : "border-border/60 bg-background"
      }`}
    >
      <div
        className={`page-shell flex items-center justify-between transition-[height,padding] duration-300 ${
          scrolled ? "h-14 py-2 sm:h-16 sm:py-3" : "h-16 py-3 sm:h-18 sm:py-4"
        }`}
      >
        <a
          href={home ? "#top" : "/"}
          className="group flex min-w-0 items-center gap-2.5 sm:gap-3"
          onClick={home ? scrollToPageTop : undefined}
        >
          <img
            src={logo}
            alt="Bonolota IT logo"
            width={40}
            height={40}
            className="h-9 w-9 shrink-0 rounded-xl object-cover shadow-sm transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110 sm:h-10 sm:w-10"
          />
          <span className="font-display truncate text-base font-bold tracking-tight transition-colors group-hover:text-primary sm:text-lg">
            Bonolota IT
          </span>
        </a>
        <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href === "#top" && !home ? "/" : to(n.href)}
              className="underline-grow text-sm font-medium text-foreground transition-colors hover:text-primary"
              onClick={n.href === "#top" && home ? scrollToPageTop : undefined}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <a
            href={to("#contact")}
            className="sheen hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--glow-primary)] sm:inline-flex sm:px-5 sm:py-2.5"
          >
            Get a quote
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <nav className="page-shell flex flex-col py-3">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href === "#top" && !home ? "/" : to(n.href)}
                className="py-2.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
                onClick={(e) => {
                  setMenuOpen(false);
                  if (n.href === "#top" && home) scrollToPageTop(e);
                }}
              >
                {n.label}
              </a>
            ))}
            <a
              href={to("#contact")}
              className="mt-2 mb-2 inline-flex w-fit rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground sm:hidden"
              onClick={() => setMenuOpen(false)}
            >
              Get a quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
