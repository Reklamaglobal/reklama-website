import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Calendar, CheckCircle2, Loader2, Mail, MessageCircle, Phone } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/site/Navbar";
import { StickyCTA } from "@/components/site/StickyCTA";
import { Reveal } from "@/components/site/Reveal";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/book-a-meeting")({
  head: () => ({
    meta: [
      { title: "Book a Meeting — RekaDOOH | Premium DOOH Advertising Bangalore" },
      {
        name: "description",
        content:
          "Schedule a meeting with the RekaDOOH sales team. Share your industry, campaign budget and preferred time — we'll respond within hours.",
      },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: BookMeeting,
});

const industries = [
  "Real Estate","Retail","Lifestyle","Healthcare","Education","Technology","Startups","Restaurants","Hotels","Automobile","Events","Entertainment","Finance","E-commerce","Other",
];
const budgets = ["Under ₹1 Lakh","₹1–3 Lakhs","₹3–10 Lakhs","₹10–25 Lakhs","₹25 Lakhs+"];
const durations = ["1 week","2 weeks","1 month","3 months","6 months","12 months"];
const times = ["Morning (10 AM – 12 PM)","Afternoon (12 PM – 4 PM)","Evening (4 PM – 7 PM)"];

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  budget: string;
  duration: string;
  preferred_date: string;
  preferred_time: string;
  message: string;
};

const initial: FormState = {
  name: "", company: "", email: "", phone: "",
  industry: "", budget: "", duration: "",
  preferred_date: "", preferred_time: "", message: "",
};

