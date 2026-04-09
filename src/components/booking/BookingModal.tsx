"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  X,
  Star,
  Clock,
  Users,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Sunrise,
  Sun,
  Sunset,
  CheckCircle,
  Loader2,
} from "lucide-react";
import type { BookingTherapist } from "@/data/therapists-list";
import { getBookingDayOptions, TIME_SLOT_GROUPS } from "@/data/booking-slots";

type Props = {
  therapist: BookingTherapist;
  open: boolean;
  onClose: () => void;
};

const groupMeta = [
  { key: "morning" as const, Icon: Sunrise },
  { key: "afternoon" as const, Icon: Sun },
  { key: "evening" as const, Icon: Sunset },
];

export function BookingModal({ therapist, open, onClose }: Props) {
  const days = getBookingDayOptions(5);
  const [dayIndex, setDayIndex] = useState(0);
  const [slot, setSlot] = useState<string | null>(null);
  const [patientName, setPatientName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const stripRef = useRef<HTMLDivElement>(null);

  const reset = useCallback(() => {
    setDayIndex(0);
    setSlot(null);
    setPatientName("");
    setEmail("");
    setPhone("");
    setError(null);
    setSuccess(false);
    setSubmitting(false);
  }, []);

  useEffect(() => {
    if (open) {
      reset();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, reset]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const scrollStrip = (dir: -1 | 1) => {
    const el = stripRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(280, el.clientWidth * 0.8), behavior: "smooth" });
  };

  const selectedDay = days[dayIndex];
  if (!open) return null;

  const handleConfirm = async () => {
    setError(null);
    if (!slot) {
      setError("Please select a time slot.");
      return;
    }
    const name = patientName.trim();
    const em = email.trim().toLowerCase();
    if (!name || !em) {
      setError("Please enter your full name and email.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          therapistId: therapist.id,
          therapistName: therapist.name,
          specialty: therapist.specialty,
          pricePerSession: therapist.pricePerSession,
          appointmentDateIso: selectedDay.dateIso,
          dayLabel: selectedDay.label,
          daySub: selectedDay.sub,
          timeSlot: slot,
          patientName: name,
          patientEmail: em,
          patientPhone: phone.trim(),
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setError(data.error ?? "Could not complete booking. Please try again.");
        return;
      }
      setSuccess(true);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex min-h-0 items-center justify-center overflow-y-auto overscroll-contain p-3 py-[max(0.75rem,env(safe-area-inset-top))] pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        className="absolute inset-0 bg-[#0f172a]/55 backdrop-blur-[2px]"
        aria-label="Close"
        onClick={onClose}
      />

      <div className="relative z-10 my-auto flex max-h-[min(100dvh-1.5rem,880px)] w-full max-w-lg flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-2xl sm:max-h-[min(92vh,880px)]">
        {success ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 py-14 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
              <CheckCircle className="text-emerald-600" size={36} strokeWidth={2} />
            </div>
            <h2 className="mt-6 font-heading text-2xl font-semibold text-[#1e3a5f]">Thank you!</h2>
            <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-[#1e3a5f]/75">
              Your consultation with <span className="font-semibold text-[#1e3a5f]">{therapist.name}</span> is
              confirmed for{" "}
              <span className="font-semibold">
                {selectedDay.label}, {slot}
              </span>
              . We&apos;ve sent a confirmation email with these details.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-10 rounded-sm border border-[#1e3a5f] bg-[#1e3a5f] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#152d4d]"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="relative shrink-0 bg-gradient-to-br from-[#1e3a5f] to-[#152a45] px-5 pb-5 pt-5 text-white">
              <button
                type="button"
                onClick={onClose}
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                aria-label="Close"
              >
                <X size={20} strokeWidth={2} />
              </button>

              <div className="flex gap-4 pr-10">
                <div className="relative h-[88px] w-[88px] shrink-0 overflow-hidden rounded-xl border border-white/15 bg-white/10">
                  <Image
                    src={therapist.image}
                    alt={therapist.name}
                    width={176}
                    height={176}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="font-heading text-xl font-semibold leading-tight tracking-tight">{therapist.name}</h2>
                  <p className="mt-1 text-sm font-medium text-[#c92a2a]">{therapist.specialty}</p>
                  <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-white/75">
                    <span className="inline-flex items-center gap-1">
                      <Clock size={14} className="text-white/90" />
                      {therapist.experience}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Star size={14} className="fill-[#c92a2a] text-[#c92a2a]" />
                      {therapist.rating}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Users size={14} />
                      {therapist.totalPatients} patients
                    </span>
                  </div>
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-white/70">{therapist.description}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center rounded-md bg-[#c92a2a] px-3 py-1.5 text-sm font-semibold shadow-sm">
                      ₹{therapist.pricePerSession} per session
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-white/65">
                      <Calendar size={14} />
                      {dayIndex === 0 ? "Available today" : "Pick a date below"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto px-5 pb-5 pt-4">
              <h3 className="text-center font-heading text-lg font-semibold text-[#1e3a5f]">
                Select a slot to book consultation
              </h3>

              <div className="relative mt-4 flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => scrollStrip(-1)}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-[#1e3a5f] shadow-sm hover:bg-gray-50"
                  aria-label="Previous dates"
                >
                  <ChevronLeft size={18} />
                </button>
                <div
                  ref={stripRef}
                  className="flex min-h-[4.5rem] flex-1 snap-x snap-mandatory gap-2 overflow-x-auto scroll-smooth pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                  {days.map((d, i) => {
                    const active = i === dayIndex;
                    return (
                      <button
                        key={d.dateIso}
                        type="button"
                        onClick={() => {
                          setDayIndex(i);
                          setSlot(null);
                        }}
                        className={`flex min-w-[5.5rem] shrink-0 snap-center flex-col items-center justify-center rounded-xl border px-3 py-2.5 text-center transition-all ${
                          active
                            ? "border-[#c92a2a] bg-[#c92a2a]/8 shadow-sm ring-1 ring-[#c92a2a]/25"
                            : "border-gray-200 bg-white hover:border-gray-300"
                        }`}
                      >
                        <span className={`text-xs font-semibold ${active ? "text-[#c92a2a]" : "text-[#1e3a5f]"}`}>
                          {d.label}
                        </span>
                        <span className="text-[11px] text-gray-500">{d.sub}</span>
                        <span className="mt-0.5 text-[10px] font-medium text-emerald-600">{d.slotsCount} slots</span>
                      </button>
                    );
                  })}
                </div>
                <button
                  type="button"
                  onClick={() => scrollStrip(1)}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-[#1e3a5f] shadow-sm hover:bg-gray-50"
                  aria-label="Next dates"
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              <div className="mt-6 space-y-6">
                {groupMeta.map(({ key, Icon }) => (
                  <div key={key}>
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#1e3a5f]">
                      <Icon size={18} className="text-[#c92a2a]" strokeWidth={2} />
                      {TIME_SLOT_GROUPS[key].label}
                    </div>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
                      {TIME_SLOT_GROUPS[key].slots.map((t) => {
                        const selected = slot === t;
                        return (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setSlot(t)}
                            className={`rounded-lg border px-2 py-2 text-center text-xs font-medium transition-all ${
                              selected
                                ? "border-[#c92a2a] bg-[#c92a2a] text-white shadow-sm"
                                : "border-gray-200 bg-white text-[#1e3a5f] hover:border-[#c92a2a]/40"
                            }`}
                          >
                            {t}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-3 border-t border-gray-100 pt-5">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[#1e3a5f]/70">
                    Full name *
                  </label>
                  <input
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none ring-[#c92a2a]/30 focus:ring-2"
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[#1e3a5f]/70">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none ring-[#c92a2a]/30 focus:ring-2"
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[#1e3a5f]/70">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none ring-[#c92a2a]/30 focus:ring-2"
                    placeholder="+91 …"
                    autoComplete="tel"
                  />
                </div>
              </div>

              {error && (
                <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800" role="alert">
                  {error}
                </p>
              )}

              <button
                type="button"
                onClick={handleConfirm}
                disabled={submitting}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-sm bg-[#c92a2a] py-3.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#b02525] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    Booking…
                  </>
                ) : (
                  "Confirm booking"
                )}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
