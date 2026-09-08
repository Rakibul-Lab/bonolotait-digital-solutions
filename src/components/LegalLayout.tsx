import type { ReactNode } from "react";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background pt-16 text-foreground sm:pt-[4.5rem]">
      <SiteHeader />
      <main className="page-shell max-w-3xl py-12 sm:py-16 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Legal</p>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated {updated}</p>
        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">{children}</div>
      </main>
      <SiteFooter />
    </div>
  );
}
