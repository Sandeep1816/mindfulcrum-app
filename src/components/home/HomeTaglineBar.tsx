export function HomeTaglineBar() {
  return (
    <section className="border-y border-white/10 bg-[#c92a2a] py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="font-serif text-xl font-semibold tracking-tight text-white md:text-2xl">
            <span className="inline-block px-2">Leadership</span>
            <span className="text-white/40" aria-hidden>
              {" "}
              ·{" "}
            </span>
            <span className="inline-block px-2">Wellbeing</span>
            <span className="text-white/40" aria-hidden>
              {" "}
              ·{" "}
            </span>
            <span className="inline-block px-2">Performance</span>
          </p>
          <p className="mt-2 text-sm font-medium text-white/85 md:text-base">
            Signifying a pivotal point for mental balance
          </p>
        </div>
      </div>
    </section>
  );
}
