export function HomeStatistics() {
  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "50+", label: "Organizations Served" },
    { value: "100%", label: "Certified Psychologists" },
    { value: "12", label: "Specialized Programs" },
  ];

  return (
    <section className="border-b border-gray-100 bg-[#f8f9fb] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {stats.map((item) => (
            <div
              key={item.label}
              className="group relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-8 text-center shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-[#c92a2a]" aria-hidden />
              <div className="font-serif text-4xl font-semibold tracking-tight text-[#1e3a5f] md:text-5xl">
                {item.value}
              </div>
              <p className="mt-3 text-sm font-medium leading-snug text-[#1e3a5f]/70">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
