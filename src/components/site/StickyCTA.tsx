import { Link } from "@tanstack/react-router";
import { Calendar, MessageCircle, Phone } from "lucide-react";

const WHATSAPP = "917204409319";
const PHONE = "+917204409319";

export function StickyCTA() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      <a
        href={`https://wa.me/${WHATSAPP}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="size-12 rounded-full bg-[#25D366] text-white grid place-items-center shadow-lg hover:scale-105 transition"
      >
        <MessageCircle size={20} />
      </a>
      <a
        href={`tel:${PHONE}`}
        aria-label="Call"
        className="size-12 rounded-full bg-white text-ink grid place-items-center shadow-lg hover:scale-105 transition"
      >
        <Phone size={18} />
      </a>
      <Link
        to="/book-a-meeting"
        aria-label="Book a meeting"
        className="hidden sm:inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-royal to-electric px-4 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_var(--electric)] hover:brightness-110 transition"
      >
        <Calendar size={16} /> Book a Meeting
      </Link>
    </div>
  );
}
