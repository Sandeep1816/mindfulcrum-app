import Link from "next/link";
import { Phone, ArrowLeft, AlertTriangle } from "lucide-react";
import { stateHelplines, telemanasNational } from "@/data/mental-health-helplines";

export function ResourcesPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-[#1e3a5f]/10 bg-[#1e3a5f] py-14 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm text-white/85 transition-colors hover:text-white"
          >
            <ArrowLeft size={18} />
            Back to home
          </Link>
          <h1 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">Resources</h1>
          <p className="mt-3 text-lg text-white/85">
            Mental health and suicide prevention helpline numbers — state-wise reference for India.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-10 flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-950">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
          <p className="text-sm leading-relaxed">
            If you or someone you know is in immediate danger, contact local emergency services (e.g.{" "}
            <strong>112</strong>) right away. The numbers below are for support and information; availability and
            timings may change — please verify with the organization when possible.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-[#f8f9fb] p-6 md:p-8">
          <div className="flex items-start gap-3">
            <Phone className="mt-1 h-6 w-6 shrink-0 text-[#c92a2a]" strokeWidth={2} />
            <div>
              <h2 className="font-heading text-xl font-semibold text-[#1e3a5f]">{telemanasNational.title}</h2>
              <p className="mt-1 text-sm text-[#1e3a5f]/75">{telemanasNational.note}</p>
              <ul className="mt-4 flex flex-wrap gap-3">
                {telemanasNational.numbers.map((n) => (
                  <li
                    key={n}
                    className="rounded-lg border border-[#c92a2a]/30 bg-white px-4 py-2 font-mono text-base font-semibold text-[#1e3a5f] shadow-sm"
                  >
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 space-y-12">
          {stateHelplines.map((section) => (
            <section key={section.state} className="scroll-mt-24" id={slugify(section.state)}>
              <h2 className="border-b border-gray-200 pb-2 font-heading text-2xl font-semibold text-[#1e3a5f]">
                {section.state}
              </h2>
              <ul className="mt-6 space-y-6">
                {section.blocks.map((block) => (
                  <li key={`${section.state}-${block.name}`} className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                    <h3 className="font-semibold text-[#1e3a5f]">{block.name}</h3>
                    <p className="mt-2 break-words text-sm leading-relaxed text-gray-700">{block.detail}</p>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <p className="mt-12 text-center text-xs text-gray-500">
          Information compiled for awareness. Mindfulcrum does not operate these helplines. For the most current
          numbers and hours, please check with the respective organizations.
        </p>
      </section>
    </div>
  );
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
