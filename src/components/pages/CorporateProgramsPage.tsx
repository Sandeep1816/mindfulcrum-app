import Link from "next/link";
import { CheckCircle, Calendar, Users, TrendingUp, Award, Target } from "lucide-react";

export function CorporateProgramsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#1e3a5f] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl">
              Corporate Mental Health Programs
            </h1>
            <p className="text-lg text-gray-200 sm:text-xl">
              Structured 3, 6 & 12-month programs designed to improve employee wellbeing, strengthen leadership & create healthier workplace cultures.
            </p>
          </div>
        </div>
      </section>

      {/* Program Tiers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mindfulcrum Engage - 3 Month */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8 md:p-12 mb-8 border-l-8 border-[#c92a2a]">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-[#c92a2a] rounded-lg flex items-center justify-center">
                  <Target className="text-white" size={24} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#1e3a5f]">Mindfulcrum Engage</h2>
                  <p className="text-lg text-gray-600">3-Month Program</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                <strong>Best for:</strong> Early-stage intervention, pilot programs, fast-impact organizations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-4 flex items-center space-x-2">
                  <Calendar className="text-[#c92a2a]" size={20} />
                  <span>Program Structure</span>
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-700">1 On-site Visit per Week (Workshops / Open Clinics / Observations)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-700">1 Monthly Psychological Assessment (Org + Team Level)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-700">Final Comprehensive Employee Wellbeing Report</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-700">1 Senior Leadership Training Session</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-700">Cohort Size: Max 7 Leaders</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-8">
                <div className="bg-white border border-gray-200 rounded-xl p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                    <Target className="text-indigo-600" size={20} />
                    <span>Focus Areas</span>
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                      <span className="text-gray-700">Stress & Burnout Identification</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                      <span className="text-gray-700">Communication & Workplace Relationships</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                      <span className="text-gray-700">Emotional Regulation at Work</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                      <span className="text-gray-700">Early Risk Detection</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                    <TrendingUp className="text-indigo-600" size={20} />
                    <span>Deliverables</span>
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                      <span className="text-gray-700">Monthly Insight Reports</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                      <span className="text-gray-700">Burnout Risk Heatmap</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                      <span className="text-gray-700">Leadership Behavioural Snapshot</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                      <span className="text-gray-700">Final Strategic Report with Recommendations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Mindfulcrum Transform - 6 Month */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12 mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="text-white" size={24} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Mindfulcrum Transform</h2>
                  <p className="text-lg text-gray-600">6-Month Program</p>
                </div>
              </div>
              <p className="text-lg text-gray-700">
                <strong>Best for:</strong> Culture building + structured behavioural transformation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                  <Calendar className="text-purple-600" size={20} />
                  <span>Program Structure</span>
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-700">1 On-site Visit per Week</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-700">Monthly Assessments + Final Report</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-700">1 Senior Leadership Cohort Training (Max 10)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-700">Leadership Assessments (All participants)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-purple-100 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                  <Award className="text-purple-600" size={20} />
                  <span>Additional Component: Jumpstart Program</span>
                </h3>
                <p className="text-sm font-medium text-purple-700 mb-3">Flagship New Joiner Program</p>
                <p className="text-gray-700 mb-4">
                  <strong>Objective:</strong> Bridge campus-to-corporate mindset gap
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-gray-900 mb-2">Framework Used:</p>
                    <ul className="space-y-1 text-sm text-gray-700 ml-4">
                      <li>• Johari Window (Self-Awareness Model)</li>
                      <li>• Behavioural Adaptability</li>
                      <li>• Team Collaboration Readiness</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-2">Outcomes:</p>
                    <ul className="space-y-1 text-sm text-gray-700 ml-4">
                      <li>• Faster onboarding</li>
                      <li>• Reduced early attrition</li>
                      <li>• Higher team alignment</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mindfulcrum Elevate - 12 Month */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12 mb-8 border-2 border-amber-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <Award className="text-white" size={24} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Mindfulcrum Elevate</h2>
                  <p className="text-lg text-gray-600">1-Year Flagship Program</p>
                </div>
              </div>
              <p className="text-lg text-gray-700">
                <strong>Best for:</strong> Organizations serious about becoming a "Great Place to Work" in mental health
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                  <Calendar className="text-amber-600" size={20} />
                  <span>Program Structure</span>
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-700">Weekly On-site Engagement</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-700">Monthly Assessments + Annual Report</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-700">Jumpstart Program (New Joiners)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-700">4 Senior Leadership Cohorts (Max 10 each)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-700">4 Leadership Assessments</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-amber-100 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                  <Users className="text-amber-600" size={20} />
                  <span>Advanced: 4 Offsite Team Building Experiences</span>
                </h3>
                <p className="text-gray-700 mb-4">
                  Custom-designed physical + psychological simulations
                </p>
                <div className="space-y-3">
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <p className="font-medium text-gray-900">Survival Strategy Challenge</p>
                    <p className="text-sm text-gray-600">Team Decision Making</p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <p className="font-medium text-gray-900">Blind Trust Navigation</p>
                    <p className="text-sm text-gray-600">Trust & Communication</p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <p className="font-medium text-gray-900">Resource War Game</p>
                    <p className="text-sm text-gray-600">Collaboration vs Competition</p>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <p className="font-medium text-gray-900">Culture Code Simulation</p>
                    <p className="text-sm text-gray-600">Values in Action</p>
                  </div>
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
            Ready to Get Started?
          </h2>
          <p className="mb-8 text-lg text-gray-200 sm:text-xl">
            Let's discuss which program is right for your organization
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[#c92a2a] text-white rounded-md hover:bg-[#b02525] transition-colors font-semibold"
          >
            Request Pricing & Proposal
          </Link>
        </div>
      </section>
    </div>
  );
}