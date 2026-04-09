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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Book Your Therapy Session
            </h1>
            <p className="text-xl text-gray-200">
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
            <div className="flex items-center space-x-4 text-sm">
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
                  <div className="flex items-start space-x-4 mb-4">
                    <img
                      src={therapist.image}
                      alt={therapist.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-gray-100"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-[#1e3a5f]">{therapist.name}</h3>
                          <p className="text-sm text-gray-600">{therapist.title}</p>
                        </div>
                        {therapist.badge && (
                          <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
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

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <span className="text-2xl font-bold text-[#1e3a5f]">₹{therapist.pricePerSession}</span>
                      <span className="text-sm text-gray-600"> per session</span>
                    </div>
                    <Link
                      href={`/therapist/${therapist.id}`}
                      className="px-6 py-2.5 bg-[#c92a2a] text-white rounded-md hover:bg-[#b02525] transition-colors font-medium"
                    >
                      View Profile & Book
                    </Link>
                  </div>
                </div>

                {/* Quick Availability Preview */}
                <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm">
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
