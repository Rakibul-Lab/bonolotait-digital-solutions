import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Check,
  Cloud,
  Code2,
  Layers,
  Mail,
  MapPin,
  Phone,
  Smartphone,
  Sparkles,
} from "lucide-react";

import logo from "@/assets/bonolota-logo.jpg.asset.json";
import heroImg from "@/assets/hero.jpg";
import workSaas from "@/assets/work-saas.jpg";
import workMobile from "@/assets/work-mobile.jpg";
import workWeb from "@/assets/work-web.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bonolota IT — SaaS, Web & Mobile App Development Company" },
      {
        name: "description",
        content:
          "Bonolota IT designs and engineers SaaS platforms, high-performance websites, and Android & iOS apps for growing brands worldwide.",
      },
      { property: "og:title", content: "Bonolota IT — SaaS, Web & Mobile App Development" },
      {
        property: "og:description",
        content:
          "Product design and engineering for SaaS platforms, websites, and mobile apps. Built to a world-class standard.",
      },
    ],
  }),
  component: Home,
});

const nav = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    icon: Cloud,
    title: "SaaS Product Engineering",
    text: "Multi-tenant platforms with billing, roles, analytics and an admin panel your team actually enjoys using.",
    points: ["Subscription & billing", "Dashboards & analytics", "Scalable cloud architecture"],
  },
  {
    icon: Code2,
    title: "Websites & Web Apps",
    text: "Marketing sites, portals and e-commerce built for speed, search visibility and conversion.",
    points: ["Corporate & e-commerce", "SEO and Core Web Vitals", "Headless CMS"],
  },
  {
    icon: Smartphone,
    title: "Android & iOS Apps",
    text: "Native-feeling mobile products from first wireframe to a live listing on both stores.",
    points: ["Flutter & React Native", "Push, payments, offline", "Store launch & updates"],
  },
  {
    icon: Layers,
    title: "UI/UX & Design Systems",
    text: "Research-led interface design and reusable component libraries that keep every screen consistent.",
    points: ["User research", "Prototypes in Figma", "Design system handoff"],
  },
];

const work = [
  {
    img: workSaas,
    tag: "SaaS Platform",
    title: "Insight — analytics workspace",
    text: "A reporting platform serving 40k+ monthly events with role-based teams.",
  },
  {
    img: workMobile,
    tag: "iOS & Android",
    title: "Pulse — fintech companion app",
    text: "Cross-platform app with biometric login and instant transfers.",
  },
  {
    img: workWeb,
    tag: "Website",
    title: "Gelmora — commerce storefront",
    text: "Headless storefront that loads in under a second on mobile.",
  },
];

const process = [
  { n: "01", t: "Discover", d: "Goals, users and scope mapped into a clear product brief." },
  { n: "02", t: "Design", d: "Wireframes to polished UI, validated with clickable prototypes." },
  { n: "03", t: "Build", d: "Two-week sprints, weekly demos, code you fully own." },
  { n: "04", t: "Launch & scale", d: "Deployment, monitoring and ongoing improvement." },
];

const pricing = [
  {
    name: "Starter",
    price: "$1,900",
    for: "Landing pages & small business sites",
    items: ["Up to 6 pages", "Responsive UI design", "SEO basics", "2 weeks delivery"],
  },
  {
    name: "Growth",
    price: "$6,500",
    for: "Web apps & mobile MVPs",
    items: ["Custom UI/UX", "Web or mobile app", "API & database", "3 months support"],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    for: "SaaS platforms & long-term teams",
    items: ["Dedicated squad", "Cloud architecture", "Security & compliance", "SLA support"],
  },
];

