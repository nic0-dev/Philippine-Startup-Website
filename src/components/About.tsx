export default function About() {
  return (
    <section id="about" className="border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-24 py-16 sm:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="font-mono uppercase text-xs sm:text-sm tracking-widest text-[var(--brand-red)] py-4">Why It Matters</p>
            <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"></h1>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">About PHSW 2025</h2>
            <p className="mt-3 text-black/70 dark:text-white/70">
              Philippine Startup Week (PHSW) 2025 returns for its seventh edition, backed by DOST, DTI, and DICT, and is set to inspire, empower, and connect.
            </p>
            <p className="mt-3 text-black/70 dark:text-white/70">
              From November 10 to 14, we bring together the brightest minds across sectors to share insights, build partnerships, and showcase cutting-edge startup solutions. As the country’s premier weeklong startup event, PHSW is where innovation meets opportunity.
            </p>
          </div>
          <div>
            <ul className="mt-4 sm:mt-16 grid gap-4 text-sm">
              <li className="p-4 rounded-lg border border-black/10 dark:border-white/10">
                Leverage the momentum of the Innovative Startup Act and the Philippine Startup Development Program.
              </li>
              <li className="p-4 rounded-lg border border-black/10 dark:border-white/10">
                Fuel regional growth, spotlighting trends like deep tech, sustainability, and future-of-work.
              </li>
              <li className="p-4 rounded-lg border border-black/10 dark:border-white/10">
                Create pathways for startups—from founders to funding to global expansion.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
