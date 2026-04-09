"use client";

import Link from "next/link";
import { useState } from "react";
import { Star, Clock, Users, Award, ArrowLeft, CheckCircle, Video, Shield } from "lucide-react";
import { getTherapistProfile } from "@/data/therapists-profiles";

const timeSlots = {
  morning: ["08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM"],
  afternoon: ["12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM"],
  evening: ["04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"]
};

export function TherapistProfilePage({ therapistId }: { therapistId: string }) {
  const therapist = therapistId ? getTherapistProfile(therapistId) : null;
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  if (!therapist) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Therapist not found</h2>
          <Link href="/therapy-booking" className="text-[#c92a2a] hover:underline">
            Back to therapist listing
          </Link>
        </div>
      </div>
    );
  }

  const days = [
    { label: "Today", date: "7 Apr", slots: 24 },
    { label: "Tomorrow", date: "8 Apr", slots: 24 },
    { label: "Thu", date: "9 Apr", slots: 24 },
    { label: "Fri", date: "10 Apr", slots: 24 },
    { label: "Sat", date: "11 Apr", slots: 24 }
  ];

  const handleBooking = () => {
    if (selectedSlot) {
      setBookingConfirmed(true);
      setTimeout(() => {
        setBookingConfirmed(false);
        setSelectedSlot(null);
      }, 3000);
    }
  };

  return (
    <article
      className="bg-gray-50 min-h-screen"
      itemScope
      itemType="https://schema.org/Person"
    >
      {/* Header */}
      <section className="bg-[#1e3a5f] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/therapy-booking" className="inline-flex items-center text-gray-200 hover:text-white mb-4 space-x-2">
            <ArrowLeft size={20} />
            <span>Back to all therapists</span>
          </Link>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-shrink-0">
              <img
                src={therapist.image}
                alt={`${therapist.name}, ${therapist.title} — ${therapist.specialty}`}
                className="w-32 h-32 rounded-full object-cover border-4 border-gray-100"
                itemProp="image"
              />
            </div>
            <div className="flex-1">
              <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <h1
                    className="mb-1 break-words text-2xl font-bold text-[#1e3a5f] sm:text-3xl"
                    itemProp="name"
                  >
                    {therapist.name}
                  </h1>
                  <p className="text-lg text-gray-600 mb-2" itemProp="jobTitle">
                    {therapist.title}
                  </p>
                  <div className="inline-block bg-[#c92a2a]/10 text-[#c92a2a] px-4 py-1.5 rounded-full text-sm font-semibold">
                    {therapist.specialty}
                  </div>
                </div>
                {therapist.badge && (
                  <div className="shrink-0 self-start rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700 sm:text-base">
                    👍 {therapist.badge}
                  </div>
                )}
              </div>

              <div className="mb-4 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4">
                <div className="flex items-center space-x-2">
                  <Star className="text-amber-400 fill-amber-400" size={20} />
                  <div>
                    <div className="font-bold text-[#1e3a5f]">{therapist.rating}</div>
                    <div className="text-xs text-gray-600">Rating</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="text-[#c92a2a]" size={20} />
                  <div>
                    <div className="font-bold text-[#1e3a5f]">{therapist.experience}</div>
                    <div className="text-xs text-gray-600">Experience</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="text-[#c92a2a]" size={20} />
                  <div>
                    <div className="font-bold text-[#1e3a5f]">{therapist.totalPatients}</div>
                    <div className="text-xs text-gray-600">Patients</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="text-[#c92a2a]" size={20} />
                  <div>
                    <div className="font-bold text-[#1e3a5f]">₹{therapist.pricePerSession}</div>
                    <div className="text-xs text-gray-600">Per Session</div>
                  </div>
                </div>
              </div>

              <h2 className="mt-6 text-lg font-semibold text-[#1e3a5f]">About</h2>
              <p className="mt-2 text-gray-700 leading-relaxed" itemProp="description">
                {therapist.longDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-[#1e3a5f] mb-4">Qualifications</h3>
              <ul className="space-y-2">
                {therapist.qualifications.map((qual, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">{qual}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-[#1e3a5f] mb-4">Specializations</h3>
              <div className="flex flex-wrap gap-2">
                {therapist.specializations.map((spec, idx) => (
                  <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-[#1e3a5f] mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {therapist.languages.map((lang, idx) => (
                  <span key={idx} className="bg-[#c92a2a]/10 text-[#c92a2a] px-3 py-1 rounded-full text-sm font-medium">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2d4a6f] rounded-xl shadow-md p-6 text-white">
              <h3 className="font-bold mb-4">Session Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <Video size={18} />
                  <span>45-minute video session</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield size={18} />
                  <span>100% confidential</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle size={18} />
                  <span>Instant booking confirmation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6">Book a Consultation</h2>

              {bookingConfirmed ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="text-green-600" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h3>
                  <p className="text-gray-600 mb-4">
                    Your session with {therapist.name} on {days[selectedDay].label} at {selectedSlot} has been confirmed.
                  </p>
                  <p className="text-sm text-gray-500">
                    You will receive a confirmation email with the video call link shortly.
                  </p>
                </div>
              ) : (
                <>
                  {/* Day Selection */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Select a Date</h3>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5">
                      {days.map((day, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setSelectedDay(idx);
                            setSelectedSlot(null);
                          }}
                          className={`p-3 rounded-lg border-2 transition-all text-center ${
                            selectedDay === idx
                              ? "border-[#c92a2a] bg-[#c92a2a]/5"
                              : "border-gray-200 hover:border-[#c92a2a]/50"
                          }`}
                        >
                          <div className="font-semibold text-gray-900 text-sm">{day.label}</div>
                          <div className="text-xs text-gray-600">{day.date}</div>
                          <div className="text-xs text-green-600 font-medium mt-1">{day.slots} Slots</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Slots */}
                  <div className="space-y-6">
                    {/* Morning */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Morning</h3>
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
                        {timeSlots.morning.map((slot) => (
                          <button
                            key={slot}
                            onClick={() => setSelectedSlot(slot)}
                            className={`rounded-lg border-2 px-2 py-2 text-xs font-medium transition-all sm:px-4 sm:py-2.5 sm:text-sm ${
                              selectedSlot === slot
                                ? "border-[#c92a2a] bg-[#c92a2a] text-white"
                                : "border-gray-200 hover:border-[#c92a2a] text-gray-700"
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Afternoon */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Afternoon</h3>
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
                        {timeSlots.afternoon.map((slot) => (
                          <button
                            key={slot}
                            onClick={() => setSelectedSlot(slot)}
                            className={`rounded-lg border-2 px-2 py-2 text-xs font-medium transition-all sm:px-4 sm:py-2.5 sm:text-sm ${
                              selectedSlot === slot
                                ? "border-[#c92a2a] bg-[#c92a2a] text-white"
                                : "border-gray-200 hover:border-[#c92a2a] text-gray-700"
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Evening */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Evening</h3>
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
                        {timeSlots.evening.map((slot) => (
                          <button
                            key={slot}
                            onClick={() => setSelectedSlot(slot)}
                            className={`rounded-lg border-2 px-2 py-2 text-xs font-medium transition-all sm:px-4 sm:py-2.5 sm:text-sm ${
                              selectedSlot === slot
                                ? "border-[#c92a2a] bg-[#c92a2a] text-white"
                                : "border-gray-200 hover:border-[#c92a2a] text-gray-700"
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Booking Summary */}
                  {selectedSlot && (
                    <div className="mt-8 p-6 bg-gray-50 rounded-lg border-2 border-[#c92a2a]/20">
                      <h3 className="font-semibold text-gray-900 mb-3">Booking Summary</h3>
                      <div className="space-y-2 text-sm mb-4">
                        <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
                          <span className="shrink-0 text-gray-600">Date:</span>
                          <span className="min-w-0 break-words font-medium text-gray-900 sm:text-right">
                            {days[selectedDay].label}, {days[selectedDay].date}
                          </span>
                        </div>
                        <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
                          <span className="shrink-0 text-gray-600">Time:</span>
                          <span className="font-medium text-gray-900">{selectedSlot}</span>
                        </div>
                        <div className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
                          <span className="shrink-0 text-gray-600">Duration:</span>
                          <span className="font-medium text-gray-900">45 minutes</span>
                        </div>
                        <div className="flex flex-col gap-1 border-t border-gray-300 pt-2 sm:flex-row sm:items-center sm:justify-between">
                          <span className="font-semibold text-gray-900">Total:</span>
                          <span className="text-xl font-bold text-[#c92a2a]">₹{therapist.pricePerSession}</span>
                        </div>
                      </div>
                      <button
                        onClick={handleBooking}
                        className="w-full px-6 py-3 bg-[#c92a2a] text-white rounded-lg hover:bg-[#b02525] transition-colors font-semibold"
                      >
                        Confirm Booking
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