function Field({
  label, children, required,
}: { label: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-foreground">
        {label}{required && <span className="text-electric"> *</span>}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

const inputCls =
  "w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/30 transition";

function BookMeeting() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  function update<K extends keyof FormState>(k: K, v: FormState[K]) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  async function submit(e: React.FormEvent, intent: "meeting" | "proposal") {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      toast.error("Please fill in your name, email and phone number.");
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("leads").insert({
      name: form.name,
      company: form.company || null,
      email: form.email,
      phone: form.phone,
      industry: form.industry || null,
      budget: form.budget || null,
      duration: form.duration || null,
      preferred_date: form.preferred_date || null,
      preferred_time: form.preferred_time || null,
      message: form.message || null,
      source: intent === "proposal" ? "proposal_request" : "book_a_meeting",
    });
    setSubmitting(false);
    if (error) {
      console.error(error);
      toast.error("Something went wrong. Please call or WhatsApp us directly.");
      return;
    }
    setDone(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (done) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <StickyCTA />
        <section className="pt-32 pb-24 mx-auto max-w-3xl px-6 text-center">
          <div className="inline-flex size-16 items-center justify-center rounded-full bg-electric/15 text-electric">
            <CheckCircle2 size={32} />
          </div>
          <h1 className="mt-6 font-display text-4xl md:text-5xl font-extrabold tracking-tight">
            Thank you, {form.name.split(" ")[0]}!
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Your request has been received. Our sales team will reach out
            within a few hours to confirm your meeting and share a tailored
            proposal.
          </p>
          <div className="mt-8 rounded-2xl border border-border bg-card p-6 text-left">
            <p className="text-sm text-muted-foreground">For anything urgent, reach us directly:</p>
            <div className="mt-4 grid sm:grid-cols-3 gap-3">
              <a href="tel:+917204409319" className="rounded-xl border border-border px-4 py-3 text-sm font-semibold flex items-center justify-center gap-2 hover:border-electric/50">
                <Phone size={14}/> Call
              </a>
              <a href="https://wa.me/917204409319" target="_blank" rel="noreferrer" className="rounded-xl border border-border px-4 py-3 text-sm font-semibold flex items-center justify-center gap-2 hover:border-electric/50">
                <MessageCircle size={14}/> WhatsApp
              </a>
              <a href="mailto:reklamaglobal2025@gmail.com" className="rounded-xl border border-border px-4 py-3 text-sm font-semibold flex items-center justify-center gap-2 hover:border-electric/50">
                <Mail size={14}/> Email
              </a>
            </div>
          </div>
          <Link to="/" className="mt-10 inline-flex items-center gap-2 text-sm text-electric hover:underline">
            <ArrowLeft size={14} /> Back to home
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <StickyCTA />
      <Toaster richColors theme="dark" />

      <section className="pt-28 md:pt-32 pb-24">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-5 gap-12">
          <Reveal className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-electric">Book a Meeting</p>
            <h1 className="mt-4 font-display text-4xl md:text-5xl font-extrabold tracking-tight">
              Plan your Bangalore DOOH campaign.
            </h1>
            <p className="mt-4 text-muted-foreground">
              Share a few details and our media planning team will get back to
              you with available screens, pricing and a strategy tailored to
              your brand.
            </p>
            <div className="mt-8 space-y-3 text-sm">
              <div className="flex items-center gap-3"><span className="size-8 rounded-md bg-electric/10 grid place-items-center text-electric"><Calendar size={14}/></span> Response within a few hours</div>
              <div className="flex items-center gap-3"><span className="size-8 rounded-md bg-electric/10 grid place-items-center text-electric"><Phone size={14}/></span> +91 72044 09319</div>
              <div className="flex items-center gap-3"><span className="size-8 rounded-md bg-electric/10 grid place-items-center text-electric"><Mail size={14}/></span> reklamaglobal2025@gmail.com</div>
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-3">
            <form onSubmit={(e) => submit(e, "meeting")} className="rounded-3xl border border-border bg-card p-6 md:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full Name" required>
                  <input className={inputCls} value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Your name" />
                </Field>
                <Field label="Company Name">
                  <input className={inputCls} value={form.company} onChange={(e) => update("company", e.target.value)} placeholder="Acme Pvt Ltd" />
                </Field>
                <Field label="Business Email" required>
                  <input type="email" className={inputCls} value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@company.com" />
                </Field>
                <Field label="Phone Number" required>
                  <input type="tel" className={inputCls} value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+91 ..." />
                </Field>
                <Field label="Industry">
                  <select className={inputCls} value={form.industry} onChange={(e) => update("industry", e.target.value)}>
                    <option value="">Select industry</option>
                    {industries.map((i) => <option key={i} value={i}>{i}</option>)}
                  </select>
                </Field>
                <Field label="Advertising Budget">
                  <select className={inputCls} value={form.budget} onChange={(e) => update("budget", e.target.value)}>
                    <option value="">Select budget</option>
                    {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
                  </select>
                </Field>
                <Field label="Campaign Duration">
                  <select className={inputCls} value={form.duration} onChange={(e) => update("duration", e.target.value)}>
                    <option value="">Select duration</option>
                    {durations.map((d) => <option key={d} value={d}>{d}</option>)}
                  </select>
                </Field>
                <Field label="Preferred Meeting Date">
                  <input type="date" className={inputCls} value={form.preferred_date} onChange={(e) => update("preferred_date", e.target.value)} />
                </Field>
                <Field label="Preferred Time">
                  <select className={inputCls} value={form.preferred_time} onChange={(e) => update("preferred_time", e.target.value)}>
                    <option value="">Select time</option>
                    {times.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </Field>
              </div>
              <Field label="Campaign Requirement">
                <textarea
                  rows={4}
                  className={inputCls + " resize-none"}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="Tell us about your brand, goals, target areas..."
                />
              </Field>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-royal to-electric px-6 py-3 text-sm font-semibold text-white shadow-[0_15px_40px_-15px_var(--electric)] hover:brightness-110 transition disabled:opacity-60"
                >
                  {submitting ? <Loader2 size={16} className="animate-spin" /> : <Calendar size={16} />}
                  Schedule Meeting
                </button>
                <button
                  type="button"
                  onClick={(e) => submit(e, "proposal")}
                  disabled={submitting}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-6 py-3 text-sm font-semibold text-foreground hover:bg-white/10 transition disabled:opacity-60"
                >
                  Request Proposal
                </button>
              </div>
              <p className="text-xs text-muted-foreground">By submitting, you agree to be contacted by the RekaDOOH team.</p>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
