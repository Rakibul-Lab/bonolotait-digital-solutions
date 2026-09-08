import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BookOpen,
  Code2,
  Coffee,
  Cpu,
  Database,
  Footprints,
  Globe,
  HeartPulse,
  Hotel,
  LifeBuoy,
  PawPrint,
  Plus,
  Rocket,
  Shield,
  ShieldCheck,
  Shirt,
  ShoppingBasket,
  Smartphone,
  Sparkles,
  Timer,
  TrendingUp,
  Users,
  WandSparkles,
  Star,
} from "lucide-react";

import workSaas from "@/assets/work-saas.jpg";
import workMobile from "@/assets/work-mobile.jpg";
import workWeb from "@/assets/work-web.jpg";
import workDashboard from "@/assets/work-dashboard.jpg";
import workAnalytics from "@/assets/work-analytics.jpg";
import workApp from "@/assets/work-app.jpg";
import workCode from "@/assets/work-code.jpg";
import workScreens from "@/assets/work-screens.jpg";
import partnerGoogleCloud from "@/assets/partners/google-cloud.svg";
import partnerShopify from "@/assets/partners/shopify.svg";
import partnerMeta from "@/assets/partners/meta.svg";
import stackReact from "@/assets/stack/react.svg";
import stackNext from "@/assets/stack/nextjs.svg";
import stackTypescript from "@/assets/stack/typescript.svg";
import stackNode from "@/assets/stack/nodejs.svg";
import stackFlutter from "@/assets/stack/flutter.svg";
import stackSwift from "@/assets/stack/swift.svg";
import stackKotlin from "@/assets/stack/kotlin.svg";
import stackPostgres from "@/assets/stack/postgresql.svg";
import stackAws from "@/assets/stack/aws.svg";
import stackDocker from "@/assets/stack/docker.svg";
import stackFigma from "@/assets/stack/figma.svg";
import stackStripe from "@/assets/stack/stripe.svg";
import stackMysql from "@/assets/stack/mysql.svg";
import stackLaravel from "@/assets/stack/laravel.svg";
import stackPhp from "@/assets/stack/php.svg";
import TextLogoWave from "@/components/TextLogoWave";
import HeroScene from "@/components/HeroScene";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

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

