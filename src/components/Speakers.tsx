type Speaker = {
  name: string;
  title: string;
  bio?: string;
  initials: string;
};

const SPEAKERS: Speaker[] = [
  { name: "Alex Dela Cruz", title: "Founder, TechCorp PH", bio: "Serial founder and angel investor.", initials: "AD" },
  { name: "Maria Santos", title: "CTO, FinNext", bio: "Building fintech products at scale.", initials: "MS" },
  { name: "Juan Reyes", title: "Head of Product, EduWave", bio: "Designing for outcomes.", initials: "JR" },
  { name: "Luisa Garcia", title: "Community Lead, StartupHub", bio: "Ecosystem builder and mentor.", initials: "LG" },
];

export default function Speakers() {
  return (
    <section id="speakers" className="border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Featured Speakers</h2>
          <p className="mt-2 text-black/70 dark:text-white/70">Hear from founders, builders, and ecosystem leaders.</p>
        </div>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPEAKERS.map((s) => (
            <li key={s.name} className="rounded-xl border border-black/10 dark:border-white/10 p-5">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center text-sm font-medium">
                  {s.initials}
                </div>
                <div>
                  <p className="font-medium leading-none">{s.name}</p>
                  <p className="text-sm text-black/60 dark:text-white/60 mt-1">{s.title}</p>
                </div>
              </div>
              {s.bio && <p className="mt-4 text-sm text-black/70 dark:text-white/70">{s.bio}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
