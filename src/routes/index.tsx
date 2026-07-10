import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Calendar,
  Check,
  Clock,
  FileText,
  MapPin,
  MonitorPlay,
  Repeat,
  Sparkles,
  Building2,
  ShoppingBag,
  Sparkle,
  HeartPulse,
  GraduationCap,
  Cpu,
  Rocket,
  UtensilsCrossed,
  Hotel,
  Car,
  CalendarDays,
  Film,
  Landmark,
  ShoppingCart,
  Mail,
  Phone,
  MessageCircle,
  Eye,
  Zap,
  Layers,
  Palette,
  LineChart,
  Globe2,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Reveal } from "@/components/site/Reveal";
import { StickyCTA } from "@/components/site/StickyCTA";
import heroImg from "@/assets/rekadooh-hero.jpg";
import screen1 from "@/assets/rekadooh-screen-1.jpg";
import screen2 from "@/assets/rekadooh-screen-2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Reklama Global — Premium Digital Outdoor Advertising in Bangalore" },
      {
        name: "description",
        content:
          "Premium DOOH advertising across Bangalore. High-impact LED digital billboards at premium traffic junctions. 720 plays/day, 14 hours active. Book a meeting today.",
      },
      { name: "keywords", content: "DOOH advertising Bangalore, LED billboard Bangalore, digital outdoor advertising, Reklama Global, outdoor media Bangalore" },
      { property: "og:title", content: "Rekalama Global — Premium DOOH Advertising" },
      { property: "og:description", content: "Connect your brand with thousands of commuters every day through premium LED digital billboards at Bangalore's busiest junctions." },
      { property: "og:image", content: "/og-image.jpg" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Rekalama Global",
          legalName: "Rekalama Global",
          url: "https://rekadooh.com",
          logo: "https://rekadooh.com/logo.png",
          description:
            "Premium Digital Out-of-Home (DOOH) advertising network in Bangalore.",
          telephone: "+91-7204409319",
          email: "reklamaglobal2025@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Bangalore",
            addressRegion: "Karnataka",
            addressCountry: "IN",
          },
          sameAs: [],
        }),
      },
    ],
  }),
  component: Home,
});

function useCounter(target: number, duration = 1600) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (t: number) => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(Math.round(target * eased));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [target, duration]);
  return { value, ref };
}

function Stat({
  value,
  suffix = "",
  label,
  sub,
}: {
  value: number;
  suffix?: string;
  label: string;
  sub?: string;
}) {
  const c = useCounter(value);
  return (
    <div className="rounded-2xl border border-border bg-card/60 backdrop-blur p-6">
      <div className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-gradient-royal">
        <span ref={c.ref}>{c.value}</span>
        {suffix}
      </div>
      <div className="mt-2 text-sm font-semibold uppercase tracking-wider text-foreground">
        {label}
      </div>
      {sub && <div className="mt-1 text-sm text-muted-foreground">{sub}</div>}
    </div>
  );
}

const industries = [
  { icon: Building2, name: "Real Estate", desc: "Launch projects with high-frequency exposure at premium junctions." },
  { icon: ShoppingBag, name: "Retail", desc: "Drive footfall to flagship stores with location-targeted creatives." },
  { icon: Sparkle, name: "Lifestyle", desc: "Build aspirational brand recall across affluent corridors." },
  { icon: HeartPulse, name: "Healthcare", desc: "Build trust in your neighbourhood with consistent visibility." },
  { icon: GraduationCap, name: "Education", desc: "Reach parents & students near schools, colleges and tech parks." },
  { icon: Cpu, name: "Technology", desc: "Hit decision-makers commuting through Outer Ring Road & Whitefield." },
  { icon: Rocket, name: "Startups", desc: "Punch above your weight — own a junction for a launch sprint." },
  { icon: UtensilsCrossed, name: "Restaurants", desc: "Hyper-local screens turn cravings into walk-ins." },
  { icon: Hotel, name: "Hotels", desc: "Reach business travellers across CBD and airport corridors." },
  { icon: Car, name: "Automobile", desc: "Showcase new launches with full-motion creatives." },
  { icon: CalendarDays, name: "Events", desc: "Drive ticket sales with countdown campaigns." },
  { icon: Film, name: "Entertainment", desc: "Trailers, OTT launches and concerts — cinematic on LED." },
  { icon: Landmark, name: "Finance", desc: "Position banks, NBFCs and wealth brands at premium addresses." },
  { icon: ShoppingCart, name: "E-commerce", desc: "Sale-day spikes amplified by always-on outdoor visibility." },
];

