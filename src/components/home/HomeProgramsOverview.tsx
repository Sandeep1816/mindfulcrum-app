import Link from "next/link";
import { ArrowRight, Award, Brain, Shield, CheckCircle } from "lucide-react";

const programs = [
  {
    href: "/corporate-programs",
    icon: Award,
    title: "Corporate Programs",
    description:
      "3, 6 & 12-month structured programs for organizational wellbeing and leadership development",
    bullets: [
      "Weekly on-site psychologist visits",
      "Leadership behavioral assessments",
      "Comprehensive wellbeing reports",
    ],
    extraLink: null as { href: string; label: string } | null,
  },
  {
    href: "/school-programs",
    icon: Brain,
    title: "School Programs",
    description: "CampusWell & Parent Intelligence programs for students, teachers & parents",
    bullets: ["Student behavioral screening", "12 parent behavioral programs", "Teacher training modules"],
    extraLink: null,
  },
  {
    href: "/individual-programs",
    icon: Shield,
    title: "Individual Therapy",
    description: "One-on-one online therapy sessions with certified psychologists",
    bullets: ["Flexible online sessions", "Certified professionals", "Complete confidentiality"],
    extraLink: { href: "/therapy-booking", label: "Book a session" },
  },
] as const;

export function HomeProgramsOverview() {
  return (
    <section className="border-t border-gray-100 bg-[#f8f9fb] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c92a2a]">Solutions</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-[#1e3a5f] md:text-4xl">
            Comprehensive Solutions for Every Need
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#1e3a5f]/70">
            From corporate leadership development to individual therapy
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:mt-16 lg:grid-cols-3">
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <article
                key={program.title}
                className="flex flex-col overflow-hidden rounded-2xl border border-gray-200/90 bg-white shadow-sm transition-all duration-300 hover:border-[#1e3a5f]/15 hover:shadow-lg"
              >
                <div className="h-1.5 bg-[#c92a2a]" />
                <div className="flex flex-1 flex-col p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1e3a5f] text-white shadow-sm">
                    <Icon size={24} strokeWidth={1.75} aria-hidden />
                  </div>
                  <h3 className="mt-6 font-serif text-2xl font-semibold text-[#1e3a5f]">{program.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#1e3a5f]/70">{program.description}</p>

                  <ul className="mt-6 flex-1 space-y-3 border-t border-gray-100 pt-6">
                    {program.bullets.map((line) => (
                      <li key={line} className="flex gap-3 text-sm text-[#1e3a5f]/85">
                        <CheckCircle
                          className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[#c92a2a]"
                          strokeWidth={2}
                          aria-hidden
                        />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-col gap-3 border-t border-gray-100 pt-6">
                    <Link
                      href={program.href}
                      className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#c92a2a] transition-colors hover:text-[#b02525]"
                    >
                      Learn more
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                    </Link>
                    {program.extraLink && (
                      <Link
                        href={program.extraLink.href}
                        className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#1e3a5f] transition-colors hover:text-[#c92a2a]"
                      >
                        {program.extraLink.label}
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href="/therapy-booking"
            className="group inline-flex items-center gap-2 rounded-sm border border-[#c92a2a] bg-[#c92a2a] px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-colors hover:border-[#b02525] hover:bg-[#b02525] md:text-base"
          >
            Browse All Therapists & Book Now
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
