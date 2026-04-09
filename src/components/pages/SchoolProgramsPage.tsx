import Link from "next/link";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import { CheckCircle, Users, BookOpen, GraduationCap, Heart, AlertCircle } from "lucide-react";

export function SchoolProgramsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#1e3a5f] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                School & College Programs
              </h1>
              <p className="text-xl text-gray-200 mb-6">
                Comprehensive mental health programs for students, teachers & parents
              </p>
              <p className="text-lg text-gray-200">
                Addressing the critical gap in parent behavioral intelligence and student wellbeing
              </p>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758270704524-596810e891b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNsYXNzcm9vbSUyMGxlYXJuaW5nfGVufDF8fHx8MTc3NTM4ODkwM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Students in classroom"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reality Check Context */}
      <section className="py-12 bg-amber-50 border-y border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start space-x-4">
            <AlertCircle className="text-amber-600 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Addressing a Critical Gap in Indian Education
              </h3>
              <p className="text-gray-700 mb-3">
                While government mandates (especially Karnataka) require counsellors in schools and institutions like NIMHANS support mental health frameworks, most schools lack structured parent and behavioral intelligence programs.
              </p>
              <p className="text-gray-900 font-medium">
                Mindfulcrum fills this gap with comprehensive Parent + Child Behaviour Intelligence Systems
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CampusWell Program */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12 mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="text-white" size={24} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Mindfulcrum CampusWell</h2>
                <p className="text-lg text-gray-600">Institution Partnership Model</p>
              </div>
            </div>
            <p className="text-lg text-gray-700">
              For Schools & Colleges seeking comprehensive on-campus mental health support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                <Users className="text-purple-600" size={20} />
                <span>Program Structure</span>
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                  <span className="text-gray-700">On-campus Psychologist (Weekly / Bi-weekly visits)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                  <span className="text-gray-700">Student Behavioural Screening</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                  <span className="text-gray-700">Teacher Training Modules</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                  <span className="text-gray-700">Confidential student sessions</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                <BookOpen className="text-purple-600" size={20} />
                <span>Program Modules</span>
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                  <span className="text-gray-700">Emotional Regulation for Students</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                  <span className="text-gray-700">Peer Pressure & Social Media Behaviour</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                  <span className="text-gray-700">Academic Stress Management</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                  <span className="text-gray-700">Bullying & Identity Issues</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Intelligence Program - FLAGSHIP */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🚀 FLAGSHIP PROGRAM — MARKET DIFFERENTIATOR
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mindfulcrum Parent Intelligence Program
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The only structured parent behavioral intelligence program segmented by child development stages
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">12</div>
                <p className="text-gray-700">Specialized Programs</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-600 mb-2">2</div>
                <p className="text-gray-700">Age Group Segments</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-2">100%</div>
                <p className="text-gray-700">Led by Senior Psychologists</p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <Heart className="text-pink-600" size={24} />
                <span>Delivery Model</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium text-gray-900">On-campus sessions OR Webinars</p>
                    <p className="text-sm text-gray-600">Flexible format based on school preference</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium text-gray-900">Led by Senior Psychologists</p>
                    <p className="text-sm text-gray-600">Expert-led sessions with Q&A</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium text-gray-900">Optional 1:1 Consultations</p>
                    <p className="text-sm text-gray-600">Add-on parent counseling available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grades 1-5 Programs */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl p-6 mb-6">
              <h3 className="text-2xl font-bold mb-2">Grades 1–5 Programs</h3>
              <p className="text-blue-100">Early childhood & primary school years (6 specialized programs)</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="font-bold text-blue-600">1</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Understanding Child Personality Types</h4>
                <p className="text-sm text-gray-600">
                  Recognizing different temperaments and adapting parenting styles
                </p>
              </div>

              <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="font-bold text-blue-600">2</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Emotional Development in Early Years</h4>
                <p className="text-sm text-gray-600">
                  Supporting emotional intelligence from ages 6-10
                </p>
              </div>

              <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="font-bold text-blue-600">3</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Screen Time & Attention Behaviour</h4>
                <p className="text-sm text-gray-600">
                  Managing digital exposure and building focus
                </p>
              </div>

              <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="font-bold text-blue-600">4</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Building Discipline Without Fear</h4>
                <p className="text-sm text-gray-600">
                  Positive discipline techniques for young children
                </p>
              </div>

              <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="font-bold text-blue-600">5</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Identifying Learning & Behavioural Gaps</h4>
                <p className="text-sm text-gray-600">
                  Early detection of developmental concerns
                </p>
              </div>

              <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="font-bold text-blue-600">6</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Parent-Child Communication Foundations</h4>
                <p className="text-sm text-gray-600">
                  Building open, trust-based dialogue early
                </p>
              </div>
            </div>
          </div>

          {/* Grades 6-12 Programs */}
          <div>
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-6 mb-6">
              <h3 className="text-2xl font-bold mb-2">Grades 6–12 Programs</h3>
              <p className="text-purple-100">Pre-teen & teenage years (6 specialized programs)</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-purple-200 rounded-xl p-6">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="font-bold text-purple-600">1</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Teenage Brain & Behaviour Decoding</h4>
                <p className="text-sm text-gray-600">
                  Understanding adolescent development and mood changes
                </p>
              </div>

              <div className="bg-white border-2 border-purple-200 rounded-xl p-6">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="font-bold text-purple-600">2</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Academic Pressure & Anxiety Handling</h4>
                <p className="text-sm text-gray-600">
                  Supporting teens through exam stress and expectations
                </p>
              </div>

              <div className="bg-white border-2 border-purple-200 rounded-xl p-6">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="font-bold text-purple-600">3</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Social Media & Identity Formation</h4>
                <p className="text-sm text-gray-600">
                  Navigating digital identity and peer influence
                </p>
              </div>

              <div className="bg-white border-2 border-purple-200 rounded-xl p-6">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="font-bold text-purple-600">4</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Handling Anger, Rebellion & Withdrawal</h4>
                <p className="text-sm text-gray-600">
                  Responding to challenging teenage behaviors
                </p>
              </div>

              <div className="bg-white border-2 border-purple-200 rounded-xl p-6">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="font-bold text-purple-600">5</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Career Confusion & Decision Psychology</h4>
                <p className="text-sm text-gray-600">
                  Guiding teens through career choices without pressure
                </p>
              </div>

              <div className="bg-white border-2 border-purple-200 rounded-xl p-6">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="font-bold text-purple-600">6</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Building Trust-Based Parent Relationships</h4>
                <p className="text-sm text-gray-600">
                  Maintaining connection during independence years
                </p>
              </div>
            </div>
          </div>

          {/* Outcomes */}
          <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Program Outcomes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-purple-600" size={28} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Behaviourally Aware Parents</h4>
                <p className="text-gray-600">
                  Parents become informed decision makers with psychological understanding
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="text-blue-600" size={28} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Reduced Behavioral Incidents</h4>
                <p className="text-gray-600">
                  Schools see fewer disciplinary issues and conflicts
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-green-600" size={28} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Improved Student Wellbeing</h4>
                <p className="text-gray-600">
                  Students show better emotional stability and academic performance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1e3a5f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your School Community?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Get a customized program proposal for your institution
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-[#c92a2a] text-white rounded-md hover:bg-[#b02525] transition-colors font-semibold"
          >
            Request Partnership Information
          </Link>
        </div>
      </section>
    </div>
  );
}