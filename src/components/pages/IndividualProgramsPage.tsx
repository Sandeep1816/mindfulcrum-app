import Link from "next/link";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { CheckCircle, Video, Shield, Clock, Heart, Brain, Users } from "lucide-react";

export function IndividualProgramsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#1e3a5f] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl">
                Individual & Family Therapy
              </h1>
              <p className="mb-6 text-lg text-gray-200 sm:text-xl">
                Professional one-on-one online therapy sessions with certified psychologists
              </p>
              <p className="text-lg text-gray-200">
                Confidential, flexible, and tailored to your unique needs
              </p>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758273241078-8eec353836be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVyYXB5JTIwY291bnNlbGluZyUyMHNlc3Npb258ZW58MXx8fHwxNzc1NDg3NzI5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Therapy session"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Mindfulcrum Therapy?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional support when you need it, from the comfort of your space
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="text-green-600" size={28} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Online Sessions</h3>
              <p className="text-gray-600">
                Flexible video or audio sessions from anywhere
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-blue-600" size={28} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Certified Professionals</h3>
              <p className="text-gray-600">
                Licensed psychologists with extensive experience
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-purple-600" size={28} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">
                Book sessions at times that work for you
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-pink-600" size={28} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Complete Confidentiality</h3>
              <p className="text-gray-600">
                Your privacy is our top priority
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Cover */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Areas We Can Help With
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive support for a wide range of mental health concerns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Brain className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Anxiety & Stress</h3>
              <p className="text-gray-600 mb-4">
                Managing overwhelming worry, panic attacks, and chronic stress
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                  <span>Generalized anxiety</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                  <span>Social anxiety</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                  <span>Stress management</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Heart className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Depression</h3>
              <p className="text-gray-600 mb-4">
                Support for persistent sadness, loss of interest, and low mood
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                  <span>Major depression</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                  <span>Seasonal mood changes</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                  <span>Loss of motivation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                <Clock className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Work-Related Burnout</h3>
              <p className="text-gray-600 mb-4">
                Addressing exhaustion, cynicism, and reduced performance
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                  <span>Workplace stress</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                  <span>Career transitions</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                  <span>Work-life balance</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <Heart className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Relationship Issues</h3>
              <p className="text-gray-600 mb-4">
                Navigating conflicts, communication problems, and relationship patterns
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                  <span>Couples counseling</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                  <span>Family dynamics</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                  <span>Communication skills</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Parenting Concerns</h3>
              <p className="text-gray-600 mb-4">
                Support for parenting challenges and family dynamics
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                  <span>Parenting strategies</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                  <span>Child behavior issues</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                  <span>Co-parenting support</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Trauma & Emotional Healing</h3>
              <p className="text-gray-600 mb-4">
                Processing past experiences and building resilience
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                  <span>Trauma recovery</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                  <span>Grief and loss</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                  <span>PTSD support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Getting started is simple and straightforward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Get in Touch</h3>
              <p className="text-gray-600">
                Reach out via our contact form or phone
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Initial Consultation</h3>
              <p className="text-gray-600">
                Brief call to understand your needs and match you with a therapist
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Schedule Sessions</h3>
              <p className="text-gray-600">
                Book appointments at times convenient for you
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Begin Your Journey</h3>
              <p className="text-gray-600">
                Start your path toward better mental health
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1e3a5f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Take the First Step?
          </h2>
          <p className="mb-8 text-lg text-gray-200 sm:text-xl">
            Connect with a certified psychologist today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/therapy-booking"
              className="inline-block px-8 py-4 bg-[#c92a2a] text-white rounded-md hover:bg-[#b02525] transition-colors font-semibold"
            >
              Book a Session Now
            </Link>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-[#1e3a5f] rounded-md hover:bg-gray-100 transition-colors font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}