const screens = [
  {
    img: heroImg,
    location: "Trinity Circle",
    area: "North Bangalore",
    dims: "25 ft × 25 ft",
    resolution: "P6 SMD",
    plays: "720 / day",
    hours: "8:30 AM – 10:30 PM",
    format: "Static / Motion / Video",
  },
  {
    img: screen1,
    location: "Mekhri Circle",
    area: "Central Bangalore",
    dims: "25 ft × 25 ft",
    resolution: "P6 SMD",
    plays: "720 / day",
    hours: "8:30 AM – 10:30 PM",
    format: "Static / Motion",
  },
  {
    img: screen2,
    location: "Commercial Street",
    area: "Shivajinagar",
    dims: "12.5 ft × 22 ft (Portrait)",
    resolution: "P6 SMD",
    plays: "720 / day",
    hours: "8:30 AM – 10:30 PM",
    format: "Static / Motion / Video",
  },
];



const whyUs = [
  { icon: MapPin, title: "Premium Traffic Locations", desc: "Hand-picked junctions with maximum commuter density." },
  { icon: Repeat, title: "High-Frequency Advertising", desc: "Your ad plays every minute, 14 hours a day." },
  { icon: Clock, title: "Flexible Campaign Duration", desc: "Weekly, fortnightly or monthly bookings." },
  { icon: Palette, title: "Creative Support", desc: "In-house design team to craft scroll-stopping creatives." },
  { icon: Zap, title: "Fast Campaign Activation", desc: "Go live in as little as 48 hours." },
  { icon: Layers, title: "Professional Media Planning", desc: "Strategic location mix tailored to your brand." },
  { icon: LineChart, title: "Performance Focused", desc: "Transparent reporting and continuous optimisation." },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <StickyCTA />

      {/* HERO */}
      <section id="top" className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Premium LED digital billboards across Bangalore"
            width={1920}
            height={1280}
            className="h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
          <div className="absolute inset-0 bg-grid opacity-40" />
        </div>

        <div className="mx-auto max-w-7xl px-6 pt-32 md:pt-40 pb-20 md:pb-28">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-electric/40 bg-electric/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-electric">
              <Sparkles size={14} /> 
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] max-w-5xl">
              Premium Digital Outdoor
              <br />
              Advertising Across{" "}
              <span className="text-gradient-royal">Bangalore</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Connect your brand with thousands of commuters every day through
              high-impact LED digital billboards located at premium traffic
              junctions.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/book-a-meeting"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-royal to-electric px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_60px_-15px_var(--electric)] hover:brightness-110 transition"
              >
                <Calendar size={16} /> Book a Meeting
              </Link>
              <Link
                to="/book-a-meeting"
                search={{ intent: "proposal" } as never}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 backdrop-blur px-6 py-3 text-sm font-semibold text-foreground hover:bg-white/10 transition"
              >
                <FileText size={16} /> Get a Proposal
              </Link>
              <a
                href="#screens"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground/80 hover:text-foreground transition"
              >
                View Our Screens <ArrowRight size={16} />
              </a>
            </div>
          </Reveal>

          {/* STATS */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Stat value={28} suffix="+" label="Premium LED Locations" sub="Across Bangalore" />
            <Stat value={720} label="Plays per Day" sub="Per location" />
            <Stat value={10} suffix="s" label="Ad Every Minute" sub="High-frequency rotation" />
            <Stat value={14} suffix=" hrs" label="Active Daily" sub="8:30 AM – 10:30 PM" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 md:py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-12 items-start">
          <Reveal className="md:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-electric">About RekaDOOH</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight">
              We build the screens<br/>your brand lives on.
            </h2>
          </Reveal>
          <Reveal delay={100} className="md:col-span-7 space-y-6">
            <p className="text-lg text-muted-foreground">
              Rekalama Global is a premium Digital Out-of-Home advertising network
              operating under <span className="text-foreground">Reklama Global</span>.
              We specialise in high-quality LED digital billboards installed at
              strategic, high-traffic locations across Bangalore — engineered to
              deliver maximum brand visibility, every single day.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-2 text-electric">
                  <Eye size={18} /> <span className="text-xs font-semibold uppercase tracking-wider">Mission</span>
                </div>
                <p className="mt-3 text-foreground">
                  Help businesses maximize brand visibility through premium
                  outdoor digital advertising.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-2 text-electric">
                  <Globe2 size={18} /> <span className="text-xs font-semibold uppercase tracking-wider">Vision</span>
                </div>
                <p className="mt-3 text-foreground">
                  Become India's most trusted DOOH advertising network.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SCREENS */}
      <section id="screens" className="py-24 md:py-32 border-t border-border bg-gradient-night">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-electric">Our LED Screens</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight max-w-3xl">
              Premium screens at Bangalore's busiest junctions.
            </h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {screens.map((s, i) => (
              <Reveal key={s.location} delay={i * 80}>
                <article className="group rounded-2xl overflow-hidden border border-border bg-card hover:border-electric/50 transition-colors">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={s.img}
                      alt={`LED screen at ${s.location}`}
                      loading="lazy"
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
                      <MapPin size={12} /> {s.area}
                    </div>
                    <h3 className="mt-1 font-display text-xl font-bold">{s.location}</h3>
                    <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                      <div><dt className="text-muted-foreground">Size</dt><dd>{s.dims}</dd></div>
                      <div><dt className="text-muted-foreground">Resolution</dt><dd>{s.resolution}</dd></div>
                      <div><dt className="text-muted-foreground">Plays</dt><dd>{s.plays}</dd></div>
                      <div><dt className="text-muted-foreground">Hours</dt><dd>{s.hours}</dd></div>
                      <div className="col-span-2"><dt className="text-muted-foreground">Format</dt><dd>{s.format}</dd></div>
                    </dl>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/book-a-meeting" className="inline-flex items-center gap-2 text-sm font-semibold text-electric hover:underline">
              Request the full coverage map <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="py-24 md:py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-electric">Industries We Serve</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight max-w-3xl">
              DOOH advertising tailored to every industry.
            </h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((ind, i) => (
              <Reveal key={ind.name} delay={i * 40}>
                <div className="group h-full rounded-2xl border border-border bg-card p-6 hover:bg-card/80 hover:border-electric/50 hover:-translate-y-1 transition-all">
                  <div className="inline-flex size-10 items-center justify-center rounded-lg bg-electric/10 text-electric">
                    <ind.icon size={20} />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold">{ind.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{ind.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

     
      {/* WHY US */}
      <section id="why" className="py-24 md:py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-electric">Why Choose Us</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight max-w-3xl">
              The most efficient way to advertise in Bangalore.
            </h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 60}>
                <div className="h-full rounded-2xl border border-border bg-card p-6">
                  <div className="inline-flex size-10 items-center justify-center rounded-lg bg-royal/15 text-electric">
                    <w.icon size={20} />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold">{w.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="border-t border-border bg-gradient-to-br from-royal to-electric">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight max-w-2xl">
              Ready to light up Bangalore with your brand?
            </h2>
            <p className="mt-2 text-white/80">Talk to our media planning team and get a tailored proposal in 24 hours.</p>
          </div>
          <Link
            to="/book-a-meeting"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink hover:bg-white/90 transition"
          >
            <Calendar size={16} /> Book a Meeting
          </Link>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 md:py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-electric">Contact</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold tracking-tight">
              Let's plan your next campaign.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md">
              Reach our team directly — we typically respond within a few hours
              during business days.
            </p>
            <div className="mt-8 space-y-4">
              <a href="mailto:reklamaglobal2025@gmail.com" className="flex items-center gap-3 text-foreground hover:text-electric transition">
                <span className="size-10 rounded-lg bg-electric/10 grid place-items-center text-electric"><Mail size={18} /></span>
                reklamaglobal2025@gmail.com
              </a>
              <a href="tel:+917204409319" className="flex items-center gap-3 text-foreground hover:text-electric transition">
                <span className="size-10 rounded-lg bg-electric/10 grid place-items-center text-electric"><Phone size={18} /></span>
                +91 72044 09319
              </a>
              <a href="https://wa.me/917204409319" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-foreground hover:text-electric transition">
                <span className="size-10 rounded-lg bg-electric/10 grid place-items-center text-electric"><MessageCircle size={18} /></span>
                WhatsApp +91 72044 09319
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <span className="size-10 rounded-lg bg-electric/10 grid place-items-center text-electric"><MapPin size={18} /></span>
                Bangalore, Karnataka, India
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-3xl border border-border bg-card p-8">
              <h3 className="font-display text-2xl font-bold">Prefer to schedule a meeting?</h3>
              <p className="mt-2 text-muted-foreground">
                Use our quick booking form — share your industry, budget and
                preferred time. Our sales team will confirm within hours.
              </p>
              <Link
                to="/book-a-meeting"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-royal to-electric px-6 py-3 text-sm font-semibold text-white hover:brightness-110 transition"
              >
                <Calendar size={16} /> Book a Meeting
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-12">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="inline-block size-2.5 rounded-sm bg-royal" />
            <span className="font-display font-extrabold text-foreground">Reka<span className="text-electric">DOOH</span></span>
            <span className="ml-2">© {new Date().getFullYear()} Reklama Global. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-foreground">About</a>
            <a href="#screens" className="hover:text-foreground">Screens</a>
            <Link to="/book-a-meeting" className="hover:text-foreground">Book a Meeting</Link>
          </div>
        </div>
      </footer>

      <MonitorPlay className="hidden" />
    </div>
  );
}
