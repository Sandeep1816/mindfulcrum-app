import Link from "next/link";
import { Star, Clock, Users, Award, Calendar } from "lucide-react";
import { BOOKING_THERAPISTS } from "@/data/therapists-list";

const therapists = BOOKING_THERAPISTS;

export function TherapyBookingPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-[#1e3a5f] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              Book Your Therapy Session
            </h1>
            <p className="text-lg text-gray-200 sm:text-xl">
              Connect with certified psychologists for online 1:1 therapy sessions
            </p>
          </div>
        </div>
      </section>

      {/* Filters & Info */}
      <section className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">{therapists.length} therapists</span> available for immediate booking
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              <div className="flex items-center space-x-1 text-gray-600">
                <Calendar size={16} className="text-[#c92a2a]" />
                <span>Flexible scheduling</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-600">
                <Award size={16} className="text-[#c92a2a]" />
                <span>Certified professionals</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Therapist Cards */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {therapists.map((therapist) => (
              <div key={therapist.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-200">
                <div className="p-6">
                  <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:space-x-4">
                    <img
                      src={therapist.image}
                      alt={therapist.name}
                      className="h-20 w-20 shrink-0 rounded-full border-4 border-gray-100 object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div className="min-w-0">
                          <h3 className="text-xl font-bold text-[#1e3a5f]">{therapist.name}</h3>
                          <p className="text-sm text-gray-600">{therapist.title}</p>
                        </div>
                        {therapist.badge && (
                          <div className="shrink-0 self-start rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                            👍 {therapist.badge}
                          </div>
                        )}
                      </div>
                      <div className="flex items-center space-x-2 mt-2">
                        <div className="flex items-center space-x-1">
                          <Star className="text-amber-400 fill-amber-400" size={16} />
                          <span className="font-semibold text-gray-900">{therapist.rating}</span>
                        </div>
                        <span className="text-gray-400">•</span>
                        <span className="text-sm text-gray-600">{therapist.experience} experience</span>
                        {therapist.totalPatients && (
                          <>
                            <span className="text-gray-400">•</span>
                            <span className="text-sm text-gray-600">{therapist.totalPatients} patients</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="inline-block bg-[#c92a2a]/10 text-[#c92a2a] px-3 py-1 rounded-full text-sm font-medium mb-2">
                      {therapist.specialty}
                    </div>
                    <p className="text-gray-700">{therapist.description}</p>
                  </div>

                  <div className="flex flex-col gap-4 border-t border-gray-200 pt-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <span className="text-2xl font-bold text-[#1e3a5f]">₹{therapist.pricePerSession}</span>
                      <span className="text-sm text-gray-600"> per session</span>
                    </div>
                    <Link
                      href={`/therapist/${therapist.id}`}
                      className="inline-flex items-center justify-center rounded-md bg-[#c92a2a] px-6 py-2.5 text-center font-medium text-white transition-colors hover:bg-[#b02525] sm:inline-flex sm:shrink-0"
                    >
                      View Profile & Book
                    </Link>
                  </div>
                </div>

                {/* Quick Availability Preview */}
                <div className="border-t border-gray-200 bg-gray-50 px-6 py-4">
                  <div className="flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Clock size={16} className="text-[#c92a2a]" />
                      <span className="font-medium">Available Today:</span>
                    </div>
                    <span className="text-green-600 font-semibold">24 slots</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#c92a2a]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-[#c92a2a]" size={28} />
              </div>
              <h3 className="font-semibold text-[#1e3a5f] mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">Morning, afternoon, and evening slots available 7 days a week</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#c92a2a]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-[#c92a2a]" size={28} />
              </div>
              <h3 className="font-semibold text-[#1e3a5f] mb-2">Online Sessions</h3>
              <p className="text-gray-600">Secure video calls from the comfort of your home</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#c92a2a]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-[#c92a2a]" size={28} />
              </div>
              <h3 className="font-semibold text-[#1e3a5f] mb-2">Certified Experts</h3>
              <p className="text-gray-600">All therapists are licensed and experienced professionals</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
