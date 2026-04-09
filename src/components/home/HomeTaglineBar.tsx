export function HomeTaglineBar() {
  return (
    <section className="border-y border-white/10 bg-[#c92a2a] py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 font-heading text-lg font-semibold tracking-tight text-white sm:text-xl md:text-2xl">
            <span>Leadership</span>
            <span className="text-white/40" aria-hidden>
              ·
            </span>
            <span>Wellbeing</span>
            <span className="text-white/40" aria-hidden>
              ·
            </span>
            <span>Performance</span>
          </p>
          <p className="mt-2 text-sm font-medium text-white/85 md:text-base">
            Signifying a pivotal point for mental balance
          </p>
        </div>
      </div>
    </section>
  );
}
