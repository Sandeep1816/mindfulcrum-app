import { Brain, Target, TrendingUp, Shield } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "Science-Backed",
    description: "Programs built on psychological research and proven frameworks",
  },
  {
    icon: Target,
    title: "On-Site Engagement",
    description: "Real workplace observation and hands-on intervention programs",
  },
  {
    icon: TrendingUp,
    title: "Measurable Outcomes",
    description: "Comprehensive reports with actionable insights and progress tracking",
  },
  {
    icon: Shield,
    title: "Confidential & Safe",
    description: "Professional standards with complete privacy for all participants",
  },
] as const;

export function HomeWhyChooseUs() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c92a2a]">Why us</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-[#1e3a5f] md:text-4xl">
            Why Leading Organizations Choose Mindfulcrum
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#1e3a5f]/70">
            Evidence-based programs designed by workplace psychologists to create measurable impact
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8">
          {pillars.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="flex flex-col rounded-2xl border border-gray-200/90 bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#c92a2a]/35 hover:shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#1e3a5f] text-white shadow-inner">
                <Icon size={26} strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="mt-6 font-heading text-xl font-semibold text-[#1e3a5f]">{title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[#1e3a5f]/70">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