const services = [
  {
    icon: Code2,
    title: "Software Development",
    text: "Custom POS systems, CRM solutions, and enterprise software tailored to your business needs.",
  },
  {
    icon: Globe,
    title: "Web Development",
    text: "Modern, responsive websites and e-commerce platforms that drive business growth.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    text: "Native and cross-platform mobile applications for iOS and Android platforms.",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    text: "SEO, social media marketing, and online advertising to boost your digital presence.",
  },
  {
    icon: Database,
    title: "Database Solutions",
    text: "Robust database design, optimization, and management for efficient data handling.",
  },
  {
    icon: Shield,
    title: "IT Consulting",
    text: "Expert consultation on technology strategy, system integration, and process optimization.",
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
  { src: stackReact, alt: "React", title: "React" },
  { src: stackNext, alt: "Next.js", title: "Next.js" },
  { src: stackTypescript, alt: "TypeScript", title: "TypeScript" },
  { src: stackNode, alt: "Node.js", title: "Node.js" },
  { src: stackPhp, alt: "PHP", title: "PHP" },
  { src: stackLaravel, alt: "Laravel", title: "Laravel" },
  { src: stackMysql, alt: "MySQL", title: "MySQL" },
  { src: stackFlutter, alt: "Flutter", title: "Flutter" },
  { src: stackSwift, alt: "Swift", title: "Swift" },
  { src: stackKotlin, alt: "Kotlin", title: "Kotlin" },
  { src: stackPostgres, alt: "PostgreSQL", title: "PostgreSQL" },
  { src: stackAws, alt: "AWS", title: "AWS" },
  { src: stackDocker, alt: "Docker", title: "Docker" },
  { src: stackFigma, alt: "Figma", title: "Figma" },
  { src: stackStripe, alt: "Stripe", title: "Stripe" },
];

const partners = [
  { name: "Google Cloud", src: partnerGoogleCloud, height: "h-7" },
  { name: "Shopify", src: partnerShopify, height: "h-9" },
  { name: "Meta", src: partnerMeta, height: "h-8" },
];

const work = [
  {
    img: workSaas,
    tag: "Fashion Retail",
    title: "Fashion Point",
    text: "A retail operations platform with inventory, billing and live floor sync for a fashion boutique.",
  },
  {
    img: workDashboard,
    tag: "Grocery Store",
    title: "Fresh Mart",
    text: "Checkout software and stock dashboards for a grocery floor handling daily high-volume sales.",
  },
  {
    img: workWeb,
    tag: "Bookstore",
    title: "Book Corner",
    text: "Catalog, sales and membership software for an independent bookstore.",
  },
  {
    img: workAnalytics,
    tag: "Electronics",
    title: "Gadget Hub",
    text: "Product catalog, serial tracking and counter software for an electronics retailer.",
  },
  {
    img: workMobile,
    tag: "Footwear",
    title: "Shoe Palace",
    text: "A mobile-ready POS with size-aware inventory and in-store checkout for a footwear shop.",
  },
  {
    img: workApp,
    tag: "Café",
    title: "Coffee House",
    text: "Order, table and daily sales software for a café running from open to close.",
  },
  {
    img: workScreens,
    tag: "Beauty & Cosmetics",
    title: "Beauty Shop",
    text: "Retail and appointment software for a beauty and cosmetics counter.",
  },
  {
    img: workCode,
    tag: "Pet Supplies",
    title: "Pet Store",
    text: "Inventory and checkout software for a pet supplies store serving walk-in customers.",
  },
];

const industries = [
  { icon: Shirt, t: "Fashion Retail" },
  { icon: ShoppingBasket, t: "Grocery Store" },
  { icon: BookOpen, t: "Bookstore" },
  { icon: Cpu, t: "Electronics" },
  { icon: Footprints, t: "Footwear" },
  { icon: Coffee, t: "Café" },
  { icon: WandSparkles, t: "Beauty & Cosmetics" },
  { icon: PawPrint, t: "Pet Supplies" },
  { icon: HeartPulse, t: "Healthcare" },
  { icon: Hotel, t: "Hotel & Restaurant" },
];

const process = [
  { n: "01", t: "Discover", d: "Goals, users and scope mapped into a clear product brief." },
  { n: "02", t: "Design", d: "Wireframes to polished UI, validated with clickable prototypes." },
  { n: "03", t: "Build", d: "Two-week sprints, weekly demos, code you fully own." },
  { n: "04", t: "Launch & scale", d: "Deployment, monitoring and ongoing improvement." },
];

const testimonials = [
  {
    q: "Bonolota POS transformed our retail operations! The multi-location feature helps us manage all our stores seamlessly.",
    n: "Ahmed Rahman",
    r: "Retail Store Owner",
    initials: "AR",
  },
  {
    q: "The offline functionality is a game-changer. We never worry about internet connectivity affecting our sales.",
    n: "Fatima Begum",
    r: "Restaurant Owner",
    initials: "FB",
  },
  {
    q: "Best investment for our business. The inventory management and reporting features are exactly what we needed.",
    n: "Mohammad Ali",
    r: "Wholesale Business",
    initials: "MA",
  },
  {
    q: "Customer support is excellent and the software is very user-friendly. Highly recommended for any business.",
    n: "Rashida Khatun",
    r: "Pharmacy Owner",
    initials: "RK",
  },
];

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "A marketing website takes 2–4 weeks. A web or mobile MVP usually runs 8–12 weeks. Larger SaaS platforms are delivered in phases so you launch something useful early.",
  },
  {
    q: "Do we own the code and design files?",
    a: "Yes. Everything — repositories, design files, infrastructure accounts — is transferred to you at the end of the engagement. You are never locked into Bonolota IT.",
  },
  {
    q: "How do you price a project?",
    a: "Most work is a fixed quote against a written scope, so you know the number before we start. Very large or evolving products can run in monthly sprints. We do not bill surprise hourly overruns.",
  },
  {
    q: "Can you work with our in-house team?",
    a: "Often we do. We can lead the build, embed alongside your engineers, or handle design only, whichever fits your setup.",
  },
  {
    q: "What happens after launch?",
    a: "Every plan includes a support window with monitoring, bug fixes and small improvements. After that you can continue on a monthly retainer or call us as needed.",
  },
  {
    q: "Which technologies do you use?",
    a: "We match the stack to the product: React and Next.js for web, Flutter or native Swift/Kotlin for mobile, Node.js or Laravel for APIs, and Postgres or MySQL for data. If you already have a stack, we work with it.",
  },
  {
    q: "Can you take over an existing product?",
    a: "Yes. We start with a short code and infrastructure review, then agree what to keep, rewrite, or leave alone. Many of our retainers began as rescue or modernization work.",
  },
  {
    q: "Do you sign NDAs before we share the idea?",
    a: "Yes. Send yours or we will send a standard mutual NDA. We treat product plans, customer data and source code as confidential by default.",
  },
  {
    q: "Who actually writes the code?",
    a: "A senior Bonolota IT team in Dhaka — designers and engineers on our payroll. We do not farm delivery out to anonymous freelancers.",
  },
  {
    q: "Do you build web and mobile together?",
    a: "Yes. Shared APIs, one design system, and a single backlog so the website, dashboard and iOS/Android apps stay in sync instead of drifting into three products.",
  },
  {
    q: "What do you need from us to get started?",
    a: "A short brief is enough: the problem, who will use it, any must-have features, and a target date. If you have brand files or an existing repo, send those too. We reply with a proposal within one business day.",
  },
  {
    q: "How do we communicate during the project?",
    a: "A dedicated channel (Slack or WhatsApp), a shared board, and a weekly demo. You always know what shipped this week and what is next. We overlap comfortably with GMT+6 and EU/US morning hours.",
  },
  {
    q: "Can you handle App Store and Play Store submission?",
    a: "Yes. We prepare listings, screenshots, privacy details and the first release, then hand you the developer accounts. Updates after launch can sit on the same retainer.",
  },
  {
    q: "Do you set up hosting and cloud infrastructure?",
    a: "Yes — typically on AWS, Google Cloud or a VPS you own. Accounts stay in your name. We add backups, monitoring and a simple runbook so your team is not stuck if something fails at 2am.",
  },
  {
    q: "What if we only need a landing page or a small change?",
    a: "We still take that work. Small sites, POS add-ons, dashboard tweaks and integrations are quoted as short fixed jobs, usually in days rather than months.",
  },
  {
    q: "Are payment terms flexible?",
    a: "Standard is 40% to start, 40% at the mid-project demo, and 20% on handover. For retainers we invoice monthly. International transfers and local Bangladesh payments are both fine.",
  },
];

