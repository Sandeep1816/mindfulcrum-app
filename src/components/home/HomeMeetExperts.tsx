"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { BOOKING_THERAPISTS, type BookingTherapist } from "@/data/therapists-list";
import { BookingModal } from "@/components/booking/BookingModal";

export function HomeMeetExperts() {
  const [bookingFor, setBookingFor] = useState<BookingTherapist | null>(null);

  return (
    <>
      <section className="border-t border-gray-100 bg-[#f8f9fb] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c92a2a]">Our team</p>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-[#1e3a5f] md:text-4xl">
              Meet Our Experts
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#1e3a5f]/70">
              Book a consultation online with certified psychologists who match your needs.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BOOKING_THERAPISTS.map((t) => (
              <article
                key={t.id}
                className="flex flex-col overflow-hidden rounded-xl border border-gray-200/90 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[4/3] w-full bg-gray-100">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-heading text-lg font-semibold text-[#1e3a5f]">{t.name}</h3>
                  <p className="mt-1 text-sm font-medium text-[#c92a2a]">{t.specialty}</p>
                  <div className="mt-2 flex items-center gap-1.5 text-sm text-[#1e3a5f]/80">
                    <Star size={16} className="fill-[#c92a2a] text-[#c92a2a]" aria-hidden />
                    <span className="font-semibold">{t.rating}</span>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#1e3a5f]/70">{t.description}</p>
                  <div className="mt-5 flex flex-col gap-2">
                    <button
                      type="button"
                      onClick={() => setBookingFor(t)}
                      className="w-full rounded-lg border border-[#c92a2a] bg-[#c92a2a] py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#b02525]"
                    >
                      Book appointment
                    </button>
                    <Link
                      href={`/therapist/${t.id}`}
                      className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 text-center text-sm font-medium text-[#1e3a5f] transition-colors hover:bg-gray-100"
                    >
                      View profile
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {bookingFor && (
        <BookingModal therapist={bookingFor} open={!!bookingFor} onClose={() => setBookingFor(null)} />
      )}
    </>
  );
}
