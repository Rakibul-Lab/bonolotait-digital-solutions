import { Globe, Mail, Phone } from "lucide-react";
import { useRouterState } from "@tanstack/react-router";
import logo from "@/assets/bonolota-logo.jpg";
import worldMap from "@/assets/world-map.svg";
import { scrollToPageTop } from "@/lib/utils";
import { contact, nav, serviceTitles, whatsappUrl } from "@/site";

export default function SiteFooter() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const home = pathname === "/";
  const to = (hash: string) => (home ? hash : `/${hash}`);

  return (
    <footer>
      <div className="relative overflow-hidden border-t border-border/60 bg-gradient-to-b from-primary/22 via-primary/12 to-primary/4">
        <img
          src={worldMap}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[46%] h-[165%] w-[165%] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain opacity-45 dark:opacity-40"
        />
        <div className="page-shell relative py-12 sm:py-16">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            <div>
              <a
                href={home ? "#top" : "/"}
                className="group inline-flex items-center gap-3"
                onClick={home ? scrollToPageTop : undefined}
              >
                <img
                  src={logo}
                  alt="Bonolota IT"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-xl object-cover shadow-sm transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
                />
                <span className="font-display text-lg font-bold tracking-tight">Bonolota IT</span>
              </a>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                A product design and engineering studio in Dhaka. We build SaaS platforms, websites,
                and Android &amp; iOS apps — from the first sketch to a scaled launch.
              </p>
              <p className="mt-6 font-display text-base font-bold">Download Our App:</p>
              <a
                href={to("#contact")}
                className="mt-4 inline-flex items-center gap-3 rounded-xl border border-white/80 bg-black px-4 py-2.5 text-white shadow-sm transition-transform duration-300 hover:-translate-y-0.5"
                aria-label="Download on the App Store"
              >
                <svg viewBox="0 0 24 24" className="h-8 w-8 shrink-0 fill-current" aria-hidden>
                  <path d="M16.7 12.6c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.2-2.8.9-3.5.9s-1.8-.8-3-.8c-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.3 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7 2-.1 2.9-2.3c1.1-1.2 1.5-2.4 1.5-2.5-.1 0-2.8-1.1-2.8-4.3zM14.5 5.8c.6-.8 1.1-1.9.9-3-1 .1-2.1.7-2.8 1.5-.6.7-1.2 1.8-1 2.9 1.1.1 2.2-.6 2.9-1.4z" />
                </svg>
                <span className="text-left leading-tight">
                  <span className="block text-[10px] font-medium tracking-wide">Download on the</span>
                  <span className="block text-lg font-semibold leading-none">App Store</span>
                </span>
              </a>
            </div>

            <div>
              <h3 className="font-display text-base font-bold">Quick Links</h3>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                {[
                  ...nav.map((l) => ({
                    ...l,
                    href: l.href === "#top" && !home ? "/" : to(l.href),
                    homeLink: l.href === "#top",
                  })),
                  { label: "Contact", href: to("#contact"), homeLink: false },
                ].map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="underline-grow hover:text-primary"
                      onClick={l.homeLink && home ? scrollToPageTop : undefined}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-base font-bold">Our Services</h3>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                {serviceTitles.map((title) => (
                  <li key={title}>
                    <a href={to("#services")} className="underline-grow hover:text-primary">
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-base font-bold">Contact Info</h3>
              <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <a href={`mailto:${contact.email}`} className="hover:text-primary">
                    {contact.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    {contact.phoneDisplay}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Globe className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <a
                    href={contact.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    {contact.websiteLabel}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border/60 bg-background">
        <div className="page-shell flex flex-col gap-3 py-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} All rights reserved &amp; Developed by Bonolota IT
            <span className="ml-2 text-primary">|</span>
          </p>
          <nav className="flex flex-wrap items-center gap-x-2.5 gap-y-2">
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Service", href: "/terms-of-service" },
            ].map((l, i) => (
              <span key={l.href} className="inline-flex items-center gap-2.5">
                {i > 0 && (
                  <span className="inline-block h-1.5 w-1.5 shrink-0 rotate-45 bg-primary" aria-hidden />
                )}
                <a href={l.href} className="hover:text-primary">
                  {l.label}
                </a>
              </span>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
