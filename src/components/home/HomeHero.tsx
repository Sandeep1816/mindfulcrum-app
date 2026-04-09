import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-[#1e3a5f] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNHYyaDJ2LTJoLTJ6bS0yLTJ2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0tMi00djJoMnYtMmgtMnptMCA0djJoMnYtMmgtMnptLTItNHYyaDJ2LTJoLTJ6bTAgNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-[0.07]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f] via-[#1e3a5f] to-[#152a45]" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <p className="mb-5 inline-flex items-center rounded-sm border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/95 backdrop-blur-sm">
              Where Psychology Powers High-Performing Workplaces
            </p>
            <h1 className="font-serif text-4xl font-semibold leading-[1.12] tracking-tight md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              Healthy Teams.
              <br />
              Strong Leaders.
              <br />
              Better Organizations.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl">
              Mindfulcrum helps organizations improve employee wellbeing, reduce burnout & strengthen leadership
              through structured workplace psychology programs.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/65">
              Designed for HR leaders who want practical insights, measurable outcomes & healthier workplace cultures.
            </p>
            <div className="mt-10">
              <Link
                href="/corporate-programs"
                className="group inline-flex items-center gap-2 rounded-sm border border-[#c92a2a] bg-[#c92a2a] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-black/10 transition-all hover:border-[#b02525] hover:bg-[#b02525]"
              >
                <span>Explore Corporate Programs</span>
                <ArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#c92a2a]/30 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/15 shadow-2xl shadow-black/25 ring-1 ring-white/10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1739298061766-e2751d92e9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwYnVzaW5lc3MlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NzU0NTM2MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Diverse business team collaborating"
                className="aspect-[4/3] w-full object-cover lg:aspect-auto lg:min-h-[22rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
