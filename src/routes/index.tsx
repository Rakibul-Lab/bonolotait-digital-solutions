import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Banknote,
  Check,
  Cloud,
  Code2,
  GraduationCap,
  HeartPulse,
  Layers,
  LifeBuoy,
  Mail,
  MapPin,
  Phone,
  Plus,
  Quote,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Timer,
  Truck,
  Users,
} from "lucide-react";

import logo from "@/assets/bonolota-logo.jpg.asset.json";
import heroImg from "@/assets/hero.jpg";
import workSaas from "@/assets/work-saas.jpg";
import workMobile from "@/assets/work-mobile.jpg";
import workWeb from "@/assets/work-web.jpg";
import { ThemeToggle } from "@/components/theme-toggle";

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
  { label: "Why us", href: "#why" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
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

const why = [
  {
    icon: ShieldCheck,
    t: "Security by default",
    d: "Role-based access, encrypted data and audit trails baked in from day one.",
  },
  {
    icon: Timer,
    t: "Predictable delivery",
    d: "Two-week sprints with a demo every Friday. No silent months.",
  },
  {
    icon: Users,
    t: "One senior team",
    d: "Designers and engineers who stay on your product, not a rotating bench.",
  },
  {
    icon: Rocket,
    t: "Built to scale",
    d: "Architecture that survives your tenth thousand user, not just your tenth.",
  },
  {
    icon: LifeBuoy,
    t: "Support after launch",
    d: "Monitoring, fixes and iteration plans included in every engagement.",
  },
  {
    icon: Sparkles,
    t: "Design that converts",
    d: "Interfaces tested with real users before a single line of code ships.",
  },
];

const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Flutter",
  "Swift",
  "Kotlin",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Figma",
  "Stripe",
];