const stats = [
  { k: "120+", v: "Projects delivered" },
  { k: "9", v: "Countries served" },
  { k: "25+", v: "Engineers & designers" },
  { k: "98%", v: "Client retention" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-ink/80 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-3">
            <img
              src={logo.url}
              alt="Bonolota IT logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-xl"
            />
            <span className="font-display text-lg font-bold tracking-tight">Bonolota IT</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get a quote
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden grid-backdrop">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[46rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 md:py-28 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Software studio · Since 2019
            </span>
            <h1 className="mt-6 text-5xl font-bold leading-[1.05] md:text-6xl">
              We build <span className="text-gradient">software products</span> the world can rely
              on.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Bonolota IT is a product design and engineering team crafting SaaS platforms,
              websites, and Android & iOS apps — from the first sketch to a scaled launch.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground glow transition-transform hover:-translate-y-0.5"
              >
                Start your project <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-semibold transition-colors hover:border-primary hover:text-primary"
              >
                See our work
              </a>
            </div>
            <dl className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-3xl font-bold text-primary">{s.k}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-primary/20 blur-3xl" />
            <img
              src={heroImg}
              alt="Digital product interfaces designed by Bonolota IT"
              width={1600}
              height={1200}
              className="w-full rounded-3xl border border-border object-cover shadow-[var(--shadow-elegant)]"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-5 py-24">
        <SectionHead
          eyebrow="What we do"
          title="Four disciplines, one delivery team"
          sub="Strategy, design and engineering under one roof, so nothing gets lost between handoffs."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.title}
              className="group surface-card rounded-3xl p-8 transition-transform hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{s.text}</p>
              <ul className="mt-6 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary" /> {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Work */}
      <section id="work" className="border-y border-border/60 bg-ink/60">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <SectionHead
            eyebrow="Selected work"
            title="Products shipped, not slideware"
            sub="A snapshot of recent platforms, storefronts and apps built by our team."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {work.map((w) => (
              <article key={w.title} className="group overflow-hidden rounded-3xl surface-card">
                <img
                  src={w.img}
                  alt={w.title}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-7">
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                    {w.tag}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="mx-auto max-w-6xl px-5 py-24">
        <SectionHead
          eyebrow="How we work"
          title="A calm, predictable delivery rhythm"
          sub="You always know what is being built this week and what ships next."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {process.map((p) => (
            <div key={p.n} className="rounded-3xl border border-border p-7">
              <span className="font-display text-4xl font-bold text-primary/40">{p.n}</span>
              <h3 className="mt-4 text-lg font-semibold">{p.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-y border-border/60 bg-ink/60">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <SectionHead
            eyebrow="Engagement"
            title="Transparent starting points"
            sub="Every project is quoted after discovery — these are typical ranges."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {pricing.map((p) => (
              <div
                key={p.name}
                className={`rounded-3xl p-8 ${
                  p.featured
                    ? "surface-card border border-primary/50 glow"
                    : "border border-border"
                }`}
              >
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.for}</p>
                <p className="mt-6 font-display text-4xl font-bold text-primary">{p.price}</p>
                <ul className="mt-6 space-y-3">
                  {p.items.map((i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary" /> {i}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-8 block rounded-full px-6 py-3 text-center text-sm font-semibold transition-opacity hover:opacity-90 ${
                    p.featured
                      ? "bg-primary text-primary-foreground"
                      : "border border-border text-foreground"
                  }`}
                >
                  Discuss this plan
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-5 py-24">
        <div className="grid gap-12 rounded-[2rem] surface-card p-10 md:p-14 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold">
              Let&apos;s build something <span className="text-gradient">worth using</span>.
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
              Tell us about your product idea and we&apos;ll reply within one business day with next
              steps and a rough estimate.
            </p>
            <ul className="mt-9 space-y-4 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" /> hello@bonolotait.com
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" /> +880 1XXX-XXXXXX
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" /> Dhaka, Bangladesh
              </li>
            </ul>
          </div>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <Field label="Your name" placeholder="Jane Cooper" />
            <Field label="Email" type="email" placeholder="jane@company.com" />
            <div>
              <label className="mb-2 block text-sm font-medium">Project details</label>
              <textarea
                rows={4}
                placeholder="We need a SaaS dashboard and a companion mobile app..."
                className="w-full rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Send enquiry
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-border/60 bg-ink/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-10 text-sm text-muted-foreground sm:flex-row">
          <div className="flex items-center gap-3">
            <img
              src={logo.url}
              alt="Bonolota IT"
              width={32}
              height={32}
              loading="lazy"
              className="h-8 w-8 rounded-lg"
            />
            <span>© {new Date().getFullYear()} Bonolota IT. All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <a href="#services" className="hover:text-primary">
              Services
            </a>
            <a href="#work" className="hover:text-primary">
              Work
            </a>
            <a href="#contact" className="hover:text-primary">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return (
    <div className="max-w-2xl">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-4xl font-bold md:text-5xl">{title}</h2>
      <p className="mt-4 leading-relaxed text-muted-foreground">{sub}</p>
    </div>
  );
}

function Field({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary"
      />
    </div>
  );
}
