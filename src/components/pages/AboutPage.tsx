import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { Brain, Users, TrendingUp, Award, Target, Heart } from "lucide-react";

export function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#1e3a5f] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl">
              About Mindfulcrum
            </h1>
            <p className="mb-6 text-lg text-gray-200 sm:text-xl">
              Helping Organizations Build Mentally Strong Workplaces
            </p>
            <p className="text-lg text-gray-200">
              Our programs help HR teams & leaders understand psychological factors affecting performance, wellbeing & workplace culture.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What Mindfulcrum Does
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We combine structured assessments, leadership insights & practical recommendations to support organizations in building healthier & more productive teams.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our approach is rooted in evidence-based psychology, designed for real workplace contexts, and focused on measurable outcomes.
              </p>
              <p className="text-lg text-gray-700">
                Whether you're a corporate HR team looking to improve wellbeing, a school seeking behavioral intelligence programs, or an individual seeking therapy, we provide structured support that creates lasting change.
              </p>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758874384683-0accd9fb26ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwd29ya3BsYWNlJTIwd2VsbG5lc3N8ZW58MXx8fHwxNzc1NDg3NzI4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Workplace wellness"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive methodology built on psychological science and practical implementation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Brain className="text-indigo-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Evidence-Based</h3>
              <p className="text-gray-600">
                Our programs are built on proven psychological frameworks and research, not generic wellness advice.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="text-purple-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Context-Specific</h3>
              <p className="text-gray-600">
                We assess your unique organizational culture, challenges, and goals before designing interventions.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-green-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Results-Driven</h3>
              <p className="text-gray-600">
                We provide measurable outcomes through regular assessments, reports, and actionable recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Makes Us Different
            </h2>
            <p className="text-xl text-gray-600">
              Moving beyond superficial wellness initiatives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    On-Site Engagement
                  </h3>
                  <p className="text-gray-700">
                    We don't just send surveys. Our psychologists spend time in your organization, observing dynamics, conducting workshops, and building relationships with your teams.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Leadership-First Focus
                  </h3>
                  <p className="text-gray-700">
                    We believe culture starts at the top. Our programs prioritize leadership behavioral assessments and development because leader wellbeing directly impacts team wellbeing.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Parent Intelligence Innovation
                  </h3>
                  <p className="text-gray-700">
                    For schools, we address a critical market gap with structured parent behavioral programs segmented by child development stages—something rarely available in India.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Practical, Not Academic
                  </h3>
                  <p className="text-gray-700">
                    Our reports don't gather dust. We provide clear, actionable insights with implementation timelines that HR teams can actually execute.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Experienced psychologists dedicated to workplace mental health
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Led by Senior Clinical Psychologists
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Our team consists of licensed psychologists with expertise in organizational psychology, clinical practice, and behavioral science.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-8">
                <div>
                  <div className="text-4xl font-bold text-indigo-600 mb-2">15+</div>
                  <p className="text-gray-600">Years Combined Experience</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
                  <p className="text-gray-600">Organizations Served</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-pink-600 mb-2">100%</div>
                  <p className="text-gray-600">Certified Professionals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1e3a5f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's Build a Healthier Workplace Together
          </h2>
          <p className="mb-8 text-lg text-gray-200 sm:text-xl">
            Get in touch to discuss your organization's needs
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-[#c92a2a] text-white rounded-md hover:bg-[#b02525] transition-colors font-semibold"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}