const marquee = [
  "Nordwind Labs",
  "Gelmora",
  "Pulse Financial",
  "Insight Analytics",
  "Cedarline",
  "Havenly Health",
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

const industries = [
  { icon: Banknote, t: "Fintech" },
  { icon: ShoppingCart, t: "E-commerce" },
  { icon: HeartPulse, t: "Health tech" },
  { icon: GraduationCap, t: "Education" },
  { icon: Truck, t: "Logistics" },
  { icon: Cloud, t: "B2B SaaS" },
];

const process = [
  { n: "01", t: "Discover", d: "Goals, users and scope mapped into a clear product brief." },
  { n: "02", t: "Design", d: "Wireframes to polished UI, validated with clickable prototypes." },
  { n: "03", t: "Build", d: "Two-week sprints, weekly demos, code you fully own." },
  { n: "04", t: "Launch & scale", d: "Deployment, monitoring and ongoing improvement." },
];

const testimonials = [
  {
    q: "They shipped our SaaS dashboard in eleven weeks and it still runs without a single incident.",
    n: "Marta Lindqvist",
    r: "COO, Insight Analytics",
  },
  {
    q: "The mobile app they built lifted our activation rate by 38%. Design work was outstanding.",
    n: "Daniel Okafor",
    r: "Founder, Pulse Financial",
  },
  {
    q: "Clear communication, honest estimates, and a storefront that finally loads fast.",
    n: "Rania Haddad",
    r: "Head of Digital, Gelmora",
  },
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

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "A marketing website takes 2–4 weeks. A web or mobile MVP usually runs 8–12 weeks. Larger SaaS platforms are delivered in phases so you launch something useful early.",
  },
  {
    q: "Do we own the code and design files?",
    a: "Yes. Everything — repositories, design files, infrastructure accounts — is transferred to you at the end of the engagement.",
  },
  {
    q: "Can you work with our in-house team?",
    a: "Often we do. We can lead the build, embed alongside your engineers, or handle design only, whichever fits your setup.",
  },
  {
    q: "What happens after launch?",
    a: "Every plan includes a support window with monitoring, bug fixes and small improvements. Longer retainers are available.",
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
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="group flex items-center gap-3">
            <img
              src={logo.url}
              alt="Bonolota IT logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-xl transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
            />
            <span className="font-display text-lg font-bold tracking-tight transition-colors group-hover:text-primary">
              Bonolota IT
            </span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="underline-grow text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              className="sheen rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--glow-primary)]"
            >
              Get a quote
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="grid-backdrop relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[46rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 md:py-28 lg:grid-cols-2">
          <div>
            <span className="group inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/20">
              <Sparkles className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-90" />{" "}
              Software studio · Since 2019
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
                className="sheen group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--glow-primary)]"
              >
                Start your project
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
              >
                See our work
              </a>
            </div>
            <dl className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.v} className="group cursor-default">
                  <dt className="font-display text-3xl font-bold text-primary transition-transform duration-300 group-hover:-translate-y-1">
                    {s.k}
                  </dt>
                  <dd className="mt-1 text-xs text-muted-foreground transition-colors group-hover:text-foreground">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="group relative">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-primary/20 blur-3xl transition-all duration-500 group-hover:bg-primary/30" />
            <img
              src={heroImg}
              alt="Digital product interfaces designed by Bonolota IT"
              width={1600}
              height={1200}
              className="w-full rounded-3xl border border-border object-cover shadow-[var(--shadow-elegant)] transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </section>

      {/* Trusted by marquee */}
      <section className="overflow-hidden border-y border-border/60 bg-ink/60 py-6">
        <div className="flex w-max marquee-track">
          {[...marquee, ...marquee].map((m, i) => (
            <span
              key={`${m}-${i}`}
              className="mx-8 cursor-default font-display text-lg font-semibold text-muted-foreground/70 transition-colors duration-300 hover:text-primary"
            >
              {m}
            </span>
          ))}
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
            <article key={s.title} className="lift-card group surface-card rounded-3xl p-8">
              <div className="icon-pop flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold transition-colors group-hover:text-primary">
                {s.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{s.text}</p>
              <ul className="mt-6 space-y-2">
                {s.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Check className="h-4 w-4 text-primary" /> {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section id="why" className="border-y border-border/60 bg-ink/60">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <SectionHead
            eyebrow="Why Bonolota IT"
            title="The reasons clients stay with us"
            sub="Six commitments we hold ourselves to on every engagement, large or small."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {why.map((w) => (
              <div
                key={w.t}
                className="lift-card group rounded-3xl border border-border bg-card/50 p-7"
              >
                <div className="icon-pop flex h-11 w-11 items-center justify-center rounded-xl bg-primary/12 text-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <w.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold transition-colors group-hover:text-primary">
                  {w.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <SectionHead
          eyebrow="Technology"
          title="A stack chosen for longevity"
          sub="Proven, well-supported tools — so hiring your next developer is never a problem."
        />
        <div className="mt-12 flex flex-wrap gap-3">
          {stack.map((s) => (
            <span
              key={s}
              className="cursor-default rounded-full border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary/10 hover:text-primary"
            >
              {s}
            </span>
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
              <article
                key={w.title}
                className="lift-card group overflow-hidden rounded-3xl surface-card"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={w.img}
                    alt={w.title}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-end justify-end bg-primary/25 p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>
                </div>
                <div className="p-7">
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                    {w.tag}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold transition-colors group-hover:text-primary">
                    {w.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <SectionHead
          eyebrow="Industries"
          title="Domains we know well"
          sub="We have shipped production software in each of these sectors."
        />
        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {industries.map((i) => (
            <div
              key={i.t}
              className="group flex cursor-default flex-col items-center gap-3 rounded-2xl border border-border p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:bg-primary/8"
            >
              <i.icon className="h-7 w-7 text-primary transition-transform duration-300 group-hover:scale-125" />
              <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                {i.t}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="border-y border-border/60 bg-ink/60">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <SectionHead
            eyebrow="How we work"
            title="A calm, predictable delivery rhythm"
            sub="You always know what is being built this week and what ships next."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {process.map((p) => (
              <div
                key={p.n}
                className="lift-card group rounded-3xl border border-border bg-card/40 p-7"
              >
                <span className="font-display text-4xl font-bold text-primary/40 transition-colors duration-300 group-hover:text-primary">
                  {p.n}
                </span>
                <h3 className="mt-4 text-lg font-semibold transition-colors group-hover:text-primary">
                  {p.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <SectionHead
          eyebrow="Clients"
          title="What teams say after launch"
          sub="Feedback from founders and operators we have partnered with."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.n} className="lift-card group surface-card rounded-3xl p-8">
              <Quote className="icon-pop h-8 w-8 text-primary/50 group-hover:text-primary" />
              <blockquote className="mt-5 leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground">
                “{t.q}”
              </blockquote>
              <figcaption className="mt-6">
                <span className="block font-semibold">{t.n}</span>
                <span className="text-sm text-muted-foreground">{t.r}</span>
              </figcaption>
            </figure>
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
                className={`lift-card group rounded-3xl p-8 ${
                  p.featured
                    ? "surface-card border border-primary/50 glow"
                    : "border border-border bg-card/40"
                }`}
              >
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.for}</p>
                <p className="mt-6 font-display text-4xl font-bold text-primary transition-transform duration-300 group-hover:-translate-y-1">
                  {p.price}
                </p>
                <ul className="mt-6 space-y-3">
                  {p.items.map((i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Check className="h-4 w-4 text-primary" /> {i}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`sheen mt-8 block rounded-full px-6 py-3 text-center text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                    p.featured
                      ? "bg-primary text-primary-foreground hover:shadow-[var(--glow-primary)]"
                      : "border border-border text-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  Discuss this plan
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-5 py-24">
        <SectionHead
          eyebrow="FAQ"
          title="Questions we hear most"
          sub="Still unsure about something? Ask us directly in the form below."
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-border bg-card/40 p-6 transition-all duration-300 hover:border-primary hover:shadow-[var(--shadow-elegant)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold transition-colors group-hover:text-primary">
                {f.q}
                <Plus className="h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="border-y border-border/60 bg-ink/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-16 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Have an idea? Let&apos;s scope it <span className="text-gradient">this week</span>.
          </h2>
          <p className="max-w-xl text-muted-foreground">
            A free 30-minute call, an honest opinion on feasibility, and a written estimate.
          </p>
          <a
            href="#contact"
            className="sheen group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--glow-primary)]"
          >
            Book a free consultation
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
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
              {[
                { icon: Mail, v: "hello@bonolotait.com" },
                { icon: Phone, v: "+880 1XXX-XXXXXX" },
                { icon: MapPin, v: "Dhaka, Bangladesh" },
              ].map((c) => (
                <li
                  key={c.v}
                  className="group flex w-fit cursor-default items-center gap-3 transition-colors hover:text-foreground"
                >
                  <c.icon className="h-4 w-4 text-primary transition-transform duration-300 group-hover:scale-125" />
                  {c.v}
                </li>
              ))}
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
                className="w-full rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 hover:border-primary/60 focus:border-primary"
              />
            </div>
            <button
              type="submit"
              className="sheen w-full rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--glow-primary)]"
            >
              Send enquiry
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-border/60 bg-ink/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-10 text-sm text-muted-foreground sm:flex-row">
          <div className="group flex items-center gap-3">
            <img
              src={logo.url}
              alt="Bonolota IT"
              width={32}
              height={32}
              loading="lazy"
              className="h-8 w-8 rounded-lg transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
            />
            <span>© {new Date().getFullYear()} Bonolota IT. All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            {["services", "work", "faq", "contact"].map((l) => (
              <a key={l} href={`#${l}`} className="underline-grow capitalize hover:text-primary">
                {l}
              </a>
            ))}
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
        className="w-full rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 hover:border-primary/60 focus:border-primary"
      />
    </div>
  );
}
