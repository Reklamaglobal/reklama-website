import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#screens", label: "Our Screens" },
  { href: "/#industries", label: "Industries" },
  { href: "/#why", label: "Why Us" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent",
      )}
    >
    <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
  <Link to="/" className="flex items-center gap-2 group">
    <span className="inline-block size-2.5 rounded-sm bg-royal shadow-[0_0_18px_var(--royal)] group-hover:scale-125 transition-transform" />
    <span className="font-display font-extrabold tracking-tight text-lg">
      Reklama Global
    </span>
  </Link>
        <nav className="hidden lg:flex items-center gap-7 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <Link
          to="/book-a-meeting"
          className="hidden lg:inline-flex items-center rounded-full bg-gradient-to-r from-royal to-electric px-5 py-2 text-sm font-semibold text-white hover:brightness-110 transition shadow-[0_8px_30px_-10px_var(--electric)]"
        >
          Book a Meeting
        </Link>
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <Link
              to="/book-a-meeting"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-full bg-gradient-to-r from-royal to-electric px-4 py-2 text-sm font-semibold text-white"
            >
              Book a Meeting
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}