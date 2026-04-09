import Link from "next/link";

export function HomeBottomCta() {
  return (
    <section className="relative overflow-hidden bg-[#1e3a5f] py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNHYyaDJ2LTJoLTJ6bS0yLTJ2Mmgydi0yaC0yem0wIDR2Mmgydi0yaC0yem0tMi00djJoMnYtMmgtMnptMCA0djJoMnYtMmgtMnptLTItNHYyaDJ2LTJoLTJ6bTAgNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-[0.06]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c92a2a]">Next step</p>
        <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Ready to Build a Mentally Strong Workplace?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/80">
          Get a customized program proposal for your organization
        </p>

        <div className="mx-auto mt-10 h-px max-w-xs bg-gradient-to-r from-transparent via-white/25 to-transparent" />

        <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-sm border border-[#c92a2a] bg-[#c92a2a] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/15 transition-colors hover:border-[#b02525] hover:bg-[#b02525] md:min-w-[11rem]"
          >
            Request Pricing
          </Link>
          <Link
            href="/corporate-audit"
            className="inline-flex items-center justify-center rounded-sm border border-white/25 bg-white px-8 py-3.5 text-sm font-semibold text-[#1e3a5f] shadow-sm transition-colors hover:bg-white/95 md:min-w-[11rem]"
          >
            Try Leadership Audit
          </Link>
        </div>
      </div>
    </section>
  );
}