const stats = [
  { to: 500, suffix: "+", label: "Happy clients" },
  { to: 1000, suffix: "+", label: "Projects completed" },
  { to: 24, suffix: "/7", label: "Support" },
];

function Home() {
  return (
    <div id="top" className="min-h-screen bg-background pt-16 text-foreground sm:pt-[4.5rem]">
      <SiteHeader />

      <div className="flex min-h-[calc(100svh-4rem)] flex-col sm:min-h-[calc(100svh-4.5rem)]">
        {/* Hero */}
        <section className="grid-backdrop relative flex flex-1 items-center overflow-x-clip">
          <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[46rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />
          <div className="page-shell relative grid w-full items-center gap-8 py-8 lg:grid-cols-2 lg:gap-12 lg:py-10">
            <div className="hero-copy">
              <span className="hero-copy-item animate-fadeInLeft group inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/20">
                <Sparkles className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-90" />{" "}
                Software studio · Since 2019
              </span>
              <h1 className="hero-copy-item animate-fadeInDown mt-4 text-[2rem] font-bold leading-[1.1] sm:text-4xl md:text-5xl lg:text-[3.25rem]">
                We build <span className="text-gradient">software products</span> the world can rely
                on.
              </h1>
              <p className="hero-copy-item animate-fadeInUp mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Bonolota IT is a product design and engineering team crafting SaaS platforms,
                websites, and Android & iOS apps — from the first sketch to a scaled launch.
              </p>
              <div className="hero-copy-item animate-fadeInUp mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
                <a
                  href="#contact"
                  className="sheen group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--glow-primary)] sm:px-7 sm:py-3.5"
                >
                  Start your project
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary sm:px-7 sm:py-3.5"
                >
                  See our work
                </a>
              </div>
              <dl className="hero-copy-item animate-zoomIn mt-8 grid grid-cols-3 gap-3 sm:mt-10 sm:gap-6">
                {stats.map((s) => (
                  <div key={s.label} className="group cursor-default">
                    <dt className="font-display text-2xl font-bold text-primary tabular-nums transition-transform duration-300 group-hover:-translate-y-1 sm:text-3xl">
                      <CountLoop to={s.to} suffix={s.suffix} />
                    </dt>
                    <dd className="mt-1 text-xs text-muted-foreground transition-colors group-hover:text-foreground">
                      {s.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="relative">
              <HeroScene />
            </div>
          </div>
        </section>

        {/* Business partners */}
        <section className="shrink-0 border-t border-border/50 py-5 sm:py-6">
          <div className="page-shell">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Top company business partners
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 sm:mt-5 sm:gap-5">
              {partners.map((p) => (
                <div
                  key={p.name}
                  className="flex h-14 items-center justify-center rounded-2xl border border-border bg-white px-6 py-3 shadow-sm sm:h-16 sm:min-w-44 sm:px-8"
                >
                  <img
                    src={p.src}
                    alt={`${p.name} logo`}
                    className={`${p.height} w-auto max-w-36 object-contain sm:max-w-40`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Services */}
      <section id="services" className="page-shell py-16 sm:py-20 lg:py-24">
        <SectionHead
          eyebrow="What we do"
          title="Our Services"
          sub="Comprehensive IT solutions to help your business thrive in the digital age."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="lift-card group surface-card rounded-3xl p-8">
              <div className="icon-pop flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold transition-colors group-hover:text-primary">
                {s.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{s.text}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="section-band">
        {/* Why us */}
        <section id="why">
          <div className="page-shell py-16 sm:py-20 lg:py-24">
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

        <section className="overflow-hidden py-2" aria-label="Technology logos">
          <TextLogoWave logos={stack} speed={90} ribbonWidth={46} curviness={24} pauseOnHover />
        </section>

        {/* Work */}
        <section id="work">
          <div className="page-shell py-16 sm:py-20 lg:py-24">
            <SectionHead
              eyebrow="Selected work"
              title="Products shipped, not slideware"
              sub="A snapshot of recent platforms, storefronts and apps built by our team."
            />
            <WorkSlider />
          </div>
        </section>
      </div>

      {/* Industries */}
      <section className="page-shell py-16 sm:py-20 lg:py-24">
        <SectionHead
          eyebrow="Industries"
          title="Domains we know well"
          sub="We have shipped production software in each of these sectors."
        />
        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-5">
          {industries.map((i) => (
            <div
              key={i.t}
              className="group flex cursor-default flex-col items-center gap-3 rounded-2xl border border-border p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:bg-primary/8"
            >
              <i.icon className="h-7 w-7 text-primary transition-transform duration-300 group-hover:scale-125" />
              <span className="text-center text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                {i.t}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="section-band">
        <div className="page-shell py-16 sm:py-20 lg:py-24">
          <SectionHead
            eyebrow="How we work"
            title="A calm, predictable delivery rhythm"
            sub="You always know what is being built this week and what ships next."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
      <section id="reviews" className="py-16 sm:py-20 lg:py-24">
        <div className="page-shell">
          <SectionHead
            eyebrow="Clients"
            title="What teams say after launch"
            sub="Join thousands of satisfied business owners who trust Bonolota POS for their daily operations."
          />
        </div>
        <div className="mt-14">
          <TestimonialMarquee />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="page-shell py-16 sm:py-20 lg:py-24">
        <SectionHead
          eyebrow="Contact"
          title="Let's build something worth using"
          sub="Tell us about your product idea and we'll reply within one business day with next steps and a rough estimate."
        />
        <div className="mt-12 rounded-[2rem] surface-card p-5 sm:p-10 md:p-14">
          <form className="grid gap-4 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
            <Field label="Your name" placeholder="Jane Cooper" />
            <Field label="Email" type="email" placeholder="jane@company.com" />
            <Field label="Company" placeholder="Acme Inc." />
            <Field label="Phone" type="tel" placeholder="+880 176 115 5089" />
            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-medium">Project details</label>
              <textarea
                rows={5}
                placeholder="We need a SaaS dashboard and a companion mobile app..."
                className="w-full rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 hover:border-primary/60 focus:border-primary"
              />
            </div>
            <button
              type="submit"
              className="sheen rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--glow-primary)] sm:col-span-2"
            >
              Send enquiry
            </button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-band">
        <div className="page-shell py-16 sm:py-20 lg:py-24">
          <SectionHead
            eyebrow="FAQ"
            title="Questions we hear most"
            sub="Still unsure about something? Ask us in the form above."
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
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function TestimonialMarquee() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const unitRef = useRef<HTMLDivElement>(null);
  const [unitsPerHalf, setUnitsPerHalf] = useState(3);

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const unit = unitRef.current;
    if (!viewport || !unit) return;

    const sync = () => {
      const view = viewport.clientWidth;
      const width = unit.scrollWidth;
      if (width <= 0) return;
      // Each animated half must be wider than the viewport so the row never
      // shows a blank gap while it loops.
      setUnitsPerHalf(Math.max(2, Math.ceil(view / width) + 1));
    };

    sync();
    const observer = new ResizeObserver(sync);
    observer.observe(viewport);
    observer.observe(unit);
    return () => observer.disconnect();
  }, []);

  const units = Array.from({ length: unitsPerHalf * 2 }, (_, copy) => copy);

  return (
    <div
      ref={viewportRef}
      className="testimonial-marquee overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
    >
      <div
        className="testimonial-marquee-track flex w-max"
        style={{ animationDuration: `${unitsPerHalf * 22}s` }}
      >
        {units.map((copy) => (
          <div
            key={copy}
            ref={copy === 0 ? unitRef : undefined}
            className="flex shrink-0 gap-5 pr-5"
            aria-hidden={copy > 0}
          >
            {testimonials.map((t) => (
              <figure
                key={`${t.n}-${copy}`}
                className="w-[20.5rem] shrink-0 rounded-2xl bg-card p-7 shadow-[0_10px_40px_-18px_rgba(15,23,42,0.28)] sm:w-[22rem]"
              >
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-[0.95rem] font-medium leading-relaxed text-foreground">
                  “{t.q}”
                </blockquote>
                <hr className="my-5 border-border/70" />
                <figcaption>
                  <span className="block font-semibold">{t.n}</span>
                  <span className="mt-0.5 block text-sm text-muted-foreground">{t.r}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function WorkSlider() {
  const hovered = useRef(false);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    const id = window.setInterval(() => {
      if (!hovered.current) {
        api.scrollNext();
      }
    }, 4500);

    return () => window.clearInterval(id);
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{ align: "start", loop: true }}
      className="mt-14"
      onMouseEnter={() => {
        hovered.current = true;
      }}
      onMouseLeave={() => {
        hovered.current = false;
      }}
    >
      <div className="relative">
        <CarouselContent className="-ml-6">
          {work.map((w) => (
            <CarouselItem key={w.title} className="pl-6 basis-[88%] sm:basis-1/2 lg:basis-1/3">
              <article className="lift-card group h-full overflow-hidden rounded-3xl surface-card">
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
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 top-1/2 z-10 h-11 w-11 -translate-y-1/2 border-border bg-background/90 shadow-md backdrop-blur-sm disabled:opacity-40 sm:left-6" />
        <CarouselNext className="right-4 top-1/2 z-10 h-11 w-11 -translate-y-1/2 border-border bg-background/90 shadow-md backdrop-blur-sm disabled:opacity-40 sm:right-6" />
      </div>
      <CarouselDots slides={work.length} />
    </Carousel>
  );
}

function CountLoop({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(to);
      return;
    }

    let frame = 0;
    let start = 0;
    const countMs = Math.min(2200, 900 + to * 0.8);

    const tick = (now: number) => {
      if (!start) start = now;
      const elapsed = now - start;
      if (elapsed >= countMs) {
        setValue(to);
        return;
      }
      const t = elapsed / countMs;
      const eased = 1 - (1 - t) ** 3;
      setValue(Math.round(eased * to));
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [to]);

  return (
    <>
      {value}
      {suffix}
    </>
  );
}

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">{title}</h2>
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
