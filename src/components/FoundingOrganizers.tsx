type Organizer = { name: string; role: string; initials: string };

const ORGANIZERS: Organizer[] = [
  { name: "Nico Dev", role: "Lead Organizer", initials: "ND" },
  { name: "Ana Cruz", role: "Program Director", initials: "AC" },
  { name: "Paolo Reyes", role: "Partnerships", initials: "PR" },
  { name: "Mika Tan", role: "Operations", initials: "MT" },
];

export default function FoundingOrganizers() {
  return (
    <section id="organizers" className="border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Founding Organizers</h2>
          <p className="mt-2 text-black/70 dark:text-white/70">The team behind the Philippine Startup community.</p>
        </div>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ORGANIZERS.map((o) => (
            <li key={o.name} className="rounded-xl border border-black/10 dark:border-white/10 p-5">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center text-sm font-medium">
                  {o.initials}
                </div>
                <div>
                  <p className="font-medium leading-none">{o.name}</p>
                  <p className="text-sm text-black/60 dark:text-white/60 mt-1">{o.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
