import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-[#1e3a5f] text-white">
      {/* Soft ambient light */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-[#c92a2a]/15 blur-[100px] sm:h-[34rem] sm:w-[34rem]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-[#2d4a6f]/40 blur-[80px]"
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNHYyaDJ2LTJoLTJ6bS0yLTJ2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0tMi00djJoMnYtMmgtMnptMCA0djJoMnYtMmgtMnptLTItNHYyaDJ2LTJoLTJ6bTAgNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-[0.07]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f] via-[#1e3a5f]/98 to-[#152a45]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="order-2 flex flex-col lg:order-1">
            <div className="space-y-5">
              <p className="inline-flex w-fit max-w-full flex-wrap items-center rounded-full border border-white/15 bg-white/[0.07] px-3.5 py-2 text-[10px] font-semibold uppercase leading-snug tracking-[0.14em] text-white/90 shadow-sm shadow-black/10 backdrop-blur-sm sm:px-4 sm:text-[11px] sm:tracking-[0.16em]">
                Where Psychology Powers High-Performing Workplaces
              </p>
              <div className="h-1 w-11 rounded-full bg-[#c92a2a]" aria-hidden />
              <h1 className="font-heading text-[clamp(1.5rem,3.6vw+0.35rem,2.65rem)] font-semibold leading-[1.2] tracking-tight text-balance text-white drop-shadow-sm md:leading-[1.15]">
                Build Resilient Teams.
                <br />
                Develop Leaders Who Deliver.
                <br />
                Create Organizations That Thrive.
              </h1>
            </div>

            <div className="mt-7 max-w-xl space-y-4 border-l-2 border-white/10 pl-5 sm:pl-6">
              <p className="text-base leading-relaxed text-white/[0.88] md:text-[1.05rem] md:leading-relaxed">
                Mindfulcrum partners with forward-thinking Organizations to reduce burnout, elevate leadership performance
                and build psychologically strong workplaces through structured, data-driven interventions.
              </p>
              <p className="text-sm leading-relaxed text-white/60 md:text-[0.95rem]">
                Designed for Organizations who demand measurable impact, not just engagement.
              </p>
            </div>

            <div className="mt-9 sm:mt-10">
              <Link
                href="/corporate-programs"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#c92a2a] bg-[#c92a2a] px-6 py-3.5 text-[0.95rem] font-semibold text-white shadow-lg shadow-[#0f172a]/25 ring-1 ring-white/10 transition-all hover:border-[#b02525] hover:bg-[#b02525] hover:shadow-xl hover:shadow-[#0f172a]/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c92a2a] sm:inline-flex sm:w-auto sm:px-8"
              >
                <span>Explore Corporate Programs</span>
                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="absolute -inset-1 rounded-[1.125rem] bg-gradient-to-br from-[#c92a2a]/35 via-transparent to-[#1e3a5f]/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.125rem] border border-white/20 bg-[#152a45]/50 shadow-2xl shadow-black/30 ring-1 ring-white/10">
              <div className="relative aspect-[4/5] w-full sm:aspect-[4/3] lg:aspect-auto lg:min-h-[30rem] xl:min-h-[36rem]">
                <Image
                  src="/images/herotwo.jpeg"
                  alt="Workplace collaboration and resilient teams"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/50 via-transparent to-[#0f172a]/10"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10"
                  aria-hidden
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
